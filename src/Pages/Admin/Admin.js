import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { gsap } from 'gsap';
import Logo from "../../Assets/image/Therapy_Organic.png"
import Alert from 'react-bootstrap/Alert';
import "./Admin.scss"
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
const Admin = () => {
    const history = useNavigate()
    const [Username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState(false)
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
    const AdminValue = () => {
        if (Username === "Theraphy_Admin") {
            setError("pasword salah")
            if (password === "Admin_Organic") {
                setError(false)
                const randomString = generateRandomAlphaNumeric(Math.floor(Math.random() * (30 - 20 + 1)) + 20);
                sessionStorage.setItem("random", randomString);
                const storedName = sessionStorage.getItem("random");
                if (storedName) {
                    history(`/AdminPages`)
                }
            }

        } else {
            setError("username salah")
        }
    }
    return (

        <Container className="container_Admin" style={{}}  >
            <Row className="d-flex justify-content-center align-items-center">
                <Col xs={"12"} md={"7"} sm={"9"} lg={"6"} style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center" >
                    <Form style={{ width: "100%", height: "max-content", boxShadow: "0px 5px  10px black", borderRadius: "15px", }} className=" d-flex justify-content-center align-items-center  flex-column me-3 ms-3 p-3 " >
                        {error ? <Alert variant="danger">
                            {error}
                        </Alert> : false}
                        <motion.div
                            className="container d-flex justify-content-center"
                            initial={{ scale: 0 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 280,
                                damping: 20
                            }}
                        >
                            <img src={Logo} alt="logo" width={"150rem"} className=" Admin_image " ></img>
                        </motion.div>

                        <Form.Group as={Row} className="mb-2 d-flex  align-items-center  " controlId="formPlaintextPassword" style={{ width: "100%" }}  >
                            <Form.Label column sm="2" className="ms-1  text_admin"  >
                                Username
                            </Form.Label  >
                            <Col sm="10" className='m-auto' >
                                <Form.Control type="text" placeholder="Username" onChange={(a) => { setUsername(a.target.value) }} />
                            </Col>

                            <Form.Label column sm="2" className="ms-1 text_admin " >
                                Password
                            </Form.Label>
                            <Col sm="10" className='m-auto' >
                                <Form.Control type="password" placeholder="Password" onChange={(a) => { setPassword(a.target.value) }} />
                            </Col>
                            <div className="d-flex justify-content-center align-items-center ">
                                <Button variant="outline-primary Btn_bgc" style={{ width: "max-context" }} className="m-auto mt-2 pe-5 ps-5" onClick={() => { history("/") }} >Home</Button>
                                <Button variant="outline-success Btn_bgc" style={{ width: "max-context" }} className="m-auto mt-2 pe-5 ps-5" onClick={() => { AdminValue() }}    >Login</Button>


                            </div>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container >
    )
}

function generateRandomAlphaNumeric(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export default Admin
