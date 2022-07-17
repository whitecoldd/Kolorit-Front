import React, {useState, useEffect} from 'react'
import { Container, Col, Image, Breadcrumb } from 'react-bootstrap'
import { Categories } from '../comps/Categories'
import PromosDisplay from '../comps/PromosDisplay'
import { Link } from 'react-router-dom'
import CatalogClass from './CatalogClass'
import { publicRequest } from '../requests/request'

export default function Catalog() {
  const [Items, setItems] = useState([])
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await publicRequest.get("/cat/find");
        setItems(res.data);
      } catch { }
    };
    getItems();
  }, []);
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

        {Items?.map(item =>
          <Col className='big-margin mt-2 mb-3 w-21 ' sm={1.5}>
            <Link className='real-no-dec ' to={`/catalog/${item.name}`}><Container className=' h-50p catalog-card d-flex flex-column align-items-center pt-4 mb-3'>
              <Image  width='80%' height='80%' src={item.img}></Image>
              <h6 className='bold text-uppercase black mt-2'>{item.name}</h6>
            </Container></Link>
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

