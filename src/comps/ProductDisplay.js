import React, { useState, useEffect } from 'react'
import { Image, Nav } from 'react-bootstrap'
import { publicRequest } from '../requests/request'

const ProductDisplay = () => {
  const [Items, setItems] = useState([])
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await publicRequest.get("/cat/find");
        setItems(res.data);
      } catch { }
    };
    getItems();
  }, []);
  return (
    <>
      {
        Items?.map(Items =>
          <Nav.Link className='stuff d-flex flex-wrap justify-content-center mb-4  me-1' type='button' eventKey='1'>
            <Image width={120} height={140} src={Items.img}></Image>
            <p className='bulb-text'>{Items.name}</p>
          </Nav.Link>
        )
      }
    </>
  )
}

export default ProductDisplay