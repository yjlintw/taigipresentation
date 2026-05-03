import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide } from './components/Slide';
import { slides } from './slides/content';

function App() {
  const [[page, direction], setPage] = useState([0, 0]);
  const slideIndex = page;

  const paginate = useCallback((newDirection) => {
    setPage(([prevPage]) => {
      let next = prevPage + newDirection;
      if (next < 0) next = 0;
      if (next >= slides.length) next = slides.length - 1;
      return [next, newDirection];
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        paginate(1);
      } else if (e.key === 'ArrowLeft') {
        paginate(-1);
      } else if (/^[0-9]$/.test(e.key)) {
        const num = parseInt(e.key, 10);
        const targetId = num === 0 ? 10 : num; // '0' maps to slide 10
        const targetIndex = slides.findIndex(s => s.id === targetId);
        if (targetIndex !== -1) {
          setPage(prev => {
            if (prev[0] === targetIndex) return prev;
            return [targetIndex, targetIndex > prev[0] ? 1 : -1];
          });
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const progress = ((slideIndex + 1) / slides.length) * 100;

  return (
    <div className="presentation-container">
      <AnimatePresence initial={false} custom={direction}>
        <Slide key={slides[slideIndex].groupId || slideIndex} direction={direction}>
          {slides[slideIndex].content}
        </Slide>
      </AnimatePresence>

      <div className="controls">
        <button 
          className="control-btn" 
          onClick={() => paginate(-1)} 
          disabled={slideIndex === 0}
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className="control-btn" 
          onClick={() => paginate(1)} 
          disabled={slideIndex === slides.length - 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div style={{ position: 'absolute', bottom: '2.5rem', right: '3rem', fontSize: '1.2rem', opacity: 0.5, fontFamily: 'var(--font-main)' }}>
        {slides[slideIndex].id} / {slides[slides.length - 1].id}
      </div>

      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default App;
