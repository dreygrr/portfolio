import React from 'react';
import { projects } from '../projects.ts';
import { Gallery } from '../components/Gallery.tsx';

const animProjects = projects.animations;

const Anim: React.FC = () => {

  return (
    <div className="container">
      <h2>Animations</h2>
      <p>Check out my animation projects!</p>

      <Gallery projects={animProjects} category='anim' />
    </div>
  );
}

export { Anim };