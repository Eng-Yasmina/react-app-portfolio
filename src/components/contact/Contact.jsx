import "./contact.scss";
import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState(false)
  const handleSubmit = ()=>{
    setMessage(true)
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.png" alt="" />
      </div>
      <div className="right">
        <div id="app-input-data" className="app-input-data">
          <form action="https://formspree.io/f/xrgdolww" onSubmit={handleSubmit} method="POST">
            <h2 className="main-intro">Join Happy Clients<br/>From Everywhere</h2>
            <div className="section-form-container">
              <div className="client-form">
                <div className="form">
                  <input className="input" name="mail" type="text" placeholder="example@gmail.com" />
                  <label> <span >Email</span> </label>
                </div>

                <div className="form">
                  <input className="input" name="mail" type="text" placeholder="Message" />
                  <label class="label__feeling"> <span class="content__feeling">How can i help you ?</span> </label>
                </div>
              </div>
           
              <button type="submit">Send </button>
            </div>
            {message && <span>Thanks, I'll reply soon</span>}
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact;