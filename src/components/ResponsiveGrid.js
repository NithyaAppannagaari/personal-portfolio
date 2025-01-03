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
    
function ResponsiveGrid() {
  return (
        <div class = "boxes">
            <div class = "box"><ProjectBox name = "This Website" link = {repo_links["website"]} description="A personal website showcasing my projects, work, and hobbies." languages = "Javascript, HTML, CSS" tools = "React, tailwind"/></div>
            <div class = "box"><ProjectBox name = "LLMarkers" link = {repo_links["llm"]} description="research on leveraging LLMs to extract single cell genomics data with Dr. Sina Booeshaghi" languages = "python, sql, javascript" tools = "duckdb, Pandas, numpy, Flask, Jupyter, Ollama"/></div>
            <div class = "box"><ProjectBox name = "Wordle Dupe" link = {repo_links["wordle"]}/></div>
            <div class = "box"><ProjectBox name = "Sustaina Style" link = {repo_links["ss"]}/></div>
            <div class = "box"><ProjectBox name = "Music.calm" link = {repo_links["music"]}/></div>
            <div class = "box"><ProjectBox name = "Bee Aware" link = {repo_links["bee"]} /></div>
        </div>
        
        
      
  );
}

export default ResponsiveGrid;