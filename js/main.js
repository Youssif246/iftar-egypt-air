/* ==========================================================================
   EGYPTAIR — RAMADAN IFTAR: MAIN APP ORCHESTRATOR
   Integrates Lenis smooth scroll, branded loader, countdown, & triggers
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lenis Smooth Scroll
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  // 2. Branded Loader Sequence (Fast dismissal for immediate visual feedback)
  const loader = document.getElementById('cinematic-loader');
  let hasTriggered = false;

  function dismissLoaderAndStart() {
    if (hasTriggered) return;
    hasTriggered = true;
    if (loader) {
      loader.classList.add('loaded');
    }
    // Trigger the opening cinematic sequence (light to crescent transformation)
    if (typeof window.triggerOpeningExperience === 'function') {
      window.triggerOpeningExperience();
    }
  }

  window.addEventListener('load', () => {
    setTimeout(dismissLoaderAndStart, 350);
  });

  // Fallback if load already fired
  if (document.readyState === 'complete') {
    setTimeout(dismissLoaderAndStart, 350);
  }

  // 3. Architectural Ramadan Countdown Timer
  function initCountdown() {
    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    // Target: Upcoming Ramadan Iftar (15 Ramadan evening)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);
    targetDate.setHours(18, 15, 0, 0);

    function update() {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;

      if (diff <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minsEl.textContent = '00';
        secsEl.textContent = '00';
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      daysEl.textContent = String(d).padStart(2, '0');
      hoursEl.textContent = String(h).padStart(2, '0');
      minsEl.textContent = String(m).padStart(2, '0');
      secsEl.textContent = String(s).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }

  initCountdown();
});
