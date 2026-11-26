import * as THREE from 'three';
import { backCoverSpread, industries, spreadThemes, supportingPhotos } from './bookData';

const W = 8, H = 4.5;
type Turn = { from: number; to: number; start: number; end: number; time: number; duration: number; dragging?: boolean; progress: number };

export class BookScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(33, 1, .1, 100);
  private root = new THREE.Group();
  private cover = new THREE.Group();
  private left: THREE.Mesh;
  private right: THREE.Mesh;
  private leaf = new THREE.Group();
  private leafGeometry = new THREE.PlaneGeometry(W, H, 48, 1).translate(W / 2, 0, 0);
  private front: THREE.Mesh;
  private reverse: THREE.Mesh;
  private textures = new Map<string, THREE.CanvasTexture>();
  private images = new Map<number, HTMLImageElement>();
  private details = new Map<number, HTMLImageElement[]>();
  private index = 0;
  private isOpen = false;
  private opening = 0;
  private turn: Turn | null = null;
  private frame = 0;
  private resizeObserver: ResizeObserver;
  private pointer: { x: number; y: number; time: number; drag: boolean; direction: number } | null = null;
  private mobileSide = 0;
  private reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  private dead = false;
  private coverMotion: { from: number; to: number; time: number } | null = null;
  private pendingSpread: number | null = null;
  private dirtySpreads = new Set<number>();
  private fitBox = new THREE.Box3();
  private fitPoint = new THREE.Vector3();
  private pivot = new THREE.Vector3();

  constructor(private host: HTMLElement, private change: (index: number, open: boolean) => void, private rustle: () => void, private themeChange: (index: number) => void = () => {}) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.host.appendChild(this.renderer.domElement);
    this.renderer.domElement.style.width = '100%'; this.renderer.domElement.style.height = '100%';
    this.scene.add(new THREE.AmbientLight(0xffffff, 2));
    const light = new THREE.DirectionalLight(0xfff9df, 3);
    light.position.set(-5, 10, 14); light.castShadow = true;
    light.shadow.mapSize.set(2048, 2048);
    Object.assign(light.shadow.camera, { left: -16, right: 16, top: 10, bottom: -10 });
    light.shadow.bias = -.0005; light.shadow.normalBias = .025;
    this.scene.add(light);
    const fill = new THREE.DirectionalLight(0xdce9d2, 1); fill.position.set(9, -3, 10); this.scene.add(fill);
    this.scene.add(this.root);
    const box = (w: number, h: number, d: number, color: string, x: number, z: number) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({ color, roughness: .86 }));
      mesh.position.set(x, 0, z); mesh.castShadow = true; mesh.receiveShadow = true; this.root.add(mesh); return mesh;
    };
    box(W + .13, H + .15, .14, '#172c23', W / 2, -.23);
    const stack = box(W - .08, H - .06, .26, '#e6e0cc', W / 2, -.04);
    const stripeCanvas = document.createElement('canvas'); stripeCanvas.width = 16; stripeCanvas.height = 128;
    const sc = stripeCanvas.getContext('2d')!; sc.fillStyle = '#e7e1cd'; sc.fillRect(0, 0, 16, 128);
    for (let y = 0; y < 128; y += 4) { sc.fillStyle = y % 8 ? '#bcb7a8' : '#f6f1df'; sc.fillRect(0, y, 16, 1); }
    const stripes = new THREE.CanvasTexture(stripeCanvas);
    (stack.material as THREE.MeshStandardMaterial).map = stripes;
    box(.17, H + .14, .45, '#172e24', -.04, -.06);
    const leftBoard = box(W + .13, H + .15, .14, '#193126', -W / 2, -.2);
    leftBoard.name = 'leftBoard'; leftBoard.visible = false;
    const leftStack = box(W - .05, H - .06, .15, '#e6e0cc', -W / 2, -.07); leftStack.name = 'leftStack'; leftStack.visible = false;
    this.left = new THREE.Mesh(new THREE.PlaneGeometry(W, H), this.paper(0, 0));
    this.left.position.set(-W / 2, 0, .03); this.left.receiveShadow = true;
    this.right = new THREE.Mesh(new THREE.PlaneGeometry(W, H), this.paper(0, 1));
    this.right.position.set(W / 2, 0, .11); this.right.receiveShadow = true;
    this.root.add(this.left, this.right); this.left.visible = false;
    const coverMesh = new THREE.Mesh(new THREE.BoxGeometry(W + .13, H + .15, .14), [
      new THREE.MeshStandardMaterial({ color: '#1b3327' }), new THREE.MeshStandardMaterial({ color: '#142b20' }),
      new THREE.MeshStandardMaterial({ color: '#203b2c' }), new THREE.MeshStandardMaterial({ color: '#203b2c' }),
      new THREE.MeshStandardMaterial({ map: this.texture(-1, 0), roughness: .66, metalness: .16 }),
      new THREE.MeshStandardMaterial({ color: '#d9dcc8', roughness: .95 }),
    ]);
    coverMesh.position.x = W / 2; coverMesh.castShadow = true; coverMesh.receiveShadow = true;
    this.cover.add(coverMesh); this.cover.position.z = .2; this.root.add(this.cover);
    this.front = new THREE.Mesh(this.leafGeometry, this.paper(0, 1));
    this.reverse = new THREE.Mesh(this.leafGeometry, this.paper(1, 0, true));
    this.front.castShadow = true; this.reverse.castShadow = true; this.front.receiveShadow = true;
    this.leaf.add(this.front, this.reverse); this.leaf.position.z = .15; this.leaf.visible = false; this.root.add(this.leaf);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.ShadowMaterial({ opacity: .19 }));
    floor.position.z = -.42; floor.receiveShadow = true; this.scene.add(floor);
    this.resizeObserver = new ResizeObserver(() => this.resize()); this.resizeObserver.observe(host); this.resize();
    host.addEventListener('pointerdown', this.down);
    host.addEventListener('pointermove', this.move);
    host.addEventListener('pointerup', this.up);
    host.addEventListener('pointercancel', this.cancel);
    document.fonts.ready.then(() => {
      if (!this.dead) for (let i = -1; i <= backCoverSpread; i++) this.dirtySpreads.add(i);
    });
    this.preload(0);
    this.animate();
  }

  private paper(index: number, side: number, back = false) {
    return new THREE.MeshStandardMaterial({ map: this.texture(index, side, back), roughness: .95, side: back ? THREE.BackSide : THREE.FrontSide });
  }
  private texture(index: number, side: number, back = false) {
    const key = `${index}-${side}-${back}`;
    if (this.textures.has(key)) return this.textures.get(key)!;
    const canvas = document.createElement('canvas'); canvas.width = 2048; canvas.height = 1152;
    this.draw(canvas, index, side);
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
    if (back) { texture.repeat.x = -1; texture.offset.x = 1; }
    this.textures.set(key, texture); return texture;
  }
  private draw(canvas: HTMLCanvasElement, index: number, side: number) {
    const c = canvas.getContext('2d')!, w = canvas.width, h = canvas.height;
    const text = (s: string, x: number, y: number, font: string, color: string) => { c.font = font; c.fillStyle = color; c.fillText(s, x, y); };
    const line = (y: number, color: string, x = 130, width = 1788) => { c.fillStyle = color; c.fillRect(x, y, width, 2); };
    const palette = spreadThemes[Math.max(0, index)];
    const paragraph = (content: string, x: number, y: number, width: number, font: string, color: string, leading = 37) => {
      c.font = font; let row = '';
      for (const word of content.split(' ')) {
        if (c.measureText(row + word).width > width && row) { text(row.trim(), x, y, font, color); row = ''; y += leading; }
        row += word + ' ';
      }
      if (row) text(row.trim(), x, y, font, color);
      return y;
    };
    const photograph = (img: HTMLImageElement | undefined, x: number, y: number, width: number, height: number, variant: number) => {
      c.save(); c.beginPath(); c.rect(x, y, width, height); c.clip();
      c.fillStyle = palette.paper; c.fillRect(x, y, width, height);
      if (img?.complete && img.naturalWidth) {
        const scale = Math.max(width / img.naturalWidth, height / img.naturalHeight);
        c.drawImage(img, x + (width - img.naturalWidth * scale) / 2, y + (height - img.naturalHeight * scale) / 2, img.naturalWidth * scale, img.naturalHeight * scale);
      } else {
        c.fillStyle = palette.ink; c.fillRect(x, y, width, height);
        c.strokeStyle = '#ffffff50'; c.lineWidth = 2;
        for (let j = 0; j < 12; j++) { c.beginPath(); c.arc(x + width * .5, y + height * .5, 30 + j * 27 + variant * 8, 0, Math.PI * 2); c.stroke(); }
        text('BRG / FIELD NOTES', x + 25, y + height - 25, '400 21px "DM Mono", monospace', '#ffffff');
      }
      c.restore();
    };
    if (index === -1 || index === backCoverSpread) {
      c.fillStyle = '#183729'; c.fillRect(0, 0, w, h);
      // Subtle woven material, geographic dotwork and inset foil rule.
      let seed = 43;
      for (let i = 0; i < 65000; i++) { seed = (seed * 16807) % 2147483647; const x = seed % w; seed = (seed * 16807) % 2147483647; c.fillStyle = i % 2 ? 'rgba(194,211,157,.035)' : 'rgba(0,0,0,.05)'; c.fillRect(x, seed % h, 2, 2); }
      c.strokeStyle = '#879369'; c.lineWidth = 2; c.strokeRect(58, 58, w - 116, h - 116); c.strokeStyle = '#42583b'; c.strokeRect(70, 70, w - 140, h - 140);
      const regions = [[.24,.36,.13,.11],[.32,.57,.06,.17],[.49,.32,.07,.06],[.51,.48,.08,.15],[.65,.35,.19,.12],[.77,.64,.07,.06]];
      for (let x = 290; x < 1790; x += 12) for (let y = 200; y < 860; y += 12) {
        if (regions.some(([cx,cy,rx,ry]) => ((x/w-cx)/rx)**2 + ((y/h-cy)/ry)**2 < 1 + .18*Math.sin(x*.03)*Math.cos(y*.03))) {
          c.fillStyle = 'rgba(183,195,129,.12)'; c.beginPath(); c.arc(x, y, 2, 0, Math.PI*2); c.fill();
        }
      }
      c.textAlign = 'center';
      text('B R G', w / 2, 412, '600 146px "Playfair Display", Georgia', '#d9d3a0');
      text(index === backCoverSpread ? 'THE GLOBAL PERSPECTIVE' : 'BUSINESS TAXONOMY', w / 2, 581, '700 100px "Oswald", Impact, sans-serif', '#e0dbaf');
      text('A  G L O B A L  A T L A S  O F  I N D U S T R I E S', w / 2, 653, '400 25px Manrope, sans-serif', '#c9cca5');
      c.fillStyle = '#a9b47a'; c.fillRect(w/2 - 35, 730, 70, 2);
      text('B O A R D R A N K   G L O B A L', w / 2, 1005, '400 21px Manrope, sans-serif', '#b7c197');
      c.textAlign = 'left'; return;
    }
    const item = industries[index - 1];
    c.fillStyle = side === 0 && item ? item.color : palette.paper; c.fillRect(0, 0, w, h);
    if (index === 0) {
      text(side ? '02     /     THE FRAMEWORK' : '01     /     AN INTRODUCTION', 130, 125, '400 25px "DM Mono", monospace', '#56634b');
      if (!side) {
        text('BUSINESS', 120, 367, '700 180px "Oswald", Impact, sans-serif', '#233c2b');
        text('TAXONOMY', 120, 542, '700 180px "Oswald", Impact, sans-serif', '#233c2b');
        text('An order to everything.', 130, 665, 'italic 73px "Playfair Display", Georgia', '#708054');
        ['A shared framework for understanding global business.', 'Industries organize economic activity into connected fields.', 'Categories, subcategories and specializations bring', 'increasing detail to the way we see the economy.'].forEach((s, i) => text(s, 130, 800 + i * 49, '400 32px Manrope, sans-serif', '#43503d'));
      } else {
        text('GLOBAL INDUSTRY STRUCTURE', 130, 258, '700 91px "Oswald", Impact, sans-serif', '#263c2c');
        ['GLOBAL ECONOMY', `${String(industries.length).padStart(2, '0')} MAIN INDUSTRIES`, 'BUSINESS CATEGORIES', 'SUBCATEGORIES', 'SPECIALIZATIONS'].forEach((s, i) => {
          const x = 160 + i * 95, y = 377 + i * 122;
          c.fillStyle = i === 0 ? '#2d4633' : '#e5e7d7'; c.fillRect(x, y - 54, 1450 - i * 95, 92);
          text(`0${i+1}`, x + 30, y + 2, '400 26px "DM Mono", monospace', i === 0 ? '#d0d8a8' : '#627348');
          text(s, x + 130, y + 4, '500 33px Manrope, sans-serif', i === 0 ? '#f2efd9' : '#30452e');
        });
        text('From the global picture to a precise area of expertise.', 160, 1020, 'italic 37px "Playfair Display", Georgia', '#536247');
      }
    } else if (item) {
      const img = this.images.get(index);
      if (!side) {
        if (img?.complete && img.naturalWidth) {
          const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
          c.drawImage(img, (w - img.naturalWidth * scale)/2, (h - img.naturalHeight * scale)/2, img.naturalWidth*scale, img.naturalHeight*scale);
        } else {
          const g = c.createLinearGradient(0, 0, w, h); g.addColorStop(0, item.color); g.addColorStop(1, '#1a2526'); c.fillStyle = g; c.fillRect(0,0,w,h);
          c.strokeStyle = item.accent; c.globalAlpha = .18;
          for (let j = 0; j < 15; j++) { c.strokeRect(300+j*65,150+j*30,800,800); } c.globalAlpha = 1;
        }
        const gradient = c.createLinearGradient(0, 0, 0, h); gradient.addColorStop(0, '#00000055'); gradient.addColorStop(.35, '#00000011'); gradient.addColorStop(1, '#000000ed'); c.fillStyle = gradient; c.fillRect(0,0,w,h);
        text(`INDUSTRY  ${String(index).padStart(2,'0')}     /     THE GLOBAL ATLAS`, 130, 125, '400 25px "DM Mono", monospace', '#ffffff');
        text(String(index).padStart(2,'0'), 125, 710, 'italic 110px "Playfair Display", Georgia', item.accent);
        const title = item.name.toUpperCase();
        if (item.taxonomy) {
          const titleFont = '700 108px "Oswald", Impact, sans-serif';
          c.font = titleFont;
          const titleLines: string[] = [];
          let titleRow = '';
          for (const word of title.split(' ')) {
            if (c.measureText(`${titleRow}${word} `).width > 1720 && titleRow) {
              titleLines.push(titleRow.trim());
              titleRow = '';
            }
            titleRow += `${word} `;
          }
          if (titleRow) titleLines.push(titleRow.trim());
          const titleStart = titleLines.length > 1 ? 800 : 890;
          titleLines.forEach((row, lineIndex) => text(row, 120, titleStart + lineIndex * 98, titleFont, '#ffffff'));

          const descriptionFont = '400 31px Manrope, sans-serif';
          c.font = descriptionFont;
          const descriptionLines: string[] = [];
          let descriptionRow = '';
          for (const word of item.description.split(' ')) {
            if (c.measureText(`${descriptionRow}${word} `).width > 1720 && descriptionRow) {
              descriptionLines.push(descriptionRow.trim());
              descriptionRow = '';
            }
            descriptionRow += `${word} `;
          }
          if (descriptionRow) descriptionLines.push(descriptionRow.trim());
          descriptionLines.forEach((row, lineIndex) => text(row, 130, 986 + lineIndex * 43, descriptionFont, '#ffffff'));
          if (item.photoCredit) {
            text(item.photoCredit, 130, 1128, '400 18px "DM Mono", monospace', '#ffffffc9');
          }
        } else {
          text(title, 120, 890, `700 ${title.length > 18 ? 112 : 168}px "Oswald", Impact, sans-serif`, '#ffffff');
          const words = item.description.split(' '); let row = '', y = 986;
          for (const word of words) { if ((row + word).length > 68) { text(row,130,y,'400 31px Manrope, sans-serif','#ffffff'); row=''; y+=45; } row += word+' '; }
          text(row,130,y,'400 31px Manrope, sans-serif','#ffffff');
        }
      } else if (item.taxonomy) {
        c.fillStyle = '#fffefa'; c.fillRect(0, 0, w, h);
        c.fillStyle = palette.glow + '12'; c.fillRect(0, 0, w, h);
        text(`BRG / ${String(index).padStart(2, '0')}`, 130, 95, '400 24px "DM Mono", monospace', palette.ink);
        c.textAlign = 'right';
        text('INDUSTRY CLASSIFICATION', 1918, 95, '400 24px "DM Mono", monospace', palette.ink);
        c.textAlign = 'left';
        c.font = '700 68px "Oswald", Impact, sans-serif';
        c.fillStyle = '#292b26';
        c.fillText(item.name.toUpperCase(), 130, 205, 1788);
        text('A structured map of the activities and expertise within this industry.', 130, 254, 'italic 31px "Playfair Display", Georgia', '#4e4d46');
        line(292, palette.ink + '50');

        const rowY = [330, 515, 700, 885];
        item.taxonomy.forEach((category, categoryIndex) => {
          const x = 130;
          const y = rowY[categoryIndex];
          const columnWidth = 850;
          c.fillStyle = palette.ink + '08';
          c.fillRect(x, y, 1788, 170);
          c.strokeStyle = palette.ink + '30';
          c.lineWidth = 2;
          c.strokeRect(x, y, 1788, 170);
          text(`${String(categoryIndex + 1).padStart(2, '0')}`, x + 24, y + 49, '400 25px "DM Mono", monospace', palette.ink);
          c.font = '700 68px "Oswald", Impact, sans-serif';
          c.fillStyle = '#292b26';
          c.fillText(category.name.toUpperCase(), x + 100, y + 53, 1660);
          c.fillStyle = palette.ink + '50';
          c.fillRect(x + 24, y + 68, 1740, 2);

          category.subcategories.forEach((subcategory, subcategoryIndex) => {
            const columnX = x + 24 + subcategoryIndex * 880;
            text(subcategory.name, columnX, y + 101, '600 42px Manrope, sans-serif', '#30332f');
            paragraph(
              `SPECIALIZATIONS  ${subcategory.specializations.join('  ·  ')}`,
              columnX,
              y + 132,
              columnWidth,
              '400 38px Manrope, sans-serif',
              palette.secondary,
              30,
            );
          });
        });
      } else {
        // Separate 16:9 page, composed like a luxury magazine rather than a list.
        c.fillStyle = '#fffefa'; c.fillRect(0, 0, w, h);
        c.fillStyle = palette.glow + '12'; c.fillRect(0, 0, w, h);
        text(`BRG / ${String(index).padStart(2, '0')}`, 130, 95, '400 24px "DM Mono", monospace', palette.ink);
        c.textAlign = 'right';
        text('THE INDUSTRY LANDSCAPE', 1918, 95, '400 24px "DM Mono", monospace', palette.ink);
        c.textAlign = 'left';
        c.font = '700 118px "Playfair Display", Georgia';
        const fieldWidth = c.measureText('Field ').width;
        text('Field', 125, 235, '700 118px "Playfair Display", Georgia', '#282723');
        text('notes', 125 + fieldWidth, 235, 'italic 118px "Playfair Display", Georgia', palette.ink);
        text('A closer look at the ideas, environments and activity within.', 840, 210, 'italic 35px "Playfair Display", Georgia', '#4e4d46');
        line(275, palette.ink + '50');
        const detail = this.details.get(index);
        const photos = [detail?.[0], detail?.[1], img];
        const captions = [
          `A view into ${item.themes[0].toLowerCase()}. ${item.description}`,
          `Exploring ${item.themes[1].toLowerCase()} and the environments in which this industry takes shape.`,
          `${item.themes[2]} form another part of this connected industry landscape.`,
        ];
        for (let i = 0; i < 3; i++) {
          const x = 130 + i * 615;
          const imageY = i === 1 ? 585 : 320;
          const headingY = i === 1 ? 345 : 670;
          photograph(photos[i], x, imageY, 555, i === 1 ? 290 : 305, i);
          const headingBottom = paragraph(item.themes[i].toUpperCase(), x, headingY, 550, '700 28px "Oswald", sans-serif', '#292b26', 33);
          const bodyY = headingBottom + 51;
          text(String(i + 1), x, bodyY + 54, '600 108px "Playfair Display", Georgia', palette.ink);
          paragraph(captions[i], x + 79, bodyY, 468, '400 30px "Playfair Display", Georgia', '#393b34', 34);
        }
        line(915, palette.ink + '50');
        text('4', 135, 1008, '600 100px "Playfair Display", Georgia', palette.ink);
        text(item.themes[3].toUpperCase(), 218, 958, '700 30px "Oswald", sans-serif', '#292b26');
        text('Another lens through which to understand this industry.', 218, 1004, 'italic 31px "Playfair Display", Georgia', '#4e4d46');
        text('INDUSTRY → CATEGORY → SUBCATEGORY → SPECIALIZATION', 1100, 957, '400 22px "DM Mono", monospace', palette.ink);
        paragraph('Editorial themes only. Detailed taxonomy source records have not been supplied.', 1100, 996, 800, '400 25px Manrope, sans-serif', '#53584a', 34);
      }
    }
    if (side || !item) {
      line(1080, '#c4cbb7'); text('BOARDRANK GLOBAL', 130, 1120, '400 21px "DM Mono", monospace', '#556248');
      text(String(index * 2 + side + 1).padStart(2,'0'), 1860, 1120, '400 21px "DM Mono", monospace', '#556248');
    }
    const shade = c.createLinearGradient(side ? 0 : w, 0, side ? 100 : w - 100, 0); shade.addColorStop(0,'#0000002a'); shade.addColorStop(1,'#00000000'); c.fillStyle = shade; c.fillRect(0,0,w,h);
  }
  private refreshSpread(index: number) {
    this.textures.forEach((t, key) => {
      const match = /^(-?\d+)-(\d+)-/.exec(key);
      if (!match || Number(match[1]) !== index) return;
      this.draw(t.image as HTMLCanvasElement, index, Number(match[2]));
      t.needsUpdate = true;
    });
  }
  private preload(index: number) {
    for (let i = Math.max(1, index - 1); i <= Math.min(industries.length, index + 1); i++) {
      if (this.images.has(i)) continue;
      const img = new Image(); img.crossOrigin = 'anonymous';
      img.onload = () => { if (!this.dead) this.dirtySpreads.add(i); };
      img.onerror = () => { /* The locally drawn architectural texture remains visible. */ };
      img.src = industries[i-1].photo;
      this.images.set(i, img);
      const detail = (supportingPhotos[i - 1] ?? []).map(photo => {
        const image = new Image(); image.crossOrigin = 'anonymous';
        image.onload = () => { if (!this.dead) this.dirtySpreads.add(i); };
        image.onerror = () => { /* Keep the visible illustrated field-note placeholder. */ };
        image.src = photo;
        return image;
      });
      this.details.set(i, detail);
    }
  }
  open() {
    if (this.turn || this.isOpen) return;
    this.isOpen = true;
    this.coverMotion = { from: this.opening, to: 1, time: performance.now() };
    this.change(this.index, true); this.rustle();
  }
  close() {
    if (this.turn || !this.isOpen) return;
    this.pendingSpread = null; this.isOpen = false;
    this.coverMotion = { from: this.opening, to: 0, time: performance.now() };
    this.change(this.index, false); this.rustle();
  }
  next() { if (!this.isOpen) return this.open(); this.startTurn(1); }
  previous() { if (this.isOpen) this.startTurn(-1); }
  goTo(index: number) {
    if (this.turn) return;
    if (!this.isOpen) this.open();
    if (index === this.index) return;
    if (this.coverMotion) { this.pendingSpread = index; return; }
    this.startTurn(index > this.index ? 1 : -1, index);
  }
  setMobileSide(side: number) { this.mobileSide = side; }
  private startTurn(direction: number, target = this.index + direction, drag = false) {
    if (this.turn || target < 0 || target > backCoverSpread) return;
    if (this.coverMotion || this.opening < .999) {
      if (!drag && this.isOpen) this.pendingSpread = target;
      return;
    }
    this.themeChange(target);
    this.preload(target);
    this.turn = { from: this.index, to: target, start: direction > 0 ? 0 : 1, end: direction > 0 ? 1 : 0, progress: direction > 0 ? 0 : 1, time: performance.now(), duration: this.reduced ? 100 : 1450, dragging: drag };
    (this.front.material as THREE.Material).dispose(); (this.reverse.material as THREE.Material).dispose();
    this.front.material = this.paper(direction > 0 ? this.index : target, 1);
    this.reverse.material = this.paper(direction > 0 ? target : this.index, 0, true);
    this.setStatic(direction > 0 ? this.index : target, direction > 0 ? target : this.index);
    this.leaf.visible = true; if (!drag) this.rustle();
  }
  private setStatic(left: number, right: number) {
    (this.left.material as THREE.Material).dispose(); (this.right.material as THREE.Material).dispose();
    this.left.material = this.paper(left, 0); this.right.material = this.paper(right, 1);
  }
  private resize() {
    const { width, height } = this.host.getBoundingClientRect();
    this.renderer.setSize(width, height, false); this.camera.aspect = width / height; this.camera.updateProjectionMatrix();
  }
  private down = (e: PointerEvent) => {
    if (this.turn) return;
    if (e.isPrimary === false || e.button > 0) return;
    try { this.host.setPointerCapture(e.pointerId); } catch { /* Synthetic and cancelled pointers may not be active. */ }
    const rect = this.host.getBoundingClientRect();
    this.pointer = { x: e.clientX, y: e.clientY, time: performance.now(), drag: false, direction: e.clientX - rect.left > rect.width / 2 ? 1 : -1 };
  };
  private move = (e: PointerEvent) => {
    if (!this.pointer || !this.isOpen) return;
    const dx = e.clientX - this.pointer.x;
    if (Math.abs(dx) > 12 && !this.pointer.drag) {
      this.pointer.direction = dx < 0 ? 1 : -1;
      this.startTurn(this.pointer.direction, undefined, true); this.pointer.drag = !!this.turn;
    }
    if (this.turn?.dragging) {
      const amount = Math.min(.98, Math.max(0, -dx * this.pointer.direction / (this.host.clientWidth * .45)));
      this.turn.progress = this.pointer.direction > 0 ? amount : 1 - amount;
    }
  };
  private up = (e: PointerEvent) => {
    if (!this.pointer) return;
    if (!this.isOpen) this.open();
    else if (this.turn?.dragging) {
      const t = this.turn, distance = Math.abs(t.progress - t.start);
      const complete = distance > .3 || (Math.abs(e.clientX - this.pointer.x) > 35 && performance.now() - this.pointer.time < 400);
      t.end = complete ? t.end : t.start; t.start = t.progress; t.time = performance.now(); t.duration = this.reduced ? 80 : 900; t.dragging = false; this.rustle();
      if (!complete) t.to = t.from;
    } else if (!this.turn) this.pointer.direction > 0 ? this.next() : this.previous();
    this.pointer = null;
  };
  private cancel = () => {
    if (this.turn?.dragging) { this.turn.end = this.turn.start; this.turn.start = this.turn.progress; this.turn.to = this.turn.from; this.turn.dragging = false; this.turn.time = performance.now(); this.turn.duration = 400; }
    this.pointer = null;
  };
  private animate = () => {
    if (this.dead) return;
    this.frame = requestAnimationFrame(this.animate);
    const now = performance.now();
    if (this.coverMotion) {
      const motion = this.coverMotion;
      const t = Math.min(1, (now - motion.time) / (this.reduced ? 120 : 2200));
      const eased = t * t * t * (t * (t * 6 - 15) + 10);
      this.opening = THREE.MathUtils.lerp(motion.from, motion.to, eased);
      if (t === 1) {
        this.opening = motion.to; this.coverMotion = null;
        if (this.pendingSpread !== null && this.isOpen) {
          const target = this.pendingSpread; this.pendingSpread = null;
          this.startTurn(target > this.index ? 1 : -1, target);
        }
      }
    }
    const p = this.opening;
    this.cover.rotation.y = -Math.PI * p;
    this.cover.visible = p < 1;
    this.left.visible = p > .78;
    this.root.getObjectByName('leftBoard')!.visible = p > .4;
    this.root.getObjectByName('leftStack')!.visible = p > .78;
    const mobile = this.host.clientWidth < 700;
    const focus = mobile && this.isOpen ? (this.mobileSide ? W/2 : -W/2) : 0;
    const center = THREE.MathUtils.lerp(4, focus, p);
    this.root.rotation.x = THREE.MathUtils.lerp(-.23, -.04, p);
    this.root.rotation.y = THREE.MathUtils.lerp(-.22, 0, p);
    this.root.rotation.z = THREE.MathUtils.lerp(-.065, 0, p);
    this.pivot.set(center, 0, 0).applyEuler(this.root.rotation);
    this.root.position.copy(this.pivot).multiplyScalar(-1);
    if (this.turn) {
      const t = this.turn;
      if (!t.dragging) {
        const elapsed = Math.min(1, (now - t.time) / t.duration);
        const ease = elapsed * elapsed * (3 - 2 * elapsed);
        t.progress = THREE.MathUtils.lerp(t.start, t.end, ease);
        if (elapsed === 1) {
          this.index = t.to; this.turn = null; this.leaf.visible = false;
          this.setStatic(this.index, this.index); this.change(this.index, true); this.preload(this.index);
        }
      }
      const progress = t.progress;
      this.leaf.rotation.y = 0;
      const pos = this.leafGeometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const u = (i % 49) / 48;
        const angle = Math.PI * progress;
        // Bend in world-facing coordinates: the sheet must never dip through the page block.
        pos.setX(i, W * u * Math.cos(angle));
        pos.setZ(i, W * u * Math.sin(angle) + Math.sin(u * Math.PI) * Math.sin(angle) * .65);
      }
      pos.needsUpdate = true; this.leafGeometry.computeVertexNormals();
      this.leafGeometry.computeBoundingBox();
    }
    this.fitCamera(mobile);
    if (!this.turn && !this.coverMotion && this.dirtySpreads.size) {
      const index = this.dirtySpreads.values().next().value;
      if (index !== undefined) { this.dirtySpreads.delete(index); this.refreshSpread(index); }
    }
    this.renderer.render(this.scene, this.camera);
  };
  private fitCamera(mobile: boolean) {
    this.root.updateMatrixWorld(true);
    const tan = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    let distance = 1;
    this.root.traverseVisible(object => {
      if (!(object instanceof THREE.Mesh)) return;
      if (!object.geometry.boundingBox) object.geometry.computeBoundingBox();
      this.fitBox.copy(object.geometry.boundingBox!);
      for (let i = 0; i < 8; i++) {
        this.fitPoint.set(
          i & 1 ? this.fitBox.max.x : this.fitBox.min.x,
          i & 2 ? this.fitBox.max.y : this.fitBox.min.y,
          i & 4 ? this.fitBox.max.z : this.fitBox.min.z,
        ).applyMatrix4(object.matrixWorld);
        // Mobile intentionally frames one whole 16:9 page, not a squeezed spread.
        if (mobile && this.isOpen && !this.coverMotion && !this.turn && Math.abs(this.fitPoint.x) > W * .65) continue;
        distance = Math.max(distance, this.fitPoint.z + Math.max(
          Math.abs(this.fitPoint.x) / (tan * this.camera.aspect * .86),
          Math.abs(this.fitPoint.y) / (tan * .76),
        ));
      }
    });
    if (this.coverMotion) {
      // Reserve the left board's space gradually before it becomes visible.
      const leftEdge = -W * THREE.MathUtils.smoothstep(this.opening, 0, .4);
      for (const y of [-H / 2, H / 2]) {
        this.fitPoint.set(leftEdge, y, 0).applyMatrix4(this.root.matrixWorld);
        distance = Math.max(distance, this.fitPoint.z + Math.max(
          Math.abs(this.fitPoint.x) / (tan * this.camera.aspect * .86),
          Math.abs(this.fitPoint.y) / (tan * .76),
        ));
      }
    }
    this.camera.position.set(0, 0, distance + .7);
    this.camera.lookAt(0, 0, 0);
    this.host.dataset.bookState = this.coverMotion ? 'opening' : this.turn ? 'turning' : this.isOpen ? 'open' : 'closed';
    this.host.dataset.bookSpread = String(this.index);
  }
  dispose() {
    this.dead = true; cancelAnimationFrame(this.frame); this.resizeObserver.disconnect();
    this.host.removeEventListener('pointerdown', this.down); this.host.removeEventListener('pointermove', this.move);
    this.host.removeEventListener('pointerup', this.up); this.host.removeEventListener('pointercancel', this.cancel);
    this.scene.traverse(o => { if (o instanceof THREE.Mesh) { o.geometry.dispose(); const materials = Array.isArray(o.material) ? o.material : [o.material]; materials.forEach(m => m.dispose()); } });
    this.textures.forEach(t => t.dispose()); this.renderer.dispose(); this.renderer.domElement.remove();
  }
}
