import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/style.css";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { changeInput } from "../store/action/user";

import {
  getProdukTransaksi,
} from "../store/action/transaksi";

class Profil extends Component {
  componentDidMount = async () => {
    await this.props.getProdukTransaksi();
  };

  render() {
    if (localStorage.getItem("isLogin") !== "true") {
      return (
        <Redirect
          to={{
            pathname: "/masuk/pembeli",
          }}
        />
      );
    } else if (localStorage.getItem("isLogin") === "true") {
      return (
        <React.Fragment>
          <Header />
          <div className="profil-body">
            <div className="profil-card">
              <img
                src="https://www.thesun.co.uk/wp-content/uploads/2018/10/NINTCHDBPICT0004443600951.jpg?strip=all&w=960"
                alt="foto-profil"
                style={{ width: "100%", marginBottom: "20px" }}
              />
              <h1>{localStorage.getItem("nama")}</h1>
              <p className="profil-title">
                status : {localStorage.getItem("status")}
              </p>
              <p className="profil-title">{localStorage.getItem("alamat")}</p>
              {localStorage.getItem("status") === "pelapak" ?
                <Link to={"/user/produk/" + localStorage.getItem("username")}>
                  <button
                    className="profil-button btn btn-secondary mb-3"
                    name="username"
                  >
                    produk
                  </button>
                </Link>
                :
                <Link to={"/transaksi"}>
                  <button
                    className="profil-button btn btn-secondary mb-3"
                    name="username"
                  >
                    keranjang
                  </button>
                </Link>
              }
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
    dataUser: state.user,
    dataTransaksi: state.transaksi
  };
};

const mapDispatchToProps = {
  changeInput,
  getProdukTransaksi
};

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
