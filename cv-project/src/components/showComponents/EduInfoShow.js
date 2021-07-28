import '../../styles/EduInfoShow.css'

const EduInfoShow = (props) => {
    const {eduInfo} = props;
    const deleteItem = props.deleteItem;

    return(
        <div> 
            <h1>Education</h1>
            <hr/>
            {
                eduInfo.map(item => {
                    return (
                    <div key={item.startDate} className="eduItems">
                        <button onClick={() => deleteItem(item, 'eduInfo')}>Delete</button>
                        <h2>{ item.school }</h2>
                        <h2>{ item.study }</h2>
                        <h3>{ item.startDate }</h3>
                        <h3>{ item.finishDate }</h3>
                    </div>
                    )
                })
            }
        </div>

    )
}

export default EduInfoShow;