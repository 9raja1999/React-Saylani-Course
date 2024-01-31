import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'


const data = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

const TicTacToeBoard = forwardRef((props, ref) => {
    const { handleFetch } = props
    const [board, setBoard] = useState(data)
    const [lock, setLock] = useState(false)
    const [count, setCount] = useState(0)
    const [winner, setWinner] = useState(null)


    const handleClick = (event, row, column) => {
        if (lock) return
        if (data[row][column] === '') {
            if (count % 2 === 0) {
                data[row][column] = 'X'
            } else {
                data[row][column] = 'O'
            }
            setCount(prev => prev + 1)
            setBoard(data)
            const result = checkWinner()
            if (result) {
                setWinner(result)
                setLock(true)
                handleFetch()
            }
        }
    }

    const checkWinner = () => {
        for (let index = 0; index < board.length; index++) {
            if (board[index][0] === board[index][1] && board[index][1] === board[index][2] && data[index][0] !== '') {
                return data[0][index] // Return the winner (X or O)
            }
        }
        for (let index = 0; index < board.length; index++) {
            if (data[0][index] === data[1][index] && data[1][index] === data[2][index] && data[0][index] !== '') {
                return data[0][index]; // Return the winner (X or O)
            }
        }

        // Check diagonals
        if (data[0][0] === data[1][1] && data[1][1] === data[2][2] && data[0][0] !== '') {
            return data[0][0]; // Return the winner (X or O)
        }

        if (data[0][2] === data[1][1] && data[1][1] === data[2][0] && data[0][2] !== '') {
            return data[0][2]; // Return the winner (X or O)
        }

        // No winner in rows, columns, or diagonals
        return null;
    }

    useImperativeHandle(ref, () => ({
        getData: () => ({ player: winner })
    }))

    return (
        <div className='gameBoard'>
            {
                board.map((tiles, rowIndex) => {
                    return (
                        <div
                            key={rowIndex}
                            className='row'
                        >
                            {
                                tiles.map((tile, colindex) => {
                                    return <div
                                        key={colindex}
                                        className='col tile'
                                        onClick={(e) => handleClick(e, rowIndex, colindex)}
                                    >
                                        <h3 className='tileText'>{tile}</h3>
                                    </div>
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
})

export default TicTacToeBoard