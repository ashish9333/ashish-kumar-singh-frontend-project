import React, { useState } from 'react';
import './index.css';

const testimonials = [
  {
    text: "A studio filled with passion, professionalism, and boundless creativity. They exceeded my expectations with their excellent services, high-quality products, and affordable prices. I’m extremely satisfied!",
    author: "Kathryn Murphy",
    role: "Senior Marketing, Spotify",
    image: "https://via.placeholder.com/40"
  },
  {
    text: "Their attention to detail and ability to understand our vision was exceptional. The team was committed to delivering a product that met all of our requirements.",
    author: "John Doe",
    role: "Creative Director, Apple",
    image: "https://via.placeholder.com/40"
  },
  {
    text: "Working with this studio was a game-changer for us. Their innovative ideas and dedication made our project stand out.",
    author: "Sarah Williams",
    role: "CEO, Tech Innovators",
    image: "https://via.placeholder.com/40"
  }
];

function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-page">
      <div className="testimonial-container">
        <div className="left-section">
          <h3>Testimonials</h3>
        </div>
        <div className="middle-section">
          <div className="testimonial-slider">
            <div
              className="testimonial-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`, // Correct template literal usage
                transition: 'transform 0.5s ease'
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-box">
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <img
                      className="author-image"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                    <div className="author-section">
                      <h4>{testimonial.author}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="navigation">
            <button className="nav-btn" onClick={prevTestimonial}>
              &#8592;
            </button>
            <button className="nav-btn" onClick={nextTestimonial}>
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
