import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./Data";
import SingleProduct from "./SingleProduct";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Data />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
