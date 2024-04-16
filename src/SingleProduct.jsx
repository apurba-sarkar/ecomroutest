/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const fd = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(res.data);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fd();
  }, [id]);

  return (
    <div>
      {product && (
        <div>
          <div style={{ backgroundColor: "red" }}>
            {" "}
            <Outlet />
          </div>
          <h3>{product.title}</h3>
          <div>
            <img src={product.image} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
