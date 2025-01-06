import React from 'react';
import './CarouselTimeline.css';

const timelineData = [
    {
        date: "Oct. 2024 - Current",
        title: "Software Engineer Intern",
        company: "Eric and Wendy Schmidt Center for Data Science & Environment (DSE)",
        description: [
            "I am developing a ",
            { text: "Python-based application", bold: true },
            " with interdisciplinary teams of postdocs and Indigenous biologists to facilitate ",
            { text: "wildlife image classification", bold: true }, " and support biodiversity efforts in Northern California through ",
            { text: "ETL pipelining", bold: true },
            " and programming ",
            { text: "computer vision frameworks.", bold: true } 
        ],
        languages: "Python",
        tools: "TKinter, Gitlab"
    },
    { 
        date: "Oct. 2024 - Current", 
        title: "LLM Researcher", 
        company: "Streets Lab @ UC Berkeley", 
        description: [
            "In collaboration with postdoc scholar Dr. Sina Booeshaghi, I am ",
            { text: "developing large language models", bold: true },
            " to extract structured data on marker genes in single-cell genomics. I am also ",
            { text: "building a DuckDB database", bold: true },
            " and ",
            { text: "translating natural language into SQL queries", bold: true },
            " to retrieve cell type labels for marker genes."
        ],
        languages: "Python, Javascript, SQL", 
        tools: "DuckDB, Flask, NumPy, Pandas, Ollama"         
    },
    { 
        date: "Jun. 2023 - Aug. 2023", 
        title: "Software Developer Intern", 
        company: "NIST (National Institute of Science and Technology)", 
        description: [
            "I collaborated with thermodynamic researchers to engineer a ",
            { text: "full-stack web application", bold: true },
            " using ",
            { text: "Vue.js", bold: true },
            ", ",
            { text: "Python", bold: true },
            ", and ",
            { text: "TidyJS", bold: true },
            ", streamlining the organization and integration of thermodynamic data from research papers into government databases."
        ], 
        languages: "Javascript, Python", 
        tools: "Vue.js, Tidy.js"         
    }
];

function CarouselTimeline() {
    return (
        <div className="timeline-container">
            {timelineData.map((event, index) => (
                <TimelineItem key={index} event={event} />
            ))}
        </div>
    );
}

function TimelineItem({ event }) {
    return (
        <div className="timeline-item">
            <div className="date">{event.date}</div>
            <div className="event-details">
                <h3>{event.title}</h3>
                <p>{event.company}</p>
                <div className="event-description">
                    {Array.isArray(event.description)
                        ? event.description.map((part, index) =>
                            typeof part === "string" ? (
                                <span key={index}>{part}</span>
                            ) : (
                                <span
                                    key={index}
                                    style={{
                                        fontWeight: part.bold ? "bold" : "normal",
                                    }}
                                >
                                    {part.text}
                                </span>
                            )
                        )
                        : event.description}
                </div>
                <div className="cs-details">
                    <div className="home-languages">Languages: {event.languages}</div>
                    <div className="home-tools">Tools: {event.tools}</div>
                </div>
            </div>
        </div>
    );
}

export default CarouselTimeline;
