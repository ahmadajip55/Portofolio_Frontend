import axios from "axios";

export const changeInput = (e) => {
  return {
    type: "CHANGE_INPUT",
    payload: e,
  };
};

export const changeInputUsername = (e) => {
  return {
    type: "CHANGE_INPUT_USERNAME",
    payload: e,
  };
};

export const changeInputPassword = (e) => {
  return {
    type: "CHANGE_INPUT_PASSWORD",
    payload: e,
  };
};

export const doLoginPembeli = () => {
  return async (dispatch, getState) => {
    const username = getState().user.inputUsername;
    const password = getState().user.inputPassword;
    if (username !== "" && password !== "") {
      try {
        const response = await axios.get("http://0.0.0.0:3000/pembeli/login", {
          params: {
            username: username,
            password: password,
          },
        });
        dispatch({ type: "DO_LOGIN_PEMBELI", payload: response.data });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("nama", response.data.nama_pembeli);
        localStorage.setItem("alamat", response.data.alamat_pembeli);
        localStorage.setItem("email", response.data.email_pembeli);
        localStorage.setItem("status", "pembeli");
        localStorage.setItem("isLogin", true);
      } catch (error) {
        alert("Username dan Password Pembeli belum terdaftar");
      }
    } else if (username === "") {
      alert("Username belum diisi");
    } else if (password === "") {
      alert("Password belum diisi");
    }
  };
};

export const doLoginPelapak = () => {
  return async (dispatch, getState) => {
    const username = getState().user.inputUsername;
    const password = getState().user.inputPassword;
    if (username !== "" && password !== "") {
      try {
        const response = await axios.get("http://0.0.0.0:3000/pelapak/login", {
          params: {
            username: username,
            password: password,
          },
        });
        dispatch({ type: "DO_LOGIN_PELAPAK", payload: response.data });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("nama", response.data.nama_pelapak);
        localStorage.setItem("alamat", response.data.alamat_pelapak);
        localStorage.setItem("status", "pelapak");
        localStorage.setItem("isLogin", true);
      } catch (error) {
        alert("Username dan Password Pelapak belum terdaftar");
      }
    } else if (username === "") {
      alert("Username belum diisi");
    } else if (password === "") {
      alert("Password belum diisi");
    }
  };
};

export const doRegisterPembeli = () => {
  return async (dispatch, getState) => {
    const username = getState().user.usernamePembeli;
    const password = getState().user.passwordPembeli;
    const email = getState().user.emailPembeli;
    const nama = getState().user.namaPembeli;
    const alamat = getState().user.alamatPembeli;
    if (
      username !== undefined &&
      password !== undefined &&
      nama !== undefined &&
      alamat !== undefined
    ) {
      try {
        const response_register = await axios.post(
          "http://0.0.0.0:3000/pembeli/register",
          {
            username: username,
            password: password,
            email_pembeli: email,
            nama_pembeli: nama,
            alamat_pembeli: alamat,
          }
        );
        dispatch({ type: "REGISTER_PEMBELI", payload: response_register.data });
      } catch (error) {
        alert("Input salah, Masukkan lagi input !");
      }
    } else if (username === undefined) {
      alert("Username belum diisi");
    } else if (password === undefined) {
      alert("Password belum diisi");
    } else if (nama === undefined) {
      alert("Nama Pembeli belum diisi");
    } else if (alamat === undefined) {
      alert("Alamat Pembeli belum diisi");
    }
  };
};

export const doRegisterPelapak = () => {
  return async (dispatch, getState) => {
    const username = getState().user.usernamePelapak;
    const password = getState().user.passwordPelapak;
    const nama = getState().user.namaPelapak;
    const alamat = getState().user.alamatPelapak;
    if (
      username !== undefined &&
      password !== undefined &&
      nama !== undefined &&
      alamat !== undefined
    ) {
      try {
        const response_register = await axios.post(
          "http://0.0.0.0:3000/pelapak/register",
          {
            username: username,
            password: password,
            nama_pelapak: nama,
            alamat_pelapak: alamat,
          }
        );
        dispatch({ type: "REGISTER_PELAPAK", payload: response_register.data });
      } catch (error) {
        alert("Input salah, masukkan lagi input !");
      }
    } else if (username === undefined) {
      alert("Username belum diisi");
    } else if (password === undefined) {
      alert("Password belum diisi");
    } else if (nama === undefined) {
      alert("Nama Pelapak belum diisi");
    } else if (alamat === undefined) {
      alert("Alamat Pelapak belum diisi");
    }
  };
};

export const doLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("isLogin");
  localStorage.removeItem("username");
  localStorage.removeItem("nama");
  localStorage.removeItem("alamat");
  localStorage.removeItem("status");
  localStorage.removeItem("email");
  localStorage.removeItem("jumlahProdukTransaksi");
  localStorage.removeItem("nama_produk");
  return {
    type: "DO_LOGOUT",
  };
};
