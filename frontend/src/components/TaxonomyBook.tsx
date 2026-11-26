import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { BookScene } from './taxonomy-book/BookScene'
import { backCoverSpread, industries, spreadThemes, totalSpreads } from './taxonomy-book/bookData'
import './taxonomy-book.css'

export default function TaxonomyBook() {
  const host = useRef<HTMLDivElement>(null)
  const scene = useRef<BookScene | null>(null)
  const [spread, setSpread] = useState(0)
  const [themeSpread, setThemeSpread] = useState(0)
  const [opened, setOpened] = useState(false)
  const [contents, setContents] = useState(false)
  const [unavailable, setUnavailable] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [mobileSide, setMobileSide] = useState(0)
  const soundEnabledRef = useRef(true)
  const pageFlipAudio = useRef<HTMLAudioElement | null>(null)

  const playPageSound = () => {
    const audio = pageFlipAudio.current
    if (!soundEnabledRef.current || !audio) return

    audio.pause()
    audio.currentTime = 0
    void audio.play().catch((error: unknown) => {
      console.warn('Unable to play the book page-turn sound.', error)
    })
  }

  useEffect(() => {
    if (!host.current) return
    const audio = new Audio('/assets/audio/dragon-studio-flipping-book-page-499646.mp3')
    audio.preload = 'auto'
    pageFlipAudio.current = audio
    try {
      scene.current = new BookScene(
        host.current,
        (index, isOpen) => {
          setSpread(index)
          setOpened(isOpen)
        },
        playPageSound,
        setThemeSpread,
      )
    } catch {
      setUnavailable(true)
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') scene.current?.next()
      if (event.key === 'ArrowLeft') scene.current?.previous()
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      scene.current?.dispose()
      window.removeEventListener('keydown', handleKey)
      audio.pause()
      pageFlipAudio.current = null
    }
  }, [])

  const current = spread > 0 && spread < backCoverSpread ? industries[spread - 1] : null
  const theme = spreadThemes[themeSpread]
  const themeStyle = {
    '--taxonomy-primary': theme.primary,
    '--taxonomy-secondary': theme.secondary,
    '--taxonomy-accent': theme.accent,
    '--taxonomy-highlight': theme.highlight,
  } as CSSProperties
  const jump = (index: number) => {
    scene.current?.goTo(index)
    setContents(false)
  }

  const toggleSound = () => {
    const next = !soundEnabledRef.current
    soundEnabledRef.current = next
    setSoundEnabled(next)
  }

  const switchMobileSide = () => {
    const nextSide = mobileSide ? 0 : 1
    setMobileSide(nextSide)
    scene.current?.setMobileSide(nextSide)
  }

  return (
    <div id="discovery" className={`taxonomy-book-shell ${opened ? 'is-open' : 'is-closed'}`} style={themeStyle}>
      <div className="taxonomy-book-heading">
        <span className="taxonomy-book-eyebrow">✦ 01 / BUSINESS TAXONOMY</span>
        <h2>{opened ? current?.name || 'The complete perspective.' : 'A world of business.'}</h2>
        <p>
          {opened
            ? 'Explore the industries that shape our world, one considered page at a time.'
            : `An interactive atlas of ${industries.length} industries across the global economy.`}
        </p>
      </div>

      <button
        className="taxonomy-index-button"
        type="button"
        aria-expanded={contents}
        onClick={() => setContents((value) => !value)}
      >
        Explore the index
      </button>

      {contents && (
        <aside className="taxonomy-index-panel" aria-label="Business Taxonomy index">
          <div className="taxonomy-index-header">
            <strong>Inside the atlas</strong>
            <button type="button" aria-label="Close index" onClick={() => setContents(false)}>×</button>
          </div>
          {['Business Taxonomy', ...industries.map((industry) => industry.name), 'Back cover'].map((name, index) => (
            <button type="button" key={name} onClick={() => jump(index)}>
              <span>{String(index).padStart(2, '0')}</span>
              {name}
            </button>
          ))}
        </aside>
      )}

      <div className="taxonomy-book-stage">
        <div
          ref={host}
          className="taxonomy-book-canvas"
          aria-label="Interactive 3D business taxonomy book"
        />
        {unavailable && (
          <div className="taxonomy-book-unavailable">
            <strong>The Business Taxonomy Atlas</strong>
            <p>WebGL is unavailable in this browser.</p>
          </div>
        )}
      </div>

      <div className="taxonomy-book-controls">
        {!opened ? (
          <div className="taxonomy-primary-actions">
            <button type="button" className="taxonomy-open-button" onClick={() => scene.current?.open()} disabled={unavailable}>
              Open book <span aria-hidden="true">→</span>
            </button>
            <button type="button" className={`taxonomy-sound-button ${soundEnabled ? 'is-active' : ''}`} onClick={toggleSound} aria-pressed={soundEnabled}>
              {soundEnabled ? 'Sound on' : 'Sound off'}
            </button>
          </div>
        ) : (
          <>
            <button type="button" onClick={() => scene.current?.previous()} disabled={spread === 0}>
              ← <span>Previous</span>
            </button>
            <div className="taxonomy-page-count">
              <strong>{String(spread + 1).padStart(2, '0')} / {totalSpreads}</strong>
              <span>{current?.name || (spread === backCoverSpread ? 'Back cover' : 'Introduction')}</span>
            </div>
            <button type="button" onClick={() => scene.current?.next()} disabled={spread === backCoverSpread}>
              <span>Next</span> →
            </button>
            <button type="button" className={`taxonomy-sound-button ${soundEnabled ? 'is-active' : ''}`} onClick={toggleSound} aria-pressed={soundEnabled}>
              {soundEnabled ? 'Sound on' : 'Sound off'}
            </button>
            <button type="button" className="taxonomy-close-button" onClick={() => scene.current?.close()}>
              Close book
            </button>
            <button type="button" className="taxonomy-mobile-side" onClick={switchMobileSide}>
              View {mobileSide ? 'left' : 'right'} page
            </button>
          </>
        )}
      </div>
      <p className="taxonomy-book-instructions">
        <span>Drag a page edge or use the buttons to turn</span>
        <span>← → Arrow keys work too</span>
        <span>On mobile, switch left or right page</span>
      </p>
    </div>
  )
}
