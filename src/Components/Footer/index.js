import React from 'react'
import './index.css'


function index() {
  return (
    <div>
       <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h2>Feel free to connect with us!</h2>
          <div className="icons">
            <i className="fab fa-xbox"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-behance"></i>
          </div>
          <div className="contact">
            <span className="phone">0972 663 633</span>
            <span className="email">hello@wefo.com</span>
          </div>
        </div>
        <div className="footer-section contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" placeholder="Your email address" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Write your message here..."></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default index