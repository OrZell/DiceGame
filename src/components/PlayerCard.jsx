function PlayerCard({ name, score, holdScore, active }) {
  return (
    <div className="player-container">
      <h2>{name}</h2>
      <h4>Score - {score}</h4>
      <h4>Current - {active ? holdScore : 0}</h4>
    </div>
  )
}

export default PlayerCard
