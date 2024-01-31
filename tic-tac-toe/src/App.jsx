import { useEffect, useRef, useState } from 'react'
import Button from './components/forms/Button'
import TicTacToeBoard from './components/Games/TicTacToeBoard'

function App() {
  const gameRef = useRef(null)
  const [fetch, setFetch] = useState(false)
  const [gameData, setGameData] = useState(null)

  useEffect(() => {
    if (gameRef.current) {
      setGameData(gameRef.current.getData());
    }
  }, [fetch])  

  const handleFetch = () => {
    setFetch(prev => !prev)
  }

  return (
    <>
      <h1>Tic Tac Toe Game</h1>

      <div>
        <Button
          handler={() => console.log('clicked')}
        >Reset</Button>
      </div>
      {gameData && gameData.player && <h2>Player {gameData.player} Wins</h2>}
      <div>
        <TicTacToeBoard ref={gameRef} handleFetch={handleFetch}/>
      </div>
    </>
  )
}

export default App
