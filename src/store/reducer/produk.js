const initialState = {
  listProduk: "",
  filterProduk: "",
};

export default function produkReducer(produkState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...produkState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "GET_LIST_PRODUK":
      return {
        ...produkState,
        listProduk: action.payload,
      };
    case "FILTER_PRODUK":
      return {
        ...produkState,
        filterProduk: action.payload,
      };
    case "DO_POST_PRODUK":
      return {
        ...produkState,
        isAddProduk: true,
      };
    case "UPDATE_PRODUK":
      return {
        ...produkState,
        isEditProduk: true,
      };
    case "DELETE_PRODUK":
      return {};
    default:
      return {
        produkState,
      };
  }
}
