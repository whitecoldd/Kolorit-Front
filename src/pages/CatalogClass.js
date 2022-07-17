import React, { useState, useEffect } from 'react'
import { Accordion, Container, Form, Button, Nav, Navbar, Image } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import type1 from '../assets/type1.png'
import type2 from '../assets/type2.png'
import CatalogMenu from '../comps/CatalogMenu';
import ItemModel from '../comps/ItemModel';
import AppPagination from '../comps/AppPagination';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from 'axios'
const CatalogClass = ({ onAdd, onRemoveFromPage, removeFromCompare, addToCompare, selectedItems }) => {
    const items = [...Array(90).keys()]
    const [Items, setItems] = useState([])
    const [query, setQuery] = useState('')
    const [sorting, setSorting] = useState()
    const [sortingS, setSSorting] = useState()
    const [sortingP, setPSorting] = useState()
    const [state, setState] = useState("ASC")
    const [sale, setSale] = useState("w")

    const handleSort = () => {
        setSorting(!sorting)
        if (state === "ASC") {
            const sorted = [...Items].sort((a, b) => a.salePrice > b.salePrice ? 1 : -1)
            setItems(sorted)
            setState("DESC")
        } else if (state === "DESC") {
            const sorted = [...Items].sort((a, b) => a.salePrice < b.salePrice ? 1 : -1)
            setItems(sorted)
            setState("ASC")
        }
    }
    const handleSale = () => {
        setSSorting(!sortingS)
        if (sale === "w") {
            const sortedS = [...Items].sort((a) => a.promoType == "danger" ? 1 : -1)
            setItems(sortedS)
            setSale("w/o")
        } else if (sale === "w/o") {
            const sortedS = [...Items].sort((a) => a.promoType !== "danger" ? 1 : -1)
            setItems(sortedS)
            setSale("w")
        }
    }

    const handlePop = () => {
        setPSorting(!sortingP)
    }

    const [value, setValue] = useState([0, 40000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleInput = (e) => {
        setValue(e.target.value);
    }
    const location = useLocation()
    const category = location.pathname.split('/')[2]
    const [filter, setFilter] = useState({})
    const handleFilter =(e) =>{
        const value = e.target.value
        setFilter({
            ...filter,
            [e.target.brand] : value,
        })
    }
    useEffect(() => {
        const getItems = async ()=>{
          try {
            const res = await axios.get(category ? `http://localhost:1000/api/items/find?category=${category}` : `http://localhost:1000/api/items/find`)
            setItems(res.data)
          } catch (e) {
            
          }
        } 
        getItems()
      }, [category])

    return (
        <>
            <Container className='d-flex align-items-start mb-3'>
                <CatalogMenu handleFilter={handleFilter} filter={filter} setFilter={setFilter} query={query} setQuery={setQuery} value={value} setValue={setValue} handleChange={handleChange} handleInput={handleInput}></CatalogMenu>
                <Container id='flex2' className='d-flex flex-wrap'>
                    <Container>
                        <Navbar collapseOnSelect expand="lg" bg="light" className='d-flex flex-column align-items-stretch low-nav' variant='dark'>
                            <Container className='nav-fix'>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-between'>
                                    <Nav className=''>
                                        <Nav.Link className='black'>Сортировать по: </Nav.Link>
                                        <Nav.Link onClick={handleSort} className='black'>Цена {sorting ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </Nav.Link>
                                        <Nav.Link onClick={handlePop} className='black'>Популярность {sortingP ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </Nav.Link>
                                        <Nav.Link onClick={handleSale} className='black'>Скидка {sortingS ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} </Nav.Link>
                                    </Nav>
                                    <Nav className=''>
                                        <Nav.Link> <Image src={type1}></Image></Nav.Link>
                                        <Nav.Link><Image src={type2}></Image></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Container>
                    <Container className='d-flex flex-wrap justify-content-start'>
                        {Items
                            .filter(Items => Items.name.toLowerCase().includes(query))
                            .filter(Items => Items.salePrice > parseInt(value, 10))
                            .map((Items) => (
                                <ItemModel Items={Items} key={Items.id} addToCompare={addToCompare} removeFromCompare={removeFromCompare} selectedItems={selectedItems} onAdd={() => onAdd(Items)} onRemoveFromPage={() => onRemoveFromPage(Items._id)} ></ItemModel>))
                        }
                    </Container>
                    <Container className='d-flex justify-content-center'>
                        <AppPagination setItems={(item) => setItems(item)} Items={Items} pageSize={10}></AppPagination>
                    </Container>
                </Container>

            </Container>
        </>
    )
}

export default CatalogClass