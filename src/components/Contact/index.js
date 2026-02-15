import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isDisabled, setIsDisabled] = useState(false)
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    setIsDisabled(true)
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICEID,
        process.env.REACT_APP_EMAIL_TAMPLATEID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLICID
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
          setIsDisabled(false)
        }
      )
  }

  return (
    <section id="contact" className="contact-section">
      <h1 className="section-heading">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
          idx={15}
        />
      </h1>
      <p className="contact-intro">
        I'm always open to discussing new opportunities, interesting projects, or
        collaborations in software development and data/AI. Don't hesitate to
        reach out using the form below.
      </p>
      <div className="contact-form-wrapper">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-row">
            <input placeholder="Name" type="text" name="name" required />
            <input placeholder="Email" type="email" name="email" required />
          </div>
          <input placeholder="Subject" type="text" name="subject" required />
          <textarea
            placeholder="Message"
            name="message"
            required
          ></textarea>
          <button type="submit" className="submit-btn" disabled={isDisabled}>
            {isDisabled ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
