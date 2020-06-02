import React, { Component } from "react";
import "../styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  changeInputUsername,
  changeInputPassword,
  doLoginPembeli,
} from "../store/action/user";

class MasukPembeli extends Component {
  render() {
    return (
      <React.Fragment>
        <Header {...this.props} />
        <div className="masukPembeli">
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
                          placeholder="Username Pembeli"
                          onChange={(el) => this.props.changeInputUsername(el)}
                          required
                          autofocus
                        />
                        <label for="inputUserame">Username Pembeli</label>
                      </div>

                      <div class="form-label-group">
                        <input
                          type="password"
                          id="inputPassword"
                          class="form-control"
                          placeholder="Password Pembeli"
                          onChange={(el) => this.props.changeInputPassword(el)}
                          required
                        />
                        <label for="inputPassword">Password Pembeli</label>
                      </div>

                      {this.props.dataUser.isLogin ? (
                        <a
                          class="btn btn-lg btn-secondary btn-block text-uppercase"
                          type="submit"
                          onClick={this.props.doLoginPembeli}
                          href="/"
                        >
                          Masuk
                        </a>
                      ) : (
                        <Link
                          class="btn btn-lg btn-secondary btn-block text-uppercase"
                          type="submit"
                          onClick={this.props.doLoginPembeli}
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
  doLoginPembeli,
};

export default connect(mapStateToProps, mapDispatchToProps)(MasukPembeli);
