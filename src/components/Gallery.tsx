import React from 'react';
import { Link } from 'react-router-dom';
import type { ProjectType } from '../types';

type GalleryProps = {
  projects: ProjectType[];
  category: string;
}

const Gallery: React.FC<GalleryProps> = ({ projects, category }: GalleryProps) => {
  return (
    <div className="gallery">
      {projects.length > 0 
          ? (
            projects.map(project => (
              <Link 
                key={project.id}
                to={`/${category}/${project.id}`}
              >
                <img src={project.thumbnail} alt={project.title} />
                <p>{project.title}</p>
              </Link>
            ))
          ) 
          : (
            <div className='empty-projects'>
              <i className='fa-solid fa-ghost'></i>
              <span>Great projects are yet to come!</span>
            </div>
          )
        }
    </div>
  );
};

export { Gallery };