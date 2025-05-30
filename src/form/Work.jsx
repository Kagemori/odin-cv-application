import { useState } from "react";

function Work(){
    const generateID = () => {
        return Date.now() + Math.random();
    }
    
    const [formData, setFormData] = useState([{id: generateID(), workCompany: "", workTitle: "", workDesc: "", workStartDate:"", workEndDate:""}]);

    const handleChange = (index, e) => {
        const updatedForm = [...formData];
        updatedForm[index][e.target.name] = e.target.value;
        setFormData(updatedForm);
    };

    const addWork = () => {
        setFormData([...formData, {id: generateID(), workCompany: "", workTitle: "", workDesc: "", workStartDate:"", workEndDate:""}]);
    };

    const removeWork = (id) => {
        const updatedForm = formData.filter(work => work.id !== id);
        setFormData(updatedForm);
    };

    return (
        <>
        <div id="form-work">
            <h1 className="form-header">Work / Experience</h1>
            {formData.map((work,index) => (
                <div key={work.id}>
                    <div className="workEdit">
                        <h3 className="work">Work {index+1}</h3>
                        <button type="button" onClick={() => removeWork(work.id)}>Remove</button>
                    </div>
                    <div className="form-info-input">
                        <label htmlFor="workCompany">Company Name: </label>
                        <input type="text" id="workCompany" name="workCompany" value={work.workCompany} onChange={(e) => handleChange(index,e)} required />
                    </div>
                    <div className="form-info-input">
                        <label htmlFor="workTitle">Title of Position: </label>
                        <input type="text" id="workTitle" name="workTitle" value={work.workTitle} onChange={(e) => handleChange(index,e)} required />
                    </div>
                    <div className="form-info-input">
                        <label htmlFor="workDesc">Position Description: </label>
                        <textarea id="workDesc" name="workDesc" value={work.workDesc} onChange={(e) => handleChange(index,e)} required />
                    </div>
                    <div className="form-info-input">
                        <label htmlFor="workStartDate">Start Date: </label>
                        <input type="date" id="workStartDate" name="workStartDate" value={work.workStartDate} onChange={(e) => handleChange(index,e)} required />
                    </div>
                    <div className="form-info-input">
                        <label htmlFor="workEndDate">End Date: </label>
                        <input type="date" id="workEndDate" name="workEndDate" value={work.workEndDate} onChange={(e) => handleChange(index,e)} required />
                    </div>
                </div>
            ))}
            <button type="button" onClick={addWork} className="addButton">Add Work</button>
        </div>
        </>
    )
}

export default Work