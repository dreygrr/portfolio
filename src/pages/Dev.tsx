import { projects } from '../projects.ts';

import React from 'react';

import './dev.scss';
import type { ProjectType } from '../types.ts';
import { Gallery } from '../components/Gallery.tsx';

const devProjects = projects.development as ProjectType[];

const Development: React.FC = () => {
  return (
    <div className="container">
      <h2>Development</h2>
      <p>Check out my dev projects!</p>

      <Gallery projects={devProjects} category='dev' />
    </div>
  );
}

export { Development };