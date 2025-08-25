import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-dark-slate border-t border-electric-orange/20 py-8" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="font-mono font-bold text-electric-orange text-xl mb-4 md:mb-0 cursor-pointer"
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.1 }}
            data-testid="footer-logo"
          >
            &lt;TR/&gt;
          </motion.div>

          <div className="text-slate-400 text-center md:text-right">
            <motion.p
              whileHover={{ scale: 1.05 }}
              data-testid="footer-copyright"
            >
              &copy; 2024 Talha Rehman. All rights reserved.
            </motion.p>
            <motion.p
              className="text-sm mt-1 flex items-center justify-center md:justify-end"
              whileHover={{ scale: 1.05 }}
              data-testid="footer-tagline"
            >
              Built with <Heart size={16} className="mx-1 text-electric-orange animate-pulse" /> for AI/ML
            </motion.p>
          </div>
        </div>

        <motion.div
          className="mt-6 pt-6 border-t border-slate-700 text-center text-sm text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          data-testid="footer-additional-info"
        >
          <p>Passionate about artificial intelligence and machine learning</p>
          <p className="mt-1">Ready to contribute to innovative AI solutions</p>
        </motion.div>
      </div>
    </footer>
  )
}
