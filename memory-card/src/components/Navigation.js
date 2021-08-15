import '../styles/Navigation.css'

const Navigation = (props) => {
    const bestScoreList = props.bestScoreList;

    return(
        <nav>
            <div id="game-title">
                <h1>Memory Card Game</h1>
            </div>
            <div id="score">
                <h4>Score: {props.score}</h4>
                <h4>Best Score: {bestScoreList.length ? Math.max(...bestScoreList) : 0}</h4>
            </div>
        </nav>
    )
}

export default Navigation;