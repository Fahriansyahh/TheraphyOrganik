import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../Assets/image/Therapy_Organic.png";
import "./ComponentsPagesAdmin.scss";
import ListTheraphy from "../ListTheraphy/ListTheraphy";
import { useLocation } from "react-router-dom";
import { Products, AdminHome } from "../../../Pages/index";
const ComponentsPagesAdmin = () => {
  const [Pages, setPages] = useState();
  const value = sessionStorage.getItem("random");
  const location = useLocation();
  const path = location.pathname;
  const pathParts = path.split("/");
  const found = pathParts.includes(value);

  if (found) {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Container className="Container_Admin_Nav d-flex align-items-center">
            <Navbar.Brand className="d-flex align-items-center">
              <img
                src={Logo}
                width="100"
                className="d-inline-block align-top image_nav_Admin my-auto "
                alt="Therapy Organik"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mt-2 me-2 d-flex justify-content-end "
                style={{ maxHeight: "100px", width: "100%" }}
                navbarScroll
              >
                <Nav.Link
                  className="d-flex justify-content-end"
                  onClick={() => {
                    setPages("AdminHome");
                  }}
                >
                  Admin-Home
                </Nav.Link>
                <Nav.Link
                  className="d-flex justify-content-end"
                  onClick={() => {
                    setPages("ListTheraphy");
                  }}
                >
                  List-Therapy
                </Nav.Link>
                <Nav.Link
                  className="d-flex justify-content-end"
                  onClick={() => {
                    setPages("Products");
                  }}
                >
                  Products
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {!Pages ? <AdminHome /> : false}
        {Pages === "AdminHome" ? <AdminHome /> : false}
        {Pages === "ListTheraphy" ? <ListTheraphy /> : false}
        {Pages === "Products" ? <Products /> : false}
      </>
    );
  } else {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1>404 page not found</h1>
      </div>
    );
  }
};

export default ComponentsPagesAdmin;
