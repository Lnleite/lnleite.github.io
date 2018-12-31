import React from 'react'

import JumboImage from '../images/natureBackground.jpg'
import styled from 'styled-components'

const JumboContainer = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${JumboImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;

  h1 {
    font-size: 2rem;
  }
`

export default () => {
  return (
    <JumboContainer>
      <div>
        <h1>Lauren Dubose</h1>
        <p>Developer</p>
        <p>Engineer</p>
        <p>Coder</p>
      </div>
    </JumboContainer>
  )
}
