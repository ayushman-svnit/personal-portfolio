import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Layout,
  GitBranch,
  Brain,
  Cpu,
  Globe,
  Terminal,
  MessageSquare,
  Layers,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      id: "languages",
      title: "Programming Languages",
      icon: <Terminal />,
      skills: [
        { name: "C/C++", level: 90 },
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 75 },
      ],
    },
    {
      id: "webdev",
      title: "Web Development",
      icon: <Globe />,
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 75 },
        { name: "MongoDB", level: 90 },
        { name: "EJS", level: 95 },
      ],
    },
    {
      id: "dsa",
      title: "Data Structures & Algorithms",
      icon: <Brain />,
      skills: [
        { name: "Arrays & Strings", level: 90 },
        { name: "Linked Lists, Stacks & Queues", level: 80 },
        { name: "Trees & Graphs", level: 75 },
        { name: "Dynamic Programming", level: 70 },
        { name: "Backtracking", level: 60 },
      ],
    },
    {
      id: "tools",
      title: "Tools & Technologies",
      icon: <GitBranch />,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 80 },
        { name: "Linux/Unix", level: 25 },
      ],
    },
    {
      id: "core",
      title: "Core Subjects",
      icon: <Cpu />,
      skills: [
        { name: "Object Oriented Programming", level: 85 },
        { name: "Database Management", level: 80 },
        { name: "Computer Organisation", level: 85 },
        { name: "Operating Systems", level: 0 },
        { name: "Computer Networks", level: 0 },
      ],
    },
    {
      id: "ml-frameworks",
      title: "ML Frameworks & Libraries",
      icon: <Layers />,
      skills: [
        { name: "PyTorch", level: 70 },
        { name: "OpenCV", level: 90 },
        { name: "NumPy", level: 95 },
        { name: "Pandas", level: 40 },
        { name: "Scikit-Learn", level: 25 },
        { name: "Matplotlib & Seaborn", level: 75 },
      ],
    },
  ];

  const codingProfiles = [
    {
      platform: "CodeForces",
      username: "ayushman-svnit",
      link: "https://codeforces.com/profile/ayushman-svnit",
      color: "#1F8ACB",
      icon: <Code2 />,
    },
    {
      platform: "LeetCode",
      username: "ayushman-svnit",
      link: "https://leetcode.com/u/ayushman-svnit/",
      color: "#FFA116",
      icon: <Brain />,
    },
    {
      platform: "GitHub",
      username: "ayushman-svnit",
      link: "https://github.com/ayushman-svnit",
      color: "#ffffff",
      icon: <GitBranch />,
    },
  ];

  return (
    <div className="skills">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">Skills & Expertise</h1>
        <p className="page-subtitle">My technical skills and coding profiles</p>
      </motion.div>

      {/* Coding Profiles */}
      <section className="coding-profiles-section">
        <h2 className="section-title">Coding Profiles</h2>
        <div className="profiles-container">
          {codingProfiles.map((profile, index) => (
            <motion.a
              key={profile.platform}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card"
              style={{ "--profile-color": profile.color }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="profile-icon">{profile.icon}</div>
              <div className="profile-info">
                <h3>{profile.platform}</h3>
                <p>{profile.username}</p>
              </div>
              <div className="profile-arrow">→</div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Skills Categories */}
      <section className="skills-categories">
        <h2 className="section-title">Technical Skills</h2>

        <div className="categories-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              className="category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.05 + catIndex * 0.1 }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Currently Learning */}
      <section className="learning-section">
        <motion.div
          className="learning-card"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Currently Learning & Exploring</h3>
          <div className="learning-grid">
            <div className="learning-item">
              <div className="learning-icon">
                <MessageSquare />
              </div>
              <span>Natural Language Processing</span>
            </div>
            <div className="learning-item">
              <div className="learning-icon">
                <Database />
              </div>
              <span>Database Optimization</span>
            </div>
            <div className="learning-item">
              <div className="learning-icon">
                <Cpu />
              </div>
              <span>Deep Learning</span>
            </div>
            <div className="learning-item">
              <div className="learning-icon">
                <Brain />
              </div>
              <span>Advanced Algorithms</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
