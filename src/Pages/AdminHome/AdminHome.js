import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteId } from "../../Config/Redux/Action/User";
const AdminHome = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1); // New state to keep track of the current page
  const [valueSearch, setValueSearch] = useState();

  //!setup path

  const value = sessionStorage.getItem("random");
  const location = useLocation();
  const path = location.pathname;
  const lastPartOfPath = path.split("/").pop();

  useEffect(() => {
    axios
      .get(`${"http://localhost:4000/User/v1/GetPages?page=" + currentPage}`)
      .then((res) => {
        setData(res.data.response);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage, valueSearch]);

  const fetchData = (page, value) => {
    axios
      .get(
        `${
          valueSearch
            ? "http://localhost:4000/User/v1/Search?q=" + value
            : "http://localhost:4000/User/v1/GetPages?page=" + page
        }`
      )
      .then((res) => {
        setData(res.data.response);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          type="button"
          className={`btn ${
            i === currentPage ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const handlePageClick = (page) => {
    setCurrentPage(page); // Update the current page state
  };

  const handleClick = (id) => {
    console.log(id);
    // Gantilah '/user' dengan path halaman yang diinginkan
    window.location.href = `/AdminHome/${lastPartOfPath}/CheckUsers/${id}`;
  };

  if (lastPartOfPath === value) {
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-10">
          <p className="h2 mt-5">Users</p>
          <hr></hr>
          <div className="table-responsive">
            {" "}
            {/* Wrap the table with .table-responsive */}
            <div className="input-group mt-2 d-flex justify-content-end mt-3">
              <div className="form-outline" data-mdb-input-init>
                <input
                  type="search"
                  id="form1"
                  className="form-control"
                  onChange={(event) => {
                    setValueSearch(event.target.value);
                  }}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                data-mdb-ripple-init
                onClick={() => {
                  fetchData(currentPage, valueSearch);
                }}
              >
                <i className="fas fa-search"></i>
                Search
              </button>
            </div>
            <table className="table mt-1">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Email</th>
                  <th scope="col">NoHp</th>
                  <th scope="col">aktivitas</th>
                </tr>
              </thead>
              <tbody>
                {data
                  ? data.map((datas, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{datas.User.FullName}</td>
                          <td>{datas.User.Email}</td>
                          <td>{datas.User.NoHp}</td>
                          <td>
                            <div className="d-flex flex-wrap">
                              <button
                                type="button"
                                className="btn btn-info "
                                onClick={() => {
                                  handleClick(datas._id);
                                }}
                              >
                                lihat
                              </button>
                              <ModalDeleted
                                data={datas._id}
                                Titles={datas.User.FullName}
                              />
                              <i className="bi bi-trash3"></i>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  : false}
              </tbody>
            </table>
          </div>
          <div
            className="btn-toolbar d-flex justify-content-center"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group me-2"
              role="group"
              aria-label="First group"
            >
              {renderPageButtons()}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1>404 page not found</h1>
      </div>
    );
  }
};

const ModalDeleted = ({ data, Titles }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const removeUser = (value) => {
    deleteId(value);
    handleClose();
  };
  return (
    <>
      <Button variant="danger" className="me-4" onClick={handleShow}>
        Delete
      </Button>{" "}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Theraphy Organic</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah anda Yakin ingin menghapus {Titles}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              removeUser(data);
            }}
          >
            Deleted
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminHome;
