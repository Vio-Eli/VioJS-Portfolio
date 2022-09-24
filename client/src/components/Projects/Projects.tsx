import React from 'react';

import './Projects.scss';

export default function Projects() {
    return (
        <div className="projectsWrapper">
            <div className="projectsHeader">Projects</div>
            <div className="projects">
                <div className="project">
                    <div className="projectTitle">VioJS</div>
                    <div className="projectDescription">VioJS is a JavaScript library that allows you to create beautiful and interactive websites.</div>
                    <div className="projectLink">https://viojs.com</div>
                </div>
                <div className="project">
                    <div className="projectTitle">VioJS</div>
                    <div className="projectDescription">VioJS is a JavaScript library that allows you to create beautiful and interactive websites.</div>
                    <div className="projectLink">https://viojs.com</div>
                </div>
            </div>
        </div>

    );
}