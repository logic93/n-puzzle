import React from 'react'
import { TileContainer } from '../../elements'

const Tile = ({ value, selectedIndex, onClick, size }) => {
  let classNames = []

  const row = Math.floor(selectedIndex / size)
  const col = selectedIndex % size

  if (value === null) {
    classNames.push('empty')
  }

  classNames.push(`row-${row}`, `col-${col}`)

  return (
    <TileContainer
      disabled={!value}
      className={classNames.join(' ')}
      onClick={onClick}
      correct={value === selectedIndex + 1}
      size={size}
    >
      {value}
    </TileContainer>
  )
}

export default Tile
