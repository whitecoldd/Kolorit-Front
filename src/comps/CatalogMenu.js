import React from 'react'
import { Accordion, Container, InputGroup, Form, Button, Nav, Navbar, Image } from 'react-bootstrap'
import { Box, Slider, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
function valuetext(value) {
    return `${value}`;
}
const CatalogMenu = ({setQuery, value, setValue, handleChange, handleInput, handleFilter})  => {
    const {t} = useTranslation()
  return (
    <>
        <Container id='flex1' className='catalog-menu m-0'>
                    <Accordion className='catalog-acc'>
                        <Accordion.Item>
                            <Accordion.Header>{t('avail')}</Accordion.Header>
                            <Accordion.Body name='availability' onChange={handleFilter}>
                                <InputGroup>
                                    <InputGroup.Checkbox></InputGroup.Checkbox>
                                    <InputGroup.Text>{t('inuse')}</InputGroup.Text>
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Checkbox></InputGroup.Checkbox>
                                    <InputGroup.Text>{t('avail')}</InputGroup.Text>
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Checkbox></InputGroup.Checkbox>
                                    <InputGroup.Text>{t('ordertom')}</InputGroup.Text>
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Checkbox></InputGroup.Checkbox>
                                    <InputGroup.Text>{t('later')}</InputGroup.Text>
                                </InputGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Header>{t('price')}</Accordion.Header>
                            <Accordion.Body>
                                <Box sx={{ width: 300 }}>
                                    <Slider
                                        sx={{ width: 200, backgroundColor: 'warning' }}
                                        valueLabelDisplay='Price range'
                                        value={value}
                                        onChange={handleChange}
                                        onInput={handleInput}
                                        min={0}
                                        max={40000}
                                        getAriaValueText={valuetext}
                                    />
                                </Box>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Header>{t('prods')}</Accordion.Header>
                            <Accordion.Body>
                                <InputGroup>
                                    <InputGroup.Checkbox></InputGroup.Checkbox>
                                    <InputGroup.Text>{t('allprods')}</InputGroup.Text>
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
                            <Accordion.Header>{t('wdt')}</Accordion.Header>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Header>{t('model')}</Accordion.Header>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Header>{t('wt')}</Accordion.Header>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Header>{t('el')}</Accordion.Header>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Header>{t('chargetype')}</Accordion.Header>
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