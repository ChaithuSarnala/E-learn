import React from 'react'
import Cd from '../../../assets/Cd.png';
import Cd1 from '../../../assets/Cd1.png';
import Cd2 from '../../../assets/Cd2.png';
import Cd3 from '../../../assets/Cd3.png';
import Cd4 from '../../../assets/Cd4.png';
import './Contact.css';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const faqImages = [Cd, Cd1, Cd2, Cd3, Cd4];

const Contact = () => {
  return (
    <>
    {/* <Navbar/> */}
    <section className="faq-section">
        <div className='faq'>
          <div className="faq-header">
            <h1>Frequently Asked Questions</h1>
            <p>Still you have any questions? Contact our <br /> Team via support@skillbridge.com</p>
            <button className="faq-btn">See All FAQ’s</button>
          </div>
          <div className="faq-images">
            {faqImages.map((src, index) => (
              <img src={src} className="faq-img" key={index} />
            ))}
          </div>
        </div>
      </section>
      {/* <Footer/> */}
      </>
  )
}

export default Contact