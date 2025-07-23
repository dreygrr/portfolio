import { projects } from '../projects.ts';

import React from 'react';
import { Link } from 'react-router-dom';

const motionProjects = projects.motion;

const Motion: React.FC = () => {
  return (
    <div className="container">
      <h2>Motion</h2>
      <p>Check out my motion projects!</p>

      <div className="gallery">
        {motionProjects.map(project => (
          <Link 
            key={project.id}
            to={`/motion/${project.id}`}
          >
            <img src={project.src} alt={project.title} />
            <p>{project.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export { Motion };