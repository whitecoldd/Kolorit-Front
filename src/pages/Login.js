import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Form, Button } from 'react-bootstrap'
import { login } from '../redux/apiCalls'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history=useNavigate()
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        try {
            login(dispatch, { username, password });
            history('/profile')
        }
        catch (e) {
            console.log(e)
        }
    };
    return (
        <>
            <Container>
                <h1>Вход</h1>
                <Form className="d-flex flex-column align-items-center">
                    <Form.Group className="mb-3 d-flex flex-wrap  w-50" controlId="exampleForm.ControlInput1">
                        <Form.Label>Имя пользователя</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex flex-wrap  w-50" controlId="exampleForm.ControlInput1">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="********" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button onClick={handleClick} disabled={isFetching} className='bttn-cart mb-3'>Войти в Аккаунт</Button>
                    <Link to='/register'><h2 className='black real-no-dec'>Регистрация</h2></Link>
                </Form>
                {error && <h2>Something went wrong...</h2>}
                
            </Container>
        </>
    )
}

export default Login