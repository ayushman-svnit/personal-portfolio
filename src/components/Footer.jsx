import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Coffee,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code2,
  BookOpen,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      url: "https://github.com/ayushman-svnit",
      color: "#ffffff",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/ayushmansingh27",
      color: "#0077B5",
    },
    {
      icon: <Code2 size={20} />,
      label: "CodeForces",
      url: "https://codeforces.com/profile/ayushman-svnit",
      color: "#1F8ACB",
    },
    {
      icon: <BookOpen size={20} />,
      label: "LeetCode",
      url: "https://leetcode.com/u/ayushman-svnit/",
      color: "#FFA116",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      url: "mailto:singhayushman291@gmail.com",
      color: "#EA4335",
    },
  ];

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Education", path: "/education" },
    { label: "Skills", path: "/skills" },
  ];

  const contactInfo = [
    {
      icon: <Mail size={16} />,
      text: "singhayushman291@gmail.com",
      link: "mailto:singhayushman291@gmail.com",
    },
    {
      icon: <MapPin size={16} />,
      text: "SVNIT Surat, Gujarat",
      link: "https://maps.google.com/?q=SVNIT+Surat",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-quote">
            <p>"Turning ideas into code, and code into solutions."</p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ "--social-color": social.color }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="quick-links">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.path}
                  className="quick-link"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5, color: "var(--gold)" }}
                >
                  <ExternalLink size={14} />
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.text}
                  href={info.link}
                  className="contact-link"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {info.icon}
                  <span>{info.text}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>© {currentYear} Ayushman Singh. All rights reserved.</p>
            <p className="made-with">
              Made with <Heart className="heart-icon" /> and{" "}
              <Coffee className="coffee-icon" />
            </p>
          </div>

          <div className="footer-actions">
            <motion.a
              href="mailto:singhayushman291@gmail.com"
              className="contact-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
