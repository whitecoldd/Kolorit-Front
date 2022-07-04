import React from 'react'
import {Navbar} from 'react-bootstrap'
import Header from './comps/Header'
import Navigation from './comps/Navigation'

const Head = (props) => {
    const { cartItems } = props;
  return (
    <Navbar className='d-flex flex-column align-items-stretch main-nav sticky-top'>
        <Navigation></Navigation>
        <Header cartItems={cartItems}></Header>
    </Navbar>
  )
}

export default Head