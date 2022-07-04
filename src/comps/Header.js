import React from 'react'
import { Container, Nav, Navbar, Form } from 'react-bootstrap'
import logo from '../assets/nav-logo.png'
import phone from '../assets/phone.png'
import com from '../assets/com.png'
import prof from '../assets/prof.png'
import cart from '../assets/cart.png'
import Badge from '@mui/material/Badge'
const Header = (props) => {
    const { cartItems } = props;
    return (
        <>
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
                        <Nav.Link href='/cart' className="d-flex justify-content-center flex-wrap"> {cartItems.length !== 0 ? (<Badge badgeContent={cartItems.length} color="secondary"><img src={cart} /></Badge>) : (<img src={cart} />)} Корзина</Nav.Link>
                        <Nav.Link href='/profile' className="d-flex justify-content-center flex-wrap"><img src={prof} />Войти</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container className='smth sticky-top' ></Container>
        </>
    )
}

export default Header