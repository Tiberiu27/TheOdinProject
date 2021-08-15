import '../styles/Card.css'

const Card = (props) => {
    const imgSource = `/assets/${props.imgSource}.png`
    const cardClicked = props.cardClicked

    return(
        <div className="main-card" id={`${props.title}` } onClick={() => cardClicked(props.title)}>
            <img alt="" src={imgSource} />
            <h3 id="title">{props.title}</h3>
        </div>
    )
}

export default Card;