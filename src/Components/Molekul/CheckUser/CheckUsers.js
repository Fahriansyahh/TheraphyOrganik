import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const CheckUsers = () => {
  const [data, setData] = useState([]);

  const value = sessionStorage.getItem("random");
  const location = useLocation();
  const path = location.pathname;
  const pathParts = path.split("/");
  const lastPath = pathParts.pop();
  const found = pathParts.includes(value);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/User/v1/GetById/${lastPath}`)
      .then((res) => {
        setData(res.data.data.User);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setData, lastPath]);
  if (found) {
    console.log(data);
    return (
      <div>
        <div className="row mt-3">
          <div className="col-10">
            <h1 className="display-6">Nama Users</h1>
          </div>

          <div className="col-2 mt-2">
            <a
              href={`/AdminPages/${value}`}
              style={{
                textAlign: "center",
                textDecoration: "none",
                color: "blue",
              }}
            >
              kembali
            </a>
          </div>
        </div>
        <hr></hr>
        <hr></hr>
        <div className="row d-flex justify-content-center">
          <div className="col-10 mt-3">
            <h3 className="h3">About</h3>
            <ul className="list-group ">
              <li className="list-group-item">FullName : {data.FullName}</li>
              <li className="list-group-item">Email : {data.Email}</li>
              <li className="list-group-item">NoHp : {data.NoHp}</li>
              <li className="list-group-item">Alamat : {data.Alamat}</li>
            </ul>
            <h3 className="h3 mt-4">Pesanan</h3>
            {data.Pesanan && data.Pesanan.length > 0 ? (
              data.Pesanan.map((pesanan, pesananIndex) => {
                return (
                  <ul className="list-group" key={pesananIndex}>
                    <li className="list-group-item">
                      Theraphy : {pesanan.Theraphy}
                    </li>
                    <li className="list-group-item">Harga : {pesanan.Harga}</li>

                    <li className="list-group-item">{pesanan.Paket}</li>
                    <li className="list-group-item">
                      Deskripsi : {pesanan.Deskripsi}
                    </li>
                    <li className="list-group-item">
                      Tanggal : {pesanan.Dari}-{pesanan.Sampai}
                    </li>
                  </ul>
                );
              })
            ) : (
              <p>No Pesanan available</p>
            )}
          </div>
        </div>
        <hr></hr>
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

export default CheckUsers;
