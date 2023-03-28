import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
const LogOutUser = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLogOut = () => {
        localStorage.removeItem("IdUser")
        setShow(false)
        window.location.reload()
    };

    return (
        <>
            <Nav.Link className='d-flex flex-column ' style={{ fontSize: "9px", textAlign: "center" }} onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20" style={{ fill: 'currentColor' }}>
                    <path d="M489 936v-60h291V276H489v-60h291q24 0 42 18t18 42v600q0 24-18 42t-42 18H489Zm-78-185-43-43 102-102H120v-60h348L366 444l43-43 176 176-174 174Z" />
                </svg>
                LogOut

            </Nav.Link>



            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Apakah Anda ingin keluar</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => {
                        handleLogOut()
                    }}>
                        LogOut
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LogOutUser