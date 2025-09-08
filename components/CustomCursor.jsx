'use client';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e) => {
      if (e.target && e.target.tagName && (
        e.target.tagName === 'BUTTON' || 
        e.target.tagName === 'A' || 
        (e.target.classList && e.target.classList.contains && e.target.classList.contains('interactive'))
      )) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target && e.target.tagName && (
        e.target.tagName === 'BUTTON' || 
        e.target.tagName === 'A' || 
        (e.target.classList && e.target.classList.contains && e.target.classList.contains('interactive'))
      )) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed w-4 h-4 bg-blue-400 rounded-full pointer-events-none z-[9999] transition-all duration-100 ${
          isClicking ? 'scale-75' : 'scale-100'
        }`}
        style={{
          left: position.x - 8,
          top: position.y - 8,
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Cursor trail */}
      <div
        className={`fixed w-8 h-8 border-2 border-purple-400 rounded-full pointer-events-none z-[9998] transition-all duration-300 ${
          isHovering ? 'scale-150 border-yellow-400' : 'scale-100'
        } ${isClicking ? 'scale-75' : ''}`}
        style={{
          left: position.x - 16,
          top: position.y - 16,
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
};

export default CustomCursor;
