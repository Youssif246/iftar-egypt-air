/* ==========================================================================
   EGYPTAIR — RAMADAN IFTAR: "رحلة تجمعنا"
   “A JOURNEY OF LIGHT” — CINEMATIC MOTION & GSAP SCROLLTRIGGER ENGINE
   Immediate Visual Feedback • Pinned Light Journey • Kinetic Word Transformation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not loaded.');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // --------------------------------------------------------------------------
  // 1. CUSTOM CURSOR (Desktop only)
  // --------------------------------------------------------------------------
  const cursorDot = document.querySelector('.custom-cursor-dot');
  const cursorOutline = document.querySelector('.custom-cursor-outline');

  if (cursorDot && cursorOutline && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outlineX = mouseX;
    let outlineY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0.08, ease: 'power2.out' });
    });

    gsap.ticker.add(() => {
      outlineX += (mouseX - outlineX) * 0.2;
      outlineY += (mouseY - outlineY) * 0.2;
      gsap.set(cursorOutline, { x: outlineX, y: outlineY });
    });

    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, .brand-plaque, .program-item-row');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  // --------------------------------------------------------------------------
  // 2. MAGNETIC BUTTONS (Fast, responsive click feedback)
  // --------------------------------------------------------------------------
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.btn-magnetic').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.25,
          ease: 'power2.out'
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.45,
          ease: 'power3.out'
        });
      });
    });
  }

  // --------------------------------------------------------------------------
  // 3. SCENE 01 — THE FIRST LIGHT OPENING TIMELINE (<0.5s START!)
  // --------------------------------------------------------------------------
  const openingTl = gsap.timeline({ paused: true, delay: 0.1 });

  openingTl
    // 0.2s: Starlight point immediately appears in calm warm ivory
    .fromTo('#opening-light-point', 
      { scale: 0, opacity: 0, x: -140, y: 50 },
      { scale: 1.5, opacity: 1, duration: 0.4, ease: 'power2.out' }
    )
    // 0.4s - 2.0s: Light curves across space in an abstract flight path
    .to('#opening-light-point', {
      x: 0,
      y: 0,
      scale: 2.0,
      duration: 1.6,
      ease: 'power3.inOut'
    })
    // 2.0s - 3.0s: Light blooms into the Golden Crescent Moon
    .to('#opening-light-point', {
      opacity: 0,
      scale: 5,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4')
    .fromTo('.crescent-portal-wrap',
      { scale: 0.5, opacity: 0, filter: 'blur(12px)' },
      { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.3, ease: 'power3.out' },
      '-=0.7'
    )
    .fromTo('.crescent-halo',
      { scale: 0.3, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.4, ease: 'power2.out' },
      '-=1.1'
    )
    // 3.0s - 4.0s: Reveal Eyebrow & Title "رحلة تجمعنا"
    .fromTo('.hero-eyebrow',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.8'
    )
    .fromTo('.hero-headline',
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out' },
      '-=0.6'
    )
    // 4.0s - 4.8s: Reveal poetic quote, EgyptAir Brand Plaque, and CTA Button
    .fromTo('.hero-quote',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo('.hero-plaque',
      { y: 20, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo('.hero-host-statement',
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo('#btn-start-journey',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.3'
    );

  window.triggerOpeningExperience = () => {
    openingTl.play();
  };

  // --------------------------------------------------------------------------
  // 4. FAST TRANSITION PORTAL (0.8s on click)
  // --------------------------------------------------------------------------
  const startBtn = document.getElementById('btn-start-journey');
  const portal = document.getElementById('transition-portal');

  if (startBtn && portal) {
    startBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const portalTl = gsap.timeline();

      portalTl
        .set(portal, { visibility: 'visible', opacity: 1 })
        .to(portal, {
          scale: 30,
          borderRadius: '20%',
          duration: 0.85,
          ease: 'power3.inOut'
        })
        .add(() => {
          const sceneGathering = document.getElementById('scene-gathering');
          if (sceneGathering) {
            sceneGathering.scrollIntoView({ behavior: 'instant' });
          }
        })
        .to(portal, {
          opacity: 0,
          duration: 0.65,
          ease: 'power2.out',
          onComplete: () => {
            gsap.set(portal, { visibility: 'hidden', scale: 0.1 });
          }
        });
    });
  }

  // --------------------------------------------------------------------------
  // 5. SCENE 02 — THE GATHERING
  // --------------------------------------------------------------------------
  gsap.from('#scene-gathering .gathering-orb-stage', {
    scrollTrigger: {
      trigger: '#scene-gathering',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    scale: 0.9,
    opacity: 0,
    duration: 1.0,
    ease: 'power3.out'
  });

  // --------------------------------------------------------------------------
  // 7. SCENE 04 — THE OFFICIAL INVITATION (ROYAL STATIONERY)
  // --------------------------------------------------------------------------
  gsap.from('.royal-stationery-card', {
    scrollTrigger: {
      trigger: '#scene-invitation',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    y: 35,
    opacity: 0,
    duration: 1.0,
    ease: 'power3.out'
  });

  // --------------------------------------------------------------------------
  // 8. SCENE 05 & 06 — THE MOMENT & COUNTDOWN
  // --------------------------------------------------------------------------
  gsap.from('.royal-date-banner', {
    scrollTrigger: {
      trigger: '.royal-date-banner',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    y: 25,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  gsap.from('.official-program-timeline', {
    scrollTrigger: {
      trigger: '.official-program-timeline',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    y: 30,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  });

  gsap.from('.typographic-countdown-card', {
    scrollTrigger: {
      trigger: '.typographic-countdown-card',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    y: 25,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  });

  // --------------------------------------------------------------------------
  // 9. SCENE 07 — ARRIVAL & MAP
  // --------------------------------------------------------------------------
  gsap.from('.architectural-venue-card', {
    scrollTrigger: {
      trigger: '#scene-arrival',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    scale: 0.96,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  });

  gsap.from('.destination-map-wrapper', {
    scrollTrigger: {
      trigger: '#scene-arrival',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    y: 25,
    opacity: 0,
    duration: 0.9,
    delay: 0.15,
    ease: 'power3.out'
  });

  // --------------------------------------------------------------------------
  // 10. SCENE 08 & 09 — PARTNERS & RSVP FINALE
  // --------------------------------------------------------------------------
  gsap.from('.partner-plaque-host', {
    scrollTrigger: {
      trigger: '.partners-executive-block',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    scale: 0.94,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  gsap.from('.partner-plaque-sponsor', {
    scrollTrigger: {
      trigger: '.partners-executive-block',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: 0.15,
    ease: 'power3.out'
  });

  gsap.from('.rsvp-box', {
    scrollTrigger: {
      trigger: '#scene-rsvp',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    y: 35,
    opacity: 0,
    duration: 1.0,
    ease: 'power3.out'
  });

  // --------------------------------------------------------------------------
  // 11. PROGRESS TRACKER
  // --------------------------------------------------------------------------
  const progressItems = document.querySelectorAll('.progress-step-item');
  const scenes = [
    'scene-first-light',
    'scene-gathering',
    'scene-invitation',
    'scene-moment',
    'scene-arrival',
    'scene-rsvp'
  ];

  scenes.forEach((scId, idx) => {
    const sc = document.getElementById(scId);
    if (sc && progressItems[idx]) {
      ScrollTrigger.create({
        trigger: sc,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setActiveProgress(idx),
        onEnterBack: () => setActiveProgress(idx)
      });
    }
  });

  function setActiveProgress(activeIndex) {
    progressItems.forEach((item, i) => {
      item.classList.toggle('active', i === activeIndex);
    });
  }
});
