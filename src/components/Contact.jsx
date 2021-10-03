import React, {useState} from 'react'
import emailjs from 'emailjs-com';
import '../css/contact.css';

const Contact = () => {
    const [isSent, setIsSent] = useState(false);
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_rvtzvpb', 'template_6tiey1k', e.target, 'user_nXEk32pNuoiF2IwiwC1Zg')
          .then((result) => {
              console.log(result.text);
              setIsSent(true);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <div className="contact-section" id="contact">
            <h2>CONTACT</h2>
            {isSent && <div style={{
                background: 'rgb(245,245,245)',
                padding: '20px',
                marginBottom: '20px',
                color: 'rgb(150,150,150)'
            }}>Thanks for contacting me. I will get back to you shortly!</div>}
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Subject</label>
                <input type="text" name="subject" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact
