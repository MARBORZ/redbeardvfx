/**
 * Form Page (Contact Page)
 *
 * EN: Contact form page for inquiries and professional communication.
 *     Features form validation, submission handling, and status feedback.
 *
 * RU: Страница контактной формы для запросов и профессионального общения.
 *     Включает валидацию формы, обработку отправки и обратную связь статуса.
 */

import { FC, useState } from 'react'
import { motion } from 'motion/react'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { Button } from '@shared/ui/button'
import { revealLeft, fadeUp } from '@shared/lib/animationVariants'
import { useConditionalAnimation } from '@shared/lib/useConditionalAnimation'
import styles from './FormPage.module.scss'

export const FormPage: FC = () => {
  const infoAnimation = useConditionalAnimation({
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
    variants: revealLeft,
  })
  const formAnimation = useConditionalAnimation({
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
    variants: fadeUp,
    transition: { delay: 0.15 },
  })
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
    setFormData((prev) => ({
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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

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
            <motion.div className={styles.info} {...infoAnimation}>
              <p className={styles.infoLabel}>Get In Touch</p>
              <h1 className={styles.infoTitle}>Let's start a conversation.</h1>
              <p className={styles.infoSubtitle}>
                Have a project in mind? Tell me about it and I'll get back to you as soon as
                possible.
              </p>

              <a href="mailto:rustammasuev@gmail.com" className={styles.infoEmail}>
                rustammasuev@gmail.com
              </a>
            </motion.div>

            <motion.form className={styles.form} onSubmit={handleSubmit} {...formAnimation}>
              {submitStatus === 'success' && (
                <motion.div
                  className={styles.formMessage}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! Your message has been sent.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className={`${styles.formMessage} ${styles.formMessageError}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}

              <div className={styles.formRow}>
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
                  rows={5}
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
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
