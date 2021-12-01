import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmojis} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const onClickEmojis = () => {
    clickEmojis(id)
  }

  return (
    <li className="emojiItem">
      <button className="emojiButton" type="button" onClick={onClickEmojis}>
        <img src={emojiUrl} alt={emojiName} className="emojiImages" />
      </button>
    </li>
  )
}

export default EmojiCard
