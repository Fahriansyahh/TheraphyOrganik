import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { gsap } from 'gsap';
import Logo from "../../Assets/image/Therapy_Organic.png"
import "./Admin.scss"
const Admin = () => {
    useEffect(() => {
        gsap.set('.Admin_image', {
            duration: 0, y: -80, opacity: 0
        });
        gsap.to('.Admin_image', {
            duration: 0.5, y: 0, opacity: 1
        });
        gsap.set('.text_admin', {
            duration: 0, x: -80, opacity: 0
        });
        gsap.to('.text_admin', {
            duration: 0.5, x: 0, opacity: 1
        });
    })
    return (

        <Container className="container_Admin" style={{}}  >
            <Row className="d-flex justify-content-center align-items-center">
                <Col xs={"12"} md={"7"} sm={"9"} lg={"6"} style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center" >
                    <Form style={{ width: "100%", height: "320px", boxShadow: "0px 5px  10px black", borderRadius: "15px", }} className=" d-flex justify-content-center align-items-center  flex-column me-3 ms-3  " >
                        <img src={Logo} alt="logo" width={"150rem"} className=" Admin_image" ></img>

                        <Form.Group as={Row} className="mb-2 d-flex  align-items-center  " controlId="formPlaintextPassword" style={{ width: "100%" }}  >
                            <Form.Label column sm="2" className="ms-1  text_admin" >
                                Username
                            </Form.Label>
                            <Col sm="10" className='m-auto' >
                                <Form.Control type="text" placeholder="Username" />
                            </Col>

                            <Form.Label column sm="2" className="ms-1 text_admin " >
                                Password
                            </Form.Label>
                            <Col sm="10" className='m-auto' >
                                <Form.Control type="password" placeholder="Password" />
                            </Col>

                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container >
    )
}

export default Admin
