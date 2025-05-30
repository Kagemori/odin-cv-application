import { StrictMode } from 'react'
import './index.css'
import Information from './form/Information.jsx'
import Education from './form/Education.jsx'
import Work from './form/Work.jsx'

const App = () => {

  return (
    <StrictMode>
      <div id="container"> 
        <h1 id="form-header">Resume Builder</h1>
        <form id="form-container">
          <Information />
          <Education />
          <Work />
        </form>
      </div>
    </StrictMode>
  );
}


  export default App
