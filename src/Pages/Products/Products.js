import React, { useEffect, useState } from 'react'
import "./Products.scss"
import { Navbarr, Footer } from '../../Components'
import { Container, Row, Col, Nav, Navbar, Modal, Figure, CloseButton, OverlayTrigger, Tooltip, ListGroup, Dropdown, Button } from 'react-bootstrap';
import { CreateModal, UpdateModal } from '../../Components';
import axios from 'axios';
import AOS from "aos";
import { gsap } from 'gsap';
import { ApiProductsGetQuery, ApiProductsGetId, ApiKategory, ApiKategoryGet } from "../../Config/Redux/Action/Products"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol, MDBPagination, MDBPaginationItem, MDBPaginationLink
} from 'mdb-react-ui-kit';
const Products = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [pageNum, setPageNum] = useState()
    const [queryPage, setQueryPage] = useState(1)
    const [Project, setProject] = useState([])
    const [modal, setModal] = useState()
    const [kategory, setKategory] = useState([])
    const [KategoryId, setKategoryId] = useState()
    //! set list navbar Products
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    //! tutup
    useEffect(() => {
        //!get Api Footer kateorgy
        KategoryId ? ApiKategoryGet(KategoryId, queryPage, setPageNum, setProject) : ApiProductsGetQuery(queryPage, setPageNum, setProject)
        //!tutup
        //! get Api Footer Kategory
        ApiKategory(setKategory)
        //! tutup
        //!set layar footer Products
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            gsap.set('.icon_nav', {
                duration: 0, y: -110, opacity: 0
            });
            gsap.to('.icon_nav', {
                duration: 0.5, y: 0, opacity: 1
            });
            gsap.set('.Kategori_nav', {
                duration: 0, x: -110, opacity: 0
            });
            gsap.to('.Kategori_nav', {
                duration: 0.5, x: 0, opacity: 1
            });
            AOS.init();
        };
        //!tutup
    }, [queryPage, KategoryId]);

    let arr = []
    for (let a = 0; a < pageNum; a++) {
        arr.push(a + 1)
    }
    let paginationFunc = (page, event) => {
        setQueryPage(page + 1)
    }
    const handleModal = (id) => {
        //!getApi berdasarkan id
        ApiProductsGetId(id, setModal)
    }
    const handleKategory = (data) => {
        setKategoryId(data)
        setQueryPage(1)
    }
    const DeleteProducts = (data) => {
        if (window.confirm("Delete Products"))
            axios.delete(`http://localhost:4000/Products/v1/deleteById/${data}`)
                .then(res => {
                    window.location.reload()
                }).catch(err => {
                    console.log(err)
                })
    }
    return (
        <div className='Products_Container' >
            <Navbarr />
            <Container style={{ marginTop: "170px" }}  >

                <Row>
                    <Col xs={"12"} sm={"12"}  >
                        <>

                            <Navbar bg="dark" variant="dark" style={{ borderRadius: "10px" }} >
                                <Container className='d-flex align-items-center' >
                                    {width > 768 ? <Nav className="me-auto " >
                                        {kategory.map(data => {
                                            const formattedString = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
                                            return (
                                                <Nav.Link key={data} href="#pricing" className="link_products" onClick={() => { handleKategory(data) }} >{formattedString}</Nav.Link>
                                            )
                                        })}
                                        <Nav.Link href="#pricing" className="link_products" onClick={() => { setKategoryId("") }} >All</Nav.Link>
                                    </Nav> : <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ borderRadius: "0px 20px 0px 20px", backgroundImage: "linear-gradient(to bottom right, green, yellow)", fontSize: "14px" }} className="Kategori_nav" >
                                            Kategori
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{ maxHeight: "100px", overflowY: "scroll", zIndex: "1" }} >
                                            <Dropdown.Item eventKey="4" onClick={() => { setKategoryId("") }}>All</Dropdown.Item>
                                            <Dropdown.Divider />
                                            {kategory.map((data) => {
                                                const formattedString = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
                                                return (
                                                    <Dropdown.Item key={data} href="#/action-1" onClick={() => { handleKategory(data) }}>{formattedString}</Dropdown.Item>
                                                )
                                            })}

                                        </Dropdown.Menu>
                                    </Dropdown>}

                                    <Navbar.Brand href="#home"   >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp me-2 icon_nav" viewBox="0 0 16 16">
                                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram me-2 icon_nav" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-fill me-2 icon_nav" viewBox="0 0 16 16">
                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                                        </svg>

                                    </Navbar.Brand>
                                </Container>
                            </Navbar>
                        </>

                    </Col>
                </Row>
                <Row className="m-2" >
                    <Col xs={"12"} sm={"12"} className="d-flex justify-content-end"  >
                        <CreateModal />
                    </Col>
                </Row>
                <MDBRow className='row-cols-2 row-cols-sm-4  row-cols-lg-5 g-2 mt-2    d-flex justify-content-center cards_Products' >
                    {Project.map((data, index) => {
                        const Products = data.Products
                        const int = index + 1
                        return (
                            <MDBCol key={data._id} >
                                <MDBCard onClick={() => handleModal(data._id)} data-aos={width < 576 ? (int % 2 === 0 ? "fade-left" : "fade-right") : "flip-left"} >
                                    {/* close button */}
                                    <OverlayTrigger
                                        key={'top'}
                                        placement={"top"}
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                delete <strong>{Products.Title}</strong>.
                                            </Tooltip>
                                        }
                                    >
                                        <div className='d-flex justify-content-end pe-2Close_Btn' >
                                            <CloseButton style={{ backgroundColor: "red" }} className="m-2" onClick={() => {
                                                DeleteProducts(data._id)
                                            }} />
                                        </div>
                                    </OverlayTrigger>
                                    <Button variant="primary" style={{ backgroundColor: "transparent", border: "0 solid black", color: "black" }} onClick={handleShow}>
                                        <MDBCardImage
                                            src={`http://localhost:4000/${Products.image}`}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle className="card_title">{Products.Title}</MDBCardTitle>
                                            <MDBCardText className='card_Money'>
                                                Rp:{Products.Harga}

                                            </MDBCardText>
                                        </MDBCardBody>
                                    </Button>
                                    <UpdateModal dataOld={data} />
                                </MDBCard>
                            </MDBCol>)
                    })}
                </MDBRow>
                <Row>
                    <Col xs={"12"} sm={"12"} className="d-flex justify-content-center mt-5" >

                        <nav aria-label='...'>
                            <MDBPagination circle className='mb-0'  >
                                <MDBPaginationItem >
                                    <MDBPaginationLink href='#' tabIndex={-1} aria-disabled='true' className='m-0 p-1' style={{ fontSize: "13px" }} onClick={() => { setQueryPage(queryPage === 1 ? queryPage : queryPage - 1) }}  >
                                        Previous
                                    </MDBPaginationLink>
                                </MDBPaginationItem>
                                {arr.map((page, index) => {
                                    return (
                                        <MDBPaginationItem key={page} >
                                            <MDBPaginationLink href='#' className='m-0 p-1' style={{ fontSize: "13px" }} onClick={() => { paginationFunc(index) }} >{page}</MDBPaginationLink>
                                        </MDBPaginationItem>
                                    )
                                })}

                                <MDBPaginationItem>
                                    <MDBPaginationLink href='#' className='m-0 p-1' style={{ fontSize: "13px" }} onClick={() => { setQueryPage(queryPage === arr.unshift() ? queryPage : queryPage + 1) }} >Next</MDBPaginationLink>
                                </MDBPaginationItem>
                            </MDBPagination>
                        </nav>
                    </Col>
                </Row >
            </Container>
            <Footer />
            {/* modal */}
            {
                !modal ? undefined :
                    <Modal show={show}
                        centered
                        onHide={handleClose} >
                        <Modal.Header closeButton style={{ backgroundImage: "linear-gradient(to bottom right, yellow,green)" }}>
                            <Modal.Title id="contained-modal-title-vcenter " className="modal_Title text-center" style={{ fontSize: "24px", marginLeft: "45%", color: "white" }}>{modal.Title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='body_modal d-flex justify-content-center align-items-center'>
                                <Figure>
                                    <Figure.Image
                                        width={200}
                                        height={{ maxWidth: "250px" }}
                                        alt="171x180"
                                        src={`http://localhost:4000/${modal.image}`}
                                    />
                                </Figure>
                                <div className='m-2 ' >
                                    <div style={{ overflow: "auto", width: "200px", height: "100px", wordWrap: "break-word", fontSize: "12px", direction: "rtl" }} className="p-2 mb-2 text-start"><p>
                                        {modal.Keterangan}
                                    </p></div>
                                    <div >
                                        <ListGroup style={{ fontSize: "12px", margin: "0", padding: "0", heigth: "50px", width: "200px" }} >
                                            <ListGroup.Item style={{ padding: "1px", width: "100px", boxShadow: "0px 0px 5px black" }} className="text-center" >Stock : {modal.Stock}</ListGroup.Item>
                                            <ListGroup.Item style={{ margin: "0 100px", padding: "1px", width: "100px", boxShadow: "0px 0px 5px black" }} className="text-center">Rp: {modal.Harga}</ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                </div>
                            </div>

                        </Modal.Body>
                        <Modal.Footer className="modal_footer" >
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" href={modal.Link} style={{
                                border: "1px solid orange", background: "linear-gradient(to right, #ee4d2d, #ff7337)",
                            }}>
                                Shoope
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-fill ms-2" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                                </svg>
                            </Button>
                        </Modal.Footer>
                    </Modal>
            }
        </div >
    )
}



export default Products
