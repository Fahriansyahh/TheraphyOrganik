import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
const CreateModal = () => {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [truee, setTrue] = useState()
    const [Error, setError] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () => {
        setShow(true)
        const kategori = document.querySelector('#kategoriInput').value;
        const title = document.querySelector('#titleInput').value;
        const harga = document.querySelector('#hargaInput').value;
        const stock = document.querySelector('#stockInput').value;
        const link = document.querySelector('#linkInput').value;
        const keterangan = document.querySelector('#keteranganTextarea').value;
        const data = new FormData()
        data.append("Kategori", kategori)
        data.append("Title", title)
        data.append("image", image)
        data.append("Harga", harga)
        data.append("Keterangan", keterangan)
        data.append("Stock", stock)
        data.append("Link", link)

        axios.post("http://localhost:4000/Products/v1/Created", data, {
            headers: {
                "content-type": "multipart/form-data"
            }
        }).then(res => {
            setTrue(true)
            setError(false)
            setTimeout(function () {
                window.location.reload()
            }, 0)
        }).catch(err => {
            setTrue(false)
            const data = err.response.data.data.data.notValid
            setError(data)
        })

    };


    const imageSet = (a) => {
        setImage(a)
        setImageUrl(URL.createObjectURL(a))
    }
    return (
        <>
            <Button variant="success" style={{ backgroundImage: "linear-gradient(to bottom right, green, yellow)", fontWeight: "600" }} onClick={handleShow}>
                Create Products
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-plus" viewBox="0 0 16 16">
                    <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                </svg>
            </Button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title>Create Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {truee ?
                        <Alert key={"success"} variant={"success"}>
                            Create Products success
                        </Alert> : false}
                    {Error.length === 0 ? false : <Alert key={"danger"} variant={"danger"}>
                        {Error.map(data => {
                            return (
                                <p key={data.msg} >{data.msg}</p>
                            )
                        })}
                    </Alert>}
                    <Form>
                        {imageUrl ? <img src={imageUrl} alt={"asdasdaimage"} width={"200"} className="mb-2" ></img>
                            : false}
                        <input type={"file"} onChange={(a) => { imageSet(a.target.files[0]) }} ></input>

                        <Form.Group className="mb-3" controlId="kategoriInput">
                            <Form.Label>Kategori</Form.Label>
                            <Form.Control type="text" placeholder="Kategori Products" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="titleInput">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title Products" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="hargaInput">
                            <Form.Label>Harga</Form.Label>
                            <Form.Control type="text" placeholder="Harga Products" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="stockInput">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="text" placeholder="Stock Products" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="linkInput">
                            <Form.Label>Link</Form.Label>
                            <Form.Control type="text" placeholder="Link Products" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="keteranganTextarea">
                            <Form.Label>Keterangan</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
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

export default CreateModal
