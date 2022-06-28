import React from 'react'
import { Image, Nav } from 'react-bootstrap'

const ProductDisplay = ({ item }) => {
  return (
      <Nav.Link className='stuff d-flex flex-wrap justify-content-center mb-4  me-1'>
        <Image width='85%' height='75%' src={item.img}></Image>
        <p className='bulb-text'>{item.title}</p>
      </Nav.Link>
  )
}

export default ProductDisplay