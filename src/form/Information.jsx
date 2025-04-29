function Information(){

    return (
        <>
        <div id="form-information">
            <h1 className="form-header">Information</h1>
            <div className="form-info-input">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" defaultValue="John Doe" required/>
            </div>
            <div className="form-info-input">
                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" name="email" defaultValue="johndoe@co.com" required />
            </div>
            <div className="form-info-input">
                <label htmlFor="phone">Phone Number: </label>
                <input type="tel" id="phone" name="phone" defaultValue="555-555-5555" required />
            </div>
        </div>
        </>
    )
}

export default Information