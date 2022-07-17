import React, { useEffect, useState } from 'react'
import { Nav, Container, Image, Button, Row, Col, Tab, Badge } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { MenuItems } from '../comps/MenuItems'
import MenuItemsDisplay from '../comps/MenuItemsDisplay'
import slider from '../assets/slider.png'
import sale from '../assets/salesprod.png'
import buy from '../assets/tocart.png'
import tick1 from '../assets/tick1.png'
import tick2 from '../assets/tick2.png'
import tick3 from '../assets/tick3.png'
import tick4 from '../assets/tick4.png'
import { Products } from '../comps/Products'
import { Link } from 'react-router-dom'
import ItemModel from '../comps/ItemModel'
import ProductDisplay from '../comps/ProductDisplay'
import Marquee from "react-fast-marquee";
import CardsItem from '../comps/CardsItem'
import MenuOpenItemDisplay from '../comps/MenuOpenItemDisplay'
import Countdown from 'react-countdown'
import PromosDisplay from '../comps/PromosDisplay'
import axios from "axios"
import { publicRequest } from '../requests/request'
import AppPagination from '../comps/AppPagination'
import Slider from '../comps/Slider'
export default function Home(props) {
  const { onAdd, onRemoveFromPage, addToCompare, removeFromCompare, selectedItems } = props
  const location = useLocation()
  const [Items, setItems] = useState([])
  // const [prods, setProds] = useState([])
  console.log(location)

  useEffect(() => {
    const getItems = async ()=>{
      try {
        const res = await publicRequest.get(`/items/find?new=new`)
        setItems(res.data)
      } catch (e) {
        console.log(e)
      }
    } 
    getItems()
  }, [])

  // useEffect(() => {
  //   const getItems = async () => {
  //     try {
  //       const res = await publicRequest.get("/items/find");
  //       setProds(res.data);
  //     } catch { }
  //   };
  //   getItems();
  // }, []);
  // console.log(Items)
  return (
    <>
      <Container className="d-flex">
        <Tab.Container>
          <Container className='menu mt-3'>
            <Nav  className='d-flex flex-column p-2'>
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
        <Container className='me-1 mt-3'>
          <Slider/>
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
          <Countdown date={Date.now() + 86399000} />
        </Container>
      </Container>
      <Container fluid className='d-flex flex-nowrap flex-column sales-prod-carousel'>
        <Container className='d-flex flex-wrap justify-content-start'>
          <b className='pt-4 pb-4'><h1><strong>Т</strong>овары со скидкой</h1></b>
          <Container className='d-flex mt-2 justify-content-center items-list-handle'>
            {Items?.slice(0,5).map((Items) => {
              if(Items.promo === "Скидка"){
                return <ItemModel addToCompare={addToCompare} removeFromCompare={removeFromCompare} selectedItems={selectedItems} Items={Items} key={Items.id} onAdd={() => onAdd(Items)} onRemoveFromPage={() => onRemoveFromPage(Items._id)} ></ItemModel>
              }     
            })}
          </Container>
          {/* <Container className='d-flex justify-content-center'>
              <AppPagination Items={Items} setItems={(item) => setItems(item)} ></AppPagination>
            </Container> */}
        </Container>
        <Container className='d-flex flex-wrap justify-content-center mt-5 mb-3'>
        <Link type='button' to='/catalog' className='bttn-more'>Больше товаров</Link>
        </Container>
      </Container>
      <Container>
        <h1 className='pt-4 pb-4'>Акции и предложения</h1>
        <Container>
          <PromosDisplay></PromosDisplay>
          <Container className='d-flex flex-wrap justify-content-center mt-5 mb-3'>
            <Button variant='outline-warning' className='bttn-low'>Все Акции</Button>
          </Container>
        </Container>
      </Container>
      <Container fluid className='d-flex flex-nowrap flex-column sales-prod-carousel'>
        <Container className='d-flex flex-wrap justify-content-start'>
          <b className='pt-4 pb-4'><h1>Популярные товары</h1></b>
          <Container className='d-flex mt-2 justify-content-center items-list-handle'>
            {Items?.slice(0,5).map((Items) => {
              return <ItemModel addToCompare={addToCompare} removeFromCompare={removeFromCompare} selectedItems={selectedItems} Items={Items} key={Items.id} onAdd={() => onAdd(Items)} onRemoveFromPage={() => onRemoveFromPage(Items._id)} ></ItemModel>
            })}
            
          </Container>
          {/* <Container className='d-flex justify-content-center'>
              <AppPagination Items={Items} setItems={(item) => setItems(item)}  ></AppPagination>
            </Container> */}
        </Container>
        <Container className='d-flex flex-wrap justify-content-center mt-5 mb-3'>
        <Link type='button' to='/catalog' className='bttn-more'>Больше товаров</Link>
        </Container>
      </Container>
      <CardsItem></CardsItem>
      <Container fluid className='d-flex flex-nowrap flex-column sales-prod-carousel' style={{backgroundColor: '#FFF'}}>
        <Container className='d-flex flex-wrap justify-content-start'>
          <b className='pt-5 pb-2'><h1>Новинки</h1></b>
          <Container className='d-flex mt-2 justify-content-center items-list-handle'>
            {Items?.slice(0,5).map((Items) => {
              return <ItemModel addToCompare={addToCompare} removeFromCompare={removeFromCompare} selectedItems={selectedItems} Items={Items} key={Items.id} onAdd={() => onAdd(Items)} onRemoveFromPage={() => onRemoveFromPage(Items._id)} ></ItemModel>
            })}
            
          </Container>
          {/* <Container className='d-flex justify-content-center'>
              <AppPagination Items={Items} setItems={(Items) => setItems(Items)} ></AppPagination>
            </Container> */}
        </Container>
        <Container className='d-flex flex-wrap justify-content-center mt-5 mb-3'>
          <Link type='button' to='/catalog' className='bttn-more'>Больше товаров</Link>
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

