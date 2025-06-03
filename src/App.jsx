import { StrictMode } from 'react'
import './index.css'
import Information from './form/Information.jsx'
import Education from './form/Education.jsx'
import Work from './form/Work.jsx'
import ResumePreview from './ResumePreview.jsx'
import { useState } from "react";

const App = () => {
  const generateID = () => {
    return Date.now() + Math.random();
  }

  const [formInfoData, setFormInfoData] = useState([{id: generateID(), infoName: "", infoEmail: "", infoPhone: "", infoResidence: ""}])
  const [formSchoolData, setFormSchoolData] = useState([{id: generateID(), schoolname: "", schoolstudy: "", schoolstartdate: "", schoolenddate:""}]);
  const [formWorkData, setFormWorkData] = useState([{id: generateID(), workCompany: "", workTitle: "", workDesc: "", workStartDate:"", workEndDate:""}]);

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
        <div id="preview-page">
          <div id="preview-div">
            <ResumePreview infoData={formInfoData} schoolData={formSchoolData} workData={formWorkData}/>
          </div>
        </div>
      </div>
    </StrictMode>
  );
}


  export default App
