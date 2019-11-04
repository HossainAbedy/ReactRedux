import React from 'react';
import moment from 'moment';

const ProjectSummery = ({project}) => {
    return (
        <div className="card z-depth-3 project-summary pink lighten-3">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title white-text">{project.title}</span>
                <p>Posted by {project.authorFirstName}{project.authorLastName}</p>
                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummery;