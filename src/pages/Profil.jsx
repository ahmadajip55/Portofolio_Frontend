import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/style.css";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { changeInput } from "../store/action/user";

class Profil extends Component {
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
              <p>
                <Link to={"/user/produk/" + localStorage.getItem("username")}>
                  <button
                    className="profil-button btn btn-secondary mb-3"
                    name="username"
                    value={localStorage.getItem("username")}
                    onClick={(e) => this.props.changeInput(e)}
                  >
                    produk
                  </button>
                </Link>
              </p>
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
  };
};

const mapDispatchToProps = {
  changeInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
