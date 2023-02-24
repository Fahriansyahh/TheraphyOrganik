import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Footer, Navbarr } from '../../Components'
import "./Theraphy.scss"
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const Theraphy = () => {
    const history = useNavigate()
    useEffect(() => {
        gsap.set('.header', {
            duration: 0, y: -110, opacity: 0
        });
        gsap.to('.header', {
            duration: 0.5, y: 0, opacity: 1, ease: "elastic.out(2, 0.3)"
        });
        gsap.set('.p1', {
            duration: 0, x: -310, opacity: 0
        });
        gsap.to('.p1', {
            duration: 0.5, x: 0, opacity: 1
        });

        gsap.set('.p2', {
            duration: 0, x: 310, opacity: 0
        });
        gsap.to('.p2', {
            duration: 0.5, x: 0, opacity: 1
        });
        gsap.set('.btn', {
            duration: 0, x: 200, opacity: 0, ease: "bounce.inOut"
        });
        gsap.to('.btn', {
            duration: 0.5, x: 0, opacity: 1
        });
    })
    return (
        <div >
            <Navbarr />
            <Container className='container_Theraphy mb-5' >
                <Row className="d-flex justify-content-center Theraphy_About">
                    <Col xs={"12"} sm={"12"} >
                        <h1 className="text-center mt-4 mb-3 header" >Theraphy Organik</h1>
                    </Col>
                    <Col xs={"12"} sm={"6"} className="mb-2 px-3 p1" >
                        <p>
                            m Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </Col>
                    <Col xs={"12"} sm={"6"} className="px-3 p2" >
                        <p>
                            m Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passagesadsadsadsa asdsadasdasdasdsadas
                            <span className="btn" > <Button variant="primary" onClick={() => history("/Theraphy/OrderNow")} size="sm" style={{ backgroundImage: "linear-gradient(to bottom right, green, yellow)", textShadow: "0px 2px 2px black" }}  >
                                <strong>Pesan</strong> <strong>Sekarang</strong>
                            </Button>{' '}</span>
                        </p>
                    </Col>
                </Row>
                <Row className="list_theraphy px-3" >
                    <Col xs={"12"} sm={"12"} className=" mt-5" >
                        <h3 >List Theraphy</h3>
                    </Col>
                    <Col xs={"12"} sm={"8"} className=" p-0 mt-2 mx-auto listGroup_theraphy"  >
                        <ListGroup style={{ height: "200px", overflow: "auto" }} >
                            <ListGroup.Item className='m-0 p-0' style={{ height: "max-content" }} >
                                <Accordion style={{ width: "100%" }} >
                                    <Accordion.Item eventKey="0" style={{ border: "0px solid black" }} >
                                        <Accordion.Header><h5  >asdsadasdas</h5></Accordion.Header>
                                        <Accordion.Body >
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation  ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <br></br>
                                            {/* catatan untuk About di bawah ini */}
                                            <a href="https://theraphy/about/..." ><i>Penjelasan lengkap</i></a>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </ListGroup.Item>

                            <ListGroup.Item className='m-0 p-0' style={{ height: "max-content" }} >
                                <Accordion style={{ width: "100%" }} >
                                    <Accordion.Item eventKey="0" style={{ border: "0px solid black" }} >
                                        <Accordion.Header><h5 >asdsadasdas</h5></Accordion.Header>
                                        <Accordion.Body >

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation  ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <br></br>
                                            {/* catatan untuk About di bawah ini */}
                                            <a href="https://theraphy/about/..." ><i>Penjelasan lengkap</i></a>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </ListGroup.Item>
                            <ListGroup.Item className='m-0 p-0' style={{ height: "max-content" }} >
                                <Accordion style={{ width: "100%" }} >
                                    <Accordion.Item eventKey="0" style={{ border: "0px solid black" }} >
                                        <Accordion.Header><h5 >asdsadasdas</h5></Accordion.Header>
                                        <Accordion.Body >
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation  ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <br></br>
                                            {/* catatan untuk About di bawah ini */}
                                            <a href="https://theraphy/about/..." ><i>Penjelasan lengkap</i></a>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Theraphy
