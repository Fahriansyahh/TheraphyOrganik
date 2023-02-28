import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo from "../../../Assets/image/Therapy_Organic.png"
import { motion } from "framer-motion"
import "./SignIn.scss"
const SignIn = () => {
    return (
        <Row style={{ backgroundColor: "aliceblue", height: "60vh", borderRadius: "0px 0px 20px 20px", boxShadow: "0 0 10px black" }} className=" container_SignIn mt-3 " >
            <Col sm={"12"} xs={"12"} style={{ height: "max-content" }} className="my-auto">
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
                    <img src={Logo} alt="logo" width={"130rem"} className="Signin_image " ></img>
                </motion.div>
                <Form  >
                    <Form.Group className="mb-3 mx-auto" as={Col} xs="10" md="6" lg="4" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name"
                            style={{ boxShadow: "0px 0px 5px black" }} />
                    </Form.Group>

                    <Form.Group className="mb-3 mx-auto" as={Col} xs="10" md="6" lg="4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            style={{ boxShadow: "0px 0px 5px black" }} />
                    </Form.Group>
                    <Form.Group className="mb-3 mx-auto" as={Col} xs="10" md="6" lg="4" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div className="d-flex justify-content-center" >
                        <Button variant="primary" type="submit" style={{ borderRadius: "30px", padding: "5px 20px" }} className="Btn_SignIn" >
                            SignIn
                        </Button>
                    </div>
                </Form>
            </Col>
        </Row>
    )
}

export default SignIn
