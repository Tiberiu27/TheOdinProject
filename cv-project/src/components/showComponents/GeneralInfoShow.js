const GeneralInfoShow = (props) => {
    return(
        <div>
            <h1>Personal</h1>
            <hr/>
            <h2>{ props.generalInfo.name }</h2>
            <h2>{ props.generalInfo.surname }</h2>
            <h3>{ props.generalInfo.email }</h3>
            <h3>{ props.generalInfo.phone }</h3>
        </div>
    )
}

export default GeneralInfoShow;