import React from 'react';
import ProjectSummary from './ProjectSummary';

// we are taking the projects as a prop
const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            {projects && projects.map(project => {
                // ^ we cycle through the projects
                return (
                    // we return JSX
                    // for each project summmary we're passing down a project
                    // and setting the prokect id as the key
                    <ProjectSummary project={project} key={project.id}></ProjectSummary>
                )
            })}
        </div>

    )
}

export default ProjectList;