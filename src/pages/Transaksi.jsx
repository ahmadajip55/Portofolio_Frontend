import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Redirect } from "react-router-dom"
import { connect } from "react-redux";
import {
  postProdukTransaksi,
  getProdukTransaksi,
} from "../store/action/transaksi";

class Transaksi extends Component {
  componentDidMount = async () => {
    await this.props.getProdukTransaksi();
  };

  render() {
    const addCheckout = async () => {
      this.props.history.push("/pesan")
    }

    const backToProduct = async () => {
      this.props.history.push("/produk")
    }

    console.log('CEEEK BARANG', this.props)
    if (localStorage.getItem("isLogin") !== "true") {
      return (
        < Redirect
          to={{
            pathname: "/masuk/pembeli",
          }
          }
        />
      );
    }
    else if (Number(this.props.dataTransaksi.jumlahProdukTransaksi) === 0) {
      return (
        <React.Fragment>
          <Header />
          <div className="container my-4">
            <h2 className="my-5">Keranjang Kosong</h2>
            <div style={{ textAlign: "center" }}>
              <img src="https://comefast.in/images/empty-cart.png" alt="cart-empty" style={{ textAlign: "center" }} />
            </div>
            <div className="my-5" style={{ textAlign: "right" }}>
              <button className="btn btn-secondary px-5 rounded-pill h3 mt-5" onClick={() => backToProduct()}>
                Cari Batumu
              </button>
            </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
    else if (localStorage.getItem("isLogin") === "true") {
      return (
        <React.Fragment>
          <Header />

          <div className="container my-4">
            <h2 className="my-5">Keranjang</h2>

            {this.props.dataTransaksi.listProdukTransaksi
              ? this.props.dataTransaksi.listProdukTransaksi.map((item) => (
                <div className="row ">
                  <div className="col-lg-1"></div>
                  <div
                    className="col-lg-10 border border-light shadow mb-3 p-0"
                    style={{ borderRadius: "50px" }}
                  >
                    <div
                      className="col-lg-12 px-5 pt-4 pb-3"
                      style={{ wordWrap: "break-word" }}
                    >
                      <p className="h1">
                        <strong>{item.produk[0].nama_produk}</strong>
                      </p>
                      <p>{"Rp " + item.total_harga + ",00"}</p>
                      <p>{"jumlah : " + item.total_barang + " buah"}</p>
                    </div>
                  </div>
                  <div className="col-lg-1"></div>
                </div>
              ))
              : null}

            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10" style={{ textAlign: "right" }}>
                <button className="btn btn-secondary px-5 rounded-pill h3 mt-5" onClick={() => addCheckout()}>
                  PESAN SEKARANG
                </button>
              </div>
              <div className="col-lg-1"></div>
            </div>

          </div>

          <Footer />
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    dataTransaksi: state.transaksi,
  };
};

const mapDispatchToProps = {
  postProdukTransaksi,
  getProdukTransaksi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Transaksi);
