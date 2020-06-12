const initialState = {
  listProdukTransaksi: "",
  jumlahProdukTransaksi: 0,
  totalHargaTransaksi: 0,
  postProdukHistory: ""
};

export default function transaksiReducer(
  transaksiState = initialState,
  action
) {
  switch (action.type) {
    case "ADD_PRODUK_TRANSAKSI":
      return {
        ...transaksiState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "POST_PRODUK_TRANSAKSI":
      return {};
    case "GET_PRODUK_TRANSAKSI":
      return {
        ...transaksiState,
        listProdukTransaksi: action.payload,
        jumlahProdukTransaksi: action.jumlahProduk,
        totalHargaTransaksi: action.totalHarga
      };
    case "POST_PRODUK_HISTORY":
      return {
        ...transaksiState,
        postProdukHistory: action.payload,
      };
    default:
      return {
        ...transaksiState,
      };
  }
}
