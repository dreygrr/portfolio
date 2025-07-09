import React, { useState } from 'react';
import type { ProjectType, Tab } from '../types.ts';
import { Project } from '../components/Project.tsx';

import { projects } from '../projects.ts';

import './dev.scss';

interface DevelopmentProps {
  onChangeTab: (tab: Tab) => void;
}

const devProjects = projects.development;

const Development: React.FC<DevelopmentProps> = ({onChangeTab}) => {
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
      <h2>Development</h2>
      <p>Check out my dev projects!</p>

      <div className="gallery">
        {devProjects.map(project => (
          <a 
            key={project.id}
            href='#'
            onClick={e => {
              e.preventDefault();
              setSelectedProject(project);
            }}
          >
            <img src={project.src} alt={project.title} />
            <p>{project.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export { Development };