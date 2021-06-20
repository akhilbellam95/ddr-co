import React from 'react';
import './Projects.scss';
import ProjectsTable from '../../components/table/Table';
import { projects } from './data';

function Projects() {
    return <div className="container">
        <ProjectsTable projects={projects}></ProjectsTable>
    </div>;
}

export default Projects;