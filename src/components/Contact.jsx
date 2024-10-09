// import React from 'react';
// import Tilt from 'react-parallax-tilt';
// import { Link } from 'react-router-dom';
// import Avatar from '../images/profile.JPG';
// import {GrMail} from "react-icons/gr";
// import {FaAddressCard} from "react-icons/fa";
// import { FaPhoneAlt } from 'react-icons/fa';
// const Contact = () => {
  
//   return (
//    <>
//       <div className='AboutPage'>
//       <Tilt>
//       <img className='Avatar' src={Avatar} alt="profile" /> 
//       </Tilt>
//       <div className='AboutText'>
//         <div style={{display:"flex",flexDirection:"row"}}>
//         <div className="contact-details"> 
//           <p><a  target='_blank'><FaAddressCard/></a><strong>Address:</strong> 2/48 vanniyar street,Thirumani, Tiruvannamalai(DT),pin:604504</p>
//           <p><a target='_blank'><FaPhoneAlt/></a><strong>Phone:</strong> +916381071541</p>
//           <p><a href='mailTo:sanjayks8046@gmail.com' target='_blank'><GrMail/></a><strong>E mail:</strong> sanjayks8046@gmail.com </p>
//           <Link to='https://drive.google.com/file/d/1Ao-OzT1ShBQUuxyDSQ21BRK9dKi4vn1X/view?usp=drivesdk'><button>Resume</button></Link>
//         </div>
//         <form className="contact-form">
//           <input type="text" placeholder="Name" required />
//           <textarea placeholder="Message" required></textarea>
//           <button type="submit">Contact Us</button>
//         </form>
//       </div>
//       </div>
      
//     </div>
//     </>
//   );
// };

// export default Contact;
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import Avatar from '../images/profile.JPG';
import {GrMail} from "react-icons/gr";
import {FaAddressCard} from "react-icons/fa";
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
   <>
      <div className='AboutPage'>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="profile" /> 
        </Tilt>
        <div className='AboutText'>
          <div style={{display:"flex", flexDirection:"row"}}>
            <div className="contact-details"> 
              <p><a target='_blank'><FaAddressCard/></a><strong>Address:</strong> 2/48 Vanniyar Street, Thirumani, Tiruvannamalai (DT), PIN: 604504</p>
              <p><a target='_blank'><FaPhoneAlt/></a><strong>Phone:</strong> +916381071541</p>
              <p><a href='mailTo:sanjayks8046@gmail.com' target='_blank'><GrMail/></a><strong>Email:</strong> sanjayks8046@gmail.com</p>
              <Link to='https://drive.google.com/file/d/1Ao-OzT1ShBQUuxyDSQ21BRK9dKi4vn1X/view?usp=drivesdk' target="_blank" rel="noopener noreferrer">
                <button>Resume</button>
              </Link>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Name" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit">Contact Us</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
