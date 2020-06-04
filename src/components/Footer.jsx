import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="page-footer font-small mdb-color pt-4 shadow-sm border-top bg-light">
      <div class="container text-center text-md-left">
        <div class="row text-center text-md-left mt-3 pb-3">
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 my-auto">
            <a href="/" className="text-decoration-none">
              <div className="text-center">
                <img
                  className="App-logo mb-3"
                  src={require("../images/bumi.svg")}
                  width="50"
                  height="50"
                  alt=""
                />
                <div className="text-left text-center text-decoration-none">
                  <p className="mb-0 h5 text-danger">AJAY ROCKS</p>
                  <p className="mb-0 text-secondary">
                    Select Rock for Your Life
                  </p>
                </div>
              </div>
            </a>
          </div>

          <hr class="w-100 clearfix d-md-none" />

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-secondary text-uppercase mb-4 font-weight-bold">
              Produk
            </h6>
            <p>
              <a href="/produk/batubeku" className="text-secondary">
                Batuan Beku
              </a>
            </p>
            <p>
              <a href="/produk/batumetamorf" className="text-secondary">
                Batuan Metamorf
              </a>
            </p>
            <p>
              <a href="/produk/fosil" className="text-secondary">
                Fosil
              </a>
            </p>
            <p>
              <a href="/produk/mineralbijih" className="text-secondary">
                Mineral Bijih
              </a>
            </p>
          </div>

          <hr class="w-100 clearfix d-md-none" />

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-secondary text-uppercase mb-4 font-weight-bold">
              Link
            </h6>
            <p>
              <Link to="#!" className="text-secondary">
                Akunku
              </Link>
            </p>
            <p>
              <Link to="#!" className="text-secondary">
                Daftar Pelapak
              </Link>
            </p>
            <p>
              <Link to="#!" className="text-secondary">
                Daftar Pembeli
              </Link>
            </p>
            <p>
              <Link to="/tambahproduk" className="text-secondary">
                Jual Batu
              </Link>
            </p>
          </div>

          <hr class="w-100 clearfix d-md-none" />

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-secondary">
            <h6 class="text-uppercase mb-4 font-weight-bold">Kontak</h6>
            <p>
              <a
                href="https://instagram.com/ahmadajip"
                className="text-secondary"
              >
                <i class="fab fa-instagram mr-3"></i> instagram.com/ahmadajip
              </a>
            </p>
            <p>
              <a href="https://twitter.com/ahmadajip" className="text-secondary">
                <i class="fab fa-twitter mr-3"></i> twitter.com/ahmadajip
              </a>
            </p>
            <p>
              <a href="https://fb.com/ahmadajip55" className="text-secondary">
                <i class="fab fa-facebook-f mr-4"></i> fb.com/ahmadajip
              </a>
            </p>
            <p>
              <a href="#!" className="text-secondary">
                <i class="fas fa-phone mr-3"></i> + 62 815 5685 2960
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
