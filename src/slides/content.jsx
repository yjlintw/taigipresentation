import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TaiBun, TaiLo } from '../components/Highlight';

// Shared animation variants for children staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'tween', ease: 'easeOut', duration: 0.4 } }
};

const TitleSlide = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ textAlign: 'center' }}>
    <motion.h1 variants={itemVariants} style={{ fontSize: '6rem', marginBottom: '1rem' }}>
      <TaiBun>林育正</TaiBun>
    </motion.h1>
    <motion.h2 variants={itemVariants} style={{ fontSize: '3.5rem', opacity: 0.9 }}>
      <TaiLo>lîm io̍k tsìng</TaiLo>
    </motion.h2>
  </motion.div>
);

const MapSlide = () => {
  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible"
      style={{ position: 'relative', width: '900px', height: '600px', margin: '0 auto' }}
    >
      <motion.img 
        variants={itemVariants}
        src="/taiwan_map.png" 
        alt="Taiwan Map"
        style={{ 
          position: 'absolute',
          left: '100px',
          top: '50px',
          height: '500px', 
          width: '500px', 
          objectFit: 'contain',
          filter: 'drop-shadow(0 0 30px rgba(0,0,0,0.5))',
          mixBlendMode: 'screen'
        }} 
      />
      
      {/* SVG Overlay for connecting lines */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10 }}>
        
        {/* Chiayi Line (Pink) */}
        <motion.line 
          x1="306" y1="310" 
          x2="550" y2="180" 
          stroke="var(--color-taibun)" 
          strokeWidth="3" 
          strokeDasharray="6 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 1 }}
        />

        {/* Pingtung Line (Cyan) */}
        <motion.line 
          x1="314" y1="410" 
          x2="550" y2="430" 
          stroke="var(--color-tailo)" 
          strokeWidth="3"
          strokeDasharray="6 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 1.4 }}
        />
      </svg>

      {/* Chiayi Text (Mom) */}
      <motion.div variants={itemVariants} style={{ position: 'absolute', left: '550px', top: '140px', whiteSpace: 'nowrap', textAlign: 'left', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
        <div style={{ fontSize: '3.5rem', lineHeight: '1.1' }}>👩</div>
        <div>
          <h2 style={{ fontSize: '3.5rem', margin: 0, textShadow: '0 0 20px rgba(255,51,102,0.3)' }}>
            <TaiBun>嘉義朴子</TaiBun>
          </h2>
          <p style={{ margin: 0, fontSize: '2.2rem' }}><TaiLo>ka-gī phok-tsú</TaiLo></p>
        </div>
      </motion.div>

      {/* Pingtung Text (Dad) */}
      <motion.div variants={itemVariants} style={{ position: 'absolute', left: '550px', top: '390px', whiteSpace: 'nowrap', textAlign: 'left', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
        <div style={{ fontSize: '3.5rem', lineHeight: '1.1' }}>👨</div>
        <div>
          <h2 style={{ fontSize: '3.5rem', margin: 0, textShadow: '0 0 20px rgba(0,229,255,0.3)' }}>
            <TaiBun>屏東里港</TaiBun>
          </h2>
          <p style={{ margin: 0, fontSize: '2.2rem' }}><TaiLo>pîng-tông lí-káng</TaiLo></p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const USMapSlide = () => {
  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible"
      style={{ position: 'relative', width: '1000px', height: '600px', margin: '0 auto' }}
    >
      <motion.img 
        variants={itemVariants}
        src="/us_map.png" 
        alt="USA Map"
        style={{ 
          position: 'absolute',
          left: '0px',
          top: '50px',
          height: '500px', 
          width: '500px', 
          objectFit: 'contain',
          filter: 'drop-shadow(0 0 30px rgba(0,0,0,0.5))',
          mixBlendMode: 'screen'
        }} 
      />
      
      {/* Flight Paths */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10 }}>
        {/* Ann Arbor (353, 248) -> Orlando (399, 427) */}
        <motion.path 
          d="M 353 248 Q 420 300 399 427" 
          fill="none"
          stroke="rgba(255, 255, 255, 0.5)" 
          strokeWidth="3" 
          strokeDasharray="8 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: 'loop', repeatDelay: 3 }}
        />
        {/* Orlando (399, 427) -> Seattle (84, 194) */}
        <motion.path 
          d="M 399 427 Q 250 400 84 194" 
          fill="none"
          stroke="rgba(255, 255, 255, 0.5)" 
          strokeWidth="3"
          strokeDasharray="8 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5, repeat: Infinity, repeatType: 'loop', repeatDelay: 3 }}
        />
      </svg>

      {/* Logos on Map */}
      <motion.img 
        src="/michigan_logo.png" 
        style={{ position: 'absolute', left: '380px', top: '190px', width: '60px', height: '60px', objectFit: 'contain' }} 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', delay: 0.5 }}
      />
      <motion.img 
        src="/universal_logo.png" 
        style={{ position: 'absolute', left: '420px', top: '390px', width: '60px', height: '60px', objectFit: 'contain' }} 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', delay: 1.5 }}
      />
      <motion.img 
        src="/seattle_logo.png" 
        style={{ position: 'absolute', left: '20px', top: '140px', width: '60px', height: '60px', mixBlendMode: 'screen', opacity: 0.9 }} 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{ type: 'spring', delay: 3 }}
      />

      <div style={{ position: 'absolute', left: '550px', top: '120px', width: '450px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Simple Stats Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2.5rem', alignItems: 'baseline' }}>
            <h3 style={{ fontSize: '4.5rem', margin: 0, color: 'var(--text-color)', textAlign: 'right', fontFamily: 'var(--font-main)' }}>2011</h3>
            <div style={{fontSize: '2.5rem', whiteSpace: 'nowrap'}}><TaiLo>jī khòng it it</TaiLo></div>
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2.5rem', alignItems: 'baseline' }}>
            <h3 style={{ fontSize: '4.5rem', margin: 0, color: 'var(--text-color)', textAlign: 'right', fontFamily: 'var(--font-main)' }}>15</h3>
            <div style={{fontSize: '2.5rem', whiteSpace: 'nowrap'}}><TaiLo>tsa̍p-gōo</TaiLo></div>
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2.5rem', alignItems: 'baseline' }}>
            <h3 style={{ fontSize: '4.5rem', margin: 0, color: 'var(--text-color)', textAlign: 'right', fontFamily: 'var(--font-main)' }}>3</h3>
            <div style={{fontSize: '2.5rem', whiteSpace: 'nowrap'}}><TaiLo>sann</TaiLo></div>
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2.5rem', alignItems: 'baseline' }}>
            <h3 style={{ fontSize: '4.5rem', margin: 0, color: 'var(--text-color)', textAlign: 'right', fontFamily: 'var(--font-main)' }}>10</h3>
            <div style={{fontSize: '2.5rem', whiteSpace: 'nowrap'}}><TaiLo>tsa̍p</TaiLo></div>
          </motion.div>

        </motion.div>

      </div>
    </motion.div>
  );
};

const MochiSlide = () => {
  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible"
      style={{ position: 'relative', width: '1000px', height: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    >
      <motion.img 
        variants={itemVariants}
        src="/mochi.jpg" 
        alt="Mochi"
        style={{ 
          height: '450px', 
          width: '900px', 
          objectFit: 'cover',
          borderRadius: '24px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          marginBottom: '3rem'
        }} 
      />
      <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'baseline', gap: '2rem' }}>
        <h1 style={{ fontSize: '5.5rem', margin: 0, textShadow: '0 0 20px rgba(255,51,102,0.4)' }}><TaiBun>麻糍</TaiBun></h1>
        <span style={{ fontSize: '3.5rem' }}><TaiLo>muâ-tsî</TaiLo></span>
      </motion.div>
    </motion.div>
  );
};

const NeighborSlide = () => {
  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible"
      style={{ position: 'relative', width: '1000px', height: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    >
      <motion.img 
        variants={itemVariants}
        src="/neighbor.jpg" 
        alt="Neighbor"
        style={{ 
          height: '450px', 
          width: '900px', 
          objectFit: 'cover',
          borderRadius: '24px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          marginBottom: '3rem'
        }} 
      />
      <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'baseline', gap: '2rem' }}>
        <h1 style={{ fontSize: '5.5rem', margin: 0, textShadow: '0 0 20px rgba(255,51,102,0.4)' }}><TaiBun>厝邊</TaiBun></h1>
        <span style={{ fontSize: '3.5rem' }}><TaiLo>tshù-pinn</TaiLo></span>
      </motion.div>
    </motion.div>
  );
};

const VideoSlide = () => {
  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible"
      style={{ position: 'relative', width: '1000px', height: '600px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4rem' }}
    >
      <motion.video 
        variants={itemVariants}
        src="/video1.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{ 
          height: '500px', 
          width: '400px', 
          objectFit: 'cover',
          borderRadius: '24px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }} 
      />
      <motion.video 
        variants={itemVariants}
        src="/video2.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{ 
          height: '500px', 
          width: '400px', 
          objectFit: 'cover',
          borderRadius: '24px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }} 
      />
    </motion.div>
  );
};

const CatSequenceSlide = ({ step }) => {
  const [showDoraemon, setShowDoraemon] = useState(false);

  useEffect(() => {
    setShowDoraemon(false);
    if (step === 2) {
      const timer = setTimeout(() => setShowDoraemon(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible"
      style={{ position: 'relative', width: '1000px', height: '600px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5rem' }}
    >
      <div style={{ position: 'relative', width: '550px', height: '535px' }}>
        <AnimatePresence mode="wait">
          {!showDoraemon ? (
            <motion.div 
              key="cats"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', position: 'absolute', width: '100%' }}
            >
               <img src="/cat1.jpg" style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} />
               <img src="/cat2.jpg" style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} />
               <img src="/cat3.jpg" style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} />
               <img src="/cat4.jpg" style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} />
            </motion.div>
          ) : (
            <motion.div 
              key="doraemon"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img src="/doraemon.png" style={{ height: '400px', objectFit: 'contain', filter: 'drop-shadow(0 0 30px rgba(0,0,0,0.5))' }} />
              <motion.div 
                initial={{ opacity: 0, scale: 0, rotate: -30 }} 
                animate={{ opacity: 1, scale: 1, rotate: 0 }} 
                transition={{ type: 'spring', delay: 0.5 }}
                style={{ position: 'absolute', right: '50px', top: '50px', fontSize: '10rem', color: 'var(--color-tailo)', textShadow: '0 0 30px rgba(0,229,255,0.8)' }}
              >
                ?
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'left', width: '350px', position: 'relative', height: '300px', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div 
              key="step0"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'absolute', width: '100%' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h1 style={{ fontSize: '4.5rem', margin: 0, textShadow: '0 0 20px rgba(255,51,102,0.4)' }}><TaiBun>飼</TaiBun></h1>
                <span style={{ fontSize: '2.5rem' }}><TaiLo>tshī</TaiLo></span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h1 style={{ fontSize: '4.5rem', margin: 0, textShadow: '0 0 20px rgba(255,51,102,0.4)' }}><TaiBun>二隻貓</TaiBun></h1>
                <span style={{ fontSize: '2.5rem' }}><TaiLo>nn̄g tsiah niau</TaiLo></span>
              </div>
            </motion.div>
          )}
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'absolute', width: '100%' }}
            >
              <h1 style={{ fontSize: '5rem', margin: 0, textShadow: '0 0 20px rgba(255,51,102,0.4)' }}><TaiBun>殕色 (Gray)</TaiBun></h1>
              <span style={{ fontSize: '3rem' }}><TaiLo>phú-sik</TaiLo></span>
            </motion.div>
          )}
          {step >= 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'absolute', width: '100%' }}
            >
              <h1 style={{ fontSize: '5rem', margin: 0, textShadow: '0 0 20px rgba(255,51,102,0.4)' }}><TaiBun>藍色 (Blue)</TaiBun></h1>
              <span style={{ fontSize: '3rem' }}><TaiLo>nâ-sik</TaiLo></span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const slides = [
  {
    id: 1,
    content: <TitleSlide />
  },
  {
    id: 2,
    content: <MapSlide />
  },
  {
    id: 3,
    content: <MochiSlide />
  },
  {
    id: 4,
    content: <USMapSlide />
  },
  {
    id: 5,
    groupId: 'cat',
    content: <CatSequenceSlide step={0} />
  },
  {
    id: 6,
    groupId: 'cat',
    content: <CatSequenceSlide step={1} />
  },
  {
    id: 7,
    groupId: 'cat',
    content: <CatSequenceSlide step={2} />
  },
  {
    id: 9,
    content: <NeighborSlide />
  },
  {
    id: 10,
    content: <VideoSlide />
  }
];
