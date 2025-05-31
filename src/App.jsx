import { StrictMode } from 'react'
import './index.css'
import Information from './form/Information.jsx'
import Education from './form/Education.jsx'
import Work from './form/Work.jsx'
import { useState } from "react";

const App = () => {
  const generateID = () => {
    return Date.now() + Math.random();
  }

  const [formSchoolData, setFormSchoolData] = useState([{id: generateID(), schoolname: "", schoolstudy: "", schoolstartdate: "", schoolenddate:""}]);
  const [formWorkData, setFormWorkData] = useState([{id: generateID(), workCompany: "", workTitle: "", workDesc: "", workStartDate:"", workEndDate:""}]);

  return (
    <StrictMode>
      <div id="container"> 
        <h1 id="form-header">Resume Builder</h1>
        <form id="form-container">
          <Information />
          <Education data={formSchoolData} setData={setFormSchoolData}/>
          <Work data={formWorkData} setData={setFormWorkData}/>
        </form>
      </div>
    </StrictMode>
  );
}


  export default App
