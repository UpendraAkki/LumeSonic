import React, { useEffect, useRef, useState } from 'react';

interface InteractiveCursorProps {
  className?: string;
}

const InteractiveCursor: React.FC<InteractiveCursorProps> = ({ className = '' }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Add cursor class to body
    document.body.classList.add('interactive-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      
      cursor.style.transform = `translate3d(${x - 10}px, ${y - 10}px, 0)`;
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = () => {
      setIsHovering(true);
    };

    const handleMouseUp = () => {
      setIsHovering(false);
    };

    // Add event listeners for hoverable elements
    const hoverableElements = document.querySelectorAll('a, button, [role="button"]');
    
    const handleHoverEnter = () => setIsHovering(true);
    const handleHoverLeave = () => setIsHovering(false);

    hoverableElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverEnter);
      el.addEventListener('mouseleave', handleHoverLeave);
    });

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      // Remove cursor class from body
      document.body.classList.remove('interactive-cursor-active');
      
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      hoverableElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverEnter);
        el.removeEventListener('mouseleave', handleHoverLeave);
      });
    };
  }, [isVisible]);

  return (
    <>
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-5 h-5 pointer-events-none z-[9999] transition-all duration-150 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovering ? 'scale-150' : 'scale-100'} ${className}`}
        style={{
          background: `radial-gradient(circle, rgba(34, 197, 94, 0.8) 0%, rgba(34, 197, 94, 0.4) 40%, transparent 70%)`,
          borderRadius: '50%',
          boxShadow: '0 0 20px rgba(34, 197, 94, 0.6)',
        }}
      />
      
      {/* Cursor trail effect */}
      <div
        className={`fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isVisible ? 'opacity-30' : 'opacity-0'
        } ${isHovering ? 'scale-200' : 'scale-100'}`}
        style={{
          background: `radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.1) 40%, transparent 70%)`,
          borderRadius: '50%',
          transform: `translate3d(${cursorRef.current?.style.transform.match(/-?\d+(?:\.\d+)?/g)?.[0] || 0}px, ${cursorRef.current?.style.transform.match(/-?\d+(?:\.\d+)?/g)?.[1] || 0}px, 0) translate(-50%, -50%)`,
        }}
      />


    </>
  );
};

export default InteractiveCursor; 