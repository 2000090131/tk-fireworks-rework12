import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FireworksBackground: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const container = canvasRef.current;
    const fireworks: HTMLElement[] = [];

    // Create floating firework emojis
    const createFirework = () => {
      const firework = document.createElement('div');
      const emojis = ['🎆', '🎇', '✨', '💫', '⭐', '🌟'];
      firework.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      firework.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 20 + 20}px;
        left: ${Math.random() * 100}%;
        top: 100%;
        opacity: 0;
        pointer-events: none;
        z-index: 1;
      `;

      container.appendChild(firework);
      fireworks.push(firework);

      // Animate the firework
      gsap.to(firework, {
        y: -window.innerHeight - 100,
        x: (Math.random() - 0.5) * 200,
        rotation: Math.random() * 360,
        opacity: 1,
        duration: Math.random() * 3 + 2,
        ease: "power1.out",
        onComplete: () => {
          gsap.to(firework, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              firework.remove();
              const index = fireworks.indexOf(firework);
              if (index > -1) {
                fireworks.splice(index, 1);
              }
            }
          });
        }
      });
    };

    // Create fireworks periodically
    const interval = setInterval(createFirework, 500);

    return () => {
      clearInterval(interval);
      fireworks.forEach(firework => firework.remove());
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-1"
      style={{ zIndex: 1 }}
    />
  );
};

export default FireworksBackground;