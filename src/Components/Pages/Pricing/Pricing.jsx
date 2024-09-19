import React from 'react';
import Crd from '../../../assets/Crd.png';
import Crd1 from '../../../assets/Crd1.png';
import './Pricing.css'; 
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const pricingImages = [Crd, Crd1];

const Pricing = () => {
  return (
    <>
      <section className="pricing-section">
        <div>
        <div className='pricing'>
          <h1>Our Pricing</h1>
        </div>
        <div className='price'>
          <p className='price-p'>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum <br />eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <div className='p-btn'>
          <button className="pricing-btn1">Monthly</button>
          <button className="pricing-btn2">Yearly</button>
          </div>
        </div>
        </div>
        <div className="pricing-container">
          {pricingImages.map((crd, index) => (
            <img src={crd} className="pricing-img" key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;
