import React, { useState } from "react";
import "./Navbar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../Assets/image/Therapy_Organic.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Navbarr = (position) => {
  const position_ = position.position ? position.position : "static-top";
  const [Scroll, setScroll] = useState("");
  const history = useNavigate();
  const navScroll = () => {
    Scroll ? setScroll("") : setScroll("d-flex");
  };
  return (
    <Navbar bg="light" expand="md" className={`Nav ${position_}`}>
      <Container fluid className="container_Nav">
        <Navbar.Brand href="#home" className="Brand_Nav">
          <motion.div
            className="container"
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 20,
            }}
          >
            <img
              src={Logo}
              width="100"
              className="d-inline-block align-top image_Nav mb-5"
              alt="Therapy Organik"
            />
          </motion.div>
        </Navbar.Brand>
        <motion.div whileTap={{ scale: 1, rotate: 10 }}>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{ boxShadow: "0px 0px 5px black" }}
            onClick={() => {
              navScroll();
            }}
          />
        </motion.div>

        <Navbar.Collapse
          id="navbarScroll"
          className={`${Scroll} p-1 Nav_List  justify-content-md-start flex-column-reverse bd-highlight mt-sm-0 mt-md-5  `}
        >
          <Nav
            className="ms-auto me-2   my-2 my-lg-0 Nav_text me-md-5 Nav_text "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              className="text_Nav"
              onClick={() => {
                history("/");
              }}
            >
              Rumah
            </Nav.Link>
            <Nav.Link
              className="text_Nav"
              onClick={() => {
                history("/Products");
              }}
            >
              Produk
            </Nav.Link>
            <Nav.Link
              className="text_Nav"
              onClick={() => {
                history("/Theraphy");
              }}
            >
              Theraphy
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
