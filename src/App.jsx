// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Data from "./Data";
import SingleProduct from "./SingleProduct";
import PageNavigation from "./PageNavigation";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Data />,
      children: [
        {
          path: "/contact",
          element: <PageNavigation />,
        },

      ],
    },
    {
      path: "/product/:id",
      element: <SingleProduct />,
    },
  ]);
  return (
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" exact element={<Data />} />
    //       <Route path="/product/:id" element={<SingleProduct />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>

    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
