import {React, useState, useEffect} from 'react';
import './Home.css';
import CarouselTimeline from '../components/CarouselTimeline';

const Home = () => {

    const [showScrollDown, setShowScrollDown] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const pageHeight = document.documentElement.offsetHeight;

            if (scrollPosition >= pageHeight) {
                setShowScrollDown(false);
            } else {
                setShowScrollDown(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };

    return (
        <div class = "home">     
            <div class = "title">
                Nithya Appannagaari
            </div>  
            <div class = "container">
                <div class = "description">
                    Hi, Welcome to my website. I'm an undergraduate student at UC Berkeley studying EECS, interested in technology applications within medicine and climate science.                
                </div>
            </div>
            
            <div class = "title">
                <div className="photo-box">
                    <img src="./your_image.JPG" alt="nithya!" className="profile-image"/>
                </div>
                <div className="hr-container">
                    <hr />
                </div>
                <div class="main-container">
                    <div class="currently-title">
                        <h1>timeline of work</h1>
                    </div>
                    <div class = "hr-container">
                        <hr class = "hr"></hr>
                    </div>
                    <CarouselTimeline />
                </div>
            </div>

            <div class = "home-scroll">
                {showScrollDown ? (
                    <div className="home-scroll-indicator" onClick={scrollToBottom}>
                        <span className="arrow"></span>
                    </div>
                ) : (
                    <div className = "home-go-to-top" onClick = {scrollToTop}>
                        <span className = "arrowDown"></span>
                    </div>
                )}
            </div>
            

            <div class = "contact">
                <div class = "contact-title">
                    contact me
                </div>
                <div class = "contact-insta">
                <a href = "https://www.linkedin.com/in/nithyaappannagaari/">LinkedIn: Nithya Appannagaari</a>
                </div>
                <div class = "contact-email">
                <a href = "mailto:nithya.app@berkeley.edu">Email: nithya.app@berkeley.edu</a>
                </div>
                
            </div>
            
        </div>
        
    );
};

export default Home;