/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import ProjectsCard from '../ProjectCard/ProjectCard';
import Button from '../Button/button';
import Heading from '../Heading/Heading';
import project1Img from '../../assets/project1.jpeg';
import project2Img from '../../assets/project2.png';
import project3Img from '../../assets/project3.png';


const projects = [
  {
    title:'ЖК ПРАВОБЕРЕЖНЫЙ',
    square: 112,
    year: '2023',
    link: '/project1',
    image: project1Img,
    isNew: true
  },

  {
    title:'ЖК НОРВЕЖСКИЙ ПАРК',
    square: 75,
    year: '2023',
    link: '/project2',
    image: project2Img,
    isNew: false
  },

  {
    title:'ЖК ЕБАНЫЕ ОЗЁРА',
    square: 94,
    year: '2022',
    link: '/project3',
    image: project3Img,
    isNew: false
  }
]

function ProjectsSection () {
  return (
    <div>
      <Heading 
        level='h2'
        text='ПРОЕКТЫ'
      />

    {projects.map(function(project){
      return (
        <ProjectsCard 
          title={project.title}
          square={project.square}
          year={project.year}
          link={project.link}
          image={project.image}
          isNew={project.isNew}
        />
        )
    })}

      <Button text='Смотреть все проекты'/>
    </div>
  );
}

export default ProjectsSection;