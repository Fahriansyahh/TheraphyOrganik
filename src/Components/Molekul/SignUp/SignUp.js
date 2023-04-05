import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import "./signUp.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignUpUserApi } from '../../../Config/Redux/Action/User';
const SignUp = () => {
    const [validated, setValidated] = useState(false);
    const [FullName, setFullName] = useState()
    const [Password, setPassword] = useState()
    const [Email, setEmail] = useState()
    const [NoHp, setNoHp] = useState()
    const [Alamat, setAlamat] = useState()
    const [errors, setErrors] = useState([])
    const [condition, setCondition] = useState(true)
    const [checked, setChecked] = useState()
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    const handleSignUP = () => {
        if (checked) {
            const data = { FullName, Password, Email, NoHp, Alamat }
            SignUpUserApi(data, setCondition, setErrors, toast)
        }
    }
    return (
        <Row style={{ backgroundColor: "aliceblue", borderRadius: "0px 0px 20px 20px",boxShadow: "0 0 10px black" }} className="mx-0 mt-3 py-3  SignUp ">
            <Col xs={"12"} sm={"12"} lg={"8"} className="mx-auto"  >
                <ToastContainer />
                {condition ? false : <Alert key={"warning"} variant={"warning"}>
                    <ul>
                        {errors.map(a => {
                            return (<li key={a?.msg}>{a?.msg}</li>)
                        })}
                    </ul>
                </Alert>}
                {checked ? false : <Alert key={"warning"} variant={"warning"}>
                    Theraphy ini Khusus Wanita Ceklis Jika Anda Seorang wanita
                </Alert>}
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" >
                            <Form.Label>Full name / Username</Form.Label>
                            <Form.Control
                                style={{ boxShadow: "0px 0px 5px black" }}
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue={FullName}
                                onChange={a => { setFullName(a.target.value) }}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" className="mt-1" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                style={{ boxShadow: "0px 0px 5px black" }}
                                required
                                type="password"
                                placeholder="Password"
                                defaultValue={Password}
                                onChange={a => { setPassword(a.target.value) }}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="8"
                            className="mt-1">
                            <Form.Label>Email</Form.Label>
                            <InputGroup >
                                <Form.Control
                                    style={{ boxShadow: "0px 0px 5px black" }}
                                    type="email"
                                    placeholder="Email@gmail.com"
                                    required
                                    onChange={a => { setEmail(a.target.value) }}
                                    defaultValue={Email}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4" xs="8"
                            className="mt-1 ">
                            <Form.Label>No Handphone</Form.Label>
                            <InputGroup  >
                                <Form.Control
                                    style={{ boxShadow: "0px 0px 5px black" }}
                                    type="number"
                                    placeholder="+62"
                                    required
                                    defaultValue={NoHp}
                                    onChange={a => { setNoHp(a.target.value) }}

                                />
                            </InputGroup>
                        </Form.Group>

                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="8" className="mx-auto" >
                            <Form.Label>Alamat</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="masukan alamat lengkap anda"
                                style={{ height: '100px', boxShadow: "0px 0px 5px black" }}
                                defaultValue={Alamat}
                                onChange={a => { setAlamat(a.target.value) }}

                            />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Apakah Anda seorang Wanita: Ya / Tidak"
                            onChange={(a) => {
                                setChecked(a.target.checked)
                            }}
                        />
                    </Form.Group>
                    <div className='d-flex justify-content-end'  >
                        <Button type="submit" className='me-3 px-4' style={{ borderRadius: "30px", boxShadow: "0px 0px 5px black" }} onClick={() => handleSignUP()} >Sign Up</Button>
                    </div>
                </Form>
            </Col>
        </Row>
    )
}

export default SignUp
