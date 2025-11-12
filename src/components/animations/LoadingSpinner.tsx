import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  text = 'Loading amazing fireworks...'
}) => {
  const sizeClasses = {
    small: 'w-16 h-16 text-2xl',
    medium: 'w-24 h-24 text-4xl',
    large: 'w-32 h-32 text-6xl'
  };

  const emojis = ['🎆', '🎇', '✨', '🌟', '💫', '🎈', '🎉'];

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`${sizeClasses[size]} relative animate-bounce`}>
        {emojis.map((emoji, index) => (
          <span
            key={index}
            className="absolute inset-0 flex items-center justify-center animate-spin"
            style={{
              animation: `spin ${2 + index * 0.5}s linear infinite`,
              animationDelay: `${index * 0.2}s`
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {text && (
        <div className="mt-6 text-center">
          <p className="text-xl font-bold rainbow-text animate-pulse">
            {text}
          </p>
          <div className="flex justify-center space-x-2 mt-3 text-2xl">
            <span className="wiggle">🎆</span>
            <span className="wiggle">🎇</span>
            <span className="wiggle">✨</span>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg) translateX(30px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(30px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;