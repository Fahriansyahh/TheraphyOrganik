import React, { useState } from 'react'
import { Footer, Navbarr } from '../../Components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import "./Order.scss"
const Order = () => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div>
            <Navbarr />
            <Container className={"Container_Order mb-3"}>
                <Row>
                    <Col xs={"12"} sm={"8"}>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center align-items-sm-center mt-5 Order_contain' >
                    <Col xs={"12"} sm={"8"}  >
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" xs="6" controlId="validationCustom01"  >
                                    <Form.Label>Theraphy</Form.Label>
                                    <Form.Select aria-label="Default select example" className='formSelect'>
                                        <option>Pilihan</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} md="6" xs="6" controlId="validationCustom02" >
                                    <Form.Label>Paket</Form.Label>
                                    <Form.Select aria-label="Default select example" className='formSelect' >
                                        <option>Pilihan</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 d-flex justify-content-sm-center justify-content-end" >
                                <Form.Group as={Col} md="4" xs="4" controlId="validationCustomUsername">
                                    <Form.Label>Dari</Form.Label>
                                    <Form.Control type="date" placeholder="Harga" required style={{ boxShadow: "0px 0px 3px black" }} />
                                </Form.Group>
                                <Form.Group as={Col} md="4" xs="4" controlId="validationCustomUsername">
                                    <Form.Label>Sampai</Form.Label>
                                    <Form.Control type="date" placeholder="Harga" required style={{ boxShadow: "0px 0px 3px black" }} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="3" xs="5" controlId="validationCustomUsername">
                                    <Form.Label  >Harga</Form.Label>
                                    <Form.Control type="text" placeholder="Harga" required style={{ boxShadow: "0px 0px 3px black", fontSize: "14px" }} />

                                </Form.Group>
                                <Form.Group as={Col} md="9" controlId="validationCustom03">
                                    <Form.Label>Komentar</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="jika ada keinginan tambahan"
                                        style={{ height: '100px', boxShadow: "0px 0px 5px black" }}
                                    />
                                </Form.Group>

                            </Row>
                            <Row className="mb-3 d-flex justify-content-center align-items-lg-center" >
                                <Form.Group as={Col} md="12" controlId="validationCustom03">
                                    <Form.Label>Penjelasan Theraphy</Form.Label>
                                    <ListGroup style={{ height: "200px", overflow: "auto", boxShadow: "0px 0px 5px black" }} >
                                        <ListGroup.Item className='m-0 p-0' style={{ height: "max-content" }} >
                                            <Accordion style={{ width: "100%" }} >
                                                <Accordion.Item eventKey="0" style={{ border: "0px solid black" }} >
                                                    <Accordion.Header><h5 >Therapy</h5></Accordion.Header>
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
                                                    <Accordion.Header><h5 >Theraphy Dandan </h5></Accordion.Header>
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
                                                    <Accordion.Header><h5 >Theraphy Kecantikan</h5></Accordion.Header>
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
                                                    <Accordion.Header><h5 >Theraphy Bengkung</h5></Accordion.Header>
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
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    label="Theraphy ini Khusus  Wanita: Ya / Tidak"
                                />
                            </Form.Group>
                            <Button type="submit" className="btn_Order"  >Pesan Sekarang</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Order
