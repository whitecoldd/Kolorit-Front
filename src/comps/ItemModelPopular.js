import React, { useState } from 'react'
import { Container, Image, Button, Badge } from 'react-bootstrap'
import buy from '../assets/tocart.png'
import bought from '../assets/bought.png'

const  ItemModelPopular = (props) =>  {
  const { ItemPopular, onAdd, onRemove } = props;
  const [isAdded, setIsAdded] = useState(false);
  const onClickBuy = () => {
    setIsAdded(!isAdded);
    if (isAdded) {
      onRemove(ItemPopular.id);
    } else {
      onAdd(ItemPopular);
    }
  }
  console.log(ItemPopular)
  return (
    <>
        <Container className='d-flex flex-wrap align-items-start sales-prod p-2'>
          <Badge bg={ItemPopular.promoType}>{ItemPopular.promo}</Badge>
          <Container className='d-flex flex-column align-items-center'>
            <Image width='100%' height='100%' src={ItemPopular.img} ></Image>
            <b>{ItemPopular.name}</b>
            <Container className='d-flex align-items-center flex-nowrap'>
              <Container fluid className='d-flex flex-wrap '>
                <del>{ItemPopular.price}<small> {ItemPopular.currency}</small></del>
                <h4>{ItemPopular.salePrice} <small> {ItemPopular.currency}</small></h4>
              </Container>
              <Button variant='warning' onClick={onClickBuy} ><Image src={isAdded ? bought : buy}></Image></Button>
            </Container>
          </Container>
        </Container>
    </>
  )
}
export default ItemModelPopular