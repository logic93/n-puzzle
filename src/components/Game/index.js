import React, { useState } from 'react'
import { Container } from '../../elements'
import Board from '../Board'

const Game = () => {
  const DEFAULT_BOARD_SIZE = 4
  const BOARD_SIZE = process.env.REACT_APP_BOARD_SIZE
  const [size] = useState(BOARD_SIZE || DEFAULT_BOARD_SIZE)

  return (
    <Container>
      <Board size={size} />
    </Container>
  )
}

export default Game
