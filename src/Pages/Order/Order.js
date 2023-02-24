import React from 'react'
import { Footer, Navbarr, Pesan } from '../../Components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Order.scss"
import logoUser from "../../Assets/image/LogoUser.png"
const Order = () => {


    return (
        <div>
            <Navbarr />
            <Container className={"Container_Order mb-3"}>
                <Row >
                    <Col xs={"12"} sm={"12"} className="Col_Order" >
                        <Navbar bg="dark" variant="dark" className="mt-2 " style={{ borderRadius: "10px", boxShadow: "0px 0px 3px black" }} >
                            <Container  >
                                <Row style={{ width: "100%" }}>
                                    <Col sm={"8"} xs={"10"} className="d-flex align-items-center" >
                                        <Nav className=" d-flex flex-wrap " >
                                            <Nav.Link href="#homea">
                                                Pesan
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-1 bi bi-chat-left" viewBox="0 0 16 16">
                                                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                </svg>
                                            </Nav.Link>

                                            <Nav.Link href="#features">
                                                Terkirim
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-1 bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                            </Nav.Link>
                                            <Nav.Link href="#features">
                                                Login
                                            </Nav.Link>
                                            <Nav.Link href="#features">
                                                Register
                                            </Nav.Link>
                                            <Nav.Link href="#home">
                                                Help
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                                </svg>
                                            </Nav.Link>
                                        </Nav>
                                    </Col>
                                    <Col sm={"4"} xs={"2"} className="my-auto" >
                                        <Nav className="me-auto d-flex justify-content-end" >

                                            <Nav.Link href="#features" className="d-flex justify-content-end flex-wrap  flex-sm-column"  >
                                                <Navbar.Brand href="#home" className='mx-auto ' style={{ backgroundColor: "white", padding: "2px 5px", borderRadius: "50%" }} >
                                                    <img
                                                        src={logoUser}
                                                        width="30"
                                                        height="30"
                                                        className="d-inline-block align-top m-auto"
                                                        alt="?"
                                                    />

                                                </Navbar.Brand>
                                                <h6 className="pt-1 mx-auto" >Fahri</h6>
                                            </Nav.Link>

                                        </Nav>
                                    </Col>
                                </Row>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
                <Pesan />
            </Container>
            <Footer />
        </div >
    )
}

export default Order
