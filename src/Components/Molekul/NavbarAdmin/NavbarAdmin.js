import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../../Assets/image/Therapy_Organic.png"

import "./NavbarAdmin.scss"
const NavbarAdmin = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="Container_Admin_Nav d-flex align-items-center">
                <Navbar.Brand className="d-flex align-items-center">
                    <img
                        src={Logo}
                        width="100"
                        className="d-inline-block align-top image_nav_Admin my-auto "
                        alt="Therapy Organik"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll" >

                    <Nav

                        className="mt-2 me-2 d-flex justify-content-end "
                        style={{ maxHeight: '100px', width: "100%" }}
                        navbarScroll>
                        <Nav.Link className="d-flex justify-content-end">List-Therapy</Nav.Link>
                        <Nav.Link className="d-flex justify-content-end">Products</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )

}

export default NavbarAdmin
