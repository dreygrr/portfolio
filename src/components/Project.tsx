import React from 'react';
import './project.scss';
import type { ProjectType } from '../types.ts';

interface ProjectProps {
  project: ProjectType;
  onClose: () => void;
}

const Project: React.FC<ProjectProps> = ({project, onClose}) => (
  <div className="container">
    <div className="project">
      <div className="actions">
        <button className='btn btn-primary' type="button" onClick={onClose}><i className='fa-solid fa-arrow-left'></i>Back to gallery</button>
        <button className='btn btn-secondary'><i className='fa-regular fa-share-nodes'></i></button>
      </div>

      <img src={project.thumbnail} alt={project.title} />
      <h4>{project.title}</h4>
      <p className='description'>{project.desc}</p>
    </div>

    <div className="tech-sheet">
      <h2>Technical sheet</h2>
      {Array.isArray(project.softwaresUsed) && project.softwaresUsed.length > 0 && (
        <div className="softwares-used">
          {project.softwaresUsed.map(software => (
            <div className="software-used" key={software.name}>
              <img src={software.icon} />
              <p>{software.name}</p>
            </div>
          ))}
        </div>
      )}

      {Array.isArray(project.techsUsed) && project.techsUsed.length > 0 && (
        <div className="techs-used">
          {project.techsUsed.map(tech => (
            <div className="tech-used" key={tech.name}>
              <img src={tech.icon} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export { Project };