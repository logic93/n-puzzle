import styled from 'styled-components'

export const Button = styled.button`
  font-size: 1rem;
  width: 100%;
  display: block;
  border: none;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  text-decoration: none;
  height: 50px;
  text-align: center;
  background-color: #000;
  color: rgba(255, 255, 255, 0.6);

  &:hover {
    color: white;
  }

  @media screen and (max-width: 520px) {
    border-radius: 0;
  }
`

export const NewGameButton = styled(Button)`
  margin-top: 4px;
`
