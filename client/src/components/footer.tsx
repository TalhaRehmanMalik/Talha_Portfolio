import { motion } from "framer-motion"
import { Mail, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      {/* Contact Rectangle (Rounded Pill Only) */}
      <motion.div 
        className="flex items-center justify-center w-fit px-8 py-3 rounded-full bg-slate-800/70 shadow-lg space-x-8"
        whileHover={{ scale: 1.05 }}
      >
        <motion.a 
          href="mailto:talharehman41061@gmail.com"
          className="text-slate-400 hover:text-electric-orange transition-colors"
          whileHover={{ scale: 1.2 }}
        >
          <Mail size={26} />
        </motion.a>

        <motion.a 
          href="https://www.linkedin.com/in/talha-rehman-7a3178221"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-electric-cyan transition-colors"
          whileHover={{ scale: 1.2 }}
        >
          <Linkedin size={26} />
        </motion.a>

        <motion.a 
          href="https://github.com/TalhaRehmanMalik"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-neon-purple transition-colors"
          whileHover={{ scale: 1.2 }}
        >
          <Github size={26} />
        </motion.a>
      </motion.div>
    </div>
  )
}
