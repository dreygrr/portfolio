import React, { useState } from 'react';
import type { ProjectType, Tab } from '../types.ts';
import { Project } from '../components/Project.tsx';
import { projects } from '../projects.ts';

const animProjects = projects.animations;

const Anim: React.FC = () => {
  const [selected, setSelectedProject] = useState<ProjectType | null>(null);

  if (selected) {
    return (
      selected && (
        <Project
          project={selected}
          onChangeTab={onChangeTab}
          onClose={() => setSelectedProject(null)}
        />
      )
    );
  }

  return (
    <div className="container">
      <h2>Animations</h2>
      <p>Check out my animation projects!</p>

      <div className="gallery">
        {animProjects.map(project => (
          <a 
            key={project.id}
            href='#'
            onClick={e => {
              e.preventDefault();
              setSelectedProject(project);
            }}
          >
            <img width="500px" src={project.src} alt={project.title} />
            <p>{project.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export { Anim };