import { Container, Tab, Nav, Image, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import orderbox from '../assets/orderbox.png'
import bigprof from '../assets/bigprof.png'
import heart from '../assets/heart.png'
import profcart from '../assets/profcart.png'
import { ProfileMenu } from '../comps/ProfileMenu'
import { userRequest } from '../requests/request'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import ItemModel from '../comps/ItemModel'

const Orders = () => {
    const [Items, setItems] = useState({})
    const user = useSelector((state) => state.user.currentUser)
    const email = useSelector((state) => state.user.currentUser.email)
    const phone = useSelector((state) => state.user.currentUser.phone)
    const firstname = useSelector((state) => state.user.currentUser.fname)
    const lastname = useSelector((state) => state.user.currentUser.lname)
    const username = useSelector((state) => state.user.currentUser.username)
    const id = useSelector((state) => state.user.currentUser._id)
    const location = useLocation()
    const _id = location.pathname.split('/')[2]

    useEffect(() => {
        const getItems = async () => {
            try {
                const res = await userRequest.get(`/order/${_id}`)
                setItems(res.data)
            } catch (e) {
                console.log(e)
            }
        }
        getItems()
    }, [id])
    let today = new Date();

    let date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
    return (
        <>
            <Container className='profile d-flex mb-3'>
                <Tab.Container defaultActiveKey='1'>
                    <Container className='menu-profile pt-3'>
                        <Nav className='d-flex flex-column'>
                            {ProfileMenu.map(item => (
                                <Nav.Item key={item.id} >
                                    <Container className='d-flex align-items-center prof-item'>
                                        <Image src={item.img}></Image>
                                        <Nav.Link eventKey={item.id} >{item.title}</Nav.Link>
                                    </Container>
                                    <Container className='d-flex flex-column prof-item'>
                                    <Link to='/profileinfo'><Nav.Link className='menu-profile-text'>{item.subtitle1 || ''}</Nav.Link></Link>
                                        <Nav.Link className='menu-profile-text'>{item.subtitle2 || ''}</Nav.Link>
                                        <Nav.Link className='menu-profile-text'>{item.subtitle3 || ''}</Nav.Link>
                                        <Nav.Link className='menu-profile-text'>{item.subtitle4 || ''}</Nav.Link>
                                    </Container>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </Container>
                    <Container>
                        <Tab.Content>
                            <Container className='menu-profile-ext ps-3'>
                                <Link to='/orders'><h1 className='ps-3'> &#60; Заказ №{Items._id}</h1></Link>
                                <Container className='d-flex justify-content-around'>
                                    <p className='smthg black'>Заказ принят</p>
                                    <p className='smthg black'>Заказ в обработке</p>
                                    <p className='smthg black'>Заказ доставлен</p>
                                </Container>

                                <Container className='smth'>

                                    {Items?.productId?.map(item =>
                                        <>
                                            <Container className='d-flex justify-content-between align-items-center w-75'>
                                                <img className='me-4' width={60} height={40} src={item.img}></img>
                                                <div className='me-4'><h5 className='black bold'>{item.name}</h5></div>
                                                <div className='me-4'><h5 className='black bold'>{item.salePrice} {item.currency}</h5></div>
                                            </Container>
                                        </>
                                    )}

                                </Container>
                                <Container className='d-flex'>
                                    <Container className='mt-3'>
                                        <p className='black'>Стоимость товаров {Items?.productId?.reduce((salePrice, item) => salePrice + item.qty * item.salePrice, 0)}</p>
                                        <p className='black'>Количество товаров {Items.quantity}</p>
                                        <p className='black'>Скидка 0</p>
                                        <p className='black'>Доставка 0</p>
                                        <h4 className='orange'>Итого {Items?.productId?.reduce((salePrice, item) => salePrice + item.qty * item.salePrice, 0)}</h4>
                                    </Container>
                                    <Container className='tablenew d-flex flex-column align-items-baseline mt-4'>
                                        <h3 className='black'>Детали заказа: </h3>
                                        <h4 className='black d-flex flex-column'>Адрес доставки <p className='black'>{Items.address}</p></h4>
                                        <h4 className='black d-flex flex-column'>Способ оплаты <p className='black'>{Items.payment}</p> </h4>
                                        <h4 className='black d-flex flex-column'>Контактная информация<p className='black'>{firstname} {lastname}</p>  {phone} {email}</h4>
                                        <Button variant='outline-warning'>Оплатить онлайн</Button>
                                    </Container>
                                </Container>



                            </Container>
                        </Tab.Content>
                    </Container>
                </Tab.Container>
            </Container >
        </>
    )
}

export default Orders