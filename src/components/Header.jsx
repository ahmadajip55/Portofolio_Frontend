import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { doLogout } from "../store/action/user";

const token = localStorage.getItem("token");

class Header extends Component {
  render() {
    console.log("ceeeek token", token);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container">
          <a className="text-decoration-none mr-5" href="/">
            <div className="row my-4">
              <img
                className="App-logo"
                src={require("../images/bumi.svg")}
                width="50"
                height="50"
                alt=""
              />
              <div className="text-left ml-3">
                <p className="mb-0 h5 text-danger">AJAY ROCKS</p>
                <p className="mb-0 text-secondary">Select Rock for Your Life</p>
              </div>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <a className="nav-link" href="/produkkategori/batubeku">
                  Beku
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/produkkategori/batusedimen">
                  Sedimen
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="."
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Lainnya
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-item">
                    <a
                      className="text-secondary"
                      href="/produkkategori/batumetamorf"
                    >
                      Metamorf
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      className="text-secondary"
                      href="/produkkategori/batualterasi"
                    >
                      Alterasi
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a className="text-secondary" href="/produkkategori/fosil">
                      Fosil
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      className="text-secondary"
                      href="/produkkategori/mineralbijih"
                    >
                      Mineral Bijih
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a className="text-secondary" href="/produk">
                      Semua Kategori
                    </a>
                  </li>
                </div>
              </li>
            </ul>
            {/* <Search /> */}
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto my-auto">
              <li className="nav-item mr-3 my-auto">
                <span className="nav-link my-auto">
                  <Link
                    to="/profil"
                    className="text-decoration-none text-secondary"
                  >
                    <i class="fas fa-user-circle h3 mb-0"></i>
                  </Link>
                </span>
              </li>

              {token !== null ? (
                <div className="row">
                  <div className="col-lg-8 pr-0">
                    <li className="nav-item my-auto">
                      <span className="nav-link">
                        <Link
                          to="/profil"
                          className="text-decoration-none text-secondary"
                        >
                          <p className="mb-0">
                            Hai <span>{localStorage.getItem("status")},</span>
                          </p>
                          <p className="mb-0">
                            {localStorage.getItem("username")}
                          </p>
                        </Link>
                      </span>
                    </li>
                  </div>
                  <div className="col-lg-4 pr-0 my-auto">
                    <li className="nav-item my-auto">
                      <a
                        href="/masuk/pembeli"
                        className="nav-link"
                        onClick={this.props.doLogout}
                      >
                        Keluar
                      </a>
                    </li>
                  </div>
                </div>
              ) : (
                <div className="row mb-0">
                  <div className="col-lg-6 pr-0 my-0">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="."
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Masuk
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li className="dropdown-item">
                          <a href="/masuk/pelapak" className="text-secondary">
                            Pelapak
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="/masuk/pembeli" className="text-secondary">
                            Pembeli
                          </a>
                        </li>
                      </div>
                    </li>
                  </div>

                  <div className="col-lg-6 pr-0 my-0">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="."
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Daftar
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li className="dropdown-item">
                          <a href="/daftar/pelapak" className="text-secondary">
                            Pelapak
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a className="text-secondary" href="/daftar/pembeli">
                            Pembeli
                          </a>
                        </li>
                      </div>
                    </li>
                  </div>
                </div>
              )}
            </ul>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto my-auto">
              <li className="nav-item my-auto">
                <Link to="/transaksi">
                  <i class="fas fa-shopping-cart text-secondary h4 mb-0"></i>
                </Link>
              </li>
            </ul>
            <div class="badge badge-pill badge-secondary text-secondary mb-3 ml-1">
              <p class="text-white mb-0" style={{ fontSize: "12px" }}>
                {localStorage.getItem("jumlahProdukTransaksi")}
              </p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
  };
};

const mapDispatchToProps = {
  doLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
