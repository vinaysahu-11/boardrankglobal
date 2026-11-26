/**
 * BOARDRANK GLOBAL - Universal Self-Contained Frontend Engine
 * Minimalist Editorial Light Theme Edition
 * Bundled without ES modules so it runs flawlessly on both file:/// protocol
 * (direct browser double-click) and http/https web servers with ZERO CORS errors.
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. INTERNATIONALIZATION (i18n) REGISTRY & DICTIONARIES
     ========================================================================== */
  const I18N_REGISTRY = [
    { code: 'en', name: 'English', native: 'English', region: 'Americas', dir: 'ltr', flag: '🇺🇸', translated: true },
    { code: 'es', name: 'Spanish', native: 'Español', region: 'Europe', dir: 'ltr', flag: '🇪🇸', translated: true },
    { code: 'fr', name: 'French', native: 'Français', region: 'Europe', dir: 'ltr', flag: '🇫🇷', translated: true },
    { code: 'de', name: 'German', native: 'Deutsch', region: 'Europe', dir: 'ltr', flag: '🇩🇪', translated: true },
    { code: 'ja', name: 'Japanese', native: '日本語', region: 'Asia-Pacific', dir: 'ltr', flag: '🇯🇵', translated: true },
    { code: 'zh', name: 'Chinese (Simplified)', native: '简体中文', region: 'Asia-Pacific', dir: 'ltr', flag: '🇨🇳', translated: true },
    { code: 'ar', name: 'Arabic', native: 'العربية', region: 'Middle East', dir: 'rtl', flag: '🇦🇪', translated: true },
    { code: 'he', name: 'Hebrew', native: 'עברית', region: 'Middle East', dir: 'rtl', flag: '🇮🇱', translated: false },
    { code: 'pt', name: 'Portuguese', native: 'Português', region: 'Americas', dir: 'ltr', flag: '🇧🇷', translated: true },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी', region: 'Asia-Pacific', dir: 'ltr', flag: '🇮🇳', translated: true },

    // 100+ Extensible Global Language Registry
    { code: 'it', name: 'Italian', native: 'Italiano', region: 'Europe', dir: 'ltr', flag: '🇮🇹' },
    { code: 'nl', name: 'Dutch', native: 'Nederlands', region: 'Europe', dir: 'ltr', flag: '🇳🇱' },
    { code: 'ru', name: 'Russian', native: 'Русский', region: 'Europe', dir: 'ltr', flag: '🇷🇺' },
    { code: 'ko', name: 'Korean', native: '한국어', region: 'Asia-Pacific', dir: 'ltr', flag: '🇰🇷' },
    { code: 'tr', name: 'Turkish', native: 'Türkçe', region: 'Middle East', dir: 'ltr', flag: '🇹🇷' },
    { code: 'id', name: 'Indonesian', native: 'Bahasa Indonesia', region: 'Asia-Pacific', dir: 'ltr', flag: '🇮🇩' },
    { code: 'pl', name: 'Polish', native: 'Polski', region: 'Europe', dir: 'ltr', flag: '🇵🇱' },
    { code: 'sv', name: 'Swedish', native: 'Svenska', region: 'Europe', dir: 'ltr', flag: '🇸🇪' },
    { code: 'vi', name: 'Vietnamese', native: 'Tiếng Việt', region: 'Asia-Pacific', dir: 'ltr', flag: '🇻🇳' },
    { code: 'th', name: 'Thai', native: 'ไทย', region: 'Asia-Pacific', dir: 'ltr', flag: '🇹🇭' },
    { code: 'fa', name: 'Persian', native: 'فارسی', region: 'Middle East', dir: 'rtl', flag: '🇮🇷' },
    { code: 'uk', name: 'Ukrainian', native: 'Українська', region: 'Europe', dir: 'ltr', flag: '🇺🇦' },
    { code: 'ro', name: 'Romanian', native: 'Română', region: 'Europe', dir: 'ltr', flag: '🇷🇴' },
    { code: 'el', name: 'Greek', native: 'Ελληνικά', region: 'Europe', dir: 'ltr', flag: '🇬🇷' },
    { code: 'cs', name: 'Czech', native: 'Čeština', region: 'Europe', dir: 'ltr', flag: '🇨🇿' },
    { code: 'hu', name: 'Hungarian', native: 'Magyar', region: 'Europe', dir: 'ltr', flag: '🇭🇺' },
    { code: 'da', name: 'Danish', native: 'Dansk', region: 'Europe', dir: 'ltr', flag: '🇩🇰' },
    { code: 'fi', name: 'Finnish', native: 'Suomi', region: 'Europe', dir: 'ltr', flag: '🇫🇮' },
    { code: 'no', name: 'Norwegian', native: 'Norsk', region: 'Europe', dir: 'ltr', flag: '🇳🇴' },
    { code: 'ms', name: 'Malay', native: 'Bahasa Melayu', region: 'Asia-Pacific', dir: 'ltr', flag: '🇲🇾' },
    { code: 'bn', name: 'Bengali', native: 'বাংলা', region: 'Asia-Pacific', dir: 'ltr', flag: '🇧🇩' },
    { code: 'ur', name: 'Urdu', native: 'اردو', region: 'Asia-Pacific', dir: 'rtl', flag: '🇵🇰' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்', region: 'Asia-Pacific', dir: 'ltr', flag: '🇮🇳' },
    { code: 'te', name: 'Telugu', native: 'తెలుగు', region: 'Asia-Pacific', dir: 'ltr', flag: '🇮🇳' },
    { code: 'mr', name: 'Marathi', native: 'मराठी', region: 'Asia-Pacific', dir: 'ltr', flag: '🇮🇳' },
    { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', region: 'Asia-Pacific', dir: 'ltr', flag: '🇮🇳' },
    { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', region: 'Asia-Pacific', dir: 'ltr', flag: '🇮🇳' },
    { code: 'ml', name: 'Malayalam', native: 'മലയാളം', region: 'Asia-Pacific', dir: 'ltr', flag: '🇮🇳' },
    { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', region: 'Asia-Pacific', dir: 'ltr', flag: '🇮🇳' },
    { code: 'fil', name: 'Filipino', native: 'Filipino', region: 'Asia-Pacific', dir: 'ltr', flag: '🇵🇭' },
    { code: 'sw', name: 'Swahili', native: 'Kiswahili', region: 'Africa', dir: 'ltr', flag: '🇰🇪' },
    { code: 'af', name: 'Afrikaans', native: 'Afrikaans', region: 'Africa', dir: 'ltr', flag: '🇿🇦' },
    { code: 'zu', name: 'Zulu', native: 'isiZulu', region: 'Africa', dir: 'ltr', flag: '🇿🇦' },
    { code: 'xh', name: 'Xhosa', native: 'isiXhosa', region: 'Africa', dir: 'ltr', flag: '🇿🇦' },
    { code: 'am', name: 'Amharic', native: 'አማርኛ', region: 'Africa', dir: 'ltr', flag: '🇪🇹' },
    { code: 'ha', name: 'Hausa', native: 'Hausa', region: 'Africa', dir: 'ltr', flag: '🇳🇬' },
    { code: 'yo', name: 'Yoruba', native: 'Yorùbá', region: 'Africa', dir: 'ltr', flag: '🇳🇬' },
    { code: 'ig', name: 'Igbo', native: 'Asụsụ Igbo', region: 'Africa', dir: 'ltr', flag: '🇳🇬' },
    { code: 'sk', name: 'Slovak', native: 'Slovenčina', region: 'Europe', dir: 'ltr', flag: '🇸🇰' },
    { code: 'bg', name: 'Bulgarian', native: 'Български', region: 'Europe', dir: 'ltr', flag: '🇧🇬' },
    { code: 'hr', name: 'Croatian', native: 'Hrvatski', region: 'Europe', dir: 'ltr', flag: '🇭🇷' },
    { code: 'sr', name: 'Serbian', native: 'Српски', region: 'Europe', dir: 'ltr', flag: '🇷🇸' },
    { code: 'sl', name: 'Slovenian', native: 'Slovenščina', region: 'Europe', dir: 'ltr', flag: '🇸🇮' },
    { code: 'lt', name: 'Lithuanian', native: 'Lietuvių', region: 'Europe', dir: 'ltr', flag: '🇱🇹' },
    { code: 'lv', name: 'Latvian', native: 'Latviešu', region: 'Europe', dir: 'ltr', flag: '🇱🇻' },
    { code: 'et', name: 'Estonian', native: 'Eesti', region: 'Europe', dir: 'ltr', flag: '🇪🇪' },
    { code: 'is', name: 'Icelandic', native: 'Íslenska', region: 'Europe', dir: 'ltr', flag: '🇮🇸' },
    { code: 'ga', name: 'Irish', native: 'Gaeilge', region: 'Europe', dir: 'ltr', flag: '🇮🇪' },
    { code: 'cy', name: 'Welsh', native: 'Cymraeg', region: 'Europe', dir: 'ltr', flag: '🇬🇧' },
    { code: 'eu', name: 'Basque', native: 'Euskara', region: 'Europe', dir: 'ltr', flag: '🇪🇸' },
    { code: 'ca', name: 'Catalan', native: 'Català', region: 'Europe', dir: 'ltr', flag: '🇪🇸' },
    { code: 'gl', name: 'Galician', native: 'Galego', region: 'Europe', dir: 'ltr', flag: '🇪🇸' },
    { code: 'mt', name: 'Maltese', native: 'Malti', region: 'Europe', dir: 'ltr', flag: '🇲🇹' },
    { code: 'sq', name: 'Albanian', native: 'Shqip', region: 'Europe', dir: 'ltr', flag: '🇦🇱' },
    { code: 'mk', name: 'Macedonian', native: 'Македонски', region: 'Europe', dir: 'ltr', flag: '🇲🇰' },
    { code: 'bs', name: 'Bosnian', native: 'Bosanski', region: 'Europe', dir: 'ltr', flag: '🇧🇦' },
    { code: 'az', name: 'Azerbaijani', native: 'Azərbaycan', region: 'Middle East', dir: 'ltr', flag: '🇦🇿' },
    { code: 'ka', name: 'Georgian', native: 'ქართული', region: 'Europe', dir: 'ltr', flag: '🇬🇪' },
    { code: 'hy', name: 'Armenian', native: 'Հայերեն', region: 'Europe', dir: 'ltr', flag: '🇦🇲' },
    { code: 'kk', name: 'Kazakh', native: 'Қазақша', region: 'Asia-Pacific', dir: 'ltr', flag: '🇰🇿' },
    { code: 'uz', name: 'Uzbek', native: 'Oʻzbekcha', region: 'Asia-Pacific', dir: 'ltr', flag: '🇺🇿' },
    { code: 'ky', name: 'Kyrgyz', native: 'Кыргызча', region: 'Asia-Pacific', dir: 'ltr', flag: '🇰🇬' },
    { code: 'tg', name: 'Tajik', native: 'Тоҷикӣ', region: 'Asia-Pacific', dir: 'ltr', flag: '🇹🇯' },
    { code: 'tk', name: 'Turkmen', native: 'Türkmençe', region: 'Asia-Pacific', dir: 'ltr', flag: '🇹🇲' },
    { code: 'mn', name: 'Mongolian', native: 'Монгол', region: 'Asia-Pacific', dir: 'ltr', flag: '🇲🇳' },
    { code: 'my', name: 'Burmese', native: 'မြန်မာစာ', region: 'Asia-Pacific', dir: 'ltr', flag: '🇲🇲' },
    { code: 'km', name: 'Khmer', native: 'ភាសាខ្មែរ', region: 'Asia-Pacific', dir: 'ltr', flag: '🇰🇭' },
    { code: 'lo', name: 'Lao', native: 'ພາສາລາວ', region: 'Asia-Pacific', dir: 'ltr', flag: '🇱🇦' },
    { code: 'ne', name: 'Nepali', native: 'नेपाली', region: 'Asia-Pacific', dir: 'ltr', flag: '🇳🇵' },
    { code: 'si', name: 'Sinhala', native: 'සිංහල', region: 'Asia-Pacific', dir: 'ltr', flag: '🇱🇰' },
    { code: 'ps', name: 'Pashto', native: 'پښتو', region: 'Middle East', dir: 'rtl', flag: '🇦🇫' },
    { code: 'ku', name: 'Kurdish', native: 'Kurdî', region: 'Middle East', dir: 'rtl', flag: '🇮🇶' },
    { code: 'so', name: 'Somali', native: 'Soomaaliga', region: 'Africa', dir: 'ltr', flag: '🇸🇴' },
    { code: 'rw', name: 'Kinyarwanda', native: 'Ikinyarwanda', region: 'Africa', dir: 'ltr', flag: '🇷🇼' },
    { code: 'mg', name: 'Malagasy', native: 'Malagasy', region: 'Africa', dir: 'ltr', flag: '🇲🇬' },
    { code: 'sn', name: 'Shona', native: 'chiShona', region: 'Africa', dir: 'ltr', flag: '🇿🇼' },
    { code: 'st', name: 'Sesotho', native: 'Sesotho', region: 'Africa', dir: 'ltr', flag: '🇱🇸' },
    { code: 'tn', name: 'Setswana', native: 'Setswana', region: 'Africa', dir: 'ltr', flag: '🇧🇼' },
    { code: 'sm', name: 'Samoan', native: 'Gagana Samoa', region: 'Asia-Pacific', dir: 'ltr', flag: '🇼🇸' },
    { code: 'to', name: 'Tongan', native: 'Lea Faka-Tonga', region: 'Asia-Pacific', dir: 'ltr', flag: '🇹🇴' },
    { code: 'fj', name: 'Fijian', native: 'Na Vosa Vakaviti', region: 'Asia-Pacific', dir: 'ltr', flag: '🇫🇯' },
    { code: 'mi', name: 'Māori', native: 'Te Reo Māori', region: 'Asia-Pacific', dir: 'ltr', flag: '🇳🇿' },
    { code: 'haw', name: 'Hawaiian', native: 'ʻŌlelo Hawaiʻi', region: 'Americas', dir: 'ltr', flag: '🇺🇸' },
    { code: 'la', name: 'Latin', native: 'Latina', region: 'Europe', dir: 'ltr', flag: '🇻🇦' },
    { code: 'eo', name: 'Esperanto', native: 'Esperanto', region: 'International', dir: 'ltr', flag: '🌐' }
  ];

  const TRANSLATIONS = {
    en: {
      nav_discover: 'Discover',
      nav_rankings: 'Rankings',
      nav_categories: 'Categories',
      nav_countries: 'Countries',
      nav_how_it_works: 'How It Works',
      nav_login: 'Log In',
      nav_get_ranked: 'Get Ranked',
      hero_badge: 'GLOBAL BUSINESS DISCOVERY & VISIBILITY INDEX',
      hero_title_1: 'THE <span class="editorial-italic">World</span>',
      hero_title_2: 'IS YOUR',
      hero_title_3: '<span class="editorial-italic">Market.</span>',
      hero_subtitle: "Discover businesses. Explore industries. See who's gaining attention around the world.",
      hero_cta_explore: 'Explore Rankings',
      hero_cta_rank: 'Get Your Business Ranked',
      hero_demo_badge: 'REAL-TIME MARKET TELEMETRY — 195+ SOVEREIGN JURISDICTIONS',
      rankings_eyebrow: '✦ 02 / GLOBAL LEADERBOARD',
      rankings_title: 'THE WORLD <span class="editorial-italic">is Watching.</span>',
      rankings_subtitle: 'Real-time visibility index across verified enterprises and sponsored market leaders.',
      tab_global: 'Global Index',
      tab_countries: 'By Country',
      tab_industries: 'By Industry',
      tab_sponsored: 'Sponsored Placements',
      th_rank: 'Rank',
      th_company: 'Enterprise / Brand',
      th_country: 'Market',
      th_industry: 'Sector',
      th_score: 'Discovery Index',
      th_movement: 'Velocity',
      th_status: 'Listing Status',
      th_action: 'Action',
      btn_explore_all: 'Explore All 5,000+ Rankings',
      reach_eyebrow: '✦ 03 / SOVEREIGN MARKETS',
      reach_title: 'FROM ANYWHERE. <span class="editorial-italic">To Everywhere.</span>',
      reach_subtitle: 'A borderless discovery infrastructure connecting enterprises across 195+ sovereign markets and 12 distinct economic sectors.',
      reach_stat_countries: 'Sovereign Markets',
      reach_stat_sectors: 'Economic Sectors',
      reach_stat_languages: 'Languages Architecture',
      reach_stat_uptime: 'Discovery Engine Uptime',
      how_eyebrow: '✦ 04 / OPERATIONAL FRAMEWORK',
      how_title: 'HOW BOARDRANK <span class="editorial-italic">Operates</span>',
      how_toggle_visitors: 'FOR VISITORS & BUYERS',
      how_toggle_businesses: 'FOR ENTERPRISES & BRANDS',
      how_vis_step1_title: '1. Discover Businesses',
      how_vis_step1_desc: 'Search across 100+ categories, regional markets, and verified industry niches worldwide.',
      how_vis_step2_title: '2. Explore Industries & Categories',
      how_vis_step2_desc: 'Uncover market leaders, fast-growing startups, and generational product breakthroughs.',
      how_vis_step3_title: '3. Compare Public Profiles & Rankings',
      how_vis_step3_desc: 'Review company credentials, verified operational markets, and comparative visibility metrics.',
      how_vis_step4_title: '4. Connect With Businesses',
      how_vis_step4_desc: 'Initiate direct commercial inquiries, strategic partnerships, and cross-border ventures.',
      how_biz_step1_title: '1. Create a Business Profile',
      how_biz_step1_desc: 'Establish your verified corporate presence with comprehensive multi-language presentation.',
      how_biz_step2_title: '2. Select Industry & Category',
      how_biz_step2_desc: 'Target your exact commercial taxonomy and position directly in front of high-intent searchers.',
      how_biz_step3_title: '3. Choose Target Geography',
      how_biz_step3_desc: 'Deploy visibility across specific nations, regional economic blocs, or worldwide leaderboards.',
      how_biz_step4_title: '4. Select Sponsored Campaign',
      how_biz_step4_desc: 'Transparently acquire prioritized placement clearly demarcated as Sponsored.',
      how_biz_step5_title: '5. Monitor Performance',
      how_biz_step5_desc: 'Access real-time discovery analytics, profile impressions, and international audience reach.',
      disclaimer_text: 'Transparency Notice: Boardrank Global is an open international business discovery platform. Sponsored placements are paid promotional campaigns to enhance brand visibility and do not represent editorial ranking, quality certification, or guaranteed sales conversion.',
      cta_badge: '✦ 05 / EXPAND YOUR REACH',
      cta_title: 'READY TO BE <span class="editorial-italic">Seen?</span>',
      cta_subtitle: 'Your business deserves a place in the global conversation. Create your profile and explore sponsored visibility opportunities across 195+ sovereign markets.',
      cta_btn_profile: 'Create Business Profile',
      cta_btn_options: 'Explore Ranking Options',
      footer_statement: 'BOARDRANK GLOBAL is the premier international discovery network for enterprise, technology, and emerging ventures. Sponsored rankings are paid promotional placements and strictly designated as Sponsored.',
      footer_col_discover: 'Discover',
      footer_col_businesses: 'Businesses',
      footer_col_company: 'Company',
      footer_col_legal: 'Legal & Trust',
      lang_modal_title: 'Select Platform Language',
      lang_modal_subtitle: 'Explore Boardrank Global in over 100+ native languages and regional dialects.',
      lang_search_placeholder: 'Search language by name or native script...'
    },
    es: {
      nav_discover: 'Descubrir',
      nav_rankings: 'Clasificaciones',
      nav_categories: 'Categorías',
      nav_countries: 'Países',
      nav_how_it_works: 'Cómo Funciona',
      nav_login: 'Iniciar Sesión',
      nav_get_ranked: 'Posicionarse',
      hero_badge: 'ÍNDICE GLOBAL DE DESCUBRIMIENTO Y VISIBILIDAD',
      hero_title_1: 'EL <span class="editorial-italic">Mundo</span>',
      hero_title_2: 'ES SU',
      hero_title_3: '<span class="editorial-italic">Mercado.</span>',
      hero_subtitle: 'Descubra empresas. Explore industrias. Conozca quién destaca a nivel mundial.',
      hero_cta_explore: 'Explorar Rankings',
      hero_cta_rank: 'Posicione su Empresa',
      hero_demo_badge: 'TELEMETRÍA DE MERCADO EN TIEMPO REAL — 195+ JURISDICCIONES',
      rankings_eyebrow: '✦ 02 / TABLA DE LÍDERES',
      rankings_title: 'EL MUNDO <span class="editorial-italic">está Observando.</span>',
      rankings_subtitle: 'Índice de visibilidad en tiempo real entre empresas verificadas y líderes de mercado patrocinados.',
      tab_global: 'Índice Global',
      tab_countries: 'Por País',
      tab_industries: 'Por Industria',
      tab_sponsored: 'Posiciones Patrocinadas',
      reach_eyebrow: '✦ 03 / MERCADOS SOBERANOS',
      reach_title: 'DE CUALQUIER LUGAR. <span class="editorial-italic">A Todas Partes.</span>',
      reach_subtitle: 'Infraestructura de descubrimiento sin fronteras que conecta empresas a través de 195+ mercados y 12 sectores.',
      reach_stat_countries: 'Mercados Soberanos',
      reach_stat_sectors: 'Sectores Económicos',
      reach_stat_languages: 'Arquitectura de Idiomas',
      reach_stat_uptime: 'Disponibilidad de Red',
      how_eyebrow: '✦ 04 / MARCO OPERATIVO',
      how_title: 'CÓMO OPERA <span class="editorial-italic">Boardrank</span>',
      how_toggle_visitors: 'PARA VISITANTES Y COMPRADORES',
      how_toggle_businesses: 'PARA EMPRESAS Y MARCAS',
      disclaimer_text: 'Aviso de Transparencia: Boardrank Global es una plataforma abierta de descubrimiento empresarial. Las posiciones patrocinadas son promociones pagadas y no implican evaluación editorial ni garantía comercial.',
      cta_badge: '✦ 05 / EXPANDA SU ALCANCE',
      cta_title: '¿LISTO PARA SER <span class="editorial-italic">Visto?</span>',
      cta_subtitle: 'Su negocio merece estar en la conversación global. Cree su perfil y explore opciones de visibilidad patrocinada.',
      cta_btn_profile: 'Crear Perfil de Empresa',
      cta_btn_options: 'Explorar Opciones de Ranking',
      footer_statement: 'BOARDRANK GLOBAL es la red internacional líder de descubrimiento empresarial. Las posiciones patrocinadas son comerciales y se identifican con total transparencia.',
      footer_col_discover: 'Descubrir',
      footer_col_businesses: 'Empresas',
      footer_col_company: 'Compañía',
      footer_col_legal: 'Legal y Confianza'
    },
    ja: {
      nav_discover: '発見する',
      nav_rankings: 'ランキング',
      nav_categories: 'カテゴリー',
      nav_countries: '国・地域',
      nav_how_it_works: '仕組み',
      nav_login: 'ログイン',
      nav_get_ranked: '掲載登録',
      hero_badge: 'グローバル・ディスカバリー＆ビジビリティ・インデックス',
      hero_title_1: '<span class="editorial-italic">世界が</span>',
      hero_title_2: 'あなたの',
      hero_title_3: '<span class="editorial-italic">市場になる。</span>',
      hero_subtitle: '企業を発見し、産業を探索し、世界中で注目を集めるリーダーを知る。',
      hero_cta_explore: 'ランキングを見る',
      hero_cta_rank: '自社を掲載登録する',
      hero_demo_badge: 'リアルタイム市場テレメトリー — 195以上の主権国家市場',
      rankings_eyebrow: '✦ 02 / リーダーボード',
      rankings_title: '世界が <span class="editorial-italic">注目している。</span>',
      rankings_subtitle: '認証企業とスポンサー企業のリアルタイム認知度インデックス。',
      tab_global: '総合インデックス',
      tab_countries: '国別ランキング',
      tab_industries: '業界別',
      tab_sponsored: 'スポンサー枠',
      reach_eyebrow: '✦ 03 / 主権国家市場',
      reach_title: 'どこからでも。 <span class="editorial-italic">世界中へ。</span>',
      reach_subtitle: '195以上の国と地域、12の主要産業を結ぶ国境なきビジネス基盤。',
      reach_stat_countries: '主権国家市場',
      reach_stat_sectors: '主要経済分野',
      reach_stat_languages: '多言語アーキテクチャ',
      reach_stat_uptime: '稼働率 99.99%',
      how_eyebrow: '✦ 04 / 運用体系',
      how_title: 'BOARDRANKの <span class="editorial-italic">仕組み</span>',
      how_toggle_visitors: '訪問者・バイヤー向け',
      how_toggle_businesses: '企業・ブランド向け',
      cta_badge: '✦ 05 / 世界への展開',
      cta_title: '世界に見出される <span class="editorial-italic">準備はできましたか？</span>',
      cta_subtitle: 'あなたのビジネスには、世界的な舞台で認知される価値があります。プロフィールを作成しスポンサー枠をご検討ください。',
      cta_btn_profile: '企業プロフィール作成',
      cta_btn_options: '掲載プランを確認',
      footer_statement: 'BOARDRANK GLOBALは企業・テクノロジー発見のための国際プラットフォームです。'
    },
    ar: {
      nav_discover: 'استكشف',
      nav_rankings: 'التصنيفات',
      nav_categories: 'الفئات',
      nav_countries: 'الدول',
      nav_how_it_works: 'كيف يعمل',
      nav_login: 'تسجيل الدخول',
      nav_get_ranked: 'احصل على تصنيف',
      hero_badge: 'المؤشر العالمي لاكتشاف الأعمال والظهور',
      hero_title_1: '<span class="editorial-italic">العالم</span>',
      hero_title_2: 'هو سوقك',
      hero_title_3: '<span class="editorial-italic">الكبير.</span>',
      hero_subtitle: 'اكتشف الشركات الرائدة التي تشكل الصناعات، واستكشف التصنيفات العالمية، واعرض علامتك التجارية أمام جمهور دولي.',
      hero_cta_explore: 'استكشف التصنيفات',
      hero_cta_rank: 'صنّف شركتك الآن',
      hero_demo_badge: 'بيانات السوق المباشرة — أكثر من 195 اختصاصاً سيادياً',
      rankings_eyebrow: '✦ 02 / لوحة الصدارة',
      rankings_title: 'العالم <span class="editorial-italic">يراقب.</span>',
      rankings_subtitle: 'مؤشر الظهور في الوقت الفعلي للشركات المعتمدة والمراكز الممولة.',
      tab_global: 'المؤشر العالمي',
      tab_countries: 'حسب الدولة',
      tab_industries: 'حسب الصناعة',
      tab_sponsored: 'المراكز الممولة',
      reach_eyebrow: '✦ 03 / الأسواق السيادية',
      reach_title: 'من أي مكان. <span class="editorial-italic">إلى كل مكان.</span>',
      reach_subtitle: 'بنية تحتية للاكتشاف عابرة للحدود تربط المؤسسات عبر 195+ سوقًا و12 قطاعًا اقتصاديًا.',
      reach_stat_countries: 'أسواق سيادية',
      reach_stat_sectors: 'قطاعات اقتصادية',
      reach_stat_languages: 'بنية 100+ لغة',
      reach_stat_uptime: 'جاهزية الشبكة 99.99%',
      how_eyebrow: '✦ 04 / آلية العمل',
      how_title: 'كيف تعمل <span class="editorial-italic">BOARDRANK</span>',
      how_toggle_visitors: 'للزوار والمستثمرين',
      how_toggle_businesses: 'للشركات والعلامات التجارية',
      disclaimer_text: 'إشعار الشفافية: منصة Boardrank Global هي شبكة دولية لاكتشاف الأعمال. التصنيفات الممولة هي مواضع ترويجية مدفوعة ولا تمثل تقييماً تحريرياً أو ضماناً للمبيعات.',
      cta_badge: '✦ 05 / وسّع نطاقك',
      cta_title: 'هل أنت جاهز لتكون <span class="editorial-italic">مرئياً؟</span>',
      cta_subtitle: 'تستحق شركتك التواجد في صميم الحوار الاقتصادي العالمي. أنشئ ملفك الآن واستكشف فرص الظهور.',
      cta_btn_profile: 'إنشاء ملف شركة',
      cta_btn_options: 'استكشاف باقات الظهور',
      footer_statement: 'BOARDRANK GLOBAL هي الشبكة الدولية الرائدة لاكتشاف الشركات والابتكارات المؤسسية.'
    }
  };

  class I18nManager {
    constructor() {
      this.registry = I18N_REGISTRY;
      this.currentLang = this.detectInitialLanguage();
      this.subscribers = [];
    }

    detectInitialLanguage() {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && this.registry.some(l => l.code === langParam)) return langParam;

        const stored = localStorage.getItem('boardrank_lang');
        if (stored && this.registry.some(l => l.code === stored)) return stored;

        const browserLang = (navigator.language || navigator.userLanguage || 'en').split('-')[0].toLowerCase();
        if (this.registry.some(l => l.code === browserLang)) return browserLang;
      } catch (e) {}
      return 'en';
    }

    getLangMeta(code = this.currentLang) {
      return this.registry.find(l => l.code === code) || this.registry[0];
    }

    t(key, fallback = '') {
      const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
      if (dict && dict[key]) return dict[key];
      if (TRANSLATIONS.en && TRANSLATIONS.en[key]) return TRANSLATIONS.en[key];
      return fallback || key;
    }

    setLanguage(langCode) {
      const meta = this.getLangMeta(langCode);
      if (!meta) return;

      this.currentLang = meta.code;
      try { localStorage.setItem('boardrank_lang', meta.code); } catch (e) {}

      document.documentElement.setAttribute('lang', meta.code);
      document.documentElement.setAttribute('dir', meta.dir);
      document.body.classList.toggle('is-rtl', meta.dir === 'rtl');

      this.translateDOM();
      this.subscribers.forEach(cb => cb(meta));
    }

    translateDOM() {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = this.t(key);
        if (translation) {
          if (translation.includes('<span') || el.hasAttribute('data-i18n-html')) {
            el.innerHTML = translation;
          } else {
            el.textContent = translation;
          }
        }
      });

      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translation = this.t(key);
        if (translation) el.placeholder = translation;
      });
    }

    onLanguageChange(callback) {
      this.subscribers.push(callback);
    }
  }

  const i18n = new I18nManager();
  window.i18n = i18n;

  /* ==========================================================================
     2. DATA LAYER (CATEGORIES, LEADERBOARD, MARKETS, TIERS)
     ========================================================================== */
  const TAXONOMY_SECTORS = [
  {
    id: 'technology',
    index: '01',
    title: 'Technology',
    name: 'Technology',
    subtitle: 'Computing, AI & Semiconductors',
    description: 'Advanced computing architectures, semiconductors, autonomous intelligence and global network fabrics.',
    profiles: '4,610+',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6v6H9zM9 1v2M15 1v2M9 21v2M15 21v2M1 9h2M1 15h2M21 9h2M21 15h2"/></svg>`,
    categories: [
      {
        id: 'tech-ai',
        name: 'Artificial Intelligence',
        description: 'Foundation models, neural architectures, computer vision, and cognitive computing systems.',
        specializations: ['Machine Learning Frameworks', 'Large Language Models (LLM)', 'Computer Vision Systems', 'Neural Processing Units (NPUs)', 'Autonomous Agents', 'Speech & Audio Synthesis']
      },
      {
        id: 'tech-robotics',
        name: 'Robotics & Automation',
        description: 'Autonomous humanoid robotics, precision industrial manipulators, and robotic perception.',
        specializations: ['Humanoid Robotics', 'Industrial Articulated Arms', 'Autonomous Mobile Robots (AMRs)', 'Exoskeleton Biomechanics', 'Drone Telemetry Systems', 'Micro-Robotic Actuators']
      },
      {
        id: 'tech-semiconductors',
        name: 'Semiconductors & Silicon',
        description: 'Next-generation lithography, microchip packaging, photonic processors, and power silicon.',
        specializations: ['Sub-3nm Silicon Fabrication', 'Photonic Integrated Circuits', 'FPGA Hardware Acceleration', 'Gallium Nitride (GaN) Power', 'EUV Lithography Systems', 'Chiplet Packaging']
      },
      {
        id: 'tech-cloud',
        name: 'Cloud & Quantum Computing',
        description: 'Hyperscale distributed cloud clusters, quantum computing runtimes, and edge fabrics.',
        specializations: ['Hyperscale Cloud Compute', 'Topological Quantum Qubits', 'Edge Micro-Datacenters', 'Serverless Run-time Engines', 'Bare-Metal Clustering', 'Distributed Storage Fabric']
      },
      {
        id: 'tech-cybersecurity',
        name: 'Cybersecurity & Trust',
        description: 'Zero-trust network frameworks, post-quantum cryptographic security, and automated threat defense.',
        specializations: ['Post-Quantum Cryptography', 'Zero-Trust Architecture', 'Autonomous Threat Mitigation', 'Hardware Security Modules', 'Identity & Access Verification', 'Cloud Security Posture']
      },
      {
        id: 'tech-telecom',
        name: 'Telecommunications',
        description: 'Next-generation 6G cellular infrastructure, low-earth orbit constellations, and optical transmission.',
        specializations: ['6G Terahertz Wireless', 'LEO Satellite Constellations', 'Dense Wavelength Division Optical', 'Subsea Fiber Cables', 'Open-RAN Infrastructure', 'Private Industrial 5G']
      }
    ]
  },
  {
    id: 'manufacturing',
    index: '02',
    title: 'Manufacturing',
    name: 'Manufacturing',
    subtitle: 'Industrial Engineering & Fabrication',
    description: 'Precision industrial fabrication, aerospace assembly lines, automated supply chains and advanced metallurgy.',
    profiles: '2,180+',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14" rx="1"/><path d="m8 6 4-4 4 4"/></svg>`,
    categories: [
      {
        id: 'mfg-aerospace',
        name: 'Aerospace & Defense',
        description: 'Orbital launchers, commercial aviation platforms, satellite structures, and avionics instrumentation.',
        specializations: ['Commercial Space Launchers', 'Avionics Navigation Flight Systems', 'Carbon Composite Airframes', 'Hypersonic Propulsion', 'Spacecraft Thermal Barriers', 'Unmanned Aerial Systems']
      },
      {
        id: 'mfg-automotive',
        name: 'Automotive & Clean Mobility',
        description: 'Electric vehicle chassis, solid-state battery packs, autonomous drive-by-wire, and hydrogen mobility.',
        specializations: ['Solid-State EV Powertrains', 'Autonomous Drive Electronics', 'Hydrogen Fuel Cell Vehicles', 'Lightweight Structural Castings', 'Connected Cabin Avionics', 'Fleet Battery Telemetry']
      },
      {
        id: 'mfg-industrial',
        name: 'Heavy Industrial Equipment',
        description: 'Automated mining excavators, hydraulic precision presses, turbine generators, and smelting systems.',
        specializations: ['Autonomous Mining Haulage', 'Hydraulic Forging Presses', 'Industrial Steam Turbines', 'Continuous Smelting Furnaces', 'Robotic Crane Infrastructure', 'Vibration Analysis Telemetry']
      },
      {
        id: 'mfg-precision',
        name: 'Precision Machining & Tooling',
        description: 'Multi-axis CNC milling, wire electrical discharge machining, and coordinate metrology.',
        specializations: ['5-Axis High-Speed CNC', 'Wire EDM Cutting', 'Laser Micro-Drilling', 'Optical Metrology Scanners', 'Carbide Tool Coatings', 'Surface Nanofinishing']
      },
      {
        id: 'mfg-materials',
        name: 'Advanced Materials & Composites',
        description: 'Carbon nanotubes, superalloys, engineered ceramics, and bio-based industrial polymers.',
        specializations: ['Carbon Nanotube Synthesis', 'High-Entropy Metal Alloys', 'Engineering Structural Ceramics', 'Self-Healing Polymers', 'Aerogel Insulation Materials', 'Superconducting Wires']
      },
      {
        id: 'mfg-additive',
        name: 'Additive Manufacturing',
        description: 'Industrial 3D metal printing, electron beam melting, and continuous liquid interface production.',
        specializations: ['Direct Metal Laser Sintering (DMLS)', 'Electron Beam Metal Melting', 'Continuous Liquid Interface Resin', 'Ceramic 3D Jetting', 'Laser Metal Deposition', 'Generative Topology Printing']
      }
    ]
  },
  {
    id: 'software',
    index: '03',
    title: 'Software',
    name: 'Software',
    subtitle: 'Enterprise SaaS & Developer Suites',
    description: 'Mission-critical enterprise software, database engines, developer toolchains and operational applications.',
    profiles: '5,140+',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    categories: [
      {
        id: 'soft-infra',
        name: 'Enterprise Cloud Infrastructure',
        description: 'Distributed transactional databases, service meshes, event brokers, and container orchestration.',
        specializations: ['Distributed SQL Databases', 'Real-Time Event Stream Brokers', 'Cloud-Native Service Meshes', 'Kubernetes Orchestration', 'Multi-Region Data Replicators', 'Low-Latency Message Queues']
      },
      {
        id: 'soft-dev',
        name: 'Developer Tooling & DevOps',
        description: 'Automated CI/CD pipelines, compiler toolchains, binary analyzers, and observability platforms.',
        specializations: ['Automated CI/CD Orchestration', 'Compiler Code Generation', 'Observability & Distributed Tracing', 'Static Security Code Analysis', 'Synthetic Testing Automation', 'Container Registry Pipelines']
      },
      {
        id: 'soft-data',
        name: 'Data Architecture & Vector Systems',
        description: 'High-dimensional vector indexes, real-time columnar query engines, and data mesh pipelines.',
        specializations: ['High-Dimensional Vector Indexes', 'Columnar Analytical Databases', 'Data Governance & Lineage', 'Real-Time Streaming ETL', 'Semantic Data Catalogs', 'Query Cost Optimization']
      },
      {
        id: 'soft-collab',
        name: 'Collaboration & Productivity',
        description: 'Real-time collaborative document canvases, asynchronous video suites, and organizational knowledge graphs.',
        specializations: ['Real-Time Collaborative Canvases', 'Semantic Enterprise Search', 'Asynchronous Video Collaboration', 'Document Lifecycle Automation', 'Automated Workflow Pipelines', 'Team Knowledge Graphs']
      },
      {
        id: 'soft-sec',
        name: 'AppSec & API Gateways',
        description: 'Runtime application self-protection, dynamic API token gateways, and secrets management.',
        specializations: ['Runtime Application Defense (RASP)', 'Unified GraphQL & REST Gateways', 'Zero-Knowledge Secrets Vaults', 'API Behavioral Anomaly AI', 'Dynamic Code Obfuscation', 'Software Supply Chain SBOM']
      },
      {
        id: 'soft-enterprise',
        name: 'ERP & Operations Systems',
        description: 'Global resource planning, automated ledger synchronization, and international compliance suites.',
        specializations: ['Cloud Enterprise Resource Planning', 'Multi-Jurisdiction Tax Engines', 'Corporate Treasury Synchronization', 'Procurement Lifecycle Automation', 'Contract Lifecycle Intelligence', 'Auditable Ledger Logs']
      }
    ]
  },
  {
    id: 'services',
    index: '04',
    title: 'Services',
    name: 'Services',
    subtitle: 'Strategy, Advisory & Governance',
    description: 'International management consulting, cross-border legal institutions, corporate auditing and strategic advisory.',
    profiles: '1,890+',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    categories: [
      {
        id: 'srv-strategy',
        name: 'Strategy & Management Consulting',
        description: 'Cross-border M&A advisory, operational turnaround, organizational architecture, and market entry.',
        specializations: ['Cross-Border M&A Strategy', 'Corporate Turnaround & Restructuring', 'Global Market Entry Modeling', 'Operating Model Modernization', 'Shareholder Value Optimization', 'Capital Allocation Strategy']
      },
      {
        id: 'srv-legal',
        name: 'Legal & International Compliance',
        description: 'Cross-border trade law, intellectual property defense, antitrust representation, and sovereign compliance.',
        specializations: ['International Trade Law', 'Patent & Trademark Defense', 'Antitrust & Competition Counsel', 'Cross-Border Arbitration', 'Data Sovereignty Compliance', 'Securities Regulation Law']
      },
      {
        id: 'srv-audit',
        name: 'Audit, Tax & Risk Advisory',
        description: 'Statutory financial auditing, international transfer pricing, forensic accounting, and enterprise risk.',
        specializations: ['Statutory Financial Audits', 'International Transfer Pricing', 'Forensic Accounting Investigations', 'Enterprise Risk Governance', 'ESG Verification Audits', 'Tax Optimization Modeling']
      },
      {
        id: 'srv-hr',
        name: 'Executive Talent & Human Capital',
        description: 'C-suite executive search, board advisory, international compensation architecture, and organizational design.',
        specializations: ['C-Suite Executive Search', 'Board of Directors Advisory', 'Global Equity Compensation', 'Organizational Restructuring', 'Workforce Capability Planning', 'Executive Succession Roadmaps']
      },
      {
        id: 'srv-brand',
        name: 'Brand Strategy & Communications',
        description: 'Corporate brand systems, crisis communications, institutional PR, and investor messaging.',
        specializations: ['Corporate Brand Architecture', 'Crisis Communications Advisory', 'Investor Relations Messaging', 'Global Media Placement', 'Reputation Intelligence Tracking', 'Creative Editorial Production']
      },
      {
        id: 'srv-it',
        name: 'IT Strategy & Systems Advisory',
        description: 'Legacy architecture modernization, sovereign cloud strategy, and cyber resilience audits.',
        specializations: ['Legacy Core Modernization', 'Sovereign Cloud Advisory', 'Cyber Posture Auditing', 'IT Portfolio Optimization', 'Vendor Risk Governance', 'Enterprise Architecture Design']
      }
    ]
  },
  {
    id: 'retail',
    index: '05',
    title: 'Retail',
    name: 'Retail',
    subtitle: 'Commerce, Consumer & Marketplaces',
    description: 'International consumer marketplaces, omnichannel fulfillment, direct-to-consumer networks and luxury brands.',
    profiles: '2,420+',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
    categories: [
      {
        id: 'ret-ecom',
        name: 'E-Commerce Platforms & Infrastructure',
        description: 'Headless storefront architectures, multi-currency checkout engines, and borderless digital marketplaces.',
        specializations: ['Headless Storefront Engines', 'Multi-Currency Global Checkout', 'Multi-Vendor Marketplace Rails', 'Algorithmic Search Merchandising', 'Subscription Commerce Engines', 'Cart Abandonment Telemetry']
      },
      {
        id: 'ret-fulfillment',
        name: 'Automated Fulfillment & Logistics',
        description: 'Micro-fulfillment center robotics, autonomous last-mile delivery, and automated parcel sorting.',
        specializations: ['Micro-Fulfillment Robotics', 'Autonomous Last-Mile Delivery', 'Automated Parcel Sortation', 'Dynamic Delivery Routing', 'Returns Management Automation', 'Urban Consolidation Hubs']
      },
      {
        id: 'ret-luxury',
        name: 'Luxury Goods & Haute Horlogerie',
        description: 'Heritage timepiece manufacturing, bespoke haute couture, fine jewelry, and verifiable provenance systems.',
        specializations: ['Haute Horlogerie Manufacturing', 'Bespoke Haute Couture Atelier', 'Ethical Gemstone Provenance', 'Artisanal Leatherworking', 'Luxury Clienteling Platforms', 'Digital Certificate Verification']
      },
      {
        id: 'ret-pos',
        name: 'Omnichannel & Connected Store',
        description: 'Smart retail shelf sensors, cashier-less computer vision pay, and integrated retail inventory.',
        specializations: ['Computer Vision Checkout Pay', 'RFID Inventory Shelf Sensors', 'Unified In-Store Mobile POS', 'Foot-Traffic Spatial Heatmaps', 'Interactive Digital Displays', 'Store Associate Assistants']
      },
      {
        id: 'ret-d2c',
        name: 'Direct-to-Consumer Brands',
        description: 'Digitally native product brands, sustainable consumables, and personalized subscription products.',
        specializations: ['Digitally Native Product Creation', 'Custom Formulation Engines', 'Circular Packaging Networks', 'Customer Retention Algorithms', 'Direct Community Channels', 'Carbon-Neutral Distribution']
      },
      {
        id: 'ret-wholesale',
        name: 'Wholesale & B2B Procurement',
        description: 'Bulk catalog digitalization, trade credit underwriting, and automated customs brokerage.',
        specializations: ['B2B Wholesale Digital Catalogs', 'Trade Credit Instant Underwriting', 'Automated Customs Clearance', 'Volume Discount Logic', 'Container Sourcing Portals', 'Cross-Border B2B Invoicing']
      }
    ]
  },
  {
    id: 'finance',
    index: '06',
    title: 'Finance',
    name: 'Finance',
    subtitle: 'Banking, FinTech & Capital Markets',
    description: 'Tier-one institutional banking, fintech infrastructure, sovereign wealth, venture capital and capital markets.',
    profiles: '3,110+',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    categories: [
      {
        id: 'fin-banking',
        name: 'Institutional Banking & Treasury',
        description: 'Tier-one wholesale liquidity, correspondent banking networks, multi-currency corporate treasuries.',
        specializations: ['Wholesale Interbank Liquidity', 'Correspondent Account Rails', 'Multi-Currency Cash Concentration', 'Syndicated Corporate Lending', 'Central Bank Settlement Interfaces', 'Escrow Management Engines']
      },
      {
        id: 'fin-fintech',
        name: 'FinTech & Payments Infrastructure',
        description: 'Real-time clearing networks, embedded banking APIs, merchant aggregation, and fraud prevention.',
        specializations: ['Real-Time Gross Clearing Rails', 'Embedded Banking-as-a-Service', 'Cross-Border Remittance APIs', 'Automated Chargeback Resolution', 'Sub-Second Fraud Scoring', 'Tokenized Merchant Processing']
      },
      {
        id: 'fin-invest',
        name: 'Asset & Wealth Management',
        description: 'Sovereign wealth funds, private equity syndication, algorithmic hedge funds, and family offices.',
        specializations: ['Sovereign Wealth Fund Structuring', 'Private Equity Buyout Syndicates', 'Quantitative Long/Short Strategies', 'Multi-Family Office Custody', 'Automated Portfolio Rebalancing', 'Alternative Asset Tokenization']
      },
      {
        id: 'fin-markets',
        name: 'Capital Markets & Electronic Trading',
        description: 'High-frequency algorithmic matching, dark pools, primary bond origination, and equity syndicate desks.',
        specializations: ['Sub-Millisecond Matching Engines', 'Dark Pool Electronic Liquidity', 'Primary Debt Syndication', 'FX Algorithmic Hedging', 'Derivatives Margin Engines', 'Post-Trade Clearing Automation']
      },
      {
        id: 'fin-insurance',
        name: 'InsurTech & Reinsurance Modeling',
        description: 'Parametric climate underwriting, automated actuarial models, and decentralized claims processing.',
        specializations: ['Parametric Climate Risk Models', 'Catastrophe Reinsurance Portfolios', 'Telematics Auto Actuarial AI', 'Autonomous Health Claims Triage', 'Cyber Attack Risk Underwriting', 'Embedded Warranty Protection']
      },
      {
        id: 'fin-digital',
        name: 'Digital Assets & Tokenization',
        description: 'Regulated tokenized securities, institutional cold custody, stablecoin settlement, and compliance verification.',
        specializations: ['Regulated Tokenized Equities', 'Multi-Signature Institutional Custody', 'Cross-Border Stablecoin Rails', 'On-Chain AML Forensics', 'Decentralized Treasury Vaults', 'Digital Bond Issuance Systems']
      }
    ]
  },
  {
    id: 'healthcare',
    index: '07',
    title: 'Healthcare',
    name: 'Healthcare',
    subtitle: 'Biotechnology, MedTech & Genomics',
    description: 'Therapeutic biotechnology, robotic surgical systems, genomic sequencing laboratories and clinical technologies.',
    profiles: '1,960+',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    categories: [
      {
        id: 'hlth-biotech',
        name: 'Biotechnology & Gene Therapies',
        description: 'CRISPR cellular programming, targeted mRNA delivery vectors, and monoclonal antibody therapeutics.',
        specializations: ['CRISPR-Cas Gene Editing', 'Targeted mRNA Therapeutics', 'Monoclonal Antibody Engineering', 'Cellular CAR-T Therapy', 'Epigenetic Rejuvenation Compounds', 'Synthetic Protein Scaffolds']
      },
      {
        id: 'hlth-devices',
        name: 'Robotic Surgery & Medical Devices',
        description: 'Multi-arm robotic surgical consoles, ultrasound transducers, and implantable neural telemetry.',
        specializations: ['Minimally Invasive Surgical Consoles', 'Implantable Neurostimulation Arrays', 'Point-of-Care Ultrasound Transducers', 'Smart Orthopedic Implants', 'Cardiac Electrophysiology Devices', 'Endoscopic Imaging Robotics']
      },
      {
        id: 'hlth-genomics',
        name: 'Genomics & Molecular Diagnostics',
        description: 'High-throughput DNA sequencing, spatial transcriptomics, and liquid biopsy cancer screening.',
        specializations: ['Next-Gen High-Throughput Sequencing', 'Liquid Biopsy Oncology Screening', 'Spatial Single-Cell Transcriptomics', 'Pharmacogenomics Testing Panels', 'Molecular Pathogen Identification', 'Rare Disease Genetic Panels']
      },
      {
        id: 'hlth-digital',
        name: 'Digital Health & AI Diagnostics',
        description: 'Computer-aided radiological screening, decentralized clinical trial platforms, and patient monitoring.',
        specializations: ['Radiological Computer-Vision AI', 'Remote Biometric Vital Monitoring', 'Decentralized Trial Platforms', 'Predictive ICU Sepsis Scoring', 'Clinical Decision Support Systems', 'Digital Biomarker Analytics']
      },
      {
        id: 'hlth-pharma',
        name: 'Pharmaceuticals & Formulation',
        description: 'Computational drug discovery, lyophilized biologics, micro-encapsulation, and continuous manufacturing.',
        specializations: ['Computational Small-Molecule Design', 'Lyophilized Biologics Formulation', 'Lipid Nanoparticle Encapsulation', 'Continuous Flow Synthesis', 'Targeted Drug Delivery Peptides', 'Sterile Automated Fill-Finish']
      },
      {
        id: 'hlth-hospitals',
        name: 'Clinical Systems & Healthcare Ops',
        description: 'Hospital operational platforms, sterile supply tracking, electronic records, and surgical theaters.',
        specializations: ['Hospital Operations Intelligence', 'Interoperable Fast Healthcare EHR', 'Surgical Instrument RFID Tracking', 'Cleanroom Sterilization Protocols', 'Specialty Pharmacy Distribution', 'Medical Cold-Chain Vaults']
      }
    ]
  },
  {
    id: 'agriculture',
    index: '08',
    title: 'Agriculture',
    name: 'Agriculture',
    subtitle: 'AgTech, Food Systems & Biomaterials',
    description: 'Precision agronomy, automated harvest systems, controlled-environment vertical farming and regenerative soil science.',
    profiles: '940+',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    categories: [
      {
        id: 'agr-agtech',
        name: 'AgTech & Precision Farming',
        description: 'Satellite crop health monitoring, autonomous tractor swarms, and variable-rate nutrient injection.',
        specializations: ['Satellite Multispectral Crop Health', 'Autonomous Swarm Harvesters', 'Soil Microbiome Sensor Arrays', 'Variable-Rate Nutrient Sprayers', 'AI Weeding & Thinning Robotics', 'Automated Irrigation Logic']
      },
      {
        id: 'agr-vertical',
        name: 'Vertical Farming & Cleanrooms',
        description: 'Closed-loop hydroponic and aeroponic vertical facilities with customized spectral lighting.',
        specializations: ['Closed-Loop Aeroponic Towers', 'Dynamic Spectral LED Recipes', 'Automated Gantry Seedling Systems', 'Nutrient Water Recirculation', 'Cleanroom Biosecurity Enclosures', 'Urban Indoor Farm Controllers']
      },
      {
        id: 'agr-bioproteins',
        name: 'Alternative Proteins & Fermentation',
        description: 'Bioreactor cultivated protein, biomass precision fermentation, and fungal biomaterials.',
        specializations: ['Bioreactor Cultivated Cellular Meat', 'Precision Fungal Fermentation', 'Plant-Derived Functional Proteins', 'Algae Superfood Photobioreactors', 'Microbial Protein Synthesis', 'Insect Feed Protein Processing']
      },
      {
        id: 'agr-genetics',
        name: 'Crop Genetics & Seed Science',
        description: 'Drought-tolerant crop varietals, non-GMO gene trait enhancements, and microbial seed coatings.',
        specializations: ['Drought-Tolerant Seed Genetics', 'Nitrogen-Fixing Soil Microbes', 'Heat-Resilient Hybrid Strains', 'Bio-Stimulant Seed Coatings', 'Natural Pathogen Resistance', 'Epigenetic Yield Optimization']
      },
      {
        id: 'agr-supply',
        name: 'Agri-Commodities & Grain Storage',
        description: 'Intelligent grain elevator telemetry, international bulk shipment verification, and fair pricing rails.',
        specializations: ['Automated Grain Silo Aeration', 'Bulk Commodity Origin Verification', 'Digital Bilateral Crop Contracts', 'Perishable Cold-Chain Intermodal', 'Mycotoxin Real-Time Detectors', 'Freight Rail Grain Corridors']
      },
      {
        id: 'agr-carbon',
        name: 'Regenerative Soil & Carbon Credits',
        description: 'Biochar soil enhancement, satellite-verified soil carbon sequestration, and silvopasture systems.',
        specializations: ['Satellite-Verified Soil Carbon', 'Biochar Pyrolysis Soil Amendment', 'Silvopasture Agroforestry Design', 'Cover Crop Root Depth Mapping', 'Riparian Buffer Restoration', 'Water Table Recharge Monitoring']
      }
    ]
  },
  {
    id: 'energy',
    index: '09',
    title: 'Energy',
    name: 'Energy',
    subtitle: 'Renewables, Grid & Decarbonization',
    description: 'Renewable power grids, green hydrogen synthesis, long-duration energy storage and industrial carbon capture.',
    profiles: '1,720+',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    categories: [
      {
        id: 'nrg-solar',
        name: 'Solar & Photovoltaic Systems',
        description: 'Utility-scale tandem perovskite installations, bifacial solar farms, and agrivoltaic trackers.',
        specializations: ['Perovskite-Silicon Tandem Cells', 'Dual-Axis Solar Sun Trackers', 'Utility-Scale Inverter Stations', 'Agrivoltaic Dual-Use Installations', 'Floating Solar Arrays', 'BIPV Architectural Glass']
      },
      {
        id: 'nrg-wind',
        name: 'Wind & Hydro Kinetic Power',
        description: 'Deepwater floating offshore turbines, low-wind direct-drive generators, and pumped storage hydro.',
        specializations: ['Deepwater Floating Offshore Turbines', 'Low-Wind Direct-Drive Nacelles', 'Pumped Storage Hydro Reservoirs', 'Run-of-River Microturbines', 'Turbine Blade Recyclable Resins', 'LIDAR Wind Vector Profiling']
      },
      {
        id: 'nrg-hydrogen',
        name: 'Green Hydrogen & Synthetic Fuels',
        description: 'Proton exchange membrane electrolysis, liquid hydrogen cryogenic bunkering, and e-ammonia.',
        specializations: ['Proton Exchange Membrane (PEM) Stacks', 'Liquid Hydrogen Cryo-Vessels', 'Maritime Green Ammonia Synthesis', 'Direct Air Synthetic E-Kerosene', 'Underground Salt Cavern Hydrogen', 'Hydrogen Fuel Cell Dispensers']
      },
      {
        id: 'nrg-storage',
        name: 'Long-Duration Energy Storage',
        description: 'Vanadium redox flow batteries, solid-state grid storage, thermal sand batteries, and compressed air.',
        specializations: ['Vanadium Redox Flow Batteries', 'Sodium-Ion Utility Storage Units', 'Thermal Sand High-Temp Storage', 'Compressed Air Energy Systems', 'Mechanical Gravity Storage Towers', 'Supercapacitor Fast Frequency']
      },
      {
        id: 'nrg-grid',
        name: 'Smart Grid & Power Transmission',
        description: 'Ultra-high voltage direct current (UHVDC) transmission, virtual power plants, and automated demand response.',
        specializations: ['Ultra-High Voltage DC Transmission', 'Virtual Power Plant Aggregation', 'Microgrid Autonomous Controllers', 'Substation Digital Automation', 'Dynamic Line Rating Sensors', 'Grid Inertia Emulation AI']
      },
      {
        id: 'nrg-carbon',
        name: 'Carbon Capture & Sequestration',
        description: 'Direct air mineralization, industrial flue gas chemical absorption, and permanent geological storage.',
        specializations: ['Direct Air Mineralization Contactors', 'Point-Source Flue Gas Scrubbers', 'Deep Saline Aquifer Sequestration', 'CO2-Derived Synthetic Building Aggregates', 'Carbon Accounting Telemetry', 'Marine Carbon Dioxide Removal']
      }
    ]
  },
  {
    id: 'logistics',
    index: '10',
    title: 'Logistics',
    name: 'Logistics',
    subtitle: 'Maritime, Intermodal & Supply Chains',
    description: 'Autonomous maritime freight, automated deepwater ports, intermodal rail logistics and cold-chain corridors.',
    profiles: '1,630+',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="13" x="1" y="3" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    categories: [
      {
        id: 'log-maritime',
        name: 'Maritime Freight & Smart Ports',
        description: 'Automated electric quay cranes, ultra-large container carriers, LNG dual-fuel propulsion, and berth algorithms.',
        specializations: ['Automated Electric Quay Cranes', 'Ultra-Large Container Carrier Routing', 'LNG Dual-Fuel Bunkering', 'Terminal Operating Systems (TOS)', 'Automated Straddle Carriers', 'Digital Port Clearance Manifests']
      },
      {
        id: 'log-air',
        name: 'Air Cargo & Charter Networks',
        description: 'Dedicated widebody freighters, temperature-controlled cargo containers, and rapid ramp transfer.',
        specializations: ['Widebody Dedicated Freighter Charters', 'Pharma-Certified Unit Load Devices', 'Ramp Ground Handling Optimization', 'Dangerous Goods Flight Safety', 'Automated Air Waybill Processing', 'High-Value Secured Cargo Vaults']
      },
      {
        id: 'log-rail',
        name: 'Intermodal Rail & Autonomous Haulage',
        description: 'Double-stack container rail lines, electric autonomous freight trucks, and dynamic load scheduling.',
        specializations: ['Double-Stack Container Corridors', 'Autonomous Long-Haul Electric Trucks', 'Dynamic Train Composition AI', 'Locomotive Predictive Telemetry', 'Intermodal Dry Port Transfer', 'Rail Route Incline Energy Recovery']
      },
      {
        id: 'log-warehouse',
        name: 'Robotic Warehousing & ASRS',
        description: 'High-density automated storage and retrieval systems, mobile shuttle fleets, and vision picking.',
        specializations: ['Automated Storage & Retrieval (ASRS)', 'High-Density 3D Pallet Shuttles', 'Computer Vision Picking Robots', 'Automated Guided Vehicles (AGV)', 'Autonomous Drone Stock Auditing', 'Dynamic Cross-Docking Rails']
      },
      {
        id: 'log-coldchain',
        name: 'Specialized Cold-Chain Distribution',
        description: 'Cryogenic biomedical transportation, ultra-low temperature vaccine shippers, and produce reefer telemetry.',
        specializations: ['Cryogenic Liquid Nitrogen Shippers', 'Ultra-Low Temperature (-80°C) Vans', 'Controlled-Atmosphere Reefer Boxes', 'Active Dry Ice Sensor Loggers', 'Cold-Chain HACCP Compliance', 'Pre-Cooling Cross-Dock Stations']
      },
      {
        id: 'log-trade',
        name: 'Customs & Border Trade Infrastructure',
        description: 'Digital single-window trade declarations, automated tariff code classification, and bonded hubs.',
        specializations: ['Single-Window Customs Automation', 'Automated Harmonized Tariff Codes', 'Bonded Airport Logistics Zones', 'Authorized Economic Operator (AEO)', 'Trade Sanctions Live Screening', 'International Transit Carnets']
      }
    ]
  },
  {
    id: 'education',
    index: '11',
    title: 'Education',
    name: 'Education',
    subtitle: 'EdTech, Universities & Research',
    description: 'Higher education technologies, institutional research networks, workforce transformation and credential systems.',
    profiles: '1,150+',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    categories: [
      {
        id: 'edu-higher',
        name: 'Higher Education & Academic Portals',
        description: 'University research management systems, open-access scholarly publishing, and campus digital IDs.',
        specializations: ['University Research Repository Systems', 'Open-Access Peer Review Networks', 'Campus Biometric Digital ID', 'Academic Faculty Workload Portals', 'Cross-University Credit Transfer', 'Laboratory Equipment Reservation']
      },
      {
        id: 'edu-edtech',
        name: 'Adaptive Learning & EdTech Suites',
        description: 'AI-personalized learning curricula, immersive STEM virtual laboratories, and interactive canvases.',
        specializations: ['AI Adaptive Learning Paths', 'Immersive WebGL STEM Virtual Labs', 'Automated Formative Assessment', 'Collaborative Classroom Canvases', 'Speech-Enabled Language Tutoring', 'Gamified Student Engagement']
      },
      {
        id: 'edu-corporate',
        name: 'Executive & Workforce Reskilling',
        description: 'Corporate technical bootcamps, executive decision simulation rooms, and skills inventory mapping.',
        specializations: ['Enterprise Technical Reskilling', 'C-Suite Decision Simulation Games', 'Internal Workforce Skills Graphs', 'Interactive Compliance Certification', 'Micro-Learning Mobile Snippets', 'Mentorship Matching Algorithms']
      },
      {
        id: 'edu-credentials',
        name: 'Verifiable Credentials & Badges',
        description: 'Cryptographically signed academic diplomas, decentralized professional licenses, and credential wallets.',
        specializations: ['Cryptographically Signed Diplomas', 'Decentralized Professional Badges', 'Global Degree Equivalence Verification', 'Continuing Education Unit (CEU) Logs', 'Tamper-Proof Transcript APIs', 'Blockchain Academic Wallets']
      },
      {
        id: 'edu-k12',
        name: 'Early & K-12 Educational Systems',
        description: 'Special education adaptive tools, curriculum planning software, and school district administration.',
        specializations: ['Assistive Neurodivergent Learning Tools', 'Multi-District Curriculum Alignment', 'Safe Student Privacy Firewalls', 'Parent-Teacher Communication Hubs', 'Standardized Test Analytics', 'Bus Route Safety Telemetry']
      },
      {
        id: 'edu-publishing',
        name: 'Scholarly Research & Publishing',
        description: 'Global scientific citation indexing, digital library preservation, and preprint review repositories.',
        specializations: ['Global Scientific Citation Indexes', 'Digital Object Identifier (DOI) Engines', 'Automated Plagiarism Detection', 'Preprint Rapid Peer Review Servers', 'Open-Science Data Depositories', 'Scholarly Archive Preservation']
      }
    ]
  },
  {
    id: 'media',
    index: '12',
    title: 'Media & Entertainment',
    name: 'Media & Entertainment',
    subtitle: 'Broadcasting, Gaming & Production',
    description: 'Digital broadcasting networks, real-time virtual production, spatial audio and interactive publishing platforms.',
    profiles: '1,490+',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2"/></svg>`,
    categories: [
      {
        id: 'med-broadcast',
        name: 'Digital Broadcasting & Streaming',
        description: 'Ultra-low latency live video streaming, spatial audio codecs, and edge content distribution networks.',
        specializations: ['Sub-Second Live Video Streaming', 'Spatial 3D Audio Multi-Channel', 'Multi-CDN Traffic Balancing', 'Dynamic SSAI Ad Insertion', '4K HDR Real-Time Edge Transcoding', 'Digital Rights Management (DRM)']
      },
      {
        id: 'med-vfx',
        name: 'Virtual Production & VFX Studios',
        description: 'Real-time in-camera visual effects with LED volumes, optical motion capture, and neural rendering.',
        specializations: ['LED Volume In-Camera VFX Stages', 'Optical Full-Body Motion Capture', 'Neural Radiance Field (NeRF) Scans', 'Unreal Engine Virtual Sets', 'Cloud Rendering Pipeline Farms', 'Photorealistic Facial Rigging']
      },
      {
        id: 'med-gaming',
        name: 'Interactive Gaming & Game Engines',
        description: 'Real-time 3D physics engines, multiplayer server netcode, cloud gaming arrays, and esports platforms.',
        specializations: ['Multiplayer Deterministic Netcode', 'Procedural World Generation Engines', 'Cloud Gaming Server Racks', 'Esports Tournament Broadcast Feeds', 'Physically-Based Rendering Shaders', 'Anti-Cheat Behavioral Systems']
      },
      {
        id: 'med-music',
        name: 'Music Technology & Sound Engineering',
        description: 'Automated mastering algorithms, spatial audio workstations, and international royalty distribution rails.',
        specializations: ['Algorithmic Audio Mastering', 'Spatial Dolby Atmos Mixing Suites', 'Automated Global Royalty Splits', 'Synthesizer DSP Modeling', 'Digital Audio Workstation (DAW) APIs', 'Acoustic Room Calibration']
      },
      {
        id: 'med-publishing',
        name: 'Editorial Journalism & Publishing',
        description: 'Headless newsroom publishing systems, multi-format syndication, and cryptographic fact verification.',
        specializations: ['Headless Multi-Format Newsroom CMS', 'Wire Service Syndication Pipelines', 'Cryptographic Content Provenance', 'Dynamic Metered Paywall Models', 'Automated Fact-Checking Graphs', 'Newsletter High-Volume Dispatch']
      },
      {
        id: 'med-creative',
        name: 'Creative Tools & Digital Assets',
        description: 'Generative vector artwork platforms, non-linear video editors, and 3D asset marketplace ecosystems.',
        specializations: ['Generative Vector Illustration AI', 'Collaborative Cloud Video NLE', 'Photogrammetry 3D Asset Scanners', 'Typeface Foundry Font Engines', 'Color Grading LUT Processing', 'Stock Footage Royalty Clearing']
      }
    ]
  }
];
  if (typeof window !== 'undefined') window.TAXONOMY_SECTORS = TAXONOMY_SECTORS;
  const LEGACY_CATEGORIES = [
    {
      id: 'companies',
      index: 'SEC-LEGACY-01',
      title: 'Companies',
      name: 'Companies',
      subtitle: 'Global Conglomerates & Titans',
      description: 'Multinational enterprises, industrial conglomerates, and diversified corporate holdings operating across worldwide borders.',
      profiles: '3,840+',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 7v14M21 7v14M6 7V3h12v4M9 11h2M9 15h2M13 11h2M13 15h2"/></svg>'
    },
    {
      id: 'startups',
      index: 'SEC-LEGACY-02',
      title: 'Startups',
      name: 'Startups',
      subtitle: 'Next-Gen Disruptors & Innovators',
      description: 'High-growth technology ventures from seed stage to series B, pioneering breakthroughs in AI, compute, and deep science.',
      profiles: '2,920+',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v8M4.93 10.93l5.66 5.66M2 18l4-4 4 4M20 18l-4-4-4 4M19.07 10.93l-5.66 5.66M12 18v4"/></svg>'
    },
    {
      id: 'brands',
      index: 'SEC-LEGACY-03',
      title: 'Brands',
      name: 'Brands',
      subtitle: 'Consumer Icons & Digital Pioneers',
      description: 'Direct-to-consumer innovators, heritage luxury houses, and cultural powerhouses commanding international consumer loyalty.',
      profiles: '1,750+',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>'
    },
    {
      id: 'products',
      index: 'SEC-LEGACY-04',
      title: 'Products',
      name: 'Products',
      subtitle: 'Hardware, Compute & Devices',
      description: 'Advanced physical goods, consumer robotics, spatial computing gear, next-gen mobility, and intelligent hardware.',
      profiles: '1,420+',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></svg>'
    }
  ];
  const CATEGORIES = [...TAXONOMY_SECTORS, ...LEGACY_CATEGORIES];
  if (typeof window !== 'undefined') window.CATEGORIES = CATEGORIES;

  const DEMO_LEADERBOARD = [
    {
      rank: 1,
      name: 'Apex Robotics',
      symbol: 'APX',
      logoBg: '#EFEEE9',
      logoColor: '#20211F',
      countryCode: 'US',
      countryName: 'United States',
      flag: '🇺🇸',
      city: 'San Francisco, CA',
      industry: 'Technology',
      category: 'Robotics & AI',
      score: 98.7,
      velocity: '+14.2%',
      movement: 'up',
      movementAmount: 3,
      isSponsored: true,
      sponsorTier: 'Global Tier 1 Sponsor',
      reachMetrics: '3.4M Impressions • 142 Countries',
      verified: true,
      website: 'https://apexrobotics.example.com',
      description: 'Autonomous humanoid robotics platform for high-precision manufacturing and logistics compute.'
    },
    {
      rank: 2,
      name: 'Vanguard Quantum',
      symbol: 'VGQ',
      logoBg: '#E8E6DF',
      logoColor: '#20211F',
      countryCode: 'GB',
      countryName: 'United Kingdom',
      flag: '🇬🇧',
      city: 'London',
      industry: 'Technology',
      category: 'Quantum Computing',
      score: 97.4,
      velocity: '+8.9%',
      movement: 'up',
      movementAmount: 1,
      isSponsored: false,
      sponsorTier: null,
      reachMetrics: '2.1M Impressions • 98 Countries',
      verified: true,
      website: 'https://vanguardquantum.example.com',
      description: 'Scalable topological qubit architectures for cryptographic simulation and molecular modeling.'
    },
    {
      rank: 3,
      name: 'Sovereign Health Labs',
      symbol: 'SHL',
      logoBg: '#FCECEB',
      logoColor: '#B74735',
      countryCode: 'CH',
      countryName: 'Switzerland',
      flag: '🇨🇭',
      city: 'Zurich',
      industry: 'Healthcare',
      category: 'Biotechnology & Genomics',
      score: 96.1,
      velocity: '+22.5%',
      movement: 'up',
      movementAmount: 5,
      isSponsored: true,
      sponsorTier: 'Worldwide Category Leader',
      reachMetrics: '2.8M Impressions • 116 Countries',
      verified: true,
      website: 'https://sovereignhealth.example.com',
      description: 'AI-directed cellular programming and personalized gene-editing therapies for age-related therapeutics.'
    },
    {
      rank: 4,
      name: 'Nippon Clean Energy',
      symbol: 'NCE',
      logoBg: '#EAF7EA',
      logoColor: '#36B82B',
      countryCode: 'JP',
      countryName: 'Japan',
      flag: '🇯🇵',
      city: 'Tokyo',
      industry: 'Manufacturing',
      category: 'Clean Energy & Hydrogen',
      score: 95.3,
      velocity: '+4.1%',
      movement: 'same',
      movementAmount: 0,
      isSponsored: false,
      sponsorTier: null,
      reachMetrics: '1.9M Impressions • 84 Countries',
      verified: true,
      website: 'https://nipponcleanenergy.example.com',
      description: 'Large-scale liquid hydrogen synthesis networks and maritime decarbonization transport systems.'
    },
    {
      rank: 5,
      name: 'Kinetix Global Logistics',
      symbol: 'KGL',
      logoBg: '#EFEEE9',
      logoColor: '#20211F',
      countryCode: 'SG',
      countryName: 'Singapore',
      flag: '🇸🇬',
      city: 'Singapore',
      industry: 'Services',
      category: 'Autonomous Supply Chain',
      score: 94.8,
      velocity: '+18.7%',
      movement: 'up',
      movementAmount: 2,
      isSponsored: true,
      sponsorTier: 'Regional Multi-Market Sponsor',
      reachMetrics: '2.4M Impressions • 89 Countries',
      verified: true,
      website: 'https://kinetixlogistics.example.com',
      description: 'Automated deepwater port telemetry and real-time algorithmic freight optimization across Asia-Pacific.'
    },
    {
      rank: 6,
      name: 'Aetherion Cloud Systems',
      symbol: 'ACS',
      logoBg: '#E8E6DF',
      logoColor: '#20211F',
      countryCode: 'DE',
      countryName: 'Germany',
      flag: '🇩🇪',
      city: 'Frankfurt',
      industry: 'Software',
      category: 'Enterprise Infrastructure',
      score: 93.9,
      velocity: '-1.4%',
      movement: 'down',
      movementAmount: 1,
      isSponsored: false,
      sponsorTier: null,
      reachMetrics: '1.7M Impressions • 76 Countries',
      verified: true,
      website: 'https://aetherion.example.com',
      description: 'Zero-trust distributed cloud compute clusters engineered for stringent European data sovereignty compliance.'
    },
    {
      rank: 7,
      name: 'Emirates FinTech Gateway',
      symbol: 'EFG',
      logoBg: '#FDF3E6',
      logoColor: '#B74735',
      countryCode: 'AE',
      countryName: 'United Arab Emirates',
      flag: '🇦🇪',
      city: 'Dubai (DIFC)',
      industry: 'Finance',
      category: 'Institutional Digital Assets',
      score: 93.2,
      velocity: '+31.0%',
      movement: 'up',
      movementAmount: 6,
      isSponsored: true,
      sponsorTier: 'Global Tier 1 Sponsor',
      reachMetrics: '3.1M Impressions • 120 Countries',
      verified: true,
      website: 'https://emiratesfintech.example.com',
      description: 'Regulated institutional settlement rails and liquidity routing across Middle Eastern and Asian financial hubs.'
    },
    {
      rank: 8,
      name: 'TerraVerde Biosystems',
      symbol: 'TVB',
      logoBg: '#EAF7EA',
      logoColor: '#36B82B',
      countryCode: 'BR',
      countryName: 'Brazil',
      flag: '🇧🇷',
      city: 'São Paulo',
      industry: 'Agriculture',
      category: 'AgTech & Carbon Capture',
      score: 92.5,
      velocity: 'NEW',
      movement: 'new',
      movementAmount: 0,
      isSponsored: false,
      sponsorTier: null,
      reachMetrics: '1.2M Impressions • 62 Countries',
      verified: true,
      website: 'https://terraverde.example.com',
      description: 'Satellite-guided regenerative agroforestry systems optimizing crop yields while validating soil carbon credits.'
    },
    {
      rank: 9,
      name: 'Bharat NeuroSystems',
      symbol: 'BNS',
      logoBg: '#EFEEE9',
      logoColor: '#20211F',
      countryCode: 'IN',
      countryName: 'India',
      flag: '🇮🇳',
      city: 'Bengaluru',
      industry: 'Technology',
      category: 'Edge Neural Hardware',
      score: 91.8,
      velocity: '+12.6%',
      movement: 'up',
      movementAmount: 4,
      isSponsored: true,
      sponsorTier: 'Growth Sponsor',
      reachMetrics: '2.0M Impressions • 71 Countries',
      verified: true,
      website: 'https://bharatneuro.example.com',
      description: 'Low-power neuromorphic vision processors designed for high-throughput automated industrial inspection.'
    },
    {
      rank: 10,
      name: 'Nordic Oceanics',
      symbol: 'NOC',
      logoBg: '#E8E6DF',
      logoColor: '#20211F',
      countryCode: 'SE',
      countryName: 'Sweden',
      flag: '🇸🇪',
      city: 'Stockholm',
      industry: 'Companies',
      category: 'Offshore Energy & Robotics',
      score: 90.9,
      velocity: '-2.1%',
      movement: 'down',
      movementAmount: 2,
      isSponsored: false,
      sponsorTier: null,
      reachMetrics: '1.4M Impressions • 58 Countries',
      verified: true,
      website: 'https://nordicoceanics.example.com',
      description: 'Subsea autonomous exploration rovers maintaining critical deep-sea communication cables and wind farms.'
    },
    {
      rank: 11,
      name: 'Austral Synthetics',
      symbol: 'ASY',
      logoBg: '#EAF7EA',
      logoColor: '#36B82B',
      countryCode: 'AU',
      countryName: 'Australia',
      flag: '🇦🇺',
      city: 'Sydney',
      industry: 'Products',
      category: 'Bio-Polymer Engineering',
      score: 89.7,
      velocity: '+7.4%',
      movement: 'up',
      movementAmount: 1,
      isSponsored: false,
      sponsorTier: null,
      reachMetrics: '980K Impressions • 44 Countries',
      verified: true,
      website: 'https://australsynthetics.example.com',
      description: 'Seaweed-derived marine biodegradable packaging replacing single-use petrochemical barriers.'
    },
    {
      rank: 12,
      name: 'Lumière Haute Horlogerie',
      symbol: 'LHH',
      logoBg: '#FDF3E6',
      logoColor: '#20211F',
      countryCode: 'FR',
      countryName: 'France',
      flag: '🇫🇷',
      city: 'Paris',
      industry: 'Brands',
      category: 'Luxury & Micro-Mechanics',
      score: 89.2,
      velocity: '+15.8%',
      movement: 'up',
      movementAmount: 3,
      isSponsored: true,
      sponsorTier: 'Worldwide Category Leader',
      reachMetrics: '1.6M Impressions • 92 Countries',
      verified: true,
      website: 'https://lumierehorlogerie.example.com',
      description: 'Ultra-rare tourbillon timepieces merging French artisanal micro-mechanics with titanium laser sintering.'
    },
    {
      rank: 13,
      name: 'Meridian Omnichannel Labs',
      symbol: 'MOL',
      logoBg: '#EFEEE9',
      logoColor: '#20211F',
      countryCode: 'SE',
      countryName: 'Sweden',
      flag: '🇸🇪',
      city: 'Stockholm',
      industry: 'Retail',
      category: 'Omnichannel Commerce & Direct-to-Consumer',
      score: 91.2,
      velocity: '+9.4%',
      movement: 'up',
      movementAmount: 2,
      isSponsored: false,
      sponsorTier: null,
      reachMetrics: '1.5M Impressions • 65 Countries',
      verified: true,
      website: 'https://meridiancommerce.example.com',
      description: 'AI-driven autonomous fulfillment micro-hubs and borderless multi-currency omnichannel commerce platforms.'
    },
    {
      rank: 14,
      name: 'Helios Power Grid Dynamics',
      symbol: 'HPG',
      logoBg: '#EAF7EA',
      logoColor: '#36B82B',
      countryCode: 'CA',
      countryName: 'Canada',
      flag: '🇨🇦',
      city: 'Calgary',
      industry: 'Energy',
      category: 'Solar, Smart Grid & Decarbonization',
      score: 92.8,
      velocity: '+17.3%',
      movement: 'up',
      movementAmount: 4,
      isSponsored: true,
      sponsorTier: 'Growth Sponsor',
      reachMetrics: '2.3M Impressions • 88 Countries',
      verified: true,
      website: 'https://heliosgrid.example.com',
      description: 'Utility-scale perovskite solar arrays and ultra-high voltage direct current virtual power plant architectures.'
    },
    {
      rank: 15,
      name: 'TransGlobal Maritime Intermodal',
      symbol: 'TMI',
      logoBg: '#EFEEE9',
      logoColor: '#20211F',
      countryCode: 'NL',
      countryName: 'Netherlands',
      flag: '🇳🇱',
      city: 'Rotterdam',
      industry: 'Logistics',
      category: 'Autonomous Intermodal Freight & Port Telemetry',
      score: 93.5,
      velocity: '+8.2%',
      movement: 'up',
      movementAmount: 1,
      isSponsored: false,
      sponsorTier: null,
      reachMetrics: '2.7M Impressions • 94 Countries',
      verified: true,
      website: 'https://transgloballogistics.example.com',
      description: 'Decarbonized autonomous container vessels and automated crane telemetry across global maritime corridors.'
    },
    {
      rank: 16,
      name: 'Veritas Open Academia',
      symbol: 'VOA',
      logoBg: '#FDF3E6',
      logoColor: '#20211F',
      countryCode: 'US',
      countryName: 'United States',
      flag: '🇺🇸',
      city: 'Boston, MA',
      industry: 'Education',
      category: 'Adaptive Learning & Verifiable Credentials',
      score: 90.4,
      velocity: '+11.8%',
      movement: 'up',
      movementAmount: 3,
      isSponsored: false,
      sponsorTier: null,
      reachMetrics: '1.1M Impressions • 52 Countries',
      verified: true,
      website: 'https://veritasacademia.example.com',
      description: 'Cryptographically signed degree verification and cognitive neuro-adaptive tutoring frameworks for global universities.'
    },
    {
      rank: 17,
      name: 'Spectra Virtual Studios',
      symbol: 'SVS',
      logoBg: '#FCECEB',
      logoColor: '#B74735',
      countryCode: 'KR',
      countryName: 'South Korea',
      flag: '🇰🇷',
      city: 'Seoul',
      industry: 'Media & Entertainment',
      category: 'Virtual Production & Spatial Audio Codecs',
      score: 92.1,
      velocity: '+14.5%',
      movement: 'up',
      movementAmount: 5,
      isSponsored: true,
      sponsorTier: 'Worldwide Category Leader',
      reachMetrics: '3.0M Impressions • 108 Countries',
      verified: true,
      website: 'https://spectravirtual.example.com',
      description: 'Real-time LED volume in-camera VFX stages, spatial Dolby Atmos audio synthesis, and neural radiance field rendering.'
    }
  ];

  const SOVEREIGN_MARKETS = [
    { code: 'US', name: 'United States', flag: '🇺🇸', region: 'Americas', activeProfiles: '1,840+', topSector: 'Technology & AI', leadBrand: 'Apex Robotics', avgReach: '98.4%', image: 'assets/images/market-usa.jpg' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', region: 'Europe', activeProfiles: '890+', topSector: 'Fintech & DeepTech', leadBrand: 'Vanguard Quantum', avgReach: '95.1%', image: 'assets/images/sector-finance.jpg' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪', region: 'Europe', activeProfiles: '940+', topSector: 'Industrial & Cloud', leadBrand: 'Aetherion Cloud Systems', avgReach: '94.6%', image: 'assets/images/market-germany.jpg' },
    { code: 'JP', name: 'Japan', flag: '🇯🇵', region: 'Asia-Pacific', activeProfiles: '820+', topSector: 'Clean Energy & Robotics', leadBrand: 'Nippon Clean Energy', avgReach: '93.8%', image: 'assets/images/market-japan.jpg' },
    { code: 'SG', name: 'Singapore', flag: '🇸🇬', region: 'Asia-Pacific', activeProfiles: '610+', topSector: 'Autonomous Logistics', leadBrand: 'Kinetix Global Logistics', avgReach: '96.2%', image: 'assets/images/market-singapore.jpg' },
    { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪', region: 'Middle East', activeProfiles: '540+', topSector: 'Institutional FinTech', leadBrand: 'Emirates FinTech Gateway', avgReach: '94.0%', image: 'assets/images/editorial-global-business.jpg' },
    { code: 'CH', name: 'Switzerland', flag: '🇨🇭', region: 'Europe', activeProfiles: '480+', topSector: 'Biotech & Private Banking', leadBrand: 'Sovereign Health Labs', avgReach: '95.9%', image: 'assets/images/sector-healthcare.jpg' },
    { code: 'IN', name: 'India', flag: '🇮🇳', region: 'Asia-Pacific', activeProfiles: '1,120+', topSector: 'Edge AI & Cloud SaaS', leadBrand: 'Bharat NeuroSystems', avgReach: '92.3%', image: 'assets/images/sector-technology.jpg' },
    { code: 'BR', name: 'Brazil', flag: '🇧🇷', region: 'Americas', activeProfiles: '430+', topSector: 'AgTech & Renewables', leadBrand: 'TerraVerde Biosystems', avgReach: '90.7%', image: 'assets/images/sector-agriculture.jpg' },
    { code: 'SE', name: 'Sweden', flag: '🇸🇪', region: 'Europe', activeProfiles: '360+', topSector: 'DeepSea & Renewable', leadBrand: 'Nordic Oceanics', avgReach: '91.4%', image: 'assets/images/sector-manufacturing.jpg' },
    { code: 'AU', name: 'Australia', flag: '🇦🇺', region: 'Asia-Pacific', activeProfiles: '490+', topSector: 'Bio-Polymers & Mining Tech', leadBrand: 'Austral Synthetics', avgReach: '91.8%', image: 'assets/images/editorial-global-business.jpg' },
    { code: 'FR', name: 'France', flag: '🇫🇷', region: 'Europe', activeProfiles: '730+', topSector: 'Luxury & Aerospace', leadBrand: 'Lumière Haute Horlogerie', avgReach: '93.2%', image: 'assets/images/market-japan.jpg' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦', region: 'Americas', activeProfiles: '580+', topSector: 'CleanTech & Computing', leadBrand: 'Hyperion BioFuels', avgReach: '92.0%', image: 'assets/images/market-usa.jpg' },
    { code: 'KR', name: 'South Korea', flag: '🇰🇷', region: 'Asia-Pacific', activeProfiles: '690+', topSector: 'Semiconductors & Batteries', leadBrand: 'Solum Matrix', avgReach: '94.5%', image: 'assets/images/sector-technology.jpg' },
    { code: 'NL', name: 'Netherlands', flag: '🇳🇱', region: 'Europe', activeProfiles: '410+', topSector: 'Lithography & Agritech', leadBrand: 'VanderMeer Optical', avgReach: '93.7%', image: 'assets/images/market-germany.jpg' },
    { code: 'IL', name: 'Israel', flag: '🇮🇱', region: 'Middle East', activeProfiles: '520+', topSector: 'Cybersecurity & Vision AI', leadBrand: 'CipherCore Systems', avgReach: '94.9%', image: 'assets/images/sector-software.jpg' },
    { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦', region: 'Middle East', activeProfiles: '380+', topSector: 'Giga-Projects & Solar', leadBrand: 'Neom Horizon Energy', avgReach: '91.2%', image: 'assets/images/editorial-global-business.jpg' },
    { code: 'ZA', name: 'South Africa', flag: '🇿🇦', region: 'Africa', activeProfiles: '290+', topSector: 'Mining Telemetry & Fintech', leadBrand: 'Veldt Dynamics', avgReach: '88.6%', image: 'assets/images/sector-manufacturing.jpg' },
    { code: 'NG', name: 'Nigeria', flag: '🇳🇬', region: 'Africa', activeProfiles: '340+', topSector: 'Payment Rails & Agri-Logistics', leadBrand: 'Lagos HyperNet', avgReach: '89.1%', image: 'assets/images/editorial-global-business.jpg' },
    { code: 'MX', name: 'Mexico', flag: '🇲🇽', region: 'Americas', activeProfiles: '370+', topSector: 'Nearshore Manufacturing', leadBrand: 'Azteca Automata', avgReach: '89.8%', image: 'assets/images/sector-manufacturing.jpg' }
  ];

  const SPONSOR_TIERS = [
    {
      id: 'starter',
      name: 'Regional Focus',
      tagline: 'Establish verified presence in a dedicated geographic market',
      badge: 'TARGETED REACH',
      features: [
        'Verified corporate listing with multi-language profile',
        'Targeted sponsored placement in 1 chosen sovereign country',
        'Direct contact & inbound inquiry forwarding',
        'Weekly discovery analytics & profile visit counts',
        'Transparent "Sponsored" designation badge'
      ],
      recommended: false
    },
    {
      id: 'growth',
      name: 'Multi-Market Sponsored',
      tagline: 'High-visibility placement across entire regional economic zones',
      badge: 'MOST POPULAR',
      features: [
        'Everything in Regional Focus',
        'Promoted placement across up to 5 countries in your sector',
        'Category leaderboard highlighting with score badge',
        'Priority inclusion in the global Command Search index',
        'Real-time geographic audience telemetry dashboard',
        'Multi-language translation indexing across 10+ languages'
      ],
      recommended: true
    },
    {
      id: 'enterprise',
      name: 'Worldwide Category Leader',
      tagline: 'Maximum international exposure across all 195+ sovereign markets',
      badge: 'GLOBAL DOMINANCE',
      features: [
        'Top-tier sponsored placement on Global & Sector leaderboards',
        'Featured placement on the 3D Interactive Discovery Globe',
        'Global presence across all 195+ sovereign country views',
        'Comprehensive profile with media gallery, whitepapers & executive roster',
        'Dedicated compliance manager for sponsored disclosures',
        'Continuous 24/7 API telemetry access'
      ],
      recommended: false
    }
  ];

  /* ==========================================================================
     3. REFINED EDITORIAL CARTOGRAPHIC VECTOR GLOBE
     ========================================================================== */
  class VectorGlobe {
    constructor(canvasId, options = {}) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;

      this.ctx = this.canvas.getContext('2d');
      this.options = Object.assign({
        pointCount: 1100,
        radiusRatio: 0.38,
        autoRotateSpeed: 0.002,
        accentGreen: '#36B82B',
        accentRed: '#B74735',
        dotColor: '#20211F'
      }, options);

      this.hubs = [
        { name: 'San Francisco', lat: 37.7749, lon: -122.4194, tag: 'Apex Robotics' },
        { name: 'New York', lat: 40.7128, lon: -74.0060, tag: 'Global Tier 1' },
        { name: 'London', lat: 51.5074, lon: -0.1278, tag: 'Vanguard Quantum' },
        { name: 'Zurich', lat: 47.3769, lon: 8.5417, tag: 'Sovereign Health' },
        { name: 'Dubai', lat: 25.2048, lon: 55.2708, tag: 'Emirates FinTech' },
        { name: 'Tokyo', lat: 35.6762, lon: 139.6503, tag: 'Nippon Clean' },
        { name: 'Singapore', lat: 1.3521, lon: 103.8198, tag: 'Kinetix Logistics' },
        { name: 'Bengaluru', lat: 12.9716, lon: 77.5946, tag: 'Bharat Neuro' },
        { name: 'São Paulo', lat: -23.5505, lon: -46.6333, tag: 'TerraVerde' },
        { name: 'Sydney', lat: -33.8688, lon: 151.2093, tag: 'Austral Syn' }
      ];

      this.arcs = [
        { from: 0, to: 5, progress: 0.1, speed: 0.005 },
        { from: 2, to: 4, progress: 0.4, speed: 0.007 },
        { from: 4, to: 6, progress: 0.7, speed: 0.006 },
        { from: 1, to: 2, progress: 0.2, speed: 0.008 },
        { from: 6, to: 9, progress: 0.5, speed: 0.004 },
        { from: 7, to: 4, progress: 0.8, speed: 0.006 },
        { from: 8, to: 1, progress: 0.3, speed: 0.005 }
      ];

      this.rotX = 0.25;
      this.rotY = -0.6;
      this.velX = 0;
      this.velY = 0;
      this.isDragging = false;
      this.lastPointerX = 0;
      this.lastPointerY = 0;
      this.animId = null;
      this.pulseTimer = 0;
      this.reducedMotion = false;

      this.points = [];
      this.initPoints();
      this.initCanvas();
      this.bindEvents();
      this.start();
    }

    initPoints() {
      this.points = [];
      const phi = Math.PI * (Math.sqrt(5) - 1);
      for (let i = 0; i < this.options.pointCount; i++) {
        const y = 1 - (i / (this.options.pointCount - 1)) * 2;
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = phi * i;
        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;
        const isContinental = Math.sin(x * 3.5) * Math.cos(z * 3.5) + y * 0.4 > -0.15;
        this.points.push({
          x, y, z,
          size: isContinental ? (Math.random() > 0.88 ? 2.0 : 1.2) : 0.8,
          isContinental,
          baseAlpha: isContinental ? 0.75 : 0.2
        });
      }

      this.hubPoints = this.hubs.map(hub => {
        const latRad = (hub.lat * Math.PI) / 180;
        const lonRad = (hub.lon * Math.PI) / 180;
        return {
          ...hub,
          x: Math.cos(latRad) * Math.sin(lonRad),
          y: -Math.sin(latRad),
          z: Math.cos(latRad) * Math.cos(lonRad)
        };
      });
    }

    initCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = this.canvas.getBoundingClientRect();
      const width = rect.width || this.canvas.parentElement?.clientWidth || 540;
      const height = rect.height || this.canvas.parentElement?.clientHeight || 540;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);

      this.width = width;
      this.height = height;
      this.centerX = width / 2;
      this.centerY = height / 2;
      this.radius = Math.min(width, height) * this.options.radiusRatio;
    }

    bindEvents() {
      window.addEventListener('resize', () => this.initCanvas());

      const onPointerDown = (e) => {
        this.isDragging = true;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        this.lastPointerX = clientX;
        this.lastPointerY = clientY;
        this.velX = 0;
        this.velY = 0;
      };

      const onPointerMove = (e) => {
        if (!this.isDragging) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const deltaX = clientX - this.lastPointerX;
        const deltaY = clientY - this.lastPointerY;

        this.velY = deltaX * 0.005;
        this.velX = -deltaY * 0.005;

        this.rotY += this.velY;
        this.rotX += this.velX;
        this.rotX = Math.max(-Math.PI * 0.42, Math.min(Math.PI * 0.42, this.rotX));

        this.lastPointerX = clientX;
        this.lastPointerY = clientY;
      };

      const onPointerUp = () => { this.isDragging = false; };

      this.canvas.addEventListener('mousedown', onPointerDown);
      window.addEventListener('mousemove', onPointerMove);
      window.addEventListener('mouseup', onPointerUp);

      this.canvas.addEventListener('touchstart', onPointerDown, { passive: true });
      window.addEventListener('touchmove', onPointerMove, { passive: true });
      window.addEventListener('touchend', onPointerUp);
    }

    rotatePoint(p, rotX, rotY) {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = p.x * cosY + p.z * sinY;
      const z1 = -p.x * sinY + p.z * cosY;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;

      return { x: x1, y: y2, z: z2 };
    }

    draw() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      if (!this.isDragging) {
        if (!this.reducedMotion) {
          this.rotY += this.options.autoRotateSpeed;
        }
        this.rotY += this.velY;
        this.rotX += this.velX;
        this.velX *= 0.94;
        this.velY *= 0.94;
        this.rotX = Math.max(-Math.PI * 0.42, Math.min(Math.PI * 0.42, this.rotX));
      }

      this.pulseTimer += 0.04;

      const cx = this.centerX;
      const cy = this.centerY;
      const r = this.radius;

      // 1. Clean Editorial Sphere Background (Warm Paper Tone)
      ctx.fillStyle = '#EFEEE9';
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();

      // Subtle hairline boundary ring
      ctx.strokeStyle = '#DAD9D2';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 2. Project points
      const projectedPoints = this.points.map(p => {
        const rotated = this.rotatePoint(p, this.rotX, this.rotY);
        return {
          screenX: cx + rotated.x * r,
          screenY: cy + rotated.y * r,
          z: rotated.z,
          size: p.size,
          isContinental: p.isContinental,
          baseAlpha: p.baseAlpha
        };
      });

      // 3. Background points (z <= 0)
      for (let i = 0; i < projectedPoints.length; i++) {
        const pt = projectedPoints[i];
        if (pt.z <= 0) {
          const depth = (pt.z + 1) * 0.5;
          const alpha = Math.max(0.04, pt.baseAlpha * depth * 0.25);
          ctx.fillStyle = `rgba(98, 100, 95, ${alpha})`;
          ctx.beginPath();
          ctx.arc(pt.screenX, pt.screenY, pt.size * 0.65, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 4. Project hubs
      const projectedHubs = this.hubPoints.map(hub => {
        const rotated = this.rotatePoint(hub, this.rotX, this.rotY);
        return {
          ...hub,
          screenX: cx + rotated.x * r,
          screenY: cy + rotated.y * r,
          z: rotated.z
        };
      });

      // 5. Draw Arcs (Minimalist Line Art)
      this.arcs.forEach(arc => {
        const hFrom = projectedHubs[arc.from];
        const hTo = projectedHubs[arc.to];

        if (hFrom.z > -0.3 || hTo.z > -0.3) {
          const midX = (hFrom.screenX + hTo.screenX) / 2;
          const midY = (hFrom.screenY + hTo.screenY) / 2;
          const dist = Math.hypot(hTo.screenX - hFrom.screenX, hTo.screenY - hFrom.screenY);
          const dirX = midX - cx;
          const dirY = midY - cy;
          const dirLen = Math.hypot(dirX, dirY) || 1;
          const arcElevation = Math.min(dist * 0.32, 40);
          const ctrlX = midX + (dirX / dirLen) * arcElevation;
          const ctrlY = midY + (dirY / dirLen) * arcElevation;

          const arcAlpha = Math.max(0.08, Math.min(0.4, (hFrom.z + hTo.z + 1) * 0.25));
          ctx.strokeStyle = `rgba(32, 33, 31, ${arcAlpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(hFrom.screenX, hFrom.screenY);
          ctx.quadraticCurveTo(ctrlX, ctrlY, hTo.screenX, hTo.screenY);
          ctx.stroke();

          if (!this.reducedMotion) {
            arc.progress = (arc.progress + arc.speed) % 1;
          }
          const t = arc.progress;
          const pulseX = (1 - t) * (1 - t) * hFrom.screenX + 2 * (1 - t) * t * ctrlX + t * t * hTo.screenX;
          const pulseY = (1 - t) * (1 - t) * hFrom.screenY + 2 * (1 - t) * t * ctrlY + t * t * hTo.screenY;

          ctx.fillStyle = this.options.accentGreen;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 6. Foreground points (z > 0)
      for (let i = 0; i < projectedPoints.length; i++) {
        const pt = projectedPoints[i];
        if (pt.z > 0) {
          const depth = pt.z;
          const alpha = Math.min(0.9, pt.baseAlpha * (0.35 + depth * 0.65));

          if (pt.isContinental && depth > 0.5 && Math.random() > 0.94) {
            ctx.fillStyle = this.options.accentGreen;
          } else if (pt.isContinental) {
            ctx.fillStyle = `rgba(32, 33, 31, ${alpha})`;
          } else {
            ctx.fillStyle = `rgba(98, 100, 95, ${alpha * 0.4})`;
          }

          const size = pt.size * (0.8 + depth * 0.45);
          ctx.beginPath();
          ctx.arc(pt.screenX, pt.screenY, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 7. Major Hub Beacons
      projectedHubs.forEach(hub => {
        if (hub.z > 0.05) {
          const depth = hub.z;
          const pulseScale = 1 + (Math.sin(this.pulseTimer + hub.z * 5) + 1) * 0.4;

          // Pulse ring
          ctx.strokeStyle = `rgba(54, 184, 43, ${depth * 0.45})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(hub.screenX, hub.screenY, 5 * pulseScale, 0, Math.PI * 2);
          ctx.stroke();

          // Hub point
          ctx.fillStyle = this.options.accentGreen;
          ctx.beginPath();
          ctx.arc(hub.screenX, hub.screenY, 3, 0, Math.PI * 2);
          ctx.fill();

          if (depth > 0.55) {
            ctx.font = '10px "DM Mono", monospace';
            ctx.fillStyle = `rgba(32, 33, 31, ${depth * 0.9})`;
            ctx.fillText(hub.name.toUpperCase(), hub.screenX + 8, hub.screenY - 3);
            ctx.fillStyle = `rgba(54, 184, 43, ${depth * 0.85})`;
            ctx.fillText('• ' + hub.tag, hub.screenX + 8, hub.screenY + 8);
          }
        }
      });
    }

    start() {
      const loop = () => {
        this.draw();
        this.animId = requestAnimationFrame(loop);
      };
      this.animId = requestAnimationFrame(loop);
    }
  }

  /* ==========================================================================
     4. AUDIO FEEDBACK
     ========================================================================== */
  class SoundFX {
    constructor() {
      this.enabled = false;
      this.ctx = null;
      this.supported = Boolean(window.AudioContext || window.webkitAudioContext);
      this.globeActive = false;
      this.ambient = null;
    }
    init() {
      const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
      if (!this.ctx && AudioContextConstructor) this.ctx = new AudioContextConstructor();
    }
    setEnabled(enabled) {
      if (enabled === this.enabled) return;

      if (!enabled) {
        this.enabled = false;
        this.stopGlobeAmbient();
        this.syncControls();
        return;
      }

      this.init();
      if (!this.ctx) throw new Error('Web Audio API is not supported in this browser.');

      this.enabled = true;
      this.ctx.resume().catch(error => {
        this.enabled = false;
        this.stopGlobeAmbient();
        this.syncControls();
        console.error('Unable to resume BRG audio.', error);
      });

      try {
        if (this.globeActive) this.startGlobeAmbient();
        this.syncControls();
      } catch (error) {
        this.enabled = false;
        this.stopGlobeAmbient();
        this.syncControls();
        throw error;
      }
    }
    setGlobeActive(active) {
      this.globeActive = active;
      if (!this.enabled) return;
      if (active) this.startGlobeAmbient();
      else this.stopGlobeAmbient();
    }
    syncControls() {
      const audioBtn = document.getElementById('toggle-sound-btn');
      if (audioBtn) {
        audioBtn.classList.toggle('is-active', this.enabled);
        audioBtn.disabled = !this.supported;
        audioBtn.setAttribute('aria-pressed', String(this.enabled));
        audioBtn.setAttribute('aria-label', this.enabled ? 'Turn sound off' : 'Turn sound on');
        const label = audioBtn.querySelector('.sound-btn-label');
        if (label) label.textContent = this.enabled ? 'AUDIO ON' : 'AUDIO OFF';
      }
      window.dispatchEvent(new CustomEvent('brg:sound-state', {
        detail: { enabled: this.enabled }
      }));
    }
    startGlobeAmbient() {
      if (!this.enabled || !this.globeActive || !this.ctx || this.ambient) return;

      const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 2, this.ctx.sampleRate);
      const samples = buffer.getChannelData(0);
      for (let index = 0; index < samples.length; index += 1) {
        samples[index] = (Math.random() * 2 - 1) * 0.35;
      }

      const source = this.ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;

      const lowPass = this.ctx.createBiquadFilter();
      lowPass.type = 'lowpass';
      lowPass.frequency.value = 520;
      lowPass.Q.value = 0.65;

      const highPass = this.ctx.createBiquadFilter();
      highPass.type = 'highpass';
      highPass.frequency.value = 95;

      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.024, now + 1.8);

      const lfo = this.ctx.createOscillator();
      const lfoDepth = this.ctx.createGain();
      lfo.frequency.value = 0.08;
      lfoDepth.gain.value = 190;
      lfo.connect(lfoDepth);
      lfoDepth.connect(lowPass.frequency);

      const tones = [
        { frequency: 110, level: 0.28 },
        { frequency: 164.81, level: 0.14 }
      ].map(tone => {
        const oscillator = this.ctx.createOscillator();
        const toneGain = this.ctx.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.value = tone.frequency;
        toneGain.gain.value = tone.level;
        oscillator.connect(toneGain);
        toneGain.connect(gain);
        oscillator.start();
        return { oscillator, gain: toneGain };
      });

      source.connect(lowPass);
      lowPass.connect(highPass);
      highPass.connect(gain);
      gain.connect(this.ctx.destination);
      source.start();
      lfo.start();
      this.ambient = { source, lfo, lfoDepth, lowPass, highPass, gain, tones };
    }
    stopGlobeAmbient() {
      if (!this.ambient || !this.ctx) return;

      const ambient = this.ambient;
      this.ambient = null;
      const stopAt = this.ctx.currentTime + 0.7;
      ambient.gain.gain.cancelScheduledValues(this.ctx.currentTime);
      ambient.gain.gain.setValueAtTime(ambient.gain.gain.value, this.ctx.currentTime);
      ambient.gain.gain.linearRampToValueAtTime(0.0001, stopAt);
      ambient.source.stop(stopAt);
      ambient.lfo.stop(stopAt);
      ambient.tones.forEach(tone => tone.oscillator.stop(stopAt));
      window.setTimeout(() => {
        ambient.source.disconnect();
        ambient.lfo.disconnect();
        ambient.lfoDepth.disconnect();
        ambient.lowPass.disconnect();
        ambient.highPass.disconnect();
        ambient.gain.disconnect();
        ambient.tones.forEach(tone => {
          tone.oscillator.disconnect();
          tone.gain.disconnect();
        });
      }, 750);
    }
    playBlip(freq = 880, duration = 0.04) {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (error) {
        console.error('Unable to play BRG audio feedback.', error);
      }
    }
  }
  const sfx = new SoundFX();
  window.sfx = sfx;
  window.dispatchEvent(new Event('brg:sound-ready'));

  /* ==========================================================================
     4b. PREMIUM NUMBER COUNTING ANIMATION ENGINE
     ========================================================================== */
  const NumberCounter = (function () {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animatedElements = new WeakSet();
    let observer = null;

    // Fluid ease-out cubic deceleration curve
    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    // Parses a formatted string like "1,840+", "99.99%", "12", "100+", "98.4%", "+14.2%"
    function parseValue(rawStr) {
      if (!rawStr) return null;
      const str = String(rawStr).trim();
      const match = str.match(/^([^\d]*?)(\d{1,3}(?:,\d{3})*|\d+)(\.\d+)?([^\d]*)$/);
      if (!match) return null;

      const prefix = match[1] || '';
      const intStr = (match[2] || '').replace(/,/g, '');
      const decStr = match[3] || '';
      const suffix = match[4] || '';

      const target = parseFloat(intStr + decStr);
      if (isNaN(target)) return null;

      const decimals = decStr ? decStr.length - 1 : 0;
      return { prefix, target, suffix, decimals, original: str };
    }

    // Format number with commas and fixed decimal places
    function formatValue(value, decimals) {
      if (decimals > 0) {
        const fixed = value.toFixed(decimals);
        const parts = fixed.split('.');
        parts[0] = parseInt(parts[0], 10).toLocaleString('en-US');
        return parts.join('.');
      }
      return Math.round(value).toLocaleString('en-US');
    }

    // Prepare element before animation: capture width to prevent layout shifts
    function prepareElement(el) {
      if (el.dataset.counterTarget) return parseValue(el.dataset.counterTarget);
      const parsed = parseValue(el.textContent);
      if (!parsed) return null;

      el.dataset.counterTarget = parsed.original;

      // Lock rendered width if element is currently rendered in layout
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && !el.style.minWidth) {
        el.style.minWidth = `${Math.ceil(rect.width)}px`;
        const compDisplay = window.getComputedStyle(el).display;
        if (compDisplay === 'inline') {
          el.style.display = 'inline-block';
        }
      }

      // If user does not prefer reduced motion, initialize text to starting zero representation
      if (!prefersReduced && rect.width > 0) {
        el.textContent = parsed.prefix + formatValue(0, parsed.decimals) + parsed.suffix;
      }

      return parsed;
    }

    // Animate counter from 0 to target
    function animate(el) {
      if (!el || animatedElements.has(el) || el.dataset.animated === 'true') {
        return;
      }

      const raw = el.dataset.counterTarget || el.textContent;
      const parsed = parseValue(raw);
      if (!parsed) return;

      // Mark as animated immediately to prevent double counting
      animatedElements.add(el);
      el.dataset.animated = 'true';

      // Respect prefers-reduced-motion
      if (prefersReduced) {
        el.textContent = parsed.original;
        return;
      }

      // Ensure layout shift safeguard is applied
      if (!el.style.minWidth) {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0) {
          el.style.minWidth = `${Math.ceil(rect.width)}px`;
          const compDisplay = window.getComputedStyle(el).display;
          if (compDisplay === 'inline') {
            el.style.display = 'inline-block';
          }
        }
      }

      const { prefix, target, suffix, decimals, original } = parsed;
      // Duration between 1.8s and 2.3s
      let duration = 2000;
      if (target <= 20) duration = 1800;
      else if (target >= 2000) duration = 2200;

      const startVal = 0;
      let startTime = null;

      // Set initial zero
      el.textContent = prefix + formatValue(startVal, decimals) + suffix;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);
        const current = startVal + (target - startVal) * eased;

        el.textContent = prefix + formatValue(current, decimals) + suffix;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = original;
        }
      }

      requestAnimationFrame(step);
    }

    // Lazy singleton IntersectionObserver
    function getObserver() {
      if (!observer && typeof IntersectionObserver !== 'undefined') {
        observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              obs.unobserve(entry.target);
              animate(entry.target);
            }
          });
        }, {
          threshold: 0.15,
          rootMargin: '0px 0px -25px 0px'
        });
      }
      return observer;
    }

    // Scan a container for all counter elements
    function scan(root = document) {
      const obs = getObserver();
      const selectors = [
        '.count-up',
        '.macro-number',
        '.market-stat-value',
        '.market-profiles-tag',
        '.score-value',
        '[data-counter]'
      ];

      const elements = root.querySelectorAll(selectors.join(', '));
      elements.forEach(el => {
        if (animatedElements.has(el) || el.dataset.animated === 'true') return;

        const parsed = prepareElement(el);
        if (!parsed) return;

        if (obs) {
          obs.observe(el);
        } else {
          animate(el);
        }
      });
    }

    return {
      init: scan,
      scan: scan,
      animate: animate
    };
  })();

  /* ==========================================================================
     5. LEADERBOARD STATE & FILTERING
     ========================================================================== */
  let currentLeaderboardTab = 'all';
  let currentSearchQuery = '';
  let currentCountryFilter = 'ALL';
  let currentSectorFilter = 'ALL';

  function renderLeaderboard() {
    const tbody = document.getElementById('leaderboard-tbody');
    const countBadge = document.getElementById('leaderboard-results-count');
    if (!tbody) return;

    let filtered = DEMO_LEADERBOARD.filter(item => {
      if (currentLeaderboardTab === 'sponsored' && !item.isSponsored) return false;
      if (currentCountryFilter !== 'ALL' && item.countryName !== currentCountryFilter) return false;
      if (currentSectorFilter !== 'ALL' && item.industry !== currentSectorFilter) return false;
      if (currentSearchQuery) {
        const matchName = item.name.toLowerCase().includes(currentSearchQuery);
        const matchCountry = item.countryName.toLowerCase().includes(currentSearchQuery);
        const matchIndustry = item.industry.toLowerCase().includes(currentSearchQuery);
        const matchCategory = item.category.toLowerCase().includes(currentSearchQuery);
        if (!matchName && !matchCountry && !matchIndustry && !matchCategory) return false;
      }
      return true;
    });

    if (countBadge) countBadge.textContent = `${filtered.length} Indexed`;

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" class="leaderboard-empty">
            <div class="empty-state">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <p>No verified companies found matching your query.</p>
              <button class="btn-subtle-reset" id="reset-leaderboard-filters">Reset All Filters</button>
            </div>
          </td>
        </tr>
      `;
      const resetBtn = document.getElementById('reset-leaderboard-filters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentSearchQuery = '';
          currentCountryFilter = 'ALL';
          currentSectorFilter = 'ALL';
          currentLeaderboardTab = 'all';
          const searchInput = document.getElementById('leaderboard-search-input');
          if (searchInput) searchInput.value = '';
          const countrySelect = document.getElementById('leaderboard-country-select');
          if (countrySelect) countrySelect.value = 'ALL';
          const sectorSelect = document.getElementById('leaderboard-sector-select');
          if (sectorSelect) sectorSelect.value = 'ALL';
          document.querySelectorAll('.leaderboard-tab').forEach((t, i) => t.classList.toggle('is-active', i === 0));
          renderLeaderboard();
        });
      }
      return;
    }

    tbody.innerHTML = filtered.map(item => {
      const isUp = item.movement === 'up';
      const isDown = item.movement === 'down';
      const isNew = item.movement === 'new';

      let movementHtml = '';
      if (isNew) {
        movementHtml = '<span class="movement-pill movement-new">★ NEW</span>';
      } else if (isUp) {
        movementHtml = `<span class="movement-pill movement-up">▲ +${item.movementAmount}</span>`;
      } else if (isDown) {
        movementHtml = `<span class="movement-pill movement-down">▼ -${item.movementAmount}</span>`;
      } else {
        movementHtml = '<span class="movement-pill movement-neutral">— 0</span>';
      }

      const statusPill = item.isSponsored
        ? `<span class="badge-sponsored" title="Paid promotional placement. Does not imply editorial endorsement.">
             <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
             SPONSORED
           </span>`
        : `<span class="badge-organic" title="Verified independent organic discovery entry.">
             <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
             VERIFIED
           </span>`;

      return `
        <tr class="leaderboard-row ${item.isSponsored ? 'row-sponsored' : ''}" data-company="${item.symbol}">
          <td class="col-rank">
            <span class="rank-number">#${String(item.rank).padStart(2, '0')}</span>
          </td>
          <td class="col-company">
            <div class="company-cell">
              <div class="company-logo" style="background:${item.logoBg}; color:${item.logoColor}">
                ${item.symbol}
              </div>
              <div class="company-info">
                <div class="company-name-row">
                  <span class="company-name">${item.name}</span>
                  ${item.verified ? '<span class="verified-check" title="Verified Corporate Entity">✓</span>' : ''}
                </div>
                <span class="company-category-tag">${item.category}</span>
              </div>
            </div>
          </td>
          <td class="col-country">
            <div class="country-cell">
              <div class="country-code-box">
                <span class="country-flag">${item.flag}</span>
                <span class="country-code">${item.countryCode}</span>
              </div>
              <span class="country-name">${item.countryName}</span>
            </div>
          </td>
          <td class="col-industry">
            <span class="industry-badge">${item.industry}</span>
          </td>
          <td class="col-score">
            <div class="score-cell">
              <div class="score-bar-bg">
                <div class="score-bar-fill" style="width: ${item.score}%"></div>
              </div>
              <span class="score-value count-up">${item.score.toFixed(1)}</span>
            </div>
          </td>
          <td class="col-movement">
            ${movementHtml}
          </td>
          <td class="col-status">
            ${statusPill}
          </td>
          <td class="col-action">
            <button class="btn-inspect-profile" data-symbol="${item.symbol}" aria-label="Inspect ${item.name} Profile">
              <span>Inspect</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </td>
        </tr>
      `;
    }).join('');

    tbody.querySelectorAll('.btn-inspect-profile').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openCompanyDrawer(btn.getAttribute('data-symbol'));
      });
    });

    tbody.querySelectorAll('.leaderboard-row').forEach(row => {
      row.addEventListener('click', () => {
        openCompanyDrawer(row.getAttribute('data-company'));
      });
    });

    NumberCounter.scan(tbody);
  }

  function filterLeaderboardByCategory(categoryId) {
    const catObj = CATEGORIES.find(c => c.id === categoryId);
    if (!catObj) return;

    const sectorSelect = document.getElementById('leaderboard-sector-select');
    if (sectorSelect) {
      const targetName = (catObj.title || catObj.name || '').toLowerCase();
      const matched = Array.from(sectorSelect.options).find(opt =>
        opt.value.toLowerCase() === targetName
      );
      if (matched) {
        sectorSelect.value = matched.value;
        currentSectorFilter = matched.value;
        renderLeaderboard();
      }
    }
  }

  function filterLeaderboardBySpecialization(specName, sectorName) {
    const sectorSelect = document.getElementById('leaderboard-sector-select');
    const searchInput = document.getElementById('leaderboard-search-input');
    
    if (sectorSelect && sectorName) {
      const matched = Array.from(sectorSelect.options).find(opt =>
        opt.value.toLowerCase() === sectorName.toLowerCase()
      );
      if (matched) {
        sectorSelect.value = matched.value;
        currentSectorFilter = matched.value;
      } else {
        sectorSelect.value = 'ALL';
        currentSectorFilter = 'ALL';
      }
    }
    
    if (searchInput && specName) {
      searchInput.value = specName;
      currentLeaderboardSearch = specName.toLowerCase().trim();
    }
    
    renderLeaderboard();
    
    const rankingsSection = document.getElementById('rankings');
    if (rankingsSection) {
      rankingsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /* ==========================================================================
     6. WORLDWIDE REACH MODULE
     ========================================================================== */
  let activeRegionFilter = 'ALL';
  let activeMarketCode = 'US';

  function renderWorldwideReach() {
    const marketsGrid = document.getElementById('sovereign-markets-grid');
    if (!marketsGrid) return;

    const filtered = SOVEREIGN_MARKETS.filter(m => {
      if (activeRegionFilter === 'ALL') return true;
      return m.region === activeRegionFilter;
    });

    marketsGrid.innerHTML = filtered.map(m => `
      <button class="market-pill-card ${m.code === activeMarketCode ? 'is-selected' : ''}" data-code="${m.code}">
        <span class="market-flag">${m.flag}</span>
        <span class="market-name">${m.name}</span>
        <span class="market-profiles-tag count-up">${m.activeProfiles}</span>
      </button>
    `).join('');

    marketsGrid.querySelectorAll('.market-pill-card').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-code');
        activeMarketCode = code;
        marketsGrid.querySelectorAll('.market-pill-card').forEach(b => b.classList.toggle('is-selected', b.getAttribute('data-code') === code));
        const market = SOVEREIGN_MARKETS.find(m => m.code === code);
        if (market) renderMarketHighlight(market);
        sfx.playBlip(1050, 0.02);
      });
    });

    NumberCounter.scan(marketsGrid);

    const current = SOVEREIGN_MARKETS.find(m => m.code === activeMarketCode) || SOVEREIGN_MARKETS[0];
    renderMarketHighlight(current);
  }

  function renderMarketHighlight(market) {
    const container = document.getElementById('market-active-detail');
    if (!container || !market) return;

    if (window.activeGlobe && market.region && typeof window.activeGlobe.rotateToContinent === 'function') {
      window.activeGlobe.rotateToContinent(market.region);
    }

    const marketImg = market.image || 'assets/images/market-usa.jpg';

    container.innerHTML = `
      <div class="market-detail-card">
        <div class="market-hero-media">
          <img src="${marketImg}" alt="${market.name} Sovereign Market" class="market-hero-img" loading="lazy" />
          <div class="market-media-overlay"></div>
          <div class="market-hero-floating-meta">
            <span class="market-region-pill">${market.region} Sovereign Market</span>
            <span class="market-code-badge">${market.code}</span>
          </div>
        </div>
        <div class="market-detail-body">
          <div class="market-detail-header">
            <div class="market-hero-flag">${market.flag}</div>
            <div class="market-hero-title">
              <h3>${market.name}</h3>
              <span class="market-region-tag">${market.region} Sovereign Market</span>
            </div>
          </div>
          <div class="market-stats-row">
            <div class="market-stat-box">
              <span class="market-stat-label">Active Profiles</span>
              <span class="market-stat-value count-up">${market.activeProfiles}</span>
            </div>
            <div class="market-stat-box">
              <span class="market-stat-label">Leading Sector</span>
              <span class="market-stat-value highlight-red">${market.topSector}</span>
            </div>
            <div class="market-stat-box">
              <span class="market-stat-label">Regional Discovery Reach</span>
              <span class="market-stat-value highlight-green count-up">${market.avgReach}</span>
            </div>
          </div>
          <div class="market-footer-row">
            <div class="market-top-brand">
              <span class="label-muted">Rank #01 In Market:</span>
              <strong>${market.leadBrand}</strong>
            </div>
            <button class="btn-market-explore" onclick="window.filterByMarketName('${market.name}')">
              <span>Filter Leaderboard by ${market.name}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;

    NumberCounter.scan(container);
  }

  window.filterByMarketName = function (marketName) {
    const countrySelect = document.getElementById('leaderboard-country-select');
    if (countrySelect) {
      countrySelect.value = marketName;
      currentCountryFilter = marketName;
      renderLeaderboard();
    }
    document.getElementById('rankings')?.scrollIntoView({ behavior: 'smooth' });
  };

  /* ==========================================================================
     7. COMPANY DETAIL INSPECTION DRAWER
     ========================================================================== */
  function openCompanyDrawer(symbol) {
    const drawer = document.getElementById('company-inspect-drawer');
    const content = document.getElementById('company-drawer-content');
    if (!drawer || !content) return;

    const item = DEMO_LEADERBOARD.find(c => c.symbol === symbol) || DEMO_LEADERBOARD[0];

    content.innerHTML = `
      <div class="company-drawer-header">
        <div class="drawer-logo" style="background:${item.logoBg}; color:${item.logoColor}">
          ${item.symbol}
        </div>
        <div class="drawer-header-meta">
          <div class="drawer-title-row">
            <h2>${item.name}</h2>
            ${item.verified ? '<span class="verified-check" title="Verified Corporate Profile">✓</span>' : ''}
          </div>
          <p class="drawer-subtitle">${item.city}, ${item.countryName} ${item.flag}</p>
          <span class="drawer-category-pill">${item.category}</span>
        </div>
        <div class="drawer-rank-callout">
          <span class="drawer-rank-label">Global Rank</span>
          <span class="drawer-rank-val">#${String(item.rank).padStart(2, '0')}</span>
        </div>
      </div>

      <div class="drawer-status-banner ${item.isSponsored ? 'banner-sponsored' : 'banner-organic'}">
        <div class="banner-status-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <span>${item.isSponsored ? 'SPONSORED PLACEMENT' : 'INDEPENDENT ORGANIC LISTING'}</span>
        </div>
        <p class="banner-status-note">
          ${item.isSponsored
            ? `This entity holds an active <strong>${item.sponsorTier}</strong>. Sponsored positions represent promotional brand placement and are distinctly designated.`
            : `This listing is indexed organically through verified corporate domain registration and cross-border commercial taxonomy.`}
        </p>
      </div>

      <div class="drawer-section">
        <h4 class="drawer-section-title">Corporate Overview</h4>
        <p class="drawer-desc-text">${item.description}</p>
      </div>

      <div class="drawer-section">
        <h4 class="drawer-section-title">Telemetry & Discovery Metrics</h4>
        <div class="drawer-metrics-grid">
          <div class="drawer-metric-card">
            <span class="metric-label">Discovery Index</span>
            <span class="metric-val highlight-green"><span class="count-up">${item.score.toFixed(1)}</span> / 100</span>
          </div>
          <div class="drawer-metric-card">
            <span class="metric-label">Velocity Trend</span>
            <span class="metric-val highlight-red">${item.velocity}</span>
          </div>
          <div class="drawer-metric-card">
            <span class="metric-label">Audience Impressions</span>
            <span class="metric-val">${item.reachMetrics}</span>
          </div>
          <div class="drawer-metric-card">
            <span class="metric-label">Domain Registry</span>
            <a href="${item.website}" target="_blank" rel="noopener" class="metric-link">${item.website.replace('https://', '')} ↗</a>
          </div>
        </div>
      </div>

      <div class="drawer-section">
        <h4 class="drawer-section-title">Direct Enterprise Inquiry</h4>
        <form class="drawer-inquiry-form" onsubmit="event.preventDefault(); window.handleInquirySubmit(this);">
          <div class="form-row">
            <input type="text" placeholder="Your Name" required class="brg-input" />
            <input type="email" placeholder="Corporate Email" required class="brg-input" />
          </div>
          <textarea placeholder="Inquiry details or partnership inquiry..." rows="3" required class="brg-input"></textarea>
          <button type="submit" class="btn-primary-cta w-full">
            <span>Transmit Secure Enterprise Inquiry</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <span class="form-disclaimer">Inquiries are forwarded directly to verified corporate registrars.</span>
        </form>
      </div>
    `;

    drawer.classList.add('is-open');
    document.body.classList.add('drawer-open');
    NumberCounter.scan(content);
    sfx.playBlip(1100, 0.04);
  }
  window.openCompanyDrawer = openCompanyDrawer;

  window.handleInquirySubmit = function (form) {
    form.innerHTML = `
      <div class="inquiry-success">
        <div class="success-icon">✓</div>
        <h4>Inquiry Transmitted Successfully</h4>
        <p>Your commercial inquiry has been routed to the enterprise representative.</p>
      </div>
    `;
    sfx.playBlip(1400, 0.08);
  };

  /* ==========================================================================
     8. BUSINESS PROFILE WIZARD MODAL
     ========================================================================== */
  let wizardState = {
    step: 1,
    companyName: '',
    website: '',
    country: 'US',
    sector: 'technology',
    selectedTier: 'growth'
  };

  function renderWizardStep(step) {
    wizardState.step = step;
    const container = document.getElementById('wizard-step-content');
    const stepIndicator = document.getElementById('wizard-step-indicator');
    if (!container) return;

    if (stepIndicator) stepIndicator.textContent = `STEP 0${step} OF 03`;

    if (step === 1) {
      container.innerHTML = `
        <div class="wizard-step-body">
          <h3 class="wizard-heading">Corporate Profile Registry</h3>
          <p class="wizard-sub">Establish your verified presence on the Boardrank Global discovery platform.</p>

          <form id="wizard-form-step1" class="wizard-form">
            <div class="form-group">
              <label class="form-label">Enterprise / Brand Legal Name *</label>
              <input type="text" id="wiz-name" class="brg-input" required placeholder="e.g. Apex Quantum Dynamics" value="${wizardState.companyName}" />
            </div>
            <div class="form-group">
              <label class="form-label">Primary Corporate Website *</label>
              <input type="url" id="wiz-web" class="brg-input" required placeholder="https://example.com" value="${wizardState.website}" />
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Headquarters Sovereign Market *</label>
                <select id="wiz-country" class="brg-input">
                  ${SOVEREIGN_MARKETS.map(m => `<option value="${m.code}" ${wizardState.country === m.code ? 'selected' : ''}>${m.flag} ${m.name}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Primary Economic Sector *</label>
                <select id="wiz-sector" class="brg-input">
                  ${CATEGORIES.map(c => `<option value="${c.id}" ${wizardState.sector === c.id ? 'selected' : ''}>${c.title}</option>`).join('')}
                </select>
              </div>
            </div>
            <div class="wizard-actions">
              <button type="submit" class="btn-primary-cta">
                <span>Continue to Placement Configuration</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </form>
        </div>
      `;

      document.getElementById('wizard-form-step1')?.addEventListener('submit', (e) => {
        e.preventDefault();
        wizardState.companyName = document.getElementById('wiz-name').value;
        wizardState.website = document.getElementById('wiz-web').value;
        wizardState.country = document.getElementById('wiz-country').value;
        wizardState.sector = document.getElementById('wiz-sector').value;
        renderWizardStep(2);
      });

    } else if (step === 2) {
      container.innerHTML = `
        <div class="wizard-step-body">
          <h3 class="wizard-heading">Select Sponsored Visibility Placement</h3>
          <p class="wizard-sub">All sponsored rankings are transparently demarcated as "Sponsored" per Boardrank guidelines.</p>

          <div class="tiers-selection-grid">
            ${SPONSOR_TIERS.map(tier => `
              <div class="tier-card ${tier.id === wizardState.selectedTier ? 'is-selected' : ''}" data-tier="${tier.id}">
                <div class="tier-badge-row">
                  <span class="tier-pill ${tier.recommended ? 'pill-recommended' : ''}">${tier.badge}</span>
                </div>
                <h4 class="tier-title">${tier.name}</h4>
                <p class="tier-tagline">${tier.tagline}</p>
                <ul class="tier-features-list">
                  ${tier.features.map(f => `<li><span class="check">✓</span> ${f}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>

          <div class="wizard-actions dual">
            <button type="button" class="btn-secondary-cta" id="wiz-back-step1">Back</button>
            <button type="button" class="btn-primary-cta" id="wiz-next-step3">
              <span>Review & Complete Registration</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      `;

      container.querySelectorAll('.tier-card').forEach(card => {
        card.addEventListener('click', () => {
          const tierId = card.getAttribute('data-tier');
          wizardState.selectedTier = tierId;
          container.querySelectorAll('.tier-card').forEach(c => c.classList.toggle('is-selected', c.getAttribute('data-tier') === tierId));
          sfx.playBlip(900, 0.03);
        });
      });

      document.getElementById('wiz-back-step1')?.addEventListener('click', () => renderWizardStep(1));
      document.getElementById('wiz-next-step3')?.addEventListener('click', () => renderWizardStep(3));

    } else if (step === 3) {
      const selectedTierObj = SPONSOR_TIERS.find(t => t.id === wizardState.selectedTier) || SPONSOR_TIERS[1];
      const countryObj = SOVEREIGN_MARKETS.find(m => m.code === wizardState.country) || SOVEREIGN_MARKETS[0];
      const sectorObj = CATEGORIES.find(c => c.id === wizardState.sector) || CATEGORIES[4];

      container.innerHTML = `
        <div class="wizard-step-body">
          <h3 class="wizard-heading">Confirm Listing Submission</h3>
          <p class="wizard-sub">Review your submission details. Our compliance team verifies corporate domains within 24 hours.</p>

          <div class="confirmation-summary-card">
            <div class="summary-row">
              <span class="summary-label">Enterprise Name:</span>
              <strong>${wizardState.companyName || 'Apex Quantum Dynamics'}</strong>
            </div>
            <div class="summary-row">
              <span class="summary-label">Corporate Domain:</span>
              <span>${wizardState.website || 'https://example.com'}</span>
            </div>
            <div class="summary-row">
              <span class="summary-label">Sovereign Market:</span>
              <span>${countryObj.flag} ${countryObj.name}</span>
            </div>
            <div class="summary-row">
              <span class="summary-label">Economic Sector:</span>
              <span>${sectorObj.title}</span>
            </div>
            <div class="summary-row">
              <span class="summary-label">Selected Visibility:</span>
              <span class="highlight-green font-mono">${selectedTierObj.name} (${selectedTierObj.badge})</span>
            </div>
          </div>

          <div class="compliance-disclaimer-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
            <p>
              <strong>Compliance Acknowledgement:</strong> Boardrank Global does not guarantee commercial sales, customer leads, or qualitative editorial ranking. Sponsored visibility is strictly promotional and explicitly demarcated.
            </p>
          </div>

          <div class="wizard-actions dual">
            <button type="button" class="btn-secondary-cta" id="wiz-back-step2">Back</button>
            <button type="button" class="btn-primary-cta" id="wiz-confirm-submit">
              <span>Submit Profile for Registry Verification</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            </button>
          </div>
        </div>
      `;

      document.getElementById('wiz-back-step2')?.addEventListener('click', () => renderWizardStep(2));
      document.getElementById('wiz-confirm-submit')?.addEventListener('click', () => {
        container.innerHTML = `
          <div class="wizard-step-body wizard-success-state">
            <div class="success-ring-animation">✓</div>
            <h3 class="wizard-heading">Application Submitted to Registry</h3>
            <p class="wizard-sub">
              Your business profile for <strong>${wizardState.companyName || 'Your Enterprise'}</strong> has been queued for verification. A registry notification has been transmitted.
            </p>
            <div class="success-tracking-code">
              <span class="code-label">Registry Reference:</span>
              <span class="code-val">BRG-${Math.random().toString(36).substring(2, 9).toUpperCase()}</span>
            </div>
            <button type="button" class="btn-primary-cta" id="wiz-close-finish">
              <span>Return to Global Leaderboard</span>
            </button>
          </div>
        `;
        document.getElementById('wiz-close-finish')?.addEventListener('click', () => {
          document.getElementById('profile-wizard-modal')?.classList.remove('is-open');
          document.body.classList.remove('modal-open');
        });
        sfx.playBlip(1600, 0.1);
      });
    }
  }

  /* ==========================================================================
     9. DOM INITIALIZATION
     ========================================================================== */
  
  function initializeApp() {
    // 1. Initialize 3D Vector Globe (Geospatial Discovery Globe with actual continent geography)
    const globeCanvas = document.getElementById('hero-globe-canvas');
    if (globeCanvas) {
      if (typeof GeospatialDiscoveryGlobe !== 'undefined') {
        window.activeGlobe = new GeospatialDiscoveryGlobe('hero-globe-canvas', {
          cardPrimaryId: 'globe-card-primary',
          cardSecondaryId: 'globe-card-secondary'
        });
      } else {
        window.activeGlobe = new VectorGlobe('hero-globe-canvas');
      }
    }

    // 2. Sticky navigation & progress bar
    const header = document.querySelector('.brg-header');
    const scrollBar = document.getElementById('scroll-progress-bar');
    let previousScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 30) header?.classList.add('is-scrolled');
      else header?.classList.remove('is-scrolled');

      const scrollDelta = scrollY - previousScrollY;
      if (header) {
        if (scrollY <= 30 || document.body.classList.contains('drawer-open') || document.body.classList.contains('modal-open')) {
          header.classList.remove('is-hidden');
        } else if (scrollDelta > 8) {
          header.classList.add('is-hidden');
        } else if (scrollDelta < -8) {
          header.classList.remove('is-hidden');
        }
      }
      previousScrollY = scrollY;

      if (scrollBar) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
        scrollBar.style.width = `${progress}%`;
      }
    }, { passive: true });

    // 3. Mobile hamburger navigation
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('is-open');
        mobileToggle.classList.toggle('is-active', isOpen);
        document.body.classList.toggle('drawer-open', isOpen);
        sfx.playBlip(600, 0.05);
      });
      mobileDrawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('is-open');
          mobileToggle.classList.remove('is-active');
          document.body.classList.remove('drawer-open');
        });
      });
    }

    // 5. Populate Leaderboard Filters & Rows
    const countrySelect = document.getElementById('leaderboard-country-select');
    const sectorSelect = document.getElementById('leaderboard-sector-select');
    if (countrySelect) {
      const countries = [...new Set(DEMO_LEADERBOARD.map(c => c.countryName))].sort();
      countrySelect.innerHTML = '<option value="ALL">All Sovereign Markets</option>' +
        countries.map(c => `<option value="${c}">${c}</option>`).join('');
      countrySelect.addEventListener('change', (e) => {
        currentCountryFilter = e.target.value;
        renderLeaderboard();
        sfx.playBlip(800, 0.03);
      });
    }
    if (sectorSelect) {
      const allSectors = [...new Set([
        ...TAXONOMY_SECTORS.map(s => s.title),
        ...DEMO_LEADERBOARD.map(c => c.industry)
      ])].sort();
      sectorSelect.innerHTML = '<option value="ALL">All Economic Sectors</option>' +
        allSectors.map(s => `<option value="${s}">${s}</option>`).join('');
      sectorSelect.addEventListener('change', (e) => {
        currentSectorFilter = e.target.value;
        renderLeaderboard();
        sfx.playBlip(800, 0.03);
      });
    }

    document.querySelectorAll('.leaderboard-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.leaderboard-tab').forEach(t => t.classList.remove('is-active'));
        tab.classList.add('is-active');
        currentLeaderboardTab = tab.getAttribute('data-tab');
        renderLeaderboard();
        sfx.playBlip(950, 0.03);
      });
    });

    const searchInput = document.getElementById('leaderboard-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearchQuery = e.target.value.toLowerCase().trim();
        renderLeaderboard();
      });
    }

    renderLeaderboard();

    // 6. Worldwide Reach region filters & search
    document.querySelectorAll('.reach-region-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.reach-region-pill').forEach(p => p.classList.remove('is-active'));
        pill.classList.add('is-active');
        activeRegionFilter = pill.getAttribute('data-region');
        renderWorldwideReach();
        if (window.activeGlobe && typeof window.activeGlobe.rotateToContinent === 'function') {
          window.activeGlobe.rotateToContinent(activeRegionFilter);
        }
        sfx.playBlip(900, 0.03);
      });
    });

    const reachSearch = document.getElementById('reach-country-search');
    if (reachSearch) {
      reachSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const matched = SOVEREIGN_MARKETS.find(m => m.name.toLowerCase().includes(query) || m.code.toLowerCase() === query);
        if (matched) {
          activeMarketCode = matched.code;
          renderMarketHighlight(matched);
        }
      });
    }
    renderWorldwideReach();

    // 7. How it works tabs
    document.querySelectorAll('.how-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.how-toggle-btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const track = btn.getAttribute('data-track');
        const visitorsTrack = document.getElementById('how-track-visitors');
        const businessesTrack = document.getElementById('how-track-businesses');
        if (track === 'visitors') {
          visitorsTrack?.classList.remove('is-hidden');
          businessesTrack?.classList.add('is-hidden');
        } else {
          visitorsTrack?.classList.add('is-hidden');
          businessesTrack?.classList.remove('is-hidden');
        }
        sfx.playBlip(750, 0.04);
      });
    });

    // 8. Language Selector Modal (100+ languages)
    const langModal = document.getElementById('language-modal');
    const closeLangBtn = document.getElementById('close-language-modal');
    const langSearchInput = document.getElementById('lang-modal-search');
    const langListContainer = document.getElementById('lang-modal-list');
    let activeLangRegion = 'ALL';
    let langQuery = '';

    function renderLangList() {
      if (!langListContainer) return;
      const filtered = I18N_REGISTRY.filter(l => {
        if (activeLangRegion !== 'ALL' && l.region !== activeLangRegion) return false;
        if (langQuery) {
          const matchName = l.name.toLowerCase().includes(langQuery);
          const matchNative = l.native.toLowerCase().includes(langQuery);
          const matchCode = l.code.toLowerCase().includes(langQuery);
          if (!matchName && !matchNative && !matchCode) return false;
        }
        return true;
      });

      langListContainer.innerHTML = filtered.map(l => `
        <button class="lang-option-card ${l.code === i18n.currentLang ? 'is-active' : ''}" data-code="${l.code}">
          <div class="lang-option-left">
            <span class="lang-flag">${l.flag}</span>
            <div class="lang-texts">
              <span class="lang-native">${l.native}</span>
              <span class="lang-english">${l.name}</span>
            </div>
          </div>
          <div class="lang-option-right">
            ${l.dir === 'rtl' ? '<span class="rtl-badge">RTL</span>' : ''}
            ${l.translated ? '<span class="supported-badge">FULL</span>' : '<span class="extensible-badge">EXPANDING</span>'}
          </div>
        </button>
      `).join('');

      langListContainer.querySelectorAll('.lang-option-card').forEach(card => {
        card.addEventListener('click', () => {
          i18n.setLanguage(card.getAttribute('data-code'));
          langModal?.classList.remove('is-open');
          document.body.classList.remove('modal-open');
          sfx.playBlip(1200, 0.04);
        });
      });
    }

    document.querySelectorAll('.trigger-language-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        langModal?.classList.add('is-open');
        document.body.classList.add('modal-open');
        renderLangList();
        if (langSearchInput) {
          langSearchInput.value = '';
          langQuery = '';
          setTimeout(() => langSearchInput.focus(), 60);
        }
      });
    });

    closeLangBtn?.addEventListener('click', () => {
      langModal?.classList.remove('is-open');
      document.body.classList.remove('modal-open');
    });

    langModal?.addEventListener('click', (e) => {
      if (e.target === langModal || e.target.classList.contains('modal-backdrop')) {
        langModal.classList.remove('is-open');
        document.body.classList.remove('modal-open');
      }
    });

    langSearchInput?.addEventListener('input', (e) => {
      langQuery = e.target.value.toLowerCase().trim();
      renderLangList();
    });

    document.querySelectorAll('.lang-region-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.lang-region-pill').forEach(p => p.classList.remove('is-active'));
        pill.classList.add('is-active');
        activeLangRegion = pill.getAttribute('data-region');
        renderLangList();
      });
    });

    // 9. Command Palette (Ctrl+K / ⌘K)
    const paletteModal = document.getElementById('command-palette-modal');
    const paletteInput = document.getElementById('command-palette-input');
    const paletteResults = document.getElementById('command-palette-results');
    const closePaletteBtn = document.getElementById('close-command-palette');

    function renderPalette(query) {
      if (!paletteResults) return;
      const q = query.toLowerCase().trim();

      const companies = DEMO_LEADERBOARD.filter(c =>
        !q || c.name.toLowerCase().includes(q) || c.category.toLowerCase().includes(q) || c.countryName.toLowerCase().includes(q)
      ).slice(0, 5);

      const categories = CATEGORIES.filter(c =>
        !q || c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
      ).slice(0, 3);

      let html = '';
      if (companies.length > 0) {
        html += '<div class="palette-group-title">ENTERPRISES & BRANDS</div>';
        html += companies.map(c => `
          <div class="palette-item" data-action="company" data-symbol="${c.symbol}">
            <div class="palette-item-left">
              <span class="palette-symbol" style="background:${c.logoBg}; color:${c.logoColor}">${c.symbol}</span>
              <div class="palette-item-details">
                <strong>${c.name}</strong>
                <span>${c.countryName} • ${c.category}</span>
              </div>
            </div>
            <div class="palette-item-right">
              ${c.isSponsored ? '<span class="badge-sponsored mini">SPONSORED</span>' : ''}
              <span class="palette-rank">#${c.rank}</span>
            </div>
          </div>
        `).join('');
      }

      if (categories.length > 0) {
        html += '<div class="palette-group-title">ECONOMIC SECTORS</div>';
        html += categories.map(cat => `
          <div class="palette-item" data-action="category" data-cat="${cat.id}">
            <div class="palette-item-left">
              <div class="palette-cat-icon">${cat.icon}</div>
              <div class="palette-item-details">
                <strong>${cat.title}</strong>
                <span>${cat.profiles} Verified Profiles</span>
              </div>
            </div>
            <span class="palette-cat-index">${cat.index}</span>
          </div>
        `).join('');
      }

      if (!html) html = `<div class="palette-empty">No entities found for "${query}".</div>`;

      paletteResults.innerHTML = html;

      paletteResults.querySelectorAll('.palette-item').forEach(item => {
        item.addEventListener('click', () => {
          const action = item.getAttribute('data-action');
          paletteModal?.classList.remove('is-open');
          document.body.classList.remove('modal-open');
          if (action === 'company') {
            openCompanyDrawer(item.getAttribute('data-symbol'));
          } else if (action === 'category') {
            filterLeaderboardByCategory(item.getAttribute('data-cat'));
            document.getElementById('rankings')?.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }

    document.querySelectorAll('.trigger-command-palette').forEach(btn => {
      btn.addEventListener('click', () => {
        paletteModal?.classList.add('is-open');
        document.body.classList.add('modal-open');
        if (paletteInput) {
          paletteInput.value = '';
          renderPalette('');
          setTimeout(() => paletteInput.focus(), 60);
        }
        sfx.playBlip(1000, 0.03);
      });
    });

    closePaletteBtn?.addEventListener('click', () => {
      paletteModal?.classList.remove('is-open');
      document.body.classList.remove('modal-open');
    });

    paletteModal?.addEventListener('click', (e) => {
      if (e.target === paletteModal || e.target.classList.contains('palette-backdrop')) {
        paletteModal.classList.remove('is-open');
        document.body.classList.remove('modal-open');
      }
    });

    paletteInput?.addEventListener('input', (e) => renderPalette(e.target.value));

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (paletteModal?.classList.contains('is-open')) {
          paletteModal.classList.remove('is-open');
          document.body.classList.remove('modal-open');
        } else {
          paletteModal?.classList.add('is-open');
          document.body.classList.add('modal-open');
          if (paletteInput) {
            paletteInput.value = '';
            renderPalette('');
            setTimeout(() => paletteInput.focus(), 60);
          }
        }
      }
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.is-open').forEach(m => m.classList.remove('is-open'));
        document.getElementById('company-inspect-drawer')?.classList.remove('is-open');
        document.body.classList.remove('modal-open', 'drawer-open');
      }
    });

    // 10. Drawer close handlers
    document.getElementById('close-company-drawer')?.addEventListener('click', () => {
      document.getElementById('company-inspect-drawer')?.classList.remove('is-open');
      document.body.classList.remove('drawer-open');
    });

    // 11. Profile Registration Wizard Modal
    const wizardModal = document.getElementById('profile-wizard-modal');
    document.querySelectorAll('.trigger-profile-wizard').forEach(btn => {
      btn.addEventListener('click', () => {
        wizardModal?.classList.add('is-open');
        document.body.classList.add('modal-open');
        renderWizardStep(1);
        sfx.playBlip(1050, 0.04);
      });
    });

    document.getElementById('close-profile-wizard')?.addEventListener('click', () => {
      wizardModal?.classList.remove('is-open');
      document.body.classList.remove('modal-open');
    });

    wizardModal?.addEventListener('click', (e) => {
      if (e.target === wizardModal || e.target.classList.contains('wizard-backdrop')) {
        wizardModal.classList.remove('is-open');
        document.body.classList.remove('modal-open');
      }
    });

    // 12. Audio Feedback Button
    const audioBtn = document.getElementById('toggle-sound-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        try {
          sfx.setEnabled(!sfx.enabled);
          if (sfx.enabled) sfx.playBlip(1100, 0.05);
        } catch (error) {
          console.error('Unable to change BRG audio state.', error);
        }
      });
    }

    // 13. Language change sync
    i18n.onLanguageChange(meta => {
      document.querySelectorAll('.current-lang-code').forEach(el => el.textContent = meta.code.toUpperCase());
      document.querySelectorAll('.current-lang-flag').forEach(el => el.textContent = meta.flag);
      document.querySelectorAll('.current-lang-native').forEach(el => el.textContent = meta.native);
      renderLeaderboard();
      renderWorldwideReach();
    });

    // 14. Smooth scroll back to top button in footer
    document.querySelectorAll('.footer-circle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (sfx.enabled) sfx.playBlip(880, 0.04);
      });
    });

    const initialMeta = i18n.getLangMeta();
    document.querySelectorAll('.current-lang-code').forEach(el => el.textContent = initialMeta.code.toUpperCase());
    document.querySelectorAll('.current-lang-flag').forEach(el => el.textContent = initialMeta.flag);
    document.querySelectorAll('.current-lang-native').forEach(el => el.textContent = initialMeta.native);

    // Initial translation pass
    i18n.translateDOM();

    // 15. Initialize Number Counting Animations across all stats
    NumberCounter.init();

    // Mark body as JS loaded
    document.body.classList.add('js-ready');
  }

  // Run on DOMContentLoaded or immediately if already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
  } else {
    initializeApp();
  }

})();
