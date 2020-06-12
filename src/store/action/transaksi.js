import axios from "axios";

export const postProdukTransaksi = (e) => {
  return async (dispatch, getState) => {
    await dispatch({ type: "ADD_PRODUK_TRANSAKSI", payload: e });
    await localStorage.setItem("nama_produk", getState().transaksi.produk);

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
    let jumlahProduk = 0
    let totalHarga = 0

    response.data.map((item) =>
      (jumlahProduk = jumlahProduk + item.total_barang)
    )

    response.data.map((item) =>
      (totalHarga = totalHarga + item.total_harga)
    )

    console.log("CEK JUMLAH PRODUK", jumlahProduk)
    console.log("CEK TOTAL HARGA", totalHarga)
    dispatch({ type: "GET_PRODUK_TRANSAKSI", payload: response.data, jumlahProduk: jumlahProduk, totalHarga: totalHarga });
  };
};

export const deleteTransaksiProduk = () => {
  return async () => {
    const token = localStorage.getItem("token");
    await axios.delete("https://shop_be.ajay-rocks.xyz/transaksi", {
      headers: { Authorization: "Bearer " + token },
    });
    alert("ANDA BERHASIL MEMESAN BATU !")
  }
}

export const postHistoryTransaksi = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    const nama_penerima = getState().produk.namaPenerima;
    const sum_total_harga = getState().transaksi.totalHargaTransaksi;
    const sum_total_barang = getState().transaksi.jumlahProdukTransaksi;
    const no_telepon = getState().produk.nomorTeleponPenerima;
    const email = getState().produk.emailPenerima;
    const alamat = getState().produk.alamatPenerima;

    console.log("CEEK HISTORY", nama_penerima, sum_total_harga, sum_total_barang, no_telepon, email, alamat)

    try {
      const response = await axios.post("http://0.0.0.0:5000/riwayat", {
        nama_penerima: nama_penerima,
        sum_total_harga: sum_total_harga,
        sum_total_barang: sum_total_barang,
        no_telepon: no_telepon,
        email: email,
        alamat: alamat
      },
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch({ type: "POST_PRODUK_HISTORY", payload: response.data })
    } catch {
      alert("error")
    }
  }
}

export const postHistoryProduk = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    const postProdukHistory = getState().transaksi.postProdukHistory
    const listProdukTransaksi = getState().transaksi.listProdukTransaksi

    console.log("CEEK POST PRODUK HISTORY", postProdukHistory)
    console.log("CEEK LIST PRODUK TRANSAKSI", listProdukTransaksi)

    listProdukTransaksi.map((item) =>
      axios.post("http://0.0.0.0:5000/riwayatproduk", {
        riwayat_id: postProdukHistory.id,
        produk_id: item.produk[0].id,
        total_harga: item.total_harga,
        total_barang: item.total_barang
      },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
    )
  }
}