import React, { useState, useEffect, Fragment } from 'react'
import {
  SubContainer,
  BoardContainer,
  Modal,
  ModalContainer,
  Button,
  NewGameButton,
} from '../../elements'
import Tile from '../Tile'

const Board = ({ size }) => {
  const [tiles, setTiles] = useState([])
  const [emptyIndex, setEmptyIndex] = useState(null)
  const [isSorted, setIsSorted] = useState(false)

  useEffect(() => {
    newGame()
  }, [])

  const newGame = () => {
    const newTiles = Array.from({ length: size * size }, (_, i) => i + 1)
    newTiles[size * size - 1] = null
    newTiles.sort(() => Math.random() - 0.5)

    let rows = []
    for (let i = 0; i < newTiles.length; i += parseInt(size)) {
      const column = newTiles.slice(i, i + parseInt(size))
      rows.push(column)
    }

    rows.map((row, i) =>
      row.map((tile, j) => tile === null && setEmptyIndex(j + size * i))
    )

    setTiles(rows)
  }

  const isPuzzleSorted = (rows) => {
    const len = rows.length
    const subLen = rows[0].length
    let previousValue = 0

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < subLen; j++) {
        const currentValue = rows[i][j]

        if (currentValue === null && (i !== len - 1 || j !== subLen - 1)) {
          return false
        }

        if (currentValue !== null && currentValue < previousValue) {
          return false
        }

        previousValue = currentValue
      }
    }

    return true
  }

  const validate = () => {
    const isSorted = isPuzzleSorted(tiles)
    setIsSorted(isSorted)
  }

  const handleTileClick = (selectedIndex) => {
    const row = Math.floor(selectedIndex / size)
    const col = selectedIndex % size
    const emptyRow = Math.floor(emptyIndex / size)
    const emptyCol = emptyIndex % size
    const sameRow = row === emptyRow
    const sameColumn = col === emptyCol

    const newTiles = [...tiles]

    if (emptyIndex > selectedIndex) {
      if (sameRow) {
        for (let i = size - 1; i > col; i--) {
          if (newTiles[row][i] === null) {
            newTiles[row][i] = newTiles[row][i - 1]
            newTiles[row][i - 1] = null
            setEmptyIndex(row * size + col)
          }
        }
      } else if (sameColumn) {
        for (let i = size - 1; i > row; i--) {
          if (newTiles[i][col] === null) {
            newTiles[i][col] = newTiles[i - 1][col]
            newTiles[i - 1][col] = null
            setEmptyIndex(row * size + col)
          }
        }
      }
    } else if (emptyIndex < selectedIndex) {
      if (sameRow) {
        for (let i = 0; i < col; i++) {
          if (newTiles[row][i] === null) {
            newTiles[row][i] = newTiles[row][i + 1]
            newTiles[row][i + 1] = null
            setEmptyIndex(row * size + col)
          }
        }
      } else if (sameColumn) {
        for (let i = 0; i < row; i++) {
          if (newTiles[i][col] === null) {
            newTiles[i][col] = newTiles[i + 1][col]
            newTiles[i + 1][col] = null
            setEmptyIndex(row * size + col)
          }
        }
      }
    }

    validate(newTiles)
    setTiles(newTiles)
  }

  return (
    <Fragment>
      <SubContainer>
        <div className="title-container">
          <h1>N-PUZZLE</h1>

          <NewGameButton
            onClick={() => {
              setIsSorted(false)
              newGame()
            }}
          >
            New Game
          </NewGameButton>
        </div>

        <BoardContainer size={size}>
          {tiles.map((row, i) =>
            row.map((tile, j) => {
              const selectedIndex = j + size * i
              return (
                <Tile
                  key={j}
                  value={tile}
                  selectedIndex={selectedIndex}
                  onClick={() => handleTileClick(selectedIndex)}
                  size={size}
                />
              )
            })
          )}
        </BoardContainer>
      </SubContainer>

      <Modal on={isSorted}>
        <ModalContainer>
          <div className="text-1">Good Game!</div>
          <div>
            <Button
              onClick={() => {
                setIsSorted(false)
                newGame()
              }}
            >
              Play Again
            </Button>
          </div>
        </ModalContainer>
      </Modal>
    </Fragment>
  )
}

export default Board
