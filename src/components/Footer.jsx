import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
const Footer = () => {
  return (
    <footer>
      <h4>Developed by Sanjay K</h4>
      <h4>Copyright &copy; 2024 SK</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Sanjayk46/" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/sanjay-k-3288101bb/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:sanjayks8046@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer