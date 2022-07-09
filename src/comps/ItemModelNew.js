import React, { useState } from 'react'
import { Container, Image, Button, Badge } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import buy from '../assets/tocart.png'
import bought from '../assets/bought.png'

const ItemModelNew = (props) => {
    const { Items, onAdd, onRemoveFromPage } = props;
    const [isAdded, setIsAdded] = useState(false);
    const onClickBuy = () => {
        setIsAdded(!isAdded);
        if (isAdded) {
            onRemoveFromPage(Items.id);
        } else {
            onAdd(Items);
        }
    }
    return (
        <>
                <Container key={Items.id} className='d-flex flex-wrap align-items-start mt-2 mb-2 sales-prod m-1 p-2 w-25'>
                    <Badge bg={Items.promoType}>{Items.promo}</Badge>
                    <Container className='d-flex flex-column align-items-center'>
                    <Link to={`/catalog/catalogclass/${Items.id}`}><Image width='100%' height='100%' src={Items.img} ></Image>
                        </Link>
                        <b>{Items.name}</b>
                        <Container className='d-flex align-items-center flex-nowrap'>
                            <Container fluid className='d-flex flex-wrap '>
                                <del>{Items.price}<small> {Items.currency}</small></del>
                                <h4>{Items.salePrice} <small> {Items.currency}</small></h4>
                            </Container>
                            <Button variant='warning' onClick={onClickBuy}><Image src={isAdded ? bought : buy}></Image></Button>
                        </Container>
                    </Container>
                </Container>
        </>
    )
}
export default ItemModelNew