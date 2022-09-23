import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque possimus quam maxime distinctio nam, velit debitis hic perspiciatis ipsum ratione enim nihil accusantium dignissimos perferendis officia dolores natus reiciendis harum!</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted By Fabiha</div>
                <div>2nd September 2am</div>
            </div>
        </div>
            
    </div>
    )
}

export default ProjectDetails;
