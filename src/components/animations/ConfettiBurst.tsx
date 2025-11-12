import React, { useState } from 'react';

interface ConfettiBurstProps {
  children: React.ReactNode;
  className?: string;
}

const ConfettiBurst: React.FC<ConfettiBurstProps> = ({ children, className = '' }) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create confetti particles
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
    }));

    setParticles(prev => [...prev, ...newParticles]);

    // Remove particles after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 1000);
  };

  const colors = ['#FF3B30', '#FF6B35', '#FFD23F', '#FF9500', '#5AC8FA', '#FF2D55'];

  return (
    <div
      className={`relative inline-block cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {children}

      {/* Confetti particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-ping"
              style={{
                backgroundColor: colors[i % colors.length],
                animation: `confetti-burst 1s ease-out forwards`,
                transform: `rotate(${i * 60}deg) translateX(20px)`,
              }}
            />
          ))}
        </div>
      ))}

      <style>{`
        @keyframes confetti-burst {
          0% {
            transform: translateX(0) translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(var(--tx, 100px)) translateY(var(--ty, -100px)) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ConfettiBurst;