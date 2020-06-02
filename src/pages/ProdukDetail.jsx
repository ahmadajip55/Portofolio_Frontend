import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  getListProduk,
  filterProdukId,
  deleteProduk,
} from "../store/action/produk";
import {
  addProdukTransaksi,
  postProdukTransaksi,
} from "../store/action/transaksi";

class ProdukDetail extends Component {
  componentDidMount = async () => {
    await this.props.getListProduk();
    const paramId = this.props.match.params.id;
    this.props.filterProdukId(paramId);
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row ">
            <div className="col-lg-2"></div>
            {this.props.dataProduk.filterProduk
              ? this.props.dataProduk.filterProduk.map((item) => (
                  <div
                    className="col-lg-8 border border-light shadow mb-5 mt-5 p-0"
                    style={{ borderRadius: "50px" }}
                  >
                    <div className="col-lg-12 p-0">
                      <div
                        id="carouselExampleControls"
                        class="carousel slide"
                        data-ride="carousel"
                      >
                        <div
                          class="carousel-inner"
                          style={{
                            borderTopLeftRadius: "50px",
                            borderTopRightRadius: "50px",
                          }}
                        >
                          <div class="carousel-item active">
                            <div className="border" style={{ height: "500px" }}>
                              <img
                                class="d-block w-100"
                                src={item.url_foto1}
                                alt="First slide"
                                style={{
                                  height: "500px",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          </div>
                          <div class="carousel-item">
                            <div className="border" style={{ height: "500px" }}>
                              <img
                                class="d-block w-100"
                                src={item.url_foto2}
                                alt="Second slide"
                                style={{ height: "500px", objectFit: "cover" }}
                              />
                            </div>
                          </div>
                          <div class="carousel-item">
                            <div className="border" style={{ height: "500px" }}>
                              <img
                                class="d-block w-100"
                                src={item.url_foto3}
                                alt="Third slide"
                                style={{ height: "500px", objectFit: "cover" }}
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
                      <div
                        className="col-lg-12 px-4 pt-4 pb-0"
                        style={{ wordWrap: "break-word" }}
                      >
                        <p className="h1">
                          <strong>{item.nama_produk}</strong>
                        </p>
                        <p>{item.seller[0].nama_pelapak}</p>
                        <p>{"Rp " + item.harga + ",00"}</p>
                        <p>{"stok : " + item.stok + " buah"}</p>
                        <p>{item.deskripsi}</p>
                      </div>
                    </div>
                    {localStorage.getItem("status") === "pelapak" ? (
                      <div className="mb-4 mr-5 d-flex flex-row-reverse ">
                        <button
                          className="btn btn-secondary px-5 rounded-pill"
                          onClick={this.props.deleteProduk}
                        >
                          delete
                        </button>
                        <Link to="/produkupdate">
                          <button className="btn btn-secondary px-5 mr-2 rounded-pill">
                            update
                          </button>
                        </Link>
                      </div>
                    ) : null}

                    {localStorage.getItem("status") === "pembeli" ? (
                      <div className="mb-4 mr-5 d-flex flex-row-reverse ">
                        {/* <Link> */}
                        <button
                          className="btn btn-secondary px-5 rounded-pill"
                          name="produk"
                          value={item.nama_produk}
                          onClick={(e) => this.props.addProdukTransaksi(e)}
                        >
                          Pilih Batu
                        </button>
                        {/* </Link> */}
                        {/* <Link> */}
                        <button
                          className="btn btn-secondary px-5 rounded-pill"
                          name="produk"
                          value={item.nama_produk}
                          onClick={() => this.props.postProdukTransaksi()}
                        >
                          Tambah Keranjang
                        </button>
                        {/* </Link> */}
                      </div>
                    ) : null}
                  </div>
                ))
              : null}
            <div className="col-lg-2"></div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataProduk: state.produk,
    dataTransaksi: state.transaksi,
  };
};

const mapDispatchToProps = {
  getListProduk,
  filterProdukId,
  deleteProduk,
  addProdukTransaksi,
  postProdukTransaksi,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProdukDetail);
