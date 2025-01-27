/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '../Button/button';
import Heading from '../Heading/Heading';



function AboutSection () {
  return (
    <div>
      <Heading 
        level='h2'
        text='О НАС'
      />
      <p>Студия основана в 2011 году. Полностью отдаемся проектированию и реализации интерьеров. К нам обращаются за уютом, индивидуальными решениями и практичностью. Находим конструктивные решения для каждого интерьера, вплоть до каждой детали — нацелены на результат.</p>
      <Button text='Посмотреть услуги'/>
    </div>
  );
}

export default AboutSection;


