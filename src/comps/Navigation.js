import React, { Component } from 'react'
import { Container, Nav, Navbar, Form } from 'react-bootstrap'
import qIcon from '../assets/question.png'
import flagR from '../assets/flag.png'



export default function Navigation() {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" className='nav-fix1 sticky-top'>
          <Container className='nav-fix' >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className='me-auto' >
                <Nav.Link className='white' href='/about'>О Компании</Nav.Link>
                <Nav.Link className='white' href='/contacts'>Контакты</Nav.Link>
                <Nav.Link className='gold' href='/sales'>Скидки</Nav.Link>
                <Nav.Link className='white' href='/partnership'>Партнерство</Nav.Link>
                <Nav.Link className='white' href='/brands'>Бренды</Nav.Link>
                <Nav.Link className='gold' href='/promotions'>Акции</Nav.Link>
              </Nav>

              <Nav className='me-2 d-flex align-items-center'>
                <Nav.Link><img src={qIcon} /></Nav.Link>
                <Nav.Link className='font-fix'><span>Г</span>рафик работы</Nav.Link>
                <Nav.Link className='font-fix'><img src={flagR} /> Ru</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        

    </>
  )
}
