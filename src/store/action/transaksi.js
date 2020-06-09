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
  return async (dispatch, getState) => {
    let jumlahProduk = await localStorage.getItem("jumlahProdukTransaksi");

    if (jumlahProduk === undefined) {
      jumlahProduk = 0;
    }

    await dispatch({ type: "ADD_PRODUK_TRANSAKSI", payload: e });
    await localStorage.setItem("nama_produk", getState().transaksi.produk);

    let jumlahProdukTransaksi = await Number(jumlahProduk) + 1;
    await localStorage.setItem("jumlahProdukTransaksi", jumlahProdukTransaksi);

    const token = localStorage.getItem("token");

    await axios.post(
      "https://shop_be.ajay-rocks.xyz/transaksi",
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

    const response = await axios.get("https://shop_be.ajay-rocks.xyz/transaksi", {
      headers: { Authorization: "Bearer " + token },
    });
    dispatch({ type: "GET_PRODUK_TRANSAKSI", payload: response.data });
  };
};
