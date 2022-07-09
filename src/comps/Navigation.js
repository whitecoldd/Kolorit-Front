import React, { Component } from 'react'
import { Container, Nav, Navbar, Form } from 'react-bootstrap'
import {Link} from 'react-router-dom'
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
      <Navbar expand='lg' collapseOnSelect className='d-flex flex-column align-items-stretch main-nav sticky-top'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark' className='nav-fix1 sticky-top'>
          <Container className='nav-fix' >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className='me-auto' >
                <Link className='nav-link white' to='/about'>О Компании</Link>
                <Link className='nav-link white' to='/contacts'>Контакты</Link>
                <Link className='nav-link gold' to='/sales'>Скидки</Link>
                <Link className='nav-link white' to='/partnership'>Партнерство</Link>
                <Link className='nav-link white' to='/brands'>Бренды</Link>
                <Link className='nav-link gold' to='/promotions'>Акции</Link>
              </Nav>

              <Nav className='me-2 d-flex align-items-center'>
                <Link to='/' className='nav-link'><img src={qIcon} /></Link>
                <Link to='/' className='font-fix nav-link'><span>Г</span>рафик работы</Link>
                <Link to='/' className='font-fix nav-link'><img src={flagR} /> Ru</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Navbar collapseOnSelect expand="lg" className='nav-fix sticky-top head' >
          <Container>
            <Navbar.Brand>
              <Link to='/'><img
                src={logo}
              /></Link>
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
                <Link to='/' className="d-flex justify-content-center flex-wrap nav-link"><img src={com} />Сравнить</Link>
                <Link to='/cart' className="d-flex justify-content-center flex-wrap nav-link"> {cartItems.length !== 0 ? (<Badge badgeContent={cartItems.length} color="warning"><img src={cart} /></Badge>) : (<img src={cart} />)} Корзина</Link>
                <Link to='/profile' className="d-flex justify-content-center flex-wrap nav-link"><img src={prof} />Войти</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className='smth sticky-top' ></Container>
      </Navbar>

    </>
  )
}
