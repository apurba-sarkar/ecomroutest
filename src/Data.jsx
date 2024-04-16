import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import SingleProduct from "./SingleProduct";

export default function Data() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    const api = "https://fakestoreapi.com/products";
    setLoading(true);
    try {
      const res = await axios.get(api);
      setList(res.data);
      setLoading(false);
    //   console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      App
      <div>
        <button onClick={fetchData}>press</button>
      </div>
      {loading && <div>loading...</div>}
      {list.map((e) => {
        return (
          <NavLink to={`/product/${e.id}`} key={e.id}>
          {e.title}
          </NavLink>
        );
      })}
    </>
  );
}
