import React, { useState } from 'react'
import { Container, Image, Button, Badge } from 'react-bootstrap'
import buy from '../assets/tocart.png'
import bought from '../assets/bought.png'

const ItemModelNew = (props) => {
    const { ItemNew, onAdd, onRemove } = props;
    const [isAdded, setIsAdded] = useState(false);
    const onClickBuy = () => {
        setIsAdded(!isAdded);
        if (isAdded) {
            onRemove(ItemNew.id);
        } else {
            onAdd(ItemNew);
        }
    }
    return (
        <>
                <Container className='d-flex flex-wrap align-items-start sales-prod p-2'>
                    <Badge bg={ItemNew.promoType}>{ItemNew.promo}</Badge>
                    <Container className='d-flex flex-column align-items-center'>
                        <Image width='100%' height='100%' src={ItemNew.img} ></Image>
                        <b>{ItemNew.name}</b>
                        <Container className='d-flex align-items-center flex-nowrap'>
                            <Container fluid className='d-flex flex-wrap '>
                                <del>{ItemNew.price}<small> {ItemNew.currency}</small></del>
                                <h4>{ItemNew.salePrice} <small> {ItemNew.currency}</small></h4>
                            </Container>
                            <Button variant='warning' onClick={onClickBuy}><Image src={isAdded ? bought : buy}></Image></Button>
                        </Container>
                    </Container>
                </Container>
        </>
    )
}
export default ItemModelNew