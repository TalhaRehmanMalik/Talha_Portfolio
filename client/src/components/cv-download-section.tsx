import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"

export function CVDownloadSection() {
  const handleDownload = () => {
    // Download the actual CV PDF
    const link = document.createElement('a')
    link.href = '/attached_assets/talha rehman cv_1756144048397.pdf'
    link.download = 'Talha_Rehman_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-20 bg-slate-900/50" data-testid="cv-download-section">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-5xl font-display font-bold mb-8 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-testid="cv-download-title"
        >
          Get My Resume
        </motion.h2>

        <motion.p
          className="text-xl text-slate-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-testid="cv-download-description"
        >
          Download my complete CV to learn more about my experience and projects
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-electric-orange to-electric-cyan text-dark-slate font-bold rounded-lg hover:from-electric-cyan hover:to-electric-orange transition-all transform glow-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="button-download-cv"
          >
            <Download className="mr-3" size={20} />
            Download CV
          </motion.button>

          <motion.div
            className="flex items-center text-slate-400"
            whileHover={{ scale: 1.05 }}
          >
            <FileText className="mr-2" size={20} />
            <span>PDF Format • Updated December 2024</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 text-sm text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          data-testid="cv-download-note"
        >
          * Available for immediate download. No email required.
        </motion.div>
      </div>
    </section>
  )
}
