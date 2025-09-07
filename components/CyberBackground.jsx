'use client';
import { useEffect, useRef, useCallback } from 'react';

const CyberBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Performance optimization: Use device pixel ratio for better quality
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    
    ctx.scale(dpr, dpr);

    const particles = [];
    // Reduce particle count for better performance
    const particleCount = window.innerWidth < 768 ? 20 : 35;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Performance optimization: Throttle animation to 30fps on mobile
    let lastTime = 0;
    const targetFPS = window.innerWidth < 768 ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime) => {
      animationRef.current = requestAnimationFrame(animate);
      
      if (currentTime - lastTime < frameInterval) return;
      lastTime = currentTime;

      ctx.clearRect(0, 0, rect.width, rect.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Optimize connections: Only draw if less than 30 particles
      if (particleCount <= 30) {
        particles.forEach((particle, i) => {
          particles.slice(i + 1).forEach(otherParticle => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = dx * dx + dy * dy; // Skip expensive Math.sqrt

            if (distance < 10000) { // 100^2 = 10000
              ctx.globalAlpha = 0.1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = '#64b5f6';
              ctx.stroke();
            }
          });
        });
      }
    };

    animate();

    const handleResize = () => {
      const newRect = canvas.getBoundingClientRect();
      canvas.width = newRect.width * dpr;
      canvas.height = newRect.height * dpr;
      canvas.style.width = newRect.width + 'px';
      canvas.style.height = newRect.height + 'px';
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 1 }}
    />
  );
};

export default CyberBackground;
