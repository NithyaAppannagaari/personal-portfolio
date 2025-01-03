import React from 'react';
import "./Resume.css";

const Resume = () => {
    return (
        <div class = "resume_class">
            <div class = "resume">
                <div class = "title">
                    resume
                </div> 
            </div>
            <div class = "container">
                <div class = "description">
                    everything on my website in just one pdf.
                </div> 
            </div>
            <div class = "pdf">
                <embed 
                    src="/resume.pdf" 
                    type="application/pdf" 
                    width="100%" 
                    height="600px"
                />
            </div>  
        </div>
    );
};

export default Resume;