import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from 'gsap';
import { Navbarr, Footer } from '../../Components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./Home.scss"
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const history = useNavigate()
    const { Global } = useSelector(state => state.Global)
    const dispatch = useDispatch()

    useEffect(() => {
        gsap.set('.text_header', {
            duration: 0, y: -110, opacity: 0
        });
        gsap.to('.text_header', {
            duration: 1, y: 0, opacity: 1
        });
        gsap.set('.Btn_bgc', {
            duration: 0, y: 110, opacity: 0
        });
        gsap.to('.Btn_bgc', {
            duration: 1, y: 0, opacity: 1
        });

        AOS.init();
        dispatch({ type: "Global", payload: "asdasdasda" })
        console.log(Global)
    }, [dispatch, Global]);
    const Random = sessionStorage.getItem("random");
    const location = useLocation();
    const path = location.pathname;
    const lastPartOfPath = path.split("/").pop();
    if (lastPartOfPath === Random || lastPartOfPath === "") {
        return (
            <div className='Home_container'>
                <Navbarr />
                <header>
                    <div className='background_Header  '>
                        <Container >
                            <Row className='text-center d-flex  flex-column justify-content-center align-items-center '>
                                <Col xs={"12"} sm={"12"} className="mb-2 text_header" ><span>Sesuaikan pilihan Anda sesuai dengan Keinginan Anda. Tombol 'Products' akan membawamu ke produk-produk jamu dan alat kecantikan kami, sedangkan tombol 'Terapi Organik' akan membawamu ke jasa kami. </span></Col>
                                <Col xs={"12"} sm={"12"} style={{ width: "300px", margin: "0px auto", backdropBlur: "2px", backdropFilter: "blur(2px)", borderRadius: "10px", zIndex: "1", }}>
                                    <Button variant="outline-primary Btn_bgc" >Theraphy_Organic</Button>{' '}
                                    <Button variant="outline-primary Btn_bgc" onClick={() => { history("/Products") }}>Products</Button>{' '}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </header >
                <Container style={{
                    width: "100%"
                }} >

                    <Row>
                        <Col xs={"12"} sm={"12"}>
                            <div className='Header_text'>
                                <h1 style={{ marginTop: "100px" }} >Theraphy_Organic</h1>
                            </div>
                        </Col>

                    </Row>
                    <Row>
                        <Col xs={"12"} sm={"6"} lg={"6"} className="text-xs-start text-sm-end text-lg-end````"  >
                            <div data-aos="zoom-in-down">
                                <p>What is Lorem Ipsum?
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                    Why do we use it?
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                                </p>
                            </div>
                        </Col>
                        <Col xs={"12"} sm={"6"} lg={"6"} className="text-xs-start text-sm-start ">
                            <div data-aos="zoom-in-up">
                                <p >What is Lorem Ipsum?
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                    Why do we use it?
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container >
                <Footer />
            </div >
        )
    } else {
        return (
            <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
                <h1>404 not found</h1>
            </div>
        )
    }
}

export default Home
