import React from 'react'
import { Accordion, Container, InputGroup, Form, Button, Nav, Navbar, Image } from 'react-bootstrap'
import { Box, Slider, Typography } from '@mui/material'
function valuetext(value) {
    return `${value}`;
}
const CatalogMenu = ({setQuery, value, setValue, handleChange, handleInput, handleFilter})  => {

  return (
    <>
        <Container id='flex1' className='catalog-menu m-0'>
                    <Accordion className='catalog-acc'>
                        <Accordion.Item>
                            <Accordion.Header>Наличие в магазинах</Accordion.Header>
                            <Accordion.Body name='availability' onChange={handleFilter}>
                                <InputGroup>
                                    <InputGroup.Checkbox></InputGroup.Checkbox>
                                    <InputGroup.Text>В наличии</InputGroup.Text>
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Checkbox></InputGroup.Checkbox>
                                    <InputGroup.Text>Наличие в магазинах</InputGroup.Text>
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Checkbox></InputGroup.Checkbox>
                                    <InputGroup.Text>Под заказ : завтра</InputGroup.Text>
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Checkbox></InputGroup.Checkbox>
                                    <InputGroup.Text>Под заказ : позже</InputGroup.Text>
                                </InputGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Header>Цена</Accordion.Header>
                            <Accordion.Body>
                                <Box sx={{ width: 300 }}>
                                    <Slider
                                        sx={{ width: 200, backgroundColor: 'warning' }}
                                        getAriaLabel={() => 'Price range'}
                                        value={value}
                                        onChange={handleChange}
                                        onInput={handleInput}
                                        valueLabelDisplay="auto"
                                        min={100}
                                        max={40000}
                                        getAriaValueText={valuetext}
                                    />
                                </Box>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Header>Производители</Accordion.Header>
                            <Accordion.Body>
                                <InputGroup>
                                    <InputGroup.Checkbox></InputGroup.Checkbox>
                                    <InputGroup.Text>Все производители</InputGroup.Text>
                                </InputGroup>
                                <InputGroup>
                                    <Form.Control
                                        placeholder="Поиск..."
                                        id='search'
                                        aria-label="Search"
                                        onChange={(e)=>setQuery(e.target.value)}
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Checkbox></InputGroup.Checkbox>
                                    <InputGroup.Text>Bosch</InputGroup.Text>
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Checkbox></InputGroup.Checkbox>
                                    <InputGroup.Text>Machita</InputGroup.Text>
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Checkbox></InputGroup.Checkbox>
                                    <InputGroup.Text>Kaufland</InputGroup.Text>
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Checkbox></InputGroup.Checkbox>
                                    <InputGroup.Text>Karcher</InputGroup.Text>
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Checkbox></InputGroup.Checkbox>
                                    <InputGroup.Text>Lenovo</InputGroup.Text>
                                </InputGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Header>Ширина (см)</Accordion.Header>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Header>Модель</Accordion.Header>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Header>Масса</Accordion.Header>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Header>Крутящий момент</Accordion.Header>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Header>Тип питания</Accordion.Header>
                        </Accordion.Item>
                    </Accordion>
                    <Container className='d-flex justify-content-center pt-1 pb-3'>
                        <Button variant='outline-dark' className='catalog-menu-bttn'>Сбросить</Button>
                    </Container>
                </Container>
    </>
  )
}

export default CatalogMenu