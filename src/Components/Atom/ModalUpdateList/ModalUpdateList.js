import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios"
import Form from 'react-bootstrap/Form';

const ModalUpdateList = (id) => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState()
    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [paket, setPaket] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSave = () => {
        setShow(false);

        const updatedData = {
            title: title || data?.title,
            body: body || data?.body,
            paket: paket
        }
        console.log(updatedData)
        axios.put(`http://localhost:4000/ListTheraphy/v1/update/${id.id}`, updatedData)
            .then(res => {
                console.log(res.data);
                window.location.reload()
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        if (id.id) {
            axios.get(`http://localhost:4000/ListTheraphy/v1/getById/${id.id}`)
                .then(res => {
                    setData(res.data.data)
                    setPaket(res.data.data.paket)
                })
                .catch(err => {
                    console.log(err)
                });
        }
    }, [id, setData, setPaket]);
    const handlePaketDesk = (index, value) => {
        setPaket(prevPaket => {
            const paket = [...prevPaket];
            paket[index].deskripsi = value;
            return paket;
        });
    }

    const handlePaketHarga = (index, value) => {
        setPaket(prevPaket => {
            const paket = [...prevPaket];
            paket[index].harga = value;
            return paket;
        });
    }

    return (
        <>
            <Button variant="primary" className="me-2" onClick={handleShow}>
                update
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{data?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label >title</Form.Label>
                            <Form.Control defaultValue={title || data?.title} type="text" placeholder="masukan title" onChange={(e) => { setTitle(e.target.value) }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>body</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                defaultValue={body || data?.body}
                                placeholder="Masukan Penjelasan tentang Theraphy"
                                style={{ height: '100px', boxShadow: "0px 0px 5px black" }}
                                onChange={(e) => { setBody(e.target.value) }}
                            />
                        </Form.Group>

                        {paket.map((paket, index) => {
                            return (
                                <div key={index}>
                                    <Form.Label className='d-flex justify-content-center' >
                                        <h4 style={{ textDecoration: "underline" }}>
                                            Paket {index + 1}
                                        </h4>
                                    </Form.Label>

                                    <div>
                                        <Form.Group className="mb-3" controlId={`deskripsi${index}`}>
                                            <Form.Label>Deskripsi Paket</Form.Label>
                                            <Form.Control defaultValue={paket.deskripsi} type="text" placeholder={`Deskripsi Paket ${index + 1}`} onChange={(e) => { handlePaketDesk(index, e.target.value) }} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId={`harga${index}`}>
                                            <Form.Label>Harga Paket</Form.Label>
                                            <Form.Control defaultValue={paket.harga} type="number" placeholder={`Harga Paket ${index + 1}`} onChange={(e) => { handlePaketHarga(index, e.target.value) }} />
                                        </Form.Group>
                                    </div>
                                </div>
                            )
                        })}

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalUpdateList
