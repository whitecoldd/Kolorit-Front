import React from 'react'
import { Container, Breadcrumb } from 'react-bootstrap'
import sale from '../assets/salesprod.png'

export default function Cart(props) {
  const { cartItems = [], onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + shippingPrice;
  return (
    <>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/"><strong>Г</strong>лавная</Breadcrumb.Item>
          <Breadcrumb.Item active><mark>Корзина</mark></Breadcrumb.Item>
        </Breadcrumb>
        <h1>Корзина</h1>
        <Container className='cart-cont'>
          <div>
            {cartItems.length === 0 && <div>Корзина пуста</div>}
            {cartItems.map((item) => (
              <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                  <button onClick={() => onRemove(item)} className="remove">
                    -
                  </button>{' '}
                  <button onClick={() => onAdd(item)} className="add">
                    +
                  </button>
                </div>

                <div className="col-2 text-right">
                  {item.qty} x ${item.price.toFixed(2)}
                </div>
              </div>
            ))}

            {cartItems.length !== 0 && (
              <>
                <hr></hr>
                <div className="row">
                  <div className="col-2">Items Price</div>
                  <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                  <div className="col-2">Shipping Price</div>
                  <div className="col-1 text-right">
                    ${shippingPrice.toFixed(2)}
                  </div>
                </div>

                <div className="row">
                  <div className="col-2">
                    <strong>Total Price</strong>
                  </div>
                  <div className="col-1 text-right">
                    <strong>${totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <button onClick={() => alert('Implement Checkout!')}>
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </Container>
      </Container>
    </>
  )
}
