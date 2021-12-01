import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="winOrLoseContainer">
      <div className="gameStatus">
        <h1 className="statusHead">{gameStatus}</h1>
        <p className="currentStatus">{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button
          className="playAgainButton"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="imageContainer">
        <img src={imageUrl} className="winOrLoseImg" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
