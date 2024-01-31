import React, { useEffect, useState } from 'react'

const data = [
    ['', '', '', '','', '', '', ''],
    ['', '', '', '','', '', '', ''],
    ['', '', '', '','', '', '', ''],
    ['', '', '', '','', '', '', ''],
    ['', '', '', '','', '', '', ''],
    ['', '', '', '','', '', '', ''],
    ['', '', '', '','', '', '', ''],
    ['', '', '', '','', '', '', ''],
]


function TicTacGameBoard() {
    const [gameBoard, setGameBoard] = useState(data)
    const [decision, setDecision] = useState(false)
    const [gameLock, setGameLock] = useState(false)
    const [winner, setWinner] = useState(null)

    const handleTileClick = (row, col) => {
        if (gameLock === false) {
            const tiles = [...gameBoard]
            if (tiles[row][col] === '') {
                if (decision === false) {
                    tiles[row][col] = 'X'
                } else {
                    tiles[row][col] = 'O'
                }
                setDecision(prev => !prev)
                setGameBoard(tiles)
                let winner = checkWinner()
                if (winner) {
                    setWinner(winner)
                    setGameLock(true)
                }
            }
        }
    }

    const checkWinner = () => {
        for (let i = 0; i < gameBoard.length; i++) {
            for (let j = 0; j < gameBoard.length; j++) {
                if (
                    gameBoard[i][j] === gameBoard[i][j] &&
                    gameBoard[i][j] === gameBoard[i][j] &&
                    gameBoard[i][0] !== ''
                ) {
                    return gameBoard[i][0] // X||O
                }
                if (
                    gameBoard[0][i] === gameBoard[1][i] &&
                    gameBoard[1][i] === gameBoard[2][i] &&
                    gameBoard[0][i] !== ''
                ) {
                    return gameBoard[0][i] // X||O
                }
            }
        }
        // for (let i = 0; i < gameBoard.length; i++) {
        // }


        return null
    }
    return (
        <>
            {winner && <p>Player {winner} wins</p>}
            <div style={{
                border: '1px solid red',
                width: '30%',
                margin: '0 auto'
            }}>
                {
                    gameBoard.map((row, rowIndex) => {
                        return <div
                            key={rowIndex}
                            className='row'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '5px',
                                marginBottom: '5px'
                            }}
                        >
                            {
                                row.map((columns, colIndex) => {
                                    return <div
                                        key={colIndex}
                                        className='col'
                                        style={{
                                            flex: '1',
                                            height: '150px',
                                            background: 'grey'
                                        }}
                                        onClick={() => handleTileClick(rowIndex, colIndex)}
                                    >
                                        <h1>{columns}</h1>
                                    </div>
                                })
                            }
                        </div>
                    })
                }

            </div>
        </>
    )
}

export default TicTacGameBoard