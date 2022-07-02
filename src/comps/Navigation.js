import React, { Component } from 'react'
import { Container, Nav, Navbar, Form } from 'react-bootstrap'
import qIcon from '../assets/question.png'
import flagR from '../assets/flag.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Partnership from '../pages/Partnership'
import Catalog from '../pages/Catalog'
import Brands from '../pages/Brands'
import Contacts from '../pages/Contacts'
import Promotions from '../pages/Promotions'
import logo from '../assets/nav-logo.png'
import phone from '../assets/phone.png'
import com from '../assets/com.png'
import prof from '../assets/prof.png'
import cart from '../assets/cart.png'
import Badge from '@mui/material/Badge'
import Home from '../pages/Home'
import Cart from '../pages/Cart'

export default function Navigation(props) {
  const {cartItems} = props;
  return (
    <>
      <Navbar className='d-flex flex-column align-items-stretch main-nav sticky-top'>
        <Navbar collapseOnSelect expand="lg" bg="dark" className='nav-fix sticky-top'>
          <Container className='nav-fix' >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className='me-auto' >
                <Nav.Link className='white' href='/about'>О Компании</Nav.Link>
                <Nav.Link className='white' href='/contacts'>Контакты</Nav.Link>
                <Nav.Link className='gold' href='/catalog'>Скидки</Nav.Link>
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
              <Nav.Link href='/Cart' items={cartItems} className="d-flex justify-content-center flex-wrap"> {' '} {props.countCartItems ? (<Badge badgeContent={props.countCartItems} color="secondary"><img src={cart} /></Badge>) : (<img src={cart} />)} Корзина</Nav.Link>{' '}
              <Nav.Link className="d-flex justify-content-center flex-wrap"><img src={prof} />Войти</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container className='smth sticky-top' ></Container>
      </Navbar>


        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contacts" element={<Contacts />}></Route>
          <Route exact path="/sales" element={<Catalog />}></Route>
          <Route exact path="/partnership" element={<Partnership />}></Route>
          <Route exact path="/brands" element={<Brands />}></Route>
          <Route exact path="/promotions" element={<Promotions />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Cart" element={<Cart />}></Route>
        </Routes>



    </>
  )
}
