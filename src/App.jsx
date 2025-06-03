import { StrictMode } from 'react'
import './index.css'
import Information from './form/Information.jsx'
import Education from './form/Education.jsx'
import Work from './form/Work.jsx'
import ResumePreview from './ResumePreview.jsx'
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, {useRef} from "react";

const App = () => {
  const generateID = () => {
    return Date.now() + Math.random();
  }

  const [formInfoData, setFormInfoData] = useState([{id: generateID(), infoName: "", infoEmail: "", infoPhone: "", infoResidence: ""}])
  const [formSchoolData, setFormSchoolData] = useState([{id: generateID(), schoolname: "", schoolstudy: "", schoolstartdate: "", schoolenddate:""}]);
  const [formWorkData, setFormWorkData] = useState([{id: generateID(), workCompany: "", workTitle: "", workDesc: "", workStartDate:"", workEndDate:""}]);

  const resumeRef = useRef();

  const handleResumePDF = async () => {
      const element = resumeRef.current;

      const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
  };

  return (
    <StrictMode>
      <div id="container"> 
        <h1 id="form-header">Resume Builder</h1>
        <form id="form-container">
          <Information data={formInfoData} setData={setFormInfoData}/>
          <Education data={formSchoolData} setData={setFormSchoolData}/>
          <Work data={formWorkData} setData={setFormWorkData}/>
        </form>
      </div>
      <div id="preview-container">
        <h1 id="preview-header">Resume Preview</h1>
        <div id="preview-page" ref={resumeRef}>
          <div id="preview-div">
            <ResumePreview infoData={formInfoData} schoolData={formSchoolData} workData={formWorkData}/>
          </div>
        </div>
        <div className='pdf-download'>
          <button className='download-button' onClick={handleResumePDF}>
            Save as PDF
          </button>
        </div>
      </div>
    </StrictMode>
  );
}


  export default App
