import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";


const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>SANJAY K</b></h1>
          <Typed/>   
        </div>

         <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        /> 
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I am passionate about transforming raw ideas into websites and products that make a meaningful impact.
            I thrive on challenges that push me as a developer and create work that I can take pride in.<br /><br />
            I am fluent in <b>JavsScript</b> with the experience in <b>Java and Python.</b> I’m currently working on several projects in  
            the <b>MERN</b> stack.<br />
            I’m also excited to expand my expertise with <b>Next.js</b>, <b>Three.js</b> and<b> Typescript</b><br /><br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>

          
        </div>
        <Tilt>
        <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home


