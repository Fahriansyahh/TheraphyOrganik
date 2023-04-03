import React, { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import logoUser from "../../../Assets/image/LogoUser.png"
import { gsap } from 'gsap';
import { motion } from "framer-motion"
import "./CanvasUser.scss"
import Alert from 'react-bootstrap/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GetIdUserApi, UpdateUserApi } from '../../../Config/Redux/Action/User';
function CanvasUser() {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(true)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState()
    const [FullName, setFullName] = useState()
    const [Email, setEmail] = useState()
    const [NoHp, setNoHp] = useState()
    const [Alamat, setAlamat] = useState()
    const [Error, setError] = useState([])
    const [check, setCheck] = useState(true)
    useEffect(() => {
        gsap.set('.img_user', {
            duration: 0, y: -110, opacity: 0
        });
        gsap.to('.img_user', {
            duration: 1, y: 0, opacity: 1, ease: "bounce.out",
        });
        gsap.set('.toRight', {
            duration: 0, x: -110, opacity: 0
        });
        gsap.to('.toRight', {
            duration: 0.3, x: 0, opacity: 1,
        });

        gsap.set('.toLeft', {
            duration: 0, x: 110, opacity: 0
        });
        gsap.to('.toLeft', {
            duration: 0.3, x: 0, opacity: 1,
        });

        gsap.set('.btn_Canvas', {
            duration: 0, y: 110, opacity: 0
        });
        gsap.to('.btn_Canvas', {
            duration: 0.3, y: 0, opacity: 1,
        });
        GetIdUserApi(setData)
    }, [setData])

    const handleSubmit = () => {
        const update = {}
        update.FullName = FullName || data?.FullName
        update.Email = Email || data?.Email
        update.NoHp = NoHp || `0${data?.NoHp}`
        update.Alamat = Alamat || data?.Alamat

        UpdateUserApi(update, setCheck, setError, toast)
    }

    return (
        <>
            <Col sm={"4"} xs={"2"} className="my-auto container_btnLogouser" >
                <Nav className="me-auto d-flex justify-content-end" >

                    <Nav.Link className="d-flex justify-content-end flex-wrap  flex-sm-column" onClick={handleShow} >
                        <motion.div
                            className="container d-flex justify-content-center mx-auto"
                            initial={{ scale: 0 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 280,
                                damping: 20
                            }}
                        >
                            <Navbar.Brand className='mx-auto ' style={{ backgroundColor: "white", padding: "2px 5px", borderRadius: "50%" }} >

                                <img
                                    src={logoUser}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top m-auto"
                                    alt="?"
                                />

                            </Navbar.Brand>
                        </motion.div>
                    </Nav.Link>

                </Nav>
            </Col>

            <Offcanvas show={show} placement={"end"} name={"end"} onHide={handleClose} backdrop="static" style={{ width: "80%" }} className="Container_CanvasUser " >
                <Offcanvas.Header closeButton>
                    ....
                </Offcanvas.Header>
                <ToastContainer />
                {check ? false : <Alert key={"warning"} variant={"warning"}>
                    <ul>
                        {Error.map(a => {
                            return (<li key={a?.msg}>{a?.msg}</li>)
                        })}
                    </ul>
                </Alert>}
                <Offcanvas.Body className='mt-5'>
                    <Container >
                        <Row >
                            <Col xs="12" sm="8" lg="6" className="d-flex 
                            justify-content-center mx-auto" >

                                <Navbar.Brand className='mx-auto img_user' style={{ backgroundColor: "whitesmoke", padding: "2px 5px", borderRadius: "50%", boxShadow: "0px 0px 5px black " }} >
                                    <img
                                        src={logoUser}
                                        width="100"
                                        height="100"
                                        className="d-inline-block align-top m-auto "
                                        alt="?"
                                    />

                                </Navbar.Brand>

                            </Col>
                            <Col xs="12" sm="8" lg="8" className="d-flex justify-content-center mx-auto" >
                                <h2 className="mt-3 toRight">{data?.FullName}</h2>
                            </Col>
                        </Row>
                        <Row className='mt-4' >
                            {edit ? <Col xs="12" sm="12">
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="toRight" >nama: {data?.FullName}</ListGroup.Item>
                                    <ListGroup.Item className="toLeft">Email: {data?.Email}</ListGroup.Item>
                                    <ListGroup.Item className="toRight">NoHp: 0{data?.NoHp}</ListGroup.Item>
                                    <ListGroup.Item className="toLeft">Alamat: {data?.Alamat} </ListGroup.Item>
                                </ListGroup>
                            </Col> : <Col xs="12" sm="12">
                                <Form>
                                    <Row>
                                        <Form.Group className="mb-1" as={Col} md="6" lg="5" >
                                            <Form.Label className='toRight'>Nama Lengkap</Form.Label>
                                            <Form.Control type="text" defaultValue={FullName || data?.FullName}
                                                style={{ boxShadow: "0px 0px 5px black" }} onChange={(a) => { setFullName(a.target.value) }} />
                                        </Form.Group>
                                        <Form.Group className="mb-1" as={Col} lg="4" md="6" >
                                            <Form.Label className='toLeft'>Email</Form.Label>
                                            <Form.Control type="email" defaultValue={Email || data?.Email}
                                                style={{ boxShadow: "0px 0px 5px black" }}
                                                onChange={(a) => { setEmail(a.target.value) }}
                                            />

                                        </Form.Group>
                                        <Form.Group className="mb-1" as={Col} md="3" lg="3" >
                                            <Form.Label className='toRight'>NoHp</Form.Label>
                                            <Form.Control type="number" defaultValue={NoHp || `0${data?.NoHp}`}
                                                style={{ boxShadow: "0px 0px 5px black" }}
                                                onChange={(a) => { setNoHp(a.target.value) }}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="9" className="mx-auto" >
                                            <Form.Label className='toLeft'>Alamat</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                defaultValue={Alamat || data?.Alamat}
                                                onChange={(a) => { setAlamat(a.target.value) }}
                                                style={{ height: '100px', boxShadow: "0px 0px 5px black" }}
                                            />
                                        </Form.Group>
                                        <div as={Col} md="12" className='d-flex justify-content-center'>
                                            <Button variant="success" style={{ width: "max-content", padding: "5px 20px", borderRadius: "30px", boxShadow: "0px 0px 5px black" }}
                                                className="mt-5 btn_Canvas" onClick={() => {
                                                    handleSubmit()
                                                }} >
                                                Submit
                                            </Button>
                                        </div>
                                    </Row>
                                </Form>

                            </Col>}

                        </Row>
                        <Row>
                            <Col xs="12" sm="12" className="mt-3" >
                                <div className="d-flex justify-content-end" onClick={() => {
                                    setEdit(edit ? false : true)
                                }}>
                                    <svg xmlns="http:www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16" >
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}



export default CanvasUser
