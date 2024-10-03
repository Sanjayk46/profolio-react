// import React,{useState} from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Footer from './components/Footer';
// import Lottie from  "lottie-react";
// import nightsky from './LottieFiles/night-sky.json';
// import { useEffect } from 'react';
// import HashLoader from "react-spinners/HashLoader";
// import About from './components/About';
// import Nav from './components/Navbar';
// import MoveToTop from './components/MoveToTop';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// const App = () => {
//   const[Loading,SetLoading]=useState(true);

//   useEffect(()=>{
//     SetLoading(true)

//     setTimeout(()=>{
//     SetLoading(false)}
//     ,1900)
//   },[])  
 
//   return (
//     <>
//      {Loading ? (
//       <div className="loader"> 
//         <HashLoader
//           color={'#9067C6'}
//           loading={true}
//           size={100}
//           aria-label="Loading Spinner"
//           data-testid="loader"
//         />
//       </div>
//       ):(
//       <div>
      
//       <Lottie className="bg" animationData={nightsky} loop={true} />  
//       <Lottie className="bgtwo" animationData={nightsky} loop={true} />   
//       <Lottie className="bgtemp" animationData={nightsky} loop={true} /> 

//        <Nav/>
//       <MoveToTop/> 

//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/About" element={<About/>}/>
//          <Route path="/Project" element={<Projects/>}/>
//          <Route path="/contact" element={<Contact/>}/>
//       </Routes>
      
//       <Footer/>
//       </div>
//       )} 
//     </>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Lottie from "lottie-react";
import nightsky from './LottieFiles/night-sky.json';
import HashLoader from "react-spinners/HashLoader";
import About from './components/About';
import Nav from './components/Navbar';
import MoveToTop from './components/MoveToTop';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light'); // Light is the default theme

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  // Apply theme to the body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      {loading ? (
        <div className="loader">
          <HashLoader color={'#9067C6'} loading={true} size={100} aria-label="Loading Spinner" data-testid="loader" />
        </div>
      ) : (
        <div>
          <Lottie className="bg" animationData={nightsky} loop={true} />
          <Lottie className="bgtwo" animationData={nightsky} loop={true} />
          <Lottie className="bgtemp" animationData={nightsky} loop={true} />

          <Nav />
          <MoveToTop />

          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          </button>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
