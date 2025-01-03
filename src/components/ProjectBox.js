import React from 'react';
import "./ProjectBox.css";

function ProjectBox(props) {
    const handleClick = () => {
        window.location.href = props.link; // Redirect to the link when clicked
    };

    return (
        <div class = "project-box" onClick = {handleClick} style={{ backgroundImage: `url(${props.image})` }}>
            <div className="project-box-description" >
                <div className = "project-details">
                    {props.description}
                </div> 
                <div className = "languages">
                    languages: {props.languages}
                </div>
                <div className = "tools">
                    tools: {props.tools}
                </div> 
            </div>
           
                <div class = "name">
                    {props.name}
                </div>
                <div class = "link-icon">
                    <a href = {props.link}>
                        <img src = "./link.png" alt = "link icon"/>
                    </a>
                </div>
          
            
        </div>
    );
};

export default ProjectBox;