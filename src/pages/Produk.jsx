import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListProduk from "../components/ListProduk";
// import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getListProduk, filterProdukKategori } from "../store/action/produk";

class Produk extends Component {
  componentDidMount = async () => {
    await this.props.getListProduk();
    const paramKategori = await this.props.match.params.produk;
    this.props.filterProdukKategori(paramKategori);
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <h2
            style={{
              width: "100%",
              textAlign: "center",
              borderBottom: "2px solid #000",
              lineHeight: "0.1em",
              margin: "40px 0px 0px",
            }}
          >
            <span style={{ background: "#fff", padding: "0 20px" }}>
              SELECT ROCKS
            </span>
          </h2>
          <div className="row mt-4">
            <div className="col-lg-3 col-md-3"></div>
            <div className="col-lg-9 col-md-9">
              <ListProduk {...this.props} />
            </div>
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
  };
};

const mapDispatchToProps = {
  getListProduk,
  filterProdukKategori,
};

export default connect(mapStateToProps, mapDispatchToProps)(Produk);
