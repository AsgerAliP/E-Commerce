import React from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from "./components/FilteredProducts";
import SingleProduct from "./components/SingleProduct";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import Cart from "./components/Cart";

function App() {
  // const user = useSelector((state) => state.user.user);
  // const { authUser } = user;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            // element={authUser ? <Main></Main> : <Login></Login>}
            element={ <Main></Main>}
          ></Route>

<Route path="/cart" element={<Cart/>} />
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts></FilteredProducts>}
          ></Route>
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;