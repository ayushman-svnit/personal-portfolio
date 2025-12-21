import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code2,
  Server,
  Database,
  TrendingUp,
  Globe,
  Award,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Surat House Price Predictor",
      description:
        "AI-powered real estate valuation — predicting accurate property prices in Surat",
      longDescription:
        "A machine learning–based web application that predicts house prices in Surat using historical property data, advanced data cleaning, feature engineering, and regression models. The platform provides instant price estimates through an intuitive frontend backed by a robust ML-driven API.",
      features: [
        "Accurate house price prediction using trained ML regression models",
        "Extensive data cleaning and feature engineering on real-world real estate data",
        "Support for key property parameters like location, BHK, area, furnishing, and transaction type",
        "FastAPI-based backend for real-time predictions",
        "Interactive React frontend for seamless user experience",
      ],
      tech: [
        "Python",
        "Scikit-learn",
        "FastAPI",
        "React.js (Vite)",
        "Pandas",
        "Numpy",
        "CatBoost",
      ],
      github: "https://github.com/ayushman-svnit/surat-house-price-predictor",
      demo: "https://surat-house-price-predictor.vercel.app/",
      status: "Completed",
      icon: <TrendingUp />,
    },
    {
      id: 2,
      title: "TransitFlow",
      description:
        "Revolutionizing Urban Mobility - Seamless transportation solutions for campuses and cities",
      longDescription:
        "A comprehensive urban mobility platform for students and city commuters integrating smart parking, carpooling, route optimization, bus info, and future transport technologies.",
      features: [
        "Real-time smart parking availability with booking system",
        "Carpooling platform with ride management, messaging, and ratings",
        "Interactive route calculator & fare optimizer with multi-modal comparison",
        "Bus schedules and stop details with search functionality",
        "Future transport hub featuring Hyperloop, RoboTaxi, AeroTaxi, and Personal Drone",
      ],
      tech: [
        "React.js",
        "ExpressJS",
        "Node.js",
        "MapTiler/OpenStreetMap",
        "MongoDB",
      ],
      github: "https://github.com/ayushman-svnit/TheDOMinators",
      demo: "https://transitflow-delta.vercel.app/",
      status: "Completed",
      icon: <Award />,
    },
    {
      id: 3,
      title: "ExamMaster",
      description:
        "JEE Advanced Mock Test Platform with comprehensive analytics and learning resources",
      longDescription:
        "A comprehensive platform for JEE Advanced aspirants featuring mock tests, performance analytics, and study resources.",
      features: [
        "Real-time leaderboard system",
        "Performance analytics and history tracking",
        "Study resources and notes section",
        "User-friendly interface with progress tracking",
      ],
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "ExpressJS",
        "Node.js",
        "EJS",
        "MongoDB",
      ],
      github: "https://github.com/ayushman-svnit/examMaster",
      demo: "https://github.com/ayushman-svnit/examMaster",
      status: "Completed",
      icon: <Award />,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing skills, projects, and achievements",
      longDescription:
        "A modern, responsive portfolio website built with React.js and Framer Motion animations.",
      features: [
        "Responsive design for all devices",
        "Smooth animations and transitions",
        "Dark theme with gold accents",
        "Interactive project showcase",
      ],
      tech: ["React.js", "Framer Motion", "CSS3"],
      github: "https://github.com/ayushman-svnit/personal-portfolio",
      demo: "https://ayushman-singh.netlify.app/",
      status: "Active",
      icon: <Globe />,
    },
    {
      id: 5,
      title: "Flight Booking System",
      description:
        "A seamless platform for users and administrators to interact with flight services efficiently.",
      longDescription:
        "Full-stack flight booking system enabling users to search flights, manage bookings, and handle authentication, with an admin dashboard for flight management.",
      features: [
        "Flight search by origin, destination, and date",
        "Booking management for users",
        "Admin dashboard to add, update, delete flights, and view bookings",
        "Real-time data validation using Pydantic",
        "Secure password handling with passlib",
      ],
      tech: ["React.js", "Framer Motion", "CSS3"],
      github: "https://github.com/ayushman-svnit/flight-booking-system-final",
      demo: "https://github.com/ayushman-svnit/flight-booking-system-final",
      status: "Completed",
      icon: <Globe />,
    },
    // Add more projects here as you build them
  ];

  const upcomingProjects = [
    {
      name: "AI Generated Image Detector",
      description: "Detect the images generated by AI",
      tech: ["Machine Learning", "Pytorch", "Python"],
    },
    {
      name: "GWoC Task",
      description: "Soon...",
      tech: ["Next.js", "Express", "MongoDB"],
    },
    {
      name: "AI Code Assistant",
      description: "Intelligent code completion tool",
      tech: ["Python", "FastAPI", "React"],
    },
  ];

  return (
    <div className="projects">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          Showcasing my work and technical implementations
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-header">
              <div className="project-icon">{project.icon}</div>
              <div className="project-title">
                <h3>{project.title}</h3>
                <span
                  className={`project-status ${project.status.toLowerCase()}`}
                >
                  {project.status}
                </span>
              </div>
            </div>

            <p className="project-description">{project.description}</p>
            <p className="project-long-description">
              {project.longDescription}
            </p>

            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} /> View Code
              </motion.a>
              <motion.a
                href={project.demo}
                className="demo-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} /> Live Demo
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Section */}
      <section className="github-section">
        <motion.div
          className="github-card"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="github-icon">
            <Github size={48} />
          </div>
          <div className="github-content">
            <h3>Explore More on GitHub</h3>
            <p>
              Check out all my projects, contributions, and open-source work on
              GitHub
            </p>
            <div className="github-handle">
              <Code2 size={16} />
              <span>github.com/ayushman-svnit</span>
            </div>
            <motion.a
              href="https://github.com/ayushman-svnit"
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Upcoming Projects */}
      <section className="upcoming-projects">
        <h2 className="section-title">Upcoming Projects</h2>

        <div className="upcoming-grid">
          {upcomingProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className="upcoming-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="upcoming-header">
                <h4>{project.name}</h4>
                <span className="upcoming-badge">Coming Soon</span>
              </div>
              <p>{project.description}</p>
              <div className="upcoming-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag-small">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
