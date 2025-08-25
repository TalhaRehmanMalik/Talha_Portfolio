import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "talharehman41061@gmail.com",
    href: "mailto:talharehman41061@gmail.com",
    color: "electric-orange"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Professional Network",
    href: "https://linkedin.com/in/talha-rehman-7a3178221",
    color: "electric-cyan"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "Code Repository",
    href: "https://github.com/TalhaRehmanMalik",
    color: "neon-purple"
  }
]

export function ContactSection() {
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
    <section id="contact" className="py-20" data-testid="contact-section">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-display font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-testid="contact-title"
        >
          Let's Connect
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="glow-card rounded-2xl p-8 backdrop-blur-sm text-center group block"
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              data-testid={`contact-method-${index}`}
            >
              <motion.div
                className="mb-6"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                <method.icon
                  size={48}
                  className={`mx-auto ${
                    method.color === "electric-orange"
                      ? "text-electric-orange"
                      : method.color === "electric-cyan"
                      ? "text-electric-cyan"
                      : "text-neon-purple"
                  } group-hover:animate-pulse`}
                />
              </motion.div>

              <h3 className="text-xl font-bold mb-2" data-testid={`contact-method-title-${index}`}>
                {method.title}
              </h3>
              
              <p className={`break-all ${
                method.color === "electric-orange"
                  ? "text-electric-orange"
                  : method.color === "electric-cyan"
                  ? "text-electric-cyan"
                  : "text-neon-purple"
              } group-hover:underline`} data-testid={`contact-method-value-${index}`}>
                {method.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          data-testid="contact-additional-info"
        >
          <div className="flex items-center justify-center space-x-6 text-slate-400">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05, color: "#FF6B35" }}
            >
              <Phone size={20} className="mr-2" />
              <span data-testid="contact-phone">+92-321-4361397</span>
            </motion.div>
            
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05, color: "#00F5FF" }}
            >
              <MapPin size={20} className="mr-2" />
              <span data-testid="contact-location">Lahore, Pakistan</span>
            </motion.div>
          </div>
          
          <motion.p
            className="text-slate-300 text-lg"
            whileHover={{ scale: 1.05 }}
            data-testid="contact-availability"
          >
            Open to internship opportunities and collaborations!
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
