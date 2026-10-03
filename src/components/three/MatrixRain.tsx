"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let columns = 0;
    let drops: number[] = [];
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/\\|";

    const resizeCanvas = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const fontSize = w < 640 ? 16 : 14;
      columns = Math.max(1, Math.floor(w / fontSize));
      drops = Array.from({ length: columns }, () => Math.random() * -100);
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let lastTime = 0;
    let rafId = 0;

    const draw = (time: number) => {
      rafId = requestAnimationFrame(draw);
      if (time - lastTime < 50) return;
      lastTime = time;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#ffffff";
      ctx.font = "14px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * (w < 640 ? 16 : 14);
        const y = drops[i] * (w < 640 ? 16 : 14);

        ctx.fillText(text, x, y);

        if (y > h && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    if (!reduced) {
      rafId = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-10"
    />
  );
}
