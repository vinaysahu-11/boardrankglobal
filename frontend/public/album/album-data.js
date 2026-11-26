/**
 * BOARDRANK GLOBAL — LUXURY PHYSICAL BUSINESS TAXONOMY ALBUM
 * Master Production Data Architecture
 * 
 * EXACT SPECIFICATIONS:
 * - Closed: 12 inches (1 ft) wide × 36 inches (3 ft) high
 * - Open: 72 inches (6 ft) wide × 12 inches (1 ft) high
 * - Aspect Ratio: 6:1 Panoramic Spread
 * - Target Resolution: 300 DPI (21,600 × 3,600 pixels)
 * - Complete 12 Industries • 72 Categories • 432 Specializations
 */

const ALBUM_SPECIFICATIONS = {
  brand: 'BOARDRANK GLOBAL',
  brandShort: 'BRG',
  publicationTitle: 'BUSINESS TAXONOMY',
  publicationSubtitle: 'A GLOBAL ATLAS OF INDUSTRIES',
  edition: 'First Folio Luxury Edition — Collector\'s Edition',
  dimensions: {
    closed: { width: '12 inches (1 foot)', height: '36 inches (3 feet)' },
    openSpread: { width: '72 inches (6 feet)', height: '12 inches (1 foot)', aspectRatio: '6:1 Panoramic' },
    singlePage: { width: '36 inches', height: '12 inches', aspectRatio: '3:1 Panoramic' },
    bleedMm: 3,
    gutterSafetyMm: 15,
    resolutionDpi: 300,
    spreadPixels300Dpi: { width: 21600, height: 3600 },
    pagePixels300Dpi: { width: 10800, height: 3600 }
  },
  binding: {
    type: 'Lay-Flat Panoramic Masterpiece Album with Thermal Synthetic Solid Core',
    coverStock: 'Deep Forest Green & Charcoal Archival Bookcloth (450 gsm)',
    finish: 'Blind Deboss with Matte Gold & Electric Lime Foil Stamping',
    paper: 'Hahnemühle Photo Rag Baryta 315 gsm / Archival Lustre Lay-Flat Substrate',
    edgeGilding: 'Matte Brushed Champagne Gold'
  }
};

const ALBUM_COVER = {
  type: 'cover-front',
  title: 'BUSINESS TAXONOMY',
  subtitle: 'A GLOBAL ATLAS OF INDUSTRIES',
  brand: 'BOARDRANK GLOBAL',
  descriptor: 'THE WORLD COMPETES. THE WORLD RANKS.',
  provenance: 'OFFICIAL PHYSICAL REFERENCE FOLIO • 195 SOVEREIGN MARKETS',
  coverMaterial: 'Deep Forest Green (#131A14) Archival Bookcloth with Fine Linen Weave',
  foilSpecs: {
    primary: 'Matte Gold Foil (#D4AF37 / Kurz Luxor 428)',
    accent: 'Electric Lime Foil (#36B82B / Precision Metallic Stamp)',
    blindDeboss: 'Micro-relief world meridian coordinates and BRG hallmark'
  },
  coverImage: 'assets/images/album-cover.jpg'
};

const ALBUM_INTRO = {
  type: 'intro-spread',
  leftPage: {
    eyebrow: 'FOUNDATIONAL CODIFICATION',
    title: 'BUSINESS TAXONOMY',
    subtitle: 'THE ANATOMY OF GLOBAL ENTERPRISE',
    essay: [
      'In an interconnected global economy generating over one hundred trillion dollars in gross product annually, the fundamental barrier to discovery is not scarcity of data, but absence of structure.',
      'Without an authoritative, sovereign-neutral taxonomy, enterprise dissolves into noise. BOARDRANK GLOBAL codifies human commercial endeavor into twelve foundational economic industries, seventy-two structural categories, and four hundred and thirty-two operational specializations.',
      'This volume serves as the permanent physical atlas of that architecture—a monumental physical record establishing universal classification across one hundred and ninety-five sovereign jurisdictions.'
    ],
    callout: '“Without taxonomy, commerce is noise. With taxonomy, enterprise becomes universally discoverable.”',
    archivalMeta: {
      edition: 'FOLIO FIRST EDITION',
      curationDate: '2026 CODIFICATION',
      jurisdictions: '195+ SOVEREIGN MARKETS',
      classificationId: 'BRG-TAX-2026.4'
    }
  },
  rightPage: {
    eyebrow: 'STRUCTURAL FRAMEWORK',
    title: 'THE GLOBAL INDUSTRY STRUCTURE',
    subtitle: 'FOUR-TIER TAXONOMIC HIERARCHY',
    tiers: [
      {
        level: 'TIER 01',
        title: 'GLOBAL ECONOMY',
        desc: 'The total planetary output across 195 sovereign nations and $105+ Trillion Gross World Product.',
        count: '1 GLOBAL MARKET'
      },
      {
        level: 'TIER 02',
        title: '12 ECONOMIC INDUSTRIES',
        desc: 'The sovereign pillars of civilization: Technology, Manufacturing, Software, Services, Retail, Finance, Healthcare, Agriculture, Energy, Logistics, Education, Media & Entertainment.',
        count: '12 FOUNDATIONAL SECTORS'
      },
      {
        level: 'TIER 03',
        title: '72 BUSINESS CATEGORIES',
        desc: 'Curated institutional commercial domains dividing each industry into 6 rigorous functional territories.',
        count: '72 STRUCTURED DOMAINS'
      },
      {
        level: 'TIER 04',
        title: '432 SPECIALIZATIONS',
        desc: 'The granular operational frontiers, engineering niches, and specialized enterprise disciplines.',
        count: '432 VERIFIED NICHES'
      }
    ],
    footnote: 'Universal classification architecture formulated for institutional discovery, sovereign market analysis, and cross-border commercial visibility.'
  }
};

const ALBUM_BACK_COVER = {
  type: 'cover-back',
  title: 'BOARDRANK GLOBAL',
  descriptor: 'GLOBAL BUSINESS DISCOVERY PLATFORM',
  statement: 'THE WORLD COMPETES. THE WORLD RANKS.',
  colophon: [
    'Published by BOARDRANK GLOBAL Press, Zurich & London.',
    'Bound by Hand using Panoramic Lay-Flat Cold-Fusion Core Binding.',
    'Printed on Heidelberg Speedmaster XL 106 UV-LED at 300 DPI Master Resolution.',
    'Archival FineArt Substrate: Hahnemühle Photo Rag Baryta 315 gsm.',
    'All Taxonomy Identifiers and Classification Structures © 2026 BOARDRANK GLOBAL.'
  ],
  isbn: 'ISBN 978-0-998877-12-0',
  brgRegistryUuid: 'BRG-FOLIO-ATLAS-72X12-001'
};

const ALBUM_SPREADS = [
  {
    "id": "technology",
    "spreadIndex": 2,
    "industryIndex": "01",
    "title": "Technology",
    "subtitle": "Computing, AI & Semiconductors",
    "profiles": "4,610+",
    "heroImage": "assets/images/sector-technology.jpg",
    "colorIdentity": {
      "themeName": "Midnight Blue + Electric Cyan",
      "primaryHex": "#081226",
      "secondaryHex": "#00F5D4",
      "accentHex": "#00B4D8",
      "bgDark": "#040914",
      "paperBg": "#F8FAF9",
      "borderSubtle": "rgba(0, 245, 212, 0.22)",
      "cmykPrimary": "C:100 M:85 Y:35 K:65",
      "cmykSecondary": "C:65 M:0 Y:25 K:0",
      "pantoneMatch": "PANTONE 289 C / PANTONE 325 C"
    },
    "curatorialIntro": "The computational bedrock of the modern planetary order. Technology encompasses foundational silicon fabrication, autonomous neural reasoning models, quantum coherence arrays, and hyperscale edge fabrics. As national boundaries dissolve into digital protocol stacks, sovereign competitiveness is dictated by the density, efficiency, and sovereign autonomy of technological infrastructure.",
    "macroMetrics": [
      {
        "label": "GLOBAL ENTERPRISE VALUE",
        "value": "$18.4 TRILLION"
      },
      {
        "label": "CLASSIFIED CATEGORIES",
        "value": "06 CORE DOMAINS"
      },
      {
        "label": "SPECIALIZATION NICHES",
        "value": "36 SUB-SECTORS"
      }
    ],
    "categories": [
      {
        "id": "tech-ai",
        "number": "01",
        "name": "Artificial Intelligence",
        "description": "Foundation models, neural architectures, computer vision, and cognitive computing systems.",
        "specializations": [
          "Machine Learning Frameworks",
          "Large Language Models (LLM)",
          "Computer Vision Systems",
          "Neural Processing Units (NPUs)",
          "Autonomous Agents",
          "Speech & Audio Synthesis"
        ]
      },
      {
        "id": "tech-robotics",
        "number": "02",
        "name": "Robotics & Automation",
        "description": "Autonomous humanoid robotics, precision industrial manipulators, and robotic perception.",
        "specializations": [
          "Humanoid Robotics",
          "Industrial Articulated Arms",
          "Autonomous Mobile Robots (AMRs)",
          "Exoskeleton Biomechanics",
          "Drone Telemetry Systems",
          "Micro-Robotic Actuators"
        ]
      },
      {
        "id": "tech-semiconductors",
        "number": "03",
        "name": "Semiconductors & Silicon",
        "description": "Next-generation lithography, microchip packaging, photonic processors, and power silicon.",
        "specializations": [
          "Sub-3nm Silicon Fabrication",
          "Photonic Integrated Circuits",
          "FPGA Hardware Acceleration",
          "Gallium Nitride (GaN) Power",
          "EUV Lithography Systems",
          "Chiplet Packaging"
        ]
      },
      {
        "id": "tech-cloud",
        "number": "04",
        "name": "Cloud & Quantum Computing",
        "description": "Hyperscale distributed cloud clusters, quantum computing runtimes, and edge fabrics.",
        "specializations": [
          "Hyperscale Cloud Compute",
          "Topological Quantum Qubits",
          "Edge Micro-Datacenters",
          "Serverless Run-time Engines",
          "Bare-Metal Clustering",
          "Distributed Storage Fabric"
        ]
      },
      {
        "id": "tech-cybersecurity",
        "number": "05",
        "name": "Cybersecurity & Trust",
        "description": "Zero-trust network frameworks, post-quantum cryptographic security, and automated threat defense.",
        "specializations": [
          "Post-Quantum Cryptography",
          "Zero-Trust Architecture",
          "Autonomous Threat Mitigation",
          "Hardware Security Modules",
          "Identity & Access Verification",
          "Cloud Security Posture"
        ]
      },
      {
        "id": "tech-telecom",
        "number": "06",
        "name": "Telecommunications",
        "description": "Next-generation 6G cellular infrastructure, low-earth orbit constellations, and optical transmission.",
        "specializations": [
          "6G Terahertz Wireless",
          "LEO Satellite Constellations",
          "Dense Wavelength Division Optical",
          "Subsea Fiber Cables",
          "Open-RAN Infrastructure",
          "Private Industrial 5G"
        ]
      }
    ]
  },
  {
    "id": "manufacturing",
    "spreadIndex": 3,
    "industryIndex": "02",
    "title": "Manufacturing",
    "subtitle": "Industrial Engineering & Fabrication",
    "profiles": "2,180+",
    "heroImage": "assets/images/sector-manufacturing.jpg",
    "colorIdentity": {
      "themeName": "Industrial Orange + Graphite",
      "primaryHex": "#1E2124",
      "secondaryHex": "#E85D04",
      "accentHex": "#F48C06",
      "bgDark": "#121416",
      "paperBg": "#F9F8F6",
      "borderSubtle": "rgba(232, 93, 4, 0.25)",
      "cmykPrimary": "C:70 M:60 Y:50 K:45",
      "cmykSecondary": "C:0 M:75 Y:100 K:0",
      "pantoneMatch": "PANTONE 447 C / PANTONE 1585 C"
    },
    "curatorialIntro": "The physical transformation of atomic matter into planetary machinery. Advanced manufacturing spans precision multi-axis CNC metrology, commercial aerospace orbital launch vehicles, generative additive alloy deposition, and fully automated continuous smelting networks. It constitutes the indispensable bridge between abstract engineering theorem and tangible global infrastructure.",
    "macroMetrics": [
      {
        "label": "GLOBAL OUTPUT ESTIMATE",
        "value": "$16.2 TRILLION"
      },
      {
        "label": "CLASSIFIED CATEGORIES",
        "value": "06 CORE DOMAINS"
      },
      {
        "label": "SPECIALIZATION NICHES",
        "value": "36 SUB-SECTORS"
      }
    ],
    "categories": [
      {
        "id": "mfg-aerospace",
        "number": "01",
        "name": "Aerospace & Defense",
        "description": "Orbital launchers, commercial aviation platforms, satellite structures, and avionics instrumentation.",
        "specializations": [
          "Commercial Space Launchers",
          "Avionics Navigation Flight Systems",
          "Carbon Composite Airframes",
          "Hypersonic Propulsion",
          "Spacecraft Thermal Barriers",
          "Unmanned Aerial Systems"
        ]
      },
      {
        "id": "mfg-automotive",
        "number": "02",
        "name": "Automotive & Clean Mobility",
        "description": "Electric vehicle chassis, solid-state battery packs, autonomous drive-by-wire, and hydrogen mobility.",
        "specializations": [
          "Solid-State EV Powertrains",
          "Autonomous Drive Electronics",
          "Hydrogen Fuel Cell Vehicles",
          "Lightweight Structural Castings",
          "Connected Cabin Avionics",
          "Fleet Battery Telemetry"
        ]
      },
      {
        "id": "mfg-industrial",
        "number": "03",
        "name": "Heavy Industrial Equipment",
        "description": "Automated mining excavators, hydraulic precision presses, turbine generators, and smelting systems.",
        "specializations": [
          "Autonomous Mining Haulage",
          "Hydraulic Forging Presses",
          "Industrial Steam Turbines",
          "Continuous Smelting Furnaces",
          "Robotic Crane Infrastructure",
          "Vibration Analysis Telemetry"
        ]
      },
      {
        "id": "mfg-precision",
        "number": "04",
        "name": "Precision Machining & Tooling",
        "description": "Multi-axis CNC milling, wire electrical discharge machining, and coordinate metrology.",
        "specializations": [
          "5-Axis High-Speed CNC",
          "Wire EDM Cutting",
          "Laser Micro-Drilling",
          "Optical Metrology Scanners",
          "Carbide Tool Coatings",
          "Surface Nanofinishing"
        ]
      },
      {
        "id": "mfg-materials",
        "number": "05",
        "name": "Advanced Materials & Composites",
        "description": "Carbon nanotubes, superalloys, engineered ceramics, and bio-based industrial polymers.",
        "specializations": [
          "Carbon Nanotube Synthesis",
          "High-Entropy Metal Alloys",
          "Engineering Structural Ceramics",
          "Self-Healing Polymers",
          "Aerogel Insulation Materials",
          "Superconducting Wires"
        ]
      },
      {
        "id": "mfg-additive",
        "number": "06",
        "name": "Additive Manufacturing",
        "description": "Industrial 3D metal printing, electron beam melting, and continuous liquid interface production.",
        "specializations": [
          "Direct Metal Laser Sintering (DMLS)",
          "Electron Beam Metal Melting",
          "Continuous Liquid Interface Resin",
          "Ceramic 3D Jetting",
          "Laser Metal Deposition",
          "Generative Topology Printing"
        ]
      }
    ]
  },
  {
    "id": "software",
    "spreadIndex": 4,
    "industryIndex": "03",
    "title": "Software",
    "subtitle": "Enterprise SaaS & Developer Suites",
    "profiles": "5,140+",
    "heroImage": "assets/images/sector-software.jpg",
    "colorIdentity": {
      "themeName": "Deep Violet + Lavender",
      "primaryHex": "#180B2B",
      "secondaryHex": "#C77DFF",
      "accentHex": "#9D4EDD",
      "bgDark": "#0D0518",
      "paperBg": "#FAF8FC",
      "borderSubtle": "rgba(199, 125, 255, 0.25)",
      "cmykPrimary": "C:85 M:100 Y:15 K:45",
      "cmykSecondary": "C:35 M:60 Y:0 K:0",
      "pantoneMatch": "PANTONE 2695 C / PANTONE 2577 C"
    },
    "curatorialIntro": "The abstract logic orchestrating modern human coordination. Software embodies mission-critical distributed database engines, zero-trust cryptographic perimeter protocols, high-dimensional vector retrieval fabrics, and autonomous continuous integration pipelines. As enterprise reality dematerializes into API endpoints, software provides the verifiable institutional memory of global commerce.",
    "macroMetrics": [
      {
        "label": "ANNUAL ENTERPRISE RUN-RATE",
        "value": "$9.8 TRILLION"
      },
      {
        "label": "CLASSIFIED CATEGORIES",
        "value": "06 CORE DOMAINS"
      },
      {
        "label": "SPECIALIZATION NICHES",
        "value": "36 SUB-SECTORS"
      }
    ],
    "categories": [
      {
        "id": "soft-infra",
        "number": "01",
        "name": "Enterprise Cloud Infrastructure",
        "description": "Distributed transactional databases, service meshes, event brokers, and container orchestration.",
        "specializations": [
          "Distributed SQL Databases",
          "Real-Time Event Stream Brokers",
          "Cloud-Native Service Meshes",
          "Kubernetes Orchestration",
          "Multi-Region Data Replicators",
          "Low-Latency Message Queues"
        ]
      },
      {
        "id": "soft-dev",
        "number": "02",
        "name": "Developer Tooling & DevOps",
        "description": "Automated CI/CD pipelines, compiler toolchains, binary analyzers, and observability platforms.",
        "specializations": [
          "Automated CI/CD Orchestration",
          "Compiler Code Generation",
          "Observability & Distributed Tracing",
          "Static Security Code Analysis",
          "Synthetic Testing Automation",
          "Container Registry Pipelines"
        ]
      },
      {
        "id": "soft-data",
        "number": "03",
        "name": "Data Architecture & Vector Systems",
        "description": "High-dimensional vector indexes, real-time columnar query engines, and data mesh pipelines.",
        "specializations": [
          "High-Dimensional Vector Indexes",
          "Columnar Analytical Databases",
          "Data Governance & Lineage",
          "Real-Time Streaming ETL",
          "Semantic Data Catalogs",
          "Query Cost Optimization"
        ]
      },
      {
        "id": "soft-collab",
        "number": "04",
        "name": "Collaboration & Productivity",
        "description": "Real-time collaborative document canvases, asynchronous video suites, and organizational knowledge graphs.",
        "specializations": [
          "Real-Time Collaborative Canvases",
          "Semantic Enterprise Search",
          "Asynchronous Video Collaboration",
          "Document Lifecycle Automation",
          "Automated Workflow Pipelines",
          "Team Knowledge Graphs"
        ]
      },
      {
        "id": "soft-sec",
        "number": "05",
        "name": "AppSec & API Gateways",
        "description": "Runtime application self-protection, dynamic API token gateways, and secrets management.",
        "specializations": [
          "Runtime Application Defense (RASP)",
          "Unified GraphQL & REST Gateways",
          "Zero-Knowledge Secrets Vaults",
          "API Behavioral Anomaly AI",
          "Dynamic Code Obfuscation",
          "Software Supply Chain SBOM"
        ]
      },
      {
        "id": "soft-enterprise",
        "number": "06",
        "name": "ERP & Operations Systems",
        "description": "Global resource planning, automated ledger synchronization, and international compliance suites.",
        "specializations": [
          "Cloud Enterprise Resource Planning",
          "Multi-Jurisdiction Tax Engines",
          "Corporate Treasury Synchronization",
          "Procurement Lifecycle Automation",
          "Contract Lifecycle Intelligence",
          "Auditable Ledger Logs"
        ]
      }
    ]
  },
  {
    "id": "services",
    "spreadIndex": 5,
    "industryIndex": "04",
    "title": "Services",
    "subtitle": "Strategy, Advisory & Governance",
    "profiles": "1,890+",
    "heroImage": "assets/images/sector-services.jpg",
    "colorIdentity": {
      "themeName": "Burgundy + Champagne Gold",
      "primaryHex": "#3D0814",
      "secondaryHex": "#D4AF37",
      "accentHex": "#E5C158",
      "bgDark": "#1E0309",
      "paperBg": "#FBF9F6",
      "borderSubtle": "rgba(212, 175, 55, 0.28)",
      "cmykPrimary": "C:35 M:95 Y:75 K:60",
      "cmykSecondary": "C:20 M:30 Y:75 K:5",
      "pantoneMatch": "PANTONE 7428 C / PANTONE 871 C"
    },
    "curatorialIntro": "The stewardship of international strategic capital and executive advisory. Professional services orchestrate cross-border mergers and acquisitions, sovereign jurisdictional governance, algorithmic supply network optimization, and institutional auditing. It represents the cerebral architecture through which global organizations navigate regulatory turbulence and geopolitical disruption.",
    "macroMetrics": [
      {
        "label": "CROSS-BORDER ADVISORY FLOW",
        "value": "$8.5 TRILLION"
      },
      {
        "label": "CLASSIFIED CATEGORIES",
        "value": "06 CORE DOMAINS"
      },
      {
        "label": "SPECIALIZATION NICHES",
        "value": "36 SUB-SECTORS"
      }
    ],
    "categories": [
      {
        "id": "srv-strategy",
        "number": "01",
        "name": "Strategy & Management Consulting",
        "description": "Cross-border M&A advisory, operational turnaround, organizational architecture, and market entry.",
        "specializations": [
          "Cross-Border M&A Strategy",
          "Corporate Turnaround & Restructuring",
          "Global Market Entry Modeling",
          "Operating Model Modernization",
          "Shareholder Value Optimization",
          "Capital Allocation Strategy"
        ]
      },
      {
        "id": "srv-legal",
        "number": "02",
        "name": "Legal & International Compliance",
        "description": "Cross-border trade law, intellectual property defense, antitrust representation, and sovereign compliance.",
        "specializations": [
          "International Trade Law",
          "Patent & Trademark Defense",
          "Antitrust & Competition Counsel",
          "Cross-Border Arbitration",
          "Data Sovereignty Compliance",
          "Securities Regulation Law"
        ]
      },
      {
        "id": "srv-audit",
        "number": "03",
        "name": "Audit, Tax & Risk Advisory",
        "description": "Statutory financial auditing, international transfer pricing, forensic accounting, and enterprise risk.",
        "specializations": [
          "Statutory Financial Audits",
          "International Transfer Pricing",
          "Forensic Accounting Investigations",
          "Enterprise Risk Governance",
          "ESG Verification Audits",
          "Tax Optimization Modeling"
        ]
      },
      {
        "id": "srv-hr",
        "number": "04",
        "name": "Executive Talent & Human Capital",
        "description": "C-suite executive search, board advisory, international compensation architecture, and organizational design.",
        "specializations": [
          "C-Suite Executive Search",
          "Board of Directors Advisory",
          "Global Equity Compensation",
          "Organizational Restructuring",
          "Workforce Capability Planning",
          "Executive Succession Roadmaps"
        ]
      },
      {
        "id": "srv-brand",
        "number": "05",
        "name": "Brand Strategy & Communications",
        "description": "Corporate brand systems, crisis communications, institutional PR, and investor messaging.",
        "specializations": [
          "Corporate Brand Architecture",
          "Crisis Communications Advisory",
          "Investor Relations Messaging",
          "Global Media Placement",
          "Reputation Intelligence Tracking",
          "Creative Editorial Production"
        ]
      },
      {
        "id": "srv-it",
        "number": "06",
        "name": "IT Strategy & Systems Advisory",
        "description": "Legacy architecture modernization, sovereign cloud strategy, and cyber resilience audits.",
        "specializations": [
          "Legacy Core Modernization",
          "Sovereign Cloud Advisory",
          "Cyber Posture Auditing",
          "IT Portfolio Optimization",
          "Vendor Risk Governance",
          "Enterprise Architecture Design"
        ]
      }
    ]
  },
  {
    "id": "retail",
    "spreadIndex": 6,
    "industryIndex": "05",
    "title": "Retail",
    "subtitle": "Commerce, Consumer & Marketplaces",
    "profiles": "2,420+",
    "heroImage": "assets/images/sector-retail.jpg",
    "colorIdentity": {
      "themeName": "Coral Red + Warm Cream",
      "primaryHex": "#251515",
      "secondaryHex": "#E63946",
      "accentHex": "#F4A261",
      "bgDark": "#140A0A",
      "paperBg": "#FFFDF9",
      "borderSubtle": "rgba(230, 57, 70, 0.25)",
      "cmykPrimary": "C:60 M:65 Y:65 K:60",
      "cmykSecondary": "C:5 M:85 Y:70 K:0",
      "pantoneMatch": "PANTONE 4975 C / PANTONE 1795 C"
    },
    "curatorialIntro": "The borderless interface between global industrial supply and human consumption. Retail integrates predictive algorithmic fulfillment micro-hubs, architectural flagship experiences, automated cross-border currency clearing, and resilient last-mile autonomous logistics. It mirrors the cultural zeitgeist and consumer pulse of civilization across 195 sovereign territories.",
    "macroMetrics": [
      {
        "label": "ANNUAL COMMERCE VOLUME",
        "value": "$28.3 TRILLION"
      },
      {
        "label": "CLASSIFIED CATEGORIES",
        "value": "06 CORE DOMAINS"
      },
      {
        "label": "SPECIALIZATION NICHES",
        "value": "36 SUB-SECTORS"
      }
    ],
    "categories": [
      {
        "id": "ret-ecom",
        "number": "01",
        "name": "E-Commerce Platforms & Infrastructure",
        "description": "Headless storefront architectures, multi-currency checkout engines, and borderless digital marketplaces.",
        "specializations": [
          "Headless Storefront Engines",
          "Multi-Currency Global Checkout",
          "Multi-Vendor Marketplace Rails",
          "Algorithmic Search Merchandising",
          "Subscription Commerce Engines",
          "Cart Abandonment Telemetry"
        ]
      },
      {
        "id": "ret-fulfillment",
        "number": "02",
        "name": "Automated Fulfillment & Logistics",
        "description": "Micro-fulfillment center robotics, autonomous last-mile delivery, and automated parcel sorting.",
        "specializations": [
          "Micro-Fulfillment Robotics",
          "Autonomous Last-Mile Delivery",
          "Automated Parcel Sortation",
          "Dynamic Delivery Routing",
          "Returns Management Automation",
          "Urban Consolidation Hubs"
        ]
      },
      {
        "id": "ret-luxury",
        "number": "03",
        "name": "Luxury Goods & Haute Horlogerie",
        "description": "Heritage timepiece manufacturing, bespoke haute couture, fine jewelry, and verifiable provenance systems.",
        "specializations": [
          "Haute Horlogerie Manufacturing",
          "Bespoke Haute Couture Atelier",
          "Ethical Gemstone Provenance",
          "Artisanal Leatherworking",
          "Luxury Clienteling Platforms",
          "Digital Certificate Verification"
        ]
      },
      {
        "id": "ret-pos",
        "number": "04",
        "name": "Omnichannel & Connected Store",
        "description": "Smart retail shelf sensors, cashier-less computer vision pay, and integrated retail inventory.",
        "specializations": [
          "Computer Vision Checkout Pay",
          "RFID Inventory Shelf Sensors",
          "Unified In-Store Mobile POS",
          "Foot-Traffic Spatial Heatmaps",
          "Interactive Digital Displays",
          "Store Associate Assistants"
        ]
      },
      {
        "id": "ret-d2c",
        "number": "05",
        "name": "Direct-to-Consumer Brands",
        "description": "Digitally native product brands, sustainable consumables, and personalized subscription products.",
        "specializations": [
          "Digitally Native Product Creation",
          "Custom Formulation Engines",
          "Circular Packaging Networks",
          "Customer Retention Algorithms",
          "Direct Community Channels",
          "Carbon-Neutral Distribution"
        ]
      },
      {
        "id": "ret-wholesale",
        "number": "06",
        "name": "Wholesale & B2B Procurement",
        "description": "Bulk catalog digitalization, trade credit underwriting, and automated customs brokerage.",
        "specializations": [
          "B2B Wholesale Digital Catalogs",
          "Trade Credit Instant Underwriting",
          "Automated Customs Clearance",
          "Volume Discount Logic",
          "Container Sourcing Portals",
          "Cross-Border B2B Invoicing"
        ]
      }
    ]
  },
  {
    "id": "finance",
    "spreadIndex": 7,
    "industryIndex": "06",
    "title": "Finance",
    "subtitle": "Banking, FinTech & Capital Markets",
    "profiles": "3,110+",
    "heroImage": "assets/images/sector-finance.jpg",
    "colorIdentity": {
      "themeName": "Emerald Green + Metallic Gold",
      "primaryHex": "#08281E",
      "secondaryHex": "#D4AF37",
      "accentHex": "#2EC4B6",
      "bgDark": "#041510",
      "paperBg": "#F8FAF8",
      "borderSubtle": "rgba(212, 175, 55, 0.3)",
      "cmykPrimary": "C:85 M:40 Y:75 K:60",
      "cmykSecondary": "C:20 M:30 Y:75 K:5",
      "pantoneMatch": "PANTONE 5535 C / PANTONE 10126 C"
    },
    "curatorialIntro": "The circulatory nervous system of human endeavor. Finance encompasses tier-one institutional clearinghouses, sovereign wealth deployment, algorithmic high-frequency liquidity corridors, and multi-asset post-trade custody fabrics. It prices sovereign risk, allocates planet-scale capital reserves, and underwrites the infrastructure of tomorrow.",
    "macroMetrics": [
      {
        "label": "MANAGED ASSET POOL",
        "value": "$120+ TRILLION"
      },
      {
        "label": "CLASSIFIED CATEGORIES",
        "value": "06 CORE DOMAINS"
      },
      {
        "label": "SPECIALIZATION NICHES",
        "value": "36 SUB-SECTORS"
      }
    ],
    "categories": [
      {
        "id": "fin-banking",
        "number": "01",
        "name": "Institutional Banking & Treasury",
        "description": "Tier-one wholesale liquidity, correspondent banking networks, multi-currency corporate treasuries.",
        "specializations": [
          "Wholesale Interbank Liquidity",
          "Correspondent Account Rails",
          "Multi-Currency Cash Concentration",
          "Syndicated Corporate Lending",
          "Central Bank Settlement Interfaces",
          "Escrow Management Engines"
        ]
      },
      {
        "id": "fin-fintech",
        "number": "02",
        "name": "FinTech & Payments Infrastructure",
        "description": "Real-time clearing networks, embedded banking APIs, merchant aggregation, and fraud prevention.",
        "specializations": [
          "Real-Time Gross Clearing Rails",
          "Embedded Banking-as-a-Service",
          "Cross-Border Remittance APIs",
          "Automated Chargeback Resolution",
          "Sub-Second Fraud Scoring",
          "Tokenized Merchant Processing"
        ]
      },
      {
        "id": "fin-invest",
        "number": "03",
        "name": "Asset & Wealth Management",
        "description": "Sovereign wealth funds, private equity syndication, algorithmic hedge funds, and family offices.",
        "specializations": [
          "Sovereign Wealth Fund Structuring",
          "Private Equity Buyout Syndicates",
          "Quantitative Long/Short Strategies",
          "Multi-Family Office Custody",
          "Automated Portfolio Rebalancing",
          "Alternative Asset Tokenization"
        ]
      },
      {
        "id": "fin-markets",
        "number": "04",
        "name": "Capital Markets & Electronic Trading",
        "description": "High-frequency algorithmic matching, dark pools, primary bond origination, and equity syndicate desks.",
        "specializations": [
          "Sub-Millisecond Matching Engines",
          "Dark Pool Electronic Liquidity",
          "Primary Debt Syndication",
          "FX Algorithmic Hedging",
          "Derivatives Margin Engines",
          "Post-Trade Clearing Automation"
        ]
      },
      {
        "id": "fin-insurance",
        "number": "05",
        "name": "InsurTech & Reinsurance Modeling",
        "description": "Parametric climate underwriting, automated actuarial models, and decentralized claims processing.",
        "specializations": [
          "Parametric Climate Risk Models",
          "Catastrophe Reinsurance Portfolios",
          "Telematics Auto Actuarial AI",
          "Autonomous Health Claims Triage",
          "Cyber Attack Risk Underwriting",
          "Embedded Warranty Protection"
        ]
      },
      {
        "id": "fin-digital",
        "number": "06",
        "name": "Digital Assets & Tokenization",
        "description": "Regulated tokenized securities, institutional cold custody, stablecoin settlement, and compliance verification.",
        "specializations": [
          "Regulated Tokenized Equities",
          "Multi-Signature Institutional Custody",
          "Cross-Border Stablecoin Rails",
          "On-Chain AML Forensics",
          "Decentralized Treasury Vaults",
          "Digital Bond Issuance Systems"
        ]
      }
    ]
  },
  {
    "id": "healthcare",
    "spreadIndex": 8,
    "industryIndex": "07",
    "title": "Healthcare",
    "subtitle": "Biotechnology, MedTech & Genomics",
    "profiles": "1,960+",
    "heroImage": "assets/images/sector-healthcare.jpg",
    "colorIdentity": {
      "themeName": "Medical Teal + Clean White",
      "primaryHex": "#0B272E",
      "secondaryHex": "#00A896",
      "accentHex": "#02C39A",
      "bgDark": "#05161A",
      "paperBg": "#F7FCFC",
      "borderSubtle": "rgba(0, 168, 150, 0.25)",
      "cmykPrimary": "C:90 M:45 Y:45 K:40",
      "cmykSecondary": "C:80 M:0 Y:45 K:0",
      "pantoneMatch": "PANTONE 316 C / PANTONE 3262 C"
    },
    "curatorialIntro": "The scientific preservation and optimization of human life. Healthcare integrates cellular gene programming, sub-nanometer robotic surgical intervention, continuous ambulatory biosensor telemetry, and personalized oncology sequencing. Here, the vanguard of biomedical research transforms biological limits into sovereign longevity.",
    "macroMetrics": [
      {
        "label": "PLANETARY HEALTHCARE SPEND",
        "value": "$10.6 TRILLION"
      },
      {
        "label": "CLASSIFIED CATEGORIES",
        "value": "06 CORE DOMAINS"
      },
      {
        "label": "SPECIALIZATION NICHES",
        "value": "36 SUB-SECTORS"
      }
    ],
    "categories": [
      {
        "id": "hlth-biotech",
        "number": "01",
        "name": "Biotechnology & Gene Therapies",
        "description": "CRISPR cellular programming, targeted mRNA delivery vectors, and monoclonal antibody therapeutics.",
        "specializations": [
          "CRISPR-Cas Gene Editing",
          "Targeted mRNA Therapeutics",
          "Monoclonal Antibody Engineering",
          "Cellular CAR-T Therapy",
          "Epigenetic Rejuvenation Compounds",
          "Synthetic Protein Scaffolds"
        ]
      },
      {
        "id": "hlth-devices",
        "number": "02",
        "name": "Robotic Surgery & Medical Devices",
        "description": "Multi-arm robotic surgical consoles, ultrasound transducers, and implantable neural telemetry.",
        "specializations": [
          "Minimally Invasive Surgical Consoles",
          "Implantable Neurostimulation Arrays",
          "Point-of-Care Ultrasound Transducers",
          "Smart Orthopedic Implants",
          "Cardiac Electrophysiology Devices",
          "Endoscopic Imaging Robotics"
        ]
      },
      {
        "id": "hlth-genomics",
        "number": "03",
        "name": "Genomics & Molecular Diagnostics",
        "description": "High-throughput DNA sequencing, spatial transcriptomics, and liquid biopsy cancer screening.",
        "specializations": [
          "Next-Gen High-Throughput Sequencing",
          "Liquid Biopsy Oncology Screening",
          "Spatial Single-Cell Transcriptomics",
          "Pharmacogenomics Testing Panels",
          "Molecular Pathogen Identification",
          "Rare Disease Genetic Panels"
        ]
      },
      {
        "id": "hlth-digital",
        "number": "04",
        "name": "Digital Health & AI Diagnostics",
        "description": "Computer-aided radiological screening, decentralized clinical trial platforms, and patient monitoring.",
        "specializations": [
          "Radiological Computer-Vision AI",
          "Remote Biometric Vital Monitoring",
          "Decentralized Trial Platforms",
          "Predictive ICU Sepsis Scoring",
          "Clinical Decision Support Systems",
          "Digital Biomarker Analytics"
        ]
      },
      {
        "id": "hlth-pharma",
        "number": "05",
        "name": "Pharmaceuticals & Formulation",
        "description": "Computational drug discovery, lyophilized biologics, micro-encapsulation, and continuous manufacturing.",
        "specializations": [
          "Computational Small-Molecule Design",
          "Lyophilized Biologics Formulation",
          "Lipid Nanoparticle Encapsulation",
          "Continuous Flow Synthesis",
          "Targeted Drug Delivery Peptides",
          "Sterile Automated Fill-Finish"
        ]
      },
      {
        "id": "hlth-hospitals",
        "number": "06",
        "name": "Clinical Systems & Healthcare Ops",
        "description": "Hospital operational platforms, sterile supply tracking, electronic records, and surgical theaters.",
        "specializations": [
          "Hospital Operations Intelligence",
          "Interoperable Fast Healthcare EHR",
          "Surgical Instrument RFID Tracking",
          "Cleanroom Sterilization Protocols",
          "Specialty Pharmacy Distribution",
          "Medical Cold-Chain Vaults"
        ]
      }
    ]
  },
  {
    "id": "agriculture",
    "spreadIndex": 9,
    "industryIndex": "08",
    "title": "Agriculture",
    "subtitle": "AgTech, Food Systems & Biomaterials",
    "profiles": "940+",
    "heroImage": "assets/images/sector-agriculture.jpg",
    "colorIdentity": {
      "themeName": "Forest Green + Earth Brown",
      "primaryHex": "#142918",
      "secondaryHex": "#7F4F24",
      "accentHex": "#52B788",
      "bgDark": "#0B170D",
      "paperBg": "#F9FBF8",
      "borderSubtle": "rgba(82, 183, 136, 0.28)",
      "cmykPrimary": "C:75 M:35 Y:85 K:55",
      "cmykSecondary": "C:40 M:75 Y:100 K:50",
      "pantoneMatch": "PANTONE 350 C / PANTONE 7575 C"
    },
    "curatorialIntro": "The ecological foundation sustaining planetary civilization. Agriculture unites autonomous precision harvesting fleets, satellite-verified soil carbon capture, multi-spectral drone agronomy, and climate-resilient genomic crop development. It balances food sovereignty for eight billion citizens against planetary biological boundaries.",
    "macroMetrics": [
      {
        "label": "GLOBAL FOOD ECONOMY",
        "value": "$8.2 TRILLION"
      },
      {
        "label": "CLASSIFIED CATEGORIES",
        "value": "06 CORE DOMAINS"
      },
      {
        "label": "SPECIALIZATION NICHES",
        "value": "36 SUB-SECTORS"
      }
    ],
    "categories": [
      {
        "id": "agr-agtech",
        "number": "01",
        "name": "AgTech & Precision Farming",
        "description": "Satellite crop health monitoring, autonomous tractor swarms, and variable-rate nutrient injection.",
        "specializations": [
          "Satellite Multispectral Crop Health",
          "Autonomous Swarm Harvesters",
          "Soil Microbiome Sensor Arrays",
          "Variable-Rate Nutrient Sprayers",
          "AI Weeding & Thinning Robotics",
          "Automated Irrigation Logic"
        ]
      },
      {
        "id": "agr-vertical",
        "number": "02",
        "name": "Vertical Farming & Cleanrooms",
        "description": "Closed-loop hydroponic and aeroponic vertical facilities with customized spectral lighting.",
        "specializations": [
          "Closed-Loop Aeroponic Towers",
          "Dynamic Spectral LED Recipes",
          "Automated Gantry Seedling Systems",
          "Nutrient Water Recirculation",
          "Cleanroom Biosecurity Enclosures",
          "Urban Indoor Farm Controllers"
        ]
      },
      {
        "id": "agr-bioproteins",
        "number": "03",
        "name": "Alternative Proteins & Fermentation",
        "description": "Bioreactor cultivated protein, biomass precision fermentation, and fungal biomaterials.",
        "specializations": [
          "Bioreactor Cultivated Cellular Meat",
          "Precision Fungal Fermentation",
          "Plant-Derived Functional Proteins",
          "Algae Superfood Photobioreactors",
          "Microbial Protein Synthesis",
          "Insect Feed Protein Processing"
        ]
      },
      {
        "id": "agr-genetics",
        "number": "04",
        "name": "Crop Genetics & Seed Science",
        "description": "Drought-tolerant crop varietals, non-GMO gene trait enhancements, and microbial seed coatings.",
        "specializations": [
          "Drought-Tolerant Seed Genetics",
          "Nitrogen-Fixing Soil Microbes",
          "Heat-Resilient Hybrid Strains",
          "Bio-Stimulant Seed Coatings",
          "Natural Pathogen Resistance",
          "Epigenetic Yield Optimization"
        ]
      },
      {
        "id": "agr-supply",
        "number": "05",
        "name": "Agri-Commodities & Grain Storage",
        "description": "Intelligent grain elevator telemetry, international bulk shipment verification, and fair pricing rails.",
        "specializations": [
          "Automated Grain Silo Aeration",
          "Bulk Commodity Origin Verification",
          "Digital Bilateral Crop Contracts",
          "Perishable Cold-Chain Intermodal",
          "Mycotoxin Real-Time Detectors",
          "Freight Rail Grain Corridors"
        ]
      },
      {
        "id": "agr-carbon",
        "number": "06",
        "name": "Regenerative Soil & Carbon Credits",
        "description": "Biochar soil enhancement, satellite-verified soil carbon sequestration, and silvopasture systems.",
        "specializations": [
          "Satellite-Verified Soil Carbon",
          "Biochar Pyrolysis Soil Amendment",
          "Silvopasture Agroforestry Design",
          "Cover Crop Root Depth Mapping",
          "Riparian Buffer Restoration",
          "Water Table Recharge Monitoring"
        ]
      }
    ]
  },
  {
    "id": "energy",
    "spreadIndex": 10,
    "industryIndex": "09",
    "title": "Energy",
    "subtitle": "Renewables, Grid & Decarbonization",
    "profiles": "1,720+",
    "heroImage": "assets/images/sector-energy.jpg",
    "colorIdentity": {
      "themeName": "Solar Yellow + Deep Navy",
      "primaryHex": "#08162A",
      "secondaryHex": "#FFB703",
      "accentHex": "#FB8500",
      "bgDark": "#030C19",
      "paperBg": "#FCFBF6",
      "borderSubtle": "rgba(255, 183, 3, 0.3)",
      "cmykPrimary": "C:100 M:75 Y:35 K:55",
      "cmykSecondary": "C:0 M:30 Y:100 K:0",
      "pantoneMatch": "PANTONE 282 C / PANTONE 1235 C"
    },
    "curatorialIntro": "The thermodynamic engine of civilization. Energy encompasses utility-scale tandem perovskite photovoltaic arrays, deepwater floating offshore wind nacelles, liquid hydrogen cryogenic supply chains, and ultra-high voltage direct current transmission grids. The transition to clean, sovereign energy defines the master geopolitical struggle of this century.",
    "macroMetrics": [
      {
        "label": "PRIMARY ENERGY MARKET",
        "value": "$11.4 TRILLION"
      },
      {
        "label": "CLASSIFIED CATEGORIES",
        "value": "06 CORE DOMAINS"
      },
      {
        "label": "SPECIALIZATION NICHES",
        "value": "36 SUB-SECTORS"
      }
    ],
    "categories": [
      {
        "id": "nrg-solar",
        "number": "01",
        "name": "Solar & Photovoltaic Systems",
        "description": "Utility-scale tandem perovskite installations, bifacial solar farms, and agrivoltaic trackers.",
        "specializations": [
          "Perovskite-Silicon Tandem Cells",
          "Dual-Axis Solar Sun Trackers",
          "Utility-Scale Inverter Stations",
          "Agrivoltaic Dual-Use Installations",
          "Floating Solar Arrays",
          "BIPV Architectural Glass"
        ]
      },
      {
        "id": "nrg-wind",
        "number": "02",
        "name": "Wind & Hydro Kinetic Power",
        "description": "Deepwater floating offshore turbines, low-wind direct-drive generators, and pumped storage hydro.",
        "specializations": [
          "Deepwater Floating Offshore Turbines",
          "Low-Wind Direct-Drive Nacelles",
          "Pumped Storage Hydro Reservoirs",
          "Run-of-River Microturbines",
          "Turbine Blade Recyclable Resins",
          "LIDAR Wind Vector Profiling"
        ]
      },
      {
        "id": "nrg-hydrogen",
        "number": "03",
        "name": "Green Hydrogen & Synthetic Fuels",
        "description": "Proton exchange membrane electrolysis, liquid hydrogen cryogenic bunkering, and e-ammonia.",
        "specializations": [
          "Proton Exchange Membrane (PEM) Stacks",
          "Liquid Hydrogen Cryo-Vessels",
          "Maritime Green Ammonia Synthesis",
          "Direct Air Synthetic E-Kerosene",
          "Underground Salt Cavern Hydrogen",
          "Hydrogen Fuel Cell Dispensers"
        ]
      },
      {
        "id": "nrg-storage",
        "number": "04",
        "name": "Long-Duration Energy Storage",
        "description": "Vanadium redox flow batteries, solid-state grid storage, thermal sand batteries, and compressed air.",
        "specializations": [
          "Vanadium Redox Flow Batteries",
          "Sodium-Ion Utility Storage Units",
          "Thermal Sand High-Temp Storage",
          "Compressed Air Energy Systems",
          "Mechanical Gravity Storage Towers",
          "Supercapacitor Fast Frequency"
        ]
      },
      {
        "id": "nrg-grid",
        "number": "05",
        "name": "Smart Grid & Power Transmission",
        "description": "Ultra-high voltage direct current (UHVDC) transmission, virtual power plants, and automated demand response.",
        "specializations": [
          "Ultra-High Voltage DC Transmission",
          "Virtual Power Plant Aggregation",
          "Microgrid Autonomous Controllers",
          "Substation Digital Automation",
          "Dynamic Line Rating Sensors",
          "Grid Inertia Emulation AI"
        ]
      },
      {
        "id": "nrg-carbon",
        "number": "06",
        "name": "Carbon Capture & Sequestration",
        "description": "Direct air mineralization, industrial flue gas chemical absorption, and permanent geological storage.",
        "specializations": [
          "Direct Air Mineralization Contactors",
          "Point-Source Flue Gas Scrubbers",
          "Deep Saline Aquifer Sequestration",
          "CO2-Derived Synthetic Building Aggregates",
          "Carbon Accounting Telemetry",
          "Marine Carbon Dioxide Removal"
        ]
      }
    ]
  },
  {
    "id": "logistics",
    "spreadIndex": 11,
    "industryIndex": "10",
    "title": "Logistics",
    "subtitle": "Maritime, Intermodal & Supply Chains",
    "profiles": "1,630+",
    "heroImage": "assets/images/sector-logistics.jpg",
    "colorIdentity": {
      "themeName": "Ocean Blue + Metallic Silver",
      "primaryHex": "#091E36",
      "secondaryHex": "#C0C0C0",
      "accentHex": "#00B4D8",
      "bgDark": "#04101E",
      "paperBg": "#F8FAFC",
      "borderSubtle": "rgba(0, 180, 216, 0.28)",
      "cmykPrimary": "C:95 M:60 Y:20 K:50",
      "cmykSecondary": "C:25 M:18 Y:18 K:0",
      "pantoneMatch": "PANTONE 3025 C / PANTONE 877 C"
    },
    "curatorialIntro": "The physical choreography of planetary trade. Logistics governs autonomous containerized maritime freight, automated deepwater port crane networks, intermodal heavy rail corridors, and single-window digital customs infrastructure. It binds disconnected sovereign geographies into a synchronized planetary conveyor belt.",
    "macroMetrics": [
      {
        "label": "INTERMODAL TRADE FLOW",
        "value": "$10.2 TRILLION"
      },
      {
        "label": "CLASSIFIED CATEGORIES",
        "value": "06 CORE DOMAINS"
      },
      {
        "label": "SPECIALIZATION NICHES",
        "value": "36 SUB-SECTORS"
      }
    ],
    "categories": [
      {
        "id": "log-maritime",
        "number": "01",
        "name": "Maritime Freight & Smart Ports",
        "description": "Automated electric quay cranes, ultra-large container carriers, LNG dual-fuel propulsion, and berth algorithms.",
        "specializations": [
          "Automated Electric Quay Cranes",
          "Ultra-Large Container Carrier Routing",
          "LNG Dual-Fuel Bunkering",
          "Terminal Operating Systems (TOS)",
          "Automated Straddle Carriers",
          "Digital Port Clearance Manifests"
        ]
      },
      {
        "id": "log-air",
        "number": "02",
        "name": "Air Cargo & Charter Networks",
        "description": "Dedicated widebody freighters, temperature-controlled cargo containers, and rapid ramp transfer.",
        "specializations": [
          "Widebody Dedicated Freighter Charters",
          "Pharma-Certified Unit Load Devices",
          "Ramp Ground Handling Optimization",
          "Dangerous Goods Flight Safety",
          "Automated Air Waybill Processing",
          "High-Value Secured Cargo Vaults"
        ]
      },
      {
        "id": "log-rail",
        "number": "03",
        "name": "Intermodal Rail & Autonomous Haulage",
        "description": "Double-stack container rail lines, electric autonomous freight trucks, and dynamic load scheduling.",
        "specializations": [
          "Double-Stack Container Corridors",
          "Autonomous Long-Haul Electric Trucks",
          "Dynamic Train Composition AI",
          "Locomotive Predictive Telemetry",
          "Intermodal Dry Port Transfer",
          "Rail Route Incline Energy Recovery"
        ]
      },
      {
        "id": "log-warehouse",
        "number": "04",
        "name": "Robotic Warehousing & ASRS",
        "description": "High-density automated storage and retrieval systems, mobile shuttle fleets, and vision picking.",
        "specializations": [
          "Automated Storage & Retrieval (ASRS)",
          "High-Density 3D Pallet Shuttles",
          "Computer Vision Picking Robots",
          "Automated Guided Vehicles (AGV)",
          "Autonomous Drone Stock Auditing",
          "Dynamic Cross-Docking Rails"
        ]
      },
      {
        "id": "log-coldchain",
        "number": "05",
        "name": "Specialized Cold-Chain Distribution",
        "description": "Cryogenic biomedical transportation, ultra-low temperature vaccine shippers, and produce reefer telemetry.",
        "specializations": [
          "Cryogenic Liquid Nitrogen Shippers",
          "Ultra-Low Temperature (-80°C) Vans",
          "Controlled-Atmosphere Reefer Boxes",
          "Active Dry Ice Sensor Loggers",
          "Cold-Chain HACCP Compliance",
          "Pre-Cooling Cross-Dock Stations"
        ]
      },
      {
        "id": "log-trade",
        "number": "06",
        "name": "Customs & Border Trade Infrastructure",
        "description": "Digital single-window trade declarations, automated tariff code classification, and bonded hubs.",
        "specializations": [
          "Single-Window Customs Automation",
          "Automated Harmonized Tariff Codes",
          "Bonded Airport Logistics Zones",
          "Authorized Economic Operator (AEO)",
          "Trade Sanctions Live Screening",
          "International Transit Carnets"
        ]
      }
    ]
  },
  {
    "id": "education",
    "spreadIndex": 12,
    "industryIndex": "11",
    "title": "Education",
    "subtitle": "EdTech, Universities & Research",
    "profiles": "1,150+",
    "heroImage": "assets/images/sector-education.jpg",
    "colorIdentity": {
      "themeName": "Royal Purple + Ivory",
      "primaryHex": "#250C3D",
      "secondaryHex": "#E0AAFF",
      "accentHex": "#C77DFF",
      "bgDark": "#130421",
      "paperBg": "#FCFAF6",
      "borderSubtle": "rgba(224, 170, 255, 0.28)",
      "cmykPrimary": "C:85 M:100 Y:20 K:40",
      "cmykSecondary": "C:15 M:35 Y:0 K:0",
      "pantoneMatch": "PANTONE 2685 C / PANTONE 256 C"
    },
    "curatorialIntro": "The preservation, transmission, and synthesis of human intellect. Education bridges monumental institutional research repositories, neural-adaptive STEM pedagogical platforms, cryptographically verifiable academic credentials, and continuous executive reskilling networks. It underwrites the generational renewal of cognitive capital across the globe.",
    "macroMetrics": [
      {
        "label": "KNOWLEDGE & RESKILLING",
        "value": "$7.3 TRILLION"
      },
      {
        "label": "CLASSIFIED CATEGORIES",
        "value": "06 CORE DOMAINS"
      },
      {
        "label": "SPECIALIZATION NICHES",
        "value": "36 SUB-SECTORS"
      }
    ],
    "categories": [
      {
        "id": "edu-higher",
        "number": "01",
        "name": "Higher Education & Academic Portals",
        "description": "University research management systems, open-access scholarly publishing, and campus digital IDs.",
        "specializations": [
          "University Research Repository Systems",
          "Open-Access Peer Review Networks",
          "Campus Biometric Digital ID",
          "Academic Faculty Workload Portals",
          "Cross-University Credit Transfer",
          "Laboratory Equipment Reservation"
        ]
      },
      {
        "id": "edu-edtech",
        "number": "02",
        "name": "Adaptive Learning & EdTech Suites",
        "description": "AI-personalized learning curricula, immersive STEM virtual laboratories, and interactive canvases.",
        "specializations": [
          "AI Adaptive Learning Paths",
          "Immersive WebGL STEM Virtual Labs",
          "Automated Formative Assessment",
          "Collaborative Classroom Canvases",
          "Speech-Enabled Language Tutoring",
          "Gamified Student Engagement"
        ]
      },
      {
        "id": "edu-corporate",
        "number": "03",
        "name": "Executive & Workforce Reskilling",
        "description": "Corporate technical bootcamps, executive decision simulation rooms, and skills inventory mapping.",
        "specializations": [
          "Enterprise Technical Reskilling",
          "C-Suite Decision Simulation Games",
          "Internal Workforce Skills Graphs",
          "Interactive Compliance Certification",
          "Micro-Learning Mobile Snippets",
          "Mentorship Matching Algorithms"
        ]
      },
      {
        "id": "edu-credentials",
        "number": "04",
        "name": "Verifiable Credentials & Badges",
        "description": "Cryptographically signed academic diplomas, decentralized professional licenses, and credential wallets.",
        "specializations": [
          "Cryptographically Signed Diplomas",
          "Decentralized Professional Badges",
          "Global Degree Equivalence Verification",
          "Continuing Education Unit (CEU) Logs",
          "Tamper-Proof Transcript APIs",
          "Blockchain Academic Wallets"
        ]
      },
      {
        "id": "edu-k12",
        "number": "05",
        "name": "Early & K-12 Educational Systems",
        "description": "Special education adaptive tools, curriculum planning software, and school district administration.",
        "specializations": [
          "Assistive Neurodivergent Learning Tools",
          "Multi-District Curriculum Alignment",
          "Safe Student Privacy Firewalls",
          "Parent-Teacher Communication Hubs",
          "Standardized Test Analytics",
          "Bus Route Safety Telemetry"
        ]
      },
      {
        "id": "edu-publishing",
        "number": "06",
        "name": "Scholarly Research & Publishing",
        "description": "Global scientific citation indexing, digital library preservation, and preprint review repositories.",
        "specializations": [
          "Global Scientific Citation Indexes",
          "Digital Object Identifier (DOI) Engines",
          "Automated Plagiarism Detection",
          "Preprint Rapid Peer Review Servers",
          "Open-Science Data Depositories",
          "Scholarly Archive Preservation"
        ]
      }
    ]
  },
  {
    "id": "media",
    "spreadIndex": 13,
    "industryIndex": "12",
    "title": "Media & Entertainment",
    "subtitle": "Broadcasting, Gaming & Production",
    "profiles": "1,490+",
    "heroImage": "assets/images/sector-media.jpg",
    "colorIdentity": {
      "themeName": "Cinematic Crimson + Deep Black",
      "primaryHex": "#380008",
      "secondaryHex": "#E50914",
      "accentHex": "#FF4D6D",
      "bgDark": "#120003",
      "paperBg": "#FAF8F8",
      "borderSubtle": "rgba(229, 9, 20, 0.28)",
      "cmykPrimary": "C:25 M:100 Y:90 K:55",
      "cmykSecondary": "C:0 M:100 Y:90 K:0",
      "pantoneMatch": "PANTONE 187 C / PANTONE 185 C"
    },
    "curatorialIntro": "The myth-making, audiovisual transmission, and cultural commons of humankind. Media & Entertainment commands real-time LED volume virtual production stages, deterministic multiplayer simulation netcode, spatial 3D Dolby audio synthesis, and cryptographic journalistic provenance. It commands global attention, cultural identity, and creative expression.",
    "macroMetrics": [
      {
        "label": "CREATIVE ATTENTION ECONOMY",
        "value": "$3.4 TRILLION"
      },
      {
        "label": "CLASSIFIED CATEGORIES",
        "value": "06 CORE DOMAINS"
      },
      {
        "label": "SPECIALIZATION NICHES",
        "value": "36 SUB-SECTORS"
      }
    ],
    "categories": [
      {
        "id": "med-broadcast",
        "number": "01",
        "name": "Digital Broadcasting & Streaming",
        "description": "Ultra-low latency live video streaming, spatial audio codecs, and edge content distribution networks.",
        "specializations": [
          "Sub-Second Live Video Streaming",
          "Spatial 3D Audio Multi-Channel",
          "Multi-CDN Traffic Balancing",
          "Dynamic SSAI Ad Insertion",
          "4K HDR Real-Time Edge Transcoding",
          "Digital Rights Management (DRM)"
        ]
      },
      {
        "id": "med-vfx",
        "number": "02",
        "name": "Virtual Production & VFX Studios",
        "description": "Real-time in-camera visual effects with LED volumes, optical motion capture, and neural rendering.",
        "specializations": [
          "LED Volume In-Camera VFX Stages",
          "Optical Full-Body Motion Capture",
          "Neural Radiance Field (NeRF) Scans",
          "Unreal Engine Virtual Sets",
          "Cloud Rendering Pipeline Farms",
          "Photorealistic Facial Rigging"
        ]
      },
      {
        "id": "med-gaming",
        "number": "03",
        "name": "Interactive Gaming & Game Engines",
        "description": "Real-time 3D physics engines, multiplayer server netcode, cloud gaming arrays, and esports platforms.",
        "specializations": [
          "Multiplayer Deterministic Netcode",
          "Procedural World Generation Engines",
          "Cloud Gaming Server Racks",
          "Esports Tournament Broadcast Feeds",
          "Physically-Based Rendering Shaders",
          "Anti-Cheat Behavioral Systems"
        ]
      },
      {
        "id": "med-music",
        "number": "04",
        "name": "Music Technology & Sound Engineering",
        "description": "Automated mastering algorithms, spatial audio workstations, and international royalty distribution rails.",
        "specializations": [
          "Algorithmic Audio Mastering",
          "Spatial Dolby Atmos Mixing Suites",
          "Automated Global Royalty Splits",
          "Synthesizer DSP Modeling",
          "Digital Audio Workstation (DAW) APIs",
          "Acoustic Room Calibration"
        ]
      },
      {
        "id": "med-publishing",
        "number": "05",
        "name": "Editorial Journalism & Publishing",
        "description": "Headless newsroom publishing systems, multi-format syndication, and cryptographic fact verification.",
        "specializations": [
          "Headless Multi-Format Newsroom CMS",
          "Wire Service Syndication Pipelines",
          "Cryptographic Content Provenance",
          "Dynamic Metered Paywall Models",
          "Automated Fact-Checking Graphs",
          "Newsletter High-Volume Dispatch"
        ]
      },
      {
        "id": "med-creative",
        "number": "06",
        "name": "Creative Tools & Digital Assets",
        "description": "Generative vector artwork platforms, non-linear video editors, and 3D asset marketplace ecosystems.",
        "specializations": [
          "Generative Vector Illustration AI",
          "Collaborative Cloud Video NLE",
          "Photogrammetry 3D Asset Scanners",
          "Typeface Foundry Font Engines",
          "Color Grading LUT Processing",
          "Stock Footage Royalty Clearing"
        ]
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.ALBUM_SPECIFICATIONS = ALBUM_SPECIFICATIONS;
  window.ALBUM_COVER = ALBUM_COVER;
  window.ALBUM_INTRO = ALBUM_INTRO;
  window.ALBUM_SPREADS = ALBUM_SPREADS;
  window.ALBUM_BACK_COVER = ALBUM_BACK_COVER;
}
