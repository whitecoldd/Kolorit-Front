import React from 'react'
import { Container, Breadcrumb, Image, Button, Row, Col } from 'react-bootstrap'
import minus from '../assets/minus.png'
import plus from '../assets/plus.png'
import trash from '../assets/trash.png'
export default function Cart(props) {
  const { cartItems, onAdd, onRemove, decreaseQty } = props;
  const totalPrice = cartItems.reduce((salePrice, item) => salePrice + item.qty * item.salePrice, 0)
  return (
    <>
      <Container >
        <Row className='d-flex'>
          <Col sm={8}>
            <Container>
              <Breadcrumb>
                <Breadcrumb.Item href="/"><strong>Г</strong>лавная</Breadcrumb.Item>
                <Breadcrumb.Item active><mark>Корзина</mark></Breadcrumb.Item>
              </Breadcrumb>
              <h1>Корзина</h1>
              <Container className='mt-4 cart-cont'>
                {cartItems.length === 0 && <h1 className=' product p-3'>Корзина пуста</h1>}
                {cartItems.map((item) => {
                  const productQty = item.salePrice * item.qty

                  return (
                    <>
                      <Container className='d-flex '>
                        <Container className='p-0'>
                          <Container className='d-flex ps-0 cart-card pt-3' key={item.id}>
                            <div className='img'>
                              <img width={100} height={100} src={item.img} alt='' />
                            </div>
                            <Container className='d-flex p-0 flex-column justify-content-between'>
                              <div className='cart-details'>
                                <h3>{item.name}</h3>
                              </div>
                              <div>
                                <h5 className='black'>Код: {item.code}</h5>
                              </div>
                            </Container>
                            <Container className='d-flex check align-items-baseline'>
                              <Container className='d-flex flex-wrap align-items-center'>
                                <Container className='d-flex scale'>
                                  <button className='desCart me-2' onClick={() => decreaseQty(item)}>
                                    <Image src={minus} ></Image>
                                  </button>
                                  <Container className='qtyCart d-flex me-2'>
                                    <h1 className='qtyCartText' >{item.qty}</h1>
                                  </Container>
                                  <button className='incCart' onClick={() => onAdd(item)}>
                                    <Image src={plus} ></Image>
                                  </button>
                                </Container>
                                <Container className='d-flex justify-content-center'>
                                  <h5 className='black'>{item.salePrice} mdl/шт.</h5>
                                </Container>
                              </Container>
                              <Container className='d-flex flex-wrap'>
                                <Container>
                                  <h2 className='total-price'>{productQty} <span className='orange'>MDL</span></h2>
                                </Container>
                                <Container className='removeCart p-3'>
                                  <button className='removeCart'>
                                    <Image src={trash} onClick={() => onRemove(item)}></Image>
                                  </button>
                                </Container>
                              </Container>
                            </Container>
                          </Container>
                          <Container className='smth'></Container>
                        </Container>
                      </Container>
                    </>
                  )
                })}

              </Container>
            </Container>
          </Col>
          <Col sm={4}>
            <Container className='cart-total p-4'>
              <h2 className='total-price'>Вы выбрали товар ценой в {totalPrice}</h2>
              <h2 className='total-price'>Доставка</h2>
              <h2 className='total-price'>Итого {totalPrice}</h2>
              <Container className='smth'></Container>
              <Container className='d-flex flex-column p-3'>
                <Button variant='warning' className='bttn-cart'>Оформить заказ</Button>
                <input className='mt-4' id='cartsearch' placeholder='Введите промокод'></input>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}
