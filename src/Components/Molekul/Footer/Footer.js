import React from "react";
import "./Footer.scss";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Whatsapp } from "../../Atom/Atom";
const Footer = () => {
  return (
    <>
      <Whatsapp />{" "}
      <MDBFooter
        style={{
          backgroundImage: "linear-gradient(to right, #b7ff00, #fffb00)",
          color: "white",
        }}
        className="text-center text-lg-start text-muted mt-4"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div></div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  Theraphy Organik
                </h6>
                <p>
                  Selamat datang di Terapi Organik, pusat terapi kesehatan yang
                  menghadirkan keajaiban alam melalui produk herbal berkualitas
                  tinggi dan layanan terapi yang terpersonalisasi.
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Sosial Media</h6>
                <p>
                  <a href="https://wa.me/628561704782" className="text-reset">
                    Whatsapp
                  </a>
                </p>
                <p>
                  <a
                    href="https://shopee.co.id/fahrian413"
                    className="text-reset"
                  >
                    Shoppe
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.instagram.com/bunda_hafifah/"
                    className="text-reset"
                  >
                    Instragram
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          @2024 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Muhammad Fahriansyah
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
