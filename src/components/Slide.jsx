import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    };
  }
};

export const Slide = ({ children, direction }) => {
  return (
    <motion.div
      className="slide-wrapper"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "tween", ease: "easeInOut", duration: 0.4 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.4 }
      }}
    >
      <div className="glass-panel">
        {children}
      </div>
    </motion.div>
  );
};
