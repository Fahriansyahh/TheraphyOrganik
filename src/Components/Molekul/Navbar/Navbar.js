import React, { useState } from 'react'
import "./Navbar.scss"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../../Assets/image/Therapy_Organic.png"
import { useNavigate } from 'react-router-dom';
const Navbarr = () => {
    const [Scroll, setScroll] = useState("")
    const history = useNavigate()
    const navScroll = () => {
        Scroll ? setScroll("") : setScroll("d-flex")
    }
    return (
        <Navbar bg="light" expand="md" className='Nav position-fixed'>
            <Container fluid className='container_Nav' >
                <Navbar.Brand href="#home" className='Brand_Nav'>
                    <img
                        src={Logo}
                        width="100"
                        className="d-inline-block align-top image_Nav mb-5"
                        alt="Therapy Organik"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" style={{ boxShadow: "0px 0px 5px black" }} onClick={() => { navScroll() }} />

                <Navbar.Collapse id="navbarScroll" className={`${Scroll} p-1 Nav_List  justify-content-md-start flex-column-reverse bd-highlight mt-sm-0 mt-md-5  `} >
                    <Nav
                        className="ms-auto me-2   my-2 my-lg-0 Nav_text me-md-5 Nav_text "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='text_Nav' onClick={() => {
                            history("/")
                        }} >Home</Nav.Link>
                        <Nav.Link className='text_Nav' href="#action2">About</Nav.Link>
                        <NavDropdown className='text_Nav' title="Tentang" id="navbarScrollingDropdown">
                            <NavDropdown.Item className='text_Nav' href="#action3">Tentang</NavDropdown.Item>
                            <NavDropdown.Item className='text_Nav' href="#action4">
                                Kedai Rempah
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='text_Nav' href="#action5">
                                Sliming
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='text_Nav' href="#"  >
                            Contact
                        </Nav.Link>
                        <Nav.Link className='text_Nav' onClick={() => {
                            history("/Products")
                        }}  >
                            Products
                        </Nav.Link>
                        <Nav.Link className='text_Nav' href="#"  >
                            Theraphy
                        </Nav.Link>
                        <Nav.Link className='text_Nav' href="#"  >
                            Admin
                        </Nav.Link>

                    </Nav>
                    <Form className="d-flex  nav_Search ">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 form_Nav"
                            aria-label="Search"
                            style={{ width: "16rem" }}
                        />
                        <Button variant="outline-success btn_Nav">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Navbarr
