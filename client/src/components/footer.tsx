import { motion } from "framer-motion"
import { Heart, Mail, Linkedin, Github } from "lucide-react"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      href: "mailto:talharehman41061@gmail.com",
      color: "electric-orange"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/talha-rehman-7a3178221",
      color: "electric-cyan"
    },
    {
      icon: Github,
      title: "GitHub",
      href: "https://github.com/TalhaRehmanMalik",
      color: "neon-purple"
    }
  ]

  return (
    <footer className="bg-dark-slate border-t border-electric-orange/20 py-12" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <motion.div
              className="font-mono font-bold text-electric-orange text-2xl mb-4 cursor-pointer"
              onClick={() => scrollToSection("home")}
              whileHover={{ scale: 1.1 }}
              data-testid="footer-logo"
            >
              &lt;TR/&gt;
            </motion.div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Information Technology Undergraduate passionate about AI/ML, ready to contribute to innovative solutions and drive technological advancement.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: "About", id: "about" },
                { name: "Projects", id: "projects" },
                { name: "Skills", id: "skills" },
                { name: "Certifications", id: "certification-section" },
              ].map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-slate-400 hover:text-electric-orange transition-colors text-sm"
                  whileHover={{ x: 5 }}
                  data-testid={`footer-nav-${link.id}`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Let's Connect</h3>
            <div className="space-y-3">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center text-slate-400 hover:text-${method.color} transition-colors text-sm group`}
                  whileHover={{ x: 5 }}
                  data-testid={`footer-contact-${index}`}
                >
                  <method.icon size={16} className="mr-3 group-hover:scale-110 transition-transform" />
                  <span>{method.title}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-6 border-t border-slate-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.p
              className="text-slate-400 text-sm mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
              data-testid="footer-copyright"
            >
              &copy; 2024 Talha Rehman. All rights reserved.
            </motion.p>
            <motion.p
              className="text-sm text-slate-400 flex items-center"
              whileHover={{ scale: 1.05 }}
              data-testid="footer-tagline"
            >
              Built with <Heart size={14} className="mx-1 text-electric-orange animate-pulse" /> for AI/ML Innovation
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
