import React from 'react';
import './style.css';
import { ProjectPropType } from './types';

function ProjectBox(props: ProjectPropType): JSX.Element {
    let {name, description, link} = props.description;
    return (
        <a href={link} className="project-box">
            <div>
                <h2 className="heading-text">{name}</h2>
                <p>{description}</p>
            </div>
        </a>
    )
}

export default ProjectBox;

