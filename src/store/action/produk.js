import axios from "axios";

export const changeInput = (e) => {
  return {
    type: "CHANGE_INPUT",
    payload: e,
  };
};

export const getListProduk = () => {
  return async (dispatch) => {
    const response = await axios.get("https://shop_be.ajay-rocks.xyz/produk");
    dispatch({ type: "GET_LIST_PRODUK", payload: response.data });
  };
};

export const filterProdukKategori = (category) => {
  return async (dispatch, getState) => {
    const dataFilter = getState().produk.listProduk;
    if (category) {
      const dataProdukFilter = dataFilter.filter((item) => {
        return item.kategori === category;
      });
      dispatch({ type: "FILTER_PRODUK", payload: dataProdukFilter });
    } else {
      dispatch({ type: "FILTER_PRODUK", payload: dataFilter });
    }
  };
};

export const filterProdukId = (id) => {
  return async (dispatch, getState) => {
    const dataFilter = getState().produk.listProduk;
    const dataProdukFilter = dataFilter.filter((item) => {
      return item.id === Number(id);
    });
    dispatch({ type: "FILTER_PRODUK", payload: dataProdukFilter });
  };
};

export const filterProdukUser = (username) => {
  return async (dispatch, getState) => {
    const dataFilter = getState().produk.listProduk;
    const dataProdukFilter = dataFilter.filter((item) => {
      return item.seller[0].username === username;
    });
    dispatch({ type: "FILTER_PRODUK", payload: dataProdukFilter });
  };
};

export const doPostProduk = () => {
  return async (dispatch, getState) => {
    const namaProduk = getState().produk.namaProduk;
    const harga = getState().produk.hargaProduk;
    const stok = getState().produk.stokProduk;
    const kategori = getState().produk.kategoriProduk;
    const urlFoto1 = getState().produk.gambar1Produk;
    const urlFoto2 = getState().produk.gambar2Produk;
    const urlFoto3 = getState().produk.gambar3Produk;
    const deskripsi = getState().produk.deskripsiProduk;
    const token = localStorage.getItem("token");
    if (
      namaProduk !== undefined &&
      harga !== undefined &&
      stok !== undefined &&
      kategori !== undefined &&
      urlFoto1 !== undefined
    ) {
      try {
        const response = await axios.post(
          "https://shop_be.ajay-rocks.xyz/produk/edit",
          {
            nama_produk: namaProduk,
            harga: harga,
            stok: stok,
            kategori: kategori,
            url_foto1: urlFoto1,
            url_foto2: urlFoto2,
            url_foto3: urlFoto3,
            deskripsi: deskripsi,
          },
          { headers: { Authorization: "Bearer " + token } }
        );
        dispatch({ type: "DO_POST_PRODUK", payload: response.data });
      } catch (error) {
        alert("Input salah, masukkan lagi input !");
      }
    } else if (namaProduk === undefined) {
      alert("Nama Produk belum diisi");
    } else if (kategori === undefined) {
      alert("Kategori Produk belum diisi");
    } else if (harga === undefined) {
      alert("Harga belum diisi");
    } else if (stok === undefined) {
      alert("Stok belum diisi");
    } else if (urlFoto1 === undefined) {
      alert("Deskripsi Produk belum diisi");
    }
  };
};

export const deleteProduk = () => {
  return async (dispatch, getState) => {
    const namaProduk = getState().produk.filterProduk[0].nama_produk;
    const token = localStorage.getItem("token");
    console.log("namaproduk", namaProduk);
    console.log("token", token);
    try {
      const response = await axios.delete(`https://shop_be.ajay-rocks.xyz/produk/edit?nama_produk=${namaProduk}`,

        { headers: { Authorization: "Bearer " + token } }
      );
      dispatch({ type: "DELETE PRODUK", payload: response });
      console.log("namaproduk", namaProduk);
      console.log("token", token);
      alert("produk dihapus");
    } catch (error) {
      alert("produk bukan milik pelapak");
    }
    // axios({
    //   method: 'delete',
    //   url: 'https://shop_be.ajay-rocks.xyz/produk/edit?nama_produk=COBA1',
    //   // params: {
    //   //   nama_produk: 'COBA2'
    //   // },
    //   headers: { Authorization: "Bearer " + cobaToken }
    // });
  };
};

export const updateProduk = () => {
  return async (dispatch, getState) => {
    const namaProduk = getState().produk.filterProduk[0].nama_produk;
    const harga = getState().produk.hargaProduk;
    const stok = getState().produk.stokProduk;
    const kategori = getState().produk.kategoriProduk;
    const urlFoto1 = getState().produk.gambar1Produk;
    const urlFoto2 = getState().produk.gambar2Produk;
    const urlFoto3 = getState().produk.gambar3Produk;
    const deskripsi = getState().produk.deskripsiProduk;
    const token = localStorage.getItem("token");
    if (
      namaProduk !== undefined &&
      harga !== undefined &&
      stok !== undefined &&
      kategori !== undefined &&
      urlFoto1 !== undefined
    ) {
      try {
        const response = await axios.put(
          "https://shop_be.ajay-rocks.xyz/produk/edit",
          {
            nama_produk: namaProduk,
            harga: harga,
            stok: stok,
            kategori: kategori,
            url_foto1: urlFoto1,
            url_foto2: urlFoto2,
            url_foto3: urlFoto3,
            deskripsi: deskripsi,
          },
          { headers: { Authorization: "Bearer " + token } }
        );
        dispatch({ type: "UPDATE_PRODUK", payload: response.data });
      } catch (error) {
        alert("Produk bukan Milik Pelapak");
      }
    } else if (kategori === undefined) {
      alert("Kategori Produk belum diisi");
    } else if (harga === undefined) {
      alert("Harga belum diisi");
    } else if (stok === undefined) {
      alert("Stok belum diisi");
    } else if (urlFoto1 === undefined) {
      alert("Deskripsi Produk belum diisi");
    }
  };
};
