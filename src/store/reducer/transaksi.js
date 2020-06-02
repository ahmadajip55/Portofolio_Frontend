const initialState = {
  listProdukTransaksi: "",
  jumlahProdukTransaksi: 0,
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
      };
    default:
      return {
        ...transaksiState,
      };
  }
}
