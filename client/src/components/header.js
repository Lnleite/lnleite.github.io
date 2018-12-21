// import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'

const Fix = styled.div`
  position: fixed;
  top: 0;
  background: white;
  width: 100%;
`

const Header = ({ siteTitle }) => (
  <Fix>
    <h3>Home</h3>
  </Fix>
)

Header.propTypes = {}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
