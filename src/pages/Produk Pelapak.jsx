import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListProduk from "../components/ListProduk";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { getListProduk, filterProdukUser } from "../store/action/produk";
import {} from "../store/action/user";

class ProdukPelapak extends Component {
  componentDidMount = async () => {
    await this.props.getListProduk();
    const paramKategori = await this.props.match.params.username;
    this.props.filterProdukUser(paramKategori);
  };

  render() {
    if (localStorage.getItem("status") !== "pelapak") {
      return (
        <Redirect
          to={{
            pathname: "/masuk/pelapak",
          }}
        />
      );
    } else {
      return (
        <React.Fragment>
          <Header />
          <div className="container">
            <div className="row mt-4">
              <div className="col-lg-12 col-md-12">
                <h5>produk</h5>
                <h3>{localStorage.getItem("nama")}</h3>{" "}
                <span>{localStorage.getItem("username")}</span>
                <ListProduk {...this.props} />
              </div>
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
    dataProduk: state.produk,
    dataUser: state.user,
  };
};

const mapDispatchToProps = {
  getListProduk,
  filterProdukUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProdukPelapak);
