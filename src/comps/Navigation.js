import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import qIcon from '../assets/question.png'
import flagR from '../assets/flag.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from '../pages/About'
import Partnership from '../pages/Partnership'
import Sales from '../pages/Sales'
import Brands from '../pages/Brands'
import Contacts from '../pages/Contacts'
import Promotions from '../pages/Promotions'

export default class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" activeKey="/" className='nav-fix'>
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
                <Nav.Link className='font-fix'><strong>Г</strong>рафик работы</Nav.Link>
                <Nav.Link className='font-fix'><img src={flagR} /> Ru</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contacts" element={<Contacts/>}></Route>
            <Route exact path="/sales" element={<Sales/>}></Route>
            <Route exact path="/partnership" element={<Partnership/>}></Route>
            <Route exact path="/brands" element={<Brands/>}></Route>
            <Route exact path="/promotions" element={<Promotions/>}></Route>
          </Routes>
        </Router>



      </>
    )
  }
}
