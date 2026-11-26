import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import {
  footerMarkup,
  headerMarkup,
  mainMarkup,
  modalMarkup,
  topChromeMarkup,
} from './components/LegacyMarkup'
import TaxonomyBook from './components/TaxonomyBook'
import BRGIntro from './components/intro/BRGIntro'

function loadLegacyScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)
    if (existing) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.src = src
    script.async = false
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.body.appendChild(script)
  })
}

function HomePage() {
  const [taxonomyTarget, setTaxonomyTarget] = useState<HTMLElement | null>(null)

  useEffect(() => {
    let cancelled = false

    const target = document.getElementById('taxonomy-book-root')
    if (target) setTaxonomyTarget(target)

    const initializeLegacyInteractions = async () => {
      await loadLegacyScript('/js/geospatial-globe.js')
      if (cancelled) return
      await loadLegacyScript('/js/main.js')
      if (cancelled) return
    }

    void initializeLegacyInteractions()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: topChromeMarkup }} />
      <div dangerouslySetInnerHTML={{ __html: headerMarkup }} />
      <div dangerouslySetInnerHTML={{ __html: mainMarkup }} />
      <div dangerouslySetInnerHTML={{ __html: footerMarkup }} />
      <div dangerouslySetInnerHTML={{ __html: modalMarkup }} />
      {taxonomyTarget && createPortal(<TaxonomyBook />, taxonomyTarget)}
    </>
  )
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [introBlocking, setIntroBlocking] = useState(true)
  const [homepageReady, setHomepageReady] = useState(false)
  const homepage = useRef<HTMLDivElement>(null)
  const handoffTimer = useRef<number | null>(null)
  const focusAfterRelease = useRef(false)

  useLayoutEffect(() => {
    if (homepage.current) homepage.current.inert = introBlocking
    if (!introBlocking && focusAfterRelease.current) {
      const heading = document.querySelector<HTMLElement>('.hero-headline')
      if (heading) {
        heading.tabIndex = -1
        heading.focus({ preventScroll: true })
      }
      focusAfterRelease.current = false
    }
  }, [introBlocking, showIntro])

  useEffect(() => () => {
    if (handoffTimer.current !== null) window.clearTimeout(handoffTimer.current)
  }, [])

  const completeIntro = () => {
    setHomepageReady(true)
    setIntroBlocking(false)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      focusAfterRelease.current = true
      setShowIntro(false)
      return
    }

    if (handoffTimer.current !== null) window.clearTimeout(handoffTimer.current)
    handoffTimer.current = window.setTimeout(() => {
      focusAfterRelease.current = true
      setShowIntro(false)
    }, 800)
  }

  useEffect(() => {
    let previousScrollY = window.scrollY

    const handleScroll = () => {
      const header = document.querySelector<HTMLElement>('.brg-header')
      if (!header) return

      const currentScrollY = window.scrollY
      header.style.transition = 'transform 280ms cubic-bezier(0.16, 1, 0.3, 1)'

      if (
        currentScrollY <= 30
        || document.body.classList.contains('drawer-open')
        || document.body.classList.contains('modal-open')
      ) {
        header.style.transform = 'translateY(0)'
      } else if (currentScrollY - previousScrollY > 2) {
        header.style.transform = 'translateY(-100%)'
      } else if (previousScrollY - currentScrollY > 2) {
        header.style.transform = 'translateY(0)'
      }

      previousScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <BrowserRouter>
      <div ref={homepage} aria-hidden={introBlocking}>
        {homepageReady && (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </div>
      {showIntro && (
        <div className={`brg-intro-overlay${introBlocking ? '' : ' is-departing'}`} aria-hidden={!introBlocking}>
          <BRGIntro onComplete={completeIntro} />
        </div>
      )}
    </BrowserRouter>
  )
}
