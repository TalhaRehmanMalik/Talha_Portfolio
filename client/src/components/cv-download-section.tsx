import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"

export function CVDownloadSection() {
  const handleDownload = () => {
    // Create a blob with sample CV content for demonstration
    const cvContent = `
TALHA REHMAN
talharehman41061@gmail.com | +92-321-4361397
linkedin.com/in/talha-rehman-7a3178221 | github.com/TalhaRehmanMalik

SUMMARY
Motivated and detail-oriented Information Technology undergraduate seeking an AI/ML internship opportunity.
Skilled in developing data-driven solutions using Python, TensorFlow, and Scikit-learn. Experienced in image
classification, predictive modeling, and model evaluation. Quick learner with strong problem-solving skills and a
passion for real-world applications of artificial intelligence.

EDUCATION
• University of the Punjab
  Bachelor of Science in Information Technology                                                           Expected 2026
• Superior College, Lahore
  Intermediate in Computer Science                                                                         2019 — 2021

SKILLS
Languages: Python, C, C++, OOP
ML AI: Machine Learning, Deep Learning, Convolutional Neural Networks (CNN), Model Training, Evaluation,
Supervised/Unsupervised Learning
Tools Libraries: TensorFlow, Keras, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, OpenCV, Jupyter Note-
book, Streamlit, Google Colab
Databases: MySQL
Other: Data Preprocessing, Feature Selection, Cross-Validation

PROJECTS
Potato Disease Classification                                                     TensorFlow, CNN, Data Augmentation
Developed a deep learning model using CNN to classify potato leaf diseases from images. Trained on a Kaggle dataset
with real-time image input support. Applied data augmentation techniques such as flipping and rotation. Achieved 94.17%
test accuracy and 97.92% validation accuracy. Saved model in Keras format and visualized predictions for multiple disease
classes.

Heart Disease Prediction System                                           Python, Pandas, Scikit-learn, Logistic Regression
Designed a machine learning model using logistic regression to predict heart disease from patient data. Processed and
analyzed 13 clinical features including cholesterol, blood pressure, and chest pain type. Used stratified train-test split for
balanced evaluation and achieved an accuracy of ~90%. Performed feature encoding, null value checks, and created a
predictive pipeline with result evaluation.

Movie Recommender System                                                                 Python, Pandas, Cosine Similarity
Built a collaborative filtering recommendation system using a user-movie rating matrix. Used cosine similarity to find similar
users and suggest movies. Processed data using pandas and NumPy to generate relevant movie recommendations for each
user.

CERTIFICATION
• Microsoft Certified: Azure AI Fundamentals
    `

    const blob = new Blob([cvContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Talha_Rehman_CV.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
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
