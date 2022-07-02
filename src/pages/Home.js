import React, { Component } from 'react'
import { Nav, Container, Image, Button, Row, Col, Tab, Badge } from 'react-bootstrap'
import { MenuItems } from '../comps/MenuItems'
import MenuItemsDisplay from '../comps/MenuItemsDisplay'
import slider from '../assets/slider.png'
import sale from '../assets/salesprod.png'
import buy from '../assets/tocart.png'
import promo from '../assets/promo.png'
import tick1 from '../assets/tick1.png'
import tick2 from '../assets/tick2.png'
import tick3 from '../assets/tick3.png'
import tick4 from '../assets/tick4.png'
import { Products } from '../comps/Products'
import ItemModelOnSale from '../comps/ItemModelOnSale'
import ItemModelPopular from '../comps/ItemModelPopular'
import {Items} from '../comps/Items'
import ItemModelNew from '../comps/ItemModelNew'
import ProductDisplay from '../comps/ProductDisplay'
import Marquee from "react-fast-marquee";
import CardsItem from '../comps/CardsItem'
import { useState } from 'react'
import MenuOpenItemDisplay from '../comps/MenuOpenItemDisplay'
import Countdown from 'react-countdown'

export default function Home(props) {
  const { ItemNew, ItemPopular, ItemOnSale } = Items;
  const [cartItems, setCartItems] = useState([]); 
  const onAdd = (item) => {
    setCartItems((prev)=> [...prev, item]);

  };
  const onRemove = (id) => {
    setCartItems((prev)=>prev.filter(item => item.id !== id));
  };
  console.log(cartItems)
  return (
    <>
      <Container className="d-flex">
        <Tab.Container>
          <Container className='menu mt-3'>
            <Nav className='d-flex flex-column p-2'>
              {MenuItems.map((item) => (
                <MenuItemsDisplay item={item} key={item.id} ></MenuItemsDisplay>
              ))}
            </Nav>
          </Container>
          <Tab.Content>
            <Tab.Pane eventKey='1' >
              <Container className='menu-open p-3'>
                <h1>Спецодежда и СИЗ</h1>
                <Container className='d-flex pb-3'>
                  <MenuOpenItemDisplay></MenuOpenItemDisplay>
                  <MenuOpenItemDisplay></MenuOpenItemDisplay>
                  <MenuOpenItemDisplay></MenuOpenItemDisplay>
                  <MenuOpenItemDisplay></MenuOpenItemDisplay>
                  <MenuOpenItemDisplay></MenuOpenItemDisplay>
                </Container>
                <Container className='d-flex pb-3'>
                  <MenuOpenItemDisplay></MenuOpenItemDisplay>
                  <MenuOpenItemDisplay></MenuOpenItemDisplay>
                  <MenuOpenItemDisplay></MenuOpenItemDisplay>
                  <MenuOpenItemDisplay></MenuOpenItemDisplay>
                  <MenuOpenItemDisplay></MenuOpenItemDisplay>
                </Container>
              </Container>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
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
          <Countdown date={Date.now() + 1000000000} />
        </Container>
      </Container>
      <Container fluid className='d-flex flex-nowrap flex-column sales-prod-carousel'>
        <Container className='d-flex flex-wrap justify-content-start'>
          <b className='pt-4 pb-4'><h1><strong>Т</strong>овары со скидкой</h1></b>
          <Container className='d-flex mt-2 '>
            {ItemOnSale.map((item) => (
              <ItemModelOnSale item={item} key={item.id} onClickAdd={onAdd} ></ItemModelOnSale>
            ))}
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
          <b className='pt-4 pb-4'><h1>Популярные товары</h1></b>
          <Container className='d-flex mt-2 '>
            {ItemPopular.map((obj) => (
              <ItemModelPopular key={obj.id} item={obj} onAdd={(item)=>onAdd(item)}  onRemove={(item)=>onRemove(item)}></ItemModelPopular>
            ))}
          </Container>
        </Container>
        <Container className='d-flex flex-wrap justify-content-center mt-5 mb-3'>
          <Button variant='outline-warning' className='bttn-low'>Больше товаров</Button>
        </Container>
      </Container>
      <CardsItem></CardsItem>
      <Container fluid className='d-flex flex-nowrap flex-column'>
        <Container className='d-flex flex-wrap justify-content-start'>
          <b className='pt-5 pb-2'><h1>Новинки</h1></b>
          <Container className='d-flex mt-2 '>
            {ItemNew.map((item) => (
              <ItemModelNew item={item} key={item.id} onAdd={onAdd} ></ItemModelNew>
            ))}
          </Container>
        </Container>
        <Container className='d-flex flex-wrap justify-content-center mt-5 mb-3'>
          <Button variant='outline-warning' className='bttn-low'>Больше товаров</Button>
        </Container>
      </Container>
      <Container fluid>
        <Marquee className='track mt-4 mb-5'>
          <Image width='80%' height='80%' src={tick1} ></Image>
          <Image width='80%' height='80%' src={tick2} ></Image>
          <Image width='80%' height='80%' src={tick3} ></Image>
          <Image width='80%' height='80%' src={tick4} ></Image>
          <Image width='80%' height='80%' src={tick1} ></Image>
          <Image width='80%' height='80%' src={tick2} ></Image>
          <Image width='80%' height='80%' src={tick3} ></Image>
          <Image width='80%' height='80%' src={tick4} ></Image>
          <Image width='80%' height='80%' src={tick1} ></Image>
          <Image width='80%' height='80%' src={tick2} ></Image>
          <Image width='80%' height='80%' src={tick3} ></Image>
          <Image width='80%' height='80%' src={tick4} ></Image>
          <Image width='80%' height='80%' src={tick1} ></Image>
          <Image width='80%' height='80%' src={tick2} ></Image>
          <Image width='80%' height='80%' src={tick3} ></Image>
          <Image width='80%' height='80%' src={tick4} ></Image>
        </Marquee>
      </Container>
    </>
  )
}

