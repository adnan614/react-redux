import React, { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  //   console.log(products);

  const fetchproducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchproducts();
  }, []);
  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
