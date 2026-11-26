export const topChromeMarkup = `

  <!-- Top Scroll Progress Bar -->
  <div class="scroll-progress-bar" id="scroll-progress-bar" aria-hidden="true"></div>

  <!-- Minimal Editorial Paper Texture Background -->
  <div class="editorial-paper-overlay" aria-hidden="true"></div>

  <!-- ========================================================================
       HEADER / NAVIGATION
       ======================================================================== -->
  `;

export const headerMarkup = `<header class="brg-header" role="banner">
    <div class="page-container nav-inner">
      
      <!-- Minimal BRG Brand Mark & Title -->
      <a href="#" class="brand-logo-link" aria-label="BOARDRANK GLOBAL Homepage">
        <svg class="brand-mark-svg" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="4" fill="#20211F"/>
          <path d="M10 8H20C23.3137 8 26 10.6863 26 14C26 16.1856 24.8288 18.0984 23.0792 19.1415C25.4069 20.0664 27 22.3429 27 25C27 28.866 23.866 32 20 32H10V8Z" stroke="#F7F6F2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 19H20C23.3137 19 26 16.3137 26 13" stroke="#36B82B" stroke-width="2" stroke-linecap="round"/>
          <circle cx="17" cy="13.5" r="1.5" fill="#36B82B"/>
          <circle cx="18" cy="25.5" r="1.5" fill="#F7F6F2"/>
        </svg>
        <div class="brand-name-group">
          <span class="brand-title">BOARDRANK</span>
          <span class="brand-global-tag">GLOBAL</span>
        </div>
      </a>

      <!-- Center Navigation Menu -->
      <nav class="nav-center" role="navigation" aria-label="Main Navigation">
        <ul class="nav-center-menu">
          <li><a href="#discovery" class="nav-link" data-i18n="nav_discover">Discover</a></li>
          <li><a href="#rankings" class="nav-link" data-i18n="nav_rankings">Rankings</a></li>
          <li><a href="#discovery" class="nav-link" data-i18n="nav_categories">Categories</a></li>
          <li><a href="#reach" class="nav-link" data-i18n="nav_countries">Countries</a></li>
          <li><a href="#how-it-works" class="nav-link" data-i18n="nav_how_it_works">How It Works</a></li>
        </ul>
      </nav>

      <!-- Right Action Items -->
      <div class="nav-actions-right">
        
        <!-- Search Trigger / Command Palette (Ctrl+K) -->
        <button class="btn-nav-search trigger-command-palette" aria-label="Open Universal Search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <span class="search-label">Search</span>
          <kbd class="search-kbd-shortcut">⌘K</kbd>
        </button>

        <!-- Searchable 100+ Language Selector -->
        <button class="btn-lang-selector trigger-language-modal" aria-label="Select Platform Language" title="Select Platform Language">
          <span class="current-lang-flag">🇺🇸</span>
          <span class="current-lang-code">EN</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
        </button>

        <!-- Log In -->
        <a href="#login" class="btn-nav-login" data-i18n="nav_login">Log In</a>

        <!-- Primary CTA: "Get Ranked" -->
        <button class="btn-primary-cta trigger-profile-wizard" data-i18n="nav_get_ranked">
          <span>Get Ranked</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>

        <!-- Mobile Navigation Hamburger -->
        <button class="mobile-nav-toggle" id="mobile-nav-toggle" aria-label="Toggle navigation drawer" aria-expanded="false">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>

    </div>
  </header>

  <!-- Mobile Drawer Menu -->
  <aside class="mobile-nav-drawer" id="mobile-nav-drawer" aria-label="Mobile Navigation Drawer">
    <ul class="mobile-menu-links">
      <li><a href="#discovery" class="nav-link" data-i18n="nav_discover">Discover</a></li>
      <li><a href="#rankings" class="nav-link" data-i18n="nav_rankings">Rankings</a></li>
      <li><a href="#discovery" class="nav-link" data-i18n="nav_categories">Categories</a></li>
      <li><a href="#reach" class="nav-link" data-i18n="nav_countries">Countries</a></li>
      <li><a href="#how-it-works" class="nav-link" data-i18n="nav_how_it_works">How It Works</a></li>
    </ul>
    <div class="mobile-drawer-footer">
      <button class="btn-lang-selector trigger-language-modal w-full">
        <span class="current-lang-flag">🇺🇸</span>
        <span>Change Language (100+)</span>
      </button>
      <button class="btn-primary-cta trigger-profile-wizard w-full" data-i18n="nav_get_ranked">Get Ranked</button>
    </div>
  </aside>`;

export const mainMarkup = `<main id="main-content">

    <!-- ========================================================================
         HERO SECTION — TYPOGRAPHY-LED EDITORIAL COMPOSITION
         ======================================================================== -->
    <section class="hero-section" id="hero">
      <div class="page-container hero-grid">
        
        <!-- Left Content -->
        <div class="hero-content">
          
          <!-- Small Eyebrow Label -->
          <div class="editorial-eyebrow-badge">
            <span data-i18n="hero_badge">GLOBAL BUSINESS DISCOVERY & VISIBILITY INDEX</span>
          </div>

          <!-- Extra-Bold Condensed Headline with Contrasting Editorial Italic Serif -->
          <h1 class="hero-headline">
            <span class="headline-line" data-i18n="hero_title_1">THE <span class="editorial-italic">World</span></span>
            <span class="headline-line" data-i18n="hero_title_2">IS YOUR</span>
            <span class="headline-line" data-i18n="hero_title_3"><span class="editorial-italic">Market.</span></span>
          </h1>

          <!-- Supporting Editorial Text -->
          <p class="hero-subtitle" data-i18n="hero_subtitle">
            Discover businesses. Explore industries. See who's gaining attention around the world.
          </p>

          <!-- CTAs -->
          <div class="hero-cta-group">
            <a href="#rankings" class="btn-primary-cta" data-i18n="hero_cta_explore">
              <span>Explore Rankings</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <button class="btn-secondary-cta trigger-profile-wizard" data-i18n="hero_cta_rank">
              <span>Get Your Business Ranked</span>
            </button>
          </div>

          <!-- Clearly Labelled Telemetry Notice without dots -->
          <div class="hero-demo-notice">
            <span data-i18n="hero_demo_badge">REAL-TIME MARKET TELEMETRY &mdash; 195+ SOVEREIGN JURISDICTIONS</span>
          </div>

        </div>

        <!-- Right Visual: Minimal Cartographic Editorial Globe -->
        <div class="hero-globe-wrapper" id="hero-globe-container">
          
          <canvas id="hero-globe-canvas" role="img" aria-label="Geographical World Discovery Globe. Drag to rotate."></canvas>

          <!-- Dynamic Synchronized Floating Profile Card 1 -->
          <div class="floating-profile-card card-pos-1 is-active" id="globe-card-primary" title="Click to view full enterprise profile" role="region" aria-label="Primary Active Enterprise Highlight">
            <div class="float-card-avatar" style="background:#EFEEE9; color:#20211F">APX</div>
            <div class="float-card-content">
              <div class="float-card-header">
                <span class="float-card-name">Apex Robotics</span>
                <span class="badge-sponsored mini">SPONSORED</span>
              </div>
              <span class="float-card-meta">Rank #01 • Technology • San Francisco, US</span>
              <span class="float-card-reach">▲ +<span class="count-up">14.2%</span> Reach Velocity</span>
            </div>
          </div>

          <!-- Dynamic Synchronized Floating Profile Card 2 -->
          <div class="floating-profile-card card-pos-2 is-active" id="globe-card-secondary" title="Click to view full enterprise profile" role="region" aria-label="Secondary Active Enterprise Highlight">
            <div class="float-card-avatar" style="background:#E8E6DF; color:#20211F">VGQ</div>
            <div class="float-card-content">
              <div class="float-card-header">
                <span class="float-card-name">Vanguard Quantum</span>
                <span class="badge-organic mini">VERIFIED</span>
              </div>
              <span class="float-card-meta">Rank #02 • DeepTech • London, UK</span>
              <span class="float-card-reach"><span class="count-up">97.4</span> Discovery Score</span>
            </div>
          </div>

        </div>

      </div>
    </section>
    <div id="taxonomy-book-root"></div>

    <!-- ========================================================================
         GLOBAL RANKINGS SECTION (INTERACTIVE LEADERBOARD)
         ======================================================================== -->
    <section class="section-wrapper" id="rankings">
      <div class="page-container">
        
        <div class="section-header-editorial">
          <span class="eyebrow-label" data-i18n="rankings_eyebrow">✦ 02 / GLOBAL LEADERBOARD</span>
          <h2 class="section-title" data-i18n="rankings_title">THE WORLD <span class="editorial-italic">is Watching.</span></h2>
          <p class="section-desc" data-i18n="rankings_subtitle">
            Real-time visibility index across verified enterprises and sponsored market leaders.
          </p>
        </div>

        <!-- Leaderboard Main Container -->
        <div class="leaderboard-panel">
          
          <!-- Controls Bar: Tabs & Search/Filter Controls -->
          <div class="leaderboard-controls-bar">
            
            <div class="leaderboard-tabs-group" role="tablist">
              <button class="leaderboard-tab is-active" data-tab="all" role="tab" data-i18n="tab_global">Global Index</button>
              <button class="leaderboard-tab" data-tab="countries" role="tab" data-i18n="tab_countries">By Country</button>
              <button class="leaderboard-tab" data-tab="industries" role="tab" data-i18n="tab_industries">By Industry</button>
              <button class="leaderboard-tab" data-tab="sponsored" role="tab" data-i18n="tab_sponsored">Sponsored Placements</button>
            </div>

            <div class="leaderboard-filters-group">
              <div class="search-input-wrapper">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <input type="text" id="leaderboard-search-input" class="brg-input" placeholder="Search entity, sector, market..." aria-label="Search Leaderboard" />
              </div>
              <select id="leaderboard-country-select" class="brg-input" aria-label="Filter by Country">
<option value="ALL">All Sovereign Markets</option>
                <option value="Australia">Australia</option>
                <option value="Brazil">Brazil</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="Singapore">Singapore</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
              </select>
              <select id="leaderboard-sector-select" class="brg-input" aria-label="Filter by Sector">
                <option value="ALL">All Economic Sectors</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Education">Education</option>
                <option value="Energy">Energy</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Logistics">Logistics</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Media & Entertainment">Media & Entertainment</option>
                <option value="Retail">Retail</option>
                <option value="Services">Services</option>
                <option value="Software">Software</option>
                <option value="Technology">Technology</option>
                <option value="Brands">Brands</option>
                <option value="Companies">Companies</option>
                <option value="Products">Products</option>
              </select>
            </div>

          </div>

          <!-- Transparency Notice Banner -->
          <div class="leaderboard-transparency-banner">
            <div class="transparency-left">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
              <span class="transparency-text">
                <strong>Ranking Integrity:</strong> Sponsored positions are paid promotional placements and strictly demarcated. Illustrative demo data only.
              </span>
            </div>
            <span class="transparency-count" id="leaderboard-results-count">12 Indexed</span>
          </div>

          <!-- Table Container -->
          <div class="leaderboard-table-responsive">
            <table class="leaderboard-table" role="table">
              <thead>
                <tr>
                  <th scope="col" class="col-rank" data-i18n="th_rank">Rank</th>
                  <th scope="col" class="col-company" data-i18n="th_company">Enterprise / Brand</th>
                  <th scope="col" class="col-country" data-i18n="th_country">Market</th>
                  <th scope="col" class="col-industry" data-i18n="th_industry">Sector</th>
                  <th scope="col" class="col-score" data-i18n="th_score">Discovery Index</th>
                  <th scope="col" class="col-movement" data-i18n="th_movement">Velocity</th>
                  <th scope="col" class="col-status" data-i18n="th_status">Listing Status</th>
                  <th scope="col" class="col-action" data-i18n="th_action">Action</th>
                </tr>
              </thead>
              <tbody id="leaderboard-tbody">

                <tr class="leaderboard-row row-sponsored" data-company="APX">
                  <td class="col-rank">
                    <span class="rank-number">#01</span>
                  </td>
                  <td class="col-company">
                    <div class="company-cell">
                      <div class="company-logo" style="background:#EFEEE9; color:#20211F">
                        APX
                      </div>
                      <div class="company-info">
                        <div class="company-name-row">
                          <span class="company-name">Apex Robotics</span>
                          <span class="verified-check" title="Verified Corporate Entity">✓</span>
                        </div>
                        <span class="company-category-tag">Robotics & AI</span>
                      </div>
                    </div>
                  </td>
                  <td class="col-country">
                    <div class="country-cell">
                      <div class="country-code-box">
                        <span class="country-flag">🇺🇸</span>
                        <span class="country-code">US</span>
                      </div>
                      <span class="country-name">United States</span>
                    </div>
                  </td>
                  <td class="col-industry">
                    <span class="industry-badge">Technology</span>
                  </td>
                  <td class="col-score">
                    <div class="score-cell">
                      <div class="score-bar-bg">
                        <div class="score-bar-fill" style="width: 98.7%"></div>
                      </div>
                      <span class="score-value">98.7</span>
                    </div>
                  </td>
                  <td class="col-movement">
                    <span class="movement-pill movement-up">▲ +3</span>
                  </td>
                  <td class="col-status">
                    <span class="badge-sponsored" title="Paid promotional placement. Does not imply editorial endorsement.">
         <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
         SPONSORED
       </span>
                  </td>
                  <td class="col-action">
                    <button class="btn-inspect-profile" data-symbol="APX" aria-label="Inspect Apex Robotics Profile">
                      <span>Inspect</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </td>
                </tr>

                <tr class="leaderboard-row " data-company="VGQ">
                  <td class="col-rank">
                    <span class="rank-number">#02</span>
                  </td>
                  <td class="col-company">
                    <div class="company-cell">
                      <div class="company-logo" style="background:#E8E6DF; color:#20211F">
                        VGQ
                      </div>
                      <div class="company-info">
                        <div class="company-name-row">
                          <span class="company-name">Vanguard Quantum</span>
                          <span class="verified-check" title="Verified Corporate Entity">✓</span>
                        </div>
                        <span class="company-category-tag">Quantum Computing</span>
                      </div>
                    </div>
                  </td>
                  <td class="col-country">
                    <div class="country-cell">
                      <div class="country-code-box">
                        <span class="country-flag">🇬🇧</span>
                        <span class="country-code">GB</span>
                      </div>
                      <span class="country-name">United Kingdom</span>
                    </div>
                  </td>
                  <td class="col-industry">
                    <span class="industry-badge">Technology</span>
                  </td>
                  <td class="col-score">
                    <div class="score-cell">
                      <div class="score-bar-bg">
                        <div class="score-bar-fill" style="width: 97.4%"></div>
                      </div>
                      <span class="score-value">97.4</span>
                    </div>
                  </td>
                  <td class="col-movement">
                    <span class="movement-pill movement-up">▲ +1</span>
                  </td>
                  <td class="col-status">
                    <span class="badge-organic" title="Verified independent organic discovery entry.">
         <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
         VERIFIED
       </span>
                  </td>
                  <td class="col-action">
                    <button class="btn-inspect-profile" data-symbol="VGQ" aria-label="Inspect Vanguard Quantum Profile">
                      <span>Inspect</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </td>
                </tr>

                <tr class="leaderboard-row row-sponsored" data-company="SHL">
                  <td class="col-rank">
                    <span class="rank-number">#03</span>
                  </td>
                  <td class="col-company">
                    <div class="company-cell">
                      <div class="company-logo" style="background:#FCECEB; color:#B74735">
                        SHL
                      </div>
                      <div class="company-info">
                        <div class="company-name-row">
                          <span class="company-name">Sovereign Health Labs</span>
                          <span class="verified-check" title="Verified Corporate Entity">✓</span>
                        </div>
                        <span class="company-category-tag">Biotechnology & Genomics</span>
                      </div>
                    </div>
                  </td>
                  <td class="col-country">
                    <div class="country-cell">
                      <div class="country-code-box">
                        <span class="country-flag">🇨🇭</span>
                        <span class="country-code">CH</span>
                      </div>
                      <span class="country-name">Switzerland</span>
                    </div>
                  </td>
                  <td class="col-industry">
                    <span class="industry-badge">Healthcare</span>
                  </td>
                  <td class="col-score">
                    <div class="score-cell">
                      <div class="score-bar-bg">
                        <div class="score-bar-fill" style="width: 96.1%"></div>
                      </div>
                      <span class="score-value">96.1</span>
                    </div>
                  </td>
                  <td class="col-movement">
                    <span class="movement-pill movement-up">▲ +5</span>
                  </td>
                  <td class="col-status">
                    <span class="badge-sponsored" title="Paid promotional placement. Does not imply editorial endorsement.">
         <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
         SPONSORED
       </span>
                  </td>
                  <td class="col-action">
                    <button class="btn-inspect-profile" data-symbol="SHL" aria-label="Inspect Sovereign Health Labs Profile">
                      <span>Inspect</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </td>
                </tr>

                <tr class="leaderboard-row " data-company="NCE">
                  <td class="col-rank">
                    <span class="rank-number">#04</span>
                  </td>
                  <td class="col-company">
                    <div class="company-cell">
                      <div class="company-logo" style="background:#EAF7EA; color:#36B82B">
                        NCE
                      </div>
                      <div class="company-info">
                        <div class="company-name-row">
                          <span class="company-name">Nippon Clean Energy</span>
                          <span class="verified-check" title="Verified Corporate Entity">✓</span>
                        </div>
                        <span class="company-category-tag">Clean Energy & Hydrogen</span>
                      </div>
                    </div>
                  </td>
                  <td class="col-country">
                    <div class="country-cell">
                      <div class="country-code-box">
                        <span class="country-flag">🇯🇵</span>
                        <span class="country-code">JP</span>
                      </div>
                      <span class="country-name">Japan</span>
                    </div>
                  </td>
                  <td class="col-industry">
                    <span class="industry-badge">Manufacturing</span>
                  </td>
                  <td class="col-score">
                    <div class="score-cell">
                      <div class="score-bar-bg">
                        <div class="score-bar-fill" style="width: 95.3%"></div>
                      </div>
                      <span class="score-value">95.3</span>
                    </div>
                  </td>
                  <td class="col-movement">
                    <span class="movement-pill movement-neutral">— 0</span>
                  </td>
                  <td class="col-status">
                    <span class="badge-organic" title="Verified independent organic discovery entry.">
         <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
         VERIFIED
       </span>
                  </td>
                  <td class="col-action">
                    <button class="btn-inspect-profile" data-symbol="NCE" aria-label="Inspect Nippon Clean Energy Profile">
                      <span>Inspect</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </td>
                </tr>

                <tr class="leaderboard-row row-sponsored" data-company="KGL">
                  <td class="col-rank">
                    <span class="rank-number">#05</span>
                  </td>
                  <td class="col-company">
                    <div class="company-cell">
                      <div class="company-logo" style="background:#EFEEE9; color:#20211F">
                        KGL
                      </div>
                      <div class="company-info">
                        <div class="company-name-row">
                          <span class="company-name">Kinetix Global Logistics</span>
                          <span class="verified-check" title="Verified Corporate Entity">✓</span>
                        </div>
                        <span class="company-category-tag">Autonomous Supply Chain</span>
                      </div>
                    </div>
                  </td>
                  <td class="col-country">
                    <div class="country-cell">
                      <div class="country-code-box">
                        <span class="country-flag">🇸🇬</span>
                        <span class="country-code">SG</span>
                      </div>
                      <span class="country-name">Singapore</span>
                    </div>
                  </td>
                  <td class="col-industry">
                    <span class="industry-badge">Services</span>
                  </td>
                  <td class="col-score">
                    <div class="score-cell">
                      <div class="score-bar-bg">
                        <div class="score-bar-fill" style="width: 94.8%"></div>
                      </div>
                      <span class="score-value">94.8</span>
                    </div>
                  </td>
                  <td class="col-movement">
                    <span class="movement-pill movement-up">▲ +2</span>
                  </td>
                  <td class="col-status">
                    <span class="badge-sponsored" title="Paid promotional placement. Does not imply editorial endorsement.">
         <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
         SPONSORED
       </span>
                  </td>
                  <td class="col-action">
                    <button class="btn-inspect-profile" data-symbol="KGL" aria-label="Inspect Kinetix Global Logistics Profile">
                      <span>Inspect</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </td>
                </tr>

                <tr class="leaderboard-row " data-company="ACS">
                  <td class="col-rank">
                    <span class="rank-number">#06</span>
                  </td>
                  <td class="col-company">
                    <div class="company-cell">
                      <div class="company-logo" style="background:#E8E6DF; color:#20211F">
                        ACS
                      </div>
                      <div class="company-info">
                        <div class="company-name-row">
                          <span class="company-name">Aetherion Cloud Systems</span>
                          <span class="verified-check" title="Verified Corporate Entity">✓</span>
                        </div>
                        <span class="company-category-tag">Enterprise Infrastructure</span>
                      </div>
                    </div>
                  </td>
                  <td class="col-country">
                    <div class="country-cell">
                      <div class="country-code-box">
                        <span class="country-flag">🇩🇪</span>
                        <span class="country-code">DE</span>
                      </div>
                      <span class="country-name">Germany</span>
                    </div>
                  </td>
                  <td class="col-industry">
                    <span class="industry-badge">Software</span>
                  </td>
                  <td class="col-score">
                    <div class="score-cell">
                      <div class="score-bar-bg">
                        <div class="score-bar-fill" style="width: 93.9%"></div>
                      </div>
                      <span class="score-value">93.9</span>
                    </div>
                  </td>
                  <td class="col-movement">
                    <span class="movement-pill movement-down">▼ -1</span>
                  </td>
                  <td class="col-status">
                    <span class="badge-organic" title="Verified independent organic discovery entry.">
         <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
         VERIFIED
       </span>
                  </td>
                  <td class="col-action">
                    <button class="btn-inspect-profile" data-symbol="ACS" aria-label="Inspect Aetherion Cloud Systems Profile">
                      <span>Inspect</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </td>
                </tr>

                <tr class="leaderboard-row row-sponsored" data-company="EFG">
                  <td class="col-rank">
                    <span class="rank-number">#07</span>
                  </td>
                  <td class="col-company">
                    <div class="company-cell">
                      <div class="company-logo" style="background:#FDF3E6; color:#B74735">
                        EFG
                      </div>
                      <div class="company-info">
                        <div class="company-name-row">
                          <span class="company-name">Emirates FinTech Gateway</span>
                          <span class="verified-check" title="Verified Corporate Entity">✓</span>
                        </div>
                        <span class="company-category-tag">Institutional Digital Assets</span>
                      </div>
                    </div>
                  </td>
                  <td class="col-country">
                    <div class="country-cell">
                      <div class="country-code-box">
                        <span class="country-flag">🇦🇪</span>
                        <span class="country-code">AE</span>
                      </div>
                      <span class="country-name">United Arab Emirates</span>
                    </div>
                  </td>
                  <td class="col-industry">
                    <span class="industry-badge">Finance</span>
                  </td>
                  <td class="col-score">
                    <div class="score-cell">
                      <div class="score-bar-bg">
                        <div class="score-bar-fill" style="width: 93.2%"></div>
                      </div>
                      <span class="score-value">93.2</span>
                    </div>
                  </td>
                  <td class="col-movement">
                    <span class="movement-pill movement-up">▲ +6</span>
                  </td>
                  <td class="col-status">
                    <span class="badge-sponsored" title="Paid promotional placement. Does not imply editorial endorsement.">
         <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
         SPONSORED
       </span>
                  </td>
                  <td class="col-action">
                    <button class="btn-inspect-profile" data-symbol="EFG" aria-label="Inspect Emirates FinTech Gateway Profile">
                      <span>Inspect</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </td>
                </tr>

                <tr class="leaderboard-row " data-company="TVB">
                  <td class="col-rank">
                    <span class="rank-number">#08</span>
                  </td>
                  <td class="col-company">
                    <div class="company-cell">
                      <div class="company-logo" style="background:#EAF7EA; color:#36B82B">
                        TVB
                      </div>
                      <div class="company-info">
                        <div class="company-name-row">
                          <span class="company-name">TerraVerde Biosystems</span>
                          <span class="verified-check" title="Verified Corporate Entity">✓</span>
                        </div>
                        <span class="company-category-tag">AgTech & Carbon Capture</span>
                      </div>
                    </div>
                  </td>
                  <td class="col-country">
                    <div class="country-cell">
                      <div class="country-code-box">
                        <span class="country-flag">🇧🇷</span>
                        <span class="country-code">BR</span>
                      </div>
                      <span class="country-name">Brazil</span>
                    </div>
                  </td>
                  <td class="col-industry">
                    <span class="industry-badge">Agriculture</span>
                  </td>
                  <td class="col-score">
                    <div class="score-cell">
                      <div class="score-bar-bg">
                        <div class="score-bar-fill" style="width: 92.5%"></div>
                      </div>
                      <span class="score-value">92.5</span>
                    </div>
                  </td>
                  <td class="col-movement">
                    <span class="movement-pill movement-new">★ NEW</span>
                  </td>
                  <td class="col-status">
                    <span class="badge-organic" title="Verified independent organic discovery entry.">
         <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
         VERIFIED
       </span>
                  </td>
                  <td class="col-action">
                    <button class="btn-inspect-profile" data-symbol="TVB" aria-label="Inspect TerraVerde Biosystems Profile">
                      <span>Inspect</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </td>
                </tr>

                <tr class="leaderboard-row row-sponsored" data-company="BNS">
                  <td class="col-rank">
                    <span class="rank-number">#09</span>
                  </td>
                  <td class="col-company">
                    <div class="company-cell">
                      <div class="company-logo" style="background:#EFEEE9; color:#20211F">
                        BNS
                      </div>
                      <div class="company-info">
                        <div class="company-name-row">
                          <span class="company-name">Bharat NeuroSystems</span>
                          <span class="verified-check" title="Verified Corporate Entity">✓</span>
                        </div>
                        <span class="company-category-tag">Edge Neural Hardware</span>
                      </div>
                    </div>
                  </td>
                  <td class="col-country">
                    <div class="country-cell">
                      <div class="country-code-box">
                        <span class="country-flag">🇮🇳</span>
                        <span class="country-code">IN</span>
                      </div>
                      <span class="country-name">India</span>
                    </div>
                  </td>
                  <td class="col-industry">
                    <span class="industry-badge">Technology</span>
                  </td>
                  <td class="col-score">
                    <div class="score-cell">
                      <div class="score-bar-bg">
                        <div class="score-bar-fill" style="width: 91.8%"></div>
                      </div>
                      <span class="score-value">91.8</span>
                    </div>
                  </td>
                  <td class="col-movement">
                    <span class="movement-pill movement-up">▲ +4</span>
                  </td>
                  <td class="col-status">
                    <span class="badge-sponsored" title="Paid promotional placement. Does not imply editorial endorsement.">
         <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
         SPONSORED
       </span>
                  </td>
                  <td class="col-action">
                    <button class="btn-inspect-profile" data-symbol="BNS" aria-label="Inspect Bharat NeuroSystems Profile">
                      <span>Inspect</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </td>
                </tr>

                <tr class="leaderboard-row " data-company="NOC">
                  <td class="col-rank">
                    <span class="rank-number">#10</span>
                  </td>
                  <td class="col-company">
                    <div class="company-cell">
                      <div class="company-logo" style="background:#E8E6DF; color:#20211F">
                        NOC
                      </div>
                      <div class="company-info">
                        <div class="company-name-row">
                          <span class="company-name">Nordic Oceanics</span>
                          <span class="verified-check" title="Verified Corporate Entity">✓</span>
                        </div>
                        <span class="company-category-tag">Offshore Energy & Robotics</span>
                      </div>
                    </div>
                  </td>
                  <td class="col-country">
                    <div class="country-cell">
                      <div class="country-code-box">
                        <span class="country-flag">🇸🇪</span>
                        <span class="country-code">SE</span>
                      </div>
                      <span class="country-name">Sweden</span>
                    </div>
                  </td>
                  <td class="col-industry">
                    <span class="industry-badge">Companies</span>
                  </td>
                  <td class="col-score">
                    <div class="score-cell">
                      <div class="score-bar-bg">
                        <div class="score-bar-fill" style="width: 90.9%"></div>
                      </div>
                      <span class="score-value">90.9</span>
                    </div>
                  </td>
                  <td class="col-movement">
                    <span class="movement-pill movement-down">▼ -2</span>
                  </td>
                  <td class="col-status">
                    <span class="badge-organic" title="Verified independent organic discovery entry.">
         <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
         VERIFIED
       </span>
                  </td>
                  <td class="col-action">
                    <button class="btn-inspect-profile" data-symbol="NOC" aria-label="Inspect Nordic Oceanics Profile">
                      <span>Inspect</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </td>
                </tr>

                <tr class="leaderboard-row " data-company="ASY">
                  <td class="col-rank">
                    <span class="rank-number">#11</span>
                  </td>
                  <td class="col-company">
                    <div class="company-cell">
                      <div class="company-logo" style="background:#EAF7EA; color:#36B82B">
                        ASY
                      </div>
                      <div class="company-info">
                        <div class="company-name-row">
                          <span class="company-name">Austral Synthetics</span>
                          <span class="verified-check" title="Verified Corporate Entity">✓</span>
                        </div>
                        <span class="company-category-tag">Bio-Polymer Engineering</span>
                      </div>
                    </div>
                  </td>
                  <td class="col-country">
                    <div class="country-cell">
                      <div class="country-code-box">
                        <span class="country-flag">🇦🇺</span>
                        <span class="country-code">AU</span>
                      </div>
                      <span class="country-name">Australia</span>
                    </div>
                  </td>
                  <td class="col-industry">
                    <span class="industry-badge">Products</span>
                  </td>
                  <td class="col-score">
                    <div class="score-cell">
                      <div class="score-bar-bg">
                        <div class="score-bar-fill" style="width: 89.7%"></div>
                      </div>
                      <span class="score-value">89.7</span>
                    </div>
                  </td>
                  <td class="col-movement">
                    <span class="movement-pill movement-up">▲ +1</span>
                  </td>
                  <td class="col-status">
                    <span class="badge-organic" title="Verified independent organic discovery entry.">
         <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
         VERIFIED
       </span>
                  </td>
                  <td class="col-action">
                    <button class="btn-inspect-profile" data-symbol="ASY" aria-label="Inspect Austral Synthetics Profile">
                      <span>Inspect</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </td>
                </tr>

                <tr class="leaderboard-row row-sponsored" data-company="LHH">
                  <td class="col-rank">
                    <span class="rank-number">#12</span>
                  </td>
                  <td class="col-company">
                    <div class="company-cell">
                      <div class="company-logo" style="background:#FDF3E6; color:#20211F">
                        LHH
                      </div>
                      <div class="company-info">
                        <div class="company-name-row">
                          <span class="company-name">Lumière Haute Horlogerie</span>
                          <span class="verified-check" title="Verified Corporate Entity">✓</span>
                        </div>
                        <span class="company-category-tag">Luxury & Micro-Mechanics</span>
                      </div>
                    </div>
                  </td>
                  <td class="col-country">
                    <div class="country-cell">
                      <div class="country-code-box">
                        <span class="country-flag">🇫🇷</span>
                        <span class="country-code">FR</span>
                      </div>
                      <span class="country-name">France</span>
                    </div>
                  </td>
                  <td class="col-industry">
                    <span class="industry-badge">Brands</span>
                  </td>
                  <td class="col-score">
                    <div class="score-cell">
                      <div class="score-bar-bg">
                        <div class="score-bar-fill" style="width: 89.2%"></div>
                      </div>
                      <span class="score-value">89.2</span>
                    </div>
                  </td>
                  <td class="col-movement">
                    <span class="movement-pill movement-up">▲ +3</span>
                  </td>
                  <td class="col-status">
                    <span class="badge-sponsored" title="Paid promotional placement. Does not imply editorial endorsement.">
         <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
         SPONSORED
       </span>
                  </td>
                  <td class="col-action">
                    <button class="btn-inspect-profile" data-symbol="LHH" aria-label="Inspect Lumière Haute Horlogerie Profile">
                      <span>Inspect</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Leaderboard Footer Bar -->
          <div class="leaderboard-footer">
            <span class="leaderboard-note">Demarcated sponsored tiers do not guarantee commercial conversions or customer sales.</span>
            <button class="btn-secondary-cta trigger-command-palette" data-i18n="btn_explore_all">
              <span>Explore All 5,000+ Rankings</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>

        </div>

      </div>
    </section>

    <!-- ========================================================================
         WORLDWIDE REACH SECTION
         ======================================================================== -->
    <section class="section-wrapper" id="reach">
      <div class="page-container">
        
        <div class="section-header-editorial">
          <span class="eyebrow-label" data-i18n="reach_eyebrow">✦ 03 / SOVEREIGN MARKETS</span>
          <h2 class="section-title" data-i18n="reach_title">FROM ANYWHERE. <span class="editorial-italic">To Everywhere.</span></h2>
          <p class="section-desc" data-i18n="reach_subtitle">
            A borderless discovery infrastructure connecting enterprises across 195+ sovereign markets and 12 distinct economic sectors.
          </p>
        </div>

        <div class="reach-layout-grid">
          
          <!-- Left: Region Filter Tabs & Searchable Sovereign Markets -->
          <div class="reach-selector-card">
            
            <div class="reach-region-tabs">
              <button class="reach-region-pill is-active" data-region="ALL">All Continents</button>
              <button class="reach-region-pill" data-region="Americas">Americas</button>
              <button class="reach-region-pill" data-region="Europe">Europe</button>
              <button class="reach-region-pill" data-region="Asia-Pacific">Asia-Pacific</button>
              <button class="reach-region-pill" data-region="Middle East">Middle East</button>
              <button class="reach-region-pill" data-region="Africa">Africa</button>
            </div>

            <div class="search-input-wrapper w-full">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input type="text" id="reach-country-search" class="brg-input w-full" placeholder="Search 195+ sovereign markets..." aria-label="Search Sovereign Markets" />
            </div>

            <div class="markets-grid-scroll" id="sovereign-markets-grid">

                <button class="market-pill-card is-selected" data-code="US">
                  <span class="market-flag">🇺🇸</span>
                  <span class="market-name">United States</span>
                  <span class="market-profiles-tag">1,840+</span>
                </button>

                <button class="market-pill-card " data-code="GB">
                  <span class="market-flag">🇬🇧</span>
                  <span class="market-name">United Kingdom</span>
                  <span class="market-profiles-tag">890+</span>
                </button>

                <button class="market-pill-card " data-code="DE">
                  <span class="market-flag">🇩🇪</span>
                  <span class="market-name">Germany</span>
                  <span class="market-profiles-tag">940+</span>
                </button>

                <button class="market-pill-card " data-code="JP">
                  <span class="market-flag">🇯🇵</span>
                  <span class="market-name">Japan</span>
                  <span class="market-profiles-tag">820+</span>
                </button>

                <button class="market-pill-card " data-code="SG">
                  <span class="market-flag">🇸🇬</span>
                  <span class="market-name">Singapore</span>
                  <span class="market-profiles-tag">610+</span>
                </button>

                <button class="market-pill-card " data-code="AE">
                  <span class="market-flag">🇦🇪</span>
                  <span class="market-name">United Arab Emirates</span>
                  <span class="market-profiles-tag">540+</span>
                </button>

                <button class="market-pill-card " data-code="CH">
                  <span class="market-flag">🇨🇭</span>
                  <span class="market-name">Switzerland</span>
                  <span class="market-profiles-tag">480+</span>
                </button>

                <button class="market-pill-card " data-code="IN">
                  <span class="market-flag">🇮🇳</span>
                  <span class="market-name">India</span>
                  <span class="market-profiles-tag">1,120+</span>
                </button>

                <button class="market-pill-card " data-code="BR">
                  <span class="market-flag">🇧🇷</span>
                  <span class="market-name">Brazil</span>
                  <span class="market-profiles-tag">430+</span>
                </button>

                <button class="market-pill-card " data-code="SE">
                  <span class="market-flag">🇸🇪</span>
                  <span class="market-name">Sweden</span>
                  <span class="market-profiles-tag">360+</span>
                </button>

                <button class="market-pill-card " data-code="AU">
                  <span class="market-flag">🇦🇺</span>
                  <span class="market-name">Australia</span>
                  <span class="market-profiles-tag">490+</span>
                </button>

                <button class="market-pill-card " data-code="FR">
                  <span class="market-flag">🇫🇷</span>
                  <span class="market-name">France</span>
                  <span class="market-profiles-tag">730+</span>
                </button>

                <button class="market-pill-card " data-code="CA">
                  <span class="market-flag">🇨🇦</span>
                  <span class="market-name">Canada</span>
                  <span class="market-profiles-tag">580+</span>
                </button>

                <button class="market-pill-card " data-code="KR">
                  <span class="market-flag">🇰🇷</span>
                  <span class="market-name">South Korea</span>
                  <span class="market-profiles-tag">690+</span>
                </button>

                <button class="market-pill-card " data-code="NL">
                  <span class="market-flag">🇳🇱</span>
                  <span class="market-name">Netherlands</span>
                  <span class="market-profiles-tag">410+</span>
                </button>

                <button class="market-pill-card " data-code="IL">
                  <span class="market-flag">🇮🇱</span>
                  <span class="market-name">Israel</span>
                  <span class="market-profiles-tag">520+</span>
                </button>

                <button class="market-pill-card " data-code="SA">
                  <span class="market-flag">🇸🇦</span>
                  <span class="market-name">Saudi Arabia</span>
                  <span class="market-profiles-tag">380+</span>
                </button>

                <button class="market-pill-card " data-code="ZA">
                  <span class="market-flag">🇿🇦</span>
                  <span class="market-name">South Africa</span>
                  <span class="market-profiles-tag">290+</span>
                </button>

                <button class="market-pill-card " data-code="NG">
                  <span class="market-flag">🇳🇬</span>
                  <span class="market-name">Nigeria</span>
                  <span class="market-profiles-tag">340+</span>
                </button>

                <button class="market-pill-card " data-code="MX">
                  <span class="market-flag">🇲🇽</span>
                  <span class="market-name">Mexico</span>
                  <span class="market-profiles-tag">370+</span>
                </button>
            </div>

          </div>

          <!-- Right: Interactive Active Country Highlight Card -->
          <div id="market-active-detail">

            <div class="market-detail-card">
              <div class="market-hero-media">
                <img src="assets/images/market-usa.jpg" alt="United States Sovereign Market" class="market-hero-img" loading="lazy" />
                <div class="market-media-overlay"></div>
                <div class="market-hero-floating-meta">
                  <span class="market-region-pill">Americas Sovereign Market</span>
                  <span class="market-code-badge">US</span>
                </div>
              </div>
              <div class="market-detail-body">
                <div class="market-detail-header">
                  <div class="market-hero-flag">🇺🇸</div>
                  <div class="market-hero-title">
                    <h3>United States</h3>
                    <span class="market-region-tag">Americas Sovereign Market</span>
                  </div>
                </div>
                <div class="market-stats-row">
                  <div class="market-stat-box">
                    <span class="market-stat-label">Active Profiles</span>
                    <span class="market-stat-value count-up">1,840+</span>
                  </div>
                  <div class="market-stat-box">
                    <span class="market-stat-label">Leading Sector</span>
                    <span class="market-stat-value highlight-red">Technology & AI</span>
                  </div>
                  <div class="market-stat-box">
                    <span class="market-stat-label">Regional Discovery Reach</span>
                    <span class="market-stat-value highlight-green count-up">98.4%</span>
                  </div>
                </div>
                <div class="market-footer-row">
                  <div class="market-top-brand">
                    <span class="label-muted">Rank #01 In Market:</span>
                    <strong>Apex Robotics</strong>
                  </div>
                  <button class="btn-market-explore" onclick="window.filterByMarketName('United States')">
                    <span>Filter Leaderboard by United States</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Macro Stats Strip -->
        <div class="macro-stats-strip">
          <div class="macro-stat-item">
            <span class="macro-number highlight-green count-up">195+</span>
            <span class="macro-label" data-i18n="reach_stat_countries">Sovereign Markets</span>
          </div>
          <div class="macro-stat-item">
            <span class="macro-number count-up">12</span>
            <span class="macro-label" data-i18n="reach_stat_sectors">Economic Sectors</span>
          </div>
          <div class="macro-stat-item">
            <span class="macro-number count-up">100+</span>
            <span class="macro-label" data-i18n="reach_stat_languages">Languages Architecture</span>
          </div>
          <div class="macro-stat-item">
            <span class="macro-number highlight-green count-up">99.99%</span>
            <span class="macro-label" data-i18n="reach_stat_uptime">Discovery Engine Uptime</span>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================================================
         HOW IT WORKS SECTION (TWO STRATEGIC USER JOURNEYS)
         ======================================================================== -->
    <section class="section-wrapper" id="how-it-works">
      <div class="page-container">
        
        <div class="section-header-editorial text-center">
          <span class="eyebrow-label" data-i18n="how_eyebrow">✦ 04 / OPERATIONAL FRAMEWORK</span>
          <h2 class="section-title" data-i18n="how_title">HOW BOARDRANK <span class="editorial-italic">Operates</span></h2>
        </div>

        <!-- Interactive Journey Toggle -->
        <div class="how-toggle-wrapper">
          <div class="how-toggle-group">
            <button class="how-toggle-btn is-active" data-track="visitors" data-i18n="how_toggle_visitors">
              FOR VISITORS & BUYERS
            </button>
            <button class="how-toggle-btn" data-track="businesses" data-i18n="how_toggle_businesses">
              FOR ENTERPRISES & BRANDS
            </button>
          </div>
        </div>

        <!-- Track 1: For Visitors -->
        <div class="steps-timeline-track track-visitors" id="how-track-visitors">
          <div class="step-card">
            <span class="step-number-tag">01 / DISCOVERY</span>
            <h3 class="step-title" data-i18n="how_vis_step1_title">1. Discover Businesses</h3>
            <p class="step-desc" data-i18n="how_vis_step1_desc">
              Search across 100+ categories, regional markets, and verified industry niches worldwide.
            </p>
          </div>
          <div class="step-card">
            <span class="step-number-tag">02 / TAXONOMY</span>
            <h3 class="step-title" data-i18n="how_vis_step2_title">2. Explore Industries & Categories</h3>
            <p class="step-desc" data-i18n="how_vis_step2_desc">
              Uncover market leaders, fast-growing startups, and generational product breakthroughs.
            </p>
          </div>
          <div class="step-card">
            <span class="step-number-tag">03 / VERIFICATION</span>
            <h3 class="step-title" data-i18n="how_vis_step3_title">3. Compare Public Profiles & Rankings</h3>
            <p class="step-desc" data-i18n="how_vis_step3_desc">
              Review company credentials, verified operational markets, and comparative visibility metrics.
            </p>
          </div>
          <div class="step-card">
            <span class="step-number-tag">04 / CONNECTION</span>
            <h3 class="step-title" data-i18n="how_vis_step4_title">4. Connect With Businesses</h3>
            <p class="step-desc" data-i18n="how_vis_step4_desc">
              Initiate direct commercial inquiries, strategic partnerships, and cross-border ventures.
            </p>
          </div>
        </div>

        <!-- Track 2: For Businesses -->
        <div class="steps-timeline-track track-businesses is-hidden" id="how-track-businesses">
          <div class="step-card">
            <span class="step-number-tag">01 / REGISTRY</span>
            <h3 class="step-title" data-i18n="how_biz_step1_title">1. Create a Business Profile</h3>
            <p class="step-desc" data-i18n="how_biz_step1_desc">
              Establish your verified corporate presence with comprehensive multi-language presentation.
            </p>
          </div>
          <div class="step-card">
            <span class="step-number-tag">02 / TAXONOMY</span>
            <h3 class="step-title" data-i18n="how_biz_step2_title">2. Select Industry & Category</h3>
            <p class="step-desc" data-i18n="how_biz_step2_desc">
              Target your exact commercial taxonomy and position directly in front of high-intent searchers.
            </p>
          </div>
          <div class="step-card">
            <span class="step-number-tag">03 / GEOGRAPHY</span>
            <h3 class="step-title" data-i18n="how_biz_step3_title">3. Choose Target Geography</h3>
            <p class="step-desc" data-i18n="how_biz_step3_desc">
              Deploy visibility across specific nations, regional economic blocs, or worldwide leaderboards.
            </p>
          </div>
          <div class="step-card">
            <span class="step-number-tag">04 / SPONSORSHIP</span>
            <h3 class="step-title" data-i18n="how_biz_step4_title">4. Select Sponsored Campaign</h3>
            <p class="step-desc" data-i18n="how_biz_step4_desc">
              Transparently acquire prioritized placement clearly demarcated as Sponsored.
            </p>
          </div>
          <div class="step-card">
            <span class="step-number-tag">05 / TELEMETRY</span>
            <h3 class="step-title" data-i18n="how_biz_step5_title">5. Monitor Performance</h3>
            <p class="step-desc" data-i18n="how_biz_step5_desc">
              Access real-time discovery analytics, profile impressions, and international audience reach.
            </p>
          </div>
        </div>

        <!-- Legal & Quality Transparency Notice -->
        <div class="compliance-disclaimer-editorial" data-i18n="disclaimer_text">
          Transparency Notice: Boardrank Global is an open international business discovery platform. Sponsored placements are paid promotional campaigns to enhance brand visibility and do not represent editorial ranking, quality certification, or guaranteed sales conversion.
        </div>

      </div>
    </section>

    <!-- ========================================================================
         BUSINESS VISIBILITY CTA SECTION
         ======================================================================== -->
    <section class="section-wrapper" id="visibility-cta">
      <div class="page-container">
        <div class="cta-cinematic-banner">
          <div class="cta-grid-layout">
            <div class="cta-content-wrapper">
              <span class="eyebrow-label" data-i18n="cta_badge">✦ 05 / EXPAND YOUR REACH</span>
              <h2 class="cta-headline" data-i18n="cta_title">READY TO BE <span class="editorial-italic">Seen?</span></h2>
              <p class="cta-subtext" data-i18n="cta_subtitle">
                Your business deserves a place in the global conversation. Create your profile and explore sponsored visibility opportunities across 195+ sovereign markets.
              </p>
              <div class="cta-trust-strip">
                <span>✦ VERIFIED DIRECTORY</span>
                <span>✦ BORDERLESS REACH</span>
                <span>✦ AUDITED METRICS</span>
              </div>
              <div class="cta-buttons-row">
                <button class="btn-primary-cta trigger-profile-wizard" data-i18n="cta_btn_profile">
                  <span>Create Business Profile</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <button class="btn-secondary-cta trigger-profile-wizard" data-i18n="cta_btn_options">
                  <span>Explore Ranking Options</span>
                </button>
              </div>
            </div>
            <div class="cta-visual-frame">
              <img src="assets/images/sector-finance.jpg" alt="Global Financial and Enterprise Discovery" class="cta-visual-img" loading="lazy" />
              <div class="cta-visual-caption">
                <span>GLOBAL CAPITAL & VISIBILITY PLATFORM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>`;


export const footerMarkup = `<footer class="brg-footer" role="contentinfo">
    <div class="footer-inner">

      <!-- TOP SECTION: 3 COLUMNS -->
      <div class="footer-top-row">

        <!-- LEFT — BRAND & DESCRIPTOR -->
        <div class="footer-brand-col">
          <a href="#" class="footer-brand-link" aria-label="BOARDRANK GLOBAL Home">
            <svg class="footer-brand-mark" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="4" fill="#2E372A"/>
              <path d="M10 8H20C23.3137 8 26 10.6863 26 14C26 16.1856 24.8288 18.0984 23.0792 19.1415C25.4069 20.0664 27 22.3429 27 25C27 28.866 23.866 32 20 32H10V8Z" stroke="#F7F6F0" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 19H20C23.3137 19 26 16.3137 26 13" stroke="#A9D84A" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
            <div class="footer-brand-names">
              <span class="footer-brand-name">BOARDRANK</span>
              <span class="footer-brand-tag">GLOBAL</span>
            </div>
          </a>
          <p class="footer-brand-desc">GLOBAL BUSINESS DISCOVERY PLATFORM</p>
        </div>

        <!-- CENTER — MAIN BRAND STATEMENT -->
        <div class="footer-statement-col">
          <h2 class="footer-main-statement">
            <span class="stmt-line">THE WORLD COMPETES.</span>
            <span class="stmt-line">THE WORLD RANKS.</span>
          </h2>
        </div>

        <!-- RIGHT — CIRCULAR ACTION BUTTON -->
        <div class="footer-action-col">
          <a href="#hero" class="footer-circle-btn" aria-label="Back to top">
            <svg class="footer-arrow-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

      </div>

      <!-- UTILITY & COMPACT NAVIGATION STRIP -->
      <div class="footer-utility-strip">
        <nav class="footer-compact-nav" aria-label="Footer Navigation">
          <a href="#discovery" class="footer-compact-link">Discover</a>
          <span class="footer-compact-sep">·</span>
          <a href="#rankings" class="footer-compact-link">Rankings</a>
          <span class="footer-compact-sep">·</span>
          <a href="#discovery" class="footer-compact-link">Categories</a>
          <span class="footer-compact-sep">·</span>
          <a href="#reach" class="footer-compact-link">Countries</a>
          <span class="footer-compact-sep">·</span>
          <a href="#how-it-works" class="footer-compact-link">How It Works</a>
          <span class="footer-compact-sep">·</span>
          <a href="#visibility-cta" class="footer-compact-link trigger-profile-wizard">Get Ranked</a>
          <span class="footer-compact-sep">·</span>
          <a href="#rankings" class="footer-compact-link">Transparency</a>
          <span class="footer-compact-sep">·</span>
          <a href="#privacy" class="footer-compact-link">Privacy</a>
          <span class="footer-compact-sep">·</span>
          <a href="#terms" class="footer-compact-link">Terms</a>
        </nav>

        <div class="footer-utility-actions">
          <!-- Audio Toggle Button -->
          <button class="footer-icon-btn btn-sound-toggle" id="toggle-sound-btn" aria-label="Turn sound on" aria-pressed="false">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            <span class="sound-btn-label">AUDIO OFF</span>
          </button>

          <!-- Language Selector Trigger in Footer -->
          <button class="footer-icon-btn trigger-language-modal" aria-label="Select Platform Language">
            <span class="current-lang-flag">🇺🇸</span>
            <span class="current-lang-code">EN</span>
          </button>
        </div>
      </div>

      <!-- HORIZONTAL DIVIDER -->
      <hr class="footer-hairline-divider" />

      <!-- BOTTOM FOOTER BAR: THREE ALIGNED CONTENT AREAS -->
      <div class="footer-bottom-bar">
        <div class="footer-bottom-item footer-bottom-left">
          <span>© 2026 BOARDRANK GLOBAL. All rights reserved.</span>
        </div>
        <div class="footer-bottom-item footer-bottom-center">
          <span>The world's businesses. One global discovery platform.</span>
        </div>
        <div class="footer-bottom-item footer-bottom-right">
          <a href="#visibility-cta" class="footer-say-hello trigger-profile-wizard" aria-label="Say Hello to Boardrank Global">
            <span>Say Hello</span>
            <span class="hello-arrow">↗</span>
          </a>
        </div>
      </div>

    </div>
  </footer>`;

export const modalMarkup = `<!-- ========================================================================
       MODAL: SEARCHABLE 100+ LANGUAGE SELECTOR
       ======================================================================== -->
  <div class="modal-overlay" id="language-modal" role="dialog" aria-modal="true" aria-hidden="true">
    <div class="modal-backdrop"></div>
    <div class="modal-dialog-card">
      <div class="modal-header-row">
        <div class="modal-title-group">
          <h3 data-i18n="lang_modal_title">Select Platform Language</h3>
          <p data-i18n="lang_modal_subtitle">Explore Boardrank Global in over 100+ native languages and regional dialects.</p>
        </div>
        <button class="btn-close-modal" id="close-language-modal" aria-label="Close language selector">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <div class="lang-modal-search-box">
        <div class="search-input-wrapper w-full">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="text" id="lang-modal-search" class="brg-input w-full" placeholder="Search language by name or native script..." data-i18n-placeholder="lang_search_placeholder" />
        </div>
      </div>

      <div class="lang-region-filters">
        <button class="lang-region-pill is-active" data-region="ALL">All Languages</button>
        <button class="lang-region-pill" data-region="Americas">Americas</button>
        <button class="lang-region-pill" data-region="Europe">Europe</button>
        <button class="lang-region-pill" data-region="Asia-Pacific">Asia-Pacific</button>
        <button class="lang-region-pill" data-region="Middle East">Middle East (RTL)</button>
        <button class="lang-region-pill" data-region="Africa">Africa</button>
      </div>

      <div class="lang-modal-grid" id="lang-modal-list">
        <!-- Rendered dynamically by main.js with 100+ languages -->
      </div>
    </div>
  </div>

  <!-- ========================================================================
       MODAL: COMMAND PALETTE (Ctrl+K / ⌘K)
       ======================================================================== -->
  <div class="modal-overlay" id="command-palette-modal" role="dialog" aria-modal="true" aria-hidden="true">
    <div class="modal-backdrop palette-backdrop"></div>
    <div class="modal-dialog-card palette-dialog">
      <div class="palette-input-box">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input type="text" id="command-palette-input" class="palette-input" placeholder="Type a command, enterprise name, market or sector..." />
        <button class="btn-close-modal" id="close-command-palette" aria-label="Close command palette">ESC</button>
      </div>
      <div class="palette-results-list" id="command-palette-results">
        <!-- Filtered results populated dynamically -->
      </div>
    </div>
  </div>

  <!-- ========================================================================
       DRAWER: COMPANY INSPECT SLIDE-OVER
       ======================================================================== -->
  <div class="slide-drawer" id="company-inspect-drawer" role="complementary" aria-label="Company Details Inspection Drawer">
    <div class="drawer-header-bar">
      <h3>VERIFIED ENTERPRISE PROFILE</h3>
      <button class="btn-close-modal" id="close-company-drawer" aria-label="Close profile drawer">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="drawer-scroll-body" id="company-drawer-content">
      <!-- Injected dynamically on click -->
    </div>
  </div>

  <!-- ========================================================================
       MODAL: BUSINESS ONBOARDING / RANKING WIZARD
       ======================================================================== -->
  <div class="modal-overlay" id="profile-wizard-modal" role="dialog" aria-modal="true" aria-hidden="true">
    <div class="modal-backdrop wizard-backdrop"></div>
    <div class="modal-dialog-card wizard-dialog">
      <div class="modal-header-row">
        <div class="modal-title-group">
          <h3>Boardrank Registry Application</h3>
          <p id="wizard-step-indicator">STEP 01 OF 03</p>
        </div>
        <button class="btn-close-modal" id="close-profile-wizard" aria-label="Close registration wizard">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div id="wizard-step-content">
        <!-- Multi-step form rendered by main.js -->
      </div>
    </div>
  </div>

  `;
