import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  BookOpen,
  Trophy,
  Star,
  Users,
  Code2,
} from "lucide-react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      stream: "Computer Science & Engineering",
      institution:
        "Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat",
      location: "Surat, Gujarat",
      period: "2024 - 2028",
      description:
        "Currently pursuing B.Tech in Computer Science & Engineering. Focused on Data Structures, Algorithms, Web Development, and Machine Learning.",
      achievements: [
        "Winner - Web Wonders 2025",
        "Finalist - ACM Summer Challenge",
        "Active participant in coding competitions"],
      courses: [
        "Data Structures & Algorithms",
        "Object Oriented Programming",
        "Discrete Mathematics",
        "Computer Organization",
        "Database Management System",
      ],
      current: true,
    },
    {
      id: 2,
      degree: "Higher Secondary (12th)",
      stream: "Science Stream (PCM)",
      institution: "Mount Index International School",
      location: "CBSE Board",
      period: "2024",
      score: "90.4%",
      description:
        "Completed Higher Secondary Education with focus on Physics, Chemistry, and Mathematics.",
      achievements: [
        "JEE Advanced : Qualified",
        "JEE Mains Percentile: 99.51%",
      ],
    },
    {
      id: 3,
      degree: "Secondary (10th)",
      institution: "A.S.M.P. Public School",
      location: "CBSE Board",
      period: "2022",
      score: "95.2%",
      description:
        "Completed Secondary Education with outstanding academic performance.",
      achievements: [
        "Excellent Academic Record",
        "Active in Sports and Cultural Activities",
      ],
    },
  ];

  const achievements = [
    {
      title: "Winner - Web Wonders 2025",
      description: "Got 1st place in Web Wonders 2025 under transportation theme",
      icon: <Star />,
    },
    {
      title: "Technical Skills",
      description: "C/C++, Python, Web Development",
      icon: <BookOpen />,
    },
    {
      title: "JEE Mains 2024",
      description: "99.51 Percentile",
      icon: <Award />,
    },
  ];

  return (
    <div className="education">
      <motion.div
        className="education-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">Education</h1>
        <p className="page-subtitle">My academic journey and achievements</p>
      </motion.div>

      {/* Main Education Timeline */}
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            className={`timeline-item ${edu.current ? "current" : ""}`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-marker">
              <div className="marker-dot" />
              {index < educationData.length - 1 && (
                <div className="timeline-line" />
              )}
            </div>

            <motion.div className="timeline-content" whileHover={{ y: -5 }}>
              <div className="edu-header">
                <div className="edu-icon">
                  <GraduationCap />
                </div>
                <div className="edu-title">
                  <h3>{edu.degree}</h3>
                  {edu.stream && <h4>{edu.stream}</h4>}
                  <p className="edu-institution">{edu.institution}</p>
                  <div className="edu-meta">
                    <span>
                      <Calendar size={14} /> {edu.period}
                    </span>
                    <span>
                      <MapPin size={14} /> {edu.location}
                    </span>
                    {edu.score && (
                      <span>
                        <Award size={14} /> {edu.score}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="edu-description">{edu.description}</p>

              {edu.achievements && (
                <div className="edu-achievements">
                  <h4>
                    <Star size={16} /> Key Highlights
                  </h4>
                  <ul>
                    {edu.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {edu.courses && (
                <div className="edu-courses">
                  <h4>
                    <BookOpen size={16} /> Relevant Courses
                  </h4>
                  <div className="courses-grid">
                    {edu.courses.map((course) => (
                      <span key={course} className="course-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.current && (
                <div className="current-badge">
                  <span>Currently Pursuing</span>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Achievements Section */}
      <section className="achievements-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Key Achievements
        </motion.h2>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="achievement-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
