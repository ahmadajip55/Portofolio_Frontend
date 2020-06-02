import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/style.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { changeInput, doRegisterPembeli } from "../store/action/user";

class DaftarPembeli extends Component {
  daftarPembeli = async () => {
    await this.props.doRegisterPembeli();
    const isRegister = this.props.dataUser.isRegister;
    console.log(isRegister);
    if (isRegister) {
      this.props.history.push("/masuk/pembeli");
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
                  <form
                    class="form-signin"
                    onSubmit={(el) => el.preventDefault()}
                  >
                    <div class="form-label-group">
                      <input
                        type="text"
                        id="inputUsernamePembeli"
                        class="form-control"
                        placeholder="Username Pembeli"
                        name="usernamePembeli"
                        required
                        autofocus
                        onChange={(e) => this.props.changeInput(e)}
                      />
                      <label for="inputUsernamePembeli">Username Pembeli</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        type="password"
                        id="inputPasswordPembeli"
                        class="form-control"
                        placeholder="Password Pembeli"
                        name="passwordPembeli"
                        required
                        onChange={(e) => this.props.changeInput(e)}
                      />
                      <label for="inputPasswordPembeli">Password Pembeli</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        type="text"
                        id="inputNamaPembeli"
                        class="form-control"
                        placeholder="Nama Pembeli"
                        name="namaPembeli"
                        required
                        onChange={(e) => this.props.changeInput(e)}
                      />
                      <label for="inputNamaPembeli">Nama Pembeli</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        type="text"
                        id="inputAlamatPembeli"
                        class="form-control"
                        placeholder="Alamat Pembeli"
                        name="alamatPembeli"
                        required
                        onChange={(e) => this.props.changeInput(e)}
                      />
                      <label for="inputAlamatPembeli">Alamat Pembeli</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        type="text"
                        id="inputEmailPembeli"
                        class="form-control"
                        placeholder="Email Pembeli"
                        name="emailPembeli"
                        required
                        onChange={(e) => this.props.changeInput(e)}
                      />
                      <label for="inputEmailPembeli">Email Pembeli</label>
                    </div>

                    <Link
                      class="btn btn-lg btn-secondary btn-block text-uppercase"
                      type="submit"
                      onClick={() => this.daftarPembeli()}
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
  doRegisterPembeli,
};

export default connect(mapStateToProps, mapDispatchToProps)(DaftarPembeli);
