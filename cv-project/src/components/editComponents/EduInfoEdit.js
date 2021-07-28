const EduInfoEdit = (props) => {
    const submitForm = props.submitForm;
    const submitInfo = props.submitInfo;

    return(
        <div id="edu">
            <h1>Educational Information</h1>
            <form onSubmit={ (e) => {
                e.preventDefault();
                submitForm("edu", submitInfo);
            }}>
                <div>
                    <label htmlFor="schoolInput">School name: </label>
                    <input type="text" id="schoolInput" required/>
                    <label htmlFor="titleInput">Title of study: </label>
                    <input type="text" id="titleInput" required/>
                </div>
                <div>
                    <label htmlFor="dateStartInput">Starting date: </label>
                    <input type="date" id="dateStartInput" required/>
                    <label htmlFor="dateFinishInput">Finish date: </label>
                    <input type="date" id="dateFinishInput" required/>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default EduInfoEdit;