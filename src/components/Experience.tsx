"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2021 - Present",
    description:
      "Led development of microservices architecture, improving system scalability by 200%.",
    achievements: [
      "Implemented CI/CD pipeline reducing deployment time by 70%",
      "Mentored junior developers and conducted code reviews",
      "Architected and deployed cloud-native solutions",
    ],
  },
  // Add more experiences...
];

const Experience = () => {
  return (
    <section className="py-20 bg-white" id="experience">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-700 mb-4">
            Professional Experience
          </h2>
          <p className="text-secondary-500 max-w-2xl mx-auto">
            My professional journey and key achievements throughout my career.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 border-l-2 border-primary-200 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary-600 rounded-full" />
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-secondary-700 mb-1">
                  {exp.title}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-secondary-500 mb-4">{exp.period}</p>
                <p className="text-secondary-600 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside text-secondary-500">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="mb-1">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
