import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { connect } from "react-redux";
import {
  addProdukTransaksi,
  postProdukTransaksi,
  getProdukTransaksi,
} from "../store/action/transaksi";

class Transaksi extends Component {
  componentDidMount = async () => {
    await this.props.getProdukTransaksi();
  };

  render() {
    console.log("CEEEK", this.props.dataTransaksi.listProdukTransaksi);
    return (
      <React.Fragment>
        <Header />
        <div className="container my-4">
          <h2 className="mb-5">Transaksi</h2>
          {this.props.dataTransaksi.listProdukTransaksi
            ? this.props.dataTransaksi.listProdukTransaksi.map((item) => (
              <div className="row ">
                <div className="col-lg-2"></div>
                <div
                  className="col-lg-8 border border-light shadow mb-3 p-0"
                  style={{ borderRadius: "50px" }}
                >
                  <div
                    className="col-lg-12 px-4 pt-4 pb-0"
                    style={{ wordWrap: "break-word" }}
                  >
                    <p className="h1">
                      <strong>{item.produk[0].nama_produk}</strong>
                    </p>
                    <p>{"Rp " + item.total_harga + ",00"}</p>
                    <p>{"jumlah : " + item.total_barang + " buah"}</p>
                  </div>
                </div>
                <div className="col-lg-2"></div>
              </div>
            ))
            : null}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataTransaksi: state.transaksi,
  };
};

const mapDispatchToProps = {
  addProdukTransaksi,
  postProdukTransaksi,
  getProdukTransaksi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Transaksi);
