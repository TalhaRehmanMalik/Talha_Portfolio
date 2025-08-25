import { useState, useEffect } from "react"
import { useTheme } from "@/components/theme-provider"
import { Moon, Sun, Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-slate/80 backdrop-blur-lg border-b border-electric-orange/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        data-testid="navigation-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="font-mono font-bold text-electric-orange text-xl cursor-pointer"
              onClick={() => scrollToSection("home")}
              whileHover={{ scale: 1.1 }}
              data-testid="logo-home"
            >
              &lt;TR/&gt;
            </motion.div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-electric-orange transition-colors px-3 py-2 text-slate-300"
                    whileHover={{ scale: 1.05 }}
                    data-testid={`nav-link-${link.id}`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-code-bg hover:bg-electric-orange/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                data-testid="theme-toggle"
              >
                {theme === "dark" ? (
                  <Moon className="h-5 w-5 text-electric-orange" />
                ) : (
                  <Sun className="h-5 w-5 text-electric-orange" />
                )}
              </motion.button>

              <button
                className="md:hidden p-2 rounded-lg bg-code-bg hover:bg-electric-orange/20 transition-all"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-electric-orange" />
                ) : (
                  <Menu className="h-5 w-5 text-electric-orange" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-dark-slate/95 backdrop-blur-lg border-b border-electric-orange/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            data-testid="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-electric-orange transition-colors w-full text-left"
                  data-testid={`mobile-nav-link-${link.id}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <motion.div
          className="flex space-x-4 bg-code-bg/90 backdrop-blur-lg rounded-full px-6 py-3 border border-electric-orange/30"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          data-testid="mobile-bottom-nav"
        >
          {[
            { icon: "🏠", id: "home" },
            { icon: "👨‍💻", id: "about" },
            { icon: "🚀", id: "projects" },
            { icon: "⚡", id: "skills" },
            { icon: "📧", id: "contact" },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="p-2 hover:text-electric-orange transition-colors text-lg"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              data-testid={`mobile-bottom-nav-${item.id}`}
            >
              {item.icon}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </>
  )
}
