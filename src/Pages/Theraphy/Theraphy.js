import React, { useEffect, useState } from 'react'
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
import { motion } from "framer-motion";
import { GetAllToApiList } from '../../Config/Redux/Action/ListTheraphy';
const Theraphy = () => {
    const history = useNavigate()
    const [ListToApi, setListToApi] = useState([])
    console.log(ListToApi)
    const textVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                staggerChildren: 0.1,
            },
        },
    };

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };
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
        GetAllToApiList(setListToApi)

    }, [setListToApi])
    const textAnimate = "Theraphy Organic";
    const textArray = textAnimate.split("");
    return (
        <div >
            <Navbarr />
            <Container className='container_Theraphy mb-5' >
                <Row className=" Theraphy_About d-flex align-items-center mt-5">
                    <Col xs={"12"} sm={"6"}  >
                        <motion.h1
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            className=" mt-4 mb-3 header"
                        >
                            {textArray.map((text, index) => {
                                return (<motion.span key={index + "-text"} variants={letterVariants}>{text}</motion.span>)
                            })}


                        </motion.h1>
                    </Col>

                    <Col xs={"12"} sm={"6"} className="px-3 p2 mt-5" >
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
                            {ListToApi.map(data => {
                                return (
                                    <ListGroup.Item key={data._id} className='m-0 p-0' style={{ height: "max-content" }} >
                                        <Accordion style={{ width: "100%" }} >
                                            <Accordion.Item eventKey="0" style={{ border: "0px solid black" }} >
                                                <Accordion.Header><h5  >{data.title}</h5></Accordion.Header>
                                                <Accordion.Body >
                                                    <p>{data.body}</p>
                                                    <br></br>
                                                    {/* catatan untuk About di bawah ini */}
                                                    <a href="https://theraphy/about/..." ><i>Penjelasan lengkap</i></a>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </ListGroup.Item>
                                )
                            })}



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
