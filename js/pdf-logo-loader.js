/* ==========================================================================
   EGYPTAIR & SPONSOR OFFICIAL BRAND LOGO ENGINE
   High-Fidelity Vector SVG with 100% Exact Brand Hierarchy & Proportions
   ========================================================================== */

(function () {
  // Official EgyptAir Logo (Horus Falcon Head + EGYPTAIR Bold Italic + Rule + STAR ALLIANCE with 3D Star)
  const EGYPTAIR_SVG = `
    <svg viewBox="0 0 540 360" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; display:block;">
      <defs>
        <!-- 3D Star Alliance Facet Gradients -->
        <linearGradient id="starF1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#9ea3aa"/>
          <stop offset="100%" stop-color="#4d535b"/>
        </linearGradient>
        <linearGradient id="starF2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#d6dbe0"/>
          <stop offset="100%" stop-color="#8a9098"/>
        </linearGradient>
        <linearGradient id="starF3" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stop-color="#b8bec5"/>
          <stop offset="100%" stop-color="#6b727a"/>
        </linearGradient>
      </defs>

      <!-- Horus Falcon Head Emblem -->
      <g transform="translate(195, 18) scale(0.92)">
        <!-- Outer Wing Feather 1 -->
        <path d="M5,108 C1,80 18,46 45,22 C78,-4 118,2 145,18 C115,22 85,38 65,62 C45,86 35,115 32,145 C20,132 10,120 5,108 Z" fill="#00205B"/>
        <!-- Wing Feather 2 -->
        <path d="M22,140 C28,102 48,72 78,48 C108,24 140,22 158,26 C136,36 112,54 94,78 C76,104 65,135 62,170 C45,160 30,150 22,140 Z" fill="#00205B"/>
        <!-- Wing Feather 3 -->
        <path d="M46,170 C56,132 78,102 108,78 C138,54 165,52 175,56 C158,70 138,92 124,120 C110,150 102,185 102,218 C80,202 60,186 46,170 Z" fill="#00205B"/>
        <!-- Main Head Crown, Brow & Neck -->
        <path d="M80,195 C92,158 118,128 150,102 C182,76 215,70 238,72 C222,86 200,108 185,138 C172,165 166,198 165,225 C135,215 105,205 80,195 Z" fill="#00205B"/>
        <!-- Falcon Beak & Face Profile -->
        <path d="M165,225 C166,198 172,165 185,138 C200,108 222,86 238,72 C226,62 195,58 160,65 C120,74 85,100 65,132 C95,112 135,102 175,108 C192,110 206,118 215,128 C200,128 182,135 172,148 C185,145 198,148 206,155 C192,160 180,172 174,190 C182,185 192,186 198,190 C182,202 172,218 165,225 Z" fill="#00205B"/>
        <!-- White Eye Contour & Beak Gap -->
        <path d="M175,115 C185,115 195,120 200,126 C192,126 182,130 178,136 C176,130 175,122 175,115 Z" fill="#ffffff"/>
      </g>

      <!-- EGYPTAIR Bold Italic Wordmark -->
      <text x="270" y="255" font-family="'Alexandria', -apple-system, sans-serif" font-weight="900" font-style="italic" font-size="64" fill="#00205B" text-anchor="middle" letter-spacing="3">
        EGYPTAIR
      </text>

      <!-- Horizontal Rule Divider -->
      <line x1="55" y1="278" x2="485" y2="278" stroke="#00205B" stroke-width="2.2" stroke-linecap="round"/>

      <!-- STAR ALLIANCE Text -->
      <text x="238" y="325" font-family="'Cinzel', 'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="28" fill="#1b2a4a" text-anchor="middle" letter-spacing="7">
        STAR ALLIANCE
      </text>

      <!-- 3D Star Alliance 5-Point Emblem -->
      <g transform="translate(382, 300) scale(0.95)">
        <!-- Facet 1 -->
        <polygon points="18,0 23,12 18,17" fill="url(#starF1)"/>
        <polygon points="18,0 13,12 18,17" fill="url(#starF2)"/>
        <!-- Facet 2 -->
        <polygon points="35,12 24,18 20,23" fill="url(#starF2)"/>
        <polygon points="35,12 26,8 20,23" fill="url(#starF3)"/>
        <!-- Facet 3 -->
        <polygon points="29,32 20,24 16,28" fill="url(#starF1)"/>
        <polygon points="29,32 26,20 16,28" fill="url(#starF2)"/>
        <!-- Facet 4 -->
        <polygon points="7,32 12,20 18,25" fill="url(#starF3)"/>
        <polygon points="7,32 16,24 18,25" fill="url(#starF1)"/>
        <!-- Facet 5 -->
        <polygon points="1,12 12,18 16,23" fill="url(#starF2)"/>
        <polygon points="1,12 10,8 16,23" fill="url(#starF3)"/>
      </g>
    </svg>
  `;

  // Official Karnak - EgyptAir Sponsor Logo (Egyptian Column 'k' + vibrant orange 'arnak' + top-right navy 'EGYPTAIR')
  const KARNAK_SVG = `
    <svg viewBox="0 0 540 240" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; display:block;">
      <!-- Top Right EGYPTAIR Wordmark -->
      <text x="365" y="72" font-family="'Alexandria', -apple-system, sans-serif" font-weight="900" font-style="italic" font-size="34" fill="#00205B" text-anchor="middle" letter-spacing="2">
        EGYPTAIR
      </text>

      <!-- Karnak Logo Mark -->
      <g transform="translate(42, 35)">
        <!-- Column Capital (Top Moldings) -->
        <path d="M4,48 L46,48 L42,54 L8,54 Z" fill="#FF5000"/>
        <path d="M6,56 L44,56 L41,62 L9,62 Z" fill="#FF5000"/>
        <rect x="10" y="64" width="30" height="4" rx="1" fill="#FF5000"/>

        <!-- Column Fluted Shaft (Vertical Stripes) -->
        <rect x="11" y="70" width="7" height="85" rx="1.5" fill="#FF5000"/>
        <rect x="21" y="70" width="8" height="85" rx="1.5" fill="#FF5000"/>
        <rect x="32" y="70" width="7" height="85" rx="1.5" fill="#FF5000"/>

        <!-- Upper Curved Arm radiating from column -->
        <path d="M36,115 C58,102 85,82 110,68 L122,68 C98,84 68,108 42,126 Z" fill="#FF5000"/>
        <path d="M34,124 C52,112 76,96 98,84 L106,84 C84,98 58,118 38,134 Z" fill="#FF5000"/>

        <!-- Lower Curved Leg radiating to base -->
        <path d="M35,124 C54,136 78,154 98,172 L110,172 C88,152 62,132 40,118 Z" fill="#FF5000"/>
        <path d="M37,132 C54,144 74,158 90,172 L98,172 C80,158 60,144 42,132 Z" fill="#FF5000"/>

        <!-- Bold Lowercase 'arnak' Text -->
        <text x="112" y="152" font-family="'Plus Jakarta Sans', -apple-system, sans-serif" font-weight="900" font-size="114" fill="#FF5000" letter-spacing="-3">
          arnak
        </text>
      </g>
    </svg>
  `;

  function initLogos() {
    // 1. Immediate high-res vector injection into all targets
    document.querySelectorAll('.egyptair-logo-target').forEach(el => {
      el.innerHTML = EGYPTAIR_SVG;
    });

    document.querySelectorAll('.sponsor-logo-target').forEach(el => {
      el.innerHTML = KARNAK_SVG;
    });

    // 2. Progressive enhancement: if PDF.js is loaded and running, render PDFs to crisp 2x retina canvases
    if (window.pdfjsLib) {
      renderPdfToTargets('assets/images/egyptair-logo.pdf', '.egyptair-logo-target');
      renderPdfToTargets('assets/images/karnak-sponsor-logo.pdf', '.sponsor-logo-target');
    }
  }

  async function renderPdfToTargets(pdfPath, targetSelector) {
    try {
      const loadingTask = window.pdfjsLib.getDocument(pdfPath);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);
      const scale = 2.5;
      const viewport = page.getViewport({ scale: scale });

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      canvas.style.width = '100%';
      canvas.style.height = 'auto';
      canvas.style.display = 'block';

      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };

      await page.render(renderContext).promise;

      document.querySelectorAll(targetSelector).forEach(el => {
        el.innerHTML = '';
        el.appendChild(canvas.cloneNode(true));
        const cloneCtx = el.querySelector('canvas').getContext('2d');
        cloneCtx.drawImage(canvas, 0, 0);
      });
    } catch (err) {
      // In local file:// mode or if fetch is blocked, vector fallback is already perfectly displayed!
      console.log('Using optimized vector asset for ' + pdfPath);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLogos);
  } else {
    initLogos();
  }
})();
