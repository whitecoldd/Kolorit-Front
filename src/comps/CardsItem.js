import React, { Component } from 'react'
import { Container, Image, Row, Col} from 'react-bootstrap'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import {useTranslation} from 'react-i18next'
export default function CardsItem (){
    const {t} = useTranslation()
        return (
            <Container>
                <Row className='d-flex justify-content-evenly mt-5'>
                    <Col sm={3} className="card me-2">
                        <Image width='20%' height='auto' className='pb-3' src={card1}></Image>
                        <h1>{t('card1')}</h1>
                        <p>{t('card1/1')}</p>
                    </Col>
                    <Col sm={3} className="card me-2">
                        <Image width='20%' height='auto' className='pb-3' src={card2}></Image>
                        <h1>{t('card2')}</h1>
                        <p>{t('card2/1')}</p>
                    </Col>
                    <Col sm={3} className="card me-2">
                        <Image width='20%' height='auto' className='pb-3' src={card3}></Image>
                        <h1>{t('card3')}</h1>
                        <p>{t('card3/1')}</p>
                    </Col>
                    <Col sm={3} className="card me-2">
                        <Image width='20%' height='auto' className='pb-1' src={card4}></Image>
                        <h1>{t('card4')}</h1>
                        <p>{t('card4/1')}</p>
                    </Col>
                </Row>
            </Container>
        )
}
