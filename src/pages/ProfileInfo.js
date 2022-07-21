import { Container, Tab, Nav, Image, Form } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import orderbox from '../assets/orderbox.png'
import bigprof from '../assets/bigprof.png'
import heart from '../assets/heart.png'
import profcart from '../assets/profcart.png'
import { ProfileMenu } from '../comps/ProfileMenu'
import { userRequest } from '../requests/request'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Profile = () => {
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
                const res = await userRequest.get(`/user/find/${id}`)
                setItems(res.data)
            } catch (e) {
                console.log(e)
            }
        }
        getItems()
    }, [id])
    const {t} = useTranslation()

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
                                <h1 className='ps-3'>{t('selfdata')}</h1>
                                <Container>
                                    <p className='gray'>{t('init')}</p>
                                    <h5 className='black'>{firstname} {lastname}</h5>
                                </Container>
                                <Container>
                                    <p className='gray'>E-mail</p>
                                    <h5 className='black'>{email}</h5>
                                </Container>
                                <Container>
                                    <p className='gray'>{t('phone')}</p>
                                    <h5 className='black'>{phone}</h5>
                                </Container>
                                <Container>
                                    <Form>
                                        <p className='gray'>{t('changepw')}</p>
                                        <Container className='d-flex'>
                                            <Form.Group>

                                                <Form.Control className='pe-2' placeholder='Старый пароль' />
                                            </Form.Group>
                                            <Form.Group>

                                                <Form.Control className='pe-2' placeholder='Новый пароль' />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Control className='bttn-cart' type='button' value='Сохранить' />
                                            </Form.Group>
                                        </Container>
                                    </Form>
                                    <Container className='mt-5'>
                                        <h4 className='gray'>&#10060; {t('delacc')}</h4>
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

export default Profile