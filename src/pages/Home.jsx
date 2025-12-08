import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Code2,
  Trophy,
  Award,
  Calendar,
  MapPin,
  CodeSquareIcon,
  Rocket,
  Computer,
  Projector,
  PenTool,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import pfp from "../assets/images/pfp.jpg";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Hi, I'm <span className="gold-gradient">Ayushman Singh</span>
            </h1>

            <h2 className="hero-subtitle">
              <TypeAnimation
                sequence={[
                  "B.Tech Computer Science Student",
                  2000,
                  "Problem Solver | Tech Enthusiast",
                  2000,
                  "Web Developer | Competitive Programmer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h2>

            <p className="hero-description">
              First-year Computer Science Engineering student at Sardar
              Vallabhbhai National Institute of Technology (SVNIT), Surat.
              Passionate about software development, competitive programming,
              and creating innovative solutions.
            </p>

            {/* Stats Cards */}
            <div className="hero-stats">
              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="stat-icon">
                  <Rocket />
                </div>
                <div>
                  <h3>Exploring ML</h3>
                  <p>Kaggle</p>
                </div>
              </motion.div>

              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="stat-icon">
                  <Computer />
                </div>
                <div>
                  <h3>Web Developer</h3>
                  <p>MERN Stack</p>
                </div>
              </motion.div>

              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="stat-icon">
                  <Code2 />
                </div>
                <div>
                  <h3>Active Coder</h3>
                  <p>CodeForces & LeetCode</p>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="hero-links">
              <motion.a
                href="https://linkedin.com/in/ayushmansingh27"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin /> LinkedIn
              </motion.a>

              <motion.a
                href="https://github.com/ayushman-svnit"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github /> GitHub
              </motion.a>

              <motion.a
                href="https://codeforces.com/profile/ayushman-svnit"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn codeforces"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code2 /> CodeForces
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <div
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "linear-gradient(145deg, #fdd835, #ffeb3b)", // optional glow
              boxShadow: "0px 0px 30px rgba(255, 221, 0, 0.6)",
            }}
          >
            <img
              src={pfp}
              alt="Ayushman"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="quick-info">
        <div className="info-grid">
          <motion.div
            className="info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-icon">
              <Calendar />
            </div>
            <div>
              <h3>Education</h3>
              <p>B.Tech CSE (2024-2028)</p>
              <p className="info-detail">SVNIT Surat</p>
            </div>
          </motion.div>

          <motion.div
            className="info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="info-icon">
              <MapPin />
            </div>
            <div>
              <h3>Location</h3>
              <p>Surat, Gujarat</p>
              <p className="info-detail">Open to Opportunities</p>
            </div>
          </motion.div>

          <motion.div
            className="info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="info-icon">
              <Mail />
            </div>
            <div>
              <h3>Contact</h3>
              <p>singhayushman291@gmail.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
