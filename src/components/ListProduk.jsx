import React from "react";
import { Link } from "react-router-dom";

const ListProduk = (props) => {
  console.log("CEEEK PROPS FROM LISTPRODUK", props.dataProduk.filterProduk);

  return (
    <div className="mt-1 mb-4 ">
      <div>
        <div className="row mt-5">
          {props.dataProduk.filterProduk
            ? props.dataProduk.filterProduk.reverse().map((element) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-5">
                  <Link
                    className="text-decoration-none"
                    to={"/produk/" + element.id}
                  >
                    <div
                      class="card card-produk border-light shadow"
                      style={{ height: "250px" }}
                    >
                      <img
                        class="card-img-top"
                        src={element.url_foto1}
                        alt={element.nama_produk}
                        key={element.id}
                        style={{ height: "10rem", objectFit: "cover" }}
                      />
                      <div
                        class="card-body pt-2 pl-3 text-dark"
                        style={{ overflow: "hidden" }}
                      >
                        <p class="card-title mb-2">
                          <strong>{element.nama_produk}</strong>
                        </p>
                        <div className="d-flex justify-content-between">
                          <span style={{ fontSize: "0.8em" }}>
                            {element.harga}
                          </span>
                          <span style={{ fontSize: "0.8em" }}>
                            {element.seller[0].username}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default ListProduk;
