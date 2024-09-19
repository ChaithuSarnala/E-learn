import React from 'react';
import Cards from './assets/Cards.png';
import Cards1 from './assets/Cards1.png';
import Cards2 from './assets/Cards2.png';
import Cards3 from './assets/Cards3.png';
import Cards4 from './assets/Cards4.png';
import Cards5 from './assets/Cards5.png';
import Cardss from './assets/Cardss.png';
import Cardss1 from './assets/Cardss1.png';
import Cardss2 from './assets/Cardss2.png';
import Cardss3 from './assets/Cardss3.png';
import Cardss4 from './assets/Cardss4.png';
import Cardss5 from './assets/Cardss5.png';
import './Courses.css';
// import Navbar from '../../Navbar/Navbar';
// import Footer from '../../Footer/Footer';

const cardImages1 = [Cards, Cards1, Cards2];
const cardImages2 = [Cards3, Cards4, Cards5];
const courseImages1 = [Cardss, Cardss1];
const courseImages2 = [Cardss2, Cardss3];
const courseImages3 = [Cardss4, Cardss5];
const Courses = () => {
  return (
    <>
      <section className="benefits-section">
        <div className="benefits-header">
          <div className="benefits-title">
            <h1>Benefits</h1>
          </div>
          <div>
            <div className="benefits-content">
              <p className="benefits-text">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
              <button className="view-all-btn">View All</button>
            </div>
          </div>
        </div>

        <div className="cards-row">
          {cardImages1.map((cards, index) => (
            <img src={cards} className="card-img" key={index} />
          ))}
        </div>

        <div className="cards-row">
          {cardImages2.map((cards3, index) => (
            <img src={cards3} className="card-img-large" key={index} />
          ))}
        </div>
      </section>

      <section className="section2">
        <div className="benefits-header">
          <div className="benefits-title">
            <h1>Our Courses</h1>
          </div>
          <div>
            <div className="benefits-content">
              <p className="benefits-text">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
              <button className="view-all-btn">View All</button>
            </div>
          </div>

        </div>



        <div className="courses-row">
          {courseImages1.map((cardss, index) => (
            <div key={index} className="course-card">
              <img src={cardss} className="course-img" />
              <button className="course-button">Get it Now</button>
            </div>
          ))}
        </div>



        <div className="courses-row">
          {courseImages2.map((cardss2, index) => (
            <div key={index} className="course-card">
              <img src={cardss2} className="course-img"  />
              <button className="course-button">Get it Now</button>
            </div>
          ))}
        </div>

        <div className="courses-row">
          {courseImages3.map((Cardss4, index) => (
            <div key={index} className="course-card">
              <img src={Cardss4} className="course-img"  />
              <button className="course-button">Get it Now</button>
            </div>
          ))}
        </div>
      </section>
      {/* <Footer/> */}
    </>
  );
};

export default Courses;
