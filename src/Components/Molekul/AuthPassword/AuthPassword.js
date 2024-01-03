import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "./AuthPassword.scss";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthPassword = () => {
  const [Email, setEmail] = useState();
  const [error, setError] = useState(false);
  const history = useNavigate();
  const handleBack = () => {
    history("/Theraphy/OrderNow");
  };

  const handleAuthGmail = () => {
    const data = { Email };
    axios
      .put(
        `https://d4608642-6ba1-4fc1-b625-fc9fc8fcd476-00-qmjm9kj9xpab.picard.replit.dev/User/v1/KeyPassword`,
        data,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);

        history(`/Theraphy/OrderNow/KeyGmail/${res.data.data._id}`);
        sessionStorage.setItem("email", res.data.data.User.Email);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  return (
    <Container className="ContainAuth">
      <Row>
        <Col sm="12">
          <button
            style={{ backgroundColor: "transparent", border: "none" }}
            onClick={() => {
              handleBack();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-left-short fixed-top mt-3 ms-3 ms-sm-5 mt-sm-5 mt-lg-5"
              viewBox="0 0 16 16"
            >
              <path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
            </svg>
          </button>
        </Col>
      </Row>
      <Row
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Col xs={"12"} sm={"10"} lg={"6"}>
          <Card
            style={{
              width: "100%",
              height: "16rem",
              boxShadow: "0px 0px 2px black",
              borderRadius: "20px",
            }}
            className="cardAuth"
          >
            <Card.Body className="d-flex justify-content-end align-items-center flex-column px-5 ">
              <h3 className="text-center">Masukan gmail Anda</h3>
              {error ? (
                <Alert
                  key={"danger"}
                  variant={"danger"}
                  className="m-1 p-1 my-3"
                >
                  Email tidak ada
                </Alert>
              ) : (
                false
              )}

              <InputGroup className="mb-0 ">
                <Form.Control
                  type="email"
                  placeholder="masukan gmail anda"
                  onChange={(a) => {
                    setEmail(a.target.value);
                  }}
                />
              </InputGroup>
            </Card.Body>
            <Card.Body className="d-flex justify-content-end align-items-end  flex-column px-5 ">
              <Button
                variant="success"
                style={{ marginTop: "-70px", width: "100px" }}
                className="py-1"
                onClick={() => handleAuthGmail()}
              >
                Send
              </Button>{" "}
            </Card.Body>
            <p className="ms-2 mb-2">
              kebijakan Privasi{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 96 960 960"
              >
                <path d="m374 703 106-78 103 78-43-126 106-76H518l-38-125-38 125H314l104 76-44 126Zm106 272q-140-35-230-162.5T160 533V295l320-120 320 120v238q0 152-90 279.5T480 975Zm0-62q115-38 187.5-143.5T740 533V337l-260-98-260 98v196q0 131 72.5 236.5T480 913Zm0-337Z" />
              </svg>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthPassword;
