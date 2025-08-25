import { motion } from "framer-motion"
import { Github, ExternalLink, TrendingUp, Heart, Film } from "lucide-react"

const projects = [
  {
    title: "Potato Disease Classification",
    description: "Developed a deep learning model using CNN to classify potato leaf diseases from images. Trained on a Kaggle dataset with real-time image input support. Applied data augmentation techniques such as flipping and rotation.",
    technologies: ["TensorFlow", "CNN", "Data Augmentation"],
    metrics: [
      { label: "Test Accuracy", value: "94.17%", color: "electric-orange" },
      { label: "Validation Accuracy", value: "97.92%", color: "electric-cyan" }
    ],
    icon: TrendingUp,
    github: "https://github.com/TalhaRehmanMalik",
    demo: "https://github.com/TalhaRehmanMalik"
  },
  {
    title: "Heart Disease Prediction System",
    description: "Designed a machine learning model using logistic regression to predict heart disease from patient data. Processed and analyzed 13 clinical features including cholesterol, blood pressure, and chest pain type. Used stratified train-test split for balanced evaluation.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Logistic Regression"],
    metrics: [
      { label: "Prediction Accuracy", value: "~90%", color: "cyber-gold" }
    ],
    icon: Heart,
    github: "https://github.com/TalhaRehmanMalik",
    demo: "https://github.com/TalhaRehmanMalik"
  },
  {
    title: "Movie Recommender System",
    description: "Built a collaborative filtering recommendation system using a user-movie rating matrix. Used cosine similarity to find similar users and suggest movies. Processed data using pandas and NumPy to generate relevant movie recommendations for each user.",
    technologies: ["Python", "Pandas", "Cosine Similarity"],
    metrics: [
      { label: "Approach", value: "Collaborative Filtering", color: "neon-purple" }
    ],
    icon: Film,
    github: "https://github.com/TalhaRehmanMalik",
    demo: "https://github.com/TalhaRehmanMalik"
  }
]

export function ProjectsSection() {
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
    <section id="projects" className="py-20" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-display font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          data-testid="projects-title"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glow-card rounded-2xl p-8 backdrop-blur-sm group"
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              data-testid={`project-card-${index}`}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <project.icon className="text-electric-orange mr-3" size={28} />
                    <h3 className="text-2xl font-bold text-electric-orange">{project.title}</h3>
                  </div>
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      className="text-slate-400 hover:text-electric-orange transition-colors"
                      whileHover={{ scale: 1.2 }}
                      data-testid={`project-github-${index}`}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="text-slate-400 hover:text-electric-cyan transition-colors"
                      whileHover={{ scale: 1.2 }}
                      data-testid={`project-demo-${index}`}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm font-mono ${
                        techIndex % 3 === 0
                          ? "bg-electric-orange/20 text-electric-orange"
                          : techIndex % 3 === 1
                          ? "bg-electric-cyan/20 text-electric-cyan"
                          : "bg-neon-purple/20 text-neon-purple"
                      }`}
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed" data-testid={`project-description-${index}`}>
                {project.description}
              </p>

              <div className={`grid ${project.metrics.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
                {project.metrics.map((metric, metricIndex) => (
                  <motion.div
                    key={metricIndex}
                    className={`text-center p-4 rounded-lg border ${
                      metric.color === "electric-orange"
                        ? "bg-electric-orange/10 border-electric-orange/30"
                        : metric.color === "electric-cyan"
                        ? "bg-electric-cyan/10 border-electric-cyan/30"
                        : metric.color === "cyber-gold"
                        ? "bg-cyber-gold/10 border-cyber-gold/30"
                        : "bg-neon-purple/10 border-neon-purple/30"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    data-testid={`project-metric-${index}-${metricIndex}`}
                  >
                    <div className={`text-2xl font-bold ${
                      metric.color === "electric-orange"
                        ? "text-electric-orange"
                        : metric.color === "electric-cyan"
                        ? "text-electric-cyan"
                        : metric.color === "cyber-gold"
                        ? "text-cyber-gold"
                        : "text-neon-purple"
                    }`}>
                      {metric.value}
                    </div>
                    <div className="text-sm text-slate-400">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
