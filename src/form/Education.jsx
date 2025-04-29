import { useState } from "react";

function Education(){
    const [formData, setFormData] = useState([{name: "", study: "", date: ""}]);

    const handleChange = (index, e) => {
        const updatedForm = [...formData];
        updatedForm[index][e.target.name] = e.target.value;
        setFormData(updatedForm);
    };

    const addSchool = () => {
        setFormData([...formData, {name: "", study:"", date:""}]);
    };

    const removeSchool = (index) => {
        const updatedForm = formData.filter((_,i) => i !== index);
        setFormData(updatedForm);
    };

    return (
        <>
        <div id="form-education">
            <h1 className="form-header">Education</h1>
            {formData.map((school,index) => (
                <div key={index}>
                    <h3 className="school">School {index+1}</h3>
                    <div className="form-info-input">
                        <label htmlFor="schoolname">School Name: </label>
                        <input type="text" id="schoolname" name="schoolname" value={school.name} onChange={(e) => handleChange(index,e)} required />
                    </div>
                    <div className="form-info-input">
                        <label htmlFor="schoolstudy">Title of Study: </label>
                        <input type="text" id="schoolstudy" name="schoolstudy" value={school.study} onChange={(e) => handleChange(index,e)} required />
                    </div>
                    <div className="form-info-input">
                        <label htmlFor="schooldate">Date of Study: </label>
                        <input type="date" id="schooldate" name="schooldate" value={school.date} onChange={(e) => handleChange(index,e)} required />
                    </div>
                    <button type="button" onClick={() => removeSchool(index)}>Remove</button>
                </div>
            ))}
            <button type="button" onClick={addSchool}>Add School</button>
        </div>
        </>
    )
}

export default Education