import React from 'react'
import { Container, Col, Image, Breadcrumb } from 'react-bootstrap'
import { Categories } from '../comps/Categories'
import PromosDisplay from '../comps/PromosDisplay'
import CatalogClass from './CatalogClass'
export default function Catalog() {
  return (
    <>

      <Container>
        <Breadcrumb className='mt-3'>
          <Breadcrumb.Item href="/"><strong>Г</strong>лавная</Breadcrumb.Item>
          <Breadcrumb.Item href="/">Каталог</Breadcrumb.Item>
          <Breadcrumb.Item active><mark>Электроинструменты</mark></Breadcrumb.Item>
        </Breadcrumb>
        <h1 className='bold mb-5'>Электроинструменты</h1>
      </Container>
      <Container className='d-flex flex-wrap justify-content-center no-pad mb-5'>

        {Categories.map(item =>
          <Col className='big-margin mt-2 mb-3' sm={1.5}>
            <a className='real-no-dec' href='/catalogclass'><Container className='catalog-card d-flex flex-column align-items-center pt-4 mb-3'>
              <Image  width='80%' height='80%' src={item.img}></Image>
              <h4 className='bold text-uppercase black mt-2'>{item.title}</h4>
            </Container></a>
          </Col>
        )}
      </Container>


      <Container >
      <h2 className='bold pt-4 pb-4'>Акции и предложения</h2>
        <PromosDisplay></PromosDisplay>
      </Container>
    </>
  )
}

