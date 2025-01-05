import React from 'react';
import "./Code.css";
import ResponsiveGrid from '../components/ResponsiveGrid';

const Code = () => {
    return (
        <div class = "code">
            <div class = "title">
                projects
            </div>  
            <div class = "description">
                Some of my initiatives include a music therapy app designed to help students with autism destress within a classroom environment, and an anti-fast fashion app aimed at tackling climate change. In addition, I enjoy working on fun projects, such as creating my version of Wordle!            
            </div>
            <div class = "projects-grid">
                <ResponsiveGrid />
            </div>
        </div>
            
    );
};

export default Code;