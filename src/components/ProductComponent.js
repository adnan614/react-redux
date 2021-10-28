import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Link to={`/product/${id}`}>
        <div className="p-10" style={{ marginBottom: "40px" }} key={id}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image} style={{ height: "140px", width: "130px" }} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <div className="font-bold text-xl mb-2">{price}</div>
              <div className="font-bold text-xl mb-2">{category}</div>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
