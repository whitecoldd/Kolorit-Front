import React, { Component } from 'react'
import { Container, Nav, Navbar, Form } from 'react-bootstrap'
import qIcon from '../assets/question.png'
import flagR from '../assets/flag.png'
import logo from '../assets/nav-logo.png'
import phone from '../assets/phone.png'
import com from '../assets/com.png'
import prof from '../assets/prof.png'
import cart from '../assets/cart.png'
import Badge from '@mui/material/Badge'


export default function Navigation({ cartItems }) {
  return (
    <>
      <Navbar className='d-flex flex-column align-items-stretch main-nav sticky-top'>
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
        <Navbar expand="md" className='nav-fix sticky-top head' >
          <Container>
            <Navbar.Brand href='/'>
              <img
                src={logo}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Item className='d-flex align-items-center m-2'><img src={phone} /><b>+373&#x2212;79&#x2212;559&#x2212;663</b></Nav.Item>
              </Nav>
              <Form.Control
                placeholder="Поиск..."
                id='search'
                aria-label="Search"
              />
              <Nav>
                <Nav.Link className="d-flex justify-content-center flex-wrap"><img src={com} />Сравнить</Nav.Link>
                <Nav.Link href='/cart' className="d-flex justify-content-center flex-wrap"> {cartItems.length !== 0 ? (<Badge badgeContent={cartItems.length} color="warning"><img src={cart} /></Badge>) : (<img src={cart} />)} Корзина</Nav.Link>
                <Nav.Link href='/profile' className="d-flex justify-content-center flex-wrap"><img src={prof} />Войти</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className='smth sticky-top' ></Container>
      </Navbar>

    </>
  )
}
