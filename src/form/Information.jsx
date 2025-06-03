const Information = ({data,setData}) => {
    return (
        <>
        <div id="form-information">
            <h1 className="form-header">Information</h1>
            <div className="form-info-input">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" value={data.infoName} onChange={(e) => setData({...data, infoName: e.target.value})} required/>
            </div>
            <div className="form-info-input">
                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" name="email" value={data.infoEmail} onChange={(e) => setData({...data, infoEmail: e.target.value})} required />
            </div>
            <div className="form-info-input">
                <label htmlFor="phone">Phone Number: </label>
                <input type="tel" id="phone" name="phone" value={data.infoPhone} onChange={(e) => setData({...data, infoPhone: e.target.value})} required />
            </div>
            <div className="form-info-input">
                <label htmlFor="residence">Place of Residence: </label>
                <input type="text" id="residence" name="residence" value={data.infoResidence} onChange={(e) => setData({...data, infoResidence: e.target.value})} required />
            </div>
        </div>
        </>
    )
}

export default Information