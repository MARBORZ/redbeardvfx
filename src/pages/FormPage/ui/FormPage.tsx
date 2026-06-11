/**
 * Form Page (Contact Page)
 *
 * EN: Contact form page for inquiries and professional communication.
 *     Features form validation, submission handling, and status feedback with glassmorphism styling.
 *
 * RU: Страница контактной формы для запросов и профессионального общения.
 *     Включает валидацию формы, обработку отправки и обратную связь статуса с стилем glassmorphism.
 */

import { FC, useState } from 'react'
import { motion } from 'motion/react'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { Button } from '@shared/ui/button'
import { titleReveal, fadeUp } from '@shared/lib/animationVariants'
import { useIsMobile } from '@shared/lib/useIsMobile'
import styles from './FormPage.module.scss'

export const FormPage: FC = () => {
  const isMobile = useIsMobile()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const urlAPI = import.meta.env.VITE_URL
      const response = await fetch(urlAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' })
        setSubmitStatus('success')
        setTimeout(() => setSubmitStatus('idle'), 4000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 4000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main className={styles.formPage}>
        <section className={styles.formSection}>
          <div className={styles.formContainer}>
            {isMobile ? (
              <div className={styles.formHeader}>
                <h1 className={styles.title}>Get in Touch</h1>
                <p className={styles.subtitle}>
                  Have a project in mind? Let's work together to bring your vision
                  to life.
                </p>
              </div>
            ) : (
              <motion.div
                className={styles.formHeader}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={titleReveal as any}
              >
                <h1 className={styles.title}>Get in Touch</h1>
                <p className={styles.subtitle}>
                  Have a project in mind? Let's work together to bring your vision
                  to life.
                </p>
              </motion.div>
            )}

            {submitStatus === "success" && (
              <motion.div
                className={styles.successMessage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <span className={styles.successIcon}>✓</span>
                <p>Thank you! Your message has been sent successfully.</p>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                className={styles.errorMessage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <span className={styles.errorIcon}>!</span>
                <p>Oops! Something went wrong. Please try again.</p>
              </motion.div>
            )}

            {isMobile ? (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Project details"
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={styles.textarea}
                    placeholder="Tell me about your project..."
                    rows={6}
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className={styles.submitButton}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            ) : (
              <motion.form
                className={styles.form}
                onSubmit={handleSubmit}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp as any}
                transition={{ delay: 0.2 }}
              >
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Project details"
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={styles.textarea}
                    placeholder="Tell me about your project..."
                    rows={6}
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className={styles.submitButton}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.form>
            )}

            <div className={styles.info}>
              <p className={styles.infoText}>
                Or reach out directly at{" "}
                <a href="mailto:rustammasuev@gmail.com" className={styles.link}>
                  rustammasuev@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}