import React, { useEffect, useRef } from "react";

/**
 * Particle Network — React + Tailwind
 * Props:
 *  - className: extra classes for the container
 *  - options: { velocity, density, netLineDistance, netLineColor, particleColors, spawnQuantity }
 */
export default function ParticleNetwork({
  className = "",
  options = {},
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const particlesRef = useRef([]);
  const interactionRef = useRef(null);
  const spawnTimerRef = useRef(null);

  const optsRef = useRef({
    velocity: 1,                 // higher = faster
    density: 15000,              // lower = denser
    netLineDistance: 200,
    netLineColor: "#929292",
    particleColors: ["#aaa"],
    spawnQuantity: 3,
    ...options,
  });

  // Utilities
  const rand = (min, max, int = false) => {
    const n = Math.random() * (max - min) + min;
    return int ? Math.round(n) : n;
  };
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // Resize canvas with devicePixelRatio for crisp lines
  const sizeCanvas = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const dpr = window.devicePixelRatio || 1;
    const { clientWidth: w, clientHeight: h } = container;

    canvas.width = Math.max(1, Math.floor(w * dpr));
    canvas.height = Math.max(1, Math.floor(h * dpr));
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // scale drawing ops
  };

  // Particle class
  class Particle {
    constructor(network, x, y) {
      this.network = network;
      this.canvas = canvasRef.current;
      this.ctx = this.canvas.getContext("2d");
      this.color = pick(optsRef.current.particleColors);
      this.radius = rand(1.5, 2.5);
      this.opacity = 0;
      const container = containerRef.current;
      const w = container.clientWidth;
      const h = container.clientHeight;
      this.x = x ?? Math.random() * w;
      this.y = y ?? Math.random() * h;
      this.vx = (Math.random() - 0.5) * optsRef.current.velocity;
      this.vy = (Math.random() - 0.5) * optsRef.current.velocity;
    }
    update() {
      this.opacity = Math.min(1, this.opacity + 0.01);

      const container = containerRef.current;
      const w = container.clientWidth;
      const h = container.clientHeight;

      // bounce back if far outside
      if (this.x > w + 100 || this.x < -100) this.vx = -this.vx;
      if (this.y > h + 100 || this.y < -100) this.vy = -this.vy;

      this.x += this.vx;
      this.y += this.vy;
    }
    draw() {
      const ctx = this.ctx;
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  // Build initial set of particles
  const createParticles = () => {
    const container = containerRef.current;
    if (!container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;

    const quantity = Math.max(1, Math.floor((w * h) / optsRef.current.density));
    const arr = [];
    for (let i = 0; i < quantity; i++) arr.push(new Particle());
    particlesRef.current = arr;
  };

  // Draw connection lines + particles
  const update = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const { netLineDistance, netLineColor } = optsRef.current;
    const particles = particlesRef.current;

    // clear frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // connections
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];

        // quick reject (axis-aligned distance)
        const minAxis = Math.min(Math.abs(p1.x - p2.x), Math.abs(p1.y - p2.y));
        if (minAxis > netLineDistance) continue;

        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > netLineDistance) continue;

        ctx.beginPath();
        ctx.strokeStyle = netLineColor;
        ctx.globalAlpha =
          ((netLineDistance - dist) / netLineDistance) * p1.opacity * p2.opacity;
        ctx.lineWidth = 0.7;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }

    // particles
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    rafRef.current = requestAnimationFrame(update);
  };

  // Interaction particle follows pointer
  const ensureInteraction = () => {
    if (!interactionRef.current) {
      const p = new Particle();
      p.vx = 0; p.vy = 0;
      interactionRef.current = p;
      particlesRef.current.push(p);
    }
    return interactionRef.current;
  };
  const removeInteraction = () => {
    const p = interactionRef.current;
    if (!p) return;
    const idx = particlesRef.current.indexOf(p);
    if (idx > -1) particlesRef.current.splice(idx, 1);
    interactionRef.current = null;
  };

  // Event handlers
  useEffect(() => {
    const canvas = canvasRef.current;
    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const p = ensureInteraction();
      p.x = e.clientX - rect.left;
      p.y = e.clientY - rect.top;
    };
    const onPointerDown = () => {
      const qty = optsRef.current.spawnQuantity;
      if (spawnTimerRef.current) clearInterval(spawnTimerRef.current);
      spawnTimerRef.current = setInterval(() => {
        const p = interactionRef.current;
        if (!p) return;
        for (let i = 0; i < qty; i++) {
          particlesRef.current.push(new Particle(null, p.x, p.y));
        }
      }, 50);
    };
    const onPointerUp = () => {
      if (spawnTimerRef.current) {
        clearInterval(spawnTimerRef.current);
        spawnTimerRef.current = null;
      }
    };
    const onPointerLeave = () => {
      onPointerUp();
      removeInteraction();
    };

    const onResize = () => {
      sizeCanvas();
      createParticles();
    };

    // init
    sizeCanvas();
    createParticles();
    rafRef.current = requestAnimationFrame(update);

    // listeners
    window.addEventListener("resize", onResize);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      if (spawnTimerRef.current) clearInterval(spawnTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 h-screen bg-black ${className}`}
      aria-hidden="true"
    >
      {/* optional soft glows (behind canvas) */}
      <div className="glow glow-1 pointer-events-none" />
      <div className="glow glow-2 pointer-events-none" />
      <div className="glow glow-3 pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
