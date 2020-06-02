const initialState = {
  username: "",
  nama: "",
  email: "",
  alamat: "",
  token: "",
  isLogin: false,
  status: "",
  inputUsername: "",
  inputPassword: "",
  listUser: [],
};

export default function userReducer(userState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...userState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "CHANGE_INPUT_USERNAME":
      return {
        ...userState,
        inputUsername: action.payload.target.value,
      };
    case "CHANGE_INPUT_PASSWORD":
      return {
        ...userState,
        inputPassword: action.payload.target.value,
      };
    case "DO_LOGIN_PEMBELI":
      return {
        ...userState,
        username: action.payload.username,
        nama: action.payload.nama_pembeli,
        token: action.payload.token,
        email: action.payload.email_pembeli,
        alamat: action.payload.alamat_pembeli,
        status: "pembeli",
        isLogin: true,
      };
    case "DO_LOGIN_PELAPAK":
      return {
        ...userState,
        username: action.payload.username,
        nama: action.payload.nama_pelapak,
        token: action.payload.token,
        alamat: action.payload.alamat_pelapak,
        status: "pelapak",
        isLogin: true,
      };
    case "DO_LOGOUT":
      return {
        ...userState,
        username: "",
        nama: "",
        token: "",
        email: "",
        alamat: "",
        status: "",
        inputUsername: "",
        inputPassword: "",
        isLogin: false,
      };
    case "REGISTER_PEMBELI":
      return {
        ...userState,
        isRegister: true,
      };
    case "REGISTER_PELAPAK":
      return {
        ...userState,
        isRegister: true,
      };
    default:
      return userState;
  }
}
