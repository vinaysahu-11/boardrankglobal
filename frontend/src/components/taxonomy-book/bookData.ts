export type TaxonomySubcategory = {
  name: string;
  specializations: string[];
};

export type TaxonomyCategory = {
  name: string;
  subcategories: TaxonomySubcategory[];
};

export type Industry = {
  name: string;
  color: string;
  accent: string;
  photo: string;
  description: string;
  themes: string[];
  taxonomy?: TaxonomyCategory[];
  photoCredit?: string;
};

export const industries: Industry[] = [
  { name: 'Technology', color: '#082d41', accent: '#73e4ee', photo: '/assets/images/sector-technology.jpg', description: 'Advanced computing architectures, semiconductors, autonomous intelligence and global network fabrics.', themes: ['Artificial Intelligence', 'Robotics & Automation', 'Semiconductors & Silicon', 'Cloud & Quantum Computing'] },
  { name: 'Manufacturing', color: '#34312d', accent: '#f39a55', photo: '/assets/images/sector-manufacturing.jpg', description: 'Precision industrial fabrication, aerospace assembly lines, automated supply chains and advanced metallurgy.', themes: ['Aerospace & Defense', 'Automotive & Clean Mobility', 'Heavy Industrial Equipment', 'Precision Machining & Tooling'] },
  { name: 'Software', color: '#312049', accent: '#c4adee', photo: '/assets/images/sector-software.jpg', description: 'Mission-critical enterprise software, database engines, developer toolchains and operational applications.', themes: ['Enterprise Cloud Infrastructure', 'Developer Tooling & DevOps', 'Data Architecture & Vector Systems', 'Collaboration & Productivity'] },
  { name: 'Services', color: '#50232e', accent: '#e2c9a3', photo: '/assets/images/sector-services.jpg', description: 'International management consulting, cross-border legal institutions, corporate auditing and strategic advisory.', themes: ['Strategy & Management Consulting', 'Legal & International Compliance', 'Audit, Tax & Risk Advisory', 'Executive Talent & Human Capital'] },
  { name: 'Retail', color: '#a54035', accent: '#fff1d5', photo: '/assets/images/sector-retail.jpg', description: 'International consumer marketplaces, omnichannel fulfillment, direct-to-consumer networks and luxury brands.', themes: ['E-Commerce Platforms & Infrastructure', 'Automated Fulfillment & Logistics', 'Luxury Goods & Haute Horlogerie', 'Omnichannel & Connected Store'] },
  { name: 'Finance', color: '#123f33', accent: '#e7cd83', photo: '/assets/images/sector-finance.jpg', description: 'Tier-one institutional banking, fintech infrastructure, sovereign wealth, venture capital and capital markets.', themes: ['Institutional Banking & Treasury', 'FinTech & Payments Infrastructure', 'Asset & Wealth Management', 'Capital Markets & Electronic Trading'] },
  { name: 'Healthcare', color: '#145357', accent: '#dcf3ee', photo: '/assets/images/sector-healthcare.jpg', description: 'Therapeutic biotechnology, robotic surgical systems, genomic sequencing laboratories and clinical technologies.', themes: ['Biotechnology & Gene Therapies', 'Robotic Surgery & Medical Devices', 'Genomics & Molecular Diagnostics', 'Digital Health & AI Diagnostics'] },
  { name: 'Agriculture', color: '#34432c', accent: '#d7c59c', photo: '/assets/images/sector-agriculture.jpg', description: 'Precision agronomy, automated harvest systems, controlled-environment vertical farming and regenerative soil science.', themes: ['AgTech & Precision Farming', 'Vertical Farming & Cleanrooms', 'Alternative Proteins & Fermentation', 'Crop Genetics & Seed Science'] },
  { name: 'Energy', color: '#172d42', accent: '#f3da66', photo: '/assets/images/sector-energy.jpg', description: 'Renewable power grids, green hydrogen synthesis, long-duration energy storage and industrial carbon capture.', themes: ['Solar & Photovoltaic Systems', 'Wind & Hydro Kinetic Power', 'Green Hydrogen & Synthetic Fuels', 'Long-Duration Energy Storage'] },
  { name: 'Logistics', color: '#173e5a', accent: '#d0dfe6', photo: '/assets/images/sector-logistics.jpg', description: 'Autonomous maritime freight, automated deepwater ports, intermodal rail logistics and cold-chain corridors.', themes: ['Maritime Freight & Smart Ports', 'Air Cargo & Charter Networks', 'Intermodal Rail & Autonomous Haulage', 'Robotic Warehousing & ASRS'] },
  { name: 'Education', color: '#49325f', accent: '#f5edda', photo: '/assets/images/sector-education.jpg', description: 'Higher education technologies, institutional research networks, workforce transformation and credential systems.', themes: ['Higher Education & Academic Portals', 'Adaptive Learning & EdTech Suites', 'Executive & Workforce Reskilling', 'Verifiable Credentials & Badges'] },
  { name: 'Media & Entertainment', color: '#4f1b27', accent: '#efb8a9', photo: '/assets/images/sector-media.jpg', description: 'Digital broadcasting networks, real-time virtual production, spatial audio and interactive publishing platforms.', themes: ['Digital Broadcasting & Streaming', 'Virtual Production & VFX Studios', 'Interactive Gaming & Game Engines', 'Music Technology & Sound Engineering'] },
  {
    name: 'Mining & Quarrying',
    color: '#42494b',
    accent: '#c87b50',
    photo: '/assets/images/sector-mining.jpg',
    photoCredit: 'Photo: Marcin Wichary · Wikimedia Commons · CC BY 2.0',
    description: 'The extraction of mineral resources, dimension stone and aggregates, supported by exploration, mine services and responsible site rehabilitation.',
    themes: ['Mineral Extraction', 'Quarrying & Stone', 'Mining Services', 'Mine Safety & Rehabilitation'],
    taxonomy: [
      { name: 'Mineral Extraction', subcategories: [
        { name: 'Surface Mining', specializations: ['Open-pit operations', 'Strip and placer mining'] },
        { name: 'Underground Mining', specializations: ['Hard-rock extraction', 'Longwall operations'] },
      ] },
      { name: 'Quarrying & Stone', subcategories: [
        { name: 'Dimension Stone', specializations: ['Granite and marble blocks', 'Architectural stone'] },
        { name: 'Construction Aggregates', specializations: ['Crushed stone', 'Sand and gravel'] },
      ] },
      { name: 'Mining Services', subcategories: [
        { name: 'Exploration & Survey', specializations: ['Geological prospecting', 'Resource estimation'] },
        { name: 'Drilling & Blasting', specializations: ['Mineral drilling', 'Controlled blasting'] },
      ] },
      { name: 'Mine Safety & Rehabilitation', subcategories: [
        { name: 'Operational Safety', specializations: ['Ground control', 'Emergency response'] },
        { name: 'Closure & Restoration', specializations: ['Tailings stabilization', 'Land rehabilitation'] },
      ] },
    ],
  },
  {
    name: 'Water Supply & Waste Management',
    color: '#173f49',
    accent: '#62b8b7',
    photo: '/assets/images/sector-water-management.jpg',
    photoCredit: 'Photo: Parakenter · Wikimedia Commons · CC BY-SA 4.0',
    description: 'Public and industrial water systems spanning drinking-water treatment, wastewater services, materials recovery and environmental stewardship.',
    themes: ['Water Collection & Treatment', 'Wastewater & Sewerage', 'Waste Collection & Processing', 'Resource Recovery'],
    taxonomy: [
      { name: 'Water Collection & Treatment', subcategories: [
        { name: 'Potable Water Systems', specializations: ['Surface and groundwater abstraction', 'Filtration and disinfection'] },
        { name: 'Water Network Operations', specializations: ['Distribution mains', 'Metering and leak detection'] },
      ] },
      { name: 'Wastewater & Sewerage', subcategories: [
        { name: 'Sewerage Collection', specializations: ['Public sewer networks', 'Pumping stations'] },
        { name: 'Wastewater Treatment', specializations: ['Biological treatment', 'Advanced treatment and reuse'] },
      ] },
      { name: 'Waste Collection & Processing', subcategories: [
        { name: 'Collection & Transfer', specializations: ['Municipal waste collection', 'Transfer stations'] },
        { name: 'Treatment & Disposal', specializations: ['Landfill operations', 'Hazardous waste treatment'] },
      ] },
      { name: 'Resource Recovery', subcategories: [
        { name: 'Materials Recovery', specializations: ['Sorting and recycling', 'Organics recovery'] },
        { name: 'Environmental Services', specializations: ['Industrial effluent treatment', 'Contaminated water remediation'] },
      ] },
    ],
  },
  {
    name: 'Construction',
    color: '#3d4244',
    accent: '#ed8739',
    photo: '/assets/images/sector-construction.jpg',
    description: 'The planning and delivery of buildings, civil infrastructure and industrial facilities, alongside specialist trades and construction systems.',
    themes: ['Building Construction', 'Civil Infrastructure', 'Industrial & Utility Projects', 'Specialist Trades & Materials'],
    taxonomy: [
      { name: 'Building Construction', subcategories: [
        { name: 'Residential Buildings', specializations: ['Single-family housing', 'Multi-unit residential'] },
        { name: 'Commercial & Institutional', specializations: ['Offices and retail', 'Schools and healthcare facilities'] },
      ] },
      { name: 'Civil Infrastructure', subcategories: [
        { name: 'Transport Infrastructure', specializations: ['Roads and bridges', 'Rail and transit systems'] },
        { name: 'Civil Works', specializations: ['Earthworks and foundations', 'Coastal and flood protection'] },
      ] },
      { name: 'Industrial & Utility Projects', subcategories: [
        { name: 'Industrial Facilities', specializations: ['Manufacturing plants', 'Warehousing and distribution buildings'] },
        { name: 'Utility Infrastructure', specializations: ['Power facilities', 'Water and wastewater facilities'] },
      ] },
      { name: 'Specialist Trades & Materials', subcategories: [
        { name: 'Structural Systems', specializations: ['Concrete construction', 'Structural steel erection'] },
        { name: 'Building Envelope & Fit-out', specializations: ['Roofing and cladding', 'Interior installation'] },
      ] },
    ],
  },
  {
    name: 'Accommodation & Food Services',
    color: '#4a202d',
    accent: '#d3b27a',
    photo: '/assets/images/sector-accommodation.jpg',
    description: 'Guest accommodation, dining and beverage businesses delivering hospitality experiences for travelers, communities and events.',
    themes: ['Accommodation Services', 'Restaurants & Dining', 'Food & Beverage Services', 'Events & Guest Experiences'],
    taxonomy: [
      { name: 'Accommodation Services', subcategories: [
        { name: 'Hotels & Serviced Stays', specializations: ['Hotels and inns', 'Serviced apartments'] },
        { name: 'Resorts & Short-stay', specializations: ['Resorts and lodges', 'Hostels and guesthouses'] },
      ] },
      { name: 'Restaurants & Dining', subcategories: [
        { name: 'Restaurants', specializations: ['Full-service dining', 'Quick-service restaurants'] },
        { name: 'Catering & Contract Dining', specializations: ['Event catering', 'Workplace and institutional dining'] },
      ] },
      { name: 'Food & Beverage Services', subcategories: [
        { name: 'Beverage Venues', specializations: ['Bars and pubs', 'Coffee and tea houses'] },
        { name: 'Prepared Food Outlets', specializations: ['Bakeries and confectionery', 'Takeaway and delivery kitchens'] },
      ] },
      { name: 'Events & Guest Experiences', subcategories: [
        { name: 'Hospitality Events', specializations: ['Meetings and conferences', 'Banquet services'] },
        { name: 'Guest Services', specializations: ['Concierge and reception', 'In-stay guest experience'] },
      ] },
    ],
  },
  {
    name: 'Real Estate',
    color: '#5d5147',
    accent: '#c8a77a',
    photo: '/assets/images/sector-real-estate.jpg',
    description: 'Property development, transactions and operations across residential, commercial, industrial and specialist real estate.',
    themes: ['Property Development', 'Property Transactions', 'Property Operations', 'Specialist Real Estate'],
    taxonomy: [
      { name: 'Property Development', subcategories: [
        { name: 'Residential Development', specializations: ['Single-family communities', 'Multi-family projects'] },
        { name: 'Commercial Development', specializations: ['Office and retail projects', 'Industrial and logistics properties'] },
      ] },
      { name: 'Property Transactions', subcategories: [
        { name: 'Agency & Brokerage', specializations: ['Residential brokerage', 'Commercial brokerage'] },
        { name: 'Investment & Valuation', specializations: ['Property investment', 'Appraisal and valuation'] },
      ] },
      { name: 'Property Operations', subcategories: [
        { name: 'Property Management', specializations: ['Residential property management', 'Commercial property management'] },
        { name: 'Leasing & Occupancy', specializations: ['Tenant representation', 'Lease administration'] },
      ] },
      { name: 'Specialist Real Estate', subcategories: [
        { name: 'Land & Infrastructure Assets', specializations: ['Land assembly and planning', 'Infrastructure property'] },
        { name: 'Special-purpose Property', specializations: ['Hospitality real estate', 'Healthcare and life-science property'] },
      ] },
    ],
  },
  {
    name: 'Professional, Scientific & Technical Activities',
    color: '#302a4d',
    accent: '#b8a6d9',
    photo: '/assets/images/sector-professional-technical.jpg',
    description: 'Knowledge-intensive practices applying specialized expertise in design, engineering, research, testing and technical consulting.',
    themes: ['Architecture & Engineering', 'Scientific Research', 'Design & Technical Consulting', 'Testing & Surveying'],
    taxonomy: [
      { name: 'Architecture & Engineering', subcategories: [
        { name: 'Architecture & Planning', specializations: ['Building architecture', 'Urban and spatial planning'] },
        { name: 'Engineering Design', specializations: ['Civil and structural engineering', 'Mechanical and systems engineering'] },
      ] },
      { name: 'Scientific Research', subcategories: [
        { name: 'Natural Sciences', specializations: ['Physical and chemical research', 'Earth and environmental science'] },
        { name: 'Applied Research', specializations: ['Industrial research laboratories', 'Materials and process research'] },
      ] },
      { name: 'Design & Technical Consulting', subcategories: [
        { name: 'Specialist Design', specializations: ['Industrial and product design', 'Graphic and communication design'] },
        { name: 'Technical Advisory', specializations: ['Engineering project advisory', 'Scientific and technical consulting'] },
      ] },
      { name: 'Testing & Surveying', subcategories: [
        { name: 'Testing & Certification', specializations: ['Materials testing', 'Product inspection and certification'] },
        { name: 'Surveying & Mapping', specializations: ['Land and geospatial surveying', 'Hydrographic surveying'] },
      ] },
    ],
  },
  {
    name: 'Administrative & Support Services',
    color: '#2c3f4e',
    accent: '#aebfc6',
    photo: '/assets/images/sector-administrative-support.jpg',
    description: 'Operational support organizations supplying administrative, staffing, facility, security and business-process services.',
    themes: ['Office Administration', 'Employment Services', 'Facilities Support', 'Business Operations Support'],
    taxonomy: [
      { name: 'Office Administration', subcategories: [
        { name: 'Administrative Services', specializations: ['Office administration', 'Document and records management'] },
        { name: 'Business Process Support', specializations: ['Contact centers', 'Back-office processing'] },
      ] },
      { name: 'Employment Services', subcategories: [
        { name: 'Recruitment Services', specializations: ['Permanent placement', 'Executive search'] },
        { name: 'Workforce Provision', specializations: ['Temporary staffing', 'Contract labor services'] },
      ] },
      { name: 'Facilities Support', subcategories: [
        { name: 'Building Services', specializations: ['Commercial cleaning', 'Building operations support'] },
        { name: 'Site & Grounds Services', specializations: ['Landscape maintenance', 'Integrated facility services'] },
      ] },
      { name: 'Business Operations Support', subcategories: [
        { name: 'Security Services', specializations: ['Manned guarding', 'Monitoring and alarm response'] },
        { name: 'Business Support Services', specializations: ['Mail and fulfillment services', 'Meeting and event support'] },
      ] },
    ],
  },
  {
    name: 'Public Administration & Defence',
    color: '#1b2c40',
    accent: '#c4a35f',
    photo: '/assets/images/sector-public-administration.jpg',
    description: 'Institutions carrying out public governance, justice, civil protection, national defence and regulatory responsibilities.',
    themes: ['Government Administration', 'Justice & Public Safety', 'Defence & Security', 'Public Policy & Regulation'],
    taxonomy: [
      { name: 'Government Administration', subcategories: [
        { name: 'Executive Administration', specializations: ['National government departments', 'Regional and local administration'] },
        { name: 'Public Service Operations', specializations: ['Civil registration', 'Public program administration'] },
      ] },
      { name: 'Justice & Public Safety', subcategories: [
        { name: 'Justice Institutions', specializations: ['Courts and tribunals', 'Correctional administration'] },
        { name: 'Civil Protection', specializations: ['Emergency management', 'Fire and rescue services'] },
      ] },
      { name: 'Defence & Security', subcategories: [
        { name: 'National Defence', specializations: ['Armed forces administration', 'Defence procurement'] },
        { name: 'Security & Resilience', specializations: ['Border and protective services', 'National resilience planning'] },
      ] },
      { name: 'Public Policy & Regulation', subcategories: [
        { name: 'Policy Institutions', specializations: ['Public policy coordination', 'Legislative administration'] },
        { name: 'Regulatory Agencies', specializations: ['Economic regulation', 'Public standards and compliance'] },
      ] },
    ],
  },
  {
    name: 'Arts, Sports & Recreation',
    color: '#451f2d',
    accent: '#d34a68',
    photo: '/assets/images/sector-arts-sports.jpg',
    description: 'Organizations creating and presenting cultural work, operating sports and fitness programs, and managing recreation venues.',
    themes: ['Creative & Performing Arts', 'Sports & Fitness', 'Cultural Heritage', 'Recreation & Venues'],
    taxonomy: [
      { name: 'Creative & Performing Arts', subcategories: [
        { name: 'Live Performance', specializations: ['Theatre and dance', 'Live music performance'] },
        { name: 'Visual & Literary Arts', specializations: ['Visual arts and exhibitions', 'Literary and independent arts'] },
      ] },
      { name: 'Sports & Fitness', subcategories: [
        { name: 'Professional & Organized Sport', specializations: ['Sports clubs and leagues', 'Competition and event operations'] },
        { name: 'Fitness & Participation', specializations: ['Fitness centers', 'Coaching and recreation programs'] },
      ] },
      { name: 'Cultural Heritage', subcategories: [
        { name: 'Museums & Collections', specializations: ['Museums and galleries', 'Archives and collections'] },
        { name: 'Heritage Sites', specializations: ['Historic sites', 'Heritage conservation organizations'] },
      ] },
      { name: 'Recreation & Venues', subcategories: [
        { name: 'Recreation Facilities', specializations: ['Amusement and theme parks', 'Indoor recreation centers'] },
        { name: 'Public Leisure', specializations: ['Community recreation facilities', 'Outdoor leisure operations'] },
      ] },
    ],
  },
  {
    name: 'International Organizations & Household Activities',
    color: '#292d49',
    accent: '#b0b18a',
    photo: '/assets/images/sector-international-household.jpg',
    photoCredit: 'Photo: Steve Cadman · Wikimedia Commons · CC BY-SA 2.0',
    description: 'A distinct classification for international bodies and missions, alongside household employment and production for households’ own use.',
    themes: ['International Organizations', 'International Missions', 'Household Employment', 'Household Production'],
    taxonomy: [
      { name: 'International Organizations', subcategories: [
        { name: 'Intergovernmental Bodies', specializations: ['United Nations system organizations', 'Regional intergovernmental institutions'] },
        { name: 'International Institutions', specializations: ['Multilateral development bodies', 'International treaty organizations'] },
      ] },
      { name: 'International Missions', subcategories: [
        { name: 'Diplomatic Representation', specializations: ['Embassies and permanent missions', 'Consular missions'] },
        { name: 'Multilateral Programs', specializations: ['International cooperation programs', 'Field and observer missions'] },
      ] },
      { name: 'Household Employment', subcategories: [
        { name: 'Domestic Personnel', specializations: ['Household cleaning and maintenance', 'In-home cooking and service'] },
        { name: 'Household Care Support', specializations: ['In-home childcare', 'In-home personal assistance'] },
      ] },
      { name: 'Household Production', subcategories: [
        { name: 'Goods for Own Use', specializations: ['Subsistence crop and animal production', 'Household food preservation'] },
        { name: 'Services for Own Use', specializations: ['Household repair and upkeep', 'Unpaid household services'] },
      ] },
    ],
  },
];

export const totalSpreads = industries.length + 2;
export const backCoverSpread = totalSpreads - 1;

// One shared palette for page ink, navigation and the light spilling from the spine.
export const spreadThemes = [
  { ink: '#40553a', glow: '#82945B', paper: '#f4f5e9', primary: '#306044', secondary: '#447957', accent: '#82945B', highlight: '#A5B58A', label: 'Framework / forest green' },
  { ink: '#315F7B', glow: '#21B9D2', paper: '#f0f5f8', primary: '#203750', secondary: '#2A4B67', accent: '#21B9D2', highlight: '#70D9E7', label: 'Technology / midnight blue' },
  { ink: '#805B3D', glow: '#C47735', paper: '#f8f3ed', primary: '#494842', secondary: '#60584D', accent: '#C47735', highlight: '#D99A60', label: 'Manufacturing / graphite' },
  { ink: '#5D4B7F', glow: '#8B63C7', paper: '#f4f1f8', primary: '#3E3154', secondary: '#574275', accent: '#8B63C7', highlight: '#B29BDD', label: 'Software / deep violet' },
  { ink: '#754B62', glow: '#B97868', paper: '#f8f1f4', primary: '#593541', secondary: '#774653', accent: '#B97868', highlight: '#D9B889', label: 'Services / burgundy' },
  { ink: '#914B3E', glow: '#D05A45', paper: '#faf1ed', primary: '#603630', secondary: '#83443D', accent: '#D05A45', highlight: '#EA8A69', label: 'Retail / dark coral' },
  { ink: '#35634B', glow: '#B99A53', paper: '#f0f5f0', primary: '#2E5747', secondary: '#3A7058', accent: '#B99A53', highlight: '#D4BD7A', label: 'Finance / deep emerald' },
  { ink: '#32696B', glow: '#48A79B', paper: '#eff6f5', primary: '#2D5859', secondary: '#39716E', accent: '#48A79B', highlight: '#86C4B2', label: 'Healthcare / medical teal' },
  { ink: '#526B3E', glow: '#82945B', paper: '#f2f5ec', primary: '#306044', secondary: '#447957', accent: '#82945B', highlight: '#A5B58A', label: 'Agriculture / forest green' },
  { ink: '#806B2E', glow: '#D2A347', paper: '#f8f5e9', primary: '#2E4560', secondary: '#3C5C7C', accent: '#D2A347', highlight: '#E8C878', label: 'Energy / deep navy' },
  { ink: '#3E6280', glow: '#8296A8', paper: '#eff4f7', primary: '#294A62', secondary: '#376483', accent: '#8296A8', highlight: '#B3C0C9', label: 'Logistics / ocean blue' },
  { ink: '#554F80', glow: '#9279C1', paper: '#f3f2f7', primary: '#443560', secondary: '#584581', accent: '#9279C1', highlight: '#B5A3D4', label: 'Education / royal purple' },
  { ink: '#814B5A', glow: '#C44A58', paper: '#f8f1f2', primary: '#4C2C37', secondary: '#703746', accent: '#C44A58', highlight: '#D97878', label: 'Media / cinematic crimson' },
  { ink: '#555e60', glow: '#bd7953', paper: '#f2f1ed', primary: '#373e40', secondary: '#50585a', accent: '#bd7953', highlight: '#d2a27f', label: 'Mining / stone, copper and charcoal' },
  { ink: '#376771', glow: '#4aa9aa', paper: '#eff5f4', primary: '#173d47', secondary: '#2b5b67', accent: '#4aa9aa', highlight: '#afc6c7', label: 'Water / deep aqua and slate' },
  { ink: '#4d5355', glow: '#ed8739', paper: '#f4f2ee', primary: '#333a3d', secondary: '#4e575b', accent: '#ed8739', highlight: '#e6b07b', label: 'Construction / concrete and safety orange' },
  { ink: '#764354', glow: '#c49b6a', paper: '#f7f1e7', primary: '#49202d', secondary: '#6d3543', accent: '#c49b6a', highlight: '#e4d1aa', label: 'Accommodation / burgundy and champagne' },
  { ink: '#6a5a49', glow: '#c4a77b', paper: '#f5f1e9', primary: '#51483e', secondary: '#746353', accent: '#c4a77b', highlight: '#ddd0b7', label: 'Real estate / sandstone and architectural beige' },
  { ink: '#554e78', glow: '#aa9ccf', paper: '#f2f0f5', primary: '#302a4d', secondary: '#4c456a', accent: '#aa9ccf', highlight: '#c6bfd7', label: 'Professional & scientific / violet and platinum' },
  { ink: '#486171', glow: '#9eafb7', paper: '#f0f3f4', primary: '#2b3d4b', secondary: '#455d6b', accent: '#9eafb7', highlight: '#c4ced0', label: 'Administrative support / steel blue and silver' },
  { ink: '#34465d', glow: '#b79b5e', paper: '#f4f1e7', primary: '#1b2c40', secondary: '#30465f', accent: '#b79b5e', highlight: '#e1d4ae', label: 'Public administration / navy and antique gold' },
  { ink: '#784054', glow: '#c43f64', paper: '#f5eef0', primary: '#451f2d', secondary: '#6b3044', accent: '#c43f64', highlight: '#d891a2', label: 'Arts & recreation / crimson and magenta' },
  { ink: '#4c5068', glow: '#9d9f7d', paper: '#f1f1ef', primary: '#292d49', secondary: '#464a63', accent: '#9d9f7d', highlight: '#c8c9b8', label: 'International & household / indigo and olive' },
  { ink: '#40553A', glow: '#82945B', paper: '#f5f4e8', primary: '#306044', secondary: '#447957', accent: '#82945B', highlight: '#A5B58A', label: 'The complete perspective / forest green' },
];

export const supportingPhotos = [
  ['/assets/images/sector-technology.jpg', '/assets/images/editorial-global-business.jpg'],
  ['/assets/images/sector-manufacturing.jpg', '/assets/images/editorial-global-business.jpg'],
  ['/assets/images/sector-software.jpg', '/assets/images/editorial-global-business.jpg'],
  ['/assets/images/sector-services.jpg', '/assets/images/editorial-global-business.jpg'],
  ['/assets/images/sector-retail.jpg', '/assets/images/editorial-global-business.jpg'],
  ['/assets/images/sector-finance.jpg', '/assets/images/editorial-global-business.jpg'],
  ['/assets/images/sector-healthcare.jpg', '/assets/images/editorial-global-business.jpg'],
  ['/assets/images/sector-agriculture.jpg', '/assets/images/editorial-global-business.jpg'],
  ['/assets/images/sector-energy.jpg', '/assets/images/editorial-global-business.jpg'],
  ['/assets/images/sector-logistics.jpg', '/assets/images/editorial-global-business.jpg'],
  ['/assets/images/sector-education.jpg', '/assets/images/editorial-global-business.jpg'],
  ['/assets/images/sector-media.jpg', '/assets/images/editorial-global-business.jpg'],
];

export const pageRecords = Array.from({ length: totalSpreads }, (_, spread) =>
  [0, 1].map(side => ({
    id: `brg-page-${spread * 2 + side + 1}`,
    pageNumber: spread * 2 + side + 1,
    spreadId: `brg-spread-${spread}`,
    frontContent: side === 0 ? 'editorial' : 'structure',
    backContent: side === 0 ? 'structure' : 'editorial',
  })),
).flat();
