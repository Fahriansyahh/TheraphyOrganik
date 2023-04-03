import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "./Pemesanan.scss"
import { GetIdUserApi } from '../../../Config/Redux/Action/User';
const Pemesanan = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        GetIdUserApi(setData)
    }, [setData])

    return (
        <Container className='containerPemasanan'>
            <Row className='mt-2 mb-2 d-flex align-items-center '>
                {data?.Pesanan ? data?.Pesanan.map(data => {
                    return (<Col sm="6" className="my-3 mx-auto ColPesan" key={Math.random().toString(36).substr(2, 9)} >
                        <Card style={{ width: '100%', borderRadius: "10px" }} className='m-0 p-0'>
                            <Card.Body className='m-0 p-0'>
                                <Container className='m-0 p-0 CardsPemesanan'>
                                    <Row className='mb-3 '  >
                                        <Col sm="12">
                                            <div className='bgcPesan'
                                                style={{ borderRadius: "10px 10px 0px 0px" }}
                                            ></div>
                                        </Col>
                                    </Row>
                                    <Row className='mb-3 px-2'>
                                        <Col sm="12">
                                            <h1>
                                                <Card.Title>{data.Theraphy}</Card.Title>
                                            </h1>
                                            <h2>
                                                <Card.Subtitle className="mb-2 text-muted">Pesanan sedang di Proses</Card.Subtitle>
                                            </h2>
                                        </Col>
                                    </Row>
                                    <Row className=' px-2 d-flex flex-wrap'>
                                        <Col xs="6" lg="6">
                                            <Card.Text>
                                                <span>
                                                    Paket : {data.Paket}
                                                </span>
                                            </Card.Text>
                                        </Col>
                                        <Col xs="6" lg="6">
                                            <Card.Text>
                                                <span>
                                                    harga : {data.Harga}
                                                </span>
                                            </Card.Text>
                                        </Col>
                                        <Col xs="6" lg="6">
                                            <Card.Text>
                                                <span>
                                                    dari : {data.Dari}
                                                </span>
                                            </Card.Text>
                                        </Col>
                                        <Col xs="6" lg="6">
                                            <Card.Text>
                                                <span>
                                                    sampai : {data.Sampai}
                                                </span>
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                    <Row className='mt-1 px-2'>
                                        <Col sm="12" className='my-3' >
                                            <Card.Text>
                                                Deskripsi : {data.Deskripsi}
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col sm="12">
                                            <div className='bgcPesan'
                                                style={{ borderRadius: "0px 0px 10px 10px" }}
                                            ></div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>)
                }) : false}
            </Row>
        </Container>
    )
}

export default Pemesanan