import React from 'react'

import JumboImage from '../images/jumbo1.jpg'
import styled from 'styled-components'

const JumboContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${JumboImage});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`

export default () => {
  return (
    <JumboContainer>
      <h1>Lauren Dubose</h1>
    </JumboContainer>
  )
}
