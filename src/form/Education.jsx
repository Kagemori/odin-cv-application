const Education = ({data,setData}) => {
    const generateID = () => {
        return Date.now() + Math.random();
    }

    const handleChange = (index, e) => {
        const updatedForm = [...data];
        updatedForm[index][e.target.name] = e.target.value;
        setData(updatedForm);
    };

    const addSchool = () => {
        setData([...data, {id: generateID(), schoolname: "", schoolstudy:"", schoolstartdate:"", schoolenddate:""}]);
    };

    const removeSchool = (id) => {
        const updatedForm = data.filter(school => school.id !== id);
        setData(updatedForm);
    };

    return (
        <>
        <div id="form-education">
            <h1 className="form-header">Education</h1>
            {data.map((school,index) => (
                <div key={school.id}>
                    <div className="schoolEdit">
                        <h3 className="school">School {index+1}</h3>
                        <button type="button" onClick={() => removeSchool(school.id)}>Remove</button>
                    </div>
                    <div className="form-info-input">
                        <label htmlFor="schoolname">School Name: </label>
                        <input type="text" id="schoolname" name="schoolname" value={school.schoolname} onChange={(e) => handleChange(index,e)} required />
                    </div>
                    <div className="form-info-input">
                        <label htmlFor="schoolstudy">Title of Study: </label>
                        <input type="text" id="schoolstudy" name="schoolstudy" value={school.schoolstudy} onChange={(e) => handleChange(index,e)} required />
                    </div>
                    <div className="form-info-input">
                        <label htmlFor="schoolstartdate">Start Date: </label>
                        <input type="date" id="schoolstartdate" name="schoolstartdate" value={school.schoolstartdate} onChange={(e) => handleChange(index,e)} required />
                    </div>
                    <div className="form-info-input">
                        <label htmlFor="schoolenddate">End Date: </label>
                        <input type="date" id="schoolenddate" name="schoolenddate" value={school.schoolenddate} onChange={(e) => handleChange(index,e)} required />
                    </div>
                </div>
            ))}
            <button type="button" onClick={addSchool} className="addButton">Add School</button>
        </div>
        </>
    )
}

export default Education