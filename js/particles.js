/* ==========================================================================
   EGYPTAIR — CELESTIAL CANVAS PARTICLE ENGINE
   Lightweight, 60fps, atmospheric stardust & golden bokeh
   ========================================================================== */

(function () {
  const canvas = document.getElementById('celestial-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let stars = [];
  let shootingStars = [];
  let animationFrameId;

  const CONFIG = {
    starCount: 90,
    particleCount: 35,
    starColors: ['#C5A45A', '#D4B66A', '#002B55', '#B08D3B', '#EDE7DA'],
    particleColors: [
      'rgba(197, 164, 90, 0.25)',
      'rgba(212, 182, 106, 0.2)',
      'rgba(0, 43, 85, 0.08)',
      'rgba(176, 141, 59, 0.18)'
    ]
  };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initElements();
  }

  class Star {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 1.5 + 0.5;
      this.color = CONFIG.starColors[Math.floor(Math.random() * CONFIG.starColors.length)];
      this.baseAlpha = Math.random() * 0.7 + 0.2;
      this.alpha = this.baseAlpha;
      this.twinkleSpeed = Math.random() * 0.02 + 0.005;
      this.twinkleAngle = Math.random() * Math.PI * 2;
    }
    update() {
      this.twinkleAngle += this.twinkleSpeed;
      this.alpha = this.baseAlpha + Math.sin(this.twinkleAngle) * 0.3;
      if (this.alpha < 0.1) this.alpha = 0.1;
      if (this.alpha > 1) this.alpha = 1;
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  class FloatingParticle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.8 + 1;
      this.color = CONFIG.particleColors[Math.floor(Math.random() * CONFIG.particleColors.length)];
      this.vx = (Math.random() - 0.5) * 0.25;
      this.vy = -Math.random() * 0.35 - 0.1;
      this.alpha = Math.random() * 0.6 + 0.2;
      this.fadeSpeed = Math.random() * 0.005 + 0.002;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.y = height + 10;
        this.x = Math.random() * width;
      }
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  class ShootingStar {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * (height * 0.5);
      this.len = Math.random() * 80 + 50;
      this.speed = Math.random() * 8 + 6;
      this.size = Math.random() * 1.5 + 0.8;
      this.angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.2;
      this.active = false;
      this.wait = Math.floor(Math.random() * 400) + 200;
    }
    update() {
      if (!this.active) {
        this.wait--;
        if (this.wait <= 0) {
          this.active = true;
          this.x = Math.random() * width;
          this.y = Math.random() * (height * 0.4);
        }
        return;
      }
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;
      if (this.x > width + 100 || this.y > height + 100) {
        this.reset();
      }
    }
    draw() {
      if (!this.active) return;
      ctx.save();
      const grad = ctx.createLinearGradient(
        this.x, this.y,
        this.x - Math.cos(this.angle) * this.len,
        this.y - Math.sin(this.angle) * this.len
      );
      grad.addColorStop(0, 'rgba(197, 164, 90, 0.85)');
      grad.addColorStop(0.3, 'rgba(212, 182, 106, 0.45)');
      grad.addColorStop(1, 'transparent');
      ctx.strokeStyle = grad;
      ctx.lineWidth = this.size;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(
        this.x - Math.cos(this.angle) * this.len,
        this.y - Math.sin(this.angle) * this.len
      );
      ctx.stroke();
      ctx.restore();
    }
  }

  function initElements() {
    stars = [];
    particles = [];
    shootingStars = [];
    for (let i = 0; i < CONFIG.starCount; i++) stars.push(new Star());
    for (let i = 0; i < CONFIG.particleCount; i++) particles.push(new FloatingParticle());
    for (let i = 0; i < 2; i++) shootingStars.push(new ShootingStar());
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);

    stars.forEach(s => {
      s.update();
      s.draw();
    });

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    shootingStars.forEach(ss => {
      ss.update();
      ss.draw();
    });

    animationFrameId = requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resize);
  resize();
  loop();

  // Expose function to burst gold particles on confirmation
  window.triggerGoldConfetti = function () {
    for (let i = 0; i < 40; i++) {
      const p = new FloatingParticle();
      p.x = width / 2 + (Math.random() - 0.5) * 200;
      p.y = height / 2 + (Math.random() - 0.5) * 100;
      p.size = Math.random() * 4 + 2;
      p.color = 'rgba(232, 200, 114, 0.8)';
      p.vy = -Math.random() * 2.5 - 1;
      p.vx = (Math.random() - 0.5) * 3;
      particles.push(p);
    }
  };
})();
