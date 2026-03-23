import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology (CSE)",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    scoreLabel: "CGPA",
    score: "7.51",
    duration: "Aug 2023 - Present"
  },
  {
    id: 2,
    degree: "Intermediate",
    institution: "M.L.S.M College",
    location: "Darbhanga, Bihar",
    scoreLabel: "Percentage",
    score: "77.20%",
    duration: "Apr 2021 - Mar 2022"
  },
  {
    id: 3,
    degree: "Matriculation",
    institution: "+2 Jwalamukhi High School",
    location: "Darbhanga, Bihar",
    scoreLabel: "Percentage",
    score: "82.80%",
    duration: "Apr 2019 - Mar 2020"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 md:px-8 max-w-6xl mx-auto flex flex-col items-center relative z-10 font-['Outfit']">
      <div className="text-center mb-16">
        <span className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#4facfe] uppercase mb-2 block">
          EDUCATION
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Academic Journey</h2>
        <p className="text-[#a0a0c0] text-lg max-w-2xl mx-auto">
          A concise view of my academic background, learning foundation, and consistent performance over the years.
        </p>
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#00f2fe]/20 via-[#4facfe]/50 to-transparent md:-translate-x-1/2"></div>

        <div className="flex flex-col gap-12">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            >
              {/* Timeline Dot/Icon */}
              <div className="absolute left-[28px] md:left-1/2 w-14 h-14 rounded-full bg-[#05050f] border border-white/10 shadow-[0_0_15px_rgba(0,242,254,0.3)] flex items-center justify-center -translate-x-1/2 z-10 text-[#00f2fe] text-xl">
                <FaGraduationCap />
              </div>

              {/* Card Content */}
              <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                <div className="relative p-6 md:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.08] hover:-translate-y-1 hover:border-[#00f2fe]/30 hover:shadow-[0_0_20px_rgba(79,172,254,0.3)] transition-all duration-300 group">

                  {/* Date Badge */}
                  <div className={`inline-block mb-4 px-4 py-1 rounded-full text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-[#00f2fe]/20 to-[#4facfe]/20 border border-[#00f2fe]/30`}>
                    {item.duration}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#00f2fe] transition-colors">{item.institution}</h3>
                  <h4 className="text-lg text-[#00f2fe] font-medium mb-4">{item.degree}</h4>

                  <div className={`flex flex-wrap gap-3 justify-start ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-[#a0a0c0] flex items-center border border-white/5">
                      📍 {item.location}
                    </span>
                    <span className="px-3 py-1 bg-white/5 rounded-md text-sm text-white font-semibold border border-white/5 flex items-center">
                      {item.scoreLabel}: <span className="text-[#4facfe] ml-1">{item.score}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 text-center text-[#a0a0c0] text-sm md:text-base max-w-2xl px-4"
      >
        <p className="italic">"These milestones reflect my growth in technical depth, discipline, and readiness for practical projects."</p>
      </motion.div>
    </section>
  );
};

export default Education;
