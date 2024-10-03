import React from 'react';
import ProjectBox from './ProjectBox';
import TaskImage from '../images/task.png';
import chatImage from '../images/chat.png';
import FoodImage from '../images/food.png';
import EcomImage from '../images/Ecom.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={EcomImage} projectName="Ecommerce" />
        <ProjectBox projectPhoto={FoodImage} projectName="FoodApp" />
        <ProjectBox projectPhoto={TaskImage} projectName="TaskManagement" />
        <ProjectBox projectPhoto={chatImage} projectName="ChatApp" />
      </div>

    </div>
  )
}

export default Projects