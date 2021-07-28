const WorkInfoEdit = (props) => {
    const submitForm = props.submitForm;
    const submitInfo = props.submitInfo;

    return (
        <div id="work">
            <h1>Work Information</h1>
            <form onSubmit={ (e) => {
                e.preventDefault();
                submitForm("work", submitInfo);
            }}>
                <div>
                    <label htmlFor="companyInput">Company name: </label>
                    <input type="text" id="companyInput" required/>
                    <label htmlFor="jobInput">Job title: </label>
                    <input type="text" id="jobInput" required/>
                </div>
                    <label htmlFor="tasksInput">Main tasks:</label>
                    <textarea id="tasksInput" cols="40" rows="5" required></textarea>
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

export default WorkInfoEdit;