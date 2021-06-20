import React from "react";
import './Table.scss';
import { Table } from "react-bootstrap";

const ProjectsTable = (projects) => {
  const p = projects.projects
  return (
    <div className="container">
      <Table responsive="sm" striped size="sm" bordered>
        <thead>
          <tr>
            <th>Name of the work</th>
            <th>Address of Agt. Authority</th>
            <th>Total Value of work done</th>
            <th>Years</th>
          </tr>
        </thead>
        <tbody>
          {p.map((project, i) => (
            <tr key={i}>
              <td className="justify">{project.name}</td>
              <td className="center">{project.authority}</td>
              <td className="center">{project.valuation}</td>
              <td className="years center">
                {project.startYear} - {project.endYear}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProjectsTable;
