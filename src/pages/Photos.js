import React from 'react';
import "./Photos.css";

const Photos = () => {
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
                <div class = "youtube">Youtube</div>
            </div>
            <div class = "container">
                <div class = "description">
                Outside of tech, I have a passion for photography and videography. As an official event photographer for UC Berkeley's Indian Students Association (ISA), I capture the vibrancy of Indian culture. In my free time, I explore nature and architecture through my camera and create videos—it’s how I experience the world through my own lens. </div>
                <div class="hiders">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Photos;