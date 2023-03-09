import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios"
import './GetListTheraphy.scss'
const GetListTheraphy = () => {
    const [dataAll, setDataAll] = useState([])
    axios.get("http://localhost:4000/ListTheraphy/v1/GetAll").then(res => {
        setDataAll(res.data.data)
    }).catch(err => {
        console.log(err)
    })
    return (
        <Container className="Container_dataList">
            <Row>
                <Col xs="12" className="mt-5">
                    <h2>Data List</h2>
                </Col>
                <Col xs="12" sm="12" lg="8" className='mx-auto pb-5' style={{ maxHeight: "600px", overflow: "auto", backgroundColor: "whitesmoke", borderRadius: "10px" }} >
                    {dataAll.map(data => {
                        const paket = data.paket || []
                        return (
                            <Accordion key={data._id} className="mt-3 Acordian_Public" style={{ boxShadow: "0px 0px 5px" }}>
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

export default GetListTheraphy
