import React from 'react';
import { FaCertificate } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
  const certs = [
    { title: "Machine Learning with Python – freeCodeCamp", url: "https://drive.google.com/file/d/1TEDT0c3ziYN9h0P6FRAi0QmFJMzG47VD/view?usp=sharing" },
    { title: "AWS Student Community Day Workshop", url: "https://drive.google.com/file/d/1bSDxUzGgAGsQiuBLWvStfOGMSIvMgB7H/view?usp=sharing" },
    { title: "Privacy and Security in Online Social Media – NPTEL", url: "https://drive.google.com/file/d/1RV1fLIaxkIM58mkC8Cg9pxsrNnFk6mix/view?usp=sharing" },
    { title: "Computer Communications – Coursera", url: "https://drive.google.com/file/d/1rYi80Ygjb2rkmyRxvwc-E33NEIk7tiA3/view?usp=sharing" },
    { title: "Responsive Web Design – freeCodeCamp", url: "https://drive.google.com/file/d/1rYi80Ygjb2rkmyRxvwc-E33NEIk7tiA3/view?usp=sharing" },
    { title: "Google Data Analytics – Coursera", url: "https://drive.google.com/drive/folders/1NfxFJbcuBfRZn4PqqdaPNabLRpROqXsX?usp=sharing" }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <h2 className="section-title gradient-text">Certificates</h2>
      <div className="certs-grid">
        {certs.map((cert, index) => (
          <a key={index} href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-card glass-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <FaCertificate className="cert-icon" />
            <p className="cert-title">{cert.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
