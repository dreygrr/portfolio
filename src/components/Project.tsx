import React from 'react';
import './project.scss';
import type { ProjectType, Tab } from '../types.ts';

interface ProjectProps {
  project: ProjectType;
  onChangeTab: (tab: Tab) => void;
  onClose: () => void;
}

const Project: React.FC<ProjectProps> = ({project, onChangeTab, onClose}) => (
  <div className="container">
    <div className="actions">
      <button className='btn btn-primary' type="button" onClick={onClose}><i className='fa-solid fa-arrow-left'></i>Go back</button>
      <p className='project-title'>{project.title}</p>
      <button className='btn btn-secondary'><i className='fa-regular fa-share-nodes'></i></button>
    </div>

    <div className="project">
      <iframe src={project.src} allow='autoplay' allowFullScreen />
      <div className="project-info">
        <h4>{project.title}</h4>
        <p className='description'>
          <span className='year'>Made in {project.year}</span>
          {project.desc}
        </p>
      </div>
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

    <div className="hook">
      <h2>Interested in a similar project?</h2>
      <p>If you'd like to discuss how I can help bring your ideas to life, feel free to reach out.</p>
      <button type='button' onClick={() => onChangeTab('contact')} className='btn btn-large btn-primary'>Get in touch</button>
    </div>
  </div>
);

export { Project };