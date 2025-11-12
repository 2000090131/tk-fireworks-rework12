import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SoundToggle: React.FC = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const toggleSound = () => {
    setIsPlaying(!isPlaying);
    // Add sound effect here when clicked
    if (!isPlaying) {
      console.log('🎵 Playing background music!');
    }
  };

  const adjustVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-4 shadow-lg animate-bounce">
      <div className="flex items-center space-x-3">
        {/* Sound Button */}
        <button
          onClick={toggleSound}
          className="text-3xl hover:scale-110 transition-transform duration-200"
          aria-label="Toggle sound"
        >
          {isPlaying ? '🔊' : '🔇'}
        </button>

        {/* Volume Slider (shown when sound is on) */}
        {isPlaying && (
          <div className="flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1">
            <span className="text-white text-sm">🎵</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={adjustVolume}
              className="w-20 h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* Fun Label */}
      <div className="text-xs text-white text-center mt-2 font-bold">
        {isPlaying ? 'Party Mode! 🎉' : 'Click for Music 🎶'}
      </div>
    </div>
  );
};

export default SoundToggle;