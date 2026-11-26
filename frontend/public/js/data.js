/**
 * BOARDRANK GLOBAL - Data Layer
 * Contains business directory demo dataset, 12 economic categories,
 * sovereign country metadata, and ranking tier models.
 * Strictly marked as DEMO DATA for transparent illustrative purposes.
 */

// 3-Level Global Business Taxonomy Architecture
export const TAXONOMY_SECTORS = [
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

// Preserved and Expanded Categories Array (Preserves existing IDs & backward-compatibility)
export const CATEGORIES = [
  ...TAXONOMY_SECTORS,
  // Legacy entity categories preserved for database/filter compatibility
  {
    id: 'companies',
    index: 'SEC-LEGACY-01',
    title: 'Companies',
    name: 'Companies',
    subtitle: 'Global Conglomerates & Titans',
    description: 'Multinational enterprises, industrial conglomerates, and diversified corporate holdings operating across worldwide borders.',
    profiles: '3,840+',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 7v14M21 7v14M6 7V3h12v4M9 11h2M9 15h2M13 11h2M13 15h2"/></svg>`
  },
  {
    id: 'startups',
    index: 'SEC-LEGACY-02',
    title: 'Startups',
    name: 'Startups',
    subtitle: 'Next-Gen Disruptors & Innovators',
    description: 'High-growth technology ventures from seed stage to series B, pioneering breakthroughs in AI, compute, and deep science.',
    profiles: '2,920+',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v8M4.93 10.93l5.66 5.66M2 18l4-4 4 4M20 18l-4-4-4 4M19.07 10.93l-5.66 5.66M12 18v4"/></svg>`
  },
  {
    id: 'brands',
    index: 'SEC-LEGACY-03',
    title: 'Brands',
    name: 'Brands',
    subtitle: 'Consumer Icons & Digital Pioneers',
    description: 'Direct-to-consumer innovators, heritage luxury houses, and cultural powerhouses commanding international consumer loyalty.',
    profiles: '1,750+',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`
  },
  {
    id: 'products',
    index: 'SEC-LEGACY-04',
    title: 'Products',
    name: 'Products',
    subtitle: 'Hardware, Compute & Devices',
    description: 'Advanced physical goods, consumer robotics, spatial computing gear, next-gen mobility, and intelligent hardware.',
    profiles: '1,420+',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></svg>`
  }
];

export const DEMO_LEADERBOARD = [
  {
    rank: 1,
    name: 'Apex Robotics',
    symbol: 'APX',
    logoBg: '#1D2A18',
    logoColor: '#C7FF4A',
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
    logoBg: '#14232C',
    logoColor: '#6DE7FF',
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
    logoBg: '#2A1822',
    logoColor: '#FF6DBB',
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
    logoBg: '#262415',
    logoColor: '#FFE066',
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
    logoBg: '#18242A',
    logoColor: '#4DEEEA',
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
    logoBg: '#1A1828',
    logoColor: '#B692FE',
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
    logoBg: '#281F14',
    logoColor: '#FFB84D',
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
    logoBg: '#17271E',
    logoColor: '#58F59C',
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
    logoBg: '#261C14',
    logoColor: '#FFA366',
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
    logoBg: '#142028',
    logoColor: '#6DD4FF',
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
    logoBg: '#1B2424',
    logoColor: '#72FFD6',
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
    logoBg: '#241D17',
    logoColor: '#E6C280',
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
  }
];

export const SOVEREIGN_MARKETS = [
  { code: 'US', name: 'United States', flag: '🇺🇸', region: 'Americas', activeProfiles: '1,840+', topSector: 'Technology & AI', leadBrand: 'Apex Robotics', avgReach: '98.4%' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', region: 'Europe', activeProfiles: '890+', topSector: 'Fintech & DeepTech', leadBrand: 'Vanguard Quantum', avgReach: '95.1%' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', region: 'Europe', activeProfiles: '940+', topSector: 'Industrial & Cloud', leadBrand: 'Aetherion Cloud Systems', avgReach: '94.6%' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', region: 'Asia-Pacific', activeProfiles: '820+', topSector: 'Clean Energy & Robotics', leadBrand: 'Nippon Clean Energy', avgReach: '93.8%' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬', region: 'Asia-Pacific', activeProfiles: '610+', topSector: 'Autonomous Logistics', leadBrand: 'Kinetix Global Logistics', avgReach: '96.2%' },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪', region: 'Middle East', activeProfiles: '540+', topSector: 'Institutional FinTech', leadBrand: 'Emirates FinTech Gateway', avgReach: '94.0%' },
  { code: 'CH', name: 'Switzerland', flag: '🇨🇭', region: 'Europe', activeProfiles: '480+', topSector: 'Biotech & Private Banking', leadBrand: 'Sovereign Health Labs', avgReach: '95.9%' },
  { code: 'IN', name: 'India', flag: '🇮🇳', region: 'Asia-Pacific', activeProfiles: '1,120+', topSector: 'Edge AI & Cloud SaaS', leadBrand: 'Bharat NeuroSystems', avgReach: '92.3%' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', region: 'Americas', activeProfiles: '430+', topSector: 'AgTech & Renewables', leadBrand: 'TerraVerde Biosystems', avgReach: '90.7%' },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪', region: 'Europe', activeProfiles: '360+', topSector: 'DeepSea & Renewable', leadBrand: 'Nordic Oceanics', avgReach: '91.4%' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', region: 'Asia-Pacific', activeProfiles: '490+', topSector: 'Bio-Polymers & Mining Tech', leadBrand: 'Austral Synthetics', avgReach: '91.8%' },
  { code: 'FR', name: 'France', flag: '🇫🇷', region: 'Europe', activeProfiles: '730+', topSector: 'Luxury & Aerospace', leadBrand: 'Lumière Haute Horlogerie', avgReach: '93.2%' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', region: 'Americas', activeProfiles: '580+', topSector: 'CleanTech & Computing', leadBrand: 'Hyperion BioFuels', avgReach: '92.0%' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷', region: 'Asia-Pacific', activeProfiles: '690+', topSector: 'Semiconductors & Batteries', leadBrand: 'Solum Matrix', avgReach: '94.5%' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱', region: 'Europe', activeProfiles: '410+', topSector: 'Lithography & Agritech', leadBrand: 'VanderMeer Optical', avgReach: '93.7%' },
  { code: 'IL', name: 'Israel', flag: '🇮🇱', region: 'Middle East', activeProfiles: '520+', topSector: 'Cybersecurity & Vision AI', leadBrand: 'CipherCore Systems', avgReach: '94.9%' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦', region: 'Middle East', activeProfiles: '380+', topSector: 'Giga-Projects & Solar', leadBrand: 'Neom Horizon Energy', avgReach: '91.2%' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦', region: 'Africa', activeProfiles: '290+', topSector: 'Mining Telemetry & Fintech', leadBrand: 'Veldt Dynamics', avgReach: '88.6%' },
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬', region: 'Africa', activeProfiles: '340+', topSector: 'Payment Rails & Agri-Logistics', leadBrand: 'Lagos HyperNet', avgReach: '89.1%' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽', region: 'Americas', activeProfiles: '370+', topSector: 'Nearshore Manufacturing', leadBrand: 'Azteca Automata', avgReach: '89.8%' }
];

export const SPONSOR_TIERS = [
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
