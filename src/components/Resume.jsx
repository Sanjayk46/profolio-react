import React, { useState } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const Resume = () => {
  const[wid, setwid]=useState(window.innerWidth);

  const handleResize=()=>{
    setwid(window.innerWidth);
  }

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);

  return (
    <div className='ResumePage'>
      

      <a href={pdf} target='_blank' download="Devansh's Resume">
        <button className='downloadCV' type='button'>
          <h3><BsDownload/>&nbsp; Download CV</h3>
        </button>
      </a>

    </div>
  )
}

export default Resume