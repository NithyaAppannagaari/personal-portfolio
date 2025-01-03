import React from 'react';
import ProjectBox from './ProjectBox';
import "./ResponsiveGrid.css";

const repo_links = {
    "website": 'https://github.com/NithyaAppannagaari/NithyaAppannagaari.github.io',
    "ss": 'https://github.com/NithyaAppannagaari/SustainaStyle',
    "wordle": 'https://github.com/NithyaAppannagaari/WordleDupe',
    "llm": 'https://github.com/sbooeshaghi/llmarkers',
    "music": 'https://youtu.be/SnZnsddFEuw',
    "bee": 'https://github.com/NithyaAppannagaari/bee-aware'
}

const project_images = {
    "website": './website.png',
    "ss": './ss.png',
    "wordle": './wordle.png',
    "llm": './llm.png',
    "music": './music.png',
    "bee": './bee.png',
    "dse": './dse.png'
}
    
function ResponsiveGrid() {
  return (
        <div class = "boxes">
            <div class = "box"><ProjectBox name = "This Website" image = {project_images["website"]} link = {repo_links["website"]} description="A personal website showcasing my projects, work, and hobbies." languages = "Javascript, HTML, CSS" tools = "React, tailwind"/></div>
            <div class = "box"><ProjectBox name = "Wordle Dupe"  image = {project_images["wordle"]} link = {repo_links["wordle"]} description = "the New York Times' Wordle game, except you can play as many times as you want in one day" languages = "Javascript" tools = "React, Node.JS, MongoDB" /></div>
            <div class = "box"><ProjectBox name = "Sustaina Style"  image = {project_images["ss"]} link = {repo_links["ss"]} description = "anti-fast fashion app that recommends users sustainable alternatives to clothing with TensorFlow" languages = "Python, Javascript" tools = "TensorFlow, MongoDB, React"/></div>
            <div class = "box"><ProjectBox name = "Music.calm"  image = {project_images["music"]} link = {repo_links["music"]} description = "music therapy iOS app that provides real-time feedback on user's stress level based on detected heartbeat" languages = "Swift, SwiftUI" tools = "Firestore"/></div>
        </div>
  );
}

export default ResponsiveGrid;