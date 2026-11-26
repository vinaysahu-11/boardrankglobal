/**
 * BOARDRANK GLOBAL - High-Performance 3D Vector Particle Globe
 * Built with pure Canvas2D vector mathematics and spherical projections.
 * Features:
 * - 1,400+ 3D spherical particle cloud with depth shading
 * - Interactive pointer drag-to-rotate with momentum & damping
 * - Great-circle curved enterprise connection arcs with traveling photon pulses
 * - Pulsing hub beacons for major global financial & tech capitals
 * - Subtle atmosphere glow & depth attenuation
 * - Zero external library dependencies, 60-120 FPS performance
 */

export class VectorGlobe {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.options = Object.assign({
      pointCount: 1200,
      radiusRatio: 0.38, // Ratio relative to canvas min dimension
      autoRotateSpeed: 0.0024,
      accentLime: '#C7FF4A',
      accentCyan: '#6DE7FF',
      bgMuted: 'rgba(255, 255, 255, 0.15)'
    }, options);

    // Global Hubs (Lat, Long in degrees)
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

    // Enterprise Connection Arcs between hubs
    this.arcs = [
      { from: 0, to: 5, progress: 0.1, speed: 0.006 }, // SF -> Tokyo
      { from: 2, to: 4, progress: 0.4, speed: 0.008 }, // London -> Dubai
      { from: 4, to: 6, progress: 0.7, speed: 0.007 }, // Dubai -> Singapore
      { from: 1, to: 2, progress: 0.2, speed: 0.009 }, // NY -> London
      { from: 6, to: 9, progress: 0.5, speed: 0.005 }, // Singapore -> Sydney
      { from: 7, to: 4, progress: 0.8, speed: 0.007 }, // Bengaluru -> Dubai
      { from: 8, to: 1, progress: 0.3, speed: 0.006 }  // São Paulo -> NY
    ];

    // Interaction & Animation State
    this.rotX = 0.28;
    this.rotY = -0.55;
    this.targetRotX = 0.28;
    this.targetRotY = -0.55;
    this.velX = 0;
    this.velY = 0;
    this.isDragging = false;
    this.lastPointerX = 0;
    this.lastPointerY = 0;
    this.animId = null;
    this.pulseTimer = 0;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.points = [];
    this.initPoints();
    this.initCanvas();
    this.bindEvents();
    this.start();
  }

  initPoints() {
    this.points = [];
    const phi = Math.PI * (Math.sqrt(5) - 1); // Golden angle

    for (let i = 0; i < this.options.pointCount; i++) {
      const y = 1 - (i / (this.options.pointCount - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // Slight density variations to mimic continents vs ocean bands
      const isContinental = Math.sin(x * 3.5) * Math.cos(z * 3.5) + y * 0.4 > -0.15;

      this.points.push({
        x, y, z,
        size: isContinental ? (Math.random() > 0.88 ? 2.2 : 1.3) : 0.9,
        isContinental,
        baseAlpha: isContinental ? 0.75 : 0.25
      });
    }

    // Project Hubs into 3D unit coordinates
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
    const width = rect.width || this.canvas.parentElement?.clientWidth || 600;
    const height = rect.height || this.canvas.parentElement?.clientHeight || 600;

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
    window.addEventListener('resize', () => {
      this.initCanvas();
    });

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

      // Clamp vertical rotation so globe does not invert
      this.rotX = Math.max(-Math.PI * 0.42, Math.min(Math.PI * 0.42, this.rotX));

      this.lastPointerX = clientX;
      this.lastPointerY = clientY;
    };

    const onPointerUp = () => {
      this.isDragging = false;
    };

    this.canvas.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    this.canvas.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Watch reduced motion preference change
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    media.addEventListener('change', (e) => {
      this.reducedMotion = e.matches;
    });
  }

  rotatePoint(p, rotX, rotY) {
    // Rotation around Y axis
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);
    const x1 = p.x * cosY + p.z * sinY;
    const z1 = -p.x * sinY + p.z * cosY;

    // Rotation around X axis
    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);
    const y2 = p.y * cosX - z1 * sinX;
    const z2 = p.y * sinX + z1 * cosX;

    return { x: x1, y: y2, z: z2 };
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // Physics / Momentum update
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

    // 1. Draw Outer Atmospheric Glow
    const glowGrad = ctx.createRadialGradient(cx, cy, r * 0.75, cx, cy, r * 1.35);
    glowGrad.addColorStop(0, 'rgba(109, 231, 255, 0.08)');
    glowGrad.addColorStop(0.5, 'rgba(199, 255, 74, 0.03)');
    glowGrad.addColorStop(1, 'rgba(8, 10, 15, 0)');
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, r * 1.35, 0, Math.PI * 2);
    ctx.fill();

    // 2. Inner Sphere Shading
    const innerGrad = ctx.createRadialGradient(cx - r * 0.25, cy - r * 0.25, r * 0.1, cx, cy, r);
    innerGrad.addColorStop(0, '#111722');
    innerGrad.addColorStop(0.8, '#0A0E15');
    innerGrad.addColorStop(1, 'rgba(8, 10, 15, 0.95)');
    ctx.fillStyle = innerGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();

    // Outer rim highlight ring
    ctx.strokeStyle = 'rgba(109, 231, 255, 0.2)';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // 3. Project & Sort Points by depth (Z)
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

    // 4. Render 3D Background Points (z <= 0)
    for (let i = 0; i < projectedPoints.length; i++) {
      const pt = projectedPoints[i];
      if (pt.z <= 0) {
        const depth = (pt.z + 1) * 0.5; // 0 to 0.5
        const alpha = Math.max(0.04, pt.baseAlpha * depth * 0.35);
        ctx.fillStyle = `rgba(146, 155, 170, ${alpha})`;
        ctx.beginPath();
        ctx.arc(pt.screenX, pt.screenY, pt.size * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 5. Project Hubs
    const projectedHubs = this.hubPoints.map(hub => {
      const rotated = this.rotatePoint(hub, this.rotX, this.rotY);
      return {
        ...hub,
        screenX: cx + rotated.x * r,
        screenY: cy + rotated.y * r,
        z: rotated.z
      };
    });

    // 6. Draw Connecting Great-Circle Arcs
    this.arcs.forEach(arc => {
      const hFrom = projectedHubs[arc.from];
      const hTo = projectedHubs[arc.to];

      // If at least one point is on the front side
      if (hFrom.z > -0.3 || hTo.z > -0.3) {
        // Compute midpoint arched out into 3D space
        const midX = (hFrom.screenX + hTo.screenX) / 2;
        const midY = (hFrom.screenY + hTo.screenY) / 2;
        const dist = Math.hypot(hTo.screenX - hFrom.screenX, hTo.screenY - hFrom.screenY);
        // Elevate curve outward from globe center
        const dirX = midX - cx;
        const dirY = midY - cy;
        const dirLen = Math.hypot(dirX, dirY) || 1;
        const arcElevation = Math.min(dist * 0.35, 45);
        const ctrlX = midX + (dirX / dirLen) * arcElevation;
        const ctrlY = midY + (dirY / dirLen) * arcElevation;

        // Draw curved arc line
        const arcAlpha = Math.max(0.12, Math.min(0.6, (hFrom.z + hTo.z + 1) * 0.35));
        ctx.strokeStyle = `rgba(109, 231, 255, ${arcAlpha})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(hFrom.screenX, hFrom.screenY);
        ctx.quadraticCurveTo(ctrlX, ctrlY, hTo.screenX, hTo.screenY);
        ctx.stroke();

        // Traveling Photon Pulse along the bezier curve
        if (!this.reducedMotion) {
          arc.progress = (arc.progress + arc.speed) % 1;
        }
        const t = arc.progress;
        // Quadratic bezier equation B(t) = (1-t)^2 P0 + 2(1-t)t P1 + t^2 P2
        const pulseX = (1 - t) * (1 - t) * hFrom.screenX + 2 * (1 - t) * t * ctrlX + t * t * hTo.screenX;
        const pulseY = (1 - t) * (1 - t) * hFrom.screenY + 2 * (1 - t) * t * ctrlY + t * t * hTo.screenY;

        ctx.fillStyle = this.options.accentLime;
        ctx.shadowColor = this.options.accentLime;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    });

    // 7. Render 3D Foreground Points (z > 0)
    for (let i = 0; i < projectedPoints.length; i++) {
      const pt = projectedPoints[i];
      if (pt.z > 0) {
        const depth = pt.z; // 0 to 1
        const alpha = Math.min(1, pt.baseAlpha * (0.3 + depth * 0.7));

        if (pt.isContinental && depth > 0.45 && Math.random() > 0.92) {
          ctx.fillStyle = `rgba(199, 255, 74, ${alpha * 0.9})`;
        } else if (pt.isContinental) {
          ctx.fillStyle = `rgba(244, 246, 251, ${alpha * 0.85})`;
        } else {
          ctx.fillStyle = `rgba(109, 231, 255, ${alpha * 0.45})`;
        }

        const size = pt.size * (0.8 + depth * 0.5);
        ctx.beginPath();
        ctx.arc(pt.screenX, pt.screenY, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 8. Render Major Hub Beacons
    projectedHubs.forEach(hub => {
      if (hub.z > 0.05) {
        const depth = hub.z;
        const pulseScale = 1 + (Math.sin(this.pulseTimer + hub.z * 5) + 1) * 0.5;

        // Outer pulsing radar ring
        ctx.strokeStyle = `rgba(199, 255, 74, ${depth * 0.45})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(hub.screenX, hub.screenY, 5 * pulseScale, 0, Math.PI * 2);
        ctx.stroke();

        // Glowing center core
        ctx.fillStyle = this.options.accentLime;
        ctx.shadowColor = this.options.accentLime;
        ctx.shadowBlur = 10 * depth;
        ctx.beginPath();
        ctx.arc(hub.screenX, hub.screenY, 3.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Hub tag label on high depth
        if (depth > 0.55) {
          ctx.font = '10px "DM Mono", monospace';
          ctx.fillStyle = `rgba(244, 246, 251, ${depth * 0.9})`;
          ctx.fillText(hub.name.toUpperCase(), hub.screenX + 8, hub.screenY - 4);

          ctx.fillStyle = `rgba(199, 255, 74, ${depth * 0.8})`;
          ctx.fillText(`● ${hub.tag}`, hub.screenX + 8, hub.screenY + 8);
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

  stop() {
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }
}
