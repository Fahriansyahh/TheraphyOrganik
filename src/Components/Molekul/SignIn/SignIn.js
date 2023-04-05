import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo from "../../../Assets/image/Therapy_Organic.png"
import { motion } from "framer-motion"
import "./SignIn.scss"
import { ToastContainer, toast } from 'react-toastify';
import Alert from 'react-bootstrap/Alert';
import { SignInUserApi } from '../../../Config/Redux/Action/User';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const history = useNavigate()
    const [FullName, setFullName] = useState()
    const [Password, setPassword] = useState()
    const [condition, setCondition] = useState(true)
    const [value, setValue] = useState([])
    const handleSignIn = () => {
        SignInUserApi(FullName, Password, setCondition, setValue, toast)
    }
    const handleKeyPassword=()=>{
history("/Theraphy/OrderNow/KeyGmail")
    }
    return (
        <Row style={{ backgroundColor: "aliceblue", height: "70vh", borderRadius: "0px 0px 20px 20px", boxShadow: "0 0 10px black" }} className=" container_SignIn mt-3 " >
            <Col sm={"12"} xs={"12"} style={{ height: "max-content" }} className="my-auto">
                <ToastContainer />
                {condition ? false : <Alert key={"warning"} variant={"warning"}>
                    <ul>
                        {value.map(a => {
                            return (<li key={a?.msg}>{a?.msg}</li>)
                        })}
                    </ul>
                </Alert>}
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
                        <Form.Label>Full Name / Username</Form.Label>
                        <Form.Control type="text" placeholder="Full Name"
                            style={{ boxShadow: "0px 0px 5px black" }}
                            defaultValue={FullName}
                            onChange={a => {
                                setFullName(a.target.value)
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 mx-auto" as={Col} xs="10" md="6" lg="4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            style={{ boxShadow: "0px 0px 5px black" }}
                            defaultValue={Password}
                            onChange={a => {
                                setPassword(a.target.value)
                            }} />

                    </Form.Group>

                    <div className="d-flex flex-column" >
                        <button className='mx-auto mb-2' onClick={()=>handleKeyPassword()} style={{backgroundColor: 'transparent', border: 'none',color:"blue"}}>Lupa Password</button>
                        <Button variant="primary" style={{ borderRadius: "30px", padding: "5px 20px", width: "max-content" }} className="Btn_SignIn mx-auto" onClick={() => {
                            handleSignIn()
                        }} >
                            SignIn
                        </Button>
                    </div>
                </Form>
            </Col>
        </Row>
    )
}

export default SignIn