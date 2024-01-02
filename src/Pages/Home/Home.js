import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { Navbarr, Footer } from "../../Components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "./Home.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Herbal from "../../Assets/image/Herbal.jpg";
import { motion } from "framer-motion";
import { Cube } from "../../Components/Atom/Atom";
const Home = () => {
  const history = useNavigate();
  const { Global } = useSelector((state) => state.Global);
  const dispatch = useDispatch();

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
  const textAnimate =
    "Sesuaikan pilihan Anda sesuai dengan Keinginan Anda. Tombol 'Products' akan membawamu ke produk-produk jamu dan alat kecantikan kami, sedangkan tombol 'Theraphy Organic' akan membawamu ke jasa kami.";

  const textArray = textAnimate.split("");
  useEffect(() => {
    gsap.set(".text_header", {
      duration: 0,
      y: -110,
      opacity: 0,
    });
    gsap.to(".text_header", {
      duration: 1,
      y: 0,
      opacity: 1,
    });
    gsap.set(".Btn_bgc", {
      duration: 0,
      y: 110,
      opacity: 0,
    });
    gsap.to(".Btn_bgc", {
      duration: 1,
      y: 0,
      opacity: 1,
    });

    AOS.init();
    dispatch({ type: "Global", payload: "asdasdasda" });
  }, [dispatch, Global]);
  const Random = sessionStorage.getItem("random");
  const location = useLocation();
  const path = location.pathname;
  const lastPartOfPath = path.split("/").pop();
  if (lastPartOfPath === Random || lastPartOfPath === "") {
    return (
      <div className="Home_container">
        <Navbarr position="fixed-top" />
        <header>
          <div className="background_Header" style={{ marginTop: "110px" }}>
            <Container>
              <Row className="text-center d-flex  flex-column justify-content-center align-items-center ">
                <Col xs={"12"} sm={"12"} className="mb-2 text_header">
                  <motion.span
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {textArray.map((text, index) => {
                      return (
                        <motion.span
                          key={index + "-text"}
                          variants={letterVariants}
                        >
                          {text}
                        </motion.span>
                      );
                    })}
                  </motion.span>
                </Col>
                <Col
                  xs={"12"}
                  sm={"12"}
                  style={{
                    width: "300px",
                    margin: "0px auto",
                    backdropBlur: "2px",
                    backdropFilter: "blur(2px)",
                    borderRadius: "10px",
                    zIndex: "1",
                  }}
                >
                  <Button
                    variant="outline-primary Btn_bgc"
                    onClick={() => history("/Theraphy")}
                  >
                    Theraphy_Organic
                  </Button>{" "}
                  <Button
                    variant="outline-primary Btn_bgc"
                    onClick={() => {
                      history("/Products");
                    }}
                  >
                    Products
                  </Button>{" "}
                </Col>
              </Row>
            </Container>
          </div>
        </header>
        <Container
          style={{
            width: "100%",
          }}
        >
          <Row>
            <Col xs={"12"} sm={"12"}>
              <div className="Header_text">
                <h1 style={{ marginTop: "100px" }}>Theraphy_Organic</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              xs={"12"}
              sm={"6"}
              lg={"6"}
              className="text-xs-start text-sm-end text-lg-end````"
            >
              <div data-aos="fade-up" data-aos-duration="3000">
                <p>
                  Terapi Organik Kesehatan adalah tujuan utama bagi para wanita
                  yang menghargai keindahan alami . Di sini, kami menghadirkan
                  layanan jasa kecantikan khusus untuk wanita, dirancang untuk
                  meningkatkan kecantikan Wanita. Tim terapis kami yang
                  berpengalaman menawarkan perawatan kecantikan yang tidak hanya
                  memberikan hasil yang memukau, tetapi juga memperhatikan
                  kesejahteraan keseluruhan Anda. Mulai dari perawatan kulit
                  hingga terapi relaksasi, kami berkomitmen untuk memberikan
                  pengalaman kecantikan yang mendalam dan menyeluruh.
                </p>
              </div>
            </Col>
            <Col
              xs={"12"}
              sm={"6"}
              lg={"6"}
              className="text-xs-start text-sm-start "
            >
              <div data-aos="fade-up" data-aos-duration="2000">
                <p>
                  Terapi Organik Kesehatan adalah tujuan utama bagi para wanita
                  yang menghargai keindahan alami. Di sini, kami menghadirkan
                  layanan jasa kecantikan khusus untuk wanita, dirancang untuk
                  meningkatkan kecantikan luar dan dalam. Tim terapis kami yang
                  berpengalaman menawarkan perawatan kecantikan yang tidak hanya
                  memberikan hasil yang memukau, tetapi juga memperhatikan
                  kesejahteraan keseluruhan Anda.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 HerbalProducts">
            <Col xs="12" sm="12" lg="7">
              <img src={Herbal} alt={"herbal"} width="100%"></img>
            </Col>
            <div
              data-aos="fade-right"
              className=" AnimateHerbal d-flex  flex-column justify-content-center align-items-center "
            >
              <p className="m-auto">100 % herbal</p>
            </div>

            <Col xs="12" sm="12" lg="5" className="m-auto">
              <h3 className="mt-5" data-aos="zoom-in-down">
                Produk
              </h3>
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-offset="0"
              >
                Produk-produk unggulan dari Therapi Organik adalah pilihan
                terbaik bagi mereka yang mengutamakan kecantikan alami. Kami
                dengan bangga menawarkan beragam produk alami, mulai dari jamu,
                alat pemutih wanita, hingga pelangsing wanita, semuanya
                dirancang khusus menggunakan bahan-bahan herbal berkualitas
                tinggi. Keunggulan utama produk-produk kami adalah 100% bahan
                alami, memberikan kepercayaan kepada pelanggan bahwa setiap
                produk telah dipilih dengan cermat untuk mendukung kesehatan dan
                kecantikan mereka secara alami.
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center d-flex align-items-center">
            <Col xs={"12"} sm={"8"} lg={"8"} className="order-2  order-sm-1">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-offset="0"
              >
                Selamat datang di Therapy Organik, sebuah perusahaan yang
                berdedikasi untuk membawa pengalaman kecantikan dan kesehatan
                organik ke dalam hidup Anda. Di Therapy Organik, kami memahami
                bahwa keindahan sejati berasal dari kebaikan alam, dan itulah
                mengapa kami berkomitmen untuk menyediakan layanan kecantikan
                dan produk herbal terbaik.
                <br></br>
                <br></br>
                Kami menggabungkan kebijaksanaan tradisional herbal dengan
                inovasi modern untuk menciptakan solusi kecantikan. Dengan staf
                terapis berpengalaman dan produk berkualitas tinggi, kami
                memastikan setiap kunjungan ke Therapy Organik adalah perjalanan
                yang membawa keseimbangan dan kesejahteraan.
              </p>
            </Col>
            <Col xs={"12"} sm={"4"} lg={"4"} className="order-1 order-sm-2">
              <Cube />
            </Col>
            <Col
              sm={"12"}
              xs={"12"}
              lg={"10"}
              className="mt-5 mx-auto order-3 order-sm-3"
            >
              <div style={{ marginBottom: "-50px" }} className="mt-5">
                <div
                  style={{
                    width: "40%",
                    height: "25px",
                    backgroundImage:
                      "linear-gradient(to bottom right,#27140f, #692a20)",
                    borderRadius: "30px 30px 0px 0px",
                  }}
                  className="m-auto"
                  data-aos="fade-down"
                  data-aos-duration="0"
                  data-aos-delay="300"
                ></div>
                <div
                  style={{
                    width: "70%",
                    height: "25px",
                    backgroundImage:
                      "linear-gradient(to bottom right,#27140f, #692a20)",
                    borderRadius: "30px 30px 0px 0px",
                  }}
                  className="m-auto"
                  data-aos="fade-down"
                  data-aos-duration="0"
                  data-aos-delay="200"
                ></div>
                <div
                  style={{
                    width: "100%",
                    height: "25px",
                    backgroundImage:
                      "linear-gradient(to bottom right,#27140f, #692a20)",
                    borderRadius: "10px 10px 0px 0px",
                  }}
                  data-aos="fade-down"
                  data-aos-duration="0"
                  data-aos-delay="100"
                ></div>
              </div>
              <div className="Container_Petunjuk d-flex justify-content-center">
                <ListGroup
                  style={{
                    width: "100%",
                    backgroundImage:
                      "linear-gradient(to bottom right,green, yellow)",
                    padding: "10px",
                  }}
                  className="Container_Petunjuk mt-5 d-flex justify-content-center"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <h4
                    className="text-center"
                    data-aos="zoom-in-up"
                    data-aos-offset="0"
                  >
                    Theraphy_Organik
                  </h4>

                  <ListGroup.Item
                    style={{ backgroundColor: "transparent", color: "white" }}
                    data-aos="flip-up"
                    data-aos-duration="0"
                    data-aos-delay="100"
                    data-aos-offset="0"
                    className="item_"
                  >
                    <h6>Produk Kami:</h6>
                    <ul>
                      <li>
                        Temukan berbagai produk terapi yang kami tawarkan untuk
                        membantu memenuhi kebutuhan kesehatan dan kesejahteraan
                        Anda.
                      </li>
                      <li>
                        Produk terapi kami terdiri dari berbagai macam alat dan
                        perangkat kesehatan, minuman kesehatan, dan suplemen
                        alami yang dirancang untuk membantu meningkatkan
                        kualitas hidup Anda.
                      </li>
                    </ul>
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ backgroundColor: "transparent", color: "white" }}
                    data-aos="flip-up"
                    data-aos-duration="0"
                    data-aos-offset="0"
                    data-aos-delay="200"
                    className="item_"
                  >
                    <h6>Pemesanan Jasa Kami:</h6>
                    <ul>
                      <li>
                        Dengan pemesanan jasa terapi kami, Anda dapat memperoleh
                        manfaat dari layanan terapi berkualitas tinggi dari para
                        ahli terapi kami.
                      </li>
                      <li>
                        Kami menawarkan layanan terapi berbagai macam jenis,
                        termasuk terapi pijat, refleksiologi, aromaterapi, dan
                        banyak lagi.
                      </li>
                      <li>
                        {" "}
                        Kami menawarkan layanan terapi berbagai macam jenis,
                        termasuk terapi pijat, refleksiologi, aromaterapi, dan
                        banyak lagi.
                      </li>
                    </ul>
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ backgroundColor: "transparent", color: "white" }}
                    data-aos="flip-up"
                    data-aos-duration="0"
                    data-aos-offset="0"
                    data-aos-delay="300"
                    className="item_"
                  >
                    <h6>Tentang Kami:</h6>
                    <ul>
                      <li>
                        Kami adalah penyedia jasa terapi yang berkomitmen untuk
                        membantu meningkatkan kesehatan dan kesejahteraan Anda.
                      </li>
                      <li>
                        Para ahli terapi kami memiliki pengalaman dan
                        pengetahuan yang luas dalam bidang terapi dan selalu
                        berusaha memberikan layanan terbaik untuk Anda.
                      </li>
                      <li>
                        {" "}
                        Kami mengutamakan keamanan dan kenyamanan Anda dalam
                        setiap layanan terapi yang kami berikan.
                      </li>
                      <li>
                        {" "}
                        Dengan dukungan tim terapi kami yang berdedikasi, kami
                        siap membantu Anda mencapai tujuan kesehatan dan
                        kesejahteraan Anda.
                      </li>
                    </ul>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  } else {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1>404 not found</h1>
      </div>
    );
  }
};

export default Home;
