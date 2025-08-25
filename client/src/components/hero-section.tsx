import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const backgroundImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [typingText, setTypingText] = useState("")
  const fullText = "Information Technology Undergraduate | Aspiring ML Engineer"

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 4000)

    return () => clearInterval(imageInterval)
  }, [])

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 0.3 : 0 }}
            transition={{ duration: 2 }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-dark-slate/60 backdrop-blur-sm z-10" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-4 h-4 bg-electric-orange rounded-full hidden lg:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-6 h-6 bg-electric-cyan rounded-full hidden lg:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-display font-black mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            data-testid="hero-name-talha"
          >
            <span className="gradient-text">TALHA</span>
          </motion.h1>
          <motion.h1
            className="text-6xl md:text-8xl font-display font-black mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            data-testid="hero-name-rehman"
          >
            <span className="chrome-accent">REHMAN</span>
          </motion.h1>
        </motion.div>

        <motion.div
          className="text-xl md:text-2xl font-mono text-electric-cyan mb-8 min-h-[3rem] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          data-testid="hero-subtitle"
        >
          <span className="typing-cursor">
            {typingText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 bg-electric-orange text-dark-slate font-bold rounded-lg hover:bg-electric-cyan transition-all transform hover:scale-105 glow-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="button-view-work"
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border-2 border-electric-orange text-electric-orange font-bold rounded-lg hover:bg-electric-orange hover:text-dark-slate transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="button-lets-connect"
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-electric-orange cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection("about")}
        data-testid="scroll-indicator"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  )
}
