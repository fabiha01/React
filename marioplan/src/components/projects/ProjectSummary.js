import React from 'react';

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text darken-3">
            <span className="card-title">{project.title}</span>
            <p>Posted by Fabiha</p>
            <p className="grey-text">7th September 4pm</p>
        </div>
    </div>
    )
}

export default ProjectSummary;