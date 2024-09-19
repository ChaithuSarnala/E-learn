import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Icon from '../../../assets/Icon.png';
import Line from '../../../assets/Line.png';
import Card from '../../../assets/Card.png';
import Card1 from '../../../assets/Card (1).png';
import Card2 from '../../../assets/Card (2).png';
import Card3 from '../../../assets/Card (3).png';
import Card4 from '../../../assets/Card (4).png';
import Card5 from '../../../assets/Card (5).png';
import Card6 from '../../../assets/Card (6).png';
import Container from '../../../assets/Container.png';
import video from "../../../assets/videoplayback.mp4"
import Footer from '../../Footer/Footer';
import './Home.css';
import Courses from '../Courses/Courses';
import About from '../About/About';
import Pricing from '../Pricing/Pricing';
import Contact from '../Contact/Contact';

const Home = () => {
    const cards = [Card, Card1, Card2, Card3, Card4, Card5, Card6];
    return (
        <>

            <section>
                <div className="header-section">
                    <div className="line-icon-container">
                        <img src={Line} className="line-icon" />
                        <div className="icon-heading-container">
                            <img src={Icon} className="icon-image" />
                            <h2 className="heading-text">
                                <span className="highlight-text">Unlock</span> Your Creative Potential
                            </h2>
                        </div>
                    </div>
                    <p className="sub-heading">with Online Design and Development Courses.</p>
                    <p className="description">Learn from Industry Experts and Enhance Your Skills.</p>
                    <div className="button-container">
                        <button className="explore-button">Explore Courses</button>
                        <button className="pricing-button">View Pricing</button>
                    </div>
                </div>
                <div className="cards-container">
                    {cards.map((card, index) => (
                        <React.Fragment key={index}>
                            <img src={card} className="card-image" />
                            {index < cards.length - 1 && <hr className="divider" />}
                        </React.Fragment>
                    ))}
                </div>
                <div className='container-image'>
                    {/* <img src={Container} className="container-image" /> */}
                    <video controls="false" autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                        <source src="path/to/your/video.webm" type="video/webm" />
                    </video>
                </div>
            </section>
            <div>
                <Courses />
                <About />
                <Pricing />
                <Contact />
            </div>
        </>
    );
}

export default Home;
