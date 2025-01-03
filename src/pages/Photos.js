import React, { useState, useEffect } from 'react';
import "./Photos.css";
import MasonryGrid from '../components/MasonryGrid';

const Photos = () => {

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
        <div class = "photos-class">
            <div class = "photos">
                <div class = "title">
                    @nithoncam
                </div>  
            </div>
            <div class = "links">
                <div class = "insta">
                    < a href="https://www.instagram.com/nithoncam/" target="_blank" rel="noopener noreferrer"> 
                        <img src = "Instagram_icon.png" alt = "insta_icon" width = "25rem" height = "25rem"/>
                    </a>
                </div>
                <div class = "youtube">
                    < a href="https://www.youtube.com/@nithoncam" target="_blank" rel="noopener noreferrer"> 
                        <img src = "youtube.png" alt = "insta_icon" width = "35rem" height = "25rem"/>
                    </a>
                </div>
            </div>

            <div class = "description">
                Outside of tech, I have a passion for photography and videography. As an official event photographer for UC Berkeley's Indian Students Association (ISA), I capture the vibrancy of Indian culture. In my free time, I explore nature and architecture through my camera and create videos—it’s how I experience the world through my own lens. 
            </div>

            {showScrollDown ? (
                <div className="scroll-indicator" onClick={scrollToBottom}>
                    <span className="arrow"></span>
                </div>
            ) : (
                <div className = "go-to-top" onClick = {scrollToTop}>
                    <span className = "arrowDown"></span>
                </div>
            )}
            
            <div class = "photos-grid">
                <MasonryGrid />   
            </div>

            <div class = "contact">
                <div class = "title">
                    Contact Me for Photography
                </div>
                <div class = "contact-insta">
                    Instagram: @nithoncam
                    
                </div>
                <div class = "contact-email">
                Email: nithya.app@berkeley.edu
                </div>
            </div>

            
        </div>
    );
};

export default Photos;