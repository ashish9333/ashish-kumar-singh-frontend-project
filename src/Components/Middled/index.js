import React from 'react'
import './index.css'

function index() {
  return (
    <div>
        <div className="services-container-box">
    <div className="services-container">
      <div className="header">
        <div className="left">
          <p className="small-text">Our Services</p>
        </div>
        <div className="right">
          <h1 className="main-text">
            We are a close-knit team of experts dedicated to crafting memorable
            and emotionally engaging websites, digital experiences, and native
            apps.
          </h1>
        </div>
      </div>

      <div className="services-grid">
        <div className="service-box brand-identity">
          <div className="service-header">
            <h2>BRAND IDENTITY</h2>
            <div className="service-arrow">
              <img src="/arrow.png" alt="User"/>
            </div>
          </div>
          <p>
            We provide digital solutions such as Website Design, Mobile App
            Design, Landing Page design, Illustration, Animation, etc that
            increase company’s values
          </p>
        </div>

        <div className="service-box">
       
          <div className="service-header">
            <h2>UX/UI DESIGN</h2>
            <div className="service-arrow">
              <img src="/arrow.png" alt="User" />
            </div>
          </div>
          <p>
            We provide digital solutions such as Website Design, Mobile App
            Design, Landing Page design, Illustration, Animation, etc that
            increase company’s values
          </p>
        </div>

        <div className="service-box">
           <div className="service-header">
            <h2>WEBFLOW DEVELOPER</h2>
            <div className="service-arrow">
              <img src="/arrow.png" alt="User"/>
            </div>
          </div>
          <p>
            We provide digital solutions such as Website Design, Mobile App
            Design, Landing Page design, Illustration, Animation, etc that
            increase company’s values
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default index
