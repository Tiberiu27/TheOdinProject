const GeneralInfoEdit = (props) => {
    const submitForm = props.submitForm;
    const submitInfo = props.submitInfo;

    return(
        <div id="general">
            <h1>General Information</h1>
            <form onSubmit={ (e) => {
                                e.preventDefault();
                submitForm("general", submitInfo);
            }}>
                <div>
                    <label htmlFor="nameInput">First name: </label>
                    <input type="text" id="nameInput" required/>
                    <label htmlFor="surnameInput">Last name: </label>
                    <input type="text" id="surnameInput" required/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="emailInput" required/>
                    <label htmlFor="phone">Phone: </label>
                    <input type="tel" id="phoneInput" required/>
                </div>

                <button type="submit">Change</button>
        </form>
        </div>
    )
}

export default GeneralInfoEdit;