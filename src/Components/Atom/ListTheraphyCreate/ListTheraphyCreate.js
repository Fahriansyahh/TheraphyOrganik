import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import "./ListTheraphyCreate.scss"
const ListTheraphyCreate = () => {
    const [validated, setValidated] = useState(false);
    const [angka, setAngka] = useState(0)
    const [body, setBody] = useState()
    const [title, setTitle] = useState()
    const [isChecked, setIsChecked] = useState(false);
    let cek = []
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    let arrAngka = []
    const handleCreatePaket = () => {
        if (angka === 0) {
            if (angka < 20) {
                setAngka(angka + 1)
            }
        } else {
            if (isChecked) {
                if (angka < 20) {
                    setAngka(angka + 1)
                }
            }
        }
    }

    for (let a = 0; a < angka; a++) {
        arrAngka.push(a)
    }
    useEffect(() => {
    })
    const valueCreate = () => {
        setTimeout(function () {

            sessionStorage.setItem(`dataList`, JSON.stringify(cek))
            const data = new FormData()
            cek = JSON.parse(sessionStorage.getItem("dataList"))


            data.append("title", title)
            data.append("body", body)
            cek.map((a, i) => {
                if (a.harga && a.deskripsi && isNaN(a.harga) === false) {
                    data.append("check", true)
                    data.append(`harga${i + 1}`, a.harga)
                    data.append(`deskripsi${i + 1}`, a.deskripsi)
                    return data
                } else {
                    data.append("title", false)
                    data.append("body", false)
                    data.append("check", false)
                    return data
                }

            })
            if (data.get("title") && data.get("body") && data.get("check")) {
                axios.post("http://localhost:4000/ListTheraphy/v1/Created", data, {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                }).then(() => {
                    toast('Create berhasil!');
                }).catch(err => {
                    toast('Data Gagal di tambahkan');
                    console.log(err)
                })
                sessionStorage.removeItem("dataList")
            } else {
                toast("Data Gagal di tambahkan")
            }
        }, 0)

    }
    return (
        <Container className="container_listTheraphy" >
            <Row className="Row_Create_List d-flex justify-content-center py-5 " >
                <Col sm="12" xs="12" lg="8" >
                    <h2 className='mt-3 me-2 mb-5'>Create List</h2>
                    <ToastContainer />
                </Col>
                <Col sm="12" xs="12" lg="8" >
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} xs="6" lg="4" >
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Title"
                                    defaultValue={title}
                                    onChange={(a) => { setTitle(a.target.value) }}

                                />
                            </Form.Group>
                            <Form.Group as={Col} lg="8" >
                                <Form.Label>Body</Form.Label>
                                <Form.Control
                                    required
                                    as="textarea"
                                    defaultValue={body}
                                    placeholder="Masukan Penjelasan tentang Theraphy"
                                    style={{ height: '100px', boxShadow: "0px 0px 5px black" }}
                                    onChange={(a) => {
                                        setBody(a.target.value)
                                    }}

                                />
                            </Form.Group>

                        </Row>
                        {arrAngka.map((a, i) => {
                            const Object = {
                                paket: `paket${i + 1}`
                            }

                            cek.push(Object)
                            // sessionStorage.setItem(`paket${i + 1}`, JSON.stringify(Object));

                            return (
                                <Row className=" d-flex align-items-center" key={a}>
                                    <Form.Group as={Col} lg="12" className='d-flex justify-content-center mt-2 mb-1'>
                                        <Form.Label><h3>paket{` ${a + 1}`}</h3></Form.Label>
                                    </Form.Group>

                                    <Form.Group as={Col} xs="12" sm="8" lg="8" >
                                        <Form.Control
                                            required
                                            as="textarea"
                                            placeholder="Masukan Deskripsi tentang Paket"
                                            onChange={(a) => {
                                                Object.deskripsi = a.target.value
                                            }}
                                            defaultValue={Object.deskripsi}
                                            style={{ height: '100px', boxShadow: "0px 0px 5px black" }}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} xs="12" sm="4" lg="4" >
                                        <InputGroup.Text className="p-0  ">
                                            <span className='p-2'>Harga</span>
                                            <Form.Control
                                                required
                                                defaultValue={Object.deskripsi}
                                                onChange={(a) => { Object.harga = a.target.value }} type="text" placeholder="Masukan harga" />
                                        </InputGroup.Text>
                                    </Form.Group>

                                </Row>)


                        })}

                        <Row className='d-flex justify-content-center mt-4'>
                            <Form.Group className="mt-5">
                                <Form.Check
                                    label="tentukan jumlahkan paket sebelum di isi !"
                                    onChange={(a) => { setIsChecked(a.target.checked) }}
                                />
                            </Form.Group>
                            <Form.Group as={Col} xs="10" sm="8" lg="4"  >
                                <Button type="submit" style={{ width: "100%" }} variant="outline-success" onClick={() => handleCreatePaket()} >Create Paket</Button>
                            </Form.Group>
                        </Row>

                        <div className='d-flex justify-content-end me-3 mt-4'>
                            <Button type="submit" variant="success" onClick={(event) => { valueCreate() }}>Submit</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ListTheraphyCreate
