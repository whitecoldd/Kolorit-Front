import React, {useState, useEffect} from 'react'
import { Container, Row, Image, Col, Button, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import minus from '../assets/minus.png'
import plus from '../assets/plus.png'
import ItemModelPopular from '../comps/ItemModelPopular'
import {publicReq} from '../requests/request';
const SingleProduct = ({ Items, decreaseQty, onAdd, onRemoveFromPage }) => {
    // const [item, setItem] = useState({})
    // useEffect(() => {
    //     const getItem = async () => {
    //         try {
    //             const res = await publicReq.get('/items/find/' + id)
    //             setItem(res.data)
    //         } catch {

    //         }
    //     }
    //     getItem()
    // }, [id])
    return (
        <>
            <Container>
                {Items.map((Items) => {
                    if (Items.id === 1) {
                        return (
                            <>
                                <h1>{Items.name}</h1>
                                <Container className='d-flex'>
                                    <Container id='flex1' key={Items.id} className='single-prod-img m-1 d-flex align-items-center'>
                                        <Row>
                                            <Col sm={2} className='d-flex flex-column '>
                                                <Image width={75} src={Items.img}></Image>
                                                <Image width={75} src={Items.img}></Image>
                                                <Image width={75} src={Items.img}></Image>
                                                <Image width={75} src={Items.img}></Image>
                                            </Col>
                                            <Col className='d-flex align-items-center' sm={10}>
                                                <Image width={300} src={Items.img}></Image>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <Container id='flex3' className='sell-board single-prod-img d-flex m-1 pb-5 pt-5'>
                                        <Container>
                                            <p>Категория: <span className='orange fatund'>{Items.category}</span></p>
                                            <p>{Items.availability}</p>
                                            <Container className=''>
                                                <p className='smth d-flex justify-content-between'>Max крутящий момент : <span className='orange'>{Items.torque}</span></p>
                                                <p className='smth d-flex justify-content-between'>Тип аккумулятора : <span className='orange'>{Items.battery_type}</span></p>
                                                <p className='smth d-flex justify-content-between'>Напряжение аккумулятора : <span className='orange'>{Items.voltage}</span></p>
                                                <p className='smth d-flex justify-content-between'>Max диаметр сверления (металл) : <span className='orange'>{Items.drill_diameter_steel}</span></p>
                                                <p className='smth d-flex justify-content-between'>Мах диаметр сверления (дерево) : <span className='orange'>{Items.drill_diameter_wood}</span></p>
                                            </Container>
                                        </Container>
                                        <Container height={300} className='buy-box'>
                                            <Container className='d-flex flex-column align-items-start pt-4'>

                                                <del className='gray'>{Items.price} {Items.currency}</del>

                                                <span className='orange position-relative'><span className='big bold orange'>{Items.salePrice}</span> {Items.currency} <Badge className='new-pos' bg='secondary'>Экономия <span className='orange'>{Items.price - Items.salePrice} {Items.currency}</span></Badge></span>
                                            </Container>
                                            <Container className='d-flex smth p-2 pb-5'>
                                                <Button variant='outline-warning' onClick={() => onAdd(Items)} ><span>Добавить в корзину</span></Button>
                                                <Container className='d-flex scale'>
                                                    <button className='desCart me-2' onClick={() => decreaseQty(Items)}>
                                                        <Image src={minus} ></Image>
                                                    </button>
                                                    <Container className='qtyCart d-flex me-2'>
                                                        <h1 className='qtyCartText' >{Items.qty}</h1>
                                                    </Container>
                                                    <button className='incCart' onClick={() => onAdd(Items)}>
                                                        <Image src={plus} ></Image>
                                                    </button>
                                                </Container>
                                            </Container>
                                            <Container className='d-flex align-items-center justify-content-around pt-5 '>
                                                <span className='small pe-3'>от {Items.salePrice / 10} {Items.currency} / в месяц</span>
                                                <Button className='p-2 ps-3 pe-3' variant='secondary'>Купить в кредит</Button>
                                            </Container>
                                        </Container>
                                    </Container>
                                </Container>
                                <Container className='d-flex'>
                                    <Container className='single-prod-img p-2 m-1'>
                                        <h2 className='ps-3 bold'>Характеристики</h2>
                                        <Container className='sell-board '>
                                            <p className='smth d-flex justify-content-between'>Max крутящий момент : <span className='orange'>{Items.torque}</span></p>
                                            <p className='smth d-flex justify-content-between'>Тип аккумулятора : <span className='orange'>{Items.battery_type}</span></p>
                                            <p className='smth d-flex justify-content-between'>Напряжение аккумулятора : <span className='orange'>{Items.voltage}</span></p>
                                            <p className='smth d-flex justify-content-between'>Max диаметр сверления (металл) : <span className='orange'>{Items.drill_diameter_steel}</span></p>
                                            <p className='smth d-flex justify-content-between'>Мах диаметр сверления (дерево) : <span className='orange'>{Items.drill_diameter_wood}</span></p>
                                            <p className='smth d-flex justify-content-between'>Тип аккумулятора : <span className='orange'>{Items.battery_type}</span></p>
                                            <p className='smth d-flex justify-content-between'>Напряжение аккумулятора : <span className='orange'>{Items.voltage}</span></p>
                                            <p className='smth d-flex justify-content-between'>Max диаметр сверления (металл) : <span className='orange'>{Items.drill_diameter_steel}</span></p>
                                            <p className='smth d-flex justify-content-between'>Мах диаметр сверления (дерево) : <span className='orange'>{Items.drill_diameter_wood}</span></p>
                                        </Container>
                                    </Container>
                                    <Container className='single-prod-img p-2 sell-board m-1'>
                                        <h2 className='ps-4 bold'>Описание</h2>
                                        <p className='p-4'>{Items.description}</p>
                                    </Container>
                                </Container>
                                <Container >
                                    <Container className='single-prod-img p-2 sell-board mt-3'>
                                        <h2 className='ps-4 bold' >Дополнительная информация</h2>
                                        <Container className='d-flex'>
                                            <Container className=''>
                                                <h6 className='bold'>Производитель: </h6>
                                                <p><Image src={Items.producer_flag}></Image> {Items.producer} - родина бренда</p>
                                                <p><Image src={Items.producer_flag}></Image> {Items.producer} - страна производитель</p>
                                            </Container>
                                            <Container className=''>
                                                <h6 className='bold'>Комплектация: </h6>
                                                <ul>
                                                    <li><p>{Items.complect}</p></li>
                                                    <li><p>{Items.complect}</p></li>
                                                    <li><p>{Items.complect}</p></li>
                                                    <li><p>{Items.complect}</p></li>
                                                    <li><p>{Items.complect}</p></li>
                                                </ul>
                                            </Container>
                                            <Container >
                                                <h6 className='bold'>Информация об упаковке : </h6>
                                                <Container className=''>
                                                    <p>Единица товара : {Items.product_single} </p>
                                                    <p>Вес (кг) : {Items.weight} </p>
                                                    <p>Длина (мм) : {Items.length} </p>
                                                    <p>Ширина (мм) : {Items.width} </p>
                                                    <p>Высота (мм) : {Items.height} </p>
                                                </Container>
                                            </Container>
                                        </Container>
                                    </Container>
                                </Container>

                            </>
                        )
                    }
                })}




            </Container>
            <Container fluid className='bg-gray mt-5 pb-5'>
                <Container>
                    <b className='pt-4 pb-4 mt-2'><h1 className='bold pt-4'>С этим покупают</h1></b>
                    <Container className='d-flex mt-2 '>
                        {Items.map((Items) => {
                            if (Items.type === 3) {
                                return <ItemModelPopular key={Items.id} Items={Items} onAdd={() => onAdd(Items)} onRemoveFromPage={() => onRemoveFromPage(Items.id)}></ItemModelPopular>
                            }
                        })}
                    </Container>
                </Container>
            </Container>
        </>
    )
}

export default SingleProduct