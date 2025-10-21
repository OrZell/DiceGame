import { useState } from 'react'

import StartScreen from './StartScreen'
import PlayerCard from './PlayerCard'
import Dice from './Dice'

function DiceGame() {
  // const [wins, setWins] = useState([0, 0])
  const [playerNames, setPlayersNames] = useState(null)
  const [holdScore, setHoldScore] = useState(0)
  const [playerScores, setPlayerScores] = useState([0, 0])
  const [currentPlayer, setCurrentPlayer] = useState(0)
  const [dice1, setDice1] = useState(1)
  const [dice2, setDice2] = useState(1)
  const [winner, setWinner] = useState(null)
  const [targetScore, setTargetScore] = useState(null)

  const startGame = (target, player1, player2) => {
    setTargetScore(target)
    setPlayersNames([player1, player2])
  }

  const rollDice = () => {
    const roll1 = Math.floor(Math.random() * 6) + 1
    const roll2 = Math.floor(Math.random() * 6) + 1

    setDice1(roll1)
    setDice2(roll2)

    const newHoldScore = holdScore
    setHoldScore(newHoldScore + roll1 + roll2)
  }

  function holdScoreClick() {
    if (holdScore === 0) return

    const newPlayerScore = [...playerScores]
    newPlayerScore[currentPlayer] += holdScore
    setPlayerScores(newPlayerScore)
    setHoldScore(0)
    
    if (newPlayerScore[currentPlayer] == targetScore) {
      setWinner(currentPlayer)
      return
    }
    
    if (newPlayerScore[currentPlayer] > targetScore) {
      setWinner(currentPlayer === 0 ? 1 : 0)
      return
    }

    setCurrentPlayer(currentPlayer === 0 ? 1 : 0)
  }

  const resetGame = () => {
    setPlayerScores([0, 0])
    setCurrentPlayer(0)
    setHoldScore(0)
    setDice1(1)
    setDice2(1)
    setWinner(null)
    setTargetScore(null)
  }

  if (targetScore === null) {
    return <StartScreen onStart={startGame} />
  }

  return (
    <div className='app-container'>
      <div className='game-screen-title-conyainer'>
        <h2 className='game-screen-title'>Dice Game</h2>
      </div>
      <div className='players'>
        <PlayerCard className='player' name={playerNames[0]} score={playerScores[0]} holdScore={holdScore} active={currentPlayer === 0} />
        <PlayerCard className='player' name={playerNames[1]} score={playerScores[1]} holdScore={holdScore} active={currentPlayer === 1} />
      </div>

      <div className='qubes'>
        <Dice number={dice1} />
        <Dice number={dice2} />
      </div>

      <div className='wineer-title'>
        {winner !== null ? (
          <h3>{playerNames[winner]} wins</h3>
        ) : (
          <p>{playerNames[currentPlayer]} turn</p>
        )}
      </div>

      <div className='game-buttons'>
        <button onClick={holdScoreClick} disabled={!!winner}>Hold</button>
        <button onClick={rollDice} disabled={!!winner}>Roll</button>
      </div>
      <div className='newgame-button'>
        <button onClick={resetGame}>New Game</button>
      </div>
    </div>
  )
}

export default DiceGame
