function PlayerCard({ name, score, holdScore, active }) {
  return (
    <div className="player-container">
      <h2>{name}</h2>
      <h3>Score - {score}</h3>
      <h3>Current - {active ? holdScore : 0}</h3>
    </div>
  )
}

export default PlayerCard
