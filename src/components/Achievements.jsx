import React, { useState, useEffect, useRef } from 'react';
import './Achievements.css';

const Counter = ({ end, label, suffix = "+", url }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="achievement-link">
      <div className="achievement-card glass-card" ref={ref}>
        <h3 className="counter-number gradient-text">{count}{suffix}</h3>
        <p className="counter-label">{label}</p>
      </div>
    </a>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h2 className="section-title gradient-text">Achievements</h2>
      <div className="achievements-grid">
        <Counter
          end={200}
          label="LeetCode Problems Solved + 4 Badges Earned"
          url="https://leetcode.com/u/abhilashjha2004/"
        />
        <Counter
          end={100}
          label="GeeksforGeeks Problems Solved"
          url="https://www.geeksforgeeks.org/profile/abhilashjha2004?tab=activity"
        />

        <a href="https://www.hackerrank.com/profile/abhilashjha2004" target="_blank" rel="noopener noreferrer" className="achievement-link">
          <div className="achievement-card glass-card">
            <h3 className="counter-number gradient-text">3★</h3>
            <p className="counter-label">C++, Python & SQL (HackerRank)</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Achievements;
