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
      { name: "CNN", percentage: 70 },
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
      { name: "Jupyter", percentage: 85 },
      { name: "Streamlit", percentage: 60 },
      { name: "Google Colab", percentage: 80 }
    ]
  }
]

const additionalSkills = [
  { name: "MySQL", percentage: 70 },
  { name: "Data Preprocessing", percentage: 80 },
  { name: "Feature Selection", percentage: 75 },
  { name: "Cross-Validation", percentage: 75 }
]

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Technical Skills Title */}
        <motion.h2
          className="text-5xl font-display font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
        </motion.h2>

        {/* Technical Skills Grid */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} className="relative group" variants={itemVariants}>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-electric-orange/20 via-electric-cyan/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <motion.div
                className="relative glow-card rounded-2xl p-8 backdrop-blur-sm border-2 border-transparent bg-clip-padding"
                style={{
                  background: `linear-gradient(135deg, rgba(30,41,59,0.8) 0%, rgba(30,41,59,0.6) 50%, rgba(30,41,59,0.8) 100%), linear-gradient(135deg, ${
                    category.color === "electric-orange"
                      ? "rgba(255,107,53,0.1)"
                      : category.color === "electric-cyan"
                      ? "rgba(0,245,255,0.1)"
                      : "rgba(168,85,247,0.1)"
                  } 0%, transparent 50%, ${
                    category.color === "electric-orange"
                      ? "rgba(255,107,53,0.05)"
                      : category.color === "electric-cyan"
                      ? "rgba(0,245,255,0.05)"
                      : "rgba(168,85,247,0.05)"
                  } 100%)`,
                }}
                whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
              >
                <motion.h3
                  className={`text-2xl font-bold mb-8 flex items-center relative ${
                    category.color === "electric-orange"
                      ? "text-electric-orange"
                      : category.color === "electric-cyan"
                      ? "text-electric-cyan"
                      : "text-neon-purple"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  >
                    <category.icon className="mr-4" size={32} />
                  </motion.div>
                  <span className="relative">
                    {category.category}
                    <motion.div
                      className={`absolute -bottom-1 left-0 h-0.5 ${
                        category.color === "electric-orange"
                          ? "bg-electric-orange"
                          : category.color === "electric-cyan"
                          ? "bg-electric-cyan"
                          : "bg-neon-purple"
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </span>
                </motion.h3>

                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="relative w-max"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <motion.div
                        className={`px-4 py-2 rounded-xl border-2 font-mono cursor-pointer transition-all whitespace-nowrap relative ${
                          category.color === "electric-orange"
                            ? "bg-electric-orange/10 border-electric-orange/20 hover:border-electric-orange/60 hover:bg-electric-orange/20"
                            : category.color === "electric-cyan"
                            ? "bg-electric-cyan/10 border-electric-cyan/20 hover:border-electric-cyan/60 hover:bg-electric-cyan/20"
                            : "bg-neon-purple/10 border-neon-purple/20 hover:border-neon-purple/60 hover:bg-neon-purple/20"
                        }`}
                        whileHover={{ scale: 1.08, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10">{skill.name}</span>

                        {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                          <div className="absolute inset-0 flex flex-col justify-center items-center bg-dark-slate/70 rounded-xl z-20 shadow-lg p-2 backdrop-blur-sm transition-all duration-300">
                            <span className="text-white font-bold text-sm">{skill.percentage}%</span>
                            <div className="w-20 h-2 bg-dark-slate/40 rounded-full mt-1 overflow-hidden">
                              <motion.div
                                className={`h-2 rounded-full ${
                                  category.color === "electric-orange"
                                    ? "bg-electric-orange"
                                    : category.color === "electric-cyan"
                                    ? "bg-electric-cyan"
                                    : "bg-neon-purple"
                                }`}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.percentage}%` }}
                                transition={{ duration: 0.5 }}
                              />
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Databases & Other Skills */}
        <motion.div
          className="mt-16 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h3 className="text-3xl font-bold mb-8 text-cyber-gold relative">
            Databases & Other Skills
            <motion.div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-cyber-gold rounded-full w-1/2" />
          </motion.h3>

          <div className="flex flex-wrap gap-6 justify-center relative z-10">
            {additionalSkills.map((skill, index) => (
              <div
                key={index}
                className="relative w-max"
                onMouseEnter={() => setHoveredSkill(`additional-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <motion.div
                  className="px-6 py-2 rounded-xl border-2 font-mono cursor-pointer transition-all whitespace-nowrap relative bg-cyber-gold/10 border-cyber-gold/20 hover:border-cyber-gold/60 hover:bg-cyber-gold/20"
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{skill.name}</span>

                  {hoveredSkill === `additional-${index}` && (
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-dark-slate/70 rounded-xl z-20 shadow-lg p-2 backdrop-blur-sm transition-all duration-300">
                      <span className="text-white font-bold text-sm">{skill.percentage}%</span>
                      <div className="w-20 h-2 bg-dark-slate/40 rounded-full mt-1 overflow-hidden">
                        <motion.div
                          className="h-2 rounded-full bg-cyber-gold"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
