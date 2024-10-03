import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    EcommerceDesc : "This e-commerce website provides users with a seamless online shopping experience for a wide range of electronics, specifically laptops and mobiles. The platform features an intuitive interface that allows users to browse various models, view detailed product descriptions, and compare items easily. Customers can make secure purchases through an integrated payment gateway (Razorpay), ensuring a smooth transaction process.",
    EcommerceGithub : "https://github.com/Sanjayk46/Ecom-frontend",
    EcommerceWebsite : "http://ecom-mern-app.s3-website.eu-north-1.amazonaws.com/",

    FoodAppDesc : "This food delivery app provides users with a seamless online food ordering experience. Featuring an intuitive interface, the app allows users to browse through a variety of restaurants, explore detailed menus, customize their orders, and place them with ease. Secure payments are handled through an integrated payment gateway (Razorpay), ensuring a smooth and reliable transaction process from start to finish.",
    FoodAppGithub : "https://github.com/Sanjayk46/food-app-frontend",
    FoodAppWebsite : "http://food-mern-app.s3-website.eu-north-1.amazonaws.com/",

    ChatAppDesc:"This chat application offers real-time communication powered by WebSocket, allowing users to connect effortlessly, send instant messages, and share media seamlessly. With a user-friendly interface and real-time updates, users can communicate effectively and enjoy a dynamic chatting experience.",
    ChatAppGithub:"https://github.com/Sanjayk46/chat-app-frontend",
    ChatAppWebsite:"http://chat-mern-app.s3-website.eu-north-1.amazonaws.com/",
    
    TaskManagementDesc:"This task management app allows users to seamlessly manage their tasks by providing features for updating and editing existing tasks. Users can easily create new tasks.The intuitive interface ensures a smooth user experience, making it easy to keep track of progress and prioritize workloads.",
    TaskManagementGithub:"https://github.com/Sanjayk46/Task-app-frontend",
    TaskManagementWebsite:"http://task-mern-app.s3-website.eu-north-1.amazonaws.com/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox;