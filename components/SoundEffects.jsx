'use client';
import { useEffect } from 'react';

const SoundEffects = () => {
  useEffect(() => {
    // Create audio context for sound effects
    let audioContext;
    
    const initAudio = () => {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
    };

    const playHoverSound = () => {
      if (!audioContext) return;
      
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    };

    const playClickSound = () => {
      if (!audioContext) return;
      
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.05);
      
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.05);
    };

    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.classList.contains('interactive')) {
        initAudio();
        playHoverSound();
      }
    };

    const handleClick = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.classList.contains('interactive')) {
        initAudio();
        playClickSound();
      }
    };

    // Add event listeners
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('click', handleClick, true);
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SoundEffects;
