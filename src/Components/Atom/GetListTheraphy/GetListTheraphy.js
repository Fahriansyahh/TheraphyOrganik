import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { GetAllToApiList, deleteToApi } from '../../../Config/Redux/Action/ListTheraphy';
import './GetListTheraphy.scss'
const GetListTheraphy = () => {
    const [setList, setListToApi] = useState([])
    GetAllToApiList(setListToApi)


    return (
        <Container className="Container_dataList">
            <Row>
                <Col xs="12" className="mt-5">
                    <h2>Data List</h2>
                </Col>
                <Col xs="12" sm="12" lg="8" className='mx-auto pb-5' style={{ maxHeight: "600px", overflow: "auto", backgroundColor: "whitesmoke", borderRadius: "10px" }} >
                    {setList.map(data => {
                        const paket = data.paket || []
                        return (
                            <Accordion key={data._id} className="mt-3 Acordian_Public " style={{ boxShadow: "0px 0px 5px" }}>
                                <ToastContainer />
                                <Accordion.Item className="my-5"  >
                                    <Accordion.Header>{data.title}</Accordion.Header>
                                    <Accordion.Body>

                                        <ListGroup variant="flush"  >
                                            <ListGroup.Item>Title : {data.title}</ListGroup.Item>
                                            <ListGroup.Item>Body : {data.body}</ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <ListGroup.Item style={{ borderRadius: "10px", boxShadow: "-0px -0px 4px" }} >
                                                        <Col xs="12" sm="12" lg="12" className="mx-auto ">
                                                            {paket.map(paket => {
                                                                return (
                                                                    <Accordion key={paket.PilihanPaket} defaultActiveKey="0" style={{ boxShadow: "-0px 0px 2px" }} className="Acordion_Circle" >
                                                                        <Accordion.Item eventKey="0">
                                                                            <Accordion.Header className='m-0 p-0' > {paket.PilihanPaket} </Accordion.Header>
                                                                            <Accordion.Body>
                                                                                <ListGroup style={{ boxShadow: "0px 0px 1px" }}>
                                                                                    <ListGroup.Item>
                                                                                        Deskripsi : {paket.deskripsi}
                                                                                    </ListGroup.Item>
                                                                                    <ListGroup.Item>Harga : {paket.harga}</ListGroup.Item>
                                                                                </ListGroup>
                                                                            </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    </Accordion>
                                                                )
                                                            })}

                                                        </Col>
                                                    </ListGroup.Item>

                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item className="d-flex justify-content-end">
                                                <Button variant="primary" className="me-2"  >Update</Button>{' '}
                                                <ModalDeleted data={data._id} Titles={data.title} />
                                            </ListGroup.Item>
                                        </ListGroup>


                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    })}

                </Col>
            </Row>
        </Container>
    )
}


const ModalDeleted = ({ data, Titles }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const deleteListTheraphy = (a) => {

        deleteToApi(toast, a)
        handleClose()
    }
    return (
        <>
            <Button variant="danger" className="me-4" onClick={handleShow} >Delete</Button>{' '}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Theraphy Organic</Modal.Title>
                </Modal.Header>
                <Modal.Body>Apakah anda Yakin ingin menghapus {Titles}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => {
                        deleteListTheraphy(data)
                    }} >
                        Deleted
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}




export default GetListTheraphy
