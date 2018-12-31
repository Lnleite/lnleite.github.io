import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'

import About from '../sections/about.js'
import Jumbo from '../sections/jumbo.js'
import Projects from '../sections/projects.js'
import Experience from '../sections/experience.js'
import Tech from '../sections/tech.js'

import { GlobalStyle } from '../styles/GlobalStyles.js'

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Jumbo />
    <Layout>
      <About />
      <Projects />
      <Experience />
      <Tech />
    </Layout>
  </>
)

export default IndexPage
