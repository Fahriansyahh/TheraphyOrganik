import React, { useRef, useState } from "react";
import {
  Footer,
  Navbarr,
  Pesan,
  SignUp,
  SignIn,
  LogOutUser,
  Pemesanan,
} from "../../Components";
import { CanvasUser } from "../../Components/Atom/Atom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Order.scss";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
const Order = () => {
  const [first, setFirst] = useState(true);
  const [home, setHome] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [pesan, setPesan] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const pilihan = (seting) => {
    console.log(seting);
    if ("home" === seting) {
      setHome(true);
      setSignIn(false);
      setSignUp(false);
      setPesan(false);
    }
    if ("SignIn" === seting) {
      setHome(false);
      setSignIn(true);
      setSignUp(false);
      setPesan(false);
    }
    if ("SignUp" === seting) {
      setHome(false);
      setSignIn(false);
      setSignUp(true);
      setPesan(false);
    }
    if ("pesanan" === seting) {
      setHome(false);
      setSignIn(false);
      setSignUp(false);
      setPesan(true);
    }
    setShow(!show);
    setFirst(false);
  };
  const getId = localStorage.getItem("IdUser");
  return (
    <div>
      <Navbarr />
      <Container className={"Container_Order mb-3"}>
        <Row>
          <Col xs={"12"} sm={"12"} className="Col_Order">
            <Navbar
              bg="dark"
              variant="dark"
              className="mt-2 "
              style={{ borderRadius: "10px", boxShadow: "0px 0px 3px black" }}
            >
              <Container>
                <Row style={{ width: "100%" }}>
                  <Col sm={"8"} xs={"10"} className="d-flex align-items-center">
                    <Nav className=" d-flex flex-wrap  ">
                      <Nav.Link
                        onClick={() => {
                          pilihan("home");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-house"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                        </svg>
                      </Nav.Link>
                      <Nav.Link
                        style={{ fontSize: "10px", textAlign: "center" }}
                        className="d-flex flex-column mt-1"
                        href="https://wa.me/628561704782"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          class="bi bi-whatsapp"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                      </Nav.Link>
                      {getId ? (
                        <Overlay
                          target={target.current}
                          show={show}
                          placement="top"
                        >
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              Pesanan
                            </Tooltip>
                          )}
                        </Overlay>
                      ) : (
                        false
                      )}

                      {getId ? (
                        <Nav.Link
                          ref={target}
                          onClick={() => {
                            pilihan("pesanan");
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            fill="currentColor"
                            className="bi bi-box2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z" />
                          </svg>
                        </Nav.Link>
                      ) : (
                        false
                      )}

                      {getId ? (
                        false
                      ) : (
                        <Nav.Link
                          className="d-flex flex-column "
                          style={{ fontSize: "9px", textAlign: "center" }}
                          onClick={() => {
                            pilihan("SignIn");
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            viewBox="0 96 960 960"
                            width="20"
                            style={{ fill: "currentColor" }}
                          >
                            <path d="M489 936v-60h291V276H489v-60h291q24 0 42 18t18 42v600q0 24-18 42t-42 18H489Zm-78-185-43-43 102-102H120v-60h348L366 444l43-43 176 176-174 174Z" />
                          </svg>
                          SignIn
                        </Nav.Link>
                      )}
                      {getId ? (
                        <LogOutUser />
                      ) : (
                        <Nav.Link
                          className="d-flex flex-column "
                          style={{ fontSize: "9px", textAlign: "center" }}
                          onClick={() => {
                            pilihan("SignUp");
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            viewBox="0 96 960 960"
                            width="20"
                            style={{ fill: "currentColor" }}
                          >
                            <path d="M489 936v-60h291V276H489v-60h291q24 0 42 18t18 42v600q0 24-18 42t-42 18H489Zm-78-185-43-43 102-102H120v-60h348L366 444l43-43 176 176-174 174Z" />
                          </svg>
                          SignUp
                        </Nav.Link>
                      )}
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
        {pesan ? <Pemesanan /> : false}
      </Container>
      <Footer />
    </div>
  );
};

export default Order;
