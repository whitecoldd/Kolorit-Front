import React, { useState, useEffect } from 'react'
import { Accordion, Container, Pagination, Form, Button, Nav, Navbar, Image } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';
import type1 from '../assets/type1.png'
import type2 from '../assets/type2.png'
import CatalogMenu from '../comps/CatalogMenu';
import ItemModelNew from '../comps/ItemModelNew';
import ItemModelOnSale from '../comps/ItemModelOnSale';
import ItemModelPopular from '../comps/ItemModelPopular';





// function ItemsOnPage({ currentItems }) {
//     return (
//         <>
//             {currentItems &&
//                 currentItems.map((item, i) => (
//                     <div>
//                         <h3 key={i}>Item #{item.name}</h3>
//                     </div>
//                 ))}
//         </>
//     );
// }
const CatalogClass = ({ ItemOnSale, ItemNew, ItemPopular, onAdd, onRemove, itemsPerPage }) => {
    const items = [...Array(33).keys()]
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    return (
        <>
            <Container className='d-flex align-items-start'>
                <CatalogMenu></CatalogMenu>
                <Container id='flex2' className='d-flex flex-wrap'>
                    <Container>
                        <Navbar collapseOnSelect expand="lg" bg="light" className='d-flex flex-column align-items-stretch low-nav' variant='dark'>
                            <Container className='nav-fix'>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-between'>
                                    <Nav className=''>
                                        <Nav.Link className='black'>Сортировать по: </Nav.Link>
                                        <Nav.Link className='black'>Цена </Nav.Link>
                                        <Nav.Link className='black'>Популярность </Nav.Link>
                                        <Nav.Link className='black'>Скидка </Nav.Link>
                                    </Nav>
                                    <Nav className=''>
                                        <Nav.Link> <Image src={type1}></Image></Nav.Link>
                                        <Nav.Link><Image src={type2}></Image></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Container>
                    <Container>
                        <Container className='d-flex flex-wrap mt-2 justify-content-center'>
                            {ItemOnSale && ItemOnSale.map((ItemOnSale) => (
                                <ItemModelOnSale ItemOnSale={ItemOnSale} key={ItemOnSale.id} onAdd={() => onAdd(ItemOnSale)} onRemove={() => onRemove(ItemOnSale.id)} ></ItemModelOnSale>
                            ))}
                            {ItemPopular && ItemPopular.map((ItemPopular) => (
                                <ItemModelPopular ItemPopular={ItemPopular} key={ItemPopular.id} onAdd={() => onAdd(ItemPopular)} onRemove={() => onRemove(ItemPopular.id)} ></ItemModelPopular>
                            ))}
                            {ItemNew && ItemNew.map((ItemNew) => (
                                <ItemModelNew ItemNew={ItemNew} key={ItemNew.id} onAdd={() => onAdd(ItemNew)} onRemove={() => onRemove(ItemNew.id)} ></ItemModelNew>
                            ))}
                        </Container>
                        <ReactPaginate
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={pageCount}
                            previousLabel="< previous"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />
                    </Container>
                </Container>

            </Container>
        </>
    )
}

export default CatalogClass