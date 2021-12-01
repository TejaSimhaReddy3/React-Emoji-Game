import {Component} from 'react'
import './index.css'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    topScore: 0,
    isGameOn: true,
    clickedEmojis: [],
  }

  shuffleEmojis = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishedGameAndTopScoreGenerated = score => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (score > topScore) {
      newTopScore = score
    }

    this.setState({topScore: newTopScore, isGameOn: false})
  }

  clickEmojis = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isEmojiPresent = clickedEmojis.includes(id)
    const clickedEmojisLength = clickedEmojis.length

    if (isEmojiPresent) {
      this.finishedGameAndTopScoreGenerated(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishedGameAndTopScoreGenerated(clickedEmojisLength)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  renderEmojiList = () => {
    const shuffledEmojis = this.shuffleEmojis()

    return (
      <ul className="emojisLists">
        {shuffledEmojis.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            clickEmojis={this.clickEmojis}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    this.setState({clickedEmojis: [], isGameOn: true})
  }

  showScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWon = clickedEmojis.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojis.length}
      />
    )
  }

  render() {
    const {topScore, isGameOn, clickedEmojis} = this.state
    return (
      <div className="app-container">
        <NavBar
          currentScore={clickedEmojis.length}
          isGameOn={isGameOn}
          topScore={topScore}
        />
        <div className="gameBoxContainer">
          {isGameOn ? this.renderEmojiList() : this.showScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
