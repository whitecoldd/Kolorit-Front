import React, { useState, useEffect } from 'react'
import { Accordion, Container, Form, Button, Nav, Navbar, Image } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';
import type1 from '../assets/type1.png'
import type2 from '../assets/type2.png'
import CatalogMenu from '../comps/CatalogMenu';
import ItemModelNew from '../comps/ItemModelNew';
import ItemModelOnSale from '../comps/ItemModelOnSale';
import ItemModelPopular from '../comps/ItemModelPopular';
import AppPagination from '../comps/AppPagination';

const CatalogClass = ({ onAdd, onRemoveFromPage }) => {
    const items = [...Array(90).keys()]
    const [currentItems, setCurrentItems] = useState([]);
    const [Items, setItems] = useState([])
    return (
        <>
            <Container className='d-flex align-items-start mb-3'>
                <CatalogMenu></CatalogMenu>
                <Container id='flex2' className='d-flex flex-wrap'>
                    <Container>
                        <Navbar collapseOnSelect expand="lg" bg="light" className='d-flex flex-column align-items-stretch low-nav' variant='dark'>
                            <Container className='nav-fix'>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-between'>
                                    <Nav className=''>
                                        <Nav.Link className='black'>Сортировать по: </Nav.Link>
                                        <Nav.Link className='black'>Цена </Nav.Link>
                                        <Nav.Link className='black'>Популярность </Nav.Link>
                                        <Nav.Link className='black'>Скидка </Nav.Link>
                                    </Nav>
                                    <Nav className=''>
                                        <Nav.Link> <Image src={type1}></Image></Nav.Link>
                                        <Nav.Link><Image src={type2}></Image></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Container>
                    <Container>
                        <Container className='d-flex flex-wrap mt-2 justify-content-center'>
                            {Items && Items.map((Items) => (
                                <ItemModelOnSale Items={Items} key={Items.id} onAdd={() => onAdd(Items)} onRemoveFromPage={() => onRemoveFromPage(Items.id)} ></ItemModelOnSale>
                            ))}
                        </Container>
                        <AppPagination setItems={(item) => setItems(item)} ></AppPagination>
                    </Container>
                </Container>

            </Container>
        </>
    )
}

export default CatalogClass