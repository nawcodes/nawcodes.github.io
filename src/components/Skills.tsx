"use client";

import { motion } from "framer-motion";
import { FaReact, FaNode, FaDocker } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, level: 90 },
  { name: "TypeScript", icon: SiTypescript, level: 85 },
  { name: "Next.js", icon: SiNextdotjs, level: 88 },
  { name: "Node.js", icon: FaNode, level: 82 },
  { name: "Docker", icon: FaDocker, level: 75 },
  //   { name: "AWS", icon: SiAws, level: 80 },
];

const SkillBar = ({ name, level, icon: Icon }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <Icon className="w-6 h-6 text-primary-600 mr-2" />
        <span className="text-secondary-700 font-medium">{name}</span>
      </div>
      <div className="h-3 bg-secondary-100 rounded-full">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-primary-600 rounded-full"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-700 mb-4">
            Technical Skills
          </h2>
          <p className="text-secondary-500 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            levels in various technologies and tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
