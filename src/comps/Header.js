import React, { Component } from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import logo from '../assets/nav-logo.png'
import phone from '../assets/phone.png'
import com from '../assets/com.png'
import prof from '../assets/prof.png'
import cart from '../assets/cart.png'
import Badge from '@mui/material/Badge'
import Home from '../pages/Home'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar expand="md" className='nav-fix' >
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
                            className='form-fix'
                            placeholder="Поиск..."
                            id='search'
                            aria-label="Search"
                        />
                        <Nav>
                            <Nav.Link className="d-flex justify-content-center flex-wrap"><img src={com} />Сравнить</Nav.Link>
                            <Nav.Link className="d-flex justify-content-center flex-wrap"><Badge badgeContent={1} color="secondary"><img src={cart} /></Badge>Корзина</Nav.Link>
                            <Nav.Link className="d-flex justify-content-center flex-wrap"><img src={prof} />Войти</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Container className='smth' sticky='top'></Container>

                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                    </Routes>
                </Router>
            </>
        )
    }
}
