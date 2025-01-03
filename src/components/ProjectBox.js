import React from 'react';
import "./ProjectBox.css";

function ProjectBox(props) {
    const handleClick = () => {
        window.location.href = props.link; // Redirect to the link when clicked
    };

    return (
        <div class = "project-box" onClick = {handleClick}>
            <div className="project-box-description">
                <div className = "project-details">
                    {props.description}
                </div> 
                <div className = "tools">
                    tools: {props.tools}
                </div> 
                <div className = "languages">
                    languages: {props.languages}
                </div>
            </div>
            {props.name}
        </div>
    );
};

export default ProjectBox;