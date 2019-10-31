import React from 'react';

const ProjectSummery = ({project}) => {
    return (
        <div className="card z-depth-3 project-summary pink lighten-3">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title white-text">{project.title}</span>
                <p>Posted by the Net Ninja</p>
                <p className="grey-text">3rd October, 2am</p>
            </div>
        </div>
    )
}

export default ProjectSummery;