import axios from "axios";

export const addProdukTransaksi = (e) => {
  return async (dispatch, getState) => {
    let jumlahProduk = localStorage.getItem("jumlahProdukTransaksi");

    if (jumlahProduk === undefined) {
      jumlahProduk = 0;
    }

    await dispatch({ type: "ADD_PRODUK_TRANSAKSI", payload: e });
    localStorage.setItem("nama_produk", getState().transaksi.produk);

    let jumlahProdukTransaksi = Number(jumlahProduk) + 1;
    localStorage.setItem("jumlahProdukTransaksi", jumlahProdukTransaksi);
  };
};

export const postProdukTransaksi = (e) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://0.0.0.0:3000/transaksi",
      {
        nama_produk: localStorage.getItem("nama_produk"),
      },
      { headers: { Authorization: "Bearer " + token } }
    );
    dispatch({ type: "POST_PRODUCT_TRANSAKSI" });
  };
};

export const getProdukTransaksi = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    const response = await axios.get("http://0.0.0.0:3000/transaksi", {
      headers: { Authorization: "Bearer " + token },
    });
    dispatch({ type: "GET_PRODUK_TRANSAKSI", payload: response.data });
  };
};