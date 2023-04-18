import React from 'react'
import styled from 'styled-components'
import { bounceInUp, fadeIn } from '../utils'

const Modal = (props) => {
  return (
    <div>
      {props.on && (
        <ModalWrapper>
          <ModalCard>{props.children}</ModalCard>
          <Background />
        </ModalWrapper>
      )}
    </div>
  )
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalCard = styled.div`
  color: black;
  position: relative;
  z-index: 10000;
  animation-duration: 0.75s;
  animation-name: ${bounceInUp};

  border-radius: 8px;
  padding: 16px;
  min-width: 320px;
  background-color: white;
  height: 120px;

  @media screen and (max-width: 520px) {
    min-width: 284px;
  }
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  animation-duration: 0.75s;
  animation-name: ${fadeIn};
  height: 100%;
  opacity: 0.3;
  background-color: black;
`

export default Modal
