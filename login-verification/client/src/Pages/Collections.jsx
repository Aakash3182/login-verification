import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Product from "../Component/Product";
import { useParams } from "react-router-dom";

function Collections(props) {
  const [products, setProducts] = useState([]);
  const params = useParams();

  const readData = async () => {
    await axios
      .get(`/api/products`)
      .then((res) => {
        let filteredProducts = res.data.products.filter(
          (item) => item.category === params.category
        );
        let data =
          params.category === "all" ? res.data.products : filteredProducts;
        setProducts(data);
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
      });
  };

  useEffect(() => {
    readData();
  }, [products]);

  return (
    <div className="container mt-5">
      <div className="row pt-5">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-secondary"> Collections </h3>
        </div>
      </div>

      <div className="row mb-3 mt-3">
        {products?.map((item) => {
          return <Product key={item._id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Collections;
