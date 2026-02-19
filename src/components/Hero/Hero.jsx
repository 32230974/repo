import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const titles = useMemo(() => [
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Problem Solver',
  ], []);

  useEffect(() => {
    const currentTitle = titles[loopNum % titles.length];
    const handleTyping = () => {
      setText(
        isDeleting
          ? currentTitle.substring(0, text.length - 1)
          : currentTitle.substring(0, text.length + 1)
      );

      if (!isDeleting && text === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
        setTypingSpeed(50);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  return (
    <section id="hero" className="hero">
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }} />
        ))}
      </div>
      <div className="hero-content">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">Mohammad Ayoub</h1>
        <h2 className="hero-title">
          I'm a <span className="typed-text">{text}</span>
          <span className="cursor">|</span>
        </h2>
        <p className="hero-description">
          I build exceptional digital experiences with modern web technologies.
          Passionate about creating efficient, scalable, and user-friendly applications.
        </p>
        <div className="hero-buttons">
          <Link to="projects" smooth duration={500} offset={-70} className="btn btn-primary">
            View My Work
          </Link>
          <Link to="contact" smooth duration={500} offset={-70} className="btn btn-outline">
            Get In Touch
          </Link>
        </div>
      </div>
      <Link to="about" smooth duration={500} offset={-70} className="scroll-down">
        <FaArrowDown />
      </Link>
    </section>
  );
};

export default Hero;
