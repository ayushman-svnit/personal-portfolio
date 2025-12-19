import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  FolderKanban,
  Briefcase,
  GraduationCap,
  UserCog,
  FileText, // Resume icon
  Download // Download icon
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: <Home size={18} /> },
    { path: "/projects", label: "Projects", icon: <FolderKanban size={18} /> },
    { path: "/experience", label: "Experience", icon: <Briefcase size={18} /> },
    {
      path: "/education",
      label: "Education",
      icon: <GraduationCap size={18} />,
    },
    { path: "/skills", label: "Skills", icon: <UserCog size={18} /> },
  ];

  const handleNavigation = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  // Function to handle resume download
  const handleResumeDownload = () => {
    // Replace this URL with your actual resume file URL
    const resumeUrl = "/resume.pdf"; // Or link to your resume
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Ayushman_Singh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button 
            onClick={() => handleNavigation("/")}
            className="logo-link"
          >
            <span className="logo-text">AYUSHMAN</span>
            <span className="logo-gold">SINGH</span>
          </button>
        </motion.div>

        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="nav-item-content"
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.div>
              <div className="nav-indicator" />
            </button>
          ))}
          
          {/* Resume Button - Always visible in gold */}
          <motion.button
            onClick={handleResumeDownload}
            className="nav-link resume-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div className="nav-item-content">
              <FileText size={18} />
              <span>Resume</span>
              <Download size={14} className="download-icon" />
            </motion.div>
            <div className="nav-indicator" />
          </motion.button>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`mobile-nav-link ${location.pathname === item.path ? "active" : ""}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
            
            {/* Mobile Resume Button */}
            <button
              onClick={handleResumeDownload}
              className="mobile-nav-link resume-mobile-link"
            >
              <FileText size={18} />
              <span>Resume</span>
              <Download size={14} className="download-icon" />
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
