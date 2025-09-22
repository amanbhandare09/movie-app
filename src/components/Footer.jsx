// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.socials}>
          <a href="https://www.linkedin.com/in/amanbhandare" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaLinkedin />
          </a>
          <a href="https://github.com/amanbhandare09" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/amvn.b" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaInstagram />
          </a>
          <a href="mailto:your-amanbhandare@gmail.com" style={styles.icon}>
            <FaEnvelope />
          </a>
          <a href="mob: +919359244086" style={styles.icon}>
            <FaPhone />
          </a>
        </div>
        <div style={styles.details}>
          <p>Email: your-amanbhandare@gmail.com</p>
          <p>Phone: +91 93592 44086</p>
        </div>
        <div style={styles.signature}>
          Made with ❤️ by Aman
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#111',
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    position: 'absolute',
    marginTop: '200px',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '0 20px',
  },
  socials: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  icon: {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  details: {
    marginBottom: '10px',
  },
  signature: {
    fontStyle: 'italic',
    fontSize: '0.9rem',
  },
};

export default Footer;
