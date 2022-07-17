import React, { useState, useEffect } from 'react'
import { Container, Row, Image, Col, Button, Badge } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import minus from '../assets/minus.png'
import plus from '../assets/plus.png'
import ItemModel from '../comps/ItemModel'
import { publicRequest } from '../requests/request';
const SingleProduct = ({ decreaseQty, onAdd, onRemoveFromPage }) => {
    
    const location = useLocation()
    const id = location.pathname.split('/')[3]
    const [items, setitems] = useState({})
    const [Items, setItems] = useState([])
    useEffect(() => {
        const getItems = async () => {
            try {
                const res = await publicRequest.get('/items/find/' + id)
                setitems(res.data)
            } catch {

            }
        }
        getItems()
    }, [id])
    useEffect(() => {
        const getItems = async () => {
          try {
            const res = await publicRequest.get("/items/find");
            setItems(res.data);
          } catch { }
        };
        getItems();
      }, []);
      const [first, setfirst] = useState(0)
    return (
        <>
            <Container>
                            <>
                                <h1>{items.name}</h1>
                                <Container className='d-flex'>
                                    <Container id='flex1' key={items.id} className='single-prod-img m-1 d-flex align-items-center'>
                                        <Row>
                                            <Col className='d-flex align-items-center' sm={12}>
                                                <Image width={300} src={items.img}></Image>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <Container id='flex3' className='sell-board single-prod-img d-flex m-1 pb-5 pt-5'>
                                        <Container>
                                            <p>Категория: <span className='orange fatund'>{items.category}</span></p>
                                            <p>{items.availability}</p>
                                            <Container className=''>
                                                <p className='smth d-flex justify-content-between'>{items.char1}<span className='orange'>{items.char1a}</span></p>
                                                <p className='smth d-flex justify-content-between'>{items.char2}<span className='orange'>{items.char2a}</span></p>
                                                <p className='smth d-flex justify-content-between'>{items.char3}<span className='orange'>{items.char3a}</span></p>
                                                <p className='smth d-flex justify-content-between'>{items.char4}<span className='orange'>{items.char4a}</span></p>
                                            </Container>
                                        </Container>
                                        <Container className='buy-box pb-3'>
                                            <Container className='d-flex flex-column align-items-start pt-4'>

                                                <del className='gray'>{items.price} {items.currency}</del>

                                                <span className='orange position-relative'><span className='big bold orange'>{items.salePrice}</span> {items.currency} <Badge className='new-pos' bg='secondary'>Экономия <span className='orange'>{items.price - items.salePrice} {items.currency}</span></Badge></span>
                                            </Container>
                                            <Container className='d-flex smth p-2 pb-5'>
                                                <Button variant='outline-warning' onClick={() => {onAdd(items); setfirst(first+1)}} ><span>Добавить в корзину</span></Button>
                                                <Container className='d-flex scale'>
                                                    <button className='desCart me-2' onClick={() => {decreaseQty(items); setfirst(first-1)}}>
                                                        <Image src={minus} ></Image>
                                                    </button>
                                                    <Container className='qtyCart d-flex me-2'>
                                                        <h1 className='qtyCartText' >{first}</h1>
                                                    </Container>
                                                    <button className='incCart' onClick={() => {onAdd(items); setfirst(first+1)}}>
                                                        <Image src={plus} ></Image>
                                                    </button>
                                                </Container>
                                            </Container>
                                            <Container className='d-flex align-items-center justify-content-around pt-5 '>
                                                <span className='small pe-3'>от {items.salePrice / 10} {items.currency} / в месяц</span>
                                                <Button className='p-2 ps-3 pe-3' variant='secondary'>Купить в кредит</Button>
                                            </Container>
                                        </Container>
                                    </Container>
                                </Container>
                                <Container className='d-flex'>
                                    <Container className='single-prod-img p-2 m-1'>
                                        <h2 className='ps-3 bold'>Характеристики</h2>
                                        <Container className='sell-board '>
                                            <p className='smth d-flex justify-content-between'>{items.char1}<span className='orange'>{items.char1a}</span></p>
                                            <p className='smth d-flex justify-content-between'>{items.char2}<span className='orange'>{items.char2a}</span></p>
                                            <p className='smth d-flex justify-content-between'>{items.char3}<span className='orange'>{items.char3a}</span></p>
                                            <p className='smth d-flex justify-content-between'>{items.char4}<span className='orange'>{items.char4a}</span></p>
                                        </Container>
                                    </Container>
                                    <Container className='single-prod-img p-2 sell-board m-1'>
                                        <h2 className='ps-4 bold'>Описание</h2>
                                        <p className='p-4'>{items.description}</p>
                                    </Container>
                                </Container>
                                <Container >
                                    <Container className='single-prod-img p-2 sell-board mt-3'>
                                        <h2 className='ps-4 bold' >Дополнительная информация</h2>
                                        <Container className='d-flex'>
                                            <Container className=''>
                                                <h6 className='bold'>Производитель: </h6>
                                                <p> {items.brandCountry} - родина бренда</p>
                                                <p> {items.originalCountry} - страна производитель</p>
                                            </Container>
                                            <Container className=''>
                                                <h6 className='bold'>Комплектация: </h6>
                                                <p>{items.complect}</p>
                                            </Container>
                                            <Container >
                                                <h6 className='bold'>Информация об упаковке : </h6>
                                                <Container className=''>
                                                    <p>Единица товара : {items.singleProd} </p>
                                                    <p>Вес (кг) : {items.weight} </p>
                                                    <p>Длина (мм) : {items.length} </p>
                                                    <p>Ширина (мм) : {items.width} </p>
                                                    <p>Высота (мм) : {items.height} </p>
                                                </Container>
                                            </Container>
                                        </Container>
                                    </Container>
                                </Container>

                            </>




            </Container>
            <Container fluid className='bg-gray mt-5 pb-5'>
                <Container>
                    <b className='pt-4 pb-4 mt-2'><h1 className='bold pt-4'>С этим покупают</h1></b>
                    <Container className='d-flex mt-2 '>
                        {Items?.slice(0,5).map((Items) => {
                                return <ItemModel key={Items.id} Items={Items} onAdd={() => onAdd(Items)} onRemoveFromPage={() => onRemoveFromPage(Items._id)}></ItemModel>
                        })}
                    </Container>
                </Container>
            </Container>
        </>
    )
}

export default SingleProduct