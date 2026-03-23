import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formsubmit.co/ajax/abhilashjha2004@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('Message Sent Successfully!');
        e.target.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        if (data.message && data.message.includes('activate')) {
            setStatus('Check your inbox to activate the form!');
        } else {
            setStatus('Failed to send message.');
        }
        setTimeout(() => setStatus(''), 7000);
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred.');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title gradient-text">Get in Touch</h2>
      <div className="contact-container">
        <div className="contact-info glass-card">
          <h3>Contact Information</h3>
          <p className="contact-desc">Feel free to reach out to me for any questions or opportunities!</p>
          <div className="info-items">
            <a href="mailto:abhilashjha2004@gmail.com" className="info-item">
              <FaEnvelope className="info-icon" />
              <span>abhilashjha2004@gmail.com</span>
            </a>
            <a href="https://github.com/abhilashjha2004" target="_blank" rel="noopener noreferrer" className="info-item">
              <FaGithub className="info-icon" />
              <span>github.com/abhilashjha2004</span>
            </a>
            <a href="https://www.linkedin.com/in/abhilashjha20/" target="_blank" rel="noopener noreferrer" className="info-item">
              <FaLinkedin className="info-icon" />
              <span>linkedin.com/in/abhilashjha20</span>
            </a>
            <a href="https://leetcode.com/u/abhilashjha2004/" target="_blank" rel="noopener noreferrer" className="info-item">
              <SiLeetcode className="info-icon" />
              <span>leetcode.com/u/abhilashjha2004</span>
            </a>
            <a href="https://www.geeksforgeeks.org/profile/abhilashjha2004?tab=activity" target="_blank" rel="noopener noreferrer" className="info-item">
              <SiGeeksforgeeks className="info-icon" />
              <span>geeksforgeeks.org/abhilashjha2004</span>
            </a>
            <a href="https://www.hackerrank.com/profile/abhilashjha2004" target="_blank" rel="noopener noreferrer" className="info-item">
              <SiHackerrank className="info-icon" />
              <span>hackerrank.com/abhilashjha2004</span>
            </a>
          </div>
        </div>
        
        <form className="contact-form glass-card" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New Contact Form Submission!" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="First Name" placeholder="John" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="Last Name" placeholder="Doe" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="Email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="Phone" placeholder="+1 234 567 890" />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="Message" rows="5" placeholder="Your message..." required></textarea>
          </div>
          <button type="submit" className="btn-primary submit-btn" disabled={status === 'Sending...'}>
            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p style={{ marginTop: '1rem', color: 'var(--neon-blue)', fontWeight: 'bold' }}>{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
