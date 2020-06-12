import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListProduk from "../components/ListProduk";
import { Link } from "react-router-dom";
import "../styles/style.css";

import { connect } from "react-redux";
import {
  getListProduk,
  filterProdukKategori,
  changeInput,
} from "../store/action/produk";
import {
  getProdukTransaksi
} from "../store/action/transaksi";

class Home extends Component {
  componentDidMount = async () => {
    if (localStorage.getItem("status") === "pembeli") {
      await this.props.getProdukTransaksi();
    }
    await this.props.getListProduk();
    const paramKategori = await this.props.match.params.produk;

    await this.props.filterProdukKategori(paramKategori);
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="jumbotron jumbotron-fluid mb-5">
          <div
            className="container"
            style={{
              marginBottom: "120px",
              marginTop: "120px",
            }}
          >
            <h1 className="display-3 text-center text-white">
              <strong>AJAY ROCKS & MINERALS</strong>
            </h1>
            <p className="h5 text-center text-white mx-5">
              "The Present is The Key to The Past" - James Hutton, 1785
            </p>
          </div>
        </div>
        <div className="container my-5">
          <h2
            className="mb-5"
            style={{
              width: "100%",
              textAlign: "center",
              borderBottom: "2px solid #000",
              lineHeight: "0.1em",
              margin: "10px 0px 20px",
            }}
          >
            <span style={{ background: "#fff", padding: "0 20px" }}>
              ROCKS YOUR LIFE
            </span>
          </h2>
          <div className="row">
            <div className="col-lg-7 mb-5">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="border" style={{ height: "670px" }}>
                      <img
                        class="d-block w-100"
                        src={require("../images/rock-walpaper.jpg")}
                        alt="First slide"
                        style={{
                          height: "670px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="border" style={{ height: "670px" }}>
                      <img
                        class="d-block w-100"
                        src={require("../images/jumbotronHome.jpg")}
                        alt="Second slide"
                        style={{ height: "670px", objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="border" style={{ height: "670px" }}>
                      <img
                        class="d-block w-100"
                        src={require("../images/limestone.jpg")}
                        alt="Third slide"
                        style={{ height: "670px", objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-lg-5 my-auto">
              <div className="row">
                <div className="col-lg-12 mb-5">
                  <Link className="text-decoration-none" to="/produk">
                    <div class="card card-home border-light shadow">
                      <img
                        class="card-img-top"
                        src={require("../images/kekar-kolom.jpg")}
                        alt="Card cap"
                        style={{ height: "150px", objectFit: "cover" }}
                      />
                      <p class="card-text text-secondary text-center my-1">
                        <strong>Dapatkan Your Rock Disini</strong>
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-12 mb-5">
                  <Link className="text-decoration-none" to="/tambahproduk">
                    <div class="card card-home border-light shadow">
                      <img
                        class="card-img-top"
                        src={require("../images/fossil.jpg")}
                        alt="Card cap"
                        style={{ height: "150px", objectFit: "cover" }}
                      />
                      <p class="card-text text-secondary text-center my-1">
                        <strong>Bagikan Your Rock dengan Kami</strong>
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-12 mb-5">
                  <Link className="text-decoration-none" to="/produk">
                    <div class="card card-home border-light shadow">
                      <img
                        class="card-img-top"
                        src={require("../images/limestone.jpg")}
                        alt="Card cap"
                        style={{ height: "150px", objectFit: "cover" }}
                      />
                      <p class="card-text text-secondary text-center my-1">
                        <strong>Lihat Koleksi Kami</strong>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2
            style={{
              width: "100%",
              textAlign: "center",
              borderBottom: "2px solid #000",
              lineHeight: "0.1em",
              margin: "10px 0px 20px",
            }}
          >
            <span style={{ background: "#fff", padding: "0 20px" }}>
              SELECT ROCKS
            </span>
          </h2>
          <ListProduk {...this.props} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataProduk: state.produk,
  };
};

const mapDispatchToProps = {
  getListProduk,
  filterProdukKategori,
  changeInput,
  getProdukTransaksi
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
