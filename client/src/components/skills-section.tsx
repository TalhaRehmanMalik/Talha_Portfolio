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
              className="relative group"
              variants={itemVariants}
              data-testid={`skill-category-${categoryIndex}`}
            >
              {/* Enhanced Glow Card with Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-electric-orange/20 via-electric-cyan/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <motion.div
                className="relative glow-card rounded-2xl p-8 backdrop-blur-sm border-2 border-transparent bg-clip-padding"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(30, 41, 59, 0.8) 0%, 
                    rgba(30, 41, 59, 0.6) 50%, 
                    rgba(30, 41, 59, 0.8) 100%),
                    linear-gradient(135deg, 
                    ${category.color === "electric-orange" ? "rgba(255, 107, 53, 0.1)" : 
                      category.color === "electric-cyan" ? "rgba(0, 245, 255, 0.1)" : 
                      "rgba(168, 85, 247, 0.1)"} 0%, 
                    transparent 50%, 
                    ${category.color === "electric-orange" ? "rgba(255, 107, 53, 0.05)" : 
                      category.color === "electric-cyan" ? "rgba(0, 245, 255, 0.05)" : 
                      "rgba(168, 85, 247, 0.05)"} 100%)`
                }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" } 
                }}
              >
                {/* Enhanced Header with Icon Animation */}
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
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
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
                
                {/* Enhanced Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-item relative"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      data-testid={`skill-item-${categoryIndex}-${skillIndex}`}
                    >
                      <motion.div
                        className={`relative px-4 py-3 rounded-xl border-2 font-mono cursor-pointer transition-all overflow-hidden ${
                          category.color === "electric-orange"
                            ? "bg-electric-orange/10 border-electric-orange/20 hover:border-electric-orange/60 hover:bg-electric-orange/20"
                            : category.color === "electric-cyan"
                            ? "bg-electric-cyan/10 border-electric-cyan/20 hover:border-electric-cyan/60 hover:bg-electric-cyan/20"
                            : "bg-neon-purple/10 border-neon-purple/20 hover:border-neon-purple/60 hover:bg-neon-purple/20"
                        }`}
                        whileHover={{ 
                          scale: 1.08,
                          y: -3,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Shimmer Effect */}
                        <motion.div
                          className={`absolute inset-0 ${
                            category.color === "electric-orange"
                              ? "bg-gradient-to-r from-transparent via-electric-orange/20 to-transparent"
                              : category.color === "electric-cyan"
                              ? "bg-gradient-to-r from-transparent via-electric-cyan/20 to-transparent"
                              : "bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent"
                          }`}
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10 text-sm font-semibold">{skill.name}</span>
                      </motion.div>
                      
                      {/* Enhanced Tooltip */}
                      {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                        <motion.div
                          className={`absolute -top-16 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-xl border-2 text-sm font-bold whitespace-nowrap z-20 backdrop-blur-md shadow-2xl ${
                            category.color === "electric-orange"
                              ? "bg-dark-slate/95 border-electric-orange text-electric-orange shadow-electric-orange/50"
                              : category.color === "electric-cyan"
                              ? "bg-dark-slate/95 border-electric-cyan text-electric-cyan shadow-electric-cyan/50"
                              : "bg-dark-slate/95 border-neon-purple text-neon-purple shadow-neon-purple/50"
                          }`}
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.8 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          data-testid={`skill-tooltip-${categoryIndex}-${skillIndex}`}
                        >
                          <div className="flex items-center space-x-2">
                            <span>{skill.name}</span>
                            <span className="font-black text-lg">{skill.percentage}%</span>
                          </div>
                          {/* Enhanced Arrow */}
                          <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent ${
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
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Additional Skills */}
        <motion.div
          className="mt-16 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-testid="additional-skills"
        >
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-gold/5 via-cyber-gold/10 to-cyber-gold/5 rounded-3xl blur-3xl"></div>
          
          <motion.h3 
            className="text-3xl font-bold mb-8 text-cyber-gold relative"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative">
              Databases & Other Skills
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-cyber-gold rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>
          </motion.h3>
          
          <div className="flex flex-wrap gap-6 justify-center relative z-10">
            {[
              { name: "MySQL", percentage: 70 },
              { name: "Data Preprocessing", percentage: 80 },
              { name: "Feature Selection", percentage: 75 },
              { name: "Cross-Validation", percentage: 75 }
            ].map((skill, index) => (
              <div
                key={index}
                className="skill-item relative group"
                onMouseEnter={() => setHoveredSkill(`additional-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
                data-testid={`additional-skill-${index}`}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-cyber-gold/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                
                <motion.div
                  className="relative px-6 py-4 bg-cyber-gold/10 text-cyber-gold rounded-xl border-2 border-cyber-gold/20 font-mono cursor-pointer transition-all overflow-hidden hover:border-cyber-gold/60 hover:bg-cyber-gold/20 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-gold/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 font-semibold">{skill.name}</span>
                </motion.div>
                
                {/* Enhanced Tooltip */}
                {hoveredSkill === `additional-${index}` && (
                  <motion.div
                    className="absolute -top-16 left-1/2 transform -translate-x-1/2 px-4 py-3 bg-dark-slate/95 border-2 border-cyber-gold text-cyber-gold rounded-xl text-sm font-bold whitespace-nowrap z-20 backdrop-blur-md shadow-2xl shadow-cyber-gold/50"
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    data-testid={`additional-skill-tooltip-${index}`}
                  >
                    <div className="flex items-center space-x-2">
                      <span>{skill.name}</span>
                      <span className="font-black text-lg">{skill.percentage}%</span>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-cyber-gold" />
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
