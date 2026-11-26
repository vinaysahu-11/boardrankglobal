/**
 * BOARDRANK GLOBAL - Geospatial Discovery Globe & Dynamic Live Business Visualizer
 * Built with pure Canvas2D vector mathematics, spherical coordinate projection,
 * and high-density geographical land boundary datasets.
 * 
 * Features:
 * - Real world geographical continent boundaries (North America, South America, Europe,
 *   Africa, Asia, Australia, Japan, UK, New Zealand, Greenland, etc.) - NOT random dots.
 * - 2,200+ accurate land dots converted to 3D Cartesian spherical coordinates.
 * - 10 Global Business Discovery Hubs (San Francisco, New York, London, Berlin, Dubai,
 *   Mumbai, Singapore, Tokyo, Sydney, São Paulo).
 * - Great-circle 3D elevated connection arcs with traveling photon pulses.
 * - Dynamic company & startup profile cards synchronized with Earth's horizontal rotation.
 * - Live animated connector lines drawn from floating profile cards to globe location markers.
 * - Interactive pointer drag-to-rotate with momentum inertia, touch support on mobile,
 *   auto-resume rotation, click-to-focus on hubs, and click-to-open company inspection drawer.
 * - Zero external library dependencies, 60 FPS performance, runs flawlessly on file:/// protocol.
 */

(function (root, factory) {
  const result = factory();
  if (typeof window !== 'undefined') {
    window.GeospatialDiscoveryGlobe = result;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.GeospatialDiscoveryGlobe = result;
  }
  if (typeof define === 'function' && define.amd) {
    define([], () => result);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = result;
  } else {
    root.GeospatialDiscoveryGlobe = result;
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // 1. Accurate Geographical Land Polygons (Longitude, Latitude)
  const WORLD_POLYGONS = [
    // North America (Continental US, Canada, Alaska, Mexico, Central America)
    [
      [-168, 66], [-165, 60], [-158, 58], [-150, 59], [-138, 59], [-130, 54],
      [-125, 50], [-124, 46], [-124, 38], [-120, 34], [-117, 32], [-115, 30],
      [-110, 23], [-106, 21], [-100, 19], [-95, 17], [-90, 16], [-84, 10],
      [-79, 9], [-77, 8], [-83, 14], [-88, 16], [-97, 26], [-94, 29],
      [-90, 30], [-85, 30], [-82, 30], [-80, 25], [-81, 28], [-81, 31],
      [-76, 35], [-74, 40], [-70, 42], [-66, 45], [-63, 46], [-60, 47],
      [-64, 50], [-56, 52], [-60, 58], [-66, 62], [-76, 64], [-80, 62],
      [-80, 52], [-86, 51], [-92, 53], [-94, 60], [-85, 65], [-90, 70],
      [-110, 72], [-120, 70], [-130, 69], [-141, 70], [-160, 71], [-168, 66]
    ],
    // Baja California
    [[-115, 32], [-110, 23], [-112, 24], [-114, 28], [-116, 32], [-115, 32]],
    // Greenland
    [[-52, 60], [-42, 60], [-34, 65], [-20, 70], [-18, 77], [-22, 82], [-35, 83], [-50, 82], [-60, 78], [-55, 70], [-52, 60]],
    // South America
    [
      [-77, 8], [-72, 11], [-62, 10], [-52, 5], [-44, -2], [-35, -5],
      [-35, -9], [-39, -14], [-41, -21], [-48, -28], [-53, -33], [-58, -38],
      [-65, -43], [-66, -54], [-74, -52], [-74, -44], [-71, -30], [-76, -14],
      [-81, -5], [-79, 2], [-77, 8]
    ],
    // Africa
    [
      [-6, 36], [0, 36], [11, 37], [25, 32], [33, 31], [35, 28], [34, 22], [43, 12],
      [51, 12], [45, 5], [41, -2], [40, -10], [35, -20], [33, -28], [26, -34], [18, -34],
      [12, -20], [12, -6], [9, 4], [3, 6], [-5, 5], [-12, 5], [-17, 11], [-17, 15],
      [-13, 20], [-13, 28], [-10, 30], [-6, 36]
    ],
    // Madagascar
    [[43, -12], [50, -12], [50, -25], [44, -25], [43, -12]],
    // Europe & Asia Mainland
    [
      [-9, 36], [-9, 43], [-1, 44], [-5, 48], [2, 51], [5, 54], [8, 55], [10, 58],
      [5, 62], [14, 68], [28, 71], [40, 68], [60, 70], [75, 73], [105, 78], [140, 72],
      [170, 67], [180, 65], [170, 60], [160, 55], [150, 59], [140, 53], [130, 43], [128, 38],
      [122, 30], [118, 22], [108, 14], [104, 10], [100, 7], [104, 1], [98, 8], [92, 16],
      [88, 22], [82, 16], [80, 8], [76, 12], [70, 22], [62, 25], [56, 26], [50, 30],
      [44, 40], [36, 42], [28, 41], [23, 38], [15, 40], [14, 45], [3, 43], [-3, 37], [-9, 36]
    ],
    // Italy boot
    [[8, 45], [12, 44], [16, 41], [18, 40], [16, 38], [14, 38], [12, 42], [8, 45]],
    // Scandinavia
    [[5, 58], [10, 58], [18, 56], [22, 60], [28, 65], [28, 71], [20, 71], [14, 68], [10, 64], [5, 62], [5, 58]],
    // British Isles (UK & Ireland)
    [[-10, 51], [-6, 50], [-1, 51], [1, 53], [-1, 58], [-4, 59], [-6, 58], [-10, 54], [-10, 51]],
    // Arabian Peninsula
    [[35, 28], [40, 30], [48, 30], [55, 27], [60, 22], [58, 16], [53, 16], [45, 12], [43, 13], [35, 28]],
    // Indian Subcontinent (distinct triangular peninsula)
    [[68, 24], [72, 21], [73, 16], [76, 10], [80, 8], [80, 13], [82, 16], [85, 20], [88, 22], [75, 30], [68, 24]],
    // Japan Archipelago
    [[130, 31], [132, 33], [136, 35], [140, 37], [142, 43], [145, 44], [141, 45], [139, 41], [135, 36], [130, 32], [130, 31]],
    // Australia
    [
      [113, -22], [114, -34], [121, -34], [130, -32], [137, -35], [140, -37],
      [150, -37], [153, -28], [150, -22], [146, -18], [142, -11], [136, -12],
      [131, -13], [128, -15], [123, -16], [116, -20], [113, -22]
    ],
    // New Zealand
    [[166, -46], [170, -43], [174, -41], [178, -38], [174, -35], [172, -37], [168, -44], [166, -46]],
    // Maritime Southeast Asia (Indonesia / Philippines)
    [[95, 5], [106, -6], [115, -8], [125, -8], [130, -3], [125, 2], [120, 15], [125, 12], [118, 5], [105, 0], [95, 5]]
  ];

  // Point in polygon test
  function isLandCoordinate(lon, lat) {
    for (let p = 0; p < WORLD_POLYGONS.length; p++) {
      const poly = WORLD_POLYGONS[p];
      let inside = false;
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const [xi, yi] = poly[i];
        const [xj, yj] = poly[j];
        const intersect = ((yi > lat) !== (yj > lat)) && (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
      }
      if (inside) return true;
    }
    return false;
  }

  // 2. Global Business Hubs Definition
  const BUSINESS_HUBS = [
    {
      id: 'SF',
      name: 'San Francisco',
      country: 'United States',
      lat: 37.7749,
      lon: -122.4194,
      symbol: 'APX',
      company: 'Apex Robotics',
      badge: 'SPONSORED',
      badgeClass: 'badge-sponsored',
      rank: 'Rank #01',
      sector: 'Technology & AI',
      city: 'San Francisco, US',
      metric: '▲ +14.2% Reach Velocity',
      logoBg: '#EFEEE9',
      logoColor: '#20211F',
      region: 'Americas'
    },
    {
      id: 'LON',
      name: 'London',
      country: 'United Kingdom',
      lat: 51.5074,
      lon: -0.1278,
      symbol: 'VGQ',
      company: 'Vanguard Quantum',
      badge: 'VERIFIED',
      badgeClass: 'badge-organic',
      rank: 'Rank #02',
      sector: 'DeepTech Computing',
      city: 'London, UK',
      metric: '97.4 Discovery Score',
      logoBg: '#E8E6DF',
      logoColor: '#20211F',
      region: 'Europe'
    },
    {
      id: 'DXB',
      name: 'Dubai',
      country: 'United Arab Emirates',
      lat: 25.2048,
      lon: 55.2708,
      symbol: 'EFG',
      company: 'Emirates FinTech Gateway',
      badge: 'SPONSORED',
      badgeClass: 'badge-sponsored',
      rank: 'Rank #07',
      sector: 'Institutional FinTech',
      city: 'Dubai (DIFC), AE',
      metric: '▲ +31.0% Reach Velocity',
      logoBg: '#FDF3E6',
      logoColor: '#B74735',
      region: 'Middle East'
    },
    {
      id: 'TYO',
      name: 'Tokyo',
      country: 'Japan',
      lat: 35.6762,
      lon: 139.6503,
      symbol: 'NCE',
      company: 'Nippon Clean Energy',
      badge: 'VERIFIED',
      badgeClass: 'badge-organic',
      rank: 'Rank #04',
      sector: 'Clean Energy & Hydrogen',
      city: 'Tokyo, JP',
      metric: '▲ +4.1% Reach Velocity',
      logoBg: '#EAF7EA',
      logoColor: '#36B82B',
      region: 'Asia-Pacific'
    },
    {
      id: 'SIN',
      name: 'Singapore',
      country: 'Singapore',
      lat: 1.3521,
      lon: 103.8198,
      symbol: 'KGL',
      company: 'Kinetix Global Logistics',
      badge: 'SPONSORED',
      badgeClass: 'badge-sponsored',
      rank: 'Rank #05',
      sector: 'Autonomous Supply Chain',
      city: 'Singapore, SG',
      metric: '▲ +18.7% Reach Velocity',
      logoBg: '#EFEEE9',
      logoColor: '#20211F',
      region: 'Asia-Pacific'
    },
    {
      id: 'SAO',
      name: 'São Paulo',
      country: 'Brazil',
      lat: -23.5505,
      lon: -46.6333,
      symbol: 'TVB',
      company: 'TerraVerde Biosystems',
      badge: 'VERIFIED',
      badgeClass: 'badge-organic',
      rank: 'Rank #08',
      sector: 'AgTech & Carbon Capture',
      city: 'São Paulo, BR',
      metric: '92.5 Discovery Score',
      logoBg: '#EAF7EA',
      logoColor: '#36B82B',
      region: 'Americas'
    },
    {
      id: 'BER',
      name: 'Berlin',
      country: 'Germany',
      lat: 52.5200,
      lon: 13.4050,
      symbol: 'ACS',
      company: 'Aetherion Cloud Systems',
      badge: 'VERIFIED',
      badgeClass: 'badge-organic',
      rank: 'Rank #06',
      sector: 'Enterprise Infrastructure',
      city: 'Frankfurt / Berlin, DE',
      metric: '93.9 Discovery Score',
      logoBg: '#E8E6DF',
      logoColor: '#20211F',
      region: 'Europe'
    },
    {
      id: 'BOM',
      name: 'Mumbai',
      country: 'India',
      lat: 19.0760,
      lon: 72.8777,
      symbol: 'BNS',
      company: 'Bharat NeuroSystems',
      badge: 'SPONSORED',
      badgeClass: 'badge-sponsored',
      rank: 'Rank #09',
      sector: 'Edge Neural Hardware',
      city: 'Bengaluru / Mumbai, IN',
      metric: '▲ +12.6% Reach Velocity',
      logoBg: '#EFEEE9',
      logoColor: '#20211F',
      region: 'Asia-Pacific'
    },
    {
      id: 'NYC',
      name: 'New York',
      country: 'United States',
      lat: 40.7128,
      lon: -74.0060,
      symbol: 'APX',
      company: 'Apex Global Capital',
      badge: 'SPONSORED',
      badgeClass: 'badge-sponsored',
      rank: 'Rank #01',
      sector: 'Capital Markets',
      city: 'New York, US',
      metric: '3.4M Global Impressions',
      logoBg: '#EFEEE9',
      logoColor: '#20211F',
      region: 'Americas'
    },
    {
      id: 'SYD',
      name: 'Sydney',
      country: 'Australia',
      lat: -33.8688,
      lon: 151.2093,
      symbol: 'ASY',
      company: 'Austral Synthetics',
      badge: 'VERIFIED',
      badgeClass: 'badge-organic',
      rank: 'Rank #11',
      sector: 'Bio-Polymer Engineering',
      city: 'Sydney, AU',
      metric: '▲ +7.4% Reach Velocity',
      logoBg: '#EAF7EA',
      logoColor: '#36B82B',
      region: 'Asia-Pacific'
    }
  ];

  // 3. Global Business Connection Arcs
  const BUSINESS_ARCS = [
    { from: 0, to: 3, progress: 0.15, speed: 0.005 }, // SF -> Tokyo (Transpacific)
    { from: 8, to: 1, progress: 0.40, speed: 0.007 }, // NY -> London (Transatlantic)
    { from: 1, to: 6, progress: 0.70, speed: 0.008 }, // London -> Berlin
    { from: 1, to: 2, progress: 0.25, speed: 0.006 }, // London -> Dubai
    { from: 2, to: 7, progress: 0.55, speed: 0.007 }, // Dubai -> Mumbai
    { from: 7, to: 4, progress: 0.85, speed: 0.006 }, // Mumbai -> Singapore
    { from: 4, to: 3, progress: 0.35, speed: 0.007 }, // Singapore -> Tokyo
    { from: 4, to: 9, progress: 0.65, speed: 0.005 }, // Singapore -> Sydney
    { from: 5, to: 8, progress: 0.30, speed: 0.006 }  // São Paulo -> NY
  ];

  class GeospatialDiscoveryGlobe {
    constructor(canvasId, options = {}) {
      this.canvas = typeof canvasId === 'string' ? document.getElementById(canvasId) : canvasId;
      if (!this.canvas) return;

      this.ctx = this.canvas.getContext('2d');
      this.options = Object.assign({
        radiusRatio: 0.38,
        autoRotateSpeed: 0.0022,
        accentGreen: '#36B82B',
        accentDark: '#20211F',
        bgSphere: '#EFEEE9',
        borderSphere: '#DAD9D2',
        cardPrimaryId: 'globe-card-primary',
        cardSecondaryId: 'globe-card-secondary'
      }, options);

      this.hubs = BUSINESS_HUBS;
      this.arcs = BUSINESS_ARCS.map(a => ({ ...a }));
      this.spaceOrbits = [
        { radius: 1.15, tilt: 0.48, phase: 0.8, speed: 0.0015, type: 'satellite', color: 'rgba(54, 184, 43, 0.32)' },
        { radius: 1.24, tilt: -0.62, phase: 3.2, speed: -0.0019, type: 'rocket', color: 'rgba(183, 71, 53, 0.3)' },
        { radius: 1.3, tilt: 0.28, phase: 0, speed: 0, type: 'path', color: 'rgba(98, 100, 95, 0.24)' }
      ];
      this.spaceStars = [
        { angle: -2.8, radius: 1.2, size: 1.2, phase: 0.2 },
        { angle: -2.35, radius: 1.28, size: 1.7, phase: 1.1 },
        { angle: -1.9, radius: 1.15, size: 1.1, phase: 2.4 },
        { angle: -1.45, radius: 1.25, size: 1.3, phase: 0.8 },
        { angle: -0.98, radius: 1.17, size: 1.6, phase: 1.7 },
        { angle: -0.5, radius: 1.27, size: 1.1, phase: 2.8 },
        { angle: 0.18, radius: 1.2, size: 1.4, phase: 0.5 },
        { angle: 0.72, radius: 1.28, size: 1.1, phase: 1.9 },
        { angle: 1.18, radius: 1.16, size: 1.7, phase: 2.3 },
        { angle: 1.72, radius: 1.27, size: 1.2, phase: 0.1 },
        { angle: 2.15, radius: 1.18, size: 1.4, phase: 1.3 },
        { angle: 2.65, radius: 1.26, size: 1.1, phase: 2.6 }
      ];

      // Spherical coordinate state
      this.rotX = 0.25;
      this.rotY = -1.2; // Start facing Americas
      this.targetRotX = 0.25;
      this.targetRotY = -1.2;
      this.velX = 0;
      this.velY = 0;
      this.isDragging = false;
      this.lastPointerX = 0;
      this.lastPointerY = 0;
      this.dragDistance = 0;
      this.resumeTimer = null;
      this.autoRotate = true;
      this.pulseTimer = 0;
      this.animId = null;
      this.targetRotX = null;
      this.targetRotY = null;

      // Active hub state
      this.activeHub = this.hubs[0]; // SF initially
      this.secondaryHub = this.hubs[1]; // London initially
      this.lastPrimaryId = '';
      this.lastSecondaryId = '';

      // Card DOM elements
      this.primaryCard = document.getElementById(this.options.cardPrimaryId);
      this.secondaryCard = document.getElementById(this.options.cardSecondaryId);

      this.reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      this.initLandDots();
      this.initHubCoordinates();
      this.initCanvas();
      this.bindEvents();
      this.updateCards(true);
      this.start();
    }

    initLandDots() {
      this.landPoints = [];
      const latStep = 2.2;
      for (let lat = -60; lat <= 75; lat += latStep) {
        const cosLat = Math.cos((lat * Math.PI) / 180);
        const lonStep = latStep / Math.max(0.2, cosLat);
        for (let lon = -180; lon <= 180; lon += lonStep) {
          if (isLandCoordinate(lon, lat)) {
            const latRad = (lat * Math.PI) / 180;
            const lonRad = (lon * Math.PI) / 180;
            this.landPoints.push({
              lat,
              lon,
              x: Math.cos(latRad) * Math.sin(lonRad),
              y: -Math.sin(latRad),
              z: Math.cos(latRad) * Math.cos(lonRad),
              size: (Math.abs(lat) < 45 && Math.random() > 0.88) ? 1.8 : 1.2
            });
          }
        }
      }
    }

    initHubCoordinates() {
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
        this.autoRotate = false;
        window.sfx?.setGlobeActive?.(false);
        if (this.resumeTimer) clearTimeout(this.resumeTimer);

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        this.lastPointerX = clientX;
        this.lastPointerY = clientY;
        this.dragDistance = 0;
        this.velX = 0;
        this.velY = 0;
      };

      const onPointerMove = (e) => {
        if (!this.isDragging) {
          this.checkHover(e);
          return;
        }

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const deltaX = clientX - this.lastPointerX;
        const deltaY = clientY - this.lastPointerY;
        this.dragDistance += Math.hypot(deltaX, deltaY);

        this.velY = deltaX * 0.005;
        this.velX = -deltaY * 0.005;

        this.rotY += this.velY;
        this.rotX += this.velX;
        this.rotX = Math.max(-Math.PI * 0.42, Math.min(Math.PI * 0.42, this.rotX));

        this.lastPointerX = clientX;
        this.lastPointerY = clientY;
      };

      const onPointerUp = (e) => {
        if (!this.isDragging) return;
        this.isDragging = false;

        // Click detection on markers if user tapped without dragging
        if (this.dragDistance < 6) {
          const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
          const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
          this.checkHubClick(clientX, clientY);
        }

        // Resume auto-rotation after 2 seconds
        this.resumeTimer = setTimeout(() => {
          this.autoRotate = true;
          window.sfx?.setGlobeActive?.(!this.reducedMotion);
        }, 2000);
      };

      this.canvas.addEventListener('mousedown', onPointerDown);
      window.addEventListener('mousemove', onPointerMove);
      window.addEventListener('mouseup', onPointerUp);

      this.canvas.addEventListener('touchstart', onPointerDown, { passive: true });
      window.addEventListener('touchmove', onPointerMove, { passive: true });
      window.addEventListener('touchend', onPointerUp);

      // Card click interaction: opens company inspection drawer
      if (this.primaryCard) {
        this.primaryCard.style.cursor = 'pointer';
        this.primaryCard.addEventListener('click', () => {
          if (this.activeHub && typeof window.openCompanyDrawer === 'function') {
            const sym = this.activeHub.symbol || this.activeHub.id;
            window.openCompanyDrawer(sym);
          }
        });
      }
      if (this.secondaryCard) {
        this.secondaryCard.style.cursor = 'pointer';
        this.secondaryCard.addEventListener('click', () => {
          if (this.secondaryHub && typeof window.openCompanyDrawer === 'function') {
            const sym = this.secondaryHub.symbol || this.secondaryHub.id;
            window.openCompanyDrawer(sym);
          }
        });
      }
    }

    checkHover(e) {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let hovered = false;
      for (let hub of this.projectedHubs || []) {
        if (hub.z > 0.25) {
          const dist = Math.hypot(mouseX - hub.screenX, mouseY - hub.screenY);
          if (dist < 18) {
            hovered = true;
            break;
          }
        }
      }
      this.canvas.style.cursor = hovered ? 'pointer' : 'grab';
    }

    checkHubClick(clientX, clientY) {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = clientX - rect.left;
      const mouseY = clientY - rect.top;

      for (let hub of this.projectedHubs || []) {
        if (hub.z > 0.15) {
          const dist = Math.hypot(mouseX - hub.screenX, mouseY - hub.screenY);
          if (dist < 22) {
            this.activeHub = hub;
            this.updateCards(false);
            this.rotateToCoordinates(hub.lat, hub.lon);
            if (window.sfx && typeof window.sfx.playBlip === 'function') {
              window.sfx.playBlip(1200, 0.04);
            }
            break;
          }
        }
      }
    }

    rotateToCoordinates(lat, lon) {
      const targetLonRad = -(lon * Math.PI) / 180;
      const diff = (targetLonRad - this.rotY) % (Math.PI * 2);
      const normalizedDiff = ((diff + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
      this.targetRotY = this.rotY + normalizedDiff;

      const targetLatRad = (lat * Math.PI) / 180;
      this.targetRotX = Math.max(-0.35, Math.min(0.35, targetLatRad * 0.4));
      this.autoRotate = false;
      window.sfx?.setGlobeActive?.(false);
      if (this.resumeTimer) clearTimeout(this.resumeTimer);
      this.resumeTimer = setTimeout(() => {
        this.autoRotate = true;
        this.targetRotY = null;
        this.targetRotX = null;
        window.sfx?.setGlobeActive?.(!this.reducedMotion);
      }, 5000);
    }

    rotateToContinent(region) {
      const REGION_COORDS = {
        'Americas': { lat: 25, lon: -95 },
        'Europe': { lat: 48, lon: 15 },
        'Asia-Pacific': { lat: 25, lon: 115 },
        'Middle East': { lat: 25, lon: 55 },
        'Africa': { lat: 5, lon: 20 },
        'all': { lat: 20, lon: -40 }
      };
      const coords = REGION_COORDS[region] || REGION_COORDS['all'];
      this.rotateToCoordinates(coords.lat, coords.lon);
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

    syncActiveHubWithRotation() {
      // Find the hub with the highest positive z facing the viewer
      let primary = null;
      let maxZ = -999;
      let secondary = null;
      let secondMaxZ = -999;

      for (let hub of this.projectedHubs || []) {
        if (hub.z > maxZ) {
          secondMaxZ = maxZ;
          secondary = primary;
          maxZ = hub.z;
          primary = hub;
        } else if (hub.z > secondMaxZ) {
          secondMaxZ = hub.z;
          secondary = hub;
        }
      }

      if (primary && primary.id !== this.lastPrimaryId) {
        this.activeHub = primary;
        this.lastPrimaryId = primary.id;
        this.updateCardElement(this.primaryCard, primary, 'primary');
      }

      if (secondary && secondary.id !== this.lastSecondaryId && secondary.z > 0.15) {
        this.secondaryHub = secondary;
        this.lastSecondaryId = secondary.id;
        this.updateCardElement(this.secondaryCard, secondary, 'secondary');
      }
    }

    updateCards(immediate = false) {
      if (this.activeHub) {
        this.lastPrimaryId = this.activeHub.id;
        this.updateCardElement(this.primaryCard, this.activeHub, 'primary', immediate);
      }
      if (this.secondaryHub) {
        this.lastSecondaryId = this.secondaryHub.id;
        this.updateCardElement(this.secondaryCard, this.secondaryHub, 'secondary', immediate);
      }
    }

    updateCardElement(cardEl, hub, type = 'primary', immediate = false) {
      if (!cardEl || !hub) return;

      if (immediate) {
        this.populateCard(cardEl, hub);
        cardEl.classList.remove('is-exiting');
        cardEl.classList.add('is-active');
        return;
      }

      // Smooth exit transition
      cardEl.classList.add('is-exiting');
      cardEl.classList.remove('is-active');

      setTimeout(() => {
        this.populateCard(cardEl, hub);
        cardEl.classList.remove('is-exiting');
        cardEl.classList.add('is-active');
      }, 260);
    }

    populateCard(cardEl, hub) {
      const avatar = cardEl.querySelector('.float-card-avatar');
      const name = cardEl.querySelector('.float-card-name');
      const badge = cardEl.querySelector('.badge-sponsored, .badge-organic');
      const meta = cardEl.querySelector('.float-card-meta');
      const reach = cardEl.querySelector('.float-card-reach');

      if (avatar) {
        avatar.textContent = hub.symbol;
        avatar.style.backgroundColor = hub.logoBg || '#EFEEE9';
        avatar.style.color = hub.logoColor || '#20211F';
      }
      if (name) name.textContent = hub.company;
      if (badge) {
        badge.textContent = hub.badge;
        badge.className = `${hub.badgeClass} mini`;
      }
      if (meta) {
        meta.textContent = `${hub.rank} • ${hub.sector} • ${hub.city}`;
      }
      if (reach) {
        if (hub.metric.includes('+')) {
          const numMatch = hub.metric.match(/[0-9.]+/);
          const num = numMatch ? numMatch[0] : '14.2';
          reach.innerHTML = `▲ +<span class="count-up">${num}%</span> Reach Velocity`;
        } else {
          reach.innerHTML = `<span class="count-up">${hub.metric}</span>`;
        }
      }
      cardEl.setAttribute('data-hub', hub.id);
    }

    drawConnectorLine(cardEl, hub, isPrimary = true) {
      if (!cardEl || !hub || hub.z < 0.15) return;
      const ctx = this.ctx;

      const cardRect = cardEl.getBoundingClientRect();
      const canvasRect = this.canvas.getBoundingClientRect();

      // Card anchor point in canvas space:
      // Primary card is positioned on the right side of the globe -> anchor on its left edge.
      // Secondary card is positioned on the left side of the globe -> anchor on its right edge.
      const startX = isPrimary ?
        (cardRect.left - canvasRect.left) :
        (cardRect.right - canvasRect.left);
      const startY = cardRect.top - canvasRect.top + cardRect.height * 0.5;

      const endX = hub.screenX;
      const endY = hub.screenY;

      // Allow slight margin around canvas borders
      if (startX < -80 || startY < -80 || startX > this.width + 80 || startY > this.height + 80) return;

      const alpha = Math.max(0.12, Math.min(0.75, (hub.z - 0.15) * 1.8));

      // Draw smooth quadratic curved connector
      const ctrlOffset = isPrimary ? -30 : 30;
      const ctrlX = (startX + endX) / 2 + ctrlOffset;
      const ctrlY = (startY + endY) / 2;

      ctx.save();
      ctx.strokeStyle = `rgba(54, 184, 43, ${alpha * 0.8})`;
      ctx.lineWidth = 1.2;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(ctrlX, ctrlY, endX, endY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Traveling signal pulse particle along connector
      const connT = (this.pulseTimer * 0.35) % 1;
      const connDotX = (1 - connT) * (1 - connT) * startX + 2 * (1 - connT) * connT * ctrlX + connT * connT * endX;
      const connDotY = (1 - connT) * (1 - connT) * startY + 2 * (1 - connT) * connT * ctrlY + connT * connT * endY;
      ctx.fillStyle = `rgba(54, 184, 43, ${alpha * 0.95})`;
      ctx.beginPath();
      ctx.arc(connDotX, connDotY, 2.2, 0, Math.PI * 2);
      ctx.fill();

      // Endpoint highlight pulse on globe
      ctx.fillStyle = this.options.accentGreen;
      ctx.beginPath();
      ctx.arc(endX, endY, 3.8, 0, Math.PI * 2);
      ctx.fill();

      // Delicate anchor dot on card
      ctx.fillStyle = 'rgba(32, 33, 31, 0.7)';
      ctx.beginPath();
      ctx.arc(startX, startY, 2.8, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    getOrbitPoint(orbit, phase) {
      const sinPhase = Math.sin(phase);
      return this.rotatePoint({
        x: Math.cos(phase) * orbit.radius,
        y: sinPhase * orbit.radius * Math.cos(orbit.tilt),
        z: sinPhase * orbit.radius * Math.sin(orbit.tilt)
      }, this.rotX, this.rotY);
    }

    drawOrbitPath(orbit, cx, cy, r, frontSide) {
      const ctx = this.ctx;
      ctx.save();
      ctx.strokeStyle = frontSide ? orbit.color : 'rgba(98, 100, 95, 0.14)';
      ctx.lineWidth = 0.8;
      ctx.setLineDash(frontSide ? [3, 5] : [2, 6]);
      ctx.beginPath();

      let drawing = false;
      for (let index = 0; index <= 72; index += 1) {
        const point = this.getOrbitPoint(orbit, (index / 72) * Math.PI * 2);
        const isFront = point.z > 0;
        if (isFront === frontSide) {
          const x = cx + point.x * r;
          const y = cy + point.y * r;
          if (drawing) ctx.lineTo(x, y);
          else ctx.moveTo(x, y);
          drawing = true;
        } else {
          drawing = false;
        }
      }

      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }

    drawSpaceBackdrop(cx, cy, r) {
      this.spaceOrbits.forEach(orbit => this.drawOrbitPath(orbit, cx, cy, r, false));

      const ctx = this.ctx;
      ctx.save();
      this.spaceStars.forEach(star => {
        const twinkle = this.reducedMotion ? 0.72 : 0.48 + (Math.sin(this.pulseTimer * 0.7 + star.phase) + 1) * 0.14;
        const x = cx + Math.cos(star.angle) * star.radius * r;
        const y = cy + Math.sin(star.angle) * star.radius * r;
        ctx.globalAlpha = twinkle;
        ctx.strokeStyle = star.phase > 1.8 ? '#36B82B' : '#62645F';
        ctx.fillStyle = ctx.strokeStyle;

        if (star.size > 1.45) {
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(x - star.size * 1.7, y);
          ctx.lineTo(x + star.size * 1.7, y);
          ctx.moveTo(x, y - star.size * 1.7);
          ctx.lineTo(x, y + star.size * 1.7);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(x, y, star.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.restore();
    }

    drawOrbitalCraft(orbit, cx, cy, r, phaseOffset = 0) {
      const phase = orbit.phase + phaseOffset;
      const point = this.getOrbitPoint(orbit, phase);
      if (point.z <= 0.02) return;

      const next = this.getOrbitPoint(orbit, phase + 0.012);
      const x = cx + point.x * r;
      const y = cy + point.y * r;
      const nextX = cx + next.x * r;
      const nextY = cy + next.y * r;
      const ctx = this.ctx;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.atan2(nextY - y, nextX - x));
      ctx.globalAlpha = Math.min(0.95, 0.48 + point.z * 0.42);
      ctx.lineWidth = 0.8;

      if (orbit.type === 'satellite') {
        ctx.strokeStyle = '#20211F';
        ctx.fillStyle = '#36B82B';
        ctx.strokeRect(-2, -2, 4, 4);
        ctx.fillRect(-1, -1, 2, 2);
        ctx.fillStyle = 'rgba(54, 184, 43, 0.22)';
        ctx.fillRect(-10, -2.5, 6, 5);
        ctx.fillRect(4, -2.5, 6, 5);
        ctx.strokeRect(-10, -2.5, 6, 5);
        ctx.strokeRect(4, -2.5, 6, 5);
        ctx.beginPath();
        ctx.moveTo(-4, 0);
        ctx.lineTo(-10, 0);
        ctx.moveTo(4, 0);
        ctx.lineTo(10, 0);
        ctx.stroke();
      } else {
        ctx.fillStyle = '#B74735';
        ctx.strokeStyle = '#20211F';
        ctx.beginPath();
        ctx.moveTo(7, 0);
        ctx.lineTo(2.5, -2.5);
        ctx.lineTo(-3.5, -2.5);
        ctx.lineTo(-5.5, -1);
        ctx.lineTo(-5.5, 1);
        ctx.lineTo(-3.5, 2.5);
        ctx.lineTo(2.5, 2.5);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#F7F6F2';
        ctx.beginPath();
        ctx.arc(1.5, 0, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#36B82B';
        ctx.beginPath();
        ctx.moveTo(-5.5, 0);
        ctx.lineTo(-8.5, -1.3);
        ctx.lineTo(-7.3, 0);
        ctx.lineTo(-8.5, 1.3);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();
    }

    drawSpaceForeground(cx, cy, r) {
      this.spaceOrbits.forEach(orbit => this.drawOrbitPath(orbit, cx, cy, r, true));
      this.spaceOrbits
        .filter(orbit => orbit.type === 'satellite' || orbit.type === 'rocket')
        .forEach(orbit => this.drawOrbitalCraft(orbit, cx, cy, r));
      const satelliteOrbit = this.spaceOrbits.find(orbit => orbit.type === 'satellite');
      if (satelliteOrbit) this.drawOrbitalCraft(satelliteOrbit, cx, cy, r, Math.PI);
      this.drawMoon(cx, cy, r);
    }

    drawMoon(cx, cy, r) {
      const moonRadius = Math.max(8, Math.min(14, r * 0.08));
      const x = cx - r * 1.08;
      const y = cy - r * 0.78;
      const ctx = this.ctx;

      ctx.save();
      ctx.fillStyle = '#D0CFC7';
      ctx.strokeStyle = '#494A45';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.arc(x, y, moonRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x, y, moonRadius - 0.5, 0, Math.PI * 2);
      ctx.clip();
      ctx.fillStyle = 'rgba(98, 100, 95, 0.22)';
      ctx.beginPath();
      ctx.arc(x + moonRadius * 0.4, y - moonRadius * 0.18, moonRadius * 0.58, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(98, 100, 95, 0.34)';
      ctx.beginPath();
      ctx.arc(x - moonRadius * 0.34, y + moonRadius * 0.2, moonRadius * 0.13, 0, Math.PI * 2);
      ctx.arc(x + moonRadius * 0.1, y + moonRadius * 0.48, moonRadius * 0.09, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    draw() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      if (!this.isDragging) {
        if (this.targetRotY !== null) {
          const diffY = this.targetRotY - this.rotY;
          this.rotY += diffY * 0.08;
          if (Math.abs(diffY) < 0.002) {
            this.rotY = this.targetRotY;
            this.targetRotY = null;
          }
        } else if (!this.reducedMotion && this.autoRotate) {
          this.rotY += this.options.autoRotateSpeed;
        }

        if (this.targetRotX !== null) {
          const diffX = this.targetRotX - this.rotX;
          this.rotX += diffX * 0.08;
          if (Math.abs(diffX) < 0.002) {
            this.rotX = this.targetRotX;
            this.targetRotX = null;
          }
        }

        this.rotY += this.velY;
        this.rotX += this.velX;
        this.velX *= 0.92;
        this.velY *= 0.92;
        this.rotX = Math.max(-Math.PI * 0.42, Math.min(Math.PI * 0.42, this.rotX));
      }

      this.pulseTimer += 0.045;
      if (!this.reducedMotion) {
        this.spaceOrbits.forEach(orbit => {
          orbit.phase = (orbit.phase + orbit.speed + Math.PI * 2) % (Math.PI * 2);
        });
      }

      const cx = this.centerX;
      const cy = this.centerY;
      const r = this.radius;
      this.drawSpaceBackdrop(cx, cy, r);

      // 1. Editorial Sphere Body (Warm Off-White Paper Tone)
      ctx.fillStyle = this.options.bgSphere;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();

      // Hairline boundary ring
      ctx.strokeStyle = this.options.borderSphere;
      ctx.lineWidth = 1;
      ctx.stroke();

      // 2. Project Land Dots
      const projectedLand = this.landPoints.map(p => {
        const rotated = this.rotatePoint(p, this.rotX, this.rotY);
        return {
          screenX: cx + rotated.x * r,
          screenY: cy + rotated.y * r,
          z: rotated.z,
          size: p.size
        };
      });

      // 3. Project Hubs
      this.projectedHubs = this.hubPoints.map(hub => {
        const rotated = this.rotatePoint(hub, this.rotX, this.rotY);
        return {
          ...hub,
          screenX: cx + rotated.x * r,
          screenY: cy + rotated.y * r,
          z: rotated.z
        };
      });

      // Synchronize cards with current rotation
      this.syncActiveHubWithRotation();

      // 4. Background Land Dots (z <= 0)
      for (let i = 0; i < projectedLand.length; i++) {
        const pt = projectedLand[i];
        if (pt.z <= 0) {
          const depth = (pt.z + 1) * 0.5;
          const alpha = Math.max(0.04, depth * 0.22);
          ctx.fillStyle = `rgba(98, 100, 95, ${alpha})`;
          ctx.beginPath();
          ctx.arc(pt.screenX, pt.screenY, pt.size * 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 5. Draw Arcs (Curved 3D Great-Circles with Moving Light Photons)
      this.arcs.forEach(arc => {
        const hFrom = this.projectedHubs[arc.from];
        const hTo = this.projectedHubs[arc.to];

        if (hFrom && hTo && (hFrom.z > -0.2 || hTo.z > -0.2)) {
          const midX = (hFrom.screenX + hTo.screenX) / 2;
          const midY = (hFrom.screenY + hTo.screenY) / 2;
          const dist = Math.hypot(hTo.screenX - hFrom.screenX, hTo.screenY - hFrom.screenY);
          const dirX = midX - cx;
          const dirY = midY - cy;
          const dirLen = Math.hypot(dirX, dirY) || 1;
          const arcElevation = Math.min(dist * 0.35, 45);
          const ctrlX = midX + (dirX / dirLen) * arcElevation;
          const ctrlY = midY + (dirY / dirLen) * arcElevation;

          const arcAlpha = Math.max(0.08, Math.min(0.45, (hFrom.z + hTo.z + 1) * 0.26));
          ctx.strokeStyle = `rgba(32, 33, 31, ${arcAlpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(hFrom.screenX, hFrom.screenY);
          ctx.quadraticCurveTo(ctrlX, ctrlY, hTo.screenX, hTo.screenY);
          ctx.stroke();

          // Traveling photon pulse
          if (!this.reducedMotion) {
            arc.progress = (arc.progress + arc.speed) % 1;
          }
          const t = arc.progress;
          const pulseX = (1 - t) * (1 - t) * hFrom.screenX + 2 * (1 - t) * t * ctrlX + t * t * hTo.screenX;
          const pulseY = (1 - t) * (1 - t) * hFrom.screenY + 2 * (1 - t) * t * ctrlY + t * t * hTo.screenY;

          // Pulse particle with subtle trail
          ctx.fillStyle = this.options.accentGreen;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 2.4, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 6. Foreground Land Dots (z > 0) - Crisp Charcoal Continents
      for (let i = 0; i < projectedLand.length; i++) {
        const pt = projectedLand[i];
        if (pt.z > 0) {
          const depth = pt.z;
          const alpha = Math.min(0.95, 0.4 + depth * 0.58);
          ctx.fillStyle = `rgba(32, 33, 31, ${alpha})`;

          const size = pt.size * (0.85 + depth * 0.45);
          ctx.beginPath();
          ctx.arc(pt.screenX, pt.screenY, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 7. Location Markers (Pulsing Green Centers + Concentric Rings)
      this.projectedHubs.forEach(hub => {
        if (hub.z > 0.05) {
          const depth = hub.z;
          const pulseScale = 1 + (Math.sin(this.pulseTimer + hub.z * 6) + 1) * 0.45;
          const isPrimary = (this.activeHub && hub.id === this.activeHub.id);

          // Concentric pulse wave ring
          ctx.strokeStyle = isPrimary ?
            `rgba(54, 184, 43, ${depth * 0.75})` :
            `rgba(54, 184, 43, ${depth * 0.4})`;
          ctx.lineWidth = isPrimary ? 1.5 : 1;
          ctx.beginPath();
          ctx.arc(hub.screenX, hub.screenY, (isPrimary ? 6 : 4.5) * pulseScale, 0, Math.PI * 2);
          ctx.stroke();

          // Green hub core dot
          ctx.fillStyle = this.options.accentGreen;
          ctx.beginPath();
          ctx.arc(hub.screenX, hub.screenY, isPrimary ? 3.8 : 2.8, 0, Math.PI * 2);
          ctx.fill();

          // Editorial location labels when facing viewer
          if (depth > 0.38) {
            ctx.font = '600 9.5px "Manrope", sans-serif';
            ctx.letterSpacing = '0.08em';
            ctx.fillStyle = isPrimary ? '#20211F' : `rgba(32, 33, 31, ${depth * 0.85})`;
            ctx.fillText(hub.name.toUpperCase(), hub.screenX + 8, hub.screenY - 3);

            ctx.font = '500 8px "DM Mono", monospace';
            ctx.fillStyle = `rgba(54, 184, 43, ${depth * 0.9})`;
            ctx.fillText(hub.company.toUpperCase(), hub.screenX + 8, hub.screenY + 7);
          }
        }
      });

      this.drawSpaceForeground(cx, cy, r);

      // 8. Dynamic Connector Lines from Profile Cards to Globe Markers
      if (this.activeHub && this.activeHub.z > 0.15) {
        if (this.primaryCard && !this.primaryCard.classList.contains('is-exiting')) {
          this.primaryCard.classList.add('is-active');
        }
        this.drawConnectorLine(this.primaryCard, this.activeHub, true);
      } else if (this.primaryCard) {
        this.primaryCard.classList.remove('is-active');
      }

      if (this.secondaryHub && this.secondaryHub.z > 0.15) {
        if (this.secondaryCard && !this.secondaryCard.classList.contains('is-exiting')) {
          this.secondaryCard.classList.add('is-active');
        }
        this.drawConnectorLine(this.secondaryCard, this.secondaryHub, false);
      } else if (this.secondaryCard) {
        this.secondaryCard.classList.remove('is-active');
      }
    }

    start() {
      if (this.animId) cancelAnimationFrame(this.animId);
      const loop = () => {
        this.draw();
        this.animId = requestAnimationFrame(loop);
      };
      this.animId = requestAnimationFrame(loop);
      window.sfx?.setGlobeActive?.(!this.reducedMotion && this.autoRotate);
    }

    destroy() {
      if (this.animId) cancelAnimationFrame(this.animId);
      if (this.resumeTimer) clearTimeout(this.resumeTimer);
      window.sfx?.setGlobeActive?.(false);
    }
  }

  return GeospatialDiscoveryGlobe;
}));
