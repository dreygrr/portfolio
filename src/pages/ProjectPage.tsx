import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../projects';
import { Project } from '../components/Project.tsx';

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const allProjects = [
    ...projects.development,
    ...projects.motion,
    ...projects.animations
  ];

  const project = allProjects.find(p => p.id === Number(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <Project
      project={project}
    />
  );
};

export { ProjectPage };
