import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const ListTheraphy = () => {
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
        console.log(angka)
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
        console.log(title)
        console.log(body)
        console.log(cek)

    }


    return (
        <div >
            <Container className="container_listTheraphy" >
                <Row className="Row_Create_List d-flex justify-content-center py-5 " >
                    <Col sm="12" xs="12" lg="8" >
                        <h2 className='mt-3 me-2 mb-5'>Create List</h2>
                    </Col>
                    <Col sm="12" xs="12" lg="8" >
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} xs="6" lg="4" controlId="validationCustom01">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Title"
                                        defaultValue={title}
                                        onChange={(a) => { setTitle(a.target.value) }}

                                    />
                                </Form.Group>
                                <Form.Group as={Col} lg="8" controlId="validationCustom02">
                                    <Form.Label>Body</Form.Label>
                                    <Form.Control
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

                                        <Form.Group as={Col} xs="12" sm="8" lg="8" controlId="validationCustom03">
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Masukan Deskripsi tentang Paket"
                                                onChange={(a) => {
                                                    Object.deskripsi = a.target.value
                                                }}
                                                defaultValue={Object.deskripsi}
                                                style={{ height: '100px', boxShadow: "0px 0px 5px black" }}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} xs="12" sm="4" lg="4" controlId="validationCustom03">
                                            <InputGroup.Text className="p-0  ">
                                                <span className='p-2'>Harga</span>
                                                <Form.Control
                                                    defaultValue={Object.deskripsi}
                                                    onChange={(a) => { Object.harga = a.target.value }} type="text" placeholder="Masukan harga" required />
                                            </InputGroup.Text>
                                        </Form.Group>

                                    </Row>)


                            })}

                            <Row className='d-flex justify-content-center mt-4'>
                                <Form.Group className="mt-5">
                                    <Form.Check
                                        required
                                        label="tentukan jumlahkan paket sebelum di isi !"
                                        onChange={(a) => { setIsChecked(a.target.checked) }}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} xs="10" sm="8" lg="4" controlId="validationCustom03"  >
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
        </div>
    )
}

export default ListTheraphy
