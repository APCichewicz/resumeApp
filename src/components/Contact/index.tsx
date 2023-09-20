import * as React from 'react'
import Loader from 'react-loaders'
import { AnimatedLetters } from '../AnimatedLetters'
import './index.scss'
import { useEffect } from 'react'
import { Input } from '../Input'
import emailjs, { send } from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = React.useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    const refForm = React.useRef(null)
    // validate the form

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_yl1otbn', 'template_ols8cpc', refForm.current, 'ZTK1qtW5gN-BEZbKM')
          .then((result) => {
              console.log(result.text);
              window.location.reload()
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="container contact-page">
        <div className="text-zone">
            <h1>
                {/* animated letters for "contact me" */}
                <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} idx={10} />
            </h1>
            <form ref={refForm} onSubmit={sendEmail}>
                <input type="email" name='email' placeholder='E-Mail' required/>
                <input placeholder='subject' type='text' name='subject' />
                <textarea name="message" placeholder="Message" required></textarea>
                <input type="submit" className='flat-button' value="SEND" />
            </form>
        </div>
        <Loader type='pacman' />
    </div>
  )
}
export default Contact
