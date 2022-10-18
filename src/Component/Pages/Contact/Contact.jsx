import './Contact.css'
import '../../../style.css'

import Footer from '../../Footer'
import Modal from '../../Modal'
import Navbar from '../../Navbar'
import React from 'react'

// import './assets/undraw-contact-us.png'

export const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="contact-biggest-container">
        <div className="contact-left-img">
          <img
            src="/assets/undraw-contact-us.png"
            className="contact-img"
            alt="contact-us-image"
          />
          <div className="contact-location-box">
            <div className="contact-general-inquiries">
              <h3 className="contact-inquires-caption">G eneral inquiries</h3>
              <di v className="contact-img-telephones">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"
                    fill="rgba(9,124,13,1)"
                  />
                </svg>
                <div className="contact-actual-numbers">
                  <h4> 08082957336</h4>
                  <h4> 08082957336</h4>
                </div>
              </di>
              <div className="contact-img-email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"
                    fill="rgba(9,124,13,1)"
                  />
                </svg>
                <h4> agroease@gmail.com</h4>
              </div>
            </div>
            {/* --------------------location ------------------------*/}
            <div className="contact-img-location">
              <h3 className="contact-inquires-caption">Location</h3>
              <div className="img-location-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                    fill="rgba(9,124,13,1)"
                  />
                </svg>
                <div className="contact-location">
                  <h4> Tech Specialist</h4>
                  <h4> Wuse Zone 6</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right-form">
          {/* <h2>Contact Us</h2> */}
          <div className="contact-form-container">
            <form className="contact-form-box" id="loginForm">
              <h2 className="form-headline">Contact Us</h2>
              <div className="contact-input">
                <input
                  type="text"
                  className="contact-input-box"
                  name="name"
                  id="input1"
                  placeholder="Name"
                  required
                />
                <div className="error-name hidden">Your Name Is Required</div>
                <input
                  type="email"
                  className="contact-input-box"
                  id="input2"
                  placeholder="Email"
                  required
                />
                {/* <div class="error-email">Please Input Your Email </div> */}
              </div>
              {/* textarea and button */}
              <textarea
                className="contact-textarea"
                rows={8}
                cols={30}
                placeholder="Message"
                required
                defaultValue={''}
              />
              <div className="form-group">
                <button className="contact-btn" id="btn-contact" type="submit">
                  Send Message
                </button>
              </div>
            </form>
            <p className="contact-declaimer">
              Try reading our <a href="/pages/faq/faq.html">FAQ Page</a> before
              you write in asking us something that we've already answered
            </p>
            <h4 className="contact-call"> You can also call or email us</h4>
            {/* section for inquries adderess/number/ location */}
            {/* </div> */}
          </div>
        </div>
      </main>
      <Modal />

      <Footer />
    </>
  )
}
