import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

import Home from "../pages/Home";
import Produk from "../pages/Produk";
import ProdukDetail from "../pages/ProdukDetail";
import MasukPembeli from "../pages/MasukPembeli";
import MasukPelapak from "../pages/MasukPelapak";
import DaftarPembeli from "../pages/DaftarPembeli";
import DaftarPelapak from "../pages/DaftarPelapak";
import Profil from "../pages/Profil";
import TambahProduk from "../pages/TambahProduk";
import ProdukPelapak from "../pages/Produk Pelapak";
import ProdukUpdate from "../pages/ProdukUpdate";
import Transaksi from "../pages/Transaksi";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/masuk/pembeli" component={MasukPembeli} />
          <Route exact path="/masuk/pelapak" component={MasukPelapak} />
          <Route exact path="/daftar/pembeli" component={DaftarPembeli} />
          <Route exact path="/daftar/pelapak" component={DaftarPelapak} />
          <Route exact path="/profil" component={Profil} />
          <Route exact path="/tambahproduk" component={TambahProduk} />
          <Route exact path="/produk" component={Produk} />
          <Route exact path="/produk/:id" component={ProdukDetail} />
          <Route
            exact
            path="/user/produk/:username"
            component={ProdukPelapak}
          />
          <Route exact path="/produkkategori/:produk" component={Produk} />
          <Route exact path="/produkupdate" component={ProdukUpdate} />
          <Route exact path="/transaksi" component={Transaksi} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
