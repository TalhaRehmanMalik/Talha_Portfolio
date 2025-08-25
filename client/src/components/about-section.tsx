import { motion } from "framer-motion"
import { Brain, GraduationCap } from "lucide-react"

export function AboutSection() {
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
    <section id="about" className="py-20 bg-slate-900/50" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-display font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-testid="about-title"
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="glow-card rounded-2xl p-8 backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            data-testid="about-ai-ml-card"
          >
            <h3 className="text-2xl font-bold mb-6 text-electric-orange flex items-center">
              <Brain className="mr-3" size={28} />
              AI/ML Enthusiast
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Motivated and detail-oriented Information Technology undergraduate seeking AI/ML internship opportunities. 
              Skilled in developing data-driven solutions using Python, TensorFlow, and Scikit-learn.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Experienced in image classification, predictive modeling, and model evaluation. Quick learner with 
              strong problem-solving skills and a passion for real-world applications of artificial intelligence.
            </p>
          </motion.div>

          <motion.div
            className="glow-card rounded-2xl p-8 backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            data-testid="about-education-card"
          >
            <h3 className="text-2xl font-bold mb-6 text-electric-cyan flex items-center">
              <GraduationCap className="mr-3" size={28} />
              Education
            </h3>
            <div className="space-y-6">
              <motion.div
                className="border-l-4 border-electric-orange pl-6"
                whileHover={{ scale: 1.02 }}
                data-testid="education-university"
              >
                <h4 className="font-bold text-lg">University of the Punjab</h4>
                <p className="text-electric-orange font-semibold">Bachelor of Science in Information Technology</p>
                <p className="text-slate-400">Expected 2026</p>
              </motion.div>
              <motion.div
                className="border-l-4 border-electric-cyan pl-6"
                whileHover={{ scale: 1.02 }}
                data-testid="education-college"
              >
                <h4 className="font-bold text-lg">Superior College, Lahore</h4>
                <p className="text-electric-cyan font-semibold">Intermediate in Computer Science</p>
                <p className="text-slate-400">2019 — 2021</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
