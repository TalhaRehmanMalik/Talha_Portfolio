import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Brain, Wrench } from "lucide-react"

const skillsData = [
  {
    category: "Languages",
    icon: Code,
    color: "electric-orange",
    skills: [
      { name: "Python", percentage: 80 },
      { name: "C", percentage: 70 },
      { name: "C++", percentage: 70 },
      { name: "OOP", percentage: 75 }
    ]
  },
  {
    category: "ML/AI",
    icon: Brain,
    color: "electric-cyan",
    skills: [
      { name: "Machine Learning", percentage: 75 },
      { name: "Deep Learning", percentage: 70 },
      { name: "Convolutional Neural Networks (CNN)", percentage: 70 },
      { name: "Model Training", percentage: 75 },
      { name: "Evaluation", percentage: 75 },
      { name: "Supervised Learning", percentage: 80 },
      { name: "Unsupervised Learning", percentage: 70 }
    ]
  },
  {
    category: "Tools & Libraries",
    icon: Wrench,
    color: "neon-purple",
    skills: [
      { name: "TensorFlow", percentage: 70 },
      { name: "Keras", percentage: 70 },
      { name: "Scikit-learn", percentage: 70 },
      { name: "Pandas", percentage: 80 },
      { name: "NumPy", percentage: 75 },
      { name: "Matplotlib", percentage: 70 },
      { name: "Seaborn", percentage: 65 },
      { name: "OpenCV", percentage: 65 },
      { name: "Jupyter Notebook", percentage: 85 },
      { name: "Streamlit", percentage: 60 },
      { name: "Google Colab", percentage: 80 }
    ]
  }
]

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-slate-900/50" data-testid="skills-section">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-display font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-testid="skills-title"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="glow-card rounded-2xl p-8 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              data-testid={`skill-category-${categoryIndex}`}
            >
              <h3 className={`text-2xl font-bold mb-6 flex items-center ${
                category.color === "electric-orange"
                  ? "text-electric-orange"
                  : category.color === "electric-cyan"
                  ? "text-electric-cyan"
                  : "text-neon-purple"
              }`}>
                <category.icon className="mr-3" size={28} />
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item relative"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    data-testid={`skill-item-${categoryIndex}-${skillIndex}`}
                  >
                    <motion.span
                      className={`px-4 py-2 rounded-lg border font-mono cursor-pointer transition-all ${
                        category.color === "electric-orange"
                          ? "bg-electric-orange/20 border-electric-orange/30 hover:bg-electric-orange/30"
                          : category.color === "electric-cyan"
                          ? "bg-electric-cyan/20 border-electric-cyan/30 hover:bg-electric-cyan/30"
                          : "bg-neon-purple/20 border-neon-purple/30 hover:bg-neon-purple/30"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill.name}
                    </motion.span>
                    
                    {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                      <motion.div
                        className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-lg border text-sm font-semibold whitespace-nowrap z-10 ${
                          category.color === "electric-orange"
                            ? "bg-dark-slate/95 border-electric-orange text-electric-orange"
                            : category.color === "electric-cyan"
                            ? "bg-dark-slate/95 border-electric-cyan text-electric-cyan"
                            : "bg-dark-slate/95 border-neon-purple text-neon-purple"
                        }`}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        data-testid={`skill-tooltip-${categoryIndex}-${skillIndex}`}
                      >
                        {skill.name} {skill.percentage}%
                        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                          category.color === "electric-orange"
                            ? "border-t-electric-orange"
                            : category.color === "electric-cyan"
                            ? "border-t-electric-cyan"
                            : "border-t-neon-purple"
                        }`} />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-testid="additional-skills"
        >
          <h3 className="text-2xl font-bold mb-6 text-cyber-gold">Databases & Other Skills</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { name: "MySQL", percentage: 70 },
              { name: "Data Preprocessing", percentage: 80 },
              { name: "Feature Selection", percentage: 75 },
              { name: "Cross-Validation", percentage: 75 }
            ].map((skill, index) => (
              <div
                key={index}
                className="skill-item relative"
                onMouseEnter={() => setHoveredSkill(`additional-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
                data-testid={`additional-skill-${index}`}
              >
                <motion.span
                  className="px-4 py-2 bg-cyber-gold/20 text-cyber-gold rounded-lg border border-cyber-gold/30 font-mono cursor-pointer transition-all hover:bg-cyber-gold/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill.name}
                </motion.span>
                
                {hoveredSkill === `additional-${index}` && (
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-dark-slate/95 border border-cyber-gold text-cyber-gold rounded-lg text-sm font-semibold whitespace-nowrap z-10"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    data-testid={`additional-skill-tooltip-${index}`}
                  >
                    {skill.name} {skill.percentage}%
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-cyber-gold" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
