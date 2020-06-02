import React, { Component } from "react";
import "../styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  changeInputUsername,
  changeInputPassword,
  doLoginPelapak,
} from "../store/action/user";

class MasukPelapak extends Component {
  render() {
    return (
      <React.Fragment>
        <Header {...this.props} />
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto">
              <div class="card card-signin flex-row my-5">
                <div class="card-img-left d-none d-md-flex"></div>
                <div class="card-body my-auto">
                  <h2 class="card-title text-center">Masuk</h2>
                  <form
                    class="form-signin"
                    onSubmit={(el) => el.preventDefault()}
                  >
                    <div class="form-label-group">
                      <input
                        type="text"
                        id="inputUserame"
                        class="form-control"
                        placeholder="Username Pelapak"
                        onChange={(el) => this.props.changeInputUsername(el)}
                        required
                        autofocus
                      />
                      <label for="inputUserame">Username Pelapak</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        type="password"
                        id="inputPassword"
                        class="form-control"
                        placeholder="Password Pelapak"
                        onChange={(el) => this.props.changeInputPassword(el)}
                        required
                      />
                      <label for="inputPassword">Password Pelapak</label>
                    </div>

                    {this.props.dataUser.isLogin ? (
                      <a
                        class="btn btn-lg btn-secondary btn-block text-uppercase"
                        type="submit"
                        onClick={this.props.doLoginPelapak}
                        href="/"
                      >
                        Masuk
                      </a>
                    ) : (
                      <Link
                        class="btn btn-lg btn-secondary btn-block text-uppercase"
                        type="submit"
                        onClick={this.props.doLoginPelapak}
                      >
                        Masuk
                      </Link>
                    )}
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
  changeInputUsername: (e) => changeInputUsername(e),
  changeInputPassword: (e) => changeInputPassword(e),
  doLoginPelapak,
};

export default connect(mapStateToProps, mapDispatchToProps)(MasukPelapak);
