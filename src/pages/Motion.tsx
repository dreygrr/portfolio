import React, { useState } from 'react';
import type { ProjectType } from '../types.ts';
import { Project } from '../components/Project';

import { projects } from '../projects.ts';

const motionProjects = projects.motion;

const Motion: React.FC = () => {
  const [selected, setSelectedProject] = useState<ProjectType | null>(null);

  if (selected) {
    return (
      selected && (
        <Project
          project={selected}
          onClose={() => setSelectedProject(null)}
        />
      )
    );
  }

  return (
    <div className="container">
      <h2>Motion</h2>
      <p>Check out my motion projects!</p>

      <div className="gallery">
        {motionProjects.map(project => (
          <a 
            key={project.id}
            href='#'
            onClick={e => {
              e.preventDefault();
              setSelectedProject(project);
            }}
          >
            <img src={project.thumbnail} alt={project.title} />
            <p>{project.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export { Motion };