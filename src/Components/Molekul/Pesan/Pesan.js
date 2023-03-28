import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import { GetAllToApiList } from '../../../Config/Redux/Action/ListTheraphy';
import { PesananApi } from '../../../Config/Redux/Action/User';
import "./Pesan.scss"
import { ToastContainer, toast } from 'react-toastify';
const Pesan = () => {
    const [validated, setValidated] = useState(false);
    const [ListToApi, setListToApi] = useState([])
    const [selectedTheraphy, setSelectedTheraphy] = useState("");
    const [Selected, HandleSelected] = useState([])
    const [dataList, setDataList] = useState()
    const [dari, setDari] = useState()
    const [sampai, setSampai] = useState()
    const [komentar, setKomentar] = useState()
    const [Error, setError] = useState()
    const [checked, setchecked] = useState()
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    const handleTheraphyChange = (event) => {
        setDataList(undefined)
        setSelectedTheraphy(event.target.value);
    }
    const handleTheraphyList = (event) => {
        if (event !== undefined) {
            setDataList(JSON.parse(event.target.value));
        }
    }
    const handlePesan = () => {
        if (selectedTheraphy && dataList && dari && sampai) {
            if (selectedTheraphy !== "Pilihan") {
                if (checked) {
                    const data = { Theraphy: selectedTheraphy, Paket: dataList.PilihanPaket, Dari: dari, Sampai: sampai, Deskripsi: dataList.deskripsi, Harga: dataList.harga, Komentar: komentar }
                    PesananApi(data, setError, toast)
                } else {
                    setError("Pastikan Persetujaan di bawah anda Ceklis")
                }
            } else {
                setError("Pastikan Pilihan Theraphy Anda ")
            }
        } else {
            setError("isi Pesanan Dengan Lengkap")
        }
    }
    useEffect(() => {
        GetAllToApiList(setListToApi)
        if (selectedTheraphy) {
            const tes = ListToApi.filter(a => {
                return a.title === selectedTheraphy

            })
            tes.map(a => HandleSelected(a.paket))
        }
    }, [ListToApi, selectedTheraphy, HandleSelected])
    return (
        <Row className='d-flex justify-content-center align-items-sm-center mt-3 Order_contain ' >
            <Col xs={"12"} sm={"8"}  >
                <ToastContainer />
                {Error ? <Alert key={"warning"} variant={"warning"}>
                    {Error}
                </Alert> : false}
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" xs="6" controlId="validationCustom01"  >
                            <Form.Label>Theraphy</Form.Label>
                            <Form.Select aria-label="Default select example" className='formSelect' onChange={handleTheraphyChange} size="sm"  >
                                <option >Pilihan</option>
                                {ListToApi.map(data => {
                                    return (
                                        <option value={data.title} key={data._id} style={{ fontSize: "14px" }}>
                                            {data.title}
                                        </option>
                                    )
                                })}
                            </Form.Select>

                        </Form.Group>
                        <Form.Group as={Col} md="6" xs="6" controlId="validationCustom02" >
                            <Form.Label>Paket</Form.Label>
                            <Form.Select aria-label="Default select example" className='formSelect' onChange={handleTheraphyList} size="sm" >

                                {Selected.map((data, index) => {
                                    if (dataList) {
                                        return (
                                            <option value={JSON.stringify(data)} key={data.PilihanPaket}>{data.PilihanPaket}</option>)
                                    } else {
                                        if (index === 0) {
                                            return (
                                                <React.Fragment key={data.PilihanPaket}>

                                                    <option  >---------  </option>
                                                    <option value={JSON.stringify(data)}>Pilihan</option>
                                                </React.Fragment>

                                            )
                                        } else {
                                            return 0
                                        }
                                    }

                                })}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 d-flex justify-content-sm-center justify-content-end" >
                        <Form.Group as={Col} md="4" xs="4" controlId="validationCustomUsername">
                            <Form.Label>Dari</Form.Label>
                            <Form.Control type="date" placeholder="Harga" required style={{ boxShadow: "0px 0px 3px black" }} onChange={(a) => {
                                setDari(a.target.value)
                            }} />
                        </Form.Group>
                        <Form.Group as={Col} md="4" xs="4" controlId="validationCustomUsername">
                            <Form.Label>Sampai</Form.Label>
                            <Form.Control type="date" placeholder="Harga" required style={{ boxShadow: "0px 0px 3px black" }}
                                onChange={(a) => {
                                    setSampai(a.target.value)
                                }} />
                        </Form.Group>
                    </Row>


                    <Row className="mb-3 d-flex align-items-center ">

                        <Form.Group as={Col} md="6" xs="7" controlId="validationCustom03">
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={`${dataList?.deskripsi ? dataList?.deskripsi : "deskripsi mengenai paket"}`}
                                style={{ height: '150px', boxShadow: "0px 0px 5px black" }}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="3" xs="5" controlId="validationCustomUsername">
                            <Form.Label  >Harga</Form.Label>
                            <Form.Control type="text" value={`Rp :${dataList?.harga ? dataList?.harga : "0"}`} required style={{ boxShadow: "0px 0px 3px black", fontSize: "14px", backgroundColor: "white" }} disabled readOnly />

                        </Form.Group>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Form.Group as={Col} md="9" controlId="validationCustom03">
                            <Form.Label>Komentar</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="jika ada keinginan tambahan"
                                style={{ height: '100px', boxShadow: "0px 0px 5px black" }}
                                onChange={(a) => {
                                    setKomentar(a.target.value)
                                }}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 d-flex justify-content-center align-items-lg-center " >
                        <Form.Group as={Col} md="12" controlId="validationCustom03">
                            <Form.Label className="mt-2">Penjelasan Theraphy</Form.Label>
                            <ListGroup style={{ height: "200px", overflow: "auto", boxShadow: "0px 0px 5px black" }} >
                                {ListToApi.map(data => {
                                    return (
                                        <ListGroup.Item key={data._id} className='m-0 p-0 List_thraphy_Pesan' style={{ height: "max-content" }} >
                                            <Accordion style={{ width: "100%" }} >
                                                <Accordion.Item eventKey="0" style={{ border: "0px solid black" }} >
                                                    <Accordion.Header><h5  >{data.title}</h5></Accordion.Header>
                                                    <Accordion.Body >
                                                        <p>{data.body}</p>
                                                        <br></br>
                                                        {/* catatan untuk About di bawah ini */}
                                                        <a href="https://theraphy/about/..." ><i>Penjelasan lengkap</i></a>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </ListGroup.Item>
                                    )
                                })}
                            </ListGroup>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Apakah Anda Yakin Ya/Tidak"
                            onChange={(a) => {
                                setchecked(a.target.checked)
                            }}
                        />
                    </Form.Group>
                    <Button className="btn_Order" onClick={() => {
                        handlePesan()
                    }} >Pesan Sekarang</Button>
                </Form>
            </Col>
        </Row >
    )
}

export default Pesan
