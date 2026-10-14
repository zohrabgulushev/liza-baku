<!DOCTYPE html>
<html class="h-full scroll-smooth" lang="ru">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" name="viewport"/>
  <meta content="mobile_tab" name="shell-type"/>
  <title id="site-title">Лиза Аидаралиева — Татуировка и Перманентный макияж в Баку</title>
  
  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
  
  <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  <script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "alabaster": "#FAF8F5",
            "eggshell": "#F3EFEA",
            "linen": "#E7E2DA",
            "ink": "#1A1918",
            "ink-muted": "#635F5B",
            "ink-faint": "#9E9992",
            "clay": "#8E5B53",
            "clay-subtle": "#F2E8E5",
            "sage": "#717B6E",
            "sage-subtle": "#E8EBE6"
          },
          fontFamily: {
            "serif": ["'Playfair Display'", "Georgia", "serif"],
            "sans": ["'Plus Jakarta Sans'", "-apple-system", "sans-serif"]
          },
          letterSpacing: {
            "editorial": "0.18em",
            "caps": "0.26em"
          },
          boxShadow: {
            'ambient': '0 12px 32px -4px rgba(26, 25, 24, 0.08), 0 4px 12px rgba(26, 25, 24, 0.03)',
            'ambient-hover': '0 20px 48px -8px rgba(26, 25, 24, 0.16), 0 8px 16px rgba(26, 25, 24, 0.06)',
            'btn-hover': '0 8px 24px -2px rgba(26, 25, 24, 0.22)'
          }
        }
      }
    };
  </script>

  <style>
    @layer base {
      html, body {
        width: 100%;
        margin: 0;
        padding: 0;
        background-color: #FAF8F5;
        color: #1A1918;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
      .pb-safe { padding-bottom: max(env(safe-area-inset-bottom, 0px), 12px); }
      .pt-safe { padding-top: max(env(safe-area-inset-top, 0px), 8px); }
    }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    ::-webkit-scrollbar { display: none; }
    .portfolio-item.hidden-tab { display: none; }

    /* Interactive photo zoom & elevation card */
    .photo-card {
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
      cursor: pointer;
    }
    .photo-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 36px -6px rgba(26, 25, 24, 0.12), 0 4px 12px rgba(26, 25, 24, 0.04);
      border-color: rgba(26, 25, 24, 0.3);
    }
    .photo-card img {
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .photo-card:hover img {
      transform: scale(1.05);
    }

    /* Modal zoom animation */
    .zoom-mode-active {
      transform: scale(2.2);
      cursor: zoom-out !important;
    }
  </style>
</head>
<body class="bg-alabaster font-sans text-ink min-h-screen flex flex-col selection:bg-clay-subtle selection:text-ink">

  <!-- ==================== TOP NAVIGATION ==================== -->
  <header class="fixed top-0 w-full z-40 bg-alabaster/90 backdrop-blur-md border-b border-linen/70 transition-all shadow-[0_2px_12px_rgba(26,25,24,0.03)]">
    <div class="h-16 px-4 max-w-md mx-auto flex items-center justify-between">
      <!-- Refined Brand Monogram / Logo -->
      <a class="flex items-center gap-2.5 group" href="#">
        <div class="w-8 h-8 rounded-full border border-ink/20 bg-alabaster flex items-center justify-center shrink-0 shadow-xs group-hover:border-ink transition-colors">
          <span class="font-serif italic text-[16px] text-ink leading-none -mr-0.5">L</span>
          <span class="font-serif font-light text-[14px] text-clay leading-none">A</span>
        </div>
        <div class="flex flex-col whitespace-nowrap min-w-0">
          <span class="font-serif text-[14px] tracking-[0.08em] font-medium text-ink uppercase leading-none whitespace-nowrap" id="nav-brand-latin">Liza Aidaraliyeva</span>
          <span class="font-sans text-[8.5px] tracking-[0.16em] text-ink-muted uppercase mt-1 whitespace-nowrap">Татуировки &amp; Перманент</span>
        </div>
      </a>
      
      <!-- Quick Actions: Instagram & WhatsApp Menus + Direct CTA -->
      <div class="flex items-center gap-1.5">
        <!-- Instagram Button with Dual Profile Dropdown -->
        <div class="relative">
          <button id="instagram-dropdown-btn" onclick="toggleInstagramMenu(event)" aria-label="Выбрать страницу Instagram" class="w-8 h-8 rounded-full bg-eggshell border border-linen flex items-center justify-center hover:border-pink-500/50 transition-all shadow-xs group cursor-pointer" title="Выбрать профиль Instagram">
            <svg style="width: 15px; height: 15px; min-width: 15px;" class="group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none">
              <defs>
                <radialGradient id="ig-grad-header" cx="20%" cy="105%" r="130%">
                  <stop offset="0%" stop-color="#ffdb55"/>
                  <stop offset="15%" stop-color="#ffdd55"/>
                  <stop offset="50%" stop-color="#ff543e"/>
                  <stop offset="70%" stop-color="#c837ab"/>
                  <stop offset="100%" stop-color="#4158d0"/>
                </radialGradient>
              </defs>
              <rect width="24" height="24" rx="6" fill="url(#ig-grad-header)"/>
              <circle cx="12" cy="12" r="5" stroke="#ffffff" stroke-width="2" fill="none"/>
              <circle cx="17.5" cy="6.5" r="1.2" fill="#ffffff"/>
            </svg>
          </button>

          <!-- Instagram Dropdown Menu -->
          <div id="instagram-dropdown-menu" class="hidden opacity-0 scale-95 transition-all duration-200 absolute right-0 mt-2 w-60 bg-alabaster/95 backdrop-blur-xl border border-linen rounded-sm shadow-[0_16px_36px_rgba(26,25,24,0.18)] p-1.5 z-50 flex flex-col gap-1">
            <div class="px-2.5 py-1 text-[9px] uppercase tracking-wider text-ink-faint font-semibold border-b border-linen/60 flex items-center justify-between">
              <span>Профиль Instagram:</span>
              <span class="text-clay text-[8px] font-medium">Баку</span>
            </div>
            
            <a id="nav-ig-tattoo-link" href="https://www.instagram.com/liza_tattoo_baku" target="_blank" onclick="closeInstagramMenu()" class="flex items-center gap-2.5 px-2.5 py-2 rounded-xs hover:bg-eggshell transition-all group">
              <div class="w-7 h-7 rounded-sm overflow-hidden shrink-0 flex items-center justify-center bg-alabaster border border-linen shadow-xs">
                <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="6" fill="url(#ig-grad-header)"/>
                  <circle cx="12" cy="12" r="5" stroke="#ffffff" stroke-width="2" fill="none"/>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="#ffffff"/>
                </svg>
              </div>
              <div class="flex flex-col">
                <span id="nav-ig-tattoo-handle" class="text-[12px] font-medium text-ink group-hover:text-clay transition-colors leading-tight">@liza_tattoo_baku</span>
                <span class="text-[10px] text-ink-muted leading-tight mt-0.5">Татуировки</span>
              </div>
              <span class="material-symbols-outlined text-[14px] text-ink-faint ml-auto group-hover:text-clay transition-colors">north_east</span>
            </a>

            <a id="nav-ig-pmu-link" href="https://www.instagram.com/liza_brows_permanent" target="_blank" onclick="closeInstagramMenu()" class="flex items-center gap-2.5 px-2.5 py-2 rounded-xs hover:bg-eggshell transition-all group">
              <div class="w-7 h-7 rounded-sm overflow-hidden shrink-0 flex items-center justify-center bg-alabaster border border-linen shadow-xs">
                <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="6" fill="url(#ig-grad-header)"/>
                  <circle cx="12" cy="12" r="5" stroke="#ffffff" stroke-width="2" fill="none"/>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="#ffffff"/>
                </svg>
              </div>
              <div class="flex flex-col">
                <span id="nav-ig-pmu-handle" class="text-[12px] font-medium text-ink group-hover:text-clay transition-colors leading-tight">@liza_brows_permanent</span>
                <span class="text-[10px] text-ink-muted leading-tight mt-0.5">Перманентный макияж</span>
              </div>
              <span class="material-symbols-outlined text-[14px] text-ink-faint ml-auto group-hover:text-clay transition-colors">north_east</span>
            </a>
          </div>
        </div>

        <!-- WhatsApp Button with Dual Number Dropdown -->
        <div class="relative">
          <button id="whatsapp-dropdown-btn" onclick="toggleWhatsAppMenu(event)" aria-label="Выбрать WhatsApp" class="w-8 h-8 rounded-full bg-eggshell border border-linen flex items-center justify-center hover:border-emerald-500/50 transition-all shadow-xs group cursor-pointer" title="Связаться в WhatsApp">
            <span style="width: 17px; height: 17px; min-width: 17px;" class="rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xs group-hover:scale-110 transition-transform">
              <svg style="width: 11px; height: 11px;" class="fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 3.67C16.58 3.67 20.28 7.37 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17C10.58 20.17 9.17 19.78 7.94 19.05L7.65 18.88L4.54 19.7L5.37 16.67L5.18 16.37C4.38 15.09 3.8 13.53 3.8 11.92C3.8 7.37 7.51 3.67 12.05 3.67M9.1 7.42C8.94 7.42 8.71 7.48 8.5 7.71C8.29 7.94 7.72 8.48 7.72 9.57C7.72 10.66 8.51 11.71 8.63 11.87C8.74 12.02 10.22 14.3 12.5 15.28C14.4 16.1 14.78 15.94 15.19 15.9C15.61 15.86 16.54 15.35 16.74 14.79C16.94 14.23 16.94 13.75 16.88 13.65C16.82 13.55 16.66 13.49 16.42 13.37C16.17 13.25 14.96 12.65 14.73 12.57C14.51 12.49 14.34 12.45 14.18 12.69C14.02 12.93 13.54 13.49 13.4 13.65C13.25 13.82 13.11 13.84 12.87 13.72C12.62 13.6 11.59 13.26 10.36 12.17C9.4 11.32 8.76 10.27 8.64 10.03C8.52 9.78 8.63 9.65 8.75 9.53C8.86 9.42 9 9.24 9.12 9.1C9.25 8.96 9.29 8.86 9.37 8.7C9.45 8.54 9.41 8.4 9.35 8.28C9.29 8.16 8.8 6.96 8.6 6.47C8.4 6 8.2 6.06 8.05 6.05L7.65 6.05C7.5 6.05 7.28 6.08 7.1 6.27"></path>
              </svg>
            </span>
          </button>

          <!-- WhatsApp Dropdown Menu -->
          <div id="whatsapp-dropdown-menu" class="hidden opacity-0 scale-95 transition-all duration-200 absolute right-0 mt-2 w-64 bg-alabaster/95 backdrop-blur-xl border border-linen rounded-sm shadow-[0_16px_36px_rgba(26,25,24,0.18)] p-1.5 z-50 flex flex-col gap-1">
            <div class="px-2.5 py-1 text-[9px] uppercase tracking-wider text-ink-faint font-semibold border-b border-linen/60 flex items-center justify-between">
              <span>Чат в WhatsApp:</span>
              <span class="text-[#25D366] text-[8px] font-medium">Онлайн</span>
            </div>
            
            <a href="javascript:void(0)" onclick="openDirectWhatsApp('tattoo')" class="flex items-center gap-2.5 px-2.5 py-2 rounded-xs hover:bg-eggshell transition-all group">
              <div style="width: 26px; height: 26px;" class="rounded-sm overflow-hidden shrink-0 flex items-center justify-center bg-alabaster border border-linen shadow-xs">
                <span style="width: 17px; height: 17px;" class="rounded-full bg-[#25D366] flex items-center justify-center text-white">
                  <svg style="width: 10px; height: 10px;" class="fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 3.67C16.58 3.67 20.28 7.37 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17C10.58 20.17 9.17 19.78 7.94 19.05L7.65 18.88L4.54 19.7L5.37 16.67L5.18 16.37C4.38 15.09 3.8 13.53 3.8 11.92C3.8 7.37 7.51 3.67 12.05 3.67M9.1 7.42C8.94 7.42 8.71 7.48 8.5 7.71C8.29 7.94 7.72 8.48 7.72 9.57C7.72 10.66 8.51 11.71 8.63 11.87C8.74 12.02 10.22 14.3 12.5 15.28C14.4 16.1 14.78 15.94 15.19 15.9C15.61 15.86 16.54 15.35 16.74 14.79C16.94 14.23 16.94 13.75 16.88 13.65C16.82 13.55 16.66 13.49 16.42 13.37C16.17 13.25 14.96 12.65 14.73 12.57C14.51 12.49 14.34 12.45 14.18 12.69C14.02 12.93 13.54 13.49 13.4 13.65C13.25 13.82 13.11 13.84 12.87 13.72C12.62 13.6 11.59 13.26 10.36 12.17C9.4 11.32 8.76 10.27 8.64 10.03C8.52 9.78 8.63 9.65 8.75 9.53C8.86 9.42 9 9.24 9.12 9.1C9.25 8.96 9.29 8.86 9.37 8.7C9.45 8.54 9.41 8.4 9.35 8.28C9.29 8.16 8.8 6.96 8.6 6.47C8.4 6 8.2 6.06 8.05 6.05L7.65 6.05C7.5 6.05 7.28 6.08 7.1 6.27"></path>
                  </svg>
                </span>
              </div>
              <div class="flex flex-col">
                <span class="text-[12px] font-medium text-ink group-hover:text-clay transition-colors leading-tight">По Татуировкам</span>
                <span class="text-[10px] text-ink-muted leading-tight mt-0.5" id="nav-wp-tattoo-label">+994 77 357 20 21</span>
              </div>
            </a>

            <a href="javascript:void(0)" onclick="openDirectWhatsApp('pmu')" class="flex items-center gap-2.5 px-2.5 py-2 rounded-xs hover:bg-eggshell transition-all group">
              <div style="width: 26px; height: 26px;" class="rounded-sm overflow-hidden shrink-0 flex items-center justify-center bg-alabaster border border-linen shadow-xs">
                <span style="width: 17px; height: 17px;" class="rounded-full bg-[#25D366] flex items-center justify-center text-white">
                  <svg style="width: 10px; height: 10px;" class="fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 3.67C16.58 3.67 20.28 7.37 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17C10.58 20.17 9.17 19.78 7.94 19.05L7.65 18.88L4.54 19.7L5.37 16.67L5.18 16.37C4.38 15.09 3.8 13.53 3.8 11.92C3.8 7.37 7.51 3.67 12.05 3.67M9.1 7.42C8.94 7.42 8.71 7.48 8.5 7.71C8.29 7.94 7.72 8.48 7.72 9.57C7.72 10.66 8.51 11.71 8.63 11.87C8.74 12.02 10.22 14.3 12.5 15.28C14.4 16.1 14.78 15.94 15.19 15.9C15.61 15.86 16.54 15.35 16.74 14.79C16.94 14.23 16.94 13.75 16.88 13.65C16.82 13.55 16.66 13.49 16.42 13.37C16.17 13.25 14.96 12.65 14.73 12.57C14.51 12.49 14.34 12.45 14.18 12.69C14.02 12.93 13.54 13.49 13.4 13.65C13.25 13.82 13.11 13.84 12.87 13.72C12.62 13.6 11.59 13.26 10.36 12.17C9.4 11.32 8.76 10.27 8.64 10.03C8.52 9.78 8.63 9.65 8.75 9.53C8.86 9.42 9 9.24 9.12 9.1C9.25 8.96 9.29 8.86 9.37 8.7C9.45 8.54 9.41 8.4 9.35 8.28C9.29 8.16 8.8 6.96 8.6 6.47C8.4 6 8.2 6.06 8.05 6.05L7.65 6.05C7.5 6.05 7.28 6.08 7.1 6.27"></path>
                  </svg>
                </span>
              </div>
              <div class="flex flex-col">
                <span class="text-[12px] font-medium text-ink group-hover:text-clay transition-colors leading-tight">По Перманенту</span>
                <span class="text-[10px] text-ink-muted leading-tight mt-0.5" id="nav-wp-pmu-label">+994 55 498 29 57</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- ==================== MAIN CONTENT CONTAINER ==================== -->
  <main class="flex-1 w-full max-w-md mx-auto pt-16">

    <!-- 1. ПЕРВЫЙ ЭКРАН (HERO) -->
    <section class="px-5 pt-8 pb-7 flex flex-col gap-5">
      <!-- Clear Single Location Badge -->
      <div class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-clay"></span>
        <span id="hero-location-badge" class="text-[11px] font-medium tracking-wide text-ink-muted">Студия в Баку</span>
      </div>
      
      <!-- Clean, Grounded Positioning -->
      <div class="flex flex-col gap-2.5">
        <h1 id="hero-artist-name" class="font-serif text-[34px] sm:text-[38px] leading-[1.12] font-normal tracking-tight text-ink">
          Лиза Аидаралиева
        </h1>
        <h2 id="hero-subtitle" class="font-serif italic text-[17px] leading-snug text-ink/85">
          Татуировки и перманентный макияж в Баку
        </h2>
        <p id="hero-desc" class="text-[13px] leading-relaxed text-ink-muted mt-0.5">
          Индивидуальные эскизы и деликатный перманент с учётом ваших пожеланий.
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-3 pt-1">
        <a class="flex-1 py-3 px-5 rounded-full bg-[#8E5B53] text-[#FAF8F5] text-[12px] uppercase tracking-wider font-semibold text-center hover:bg-[#7D4D46] hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-[0_4px_14px_rgba(142,91,83,0.25)]" href="#booking">
          Обсудить идею
        </a>
        <a class="flex-1 py-3 px-5 rounded-full bg-alabaster border border-[#DED5CA] text-ink text-[12px] uppercase tracking-wider font-semibold text-center hover:border-[#8E5B53] hover:text-[#8E5B53] hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-xs" href="#portfolio">
          Смотреть работы
        </a>
      </div>
    </section>

    <!-- 2. ДВА РАВНЫХ НАПРАВЛЕНИЯ (НАПРАВЛЕНИЯ) -->
    <section class="px-5 py-8 border-t border-linen flex flex-col gap-5" id="directions">
      <div class="flex flex-col gap-1">
        <span class="text-[10px] uppercase tracking-caps text-clay font-semibold">Направления</span>
        <h2 class="font-serif text-[24px] text-ink font-normal">Татуировки и перманент</h2>
      </div>

      <div class="grid grid-cols-2 gap-2.5 sm:gap-3.5">
        <!-- Direction 1: Tattoo -->
        <div class="bg-alabaster rounded-sm border border-linen p-2.5 sm:p-3.5 flex flex-col justify-between shadow-xs hover:border-clay/40 transition-all">
          <div class="flex flex-col gap-2">
            <div class="h-32 sm:h-44 w-full rounded-sm overflow-hidden bg-eggshell relative photo-card group cursor-pointer" onclick="openModal(document.getElementById('dir-card-tattoo-img').src, document.getElementById('dir-card-tattoo-title').textContent, document.getElementById('dir-card-tattoo-badge').textContent, document.getElementById('dir-card-tattoo-desc').textContent)">
              <img id="dir-card-tattoo-img" alt="Татуировки" class="w-full h-full object-cover" src="assets/hero-hand-tattoo.jpg"/>
              <div id="dir-card-tattoo-badge" class="absolute top-1.5 left-1.5 bg-alabaster/95 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-linen text-[8px] uppercase tracking-wider text-ink font-medium shadow-xs">Tattoo</div>
            </div>
            
            <div class="flex flex-col gap-0.5">
              <h3 id="dir-card-tattoo-title" class="font-serif text-[14px] sm:text-[16px] text-ink font-medium leading-snug">Татуировки</h3>
              <p id="dir-card-tattoo-desc" class="text-[10.5px] sm:text-[12px] leading-relaxed text-ink-muted">Ботаника, надписи, минимализм.</p>
            </div>
          </div>

          <div class="flex flex-col gap-2 pt-2.5 border-t border-linen/60 mt-2">
            <button class="w-full py-2 px-3 rounded-full bg-[#8E5B53] text-[#FAF8F5] text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase text-center hover:bg-[#7D4D46] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-1 shadow-[0_2px_8px_rgba(142,91,83,0.2)] cursor-pointer" onclick="filterPortfolio('tattoo', true)">
              <span>Смотреть работы</span>
              <span class="material-symbols-outlined text-[13px]">north_east</span>
            </button>
            
            <div class="flex items-center justify-center gap-2 pt-1 border-t border-linen/60 mt-1">
              <a id="card-ig-tattoo" href="https://www.instagram.com/liza_tattoo_baku" target="_blank" aria-label="Instagram Татуировки" class="w-7 h-7 rounded-full bg-eggshell border border-linen flex items-center justify-center hover:border-pink-400 hover:scale-110 active:scale-95 transition-all shadow-2xs group cursor-pointer" title="Instagram: @liza_tattoo_baku">
                <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="5" fill="url(#ig-grad-header)"/>
                  <circle cx="12" cy="12" r="5" stroke="#ffffff" stroke-width="2" fill="none"/>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="#ffffff"/>
                </svg>
              </a>
              <a href="javascript:void(0)" onclick="openDirectWhatsApp('tattoo')" aria-label="WhatsApp Татуировки" class="w-7 h-7 rounded-full bg-eggshell border border-linen flex items-center justify-center hover:border-[#25D366] hover:scale-110 active:scale-95 transition-all shadow-2xs group cursor-pointer" title="WhatsApp: Татуировки">
                <span style="width: 15px; height: 15px;" class="rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-2xs">
                  <svg style="width: 9.5px; height: 9.5px;" class="fill-current" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 3.67C16.58 3.67 20.28 7.37 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17C10.58 20.17 9.17 19.78 7.94 19.05L7.65 18.88L4.54 19.7L5.37 16.67L5.18 16.37C4.38 15.09 3.8 13.53 3.8 11.92C3.8 7.37 7.51 3.67 12.05 3.67M9.1 7.42C8.94 7.42 8.71 7.48 8.5 7.71C8.29 7.94 7.72 8.48 7.72 9.57C7.72 10.66 8.51 11.71 8.63 11.87C8.74 12.02 10.22 14.3 12.5 15.28C14.4 16.1 14.78 15.94 15.19 15.9C15.61 15.86 16.54 15.35 16.74 14.79C16.94 14.23 16.94 13.75 16.88 13.65C16.82 13.55 16.66 13.49 16.42 13.37C16.17 13.25 14.96 12.65 14.73 12.57C14.51 12.49 14.34 12.45 14.18 12.69C14.02 12.93 13.54 13.49 13.4 13.65C13.25 13.82 13.11 13.84 12.87 13.72C12.62 13.6 11.59 13.26 10.36 12.17C9.4 11.32 8.76 10.27 8.64 10.03C8.52 9.78 8.63 9.65 8.75 9.53C8.86 9.42 9 9.24 9.12 9.1C9.25 8.96 9.29 8.86 9.37 8.7C9.45 8.54 9.41 8.4 9.35 8.28C9.29 8.16 8.8 6.96 8.6 6.47C8.4 6 8.2 6.06 8.05 6.05L7.65 6.05C7.5 6.05 7.28 6.08 7.1 6.27"></path></svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        <!-- Direction 2: PMU -->
        <div class="bg-alabaster rounded-sm border border-linen p-2.5 sm:p-3.5 flex flex-col justify-between shadow-xs hover:border-clay/40 transition-all">
          <div class="flex flex-col gap-2">
            <div class="h-32 sm:h-44 w-full rounded-sm overflow-hidden bg-eggshell relative photo-card group cursor-pointer" onclick="openModal(document.getElementById('dir-card-pmu-img').src, document.getElementById('dir-card-pmu-title').textContent, document.getElementById('dir-card-pmu-badge').textContent, document.getElementById('dir-card-pmu-desc').textContent)">
              <img id="dir-card-pmu-img" alt="Перманентный макияж" class="w-full h-full object-cover" src="assets/powder-brows.jpg"/>
              <div id="dir-card-pmu-badge" class="absolute top-1.5 left-1.5 bg-alabaster/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-linen text-[8px] uppercase tracking-wider text-clay font-medium shadow-xs">PMU</div>
            </div>
            
            <div class="flex flex-col gap-0.5">
              <h3 id="dir-card-pmu-title" class="font-serif text-[14px] sm:text-[16px] text-ink font-medium leading-snug">Перманент</h3>
              <p id="dir-card-pmu-desc" class="text-[10.5px] sm:text-[12px] leading-relaxed text-ink-muted">Губы, брови, межресничка.</p>
            </div>
          </div>

          <div class="flex flex-col gap-2 pt-2.5 border-t border-linen/60 mt-2">
            <button class="w-full py-2 px-3 rounded-full bg-[#8E5B53] text-[#FAF8F5] text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase text-center hover:bg-[#7D4D46] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-1 shadow-[0_2px_8px_rgba(142,91,83,0.2)] cursor-pointer" onclick="filterPortfolio('pmu', true)">
              <span>Смотреть работы</span>
              <span class="material-symbols-outlined text-[13px]">north_east</span>
            </button>
            
            <div class="flex items-center justify-center gap-2 pt-1 border-t border-linen/60 mt-1">
              <a id="card-ig-pmu" href="https://www.instagram.com/liza_brows_permanent" target="_blank" aria-label="Instagram Перманент" class="w-7 h-7 rounded-full bg-eggshell border border-linen flex items-center justify-center hover:border-pink-400 hover:scale-110 active:scale-95 transition-all shadow-2xs group cursor-pointer" title="Instagram: @liza_brows_permanent">
                <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="5" fill="url(#ig-grad-header)"/>
                  <circle cx="12" cy="12" r="5" stroke="#ffffff" stroke-width="2" fill="none"/>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="#ffffff"/>
                </svg>
              </a>
              <a href="javascript:void(0)" onclick="openDirectWhatsApp('pmu')" aria-label="WhatsApp Перманент" class="w-7 h-7 rounded-full bg-eggshell border border-linen flex items-center justify-center hover:border-[#25D366] hover:scale-110 active:scale-95 transition-all shadow-2xs group cursor-pointer" title="WhatsApp: Перманент">
                <span style="width: 15px; height: 15px;" class="rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-2xs">
                  <svg style="width: 9.5px; height: 9.5px;" class="fill-current" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 3.67C16.58 3.67 20.28 7.37 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17C10.58 20.17 9.17 19.78 7.94 19.05L7.65 18.88L4.54 19.7L5.37 16.67L5.18 16.37C4.38 15.09 3.8 13.53 3.8 11.92C3.8 7.37 7.51 3.67 12.05 3.67M9.1 7.42C8.94 7.42 8.71 7.48 8.5 7.71C8.29 7.94 7.72 8.48 7.72 9.57C7.72 10.66 8.51 11.71 8.63 11.87C8.74 12.02 10.22 14.3 12.5 15.28C14.4 16.1 14.78 15.94 15.19 15.9C15.61 15.86 16.54 15.35 16.74 14.79C16.94 14.23 16.94 13.75 16.88 13.65C16.82 13.55 16.66 13.49 16.42 13.37C16.17 13.25 14.96 12.65 14.73 12.57C14.51 12.49 14.34 12.45 14.18 12.69C14.02 12.93 13.54 13.49 13.4 13.65C13.25 13.82 13.11 13.84 12.87 13.72C12.62 13.6 11.59 13.26 10.36 12.17C9.4 11.32 8.76 10.27 8.64 10.03C8.52 9.78 8.63 9.65 8.75 9.53C8.86 9.42 9 9.24 9.12 9.1C9.25 8.96 9.29 8.86 9.37 8.7C9.45 8.54 9.41 8.4 9.35 8.28C9.29 8.16 8.8 6.96 8.6 6.47C8.4 6 8.2 6.06 8.05 6.05L7.65 6.05C7.5 6.05 7.28 6.08 7.1 6.27"></path></svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. ОДНО ПОРТФОЛИО (РАБОТЫ) -->
    <section class="px-5 py-8 border-t border-linen flex flex-col gap-5" id="portfolio">
      <div class="flex flex-col gap-1">
        <span class="text-[10px] uppercase tracking-caps text-clay font-semibold">Портфолио</span>
        <h2 class="font-serif text-[24px] text-ink font-normal">Работы</h2>
      </div>

      <!-- 2 Category Filter Buttons (None selected by default -> shows all) -->
      <div class="grid grid-cols-2 gap-2 p-1.5 bg-[#F4EFEB] rounded-full border border-[#E7DFD7] shadow-xs">
        <button class="py-2.5 px-4 rounded-full text-[12px] font-medium transition-all bg-alabaster text-ink border border-[#E0D7CD] text-center hover:border-[#8E5B53] hover:text-[#8E5B53] flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs" id="tab-tattoo" onclick="togglePortfolioFilter('tattoo')">
          <span>Татуировки</span>
        </button>
        <button class="py-2.5 px-4 rounded-full text-[12px] font-medium transition-all bg-alabaster text-ink border border-[#E0D7CD] text-center hover:border-[#8E5B53] hover:text-[#8E5B53] flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs" id="tab-pmu" onclick="togglePortfolioFilter('pmu')">
          <span>Перманент</span>
        </button>
      </div>

      <!-- Dynamic Portfolio Grid -->
      <div class="grid grid-cols-2 gap-3" id="portfolio-grid">
        <!-- Rendered dynamically from data.json -->
      </div>
    </section>

    <!-- 4. О МАСТЕРЕ — ОЧЕНЬ КОРОТКО -->
    <section class="px-5 py-8 bg-eggshell/30 border-t border-linen flex flex-col gap-4" id="about">
      <div class="flex flex-col gap-1">
        <h2 id="about-artist-name" class="font-serif text-[24px] text-ink font-normal">О мастере</h2>
      </div>

      <div class="rounded-sm overflow-hidden bg-eggshell border border-linen h-72 sm:h-80 relative photo-card group" id="about-artist-card" onclick="openModal('assets/artist.jpg', 'Лиза Аидаралиева', 'Татуировка &amp; Перманент', 'Индивидуальные эскизы татуировок и деликатный перманент с учётом ваших пожеланий.')">
        <img id="about-artist-img" alt="Лиза Аидаралиева" class="w-full h-full object-cover object-top" src="assets/artist.jpg"/>
        <div class="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span id="about-location-badge" class="hidden"></span>
      </div>

      <div class="flex flex-col gap-3 pt-1">
        <p id="about-quote" class="font-serif italic text-[16px] sm:text-[17px] leading-snug text-ink/90 font-normal">
          «Индивидуальные эскизы татуировок и деликатный перманент с учётом ваших пожеланий».
        </p>
        <div class="flex items-start gap-2 pt-1 border-t border-linen/60">
          <span class="material-symbols-outlined text-[15px] text-clay shrink-0 mt-0.5">verified</span>
          <p id="about-bio" class="text-[12px] leading-relaxed text-ink-muted">
            Соблюдаю правила стерильности и использую одноразовые расходные материалы.
          </p>
        </div>
      </div>
    </section>

    <!-- 5. ЗАПИСЬ И КОНТАКТЫ (ОБСУДИМ ВАШУ ИДЕЮ?) -->
    <section class="px-5 py-9 border-t border-linen flex flex-col gap-5" id="booking">
      <div class="flex flex-col gap-1">
        <span class="text-[10px] uppercase tracking-caps text-clay font-semibold">Запись</span>
        <h2 class="font-serif text-[24px] text-ink font-normal">Обсудим вашу идею?</h2>
        <p class="text-[12px] text-ink-muted leading-relaxed">
          Напишите, что хотите сделать, — продолжим общение в WhatsApp.
        </p>
      </div>

      <form class="flex flex-col gap-4 bg-alabaster border border-linen p-4 rounded-sm shadow-xs" id="booking-form" onsubmit="event.preventDefault(); sendToWhatsApp();">
        <!-- Service Direction Switcher -->
        <div class="flex flex-col gap-1.5">
          <label class="text-[11px] font-medium uppercase tracking-wider text-ink-muted">Направление услуги *</label>
          <div class="grid grid-cols-2 gap-2 p-1.5 bg-[#F4EFEB] rounded-full border border-[#E7DFD7] shadow-xs">
            <button class="py-2.5 px-4 rounded-full border border-[#8E5B53] bg-[#8E5B53] text-[#FAF8F5] text-[12px] font-medium text-center transition-all shadow-[0_2px_8px_rgba(142,91,83,0.25)] cursor-pointer" id="btn-service-tattoo" onclick="setServiceDirection('Татуировка')" type="button">
              <span>Татуировка</span>
            </button>
            <button class="py-2.5 px-4 rounded-full border border-transparent bg-transparent text-ink text-[12px] font-medium text-center hover:text-[#8E5B53] transition-all cursor-pointer" id="btn-service-pmu" onclick="setServiceDirection('Перманентный макияж')" type="button">
              <span>Перманент</span>
            </button>
          </div>
          <input id="selected-service-field" type="hidden" value="Татуировка"/>
        </div>

        <!-- Idea / Desired Area -->
        <div class="flex flex-col gap-1.5">
          <label class="text-[11px] font-medium uppercase tracking-wider text-ink-muted" for="client-idea">Идея или желаемая зона *</label>
          <textarea class="w-full bg-alabaster border border-linen rounded-sm px-3 py-2 text-[13px] text-ink focus:border-ink focus:outline-none placeholder:text-ink-faint min-h-[75px] transition-all" id="client-idea" placeholder="Например: небольшая ботаника на ключице или форма бровей..." required=""></textarea>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <!-- Name -->
          <div class="flex flex-col gap-1.5">
            <label class="text-[11px] font-medium uppercase tracking-wider text-ink-muted" for="client-name">Ваше имя *</label>
            <input class="w-full bg-alabaster border border-linen rounded-sm px-3 py-2 text-[13px] text-ink focus:border-ink focus:outline-none placeholder:text-ink-faint transition-all" id="client-name" placeholder="Имя" required="" type="text"/>
          </div>

          <!-- WhatsApp Number -->
          <div class="flex flex-col gap-1.5">
            <label class="text-[11px] font-medium uppercase tracking-wider text-ink-muted" for="client-contact">Номер WhatsApp *</label>
            <input class="w-full bg-alabaster border border-linen rounded-sm px-3 py-2 text-[13px] text-ink focus:border-ink focus:outline-none placeholder:text-ink-faint transition-all" id="client-contact" placeholder="+994 ..." required="" type="tel"/>
          </div>
        </div>

        <!-- Reference / Sketch File Upload -->
        <div class="flex flex-col gap-1.5">
          <label class="text-[11px] font-medium uppercase tracking-wider text-ink-muted">Прикрепить фото или эскиз (референс)</label>
          <label class="border border-dashed border-linen hover:border-clay bg-eggshell/40 rounded-sm p-3 flex flex-col items-center justify-center cursor-pointer transition-colors hover:shadow-xs group">
            <span class="material-symbols-outlined text-[20px] text-clay mb-0.5 group-hover:scale-110 transition-transform">add_photo_alternate</span>
            <span class="text-[11px] text-ink font-medium" id="upload-hint">Прикрепить референс (эскиз / фото)</span>
            <span class="text-[9px] text-ink-faint mt-0.5">Можно прикрепить фото или отправить его напрямую в чате WhatsApp</span>
            <input class="hidden" id="client-file" onchange="handleReferenceFileChange(this)" type="file" accept="image/*"/>
          </label>
          
          <div id="reference-preview-box" class="hidden items-center justify-between p-2 bg-eggshell border border-linen rounded-sm text-[11px]">
            <span id="reference-file-name" class="truncate max-w-[220px] font-mono text-ink"></span>
            <button type="button" onclick="clearReferenceFile()" class="text-red-600 text-[10px] hover:underline cursor-pointer">Удалить</button>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-2 flex flex-col gap-2">
          <button id="booking-submit-btn" class="w-full py-3.5 px-5 rounded-full bg-[#8E5B53] text-[#FAF8F5] text-[12px] uppercase tracking-wider font-semibold flex items-center justify-center gap-2 hover:bg-[#7D4D46] hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-[0_4px_16px_rgba(142,91,83,0.25)] cursor-pointer group" type="submit">
            <span style="width: 18px; height: 18px; min-width: 18px;" class="rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
              <svg style="width: 11px; height: 11px;" class="fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 3.67C16.58 3.67 20.28 7.37 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17C10.58 20.17 9.17 19.78 7.94 19.05L7.65 18.88L4.54 19.7L5.37 16.67L5.18 16.37C4.38 15.09 3.8 13.53 3.8 11.92C3.8 7.37 7.51 3.67 12.05 3.67M9.1 7.42C8.94 7.42 8.71 7.48 8.5 7.71C8.29 7.94 7.72 8.48 7.72 9.57C7.72 10.66 8.51 11.71 8.63 11.87C8.74 12.02 10.22 14.3 12.5 15.28C14.4 16.1 14.78 15.94 15.19 15.9C15.61 15.86 16.54 15.35 16.74 14.79C16.94 14.23 16.94 13.75 16.88 13.65C16.82 13.55 16.66 13.49 16.42 13.37C16.17 13.25 14.96 12.65 14.73 12.57C14.51 12.49 14.34 12.45 14.18 12.69C14.02 12.93 13.54 13.49 13.4 13.65C13.25 13.82 13.11 13.84 12.87 13.72C12.62 13.6 11.59 13.26 10.36 12.17C9.4 11.32 8.76 10.27 8.64 10.03C8.52 9.78 8.63 9.65 8.75 9.53C8.86 9.42 9 9.24 9.12 9.1C9.25 8.96 9.29 8.86 9.37 8.7C9.45 8.54 9.41 8.4 9.35 8.28C9.29 8.16 8.8 6.96 8.6 6.47C8.4 6 8.2 6.06 8.05 6.05L7.65 6.05C7.5 6.05 7.28 6.08 7.1 6.27"></path>
              </svg>
            </span>
            <span id="booking-submit-text">Обсудить идею в WhatsApp</span>
          </button>
          
          <p class="text-[11px] text-center text-ink-muted leading-relaxed">
            После заполнения формы откроется WhatsApp с готовым сообщением. Проверьте его и нажмите «Отправить».
          </p>
        </div>
      </form>
    </section>

    <!-- 6. ПОДВАЛ И КОНТАКТЫ -->
    <footer class="px-5 pt-6 pb-24 sm:pb-24 border-t border-linen flex flex-col gap-4.5 bg-alabaster">
      <div class="flex flex-col items-start gap-1">
        <div class="w-48 -ml-1">
          <svg class="w-full h-auto" fill="none" viewbox="0 0 320 80" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(10, 8)">
              <circle cx="32" cy="32" fill="#faf8f5" r="30" stroke="#1c1a18" stroke-opacity="0.3" stroke-width="1.2"></circle>
              <text fill="#1c1a18" font-family="'Playfair Display', serif" font-size="28" font-style="italic" font-weight="400" x="23" y="41">L</text>
              <text fill="#8e5b53" font-family="'Playfair Display', serif" font-size="25" font-weight="300" x="34" y="43">A</text>
              <circle cx="32" cy="32" fill="#8e5b53" r="1.5"></circle>
            </g>
            <text id="footer-logo-brand" fill="#1c1a18" font-family="'Playfair Display', serif" font-size="18" font-weight="500" letter-spacing="0.08em" x="88" y="38">LIZA AIDARALIYEVA</text>
            <text fill="#78716c" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="500" letter-spacing="0.28em" x="89" y="54">TATTOO &amp; PERMANENT</text>
          </svg>
        </div>
        <p class="text-[11px] text-ink-muted mt-1 flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[14px] text-clay">location_on</span>
          <span id="footer-address-label">Баку · 28 Мая (точный адрес высылается после записи)</span>
        </p>
      </div>

      <!-- Links: Two Clear Separate Pairs (Instagram + WhatsApp) with Handle and Phone Number -->
      <div class="flex flex-col gap-3 pt-3 border-t border-linen/70 text-[11.5px]">
        <!-- Tattoo Pair -->
        <div class="flex flex-col gap-1.5 pb-2.5 border-b border-linen/40">
          <span class="font-serif text-ink text-[13px] font-medium">Татуировки</span>
          <div class="flex items-center justify-between gap-2 flex-wrap">
            <a id="footer-ig-tattoo" href="https://www.instagram.com/liza_tattoo_baku" target="_blank" class="hover:text-clay transition-colors flex items-center gap-1.5 font-medium text-ink-muted group cursor-pointer" title="Instagram: @liza_tattoo_baku">
              <svg style="width: 15px; height: 15px; min-width: 15px;" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="5" fill="url(#ig-grad-header)"/>
                <circle cx="12" cy="12" r="5" stroke="#ffffff" stroke-width="2" fill="none"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="#ffffff"/>
              </svg>
              <span id="footer-ig-tattoo-handle" class="group-hover:underline">@liza_tattoo_baku</span>
            </a>
            <a id="footer-wp-tattoo" href="javascript:void(0)" onclick="openDirectWhatsApp('tattoo')" class="hover:text-[#128C7E] transition-colors flex items-center gap-1.5 font-medium text-ink-muted group cursor-pointer" title="WhatsApp: +994 77 357 20 21">
              <span style="width: 16px; height: 16px; min-width: 16px;" class="rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-2xs">
                <svg style="width: 10px; height: 10px;" class="fill-current" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 3.67C16.58 3.67 20.28 7.37 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17C10.58 20.17 9.17 19.78 7.94 19.05L7.65 18.88L4.54 19.7L5.37 16.67L5.18 16.37C4.38 15.09 3.8 13.53 3.8 11.92C3.8 7.37 7.51 3.67 12.05 3.67M9.1 7.42C8.94 7.42 8.71 7.48 8.5 7.71C8.29 7.94 7.72 8.48 7.72 9.57C7.72 10.66 8.51 11.71 8.63 11.87C8.74 12.02 10.22 14.3 12.5 15.28C14.4 16.1 14.78 15.94 15.19 15.9C15.61 15.86 16.54 15.35 16.74 14.79C16.94 14.23 16.94 13.75 16.88 13.65C16.82 13.55 16.66 13.49 16.42 13.37C16.17 13.25 14.96 12.65 14.73 12.57C14.51 12.49 14.34 12.45 14.18 12.69C14.02 12.93 13.54 13.49 13.4 13.65C13.25 13.82 13.11 13.84 12.87 13.72C12.62 13.6 11.59 13.26 10.36 12.17C9.4 11.32 8.76 10.27 8.64 10.03C8.52 9.78 8.63 9.65 8.75 9.53C8.86 9.42 9 9.24 9.12 9.1C9.25 8.96 9.29 8.86 9.37 8.7C9.45 8.54 9.41 8.4 9.35 8.28C9.29 8.16 8.8 6.96 8.6 6.47C8.4 6 8.2 6.06 8.05 6.05L7.65 6.05C7.5 6.05 7.28 6.08 7.1 6.27"></path></svg>
              </span>
              <span id="footer-wp-tattoo-number" class="group-hover:underline">+994 77 357 20 21</span>
            </a>
          </div>
        </div>

        <!-- Permanent Pair -->
        <div class="flex flex-col gap-1.5">
          <span class="font-serif text-ink text-[13px] font-medium">Перманент</span>
          <div class="flex items-center justify-between gap-2 flex-wrap">
            <a id="footer-ig-pmu" href="https://www.instagram.com/liza_brows_permanent" target="_blank" class="hover:text-clay transition-colors flex items-center gap-1.5 font-medium text-ink-muted group cursor-pointer" title="Instagram: @liza_brows_permanent">
              <svg style="width: 15px; height: 15px; min-width: 15px;" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="5" fill="url(#ig-grad-header)"/>
                <circle cx="12" cy="12" r="5" stroke="#ffffff" stroke-width="2" fill="none"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="#ffffff"/>
              </svg>
              <span id="footer-ig-pmu-handle" class="group-hover:underline">@liza_brows_permanent</span>
            </a>
            <a id="footer-wp-pmu" href="javascript:void(0)" onclick="openDirectWhatsApp('pmu')" class="hover:text-[#128C7E] transition-colors flex items-center gap-1.5 font-medium text-ink-muted group cursor-pointer" title="WhatsApp: +994 55 498 29 57">
              <span style="width: 16px; height: 16px; min-width: 16px;" class="rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-2xs">
                <svg style="width: 10px; height: 10px;" class="fill-current" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 3.67C16.58 3.67 20.28 7.37 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17C10.58 20.17 9.17 19.78 7.94 19.05L7.65 18.88L4.54 19.7L5.37 16.67L5.18 16.37C4.38 15.09 3.8 13.53 3.8 11.92C3.8 7.37 7.51 3.67 12.05 3.67M9.1 7.42C8.94 7.42 8.71 7.48 8.5 7.71C8.29 7.94 7.72 8.48 7.72 9.57C7.72 10.66 8.51 11.71 8.63 11.87C8.74 12.02 10.22 14.3 12.5 15.28C14.4 16.1 14.78 15.94 15.19 15.9C15.61 15.86 16.54 15.35 16.74 14.79C16.94 14.23 16.94 13.75 16.88 13.65C16.82 13.55 16.66 13.49 16.42 13.37C16.17 13.25 14.96 12.65 14.73 12.57C14.51 12.49 14.34 12.45 14.18 12.69C14.02 12.93 13.54 13.49 13.4 13.65C13.25 13.82 13.11 13.84 12.87 13.72C12.62 13.6 11.59 13.26 10.36 12.17C9.4 11.32 8.76 10.27 8.64 10.03C8.52 9.78 8.63 9.65 8.75 9.53C8.86 9.42 9 9.24 9.12 9.1C9.25 8.96 9.29 8.86 9.37 8.7C9.45 8.54 9.41 8.4 9.35 8.28C9.29 8.16 8.8 6.96 8.6 6.47C8.4 6 8.2 6.06 8.05 6.05L7.65 6.05C7.5 6.05 7.28 6.08 7.1 6.27"></path></svg>
              </span>
              <span id="footer-wp-pmu-number" class="group-hover:underline">+994 55 498 29 57</span>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-4 pt-3 text-center text-[10.5px] text-ink-faint border-t border-linen/60">
        © Лиза Аидаралиева
      </div>
    </footer>
  </main>

  <!-- ==================== PINNED MOBILE BOTTOM BAR ==================== -->
  <aside class="fixed bottom-0 inset-x-0 z-40 pb-safe bg-alabaster/95 backdrop-blur-lg border-t border-linen shadow-[0_-4px_24px_rgba(26,25,24,0.08)]">
    <!-- Popover for Mobile WhatsApp Choice -->
    <div id="bottom-whatsapp-menu" class="hidden opacity-0 scale-95 transition-all duration-200 absolute bottom-14 left-4 right-4 max-w-md mx-auto bg-alabaster/95 backdrop-blur-xl border border-linen rounded-sm shadow-[0_-8px_32px_rgba(26,25,24,0.18)] p-2 flex flex-col gap-1.5 z-50">
      <div class="px-2 py-1 text-[9px] uppercase tracking-wider text-ink-faint font-semibold border-b border-linen/60 flex items-center justify-between">
        <span>Связаться в WhatsApp:</span>
        <button onclick="toggleBottomWhatsAppMenu()" class="text-ink-muted hover:text-ink"><span class="material-symbols-outlined text-[14px]">close</span></button>
      </div>
      <a href="javascript:void(0)" onclick="openDirectWhatsApp('tattoo'); toggleBottomWhatsAppMenu();" class="flex items-center gap-2.5 px-3 py-2 rounded-xs bg-eggshell/60 hover:bg-eggshell transition-all">
        <span style="width: 20px; height: 20px;" class="rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
          <svg style="width: 12px; height: 12px;" class="fill-current" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 3.67C16.58 3.67 20.28 7.37 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17C10.58 20.17 9.17 19.78 7.94 19.05L7.65 18.88L4.54 19.7L5.37 16.67L5.18 16.37C4.38 15.09 3.8 13.53 3.8 11.92C3.8 7.37 7.51 3.67 12.05 3.67M9.1 7.42C8.94 7.42 8.71 7.48 8.5 7.71C8.29 7.94 7.72 8.48 7.72 9.57C7.72 10.66 8.51 11.71 8.63 11.87C8.74 12.02 10.22 14.3 12.5 15.28C14.4 16.1 14.78 15.94 15.19 15.9C15.61 15.86 16.54 15.35 16.74 14.79C16.94 14.23 16.94 13.75 16.88 13.65C16.82 13.55 16.66 13.49 16.42 13.37C16.17 13.25 14.96 12.65 14.73 12.57C14.51 12.49 14.34 12.45 14.18 12.69C14.02 12.93 13.54 13.49 13.4 13.65C13.25 13.82 13.11 13.84 12.87 13.72C12.62 13.6 11.59 13.26 10.36 12.17C9.4 11.32 8.76 10.27 8.64 10.03C8.52 9.78 8.63 9.65 8.75 9.53C8.86 9.42 9 9.24 9.12 9.1C9.25 8.96 9.29 8.86 9.37 8.7C9.45 8.54 9.41 8.4 9.35 8.28C9.29 8.16 8.8 6.96 8.6 6.47C8.4 6 8.2 6.06 8.05 6.05L7.65 6.05C7.5 6.05 7.28 6.08 7.1 6.27"></path></svg>
        </span>
        <div class="flex flex-col">
          <span class="text-[12px] font-medium text-ink">WhatsApp по Татуировкам</span>
          <span class="text-[10px] text-ink-muted">Эскизы, консультация, выбор зоны</span>
        </div>
      </a>
      <a href="javascript:void(0)" onclick="openDirectWhatsApp('pmu'); toggleBottomWhatsAppMenu();" class="flex items-center gap-2.5 px-3 py-2 rounded-xs bg-eggshell/60 hover:bg-eggshell transition-all">
        <span style="width: 20px; height: 20px;" class="rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
          <svg style="width: 12px; height: 12px;" class="fill-current" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 3.67C16.58 3.67 20.28 7.37 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17C10.58 20.17 9.17 19.78 7.94 19.05L7.65 18.88L4.54 19.7L5.37 16.67L5.18 16.37C4.38 15.09 3.8 13.53 3.8 11.92C3.8 7.37 7.51 3.67 12.05 3.67M9.1 7.42C8.94 7.42 8.71 7.48 8.5 7.71C8.29 7.94 7.72 8.48 7.72 9.57C7.72 10.66 8.51 11.71 8.63 11.87C8.74 12.02 10.22 14.3 12.5 15.28C14.4 16.1 14.78 15.94 15.19 15.9C15.61 15.86 16.54 15.35 16.74 14.79C16.94 14.23 16.94 13.75 16.88 13.65C16.82 13.55 16.66 13.49 16.42 13.37C16.17 13.25 14.96 12.65 14.73 12.57C14.51 12.49 14.34 12.45 14.18 12.69C14.02 12.93 13.54 13.49 13.4 13.65C13.25 13.82 13.11 13.84 12.87 13.72C12.62 13.6 11.59 13.26 10.36 12.17C9.4 11.32 8.76 10.27 8.64 10.03C8.52 9.78 8.63 9.65 8.75 9.53C8.86 9.42 9 9.24 9.12 9.1C9.25 8.96 9.29 8.86 9.37 8.7C9.45 8.54 9.41 8.4 9.35 8.28C9.29 8.16 8.8 6.96 8.6 6.47C8.4 6 8.2 6.06 8.05 6.05L7.65 6.05C7.5 6.05 7.28 6.08 7.1 6.27"></path></svg>
        </span>
        <div class="flex flex-col">
          <span class="text-[12px] font-medium text-ink">WhatsApp по Перманенту</span>
          <span class="text-[10px] text-ink-muted">Губы, брови, межресничка</span>
        </div>
      </a>
    </div>

    <div class="px-4 py-2.5 max-w-md mx-auto flex items-center gap-2.5">
      <!-- Direct WhatsApp Action Button -->
      <button onclick="toggleBottomWhatsAppMenu(event)" aria-label="Быстрый чат в WhatsApp" class="h-10 px-3.5 rounded-full bg-eggshell border border-linen text-ink flex items-center justify-center gap-2 text-[11px] font-medium hover:border-[#25D366] hover:bg-linen/50 active:scale-95 transition-all shadow-xs group cursor-pointer" type="button">
        <span style="width: 18px; height: 18px; min-width: 18px;" class="rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-110 transition-transform">
          <svg style="width: 11px; height: 11px;" class="fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 3.67C16.58 3.67 20.28 7.37 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17C10.58 20.17 9.17 19.78 7.94 19.05L7.65 18.88L4.54 19.7L5.37 16.67L5.18 16.37C4.38 15.09 3.8 13.53 3.8 11.92C3.8 7.37 7.51 3.67 12.05 3.67M9.1 7.42C8.94 7.42 8.71 7.48 8.5 7.71C8.29 7.94 7.72 8.48 7.72 9.57C7.72 10.66 8.51 11.71 8.63 11.87C8.74 12.02 10.22 14.3 12.5 15.28C14.4 16.1 14.78 15.94 15.19 15.9C15.61 15.86 16.54 15.35 16.74 14.79C16.94 14.23 16.94 13.75 16.88 13.65C16.82 13.55 16.66 13.49 16.42 13.37C16.17 13.25 14.96 12.65 14.73 12.57C14.51 12.49 14.34 12.45 14.18 12.69C14.02 12.93 13.54 13.49 13.4 13.65C13.25 13.82 13.11 13.84 12.87 13.72C12.62 13.6 11.59 13.26 10.36 12.17C9.4 11.32 8.76 10.27 8.64 10.03C8.52 9.78 8.63 9.65 8.75 9.53C8.86 9.42 9 9.24 9.12 9.1C9.25 8.96 9.29 8.86 9.37 8.7C9.45 8.54 9.41 8.4 9.35 8.28C9.29 8.16 8.8 6.96 8.6 6.47C8.4 6 8.2 6.06 8.05 6.05L7.65 6.05C7.5 6.05 7.28 6.08 7.1 6.27"></path>
          </svg>
        </span>
        <span>WhatsApp</span>
      </button>
      
      <!-- Unified Single Action CTA -->
      <a class="flex-1 h-11 px-5 rounded-full bg-[#8E5B53] text-[#FAF8F5] flex items-center justify-center text-[12px] font-semibold tracking-wide uppercase hover:bg-[#7D4D46] active:scale-95 transition-all shadow-[0_4px_14px_rgba(142,91,83,0.3)]" href="#booking">
        Обсудить идею
      </a>
    </div>
  </aside>

  <!-- ==================== MACRO ZOOM LIGHTBOX MODAL ==================== -->
  <div id="image-modal" class="fixed inset-0 z-50 bg-ink/90 backdrop-blur-md hidden opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center p-4" onclick="handleBackdropClick(event)">
    <div class="relative max-w-lg w-full flex flex-col items-center gap-3" onclick="event.stopPropagation()">
      <!-- Top Bar Controls -->
      <div class="w-full flex items-center justify-between text-alabaster px-1">
        <div class="flex items-center gap-2">
          <span id="modal-category" class="text-[9px] uppercase tracking-wider bg-clay px-2 py-0.5 rounded-full text-alabaster font-medium shadow-xs">Татуировка</span>
          <span id="modal-title" class="text-[12px] font-serif text-alabaster font-normal">Работа мастера</span>
        </div>
        <div class="flex items-center gap-2">
          <button id="modal-zoom-btn" onclick="toggleModalZoom()" class="p-1.5 rounded-full bg-alabaster/10 hover:bg-alabaster/25 text-alabaster transition-all flex items-center justify-center cursor-pointer" title="Увеличить масштаб">
            <span class="material-symbols-outlined text-[18px]" id="modal-zoom-icon">zoom_in</span>
          </button>
          <button onclick="closeModal()" class="p-1.5 rounded-full bg-alabaster/10 hover:bg-alabaster/25 text-alabaster transition-all flex items-center justify-center cursor-pointer" title="Закрыть (Esc)">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
      </div>
      
      <!-- Media Viewport -->
      <div class="w-full max-h-[70vh] overflow-hidden rounded-sm bg-ink/70 border border-linen/20 shadow-2xl relative flex items-center justify-center" id="modal-img-container">
        <img id="modal-img" src="" alt="" class="max-h-[68vh] w-auto object-contain transition-transform duration-500 ease-out select-none cursor-zoom-in" onclick="toggleModalZoom()"/>
        
        <div id="zoom-hint-overlay" class="absolute bottom-3 bg-alabaster/90 backdrop-blur-sm text-ink text-[10px] tracking-wide px-2.5 py-1 rounded-full shadow-sm pointer-events-none transition-opacity duration-300">
          Нажмите для макро-приближения деталей (2.2×)
        </div>
      </div>

      <!-- Bottom Caption -->
      <p id="modal-desc" class="text-[11px] text-alabaster/80 text-center px-4 font-light leading-relaxed">
        Аккуратная работа.
      </p>
    </div>
  </div>

  <!-- ==================== JAVASCRIPT LOGIC ==================== -->
  <script>
    // State variables
    let PHONE_TATTOO = "994773572021";
    let PHONE_PMU = "994554982957";

    // 1. Instagram Dropdown Popover in Header
    function toggleInstagramMenu(event) {
      if (event) event.stopPropagation();
      closeWhatsAppMenu();
      const menu = document.getElementById('instagram-dropdown-menu');
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        requestAnimationFrame(() => {
          menu.classList.remove('opacity-0', 'scale-95');
          menu.classList.add('opacity-100', 'scale-100');
        });
      } else {
        closeInstagramMenu();
      }
    }

    function closeInstagramMenu() {
      const menu = document.getElementById('instagram-dropdown-menu');
      if (!menu || menu.classList.contains('hidden')) return;
      menu.classList.add('opacity-0', 'scale-95');
      menu.classList.remove('opacity-100', 'scale-100');
      setTimeout(() => {
        menu.classList.add('hidden');
      }, 200);
    }

    // 2. WhatsApp Dropdown Popover in Header
    function toggleWhatsAppMenu(event) {
      if (event) event.stopPropagation();
      closeInstagramMenu();
      const menu = document.getElementById('whatsapp-dropdown-menu');
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        requestAnimationFrame(() => {
          menu.classList.remove('opacity-0', 'scale-95');
          menu.classList.add('opacity-100', 'scale-100');
        });
      } else {
        closeWhatsAppMenu();
      }
    }

    function closeWhatsAppMenu() {
      const menu = document.getElementById('whatsapp-dropdown-menu');
      if (!menu || menu.classList.contains('hidden')) return;
      menu.classList.add('opacity-0', 'scale-95');
      menu.classList.remove('opacity-100', 'scale-100');
      setTimeout(() => {
        menu.classList.add('hidden');
      }, 200);
    }

    // 3. Mobile Bottom WhatsApp Popover
    function toggleBottomWhatsAppMenu(event) {
      if (event) event.stopPropagation();
      const menu = document.getElementById('bottom-whatsapp-menu');
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        requestAnimationFrame(() => {
          menu.classList.remove('opacity-0', 'scale-95');
          menu.classList.add('opacity-100', 'scale-100');
        });
      } else {
        menu.classList.add('opacity-0', 'scale-95');
        menu.classList.remove('opacity-100', 'scale-100');
        setTimeout(() => {
          menu.classList.add('hidden');
        }, 200);
      }
    }

    // Direct WhatsApp opener by direction
    function openDirectWhatsApp(direction) {
      let phone = PHONE_TATTOO;
      let text = "Здравствуйте, Лиза! Пишу по поводу татуировки.";
      if (direction === 'pmu') {
        phone = PHONE_PMU;
        text = "Здравствуйте, Лиза! Пишу по поводу перманентного макияжа.";
      }
      const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);
      window.open(url, '_blank');
      closeWhatsAppMenu();
    }

    // Close menus when clicking outside
    document.addEventListener('click', (e) => {
      const igMenu = document.getElementById('instagram-dropdown-menu');
      const igBtn = document.getElementById('instagram-dropdown-btn');
      if (igMenu && !igMenu.contains(e.target) && !igBtn.contains(e.target)) {
        closeInstagramMenu();
      }

      const wpMenu = document.getElementById('whatsapp-dropdown-menu');
      const wpBtn = document.getElementById('whatsapp-dropdown-btn');
      if (wpMenu && !wpMenu.contains(e.target) && !wpBtn.contains(e.target)) {
        closeWhatsAppMenu();
      }

      const btmWpMenu = document.getElementById('bottom-whatsapp-menu');
      if (btmWpMenu && !btmWpMenu.contains(e.target)) {
        btmWpMenu.classList.add('opacity-0', 'scale-95');
        btmWpMenu.classList.remove('opacity-100', 'scale-100');
        setTimeout(() => btmWpMenu.classList.add('hidden'), 200);
      }
    });

    // 4. Service Direction State & WhatsApp Routing
    function setServiceDirection(serviceName) {
      document.getElementById('selected-service-field').value = serviceName;
      const btnTattoo = document.getElementById('btn-service-tattoo');
      const btnPmu = document.getElementById('btn-service-pmu');

      if (serviceName === 'Татуировка') {
        btnTattoo.className = 'py-2.5 px-4 rounded-full border border-[#8E5B53] bg-[#8E5B53] text-[#FAF8F5] text-[12px] font-medium text-center transition-all shadow-[0_2px_8px_rgba(142,91,83,0.25)] cursor-pointer';
        btnPmu.className = 'py-2.5 px-4 rounded-full border border-transparent bg-transparent text-ink text-[12px] font-medium text-center hover:text-[#8E5B53] transition-all cursor-pointer';
      } else {
        btnPmu.className = 'py-2.5 px-4 rounded-full border border-[#8E5B53] bg-[#8E5B53] text-[#FAF8F5] text-[12px] font-medium text-center transition-all shadow-[0_2px_8px_rgba(142,91,83,0.25)] cursor-pointer';
        btnTattoo.className = 'py-2.5 px-4 rounded-full border border-transparent bg-transparent text-ink text-[12px] font-medium text-center hover:text-[#8E5B53] transition-all cursor-pointer';
      }
    }

    // 5. Portfolio Filter Logic (Unselected by default -> shows all; click to filter / deselect)
    let currentFilter = 'all';

    function togglePortfolioFilter(filter, scrollToGallery = false) {
      if (currentFilter === filter) {
        // Toggle off if already selected
        applyPortfolioFilter('all', scrollToGallery);
      } else {
        applyPortfolioFilter(filter, scrollToGallery);
      }
    }

    function applyPortfolioFilter(filter, scrollToGallery = false) {
      currentFilter = filter;
      const btnTattoo = document.getElementById('tab-tattoo');
      const btnPmu = document.getElementById('tab-pmu');
      const statusLabel = document.getElementById('portfolio-status-label');

      const activeClass = 'py-2.5 px-4 rounded-full text-[12px] font-medium transition-all bg-[#8E5B53] text-[#FAF8F5] border border-[#8E5B53] text-center shadow-[0_3px_10px_rgba(142,91,83,0.28)] flex items-center justify-center gap-1.5 cursor-pointer';
      const inactiveClass = 'py-2.5 px-4 rounded-full text-[12px] font-medium transition-all bg-alabaster text-ink border border-[#E0D7CD] text-center hover:border-[#8E5B53] hover:text-[#8E5B53] flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs';

      if (btnTattoo) btnTattoo.className = inactiveClass;
      if (btnPmu) btnPmu.className = inactiveClass;

      if (filter === 'tattoo') {
        if (statusLabel) statusLabel.textContent = 'Показаны: татуировки';
        if (btnTattoo) btnTattoo.className = activeClass;
      } else if (filter === 'pmu') {
        if (statusLabel) statusLabel.textContent = 'Показаны: перманентный макияж';
        if (btnPmu) btnPmu.className = activeClass;
      } else {
        // 'all': neither button is highlighted!
        if (statusLabel) statusLabel.textContent = 'Показаны: все работы';
      }

      // Filter portfolio items
      const items = document.querySelectorAll('.portfolio-item');
      items.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.classList.remove('hidden-tab');
        } else {
          item.classList.add('hidden-tab');
        }
      });

      if (scrollToGallery) {
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

    // Alias for external calls (e.g. from Hero or Directions buttons)
    function filterPortfolio(filter, scrollToGallery = false) {
      applyPortfolioFilter(filter, scrollToGallery);
    }

    // Reference File Handling
    function handleReferenceFileChange(input) {
      const file = input.files[0];
      const previewBox = document.getElementById('reference-preview-box');
      const fileNameEl = document.getElementById('reference-file-name');
      const hint = document.getElementById('upload-hint');

      if (file) {
        fileNameEl.textContent = file.name;
        previewBox.classList.remove('hidden');
        previewBox.classList.add('flex');
        hint.textContent = 'Файл прикреплен';
      } else {
        clearReferenceFile();
      }
    }

    function clearReferenceFile() {
      const input = document.getElementById('client-file');
      if (input) input.value = '';
      const previewBox = document.getElementById('reference-preview-box');
      if (previewBox) {
        previewBox.classList.add('hidden');
        previewBox.classList.remove('flex');
      }
      const hint = document.getElementById('upload-hint');
      if (hint) hint.textContent = 'Прикрепить референс (эскиз / фото)';
    }

    // 6. Booking Submission: Server-side upload + WhatsApp routing
    async function sendToWhatsApp() {
      const submitBtn = document.getElementById('booking-submit-btn');
      const submitText = document.getElementById('booking-submit-text');
      const service = document.getElementById('selected-service-field').value;
      const idea = document.getElementById('client-idea').value.trim();
      const name = document.getElementById('client-name').value.trim();
      const contact = document.getElementById('client-contact').value.trim();
      const fileInput = document.getElementById('client-file');

      if (!idea || !name || !contact) {
        alert('Пожалуйста, заполните поля: имя, телефон и ваши пожелания.');
        return;
      }

      const origText = submitText.textContent;
      submitBtn.disabled = true;
      submitText.textContent = 'Подготовка...';

      let uploadedRefUrl = '';

      // Upload reference file if selected
      if (fileInput && fileInput.files && fileInput.files[0]) {
        try {
          submitText.textContent = 'Загрузка фото...';
          const file = fileInput.files[0];
          const base64Data = await new Promise((res, rej) => {
            const reader = new FileReader();
            reader.onload = () => res(reader.result);
            reader.onerror = rej;
            reader.readAsDataURL(file);
          });

          const upRes = await fetch('/api/upload-reference', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fileName: file.name,
              fileData: base64Data
            })
          });
          const upData = await upRes.json();
          if (upData.success && upData.url) {
            uploadedRefUrl = window.location.origin + '/' + upData.url;
          }
        } catch (err) {
          console.error('Reference upload error:', err);
        }
      }

      // Record booking to server
      try {
        await fetch('/api/booking', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service: service,
            idea: idea,
            name: name,
            phone: contact,
            referenceUrl: uploadedRefUrl
          })
        });
      } catch (e) {
        console.error('Booking logging error:', e);
      }

      const phone = (service === 'Татуировка') ? PHONE_TATTOO : PHONE_PMU;
      
      let messageText = 
`Здравствуйте, Лиза! Пишу с сайта.

• Направление: ${service}
• Имя: ${name}
• Номер: ${contact}
• Идея / зона: ${idea}`;

      if (uploadedRefUrl) {
        messageText += `\n• Референс: ${uploadedRefUrl}`;
      }

      const encodedText = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${phone}?text=${encodedText}`;

      submitText.textContent = origText;
      submitBtn.disabled = false;

      window.open(whatsappUrl, '_blank');
    }

    // 7. Interactive Macro Zoom Lightbox Modal
    let isZoomed = false;

    function openModal(imageSrc, title, category, description) {
      const modal = document.getElementById('image-modal');
      const img = document.getElementById('modal-img');
      const titleEl = document.getElementById('modal-title');
      const catEl = document.getElementById('modal-category');
      const descEl = document.getElementById('modal-desc');
      const zoomHint = document.getElementById('zoom-hint-overlay');

      img.src = imageSrc;
      titleEl.textContent = title;
      catEl.textContent = category;
      descEl.textContent = description || '';

      isZoomed = false;
      img.classList.remove('zoom-mode-active');
      zoomHint.style.opacity = '1';

      modal.classList.remove('hidden');
      requestAnimationFrame(() => {
        modal.classList.remove('opacity-0');
      });
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      const modal = document.getElementById('image-modal');
      const img = document.getElementById('modal-img');
      modal.classList.add('opacity-0');
      setTimeout(() => {
        modal.classList.add('hidden');
        img.src = '';
        isZoomed = false;
        img.classList.remove('zoom-mode-active');
        document.body.style.overflow = '';
      }, 300);
    }

    function toggleModalZoom() {
      const img = document.getElementById('modal-img');
      const icon = document.getElementById('modal-zoom-icon');
      const zoomHint = document.getElementById('zoom-hint-overlay');
      isZoomed = !isZoomed;

      if (isZoomed) {
        img.classList.add('zoom-mode-active');
        icon.textContent = 'zoom_out';
        zoomHint.style.opacity = '0';
      } else {
        img.classList.remove('zoom-mode-active');
        icon.textContent = 'zoom_in';
      }
    }

    function handleBackdropClick(e) {
      if (e.target.id === 'image-modal' || e.target.id === 'modal-img-container') {
        closeModal();
      }
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // 8. Hydrate Dynamic Data from CMS (/api/data)
    async function hydrateFromCMS() {
      try {
        const res = await fetch('/api/data');
        if (!res.ok) return;
        const data = await res.json();
        
        // 1. Text & Contacts
        if (data.texts) {
          const t = data.texts;
          if (t.artistName) {
            document.getElementById('hero-artist-name').textContent = t.artistName;
            document.getElementById('about-artist-name').textContent = t.artistName;
            document.getElementById('site-title').textContent = t.artistName + ' — Татуировка и Перманентный макияж в Баку';
          }
          if (t.brandLatin) {
            document.getElementById('nav-brand-latin').textContent = t.brandLatin;
            document.getElementById('footer-logo-brand').textContent = t.brandLatin.toUpperCase();
          }
          if (t.locationBadge) {
            document.getElementById('hero-location-badge').textContent = t.locationBadge;
          }
          if (t.heroSubtitle) {
            document.getElementById('hero-subtitle').textContent = t.heroSubtitle;
          }
          if (t.heroDesc) {
            document.getElementById('hero-desc').textContent = t.heroDesc;
          }
          if (t.aboutQuote) {
            document.getElementById('about-quote').textContent = t.aboutQuote;
          }
          if (t.aboutBio) {
            document.getElementById('about-bio').textContent = t.aboutBio;
          }
          if (t.aboutBadge) {
            document.getElementById('about-location-badge').textContent = t.aboutBadge;
          }
          if (t.aboutPhoto) {
            const aboutImg = document.getElementById('about-artist-img');
            if (aboutImg) aboutImg.src = t.aboutPhoto;
            const aboutCard = document.getElementById('about-artist-card');
            if (aboutCard) {
              aboutCard.onclick = () => openModal(t.aboutPhoto, (t.artistName || 'Лиза Аидаралиева'), t.aboutBadge || 'Баку · рядом с метро 28 Мая', t.aboutQuote || '');
            }
          }
          if (t.footerAddress) {
            document.getElementById('footer-address-label').textContent = t.footerAddress;
          }

          // WhatsApp numbers
          if (t.phoneTattoo) PHONE_TATTOO = t.phoneTattoo;
          if (t.phonePmu) PHONE_PMU = t.phonePmu;
          if (t.phoneTattooDisplay) {
            const navWp = document.getElementById('nav-wp-tattoo-label'); if (navWp) navWp.textContent = t.phoneTattooDisplay;
            const footWp = document.getElementById('footer-wp-tattoo-number'); if (footWp) footWp.textContent = t.phoneTattooDisplay;
          }
          if (t.phonePmuDisplay) {
            const navWp = document.getElementById('nav-wp-pmu-label'); if (navWp) navWp.textContent = t.phonePmuDisplay;
            const footWp = document.getElementById('footer-wp-pmu-number'); if (footWp) footWp.textContent = t.phonePmuDisplay;
          }

          // Instagram handles
          if (t.igTattoo) {
            const igTUrl = 'https://instagram.com/' + t.igTattoo;
            const navL = document.getElementById('nav-ig-tattoo-link'); if (navL) navL.href = igTUrl;
            const cardL = document.getElementById('card-ig-tattoo'); if (cardL) { cardL.href = igTUrl; cardL.title = 'Instagram: @' + t.igTattoo; }
            const footL = document.getElementById('footer-ig-tattoo'); if (footL) { footL.href = igTUrl; footL.title = 'Instagram: @' + t.igTattoo; }
            const navH = document.getElementById('nav-ig-tattoo-handle'); if (navH) navH.textContent = '@' + t.igTattoo;
            const footH = document.getElementById('footer-ig-tattoo-handle'); if (footH) footH.textContent = '@' + t.igTattoo;
          }
          if (t.igPmu) {
            const igPUrl = 'https://instagram.com/' + t.igPmu;
            const navL = document.getElementById('nav-ig-pmu-link'); if (navL) navL.href = igPUrl;
            const cardL = document.getElementById('card-ig-pmu'); if (cardL) { cardL.href = igPUrl; cardL.title = 'Instagram: @' + t.igPmu; }
            const footL = document.getElementById('footer-ig-pmu'); if (footL) { footL.href = igPUrl; footL.title = 'Instagram: @' + t.igPmu; }
            const navH = document.getElementById('nav-ig-pmu-handle'); if (navH) navH.textContent = '@' + t.igPmu;
            const footH = document.getElementById('footer-ig-pmu-handle'); if (footH) footH.textContent = '@' + t.igPmu;
          }
        }

        // 2. Hero Duo Cards
        if (data.heroDuo) {
          if (data.heroDuo.tattoo) {
            const tD = data.heroDuo.tattoo;
            const tImg = document.getElementById('hero-duo-tattoo-img');
            const tBadge = document.getElementById('hero-duo-tattoo-badge');
            const tSub = document.getElementById('hero-duo-tattoo-sub');
            if (tImg && tD.src) tImg.src = tD.src;
            if (tBadge && tD.badge) tBadge.textContent = tD.badge;
            if (tSub && tD.subtitle) tSub.textContent = tD.subtitle;
          }
          if (data.heroDuo.pmu) {
            const pD = data.heroDuo.pmu;
            const pImg = document.getElementById('hero-duo-pmu-img');
            const pBadge = document.getElementById('hero-duo-pmu-badge');
            const pSub = document.getElementById('hero-duo-pmu-sub');
            if (pImg && pD.src) pImg.src = pD.src;
            if (pBadge && pD.badge) pBadge.textContent = pD.badge;
            if (pSub && pD.subtitle) pSub.textContent = pD.subtitle;
          }
        }

        // 2.5 Directions Cards (Tattoo & PMU)
        if (data.directions) {
          if (data.directions.tattoo) {
            const dirT = data.directions.tattoo;
            const tImg = document.getElementById('dir-card-tattoo-img');
            const tBadge = document.getElementById('dir-card-tattoo-badge');
            const tTitle = document.getElementById('dir-card-tattoo-title');
            const tDesc = document.getElementById('dir-card-tattoo-desc');
            if (tImg && dirT.src) tImg.src = dirT.src;
            if (tBadge && dirT.badge) tBadge.textContent = dirT.badge;
            if (tTitle && dirT.title) tTitle.textContent = dirT.title;
            if (tDesc && dirT.desc) tDesc.textContent = dirT.desc;
          }
          if (data.directions.pmu) {
            const dirP = data.directions.pmu;
            const pImg = document.getElementById('dir-card-pmu-img');
            const pBadge = document.getElementById('dir-card-pmu-badge');
            const pTitle = document.getElementById('dir-card-pmu-title');
            const pDesc = document.getElementById('dir-card-pmu-desc');
            if (pImg && dirP.src) pImg.src = dirP.src;
            if (pBadge && dirP.badge) pBadge.textContent = dirP.badge;
            if (pTitle && dirP.title) pTitle.textContent = dirP.title;
            if (pDesc && dirP.desc) pDesc.textContent = dirP.desc;
          }
        }

        // 3. Portfolio Items
        if (data.portfolio && data.portfolio.length > 0) {
          const grid = document.getElementById('portfolio-grid');
          grid.innerHTML = '';

          data.portfolio.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'portfolio-item photo-card group overflow-hidden rounded-sm border border-linen bg-alabaster';
            itemEl.setAttribute('data-category', item.category || 'tattoo');
            itemEl.onclick = () => openModal(item.src, item.title, item.badge, item.desc);

            itemEl.innerHTML = `
              <div class="h-52 sm:h-56 overflow-hidden bg-eggshell relative">
                <img alt="${item.title}" class="w-full h-full object-cover" src="${item.src || 'assets/botanical-tattoo.jpg'}"/>
                
                <!-- Category Badge -->
                <div class="absolute top-2 left-2 bg-alabaster/95 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-linen/90 text-[8px] uppercase tracking-wider ${item.category === 'pmu' ? 'text-clay' : 'text-ink'} font-semibold shadow-xs">
                  ${item.badge || (item.category === 'pmu' ? 'Перманент' : 'Татуировка')}
                </div>
                
                <!-- Zoom Indicator -->
                <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 bg-alabaster/95 backdrop-blur-sm p-1 rounded-full border border-linen text-ink shadow-xs">
                  <span class="material-symbols-outlined text-[13px] block">zoom_in</span>
                </div>

                <!-- Bottom Label -->
                <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-2.5 pt-6 transition-all duration-300 group-hover:pb-3">
                  <span class="text-[12px] font-serif text-alabaster block leading-tight font-medium">${item.title}</span>
                  <span class="text-[9px] text-alabaster/80 block mt-0.5 font-light">${item.meta || ''}</span>
                </div>
              </div>
            `;
            grid.appendChild(itemEl);
          });

          // Set default filter to all works (tattoo and permanent)
          filterPortfolio('all');
        }

      } catch (e) {
        console.log('Hydration fallback used', e);
      }
    }

    // Run hydration when page loads
    window.addEventListener('DOMContentLoaded', hydrateFromCMS);
  </script>
</body>
</html>
