import { projects } from '../projects.ts';

import React from 'react';
import { Gallery } from '../components/Gallery.tsx';

const motionProjects = projects.motion;

const Motion: React.FC = () => {
  return (
    <div className="container">
      <h2>Motion</h2>
      <p>Check out my motion projects!</p>

      <Gallery projects={motionProjects} category='motion' />
    </div>
  );
}

export { Motion };