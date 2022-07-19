import { Container, Tab, Nav, Image, Table } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import orderbox from '../assets/orderbox.png'
import bigprof from '../assets/bigprof.png'
import heart from '../assets/heart.png'
import profcart from '../assets/profcart.png'
import { ProfileMenu } from '../comps/ProfileMenu'
import { userRequest } from '../requests/request'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Orders = () => {
    const [Items, setItems] = useState([])
    const user = useSelector((state) => state.user.currentUser)
    const email = useSelector((state) => state.user.currentUser.email)
    const phone = useSelector((state) => state.user.currentUser.phone)
    const firstname = useSelector((state) => state.user.currentUser.fname)
    const lastname = useSelector((state) => state.user.currentUser.lname)
    const username = useSelector((state) => state.user.currentUser.username)
    const id = useSelector((state) => state.user.currentUser._id)
    useEffect(() => {
        const getItems = async () => {
            try {
                const res = await userRequest.get(`/order/find/${id}`)
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
                                    <Link to='/profileinfo'>     <Nav.Link className='menu-profile-text'>{item.subtitle1 || ''}</Nav.Link></Link>
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
                                {Items.map(item => (
                                    <Table striped hover className='tablenew p-3'>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Товар</th>
                                                <th>Дата</th>
                                                <th>Цена</th>
                                                <th>Статус</th>
                                                <th>.</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                <th>{item._id}</th>
                                                <th>{item.delType}</th>
                                                <th>{date}</th>
                                                <th>{item.productId[0].price} {item.productId[0].currency}</th>
                                                <th>{item.status}</th>
                                                <Link to={`/order/${item._id}`}>
                                                    <th>&#8594;</th>
                                                </Link>
                                        </tbody>
                                    </Table>
                                ))}
                            </Container>
                        </Tab.Content>
                    </Container>
                </Tab.Container>
            </Container >
        </>
    )
}

export default Orders