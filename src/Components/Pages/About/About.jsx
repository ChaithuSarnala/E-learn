import React from 'react';
import Cardsss1 from '../../../assets/Cardsss1.png';
import Cardsss2 from '../../../assets/Cardsss2.png';
import Cardsss3 from '../../../assets/Cardsss3.png';
import Cardsss4 from '../../../assets/Cardsss4.png';
import './About.css';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const testimonialImages = [Cardsss1, Cardsss2, Cardsss3, Cardsss4];

const About = () => {
  return (
    <>
    {/* <Navbar/> */}
      <section className="testimonials-section">
       <div className='testimonials'>
       <div>
          <h1>Our Testimonials</h1>
        </div>
        <div className='test'>
          <p className='test-p'>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <button className="view-all-btn">View All</button>

        </div>
       </div>
        <div className="testimonials-row">
          {testimonialImages.slice(0, 2).map((src, index) => (
            <img src={src} className="testimonial-img" key={index} />
          ))}
        </div>
        <div className="testimonials-row">
          {testimonialImages.slice(2).map((src, index) => (
            <img src={src} className="testimonial-img"  key={index + 2} />
          ))}
        </div>
      </section>
      {/* <Footer/> */}
    </>
  );
};

export default About;
