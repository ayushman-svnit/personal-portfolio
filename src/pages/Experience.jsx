import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  MapPin,
  Award,
  Target,
  Briefcase,
  Code2,
  BookOpen,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Summer Intern",
      organization:
        "Motilal Nehru National Institute of Technology (MNNIT) Allahabad",
      location: "Prayagraj, Uttar Pradesh",
      period: "May 2025 - Jun 2025",
      description:
        "Worked on an AI/ML-based Crowd Management System for Mahakumbh 2025. Built real-time detection and tracking models to enhance public safety during large-scale gatherings.",
      responsibilities: [
        "Developed and optimized object detection pipelines using YOLO models for real-time crowd monitoring.",
        "Implemented Kalman Filter-based motion tracking, improving tracking stability during occlusions.",
        "Designed and tested person re-identification modules using Siamese networks and face-recognition models for long-term tracking.",
        "Collaborated with researchers and project mentors to refine system architecture and improve detection accuracy and performance.",
      ],
      skills: [
        "Computer Vision",
        "Machine Learning",
        "YOLO",
        "PyTorch",
        "Numpy",
      ],
    },
    {
      title: "Executive Member",
      organization: "Mindbend - Gujarat's Largest Techno-Managerial Fest",
      location: "SVNIT Surat",
      period: "Feb 2025 - Present",
      description:
        "Contributing to the organization of Gujarat's premier tech fest at NIT Surat, involving technical workshops, competitions, and events.",
      responsibilities: [
        "Event planning and coordination",
        "Technical workshop organization",
        "Sponsorship and outreach activities",
        "Team collaboration and management",
      ],
      skills: [
        "Event Management",
        "Team Leadership",
        "Communication",
        "Technical Skills",
      ],
    },
    {
      title: "Representative",
      organization: "Nexus, NIT Surat",
      location: "SVNIT Surat",
      period: "Oct 2024 - Present",
      description:
        "Active participant in the technical club of NIT Surat, focusing on coding competitions and technical skill development.",
      responsibilities: [
        "Participate in coding competitions",
        "Attend technical workshops and seminars",
        "Collaborate on club projects and initiatives",
        "Mentor junior members",
      ],
      skills: [
        "Competitive Programming",
        "Problem Solving",
        "Collaboration",
        "Learning",
      ],
    },
  ];

  return (
    <div className="experience">
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">Experience & Leadership</h1>
        <p className="page-subtitle">
          My journey in technical and leadership roles
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <div className="exp-header">
                <div className="exp-icon">
                  <Briefcase />
                </div>
                <div className="exp-info">
                  <h3>{exp.title}</h3>
                  <p className="organization">{exp.organization}</p>
                  <div className="exp-meta">
                    <span>
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <span>
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="exp-description">{exp.description}</p>

              <div className="responsibilities">
                <h4>
                  <Target size={16} /> Key Responsibilities
                </h4>
                <ul>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="exp-skills">
                {exp.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="timeline-marker">
              <div className="marker-dot" />
              {index < experiences.length - 1 && (
                <div className="timeline-line" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
