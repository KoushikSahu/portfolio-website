import React from 'react';
import ProjectBox from './ProjectBox';
import { ProjectDescription } from './types';

function Projects(): JSX.Element {
    const projects: ProjectDescription[] = [
        {
            name: "Blogging Website",
            description: "Allows user to share and read articles",
            link: "https://github.com/KoushikSahu/Blogging-Website"
        },
        {
            name: "Webmail Discord Bot",
            description: "Discord bot to receive webmails on discord",
            link: "https://github.com/KoushikSahu/Webmail2Discord"
        },
        {
            name: "Sentiment Extraction Webapp",
            description: "Webapp to predict sentiment using fine tunned Roberta model",
            link: "https://github.com/KoushikSahu/Sentiment-Extraction-WebApp"
        },
    ];

    return (
        <div>
            <h1 className="heading-text">Projects</h1>
            <div className="project-grid">
             {projects.map((item: ProjectDescription, idx: number): JSX.Element => {
                return <ProjectBox description={item} key={idx} />;
            }
            )}           
            </div>
        </div>
    );
}

export default Projects;
