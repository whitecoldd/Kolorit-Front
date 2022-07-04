import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import promo from '../assets/promo.png'

const PromosDisplay = () => {
    return (
        <Row className='d-flex justify-content-center'>
            <Col sm={3} className="promos d-flex flex-wrap align-content-start me-3">
                <Image fluid src={promo}></Image>
                <Container>
                    <h1 className='pt-1'>Весенние скидки на любой вид древесины до 80%</h1>
                    <p>Наш стротельный магазин объявляет о начале акции в честь весенних праздников, акция действует в перид  01.02.2000 - 02,03,2000 </p>
                </Container>
            </Col>
            <Col sm={3} className="promos d-flex flex-wrap align-content-start me-3">
                <Image fluid src={promo}></Image>
                <Container>
                    <h1 className='pt-1'>Весенние скидки на любой вид древесины до 80%</h1>
                    <p>Наш стротельный магазин объявляет о начале акции в честь весенних праздников, акция действует в перид  01.02.2000 - 02,03,2000 </p>
                </Container>
            </Col>
            <Col sm={3} className="promos d-flex flex-wrap align-content-start me-3">
                <Image fluid src={promo}></Image>
                <Container>
                    <h1 className='pt-1'>Весенние скидки на любой вид древесины до 80%</h1>
                    <p>Наш стротельный магазин объявляет о начале акции в честь весенних праздников, акция действует в перид  01.02.2000 - 02,03,2000 </p>
                </Container>
            </Col>
            <Col sm={3} className="promos d-flex flex-wrap align-content-start me-3">
                <Image fluid src={promo}></Image>
                <Container>
                    <h1 className='pt-1'>Весенние скидки на любой вид древесины до 80%</h1>
                    <p>Наш стротельный магазин объявляет о начале акции в честь весенних праздников, акция действует в перид  01.02.2000 - 02,03,2000 </p>
                </Container>
            </Col>
        </Row>
    )
}

export default PromosDisplay