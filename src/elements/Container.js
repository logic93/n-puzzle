import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  align-items: center;
  overflow: hidden;
  justify-content: center;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 520px) {
    width: 100%;
    padding: 16px;
  }
`

export const BoardContainer = styled.div`
  display: grid;
  width: 500px;
  height: 500px;
  align-items: center;
  justify-items: center;
  margin-top: 1em;

  ${(props) =>
    `grid-template-columns: repeat(${props.size}, 1fr);
        grid-template-rows: repeat(${props.size}, 1fr);`}

  @media screen and (max-width: 520px) {
    width: 100%;
    height: 100%;
  }
`

export const TileContainer = styled.button`
  position: relative;
  font-size: 2rem;
  line-height: 3;
  background-color: ${(props) => (props.correct ? 'black' : 'white')};
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  color: ${(props) => (props.correct ? 'white' : 'black')};
  cursor: pointer;

  ${(props) => {
    if (props.size) {
      return `width: calc(500px / ${props.size} - 8px);
            height: calc(500px / ${props.size} - 8px);`
    }
  }}

  @media screen and (max-width: 520px) {
    width: calc(100% - 8px);
    height: calc(100% - 8px);
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: space-between;
  .text-1 {
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
  }
`
