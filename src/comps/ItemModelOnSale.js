import React, { useState } from 'react'
import { Container, Image, Button, Badge } from 'react-bootstrap'
import buy from '../assets/tocart.png'
import bought from '../assets/bought.png'

const ItemModelOnSale = (props) => {
    const { ItemOnSale, onAdd, onRemove } = props;
    const [isAdded, setIsAdded] = useState(false);
    const onClickBuy = () => {
        setIsAdded(!isAdded);
        if (isAdded) {
            onRemove(ItemOnSale.id);
        } else {
            onAdd(ItemOnSale);
        }
    }
    return (
        <>
                <Container key={ItemOnSale.id} className='d-flex flex-wrap align-items-start sales-prod p-2 me-4 ms-4 mt-2 mb-2 w-25'>
                    <Badge bg={ItemOnSale.promoType}>{ItemOnSale.promo}</Badge>
                    <Container className='d-flex flex-column align-items-center'>
                        <Image width='100%' height='100%' src={ItemOnSale.img} ></Image>
                        <b>{ItemOnSale.name}</b>
                        <Container className='d-flex align-items-center flex-nowrap'>
                            <Container fluid className='d-flex flex-wrap '>
                                <del>{ItemOnSale.price}<small> {ItemOnSale.currency}</small></del>
                                <h4>{ItemOnSale.salePrice} <small> {ItemOnSale.currency}</small></h4>
                            </Container>
                            <Button variant='warning' onClick={onClickBuy}> <Image src={isAdded ? bought : buy}></Image></Button>
                        </Container>
                    </Container>
                </Container>
        </>
    )
}
export default ItemModelOnSale
