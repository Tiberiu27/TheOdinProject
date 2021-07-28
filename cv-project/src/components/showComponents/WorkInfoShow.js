
const WorkInfoShow = (props) => {
    const {workInfo} = props;
    const deleteItem = props.deleteItem;
    return(
        <div>
        <h1>Work</h1>
        <hr/>
        {
            workInfo.map(item => {
                return (
                <div key={item.startDate} className="workItems">
                    <button onClick={() => deleteItem(item, 'workInfo')}>Delete</button>
                    <h2>{ item.company }</h2>
                    <h2>{ item.title }</h2>
                    <pre>{ item.chores }</pre>
                    <h3>{ item.startDate }</h3>
                    <h3>{ item.finishDate }</h3>
                </div>
                )
            })
        }
    </div>
    )
}

export default WorkInfoShow;