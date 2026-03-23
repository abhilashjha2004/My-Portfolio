import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import heroImg from '../assets/new-hero.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: '100px' }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8">

        {/* ===== LEFT: Text Content ===== */}
        <motion.div
          className="flex-1 flex flex-col items-start"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-bold tracking-[4px] text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#4facfe] uppercase mb-4">
            WELCOME TO MY PORTFOLIO
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white mb-4">
            Hi! I'm{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #00f2fe, #4facfe)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Abhilash Kumar Jha
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 flex items-center gap-2">
            <span>🚀</span>
            <TypeAnimation
              sequence={['Data Scientist', 2000, 'Full Stack Developer', 2000, 'Data Analyst', 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-mono"
            />
          </h2>

          <p className="text-[#a0a0c0] text-lg max-w-lg mb-10 leading-relaxed">
            I build intelligent data-driven systems and modern web applications that solve real-world problems.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-7 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(90deg, #00f2fe, #4facfe)', boxShadow: '0 4px 15px rgba(0,242,254,0.3)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 25px rgba(0,242,254,0.6)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,242,254,0.3)'}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-lg font-semibold text-white border border-[#4facfe]/60 bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#4facfe]/10 hover:shadow-[0_0_25px_rgba(79,172,254,0.4)]"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>

        {/* ===== RIGHT: Single Seamlessly Blended Image ===== */}
        <motion.div
          className="flex-1 relative flex justify-center items-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <motion.img
            src={heroImg}
            alt="Coding Illustration"
            className="w-full max-w-[560px] h-auto object-contain"
            style={{
              mixBlendMode: 'lighten',
              maskImage: 'radial-gradient(ellipse 75% 75% at 55% 50%, black 40%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 55% 50%, black 40%, transparent 75%)',
              filter: 'drop-shadow(0 0 24px rgba(0,242,254,0.3))',
            }}
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
