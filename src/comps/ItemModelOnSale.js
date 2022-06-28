import React, { Component } from 'react'
import { Container, Image, Button, Badge } from 'react-bootstrap'
import sale from '../assets/salesprod.png'
import buy from '../assets/tocart.png'
export default class ItemModelOnSale extends Component {
    render() {
        return (
            <>
                <Container className='d-flex flex-wrap align-items-start sales-prod p-2'>
                    <Badge bg='danger'>Скидка</Badge>
                    <Container className='d-flex flex-column align-items-center'>
                    <Image width='100%' height='100%' src={sale} ></Image>
                    <b>Дрель-шуруповерт Makita DHP484RFE</b>
                    <Container className='d-flex align-items-center flex-nowrap'>
                        <Container fluid className='d-flex flex-wrap '>
                            <del>2500<small> MDL</small></del>
                            <h4>2100 <small> MDL</small></h4>
                        </Container>
                        <Button variant='warning'><Image src={buy}></Image></Button>
                    </Container>
                    </Container>
                </Container>
            </>
        )
    }
}
