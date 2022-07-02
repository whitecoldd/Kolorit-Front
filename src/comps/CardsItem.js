import React, { Component } from 'react'
import { Container, Image, Row, Col} from 'react-bootstrap'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
export default class CardsItem extends Component {
    render() {
        return (
            <Container>
                <Row className='d-flex justify-content-evenly mt-5'>
                    <Col sm={3} className="card me-2">
                        <Image width='20%' height='auto' className='pb-3' src={card1}></Image>
                        <h1>Гарантия</h1>
                        <p>Официальные поставки</p>
                    </Col>
                    <Col sm={3} className="card me-2">
                        <Image width='20%' height='auto' className='pb-3' src={card2}></Image>
                        <h1>Более 100 000</h1>
                        <p>Наименований товаров</p>
                    </Col>
                    <Col sm={3} className="card me-2">
                        <Image width='20%' height='auto' className='pb-3' src={card3}></Image>
                        <h1>Доставка</h1>
                        <p>Доставка по всей Гагаузии</p>
                    </Col>
                    <Col sm={3} className="card me-2">
                        <Image width='20%' height='auto' className='pb-1' src={card4}></Image>
                        <h1>Оплата</h1>
                        <p>Любые способы</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
