import React, { useState, useEffect } from 'react'
import { Container, Form, ButtonGroup, ToggleButton, Button, Image, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import phone from '../assets/phone.png'
import address from '../assets/address.png'
import clock from '../assets/clock.png'
import { useSelector } from 'react-redux'
import { userRequest, publicRequest } from '../requests/request'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const ProcessOrder = ({ cartItems }) => {
    const [inputs, setInputs] = useState({})
    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    
    const admin = useSelector((state) => state.user.currentUser);
    const userId = useSelector((state) => state.user.currentUser._id)
    const productId = cartItems
    const quantity = cartItems.length
    const order = { ...inputs, userId:userId ,productId: productId, quantity: quantity }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await userRequest.post(`/order/`, order)
            console.log(res.data)
        } catch (e) {
            console.log(e)
        }
    }
    const [select, setSelect] = useState('delivery')
    const [text, setText] = useState()
    const [Items, setItems] = useState([])
    useEffect(() => {
        const getItems = async () => {
            try {
                const res = await publicRequest.get(`/contact/find`)
                setItems(res.data)
            } catch (e) {
                console.log(e)
            }
        }
        getItems()
    }, [])
    
    const handleSelect = (event) => {
        setSelect(event.target.value)
        console.log(select)
        if (select === 'delivery') {

            setText(<>
                {Items?.slice(0,1).map((item) => (
                    <Container>
                        <Container className='content-cont d-flex mt-5'>
                            <Image fluid src={item.img}></Image>
                            <Container className='p-4'>
                                <h1 className='p-3'>{item.name}</h1>
                                <Container className='d-flex align-items-start'>
                                    <Image width='auto' height='auto' src={phone}></Image>
                                    <Container className='d-flex flex-column align-items-start'>
                                        <h3>Телефон</h3>
                                        <p>{item.phone}</p>
                                    </Container>
                                </Container>
                                <Container className='d-flex align-items-start'>
                                    <Image width='auto' height='auto' src={address}></Image>
                                    <Container name='address' className='d-flex flex-column align-items-start mb-3'>
                                        <h3>Адресс</h3>
                                        <p name='address'>{item.address}</p>
                                        <a href='#map' type='button' className='bttn-map'>Как добраться?</a>
                                    </Container>
                                </Container>
                                <Container className='d-flex align-items-start'>
                                    <Image width='auto' height='auto' src={clock}></Image>
                                    <Container className='d-flex flex-column align-items-start'>
                                        <h3><span>Г</span>рафик работы</h3>
                                        <Container className='d-flex align-items-start'>
                                            <Container className='text-center linevert'>
                                                <p>Пн. - Сб.</p>
                                                <p>{item.workHours} </p>
                                            </Container>
                                            <Container className='text-center'>
                                                <p>Вс.</p>
                                                <p>  {item.workHoursH}  </p>
                                            </Container>
                                        </Container>
                                    </Container>
                                </Container>
                            </Container>
                        </Container>
                    </Container>
                ))}
            </>)
            return text
        } else if (select === 'pick-up') {

            setText(<>
                
                    <Form.Group className="mb-3 pe-3 " id="formprocess" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" name='address' placeholder="Адрес" onChange={handleChange} />
                    </Form.Group>
            </>)
            return text
        }
    }
    return (
        <>
            <Container>
                <Form >
                    <Container className='d-flex align-items-baseline p-0'>
                    <h1>Оформление заказа</h1>    {cartItems.length} товаров
                    </Container>

                    <h2>Данные покупателя</h2>

                    <Container className='d-flex justify-content-start forming w-30'>
                        <label className='me-2'>Юридическое лицо</label>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Физическое лицо"
                            onChange={handleChange}
                        />
                    </Container>

                    <Form.Control type='hidden' name='userId' value={admin._id} />
                    <Form.Control type='hidden' name='productId' value={[cartItems.id]} />
                    <Form.Control type='hidden' name='quantity' value={cartItems.length} />
                    {admin ? ''
                        : <>
                            <h4 className='forming1 mt-3 mb-4 black bold'> Есть аккаунт ? <Link to='/login' className='orange bold' >Войти</Link> <ArrowForwardIosIcon /> </h4>
                            <Container className='d-flex '>
                                <Form.Group className="mb-3 pe-3 " id="formprocess" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" name='username' placeholder="Имя пользователя" onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 pe-3 " id="formprocess" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control type="text" name='phone' placeholder='Телефон' onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3 pe-3 " id="formprocess" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control type="email" name='email' placeholder='E-mail (необязательно)' onChange={handleChange} />
                                </Form.Group>
                            </Container>
                        </>
                    }

                    <h2 >Способ получения</h2>

                    <Form.Select name='delType' value={select} aria-label="Default select example" onChange={(e) => {handleSelect(e); handleChange(e)}}>
                        <option value="pick-up">Самовывоз из магазина</option>
                        <option value="delivery">Доставка</option>
                    </Form.Select>
                    <Container className='mt-4'>{text}</Container>

                    <h2 className='mt-5'>Способ оплаты</h2>

                    <Form.Select name='payment' className='mb-3' aria-label="Default select example" onChange={handleChange}>
                        <option value="transaction">Банковский перевод</option>
                        <option value="online-payment">Онлайн</option>
                        <option value="credit">Кредит</option>
                        <option value="cash">Наличными</option>
                    </Form.Select>

                    <button  onClick={handleSubmit} className='bttn-cart mb-3'  >Подтвердить заказ</button>
                </Form>
            </Container>
        </>
    )
}

export default ProcessOrder