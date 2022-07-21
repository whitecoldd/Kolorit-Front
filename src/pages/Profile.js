import { Container, Tab, Nav, Image } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import orderbox from '../assets/orderbox.png'
import bigprof from '../assets/bigprof.png'
import heart from '../assets/heart.png'
import profcart from '../assets/profcart.png'
import { ProfileMenu } from '../comps/ProfileMenu'
import { userRequest } from '../requests/request'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Profile = () => {
  const [Items, setItems] = useState([])
  const user = useSelector((state)=> state.user.currentUser)
  const email = useSelector((state)=> state.user.currentUser.email)
  const phone = useSelector((state)=> state.user.currentUser.phone)
  const firstname = useSelector((state)=> state.user.currentUser.firstname)
  const lastname = useSelector((state)=> state.user.currentUser.lastname)
  const username = useSelector((state)=> state.user.currentUser.username)
  const id = useSelector((state)=> state.user.currentUser._id)
  const {t} = useTranslation()

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
              <Container className='menu-profile-ext'>
                <h1 className='pad'>{t('self')}</h1>
                <Container className='d-flex'>

                  <Container>

                    <Container className='box'>
                      <h3>{t('acorder')}</h3>
                      <h5 className='gray'>{t('noorder')}</h5>
                      <Link className='no-dec' to='/orders'>{t('more')} &gt; </Link>
                      <Image className='box-pic' src={orderbox}></Image>
                    </Container>
                    <Container className='box'>
                      <h3>{t('self')}</h3>
                      {/* {user && Items?.map((user) => (
                        <> */}
                          <Container className='no-pad'>
                            <p className='black'>{username}</p>
                            <p className='black'>{phone}</p>
                            <p className='black'>{email}</p>
                          </Container>
                        {/* </>
                      ))} */}
                      <a className='no-dec' href='/'>{t('change')} &gt; </a>
                      <Image className='box-pic' src={bigprof}></Image>
                    </Container>
                  </Container>
                  <Container>
                    <Container className='box'>
                      <h3>{t('mycart')}</h3>
                      <h5 className='gray'>{t('emptycart')}</h5>
                      <a className='no-dec' href='/'>{t('tocart')} &gt; </a>
                      <Image className='box-pic' src={profcart}></Image>
                    </Container>
                    <Container className='box'>
                      <h3></h3>
                      <h5 className='gray'>{t('noprod')}</h5>
                      <Container className='no-pad'>
                      </Container>
                      <a className='no-dec' href='/'>{t('gofav')} &gt; </a>
                      <Image className='box-pic' src={heart}></Image>
                    </Container>
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