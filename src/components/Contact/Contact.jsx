import React, { useEffect, useRef, useState } from 'react';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    // Construct mailto link  
    const mailtoLink = `mailto:mohammadayoub@example.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Contact'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink);

    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(''), 4000);
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'mohammadayoub@example.com' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Available Worldwide' },
    { icon: <FaPhone />, label: 'Status', value: 'Open for opportunities' },
  ];

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className={`contact-container ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">
          <span className="title-number">04.</span> Get In Touch
        </h2>
        <p className="contact-subtitle">
          I'm currently open to new opportunities and collaborations. Whether you have a question, 
          a project idea, or just want to say hi — my inbox is always open!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">{info.icon}</div>
                <div>
                  <h4>{info.label}</h4>
                  <p>{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              <FaPaperPlane /> Send Message
            </button>
            {status === 'success' && (
              <p className="form-status success">Message prepared! Check your email client.</p>
            )}
            {status === 'error' && (
              <p className="form-status error">Please fill in all required fields.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
