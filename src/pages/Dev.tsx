import { projects } from '../projects.ts';

import React from 'react';
import { Link } from 'react-router-dom';

import './dev.scss';

const devProjects = projects.development;

const Development: React.FC = () => {
  return (
    <div className="container">
      <h2>Development</h2>
      <p>Check out my dev projects!</p>

      <div className="gallery">
        {devProjects.map(project => (
          <Link 
            key={project.id}
            to={`/dev/${project.id}`}
          >
            <img src={project.src} alt={project.title} />
            <p>{project.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export { Development };