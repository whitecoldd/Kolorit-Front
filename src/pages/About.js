import React, { Component } from 'react'
import { Nav, Container, Image, Tab, Breadcrumb } from 'react-bootstrap'
import about from '../assets/about.png'
import playb from '../assets/playb.png'
import tab1 from '../assets/tab1.png'
import CardsItem from '../comps/CardsItem'

export default function About() {
  return (
    <>
      <Container className='mt-3'>
        <Breadcrumb>
          <Breadcrumb.Item href="/"><strong>Г</strong>лавная</Breadcrumb.Item>
          <Breadcrumb.Item active><mark>О Компании</mark></Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container className='d-flex flex-column'>
        <Container className='d-flex'>
          <Container className='d-flex flex-column about-text'>
            <h1>О Компании</h1>
            <h3>It is a long established fact that a reader will be distracted by the readable </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. Nunc velit orci, rhoncus eu tristique eget, efficitur sed diam. Suspendisse rhoncus finibus lacus, at porta felis venenatis sed. Nulla eget aliquam lacus, et pretium nunc. Morbi hendrerit, nisi mollis lacinia pulvinar, nisi mauris rhoncus risus, eget iaculis orci purus eget diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. Morbi hendrerit, nisi mollis lacinia pulvinar, nisi mauris rhoncus risus, eget iaculis orci purus eget diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. </p>
          </Container>
          <Container>
            <Image className='about-img' src={about} ></Image>
          </Container>
        </Container>
        <CardsItem></CardsItem>
        <Container className='video-el'>
          <button className='play-upper'>Смотреть Видео</button>
          <Image className='play-button' src={playb} type='button'></Image>
        </Container>
      </Container>
      <Container fluid className='tabs-cont mt-3 pt-3 pb-5'>
        <Container>
          <h1 className='story-text'>Наша история</h1>
          <Tab.Container className='tabs' defaultActiveKey='first'>
            <Nav variant="tabs" className="mt-2">
              <Nav.Item>
                <Nav.Link type="button" eventKey="first" >2008</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link type="button" eventKey="second" >2012</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link type="button" eventKey="third" >2016</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link type="button" eventKey="fourth" >2019</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link type="button" eventKey="fifth" >2022</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="mt-3">
              <Tab.Pane eventKey="first" >
                <Container className='d-flex'>
                  <img height='90%' width='80%' src={tab1} />
                  <Container>
                    <h1>Открытие первого магазина</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. Nunc velit orci, rhoncus eu tristique eget, efficitur sed diam. Suspendisse rhoncus finibus lacus, at porta felis venenatis sed. Nulla eget aliquam lacus, et pretium nunc. Morbi hendrerit, nisi mollis lacinia pulvinar, nisi mauris rhoncus risus, eget iaculis orci purus eget diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. Morbi hendrerit, nisi mollis lacinia pulvinar, nisi mauris rhoncus risus, eget iaculis orci purus eget diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. </p>
                  </Container>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="second" >
                <Container className='d-flex'>
                  <img height='90%' width='80%' src={tab1} />
                  <Container>
                    <h1>Открытие первого магазина</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. Nunc velit orci, rhoncus eu tristique eget, efficitur sed diam. Suspendisse rhoncus finibus lacus, at porta felis venenatis sed. Nulla eget aliquam lacus, et pretium nunc. Morbi hendrerit, nisi mollis lacinia pulvinar, nisi mauris rhoncus risus, eget iaculis orci purus eget diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. Morbi hendrerit, nisi mollis lacinia pulvinar, nisi mauris rhoncus risus, eget iaculis orci purus eget diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. </p>
                  </Container>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="third" >
                <Container className='d-flex'>
                  <img height='90%' width='80%' src={tab1} />
                  <Container>
                    <h1>Открытие первого магазина</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. Nunc velit orci, rhoncus eu tristique eget, efficitur sed diam. Suspendisse rhoncus finibus lacus, at porta felis venenatis sed. Nulla eget aliquam lacus, et pretium nunc. Morbi hendrerit, nisi mollis lacinia pulvinar, nisi mauris rhoncus risus, eget iaculis orci purus eget diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. Morbi hendrerit, nisi mollis lacinia pulvinar, nisi mauris rhoncus risus, eget iaculis orci purus eget diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. </p>
                  </Container>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth" >
                <Container className='d-flex'>
                  <img height='90%' width='80%' src={tab1} />
                  <Container>
                    <h1>Открытие первого магазина</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. Nunc velit orci, rhoncus eu tristique eget, efficitur sed diam. Suspendisse rhoncus finibus lacus, at porta felis venenatis sed. Nulla eget aliquam lacus, et pretium nunc. Morbi hendrerit, nisi mollis lacinia pulvinar, nisi mauris rhoncus risus, eget iaculis orci purus eget diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. Morbi hendrerit, nisi mollis lacinia pulvinar, nisi mauris rhoncus risus, eget iaculis orci purus eget diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. </p>
                  </Container>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth" >
                <Container className='d-flex'>
                  <img height='90%' width='80%' src={tab1} />
                  <Container>
                    <h1>Открытие первого магазина</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. Nunc velit orci, rhoncus eu tristique eget, efficitur sed diam. Suspendisse rhoncus finibus lacus, at porta felis venenatis sed. Nulla eget aliquam lacus, et pretium nunc. Morbi hendrerit, nisi mollis lacinia pulvinar, nisi mauris rhoncus risus, eget iaculis orci purus eget diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. Morbi hendrerit, nisi mollis lacinia pulvinar, nisi mauris rhoncus risus, eget iaculis orci purus eget diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat feugiat dapibus. </p>
                  </Container>
                </Container>
              </Tab.Pane>

            </Tab.Content>
          </Tab.Container>
        </Container>
      </Container>
    </>
  )
}
