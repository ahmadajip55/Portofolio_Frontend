import React, { Component } from "react";
import "../styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { changeInput, updateProduk } from "../store/action/produk";

class ProdukUpdate extends Component {
  updateProduk = async () => {
    await this.props.updateProduk();
    const isEditProduk = this.props.dataProduk.isEditProduk;
    console.log(isEditProduk);
    if (isEditProduk) {
      this.props.history.push("/");
    }
  };
  render() {
    console.log("ceeek", this.props.dataProduk.filterProduk[0].nama_produk);
    return (
      <React.Fragment>
        <Header {...this.props} />
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-2 col-sm-1"></div>
            <div className="col-lg-6 col-md-8 col-sm-10">
              <form
                class="form-signin my-5 p-5"
                style={{
                  border: "1px solid #c6c8cc",
                  borderRadius: "80px",
                  boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
                onSubmit={(el) => el.preventDefault()}
              >
                <h2 class="card-title text-center mb-5">
                  UPDATE <span>BATUMU</span>
                </h2>
                <div class="form-label-group">
                  <input
                    type="text"
                    id="inputNamaProduk"
                    class="form-control"
                    placeholder="Nama Produk"
                    name="namaProduk"
                    value={this.props.dataProduk.filterProduk[0].nama_produk}
                    required
                    autofocus
                  />
                  <label for="inputNamaProduk">Nama Produk</label>
                </div>

                <div className="form-label-group kategori">
                  <div
                    className="panel-group"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div
                      className="panel panel-default"
                      style={{
                        border: "1px solid #cdd0d4",
                        borderRadius: "2rem",
                      }}
                    >
                      <div className="panel-heading" role="tab" id="heading1">
                        <h4
                          className="panel-title mb-0"
                          style={{
                            padding: "12px 24px",
                            fontSize: "1rem",
                          }}
                        >
                          <a
                            className="collapsed text-decoration-none"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse1"
                            aria-expanded="false"
                            aria-controls="collapse1"
                            style={{ color: "#495057", fontWeight: "normal" }}
                          >
                            Kategori
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapse1"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading1"
                      >
                        <div
                          className="panel-body"
                          style={{ padding: "0 24px" }}
                        >
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                className="option-input radio"
                                name="kategoriProduk"
                                value="batusedimen"
                                style={{ top: "8px" }}
                                onClick={(el) => this.props.changeInput(el)}
                              />
                              <span
                                className="ml-3"
                                style={{
                                  color: "#495057",
                                  fontWeight: "normal",
                                }}
                              >
                                Batu Sedimen
                              </span>
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                className="option-input radio"
                                name="kategoriProduk"
                                value="batubeku"
                                style={{ top: "8px" }}
                                onClick={(el) => this.props.changeInput(el)}
                              />
                              <span
                                className="ml-3"
                                style={{
                                  color: "#495057",
                                  fontWeight: "normal",
                                }}
                              >
                                Batu Beku
                              </span>
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                className="option-input radio"
                                name="kategoriProduk"
                                value="batumetamorf"
                                style={{ top: "8px" }}
                                onClick={(el) => this.props.changeInput(el)}
                              />
                              <span
                                className="ml-3"
                                style={{
                                  color: "#495057",
                                  fontWeight: "normal",
                                }}
                              >
                                Batu Metamorf
                              </span>
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                className="option-input radio"
                                name="kategoriProduk"
                                value="fosil"
                                style={{ top: "8px" }}
                                onClick={(el) => this.props.changeInput(el)}
                              />
                              <span
                                className="ml-3"
                                style={{
                                  color: "#495057",
                                  fontWeight: "normal",
                                }}
                              >
                                Batu Fosil
                              </span>
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                className="option-input radio"
                                name="kategoriProduk"
                                value="batualterasi"
                                style={{ top: "8px" }}
                                onClick={(el) => this.props.changeInput(el)}
                              />
                              <span
                                className="ml-3"
                                style={{
                                  color: "#495057",
                                  fontWeight: "normal",
                                }}
                              >
                                Batu Alterasi
                              </span>
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                className="option-input radio"
                                name="kategoriProduk"
                                value="mineralbijih"
                                style={{ top: "8px" }}
                                onClick={(el) => this.props.changeInput(el)}
                              />
                              <span
                                className="ml-3"
                                style={{
                                  color: "#495057",
                                  fontWeight: "normal",
                                }}
                              >
                                Mineral Bijih
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-label-group">
                  <input
                    type="text"
                    id="hargaProduk"
                    class="form-control"
                    placeholder="Harga Produk"
                    name="hargaProduk"
                    onChange={(el) => this.props.changeInput(el)}
                    required
                  />
                  <label for="hargaProduk">Harga Produk</label>
                </div>

                <div class="form-label-group">
                  <input
                    type="text"
                    id="stokProduk"
                    class="form-control"
                    placeholder="Stok Produk"
                    name="stokProduk"
                    onChange={(el) => this.props.changeInput(el)}
                    required
                  />
                  <label for="stokProduk">Stok Produk</label>
                </div>

                <div class="form-label-group">
                  <input
                    type="text"
                    id="gambar1Produk"
                    class="form-control"
                    placeholder="Gambar Produk"
                    name="gambar1Produk"
                    onChange={(el) => this.props.changeInput(el)}
                    required
                  />
                  <label for="gambar1Produk">Gambar Produk</label>
                </div>

                <div class="form-label-group">
                  <input
                    type="text"
                    id="gambar2Produk"
                    class="form-control"
                    placeholder="Gambar Produk"
                    name="gambar2Produk"
                    onChange={(el) => this.props.changeInput(el)}
                    required
                  />
                  <label for="gambar2Produk">Gambar Produk</label>
                </div>

                <div class="form-label-group">
                  <input
                    type="text"
                    id="gambar3Produk"
                    class="form-control"
                    placeholder="Gambar Produk"
                    name="gambar3Produk"
                    onChange={(el) => this.props.changeInput(el)}
                    required
                  />
                  <label for="gambar3Produk">Gambar Produk</label>
                </div>

                <div class="form-label-group">
                  <textarea
                    type="text"
                    id="deskripsiProduk"
                    class="form-control"
                    placeholder="Deskripsi Produk"
                    name="deskripsiProduk"
                    style={{ height: "300px" }}
                    onChange={(el) => this.props.changeInput(el)}
                    required
                  />
                  <label for="deskripsiProduk">Deskripsi Produk</label>
                </div>

                <Link
                  class="btn btn-lg btn-secondary btn-block text-uppercase"
                  // to="/"
                  type="submit"
                  onClick={() => this.updateProduk()}
                >
                  Tambah Produkmu
                </Link>
              </form>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-1"></div>
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
  changeInput,
  updateProduk,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProdukUpdate);
