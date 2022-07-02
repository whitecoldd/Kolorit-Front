import React from 'react'
import { Nav } from 'react-bootstrap'

const MenuItemsDisplay = ({ item }) => {
    return (
            <Nav.Item className='d-flex align-items-center' type='button'>
                <img src={item.img} />
                <Nav.Link className='nav-fix menu-item' eventKey={item.id} >{item.title}</Nav.Link>
            </Nav.Item>
    )
}

export default MenuItemsDisplay