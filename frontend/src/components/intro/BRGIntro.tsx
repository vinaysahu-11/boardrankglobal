import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import './BRGIntro.css';

// Absolute cue times avoid drift between typography and future sound design.
const cues = [
  { at: 0, label: 'Anticipation' },
  { at: 800, label: 'A world' },
  { at: 1450, label: 'Of business' },
  { at: 2150, label: 'Every business' },
  { at: 3150, label: 'BRG reveal' },
  { at: 4550, label: 'The signature' },
  { at: 6000, label: 'Website entry' },
];
const DURATION = 9000;
const PACE = DURATION / 6800;
const AUDIO_LEAD_IN = 0.167;
const ease = 'cubic-bezier(.16,1,.3,1)';

function animation(name: string, duration: number, delay = 0): CSSProperties {
  return { animation: `${name} ${duration * PACE}ms ${ease} ${delay * PACE}ms both` };
}

function ControlIcon({ replay }: { replay: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"
      className="h-4 w-4 shrink-0" aria-hidden="true">
      {replay ? <path d="M4 10a8 8 0 1 1 1 8M4 4v6h6" /> : <path d="m8 6 6 6-6 6m9-12v12" />}
    </svg>
  );
}

function SoundIcon({ muted }: { muted: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"
      className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
      {muted ? (
        <path d="m21 9-6 6m0-6 6 6" />
      ) : (
        <>
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 6a8.5 8.5 0 0 1 0 12" />
        </>
      )}
    </svg>
  );
}

function BrandMark({ reduced, small = false }: { reduced: boolean; small?: boolean }) {
  return (
    <div className="relative flex flex-col items-center">
      <h1 aria-label="BRG" className={`flex justify-center font-display font-bold leading-[.78] tracking-[-.045em] ${small ? 'text-[clamp(120px,24vw,330px)]' : 'text-[clamp(170px,37vw,530px)]'}`}>
        {['B', 'R', 'G'].map((letter, index) => (
          <span aria-hidden="true" key={letter} className="relative block overflow-hidden pb-[.1em]">
            <span className="block" style={reduced ? undefined : animation(
              index === 1 ? 'brg-rise' : index === 0 ? 'brg-from-left' : 'brg-from-right',
              1050, index * 65,
            )}>{letter}</span>
          </span>
        ))}
      </h1>
      <p className="mt-5 text-sm font-medium tracking-[.28em] md:mt-7 md:text-lg md:tracking-[.4em]"
        style={reduced ? undefined : animation('brg-resolve', 800, 280)}>
        BOARDRANK GLOBAL
      </p>
    </div>
  );
}

export type BRGIntroProps = {
  /** Runs at 9s or Skip. With a homepage mounted below, the intro opens away. */
  onComplete?: () => void;
};

export default function BRGIntro({ onComplete }: BRGIntroProps) {
  const [scene, setScene] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [run, setRun] = useState(0);
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const [departed, setDeparted] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const callback = useRef(onComplete);
  const completed = useRef(false);
  const introAudio = useRef<HTMLAudioElement | null>(null);
  const introStartedAt = useRef(0);
  const introIsPlaying = useRef(true);
  const soundEnabledRef = useRef(true);
  const autoplayBlockedRef = useRef(false);
  const needsSyncRef = useRef(false);
  const reducedMotionRef = useRef(reduced);
  const light = scene >= 6 || reduced;

  const syncAudioToIntroTime = useCallback(() => {
    const audio = introAudio.current;
    if (!audio || !needsSyncRef.current || audio.readyState < HTMLMediaElement.HAVE_METADATA || !Number.isFinite(audio.duration)) return;
    needsSyncRef.current = false;
    const elapsed = Math.max(0, (performance.now() - introStartedAt.current) / 1000);
    const maxStart = Math.max(0, audio.duration - 0.1);
    audio.currentTime = Math.min(elapsed + AUDIO_LEAD_IN, maxStart);
  }, []);

  const playSound = useCallback((restart = false) => {
    const audio = introAudio.current;
    if (!audio || !soundEnabledRef.current || reducedMotionRef.current) return;

    if (restart) introStartedAt.current = performance.now();
    audio.muted = false;
    audio.volume = 1;
    needsSyncRef.current = true;
    syncAudioToIntroTime();

    void audio.play().then(() => {
      if (introAudio.current !== audio) return;
      autoplayBlockedRef.current = false;
      setAutoplayBlocked(false);
    }).catch((error: unknown) => {
      if (introAudio.current !== audio) return;
      needsSyncRef.current = false;
      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        autoplayBlockedRef.current = true;
        setAutoplayBlocked(true);
        return;
      }
      if (error instanceof DOMException && error.name === 'AbortError') return;

      console.error('Unable to play the BRG intro soundtrack.', error);
    });
  }, [syncAudioToIntroTime]);

  const toggleSound = useCallback(() => {
    const audio = introAudio.current;
    if (!audio) return;

    // Clicking while autoplay is blocked enables and starts sound rather than muting it.
    if (autoplayBlockedRef.current && soundEnabledRef.current && introIsPlaying.current) {
      playSound();
      return;
    }

    const next = !soundEnabledRef.current;
    soundEnabledRef.current = next;
    setSoundEnabled(next);

    if (!next) {
      needsSyncRef.current = false;
      autoplayBlockedRef.current = false;
      setAutoplayBlocked(false);
      audio.pause();
      return;
    }

    if (introIsPlaying.current && !reducedMotionRef.current) {
      playSound();
    }
  }, [playSound]);

  const finish = useCallback(() => {
    introIsPlaying.current = false;
    setScene(6);
    setPlaying(false);
    introAudio.current?.pause();
    if (!completed.current) {
      completed.current = true;
      callback.current?.();
      if (callback.current) setDeparted(true);
    }
  }, []);

  useEffect(() => {
    callback.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      reducedMotionRef.current = query.matches;
      setReduced(query.matches);
    };
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const audio = introAudio.current;
    if (!audio) return;

    audio.volume = 1;
    audio.muted = false;
    introStartedAt.current = performance.now();

    const handleLoadedMetadata = () => {
      syncAudioToIntroTime();
    };
    const handlePlay = () => {
      if (introAudio.current !== audio) return;
      autoplayBlockedRef.current = false;
      setAutoplayBlocked(false);
    };
    const handleAudioError = () => {
      if (introAudio.current !== audio) return;
      console.error('Unable to load the BRG intro soundtrack.', audio.error);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('error', handleAudioError);

    if (!reducedMotionRef.current && soundEnabledRef.current) {
      playSound();
    }

    const retryPlaybackOnInteraction = (event: Event) => {
      const currentAudio = introAudio.current;
      if (!currentAudio?.paused || !introIsPlaying.current || !soundEnabledRef.current || reducedMotionRef.current) return;
      if (event.target instanceof Element && event.target.closest('.brg-intro-action-row button')) return;
      playSound();
    };

    // Listen on pointerup/click/touchend/keydown so desktop and Safari/mobile browsers all unlock media activation.
    document.addEventListener('pointerup', retryPlaybackOnInteraction, true);
    document.addEventListener('click', retryPlaybackOnInteraction, true);
    document.addEventListener('touchend', retryPlaybackOnInteraction, true);
    document.addEventListener('keydown', retryPlaybackOnInteraction, true);

    return () => {
      document.removeEventListener('pointerup', retryPlaybackOnInteraction, true);
      document.removeEventListener('click', retryPlaybackOnInteraction, true);
      document.removeEventListener('touchend', retryPlaybackOnInteraction, true);
      document.removeEventListener('keydown', retryPlaybackOnInteraction, true);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('error', handleAudioError);
      audio.pause();
    };
  }, [playSound, syncAudioToIntroTime]);

  useEffect(() => {
    if (reduced) {
      const frame = window.requestAnimationFrame(finish);
      return () => window.cancelAnimationFrame(frame);
    }
    if (!playing) return;
    const timers = cues.slice(1).map(cue => window.setTimeout(
      () => setScene(cues.indexOf(cue)), cue.at * PACE,
    ));
    timers.push(window.setTimeout(finish, DURATION));
    // Independent fail-open deadline; every timer is cleared on unmount/replay.
    timers.push(window.setTimeout(finish, DURATION + 1200));
    return () => timers.forEach(window.clearTimeout);
  }, [run, playing, reduced, finish]);

  function replay() {
    completed.current = false;
    setDeparted(false);
    setScene(reduced ? 6 : 0);
    introIsPlaying.current = !reduced;
    setPlaying(!reduced);
    setRun(value => value + 1);
    if (!reduced && soundEnabledRef.current) playSound(true);
  }

  const soundLabel = !soundEnabled ? 'Sound off' : autoplayBlocked ? 'Enable sound' : 'Sound on';
  const soundMuted = !soundEnabled || autoplayBlocked;
  const title = 'font-display font-semibold uppercase leading-[.86] tracking-[-.025em]';
  return (
    <main aria-label="Boardrank Global cinematic introduction"
      aria-hidden={departed || undefined}
      className={`relative isolate grid min-h-[100svh] w-full place-items-center overflow-hidden font-sans text-center transition-colors duration-[1000ms] ${light ? 'bg-ivory text-ink' : 'bg-[#091612] text-ivory'} ${departed ? 'pointer-events-none' : ''} brg-intro-root`}
      style={{
        clipPath: departed ? 'inset(0 0 100% 0)' : 'inset(0)',
        transition: reduced ? 'none' : 'background-color 1000ms cubic-bezier(.4,0,.2,1), color 800ms, clip-path 800ms cubic-bezier(.76,0,.24,1)',
      }}>
      <audio ref={introAudio} src="/assets/audio/brg-cinematic-intro-1126.mp3" preload="auto" playsInline aria-hidden="true" />
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 transition-opacity duration-1000 ${light ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,#284438_0%,#142a22_30%,#091612_67%,#060d0b_100%)]" />
        <div key={`light-${run}`} className="absolute inset-0"
          style={reduced ? undefined : animation('brg-light-breath', DURATION / PACE)}>
          <div className="absolute left-1/2 top-1/2 h-[65vh] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#829583]/10 blur-[70px]" />
        </div>
        <div className="absolute inset-0 shadow-[inset_0_0_150px_35px_#00000055]" />
      </div>

      <section key={`scene-${run}-${scene}`} aria-label={cues[scene].label}
        className="relative z-10 flex min-h-[100svh] w-full min-w-0 flex-col items-center justify-center px-5 py-28 sm:px-10">
        {(scene === 1 || scene === 2) && (
          <div className="relative w-full overflow-hidden py-8">
            <p className={`${title} text-[clamp(62px,15vw,220px)]`}
              style={animation('brg-type-impact', 760)}>
              {scene === 1 ? 'A WORLD' : <>OF BUSINESS<span className="text-[#ca8b70]">.</span></>}
            </p>
          </div>
        )}
        {scene === 3 && (
          <div className="w-full" style={animation('brg-forward', 1050)}>
            {['EVERY INDUSTRY.', 'EVERY MARKET.', 'EVERY BUSINESS.'].map((text, index) => (
              <div key={text} className="overflow-hidden py-1 md:py-2">
                <p className={`${title} text-[clamp(40px,9.4vw,142px)] ${index === 1 ? 'text-[#ca8b70]' : ''}`}
                  style={animation('brg-slice', 620, index * 135)}>{text}</p>
              </div>
            ))}
          </div>
        )}
        {scene === 4 && (
          <div className="relative" style={animation('brg-presence', 1400)}>
            <div aria-hidden="true" className="pointer-events-none absolute -inset-x-16 inset-y-0 rounded-full bg-[#b9c9ac]/[.06] blur-3xl" />
            <BrandMark reduced={reduced} />
          </div>
        )}
        {scene === 5 && (
          <div className="flex flex-col items-center" style={animation('brg-resolve', 700)}>
            <p className="mb-9 text-sm font-medium tracking-[.3em] md:mb-12 md:text-base">BOARDRANK GLOBAL</p>
            <h2 className={`${title} text-[clamp(36px,8.4vw,128px)]`}>THE WORLD COMPETES.</h2>
            <p className="mt-3 font-editorial text-[clamp(41px,8.5vw,130px)] italic leading-[1.05] tracking-[-.025em] text-[#dfc8b5]">The world ranks.</p>
          </div>
        )}
        {(scene === 6 || reduced) && (
          <div className="flex w-full flex-col items-center" style={reduced ? undefined : animation('brg-arrival', 1000)}>
            <BrandMark reduced={true} small />
            <div className="mt-10 flex flex-col items-center md:mt-12">
              <h2 className={`${title} text-[clamp(28px,4.3vw,65px)]`}>THE WORLD COMPETES.</h2>
              <p className="mt-2 font-editorial text-[clamp(32px,4.6vw,70px)] italic leading-none">The world ranks.</p>
            </div>
            <span aria-hidden="true" className="mt-8 h-1 w-8 bg-rust md:mt-10" />
          </div>
        )}
      </section>

      <div className="absolute inset-x-0 bottom-7 z-20 flex justify-center pb-[env(safe-area-inset-bottom)] md:bottom-10">
        <div className="brg-intro-action-row">
          <button
            type="button"
            onClick={toggleSound}
            tabIndex={departed ? -1 : 0}
            aria-pressed={!soundMuted}
            aria-label={soundMuted ? 'Enable intro sound' : 'Mute intro sound'}
            className={`brg-intro-sound-toggle${light ? ' is-light' : ''}${autoplayBlocked && soundEnabled ? ' is-blocked' : ''}`}>
            <SoundIcon muted={soundMuted} />
            {soundLabel}
          </button>
          <button type="button" onClick={playing && !reduced ? finish : replay}
            tabIndex={departed ? -1 : 0}
            className={`flex min-h-11 cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-full border px-6 text-xs font-medium uppercase tracking-[.18em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ca8b70] focus-visible:ring-offset-4 ${light ? 'border-ink/25 bg-ivory text-ink hover:border-ink focus-visible:ring-offset-ivory' : 'border-ivory/25 bg-[#0c1b15] text-ivory hover:border-ivory/70 focus-visible:ring-offset-[#091612]'}`}>
            <ControlIcon replay={!playing || reduced} />
            {playing && !reduced ? 'Skip intro' : 'Replay intro'}
          </button>
        </div>
      </div>
      <span className="sr-only" role="status">{playing ? 'Brand introduction playing' : 'Boardrank Global. The world competes. The world ranks.'}</span>
    </main>
  );
}
