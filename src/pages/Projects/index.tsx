import React from 'react';
import { CardColumns } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import projects from './Projects';
import PorjectCard from './components/ProjectCard';

const Projects: React.FC = () => {
  useTranslation();

  return (
    <>
      <CardColumns className="m-3">
        {projects.map((project, index) => {
          return (
            <PorjectCard
              title={project.title}
              description={project.description}
              imgs={project.imgs}
              links={project.links}
              key={`${project.title}_${index}`}
            ></PorjectCard>
          );
        })}
      </CardColumns>
    </>
  );
};

export default Projects;
