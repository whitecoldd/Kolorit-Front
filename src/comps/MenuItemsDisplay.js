import React from 'react'
import { Nav } from 'react-bootstrap'

const MenuItemsDisplay = ({ item }) => {
    return (
            <Nav.Item className='d-flex align-items-center'>
                <img src={item.img} />
                <Nav.Link className='nav-fix'>{item.title}</Nav.Link>
            </Nav.Item>
    )
}

export default MenuItemsDisplay