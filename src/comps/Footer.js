import React, { Component } from 'react'
import logo from '../assets/nav-logo.svg'
import fb from '../assets/fb.png'
import inst from '../assets/inst.png'
import tg from '../assets/tg.png'
import wa from '../assets/wa.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'
import Home from '../pages/Home'

export class Footer extends Component {
  render() {
    return (
      <>
        <Container fluid className='footer '>
          <Container className='d-flex footer-no' sticky='bottom'>
            <Container className='d-flex flex-column align-items-start pt-3 pb-5 me-5'>
              <a href='/'><Image src={logo} ></Image></a>
              <h4 className='mt-4 '>Оставайтесь на связи</h4>
              <h5 className='mt-3 lineup pt-3'>+373-79-559-663 , +373-68-112-889</h5>
              <p>Следите за новинками и акциями:</p>
              <input placeholder='Введите E-mail и подпишитесь' className='mt-3 mb-4 input-fix' id='e-mail'></input>
              <Container className='d-flex'>
                <Image className='icons-fix' src={fb}></Image>
                <Image className='icons-fix' src={inst}></Image>
                <Image className='icons-fix' src={tg}></Image>
                <Image className='icons-fix' src={wa}></Image>
              </Container>
            </Container>
            <Container className='footer-nav me-5'>
              <h4 className='linedown pb-4'>Покупателям</h4>
              <Container className='d-flex'>
                <Container>
                  <p>Каталог</p>
                  <p>Скидки</p>
                  <p>Товар дня</p>
                  <p>Стабилизаторы</p>
                  <p>Аксессуары</p>
                  <p>Хозтовары</p>
                  <p>Одежда и обувь</p>
                </Container>
                <Container>
                  <p>Освещение</p>
                  <p>Оборудование</p>
                  <p>Ручные инструменты</p>
                  <p>Бытовая техника</p>
                  <p>Кабель и провода</p>
                  <p>Генераторы </p>
                  <p>Выключатели</p>
                </Container>
              </Container>
            </Container>
            <Container className='footer-nav'>
              <h4 className='linedown pb-4'>Компания</h4>
              <Container className='fix-right' >
                <p>Адреса</p>
                <p>Контакты</p>
                <p>О Компании</p>
                <p>Партнерство</p>
                <p><strong>Г</strong>рафик работы</p>
                <p>Бренды</p>
                <p>Новости</p>
              </Container>
            </Container>
          </Container>
        </Container>




      </>
    )
  }
}

export default Footer