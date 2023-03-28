import React, { useRef, useState } from 'react'
import { Footer, Navbarr, Pesan, SignUp, SignIn, LogOutUser } from '../../Components'
import { CanvasUser } from '../../Components/Atom/Atom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Order.scss"
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
const Order = () => {
    const [first, setFirst] = useState(true)
    const [home, setHome] = useState(false)
    const [signIn, setSignIn] = useState(false)
    const [signUp, setSignUp] = useState(false)
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const pilihan = (seting) => {
        console.log(seting)
        if ("home" === seting) {
            setHome(true)
            setSignIn(false)
            setSignUp(false)
        }
        if ("SignIn" === seting) {
            setHome(false)
            setSignIn(true)
            setSignUp(false)

        }
        if ("SignUp" === seting) {
            setHome(false)
            setSignIn(false)
            setSignUp(true)

        }
        if ("pesanan" === seting) {
            setShow(!show)
        }
        setFirst(false)
    }
    const getId = localStorage.getItem('IdUser');
    return (
        <div>
            <Navbarr />
            <Container className={"Container_Order mb-3"}>
                <Row >
                    <Col xs={"12"} sm={"12"} className="Col_Order" >
                        <Navbar bg="dark" variant="dark" className="mt-2 " style={{ borderRadius: "10px", boxShadow: "0px 0px 3px black" }} >
                            <Container  >
                                <Row style={{ width: "100%" }}  >
                                    <Col sm={"8"} xs={"10"} className="d-flex align-items-center" >
                                        <Nav className=" d-flex flex-wrap  " >
                                            <Nav.Link onClick={() => {
                                                pilihan("home")
                                            }} >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                                                </svg>
                                            </Nav.Link>
                                            {getId ?
                                                <Overlay target={target.current} show={show} placement="top">
                                                    {(props) => (
                                                        <Tooltip id="overlay-example" {...props}>
                                                            Pesanan
                                                        </Tooltip>
                                                    )}
                                                </Overlay> : false}

                                            {getId ? <Nav.Link ref={target} onClick={() => {
                                                pilihan("pesanan")
                                            }}  >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-box2" viewBox="0 0 16 16">
                                                    <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z" />
                                                </svg>
                                            </Nav.Link>
                                                : false}

                                            {getId ? false : <Nav.Link className='d-flex flex-column ' style={{ fontSize: "9px", textAlign: "center" }} onClick={() => {
                                                pilihan("SignIn")
                                            }} >
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20" style={{ fill: 'currentColor' }}>
                                                    <path d="M489 936v-60h291V276H489v-60h291q24 0 42 18t18 42v600q0 24-18 42t-42 18H489Zm-78-185-43-43 102-102H120v-60h348L366 444l43-43 176 176-174 174Z" />
                                                </svg>
                                                SignIn
                                            </Nav.Link>}
                                            {getId ? <LogOutUser /> : <Nav.Link className='d-flex flex-column ' style={{ fontSize: "9px", textAlign: "center" }} onClick={() => {
                                                pilihan("SignUp")
                                            }} >
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20" style={{ fill: 'currentColor' }}>
                                                    <path d="M489 936v-60h291V276H489v-60h291q24 0 42 18t18 42v600q0 24-18 42t-42 18H489Zm-78-185-43-43 102-102H120v-60h348L366 444l43-43 176 176-174 174Z" />
                                                </svg>
                                                SignUp

                                            </Nav.Link>}


                                            <Nav.Link style={{ fontSize: "10px", textAlign: 'center' }} className='d-flex flex-column ' >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                                </svg>
                                                <span className='mt-1 me-2' >Help</span>


                                            </Nav.Link>
                                        </Nav>
                                    </Col>
                                    {getId ? <CanvasUser /> : false}

                                </Row>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
                {signUp ? <SignUp /> : false}
                {first ? <Pesan /> : false}
                {home ? <Pesan /> : false}
                {signIn ? <SignIn /> : false}
            </Container>
            <Footer />
        </div >
    )
}

export default Order
