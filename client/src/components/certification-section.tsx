import { motion } from "framer-motion"
import { Award, Shield } from "lucide-react"

export function CertificationSection() {
  return (
    <section className="py-20" data-testid="certification-section">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-display font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-testid="certifications-title"
        >
          Certifications
        </motion.h2>

        <motion.div
          className="glow-card rounded-2xl p-8 backdrop-blur-sm text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{
            y: -10,
            transition: { duration: 0.3 },
          }}
          data-testid="microsoft-certification-card"
        >
          <motion.div
            className="mb-6"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <div className="flex justify-center items-center space-x-4">
              <Shield className="text-electric-cyan" size={48} />
              <Award className="text-electric-orange" size={64} />
              <Shield className="text-electric-cyan" size={48} />
            </div>
          </motion.div>

          <motion.h3
            className="text-3xl font-bold mb-4 text-electric-orange"
            whileHover={{ scale: 1.05 }}
            data-testid="certification-provider"
          >
            Microsoft Certified
          </motion.h3>
          
          <motion.p
            className="text-xl text-electric-cyan mb-4 font-semibold"
            whileHover={{ scale: 1.05 }}
            data-testid="certification-name"
          >
            Azure AI Fundamentals
          </motion.p>
          
          <p className="text-slate-400 leading-relaxed" data-testid="certification-description">
            Foundational knowledge of machine learning and AI concepts on Microsoft Azure platform. 
            Demonstrates understanding of AI workloads, responsible AI principles, and Azure AI services.
          </p>

          <motion.div
            className="mt-6 inline-flex items-center px-6 py-3 bg-electric-cyan/20 text-electric-cyan rounded-full border border-electric-cyan/30"
            whileHover={{ scale: 1.05 }}
            data-testid="certification-badge"
          >
            <Award className="mr-2" size={20} />
            <span className="font-semibold">Verified Credential</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
