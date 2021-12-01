import './index.css'

const NavBar = props => {
  const {currentScore, isGameOn, topScore} = props

  return (
    <nav className="navbar-container">
      <div className="titleScoreContainer">
        <div className="logoAndTitleContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="logo"
            alt="emoji logo"
          />
          <h1 className="gameHeader">Emoji Game</h1>
        </div>
        {isGameOn && (
          <div className="scoresContainer">
            <p className="scorePara">Score: {currentScore}</p>
            <p className="scorePara">Total Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
