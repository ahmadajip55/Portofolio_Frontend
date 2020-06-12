import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeInput } from "../store/action/produk";
import {
    getProdukTransaksi, deleteTransaksiProduk, postHistoryTransaksi, postHistoryProduk
} from "../store/action/transaksi";

class Pesan extends Component {
    componentDidMount = async () => {
        await this.props.getProdukTransaksi();
    };


    render() {
        console.log("COBAA", this.props.dataTransaksi)

        const pesanProduk = async () => {
            await this.props.postHistoryTransaksi()
            await this.props.postHistoryProduk()
            await this.props.deleteTransaksiProduk()
            // this.props.history.push("/")
        }

        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <form
                        class="form-signin my-5 p-5"
                        style={{
                            boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.19)",
                        }}
                        onSubmit={(el) => el.preventDefault()}
                    >
                        {this.props.dataTransaksi.listProdukTransaksi ? this.props.dataTransaksi.listProdukTransaksi.map((item) =>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div
                                    className="col-lg-10 border border-light shadow mb-3 p-0"
                                    style={{ borderRadius: "50px" }}
                                >
                                    <div
                                        className="col-lg-12 px-5 pt-4 pb-3"
                                        style={{ wordWrap: "break-word" }}
                                    >
                                        <p className="h1">
                                            <strong>{item.produk[0].nama_produk}</strong>
                                        </p>
                                        <p>{"Rp " + item.total_harga + ",00"}</p>
                                        <p>{"jumlah : " + item.total_barang + " buah"}</p>
                                    </div>
                                </div>
                                <div className="col-lg-1"></div>
                            </div>
                        ) : null}

                        <div class="form-label-group  mt-5">
                            <input
                                type="text"
                                id="inputTotalHarga"
                                class="form-control"
                                placeholder="Total Harga"
                                name="totalHarga"
                                value={"Rp " + this.props.dataTransaksi.totalHargaTransaksi + ",00"}
                                required
                                autofocus
                            />
                            <label for="inputNamaProduk">Total Harga</label>
                        </div>

                        <div class="form-label-group">
                            <input
                                type="text"
                                id="inputNamaProduk"
                                class="form-control"
                                placeholder="Nama Penerima"
                                name="namaPenerima"
                                onChange={(el) => this.props.changeInput(el)}
                                required
                                autofocus
                            />
                            <label for="inputNamaProduk">Nama Penerima</label>
                        </div>

                        <div class="form-label-group">
                            <input
                                type="text"
                                id="hargaProduk"
                                class="form-control"
                                placeholder="Nomor Telepon"
                                name="nomorTeleponPenerima"
                                onChange={(el) => this.props.changeInput(el)}
                                required
                            />
                            <label for="hargaProduk">Nomor Telepon</label>
                        </div>

                        <div class="form-label-group">
                            <input
                                type="text"
                                id="stokProduk"
                                class="form-control"
                                placeholder="Email Penerima"
                                name="emailPenerima"
                                onChange={(el) => this.props.changeInput(el)}
                                required
                            />
                            <label for="stokProduk">Email Penerima</label>
                        </div>

                        <div class="form-label-group">
                            <textarea
                                type="text"
                                id="deskripsiProduk"
                                class="form-control"
                                placeholder="Alamat Penerima"
                                name="alamatPenerima"
                                style={{ height: "200px" }}
                                onChange={(el) => this.props.changeInput(el)}
                                required
                            />
                            <label for="deskripsiProduk">Alamat Penerima</label>
                        </div>

                        <Link
                            class="btn btn-lg btn-secondary btn-block text-uppercase"
                            type="submit"
                            onClick={pesanProduk}
                        >
                            Ambil Batumu
                        </Link>

                    </form>
                </div >
                <Footer />
            </React.Fragment >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataProduk: state.produk,
        dataTransaksi: state.transaksi
    };
};

const mapDispatchToProps = {
    changeInput, getProdukTransaksi, deleteTransaksiProduk, postHistoryTransaksi, postHistoryProduk
};

export default connect(mapStateToProps, mapDispatchToProps)(Pesan);
