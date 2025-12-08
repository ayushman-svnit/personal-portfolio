import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  FolderKanban,
  Briefcase,
  GraduationCap,
  UserCog,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <NavLink to="/" className="logo-link">
            <span className="logo-text">AYUSHMAN</span>
            <span className="logo-gold">SINGH</span>
          </NavLink>
        </motion.div>

        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
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
            </NavLink>
          ))}
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
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? "active" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
