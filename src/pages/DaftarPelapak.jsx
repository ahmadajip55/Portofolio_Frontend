import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/style.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeInput, doRegisterPelapak } from "../store/action/user";

class DaftarPelapak extends Component {
  daftarPelapak = async () => {
    await this.props.doRegisterPelapak();
    const isRegister = this.props.dataUser.isRegister;
    console.log(isRegister);
    if (isRegister) {
      this.props.history.push("/masuk/pelapak");
    }
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto">
              <div class="card card-signin flex-row my-5">
                <div class="card-img-left d-none d-md-flex"></div>
                <div class="card-body my-auto">
                  <h2 class="card-title text-center">Daftar</h2>
                  <form class="form-signin">
                    <div class="form-label-group">
                      <input
                        type="text"
                        id="inputUsernamePelapak"
                        class="form-control"
                        placeholder="Username Pelapak"
                        name="usernamePelapak"
                        onChange={(e) => this.props.changeInput(e)}
                        required
                        autofocus
                      />
                      <label for="inputUsernamePelapak">Username Pelapak</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        type="password"
                        id="inputPasswordPelapak"
                        class="form-control"
                        placeholder="Password Pelapak"
                        name="passwordPelapak"
                        onChange={(e) => this.props.changeInput(e)}
                        required
                      />
                      <label for="inputPasswordPelapak">Password Pelapak</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        type="text"
                        id="inputNamaPelapak"
                        class="form-control"
                        placeholder="Nama Pelapak"
                        name="namaPelapak"
                        onChange={(e) => this.props.changeInput(e)}
                        required
                      />
                      <label for="inputNamaPelapak">Nama Pelapak</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        type="text"
                        id="inputAlamatPelapak"
                        class="form-control"
                        placeholder="Alamat Pelapak"
                        name="alamatPelapak"
                        onChange={(e) => this.props.changeInput(e)}
                        required
                      />
                      <label for="inputAlamatPelapak">Alamat Pelapak</label>
                    </div>

                    <Link
                      class="btn btn-lg btn-secondary btn-block text-uppercase"
                      type="submit"
                      onClick={() => this.daftarPelapak()}
                    >
                      Daftar
                    </Link>
                  </form>
                </div>
              </div>
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
    dataUser: state.user,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInput(e),
  doRegisterPelapak,
};

export default connect(mapStateToProps, mapDispatchToProps)(DaftarPelapak);
