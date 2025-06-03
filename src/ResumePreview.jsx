const ResumePreview = ({infoData, schoolData, workData}) => {

    const formatDate = (date) => {
        const [year, month, day] = date.split("-").map(Number);
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        if(date === ""){
            return(
                ` `
            )
        }else{
            return(
                `${monthNames[month-1]} ${day}, ${year}`
            )
        }
    }

    return (
        <>
        <h1 id="preview-name">{infoData.infoName}</h1>
        <h3 id="preview-contact-info">{infoData.infoEmail} - {infoData.infoPhone} - {infoData.infoResidence}</h3>
        <ul id="preview-education">
            <div className="preview-section">EDUCATION</div>
            {schoolData.map((item, index) => (
                <li key={index} className="preview-school-entry">
                    <div className="preview-school-info">
                        <div className="preview-school-name">
                            <h2>{item.schoolname}</h2>
                            <h2>{formatDate(item.schoolstartdate)} - {formatDate(item.schoolenddate)}</h2>
                        </div>
                        <div className="preview-school-major">{item.schoolstudy}</div>
                    </div>
                </li>
            ))}
        </ul>
        <ul id="preview-work">
            <div className="preview-section">WORK & EXPERIENCE</div>
            {workData.map((item,index) => (
                <li key={index} className="preview-work-entry">
                    <div className="preview-work-info">
                        <div className="preview-work-name">
                            <h2>{item.workCompany}</h2>
                            <h2>{formatDate(item.workStartDate)} - {formatDate(item.workEndDate)}</h2>
                        </div>
                        <div className="preview-work-position">{item.workTitle}</div>
                        <div className="preview-work-desc">{item.workDesc}</div>
                    </div>
                </li>
            ))}
        </ul>
        </>
    )
}

export default ResumePreview