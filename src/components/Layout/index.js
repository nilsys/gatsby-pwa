import React from 'react'
import PropTypes from 'prop-types'
import Profile from '../Profile'

import styled from 'styled-components'
import GlobalStyles from '../../styles/global'

const LayoutWrapper = styled.section`
  display: flex;
`
const LayoutMain = styled.main`
  background: #20212A;
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <LayoutMain>{children}</LayoutMain>
      <aside>
        <Profile />
      </aside>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout