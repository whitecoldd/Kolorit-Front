import React, { useState, useEffect } from 'react'
import { Container, Nav, Navbar, Form, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import qIcon from '../assets/question.png'
import flagR from '../assets/flag.png'
import logo from '../assets/nav-logo.svg'
import phone from '../assets/phone.png'
import com from '../assets/com.png'
import prof from '../assets/prof.png'
import cart from '../assets/cart.png'
import Badge from '@mui/material/Badge'
import MenuItemsDisplay from './MenuItemsDisplay'
import { useSelector } from 'react-redux'
import {Translate, Translator} from 'react-auto-translate'


const cacheProvider = {
  get: (language, key) =>
    ((JSON.parse(localStorage.getItem('translations')) || {})[key] || {})[
    language
    ],
  set: (language, key, value) => {
    const existing = JSON.parse(localStorage.getItem('translations')) || {
      [key]: {},
    };
    existing[key] = { ...existing[key], [language]: value };
    localStorage.setItem('translations', JSON.stringify(existing));
  },
};
export default function Navigation({ cartItems, selectedItems }) {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0)
  const [to, setTo] = useState('ro')

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, [])

  const listenToScroll = () => {
    let heightToHideFrom = 650;
    const winScroll = document.body.scrollTop ||
      document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll < heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  const user = useSelector((state) => state.user.currentUser)

  return (
    <>
      <Translator
        cacheProvider={cacheProvider}
        to={to}
        from="ru"
        googleApiKey='AIzaSyAo_daea7j8FnagO8UcXX7RDWqvJ4Yfq84'
      ></Translator>
      <Navbar expand='lg' collapseOnSelect className='d-flex flex-column align-items-stretch main-nav sticky-top'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark' className='nav-fix1 sticky-top'>
          <Container className='nav-fix' >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className='me-auto' >
                <Link className='nav-link white' to='/about'><Translate>О Компании</Translate></Link>
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
              {isVisible &&
                <NavDropdown className='navdrop me-0' aria-expanded='true' title={`Каталог`} id="basic-nav-dropdown">
                  <Container className='menu'>
                    <MenuItemsDisplay></MenuItemsDisplay>
                  </Container>
                </NavDropdown>
              }
              <Nav>
                <Nav.Item className='d-flex align-items-center m-2'><img src={phone} /><a className='black real-no-dec' href='tel:+37379559663'>+373&#x2212;79&#x2212;559&#x2212;663</a></Nav.Item>
              </Nav>
              <Form.Control
                placeholder="Поиск..."
                id='search'
                aria-label="Search"
              />
              <Nav>
                <Link to='/compare' className="d-flex justify-content-center flex-wrap nav-link">{selectedItems.length !== 0 ? (<Badge badgeContent={selectedItems.length} color="warning"><img src={com} /></Badge>) : (<img src={com} />)}Сравнить</Link>
                <Link to='/cart' className="d-flex justify-content-center flex-wrap nav-link"> {cartItems.length !== 0 ? (<Badge badgeContent={cartItems.length} color="warning"><img src={cart} /></Badge>) : (<img src={cart} />)} Корзина</Link>
                <Link to={user ? `/profile` : `/login`} className="d-flex justify-content-center flex-wrap nav-link"><img src={prof} />{user ? (<>Профиль</>) : (<>Войти</>)}</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className='smth sticky-top' ></Container>
      </Navbar>

    </>
  )
}
