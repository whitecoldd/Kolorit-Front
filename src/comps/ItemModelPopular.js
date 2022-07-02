import React, { useState } from 'react'
import { Container, Image, Button, Badge } from 'react-bootstrap'
import buy from '../assets/tocart.png'
import bought from '../assets/bought.png'



function ItemModelPopular (props) {
    const {item, onAdd, onRemove} = props;
    const [isAdded, setIsAdded] = useState(false);
    const onClickBuy = () =>{
        setIsAdded(!isAdded);
        if(isAdded){
            onRemove(item.id);
        }else{
            onAdd(item);
        }
    }
    return (
        <>
            <Container className='d-flex flex-wrap align-items-start sales-prod p-2'>
                <Badge bg={item.promoType}>{item.promo}</Badge>
                <Container className='d-flex flex-column align-items-center'>
                  <Image width='100%' height='100%' src={item.img} ></Image>
                  <b>{item.name}</b>
                  <Container className='d-flex align-items-center flex-nowrap'>
                    <Container fluid className='d-flex flex-wrap '>
                      <del>{item.price}<small> {item.currency}</small></del>
                      <h4>{item.salePrice} <small> {item.currency}</small></h4>
                    </Container>
                    <Button variant='warning' onClick ={onClickBuy} ><Image src={isAdded ? bought : buy}></Image></Button>
                  </Container>
                </Container>
              </Container>
        </>
    )
}
export default ItemModelPopular