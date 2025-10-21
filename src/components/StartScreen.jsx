import { useState } from 'react'

function StartScreen({ onStart }) {
  const [inputValue, setInputValue] = useState('15')
  const [player1, setPlayer1] = useState('Player 1')
  const [player2, setPlayer2] = useState('Player 2')

  const handleStart = () => {
    const target = parseInt(inputValue)
    if (!isNaN(target) && 12 < target && target < 201 && player1 !== '' && player2 !== '') {
      onStart(target, player1, player2)
    }
  }

  return (
    <>
      <div className='start-screen-container'>
        <h2 className='start-screen-title'>Dice Game</h2>
        <p className='start-screen-target'>Choose Target Number</p>
        <input
          type="text"
          className='start-screen-input'
          value={player1}
          onChange={e => setPlayer1(e.target.value)}
        />
        <input
          className='start-screen-input'
          type="text"
          value={player2}
          onChange={e => setPlayer2(e.target.value)}
        />
        <input
        className='start-screen-input'
          type="number"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          min="12"
          max="200"
        />
        <button onClick={handleStart}>Start</button>
      </div>
    </>
  )
}

export default StartScreen
