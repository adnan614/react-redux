import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId !== "null") {
      fetchProductDetails();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div> .... Loading</div>
      ) : (
        <div className="p-10" style={{ marginBottom: "40px" }}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image} style={{ height: "140px", width: "130px" }} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-red-600">{title}</div>
              <div className="font-bold text-xl mb-2">{price}</div>
              <div className="font-bold text-xl mb-2">{category}</div>
              <div className="font-bold text-xl mb-2">{description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
