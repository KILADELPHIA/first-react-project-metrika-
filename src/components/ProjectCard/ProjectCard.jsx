/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import project1Img from '../../assets/project1.jpeg';



function ProjectsCard (props) {
  return (

      <div>
        {props.isNew && (<div>Isnew</div>)}
        
        <img src={props.image} alt={props.title} />
        <p>{props.title} — {props.square} — {props.year}</p>
        <a href={props.link}>Подробнее →</a>
      </div>
  );
}

export default ProjectsCard;