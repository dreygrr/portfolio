import React from 'react';
import './project.scss';
import type { ProjectType } from '../types.ts';
import { useNavigate, Link } from 'react-router-dom';

interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({project}) => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  
  return (
    <div className="container">
      <div className="actions">
        <button className='btn btn-primary' type="button" onClick={handleBack}><i className='fa-solid fa-arrow-left'></i>Go back</button>
        <p className='project-title'>{project.title}</p>
        <button className='btn btn-secondary'><i className='fa-regular fa-share-nodes'></i></button>
      </div>

      <div id='divProjeto' className="project">
        <iframe className='mobile' src={project.src} allow='autoplay' allowFullScreen />
        <div className="project-info">
          <h4>{project.title}</h4>
          <div className='description'>
            <p>{project.desc}</p>
            <span className="sep"></span>
            <div className="tags">
              <span className='badge'>Made in {project.year}</span>
              <a 
                href={project.src.replace('/embed/', '/watch/')} 
                target='_blank' 
                className='badge'
                style={{background: "#e1002d"}}
              >
                <span>View in YouTube</span>
                <i className="fa-light fa-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="tech-sheet">
        <h2>Tech stack</h2>
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
        <div className="buttons">
          <Link to="/contact" className='btn btn-large btn-primary'>Get in touch</Link>
          <Link to="/contact" className='btn btn-large btn-secondary'>Request custom project</Link>
        </div>
      </div>
    </div>
  );
};

export { Project };