import React, { Component } from 'react'
import { Nav, Container, Image, Button, Row, Col } from 'react-bootstrap'
import { MenuItems } from '../comps/MenuItems'
import MenuItemsDisplay from '../comps/MenuItemsDisplay'
import slider from '../assets/slider.png'
import sale from '../assets/salesprod.png'
import buy from '../assets/tocart.png'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import promo from '../assets/promo.png'
import { Products } from '../comps/Products'
import ItemModel from '../comps/ItemModelOnSale'
import ItemModel1 from '../comps/ItemModelNew'
import ProductDisplay from '../comps/ProductDisplay'
export default class Home extends Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 1000 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  }


  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <>
        <Container className="d-flex">
          <Container className='menu mt-3'>
            <Nav className='d-flex flex-column p-2'>
              {MenuItems.map((item) => (
                <MenuItemsDisplay item={item} key={item.id} ></MenuItemsDisplay>
              ))}
            </Nav>
          </Container>
          <Container className='me-1 mt-3 main-img position-relative'>
            <Image width='100%' height='95%' src={slider}></Image>
            <h2 className='pic-text position-absolute'>Строй Материалы</h2>
            <p className='pic-text-lower position-absolute'>Наш магазин предлагает строительный материал, который Вы собираетесь покупать, не только предложит своему потенциальному покупателю большой выбор всевозможных стройматерилов, но и предоставит бесплатную консультацию по каждому из них.</p>
            <Button type='submit' className="bttn position-absolute btn-warning" aria-pressed="false">Перейти к каталогу</Button>
          </Container>
        </Container>
        <Container className='mt-5'>
          <Container className='d-flex flex-wrap justify-content-between prod-cont'>
            {Products.map((item) => (
              <ProductDisplay item={item} key={item.id} ></ProductDisplay>
            ))}
          </Container>
          <Container className='d-flex flex-wrap justify-content-center sales-prod p-3'>
            <h3><b>Т</b>овар дня :</h3>
            <Image width='100%' height='100%' src={sale} ></Image>
            <b>Дрель-шуруповерт Makita DHP484RFE</b>
            <Container className='d-flex align-items-center'>
              <Container>
                <del>2500<small> MDL</small></del>
                <h4>2100 <small> MDL</small></h4>
              </Container>
              <Button variant='warning'><Image src={buy}></Image></Button>
            </Container>
            <p> {this.state.time.m} : {this.state.time.m} : {this.state.time.s}</p>
          </Container>
        </Container>
        <Container fluid className='d-flex flex-nowrap flex-column sales-prod-carousel'>
          <Container className='d-flex flex-wrap justify-content-start'>
            <b  className='pt-4 pb-4'><h1><strong>Т</strong>овары со скидкой</h1></b>
            <Container className='d-flex mt-2 '>
              <ItemModel></ItemModel>
              <ItemModel></ItemModel>
              <ItemModel></ItemModel>
              <ItemModel></ItemModel>
              <ItemModel></ItemModel>
            </Container>
          </Container>
          <Container className='d-flex flex-wrap justify-content-center mt-5 mb-3'>
            <Button variant='outline-warning' className='bttn-low'>Больше товаров</Button>
          </Container>
        </Container>
        <Container>
          <h1 className='pt-4 pb-4'>Акции и предложения</h1>
          <Container>
            <Row>
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
            <Container className='d-flex flex-wrap justify-content-center mt-5 mb-3'>
              <Button variant='outline-warning' className='bttn-low'>Все Акции</Button>
            </Container>
          </Container>
        </Container>
        <Container fluid className='d-flex flex-nowrap flex-column sales-prod-carousel'>
          <Container className='d-flex flex-wrap justify-content-start'>
            <b  className='pt-4 pb-4'><h1><strong>Т</strong>овары со скидкой</h1></b>
            <Container className='d-flex mt-2 '>
              <ItemModel></ItemModel>
              <ItemModel></ItemModel>
              <ItemModel></ItemModel>
              <ItemModel></ItemModel>
              <ItemModel1></ItemModel1>
            </Container>
          </Container>
          <Container className='d-flex flex-wrap justify-content-center mt-5 mb-3'>
            <Button variant='outline-warning' className='bttn-low'>Больше товаров</Button>
          </Container>
        </Container>
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
        <Container fluid className='d-flex flex-nowrap flex-column'>
          <Container className='d-flex flex-wrap justify-content-start'>
            <b  className='pt-5 pb-2'><h1>Новинки</h1></b>
            <Container className='d-flex mt-2 '>
              <ItemModel1></ItemModel1>
              <ItemModel1></ItemModel1>
              <ItemModel1></ItemModel1>
              <ItemModel1></ItemModel1>
              <ItemModel1></ItemModel1>
            </Container>
          </Container>
          <Container className='d-flex flex-wrap justify-content-center mt-5 mb-3'>
            <Button variant='outline-warning' className='bttn-low'>Больше товаров</Button>
          </Container>
        </Container>
      </>
    )
  }
}

