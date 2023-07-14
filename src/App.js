import React, { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import supabase from "./supabase";
import { useDispatch } from "react-redux";
import { setUser } from "./slices/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const getUser = async () => {
    const { data } = await supabase.auth.getSession();
    // console.log(data, error);
    dispatch(setUser(data.session.user));
    // console.log(data.session.user);
    // console.log(data, error);
    /*  if (data.session) {
      dispatch(setUser(data.session.user));
    } */
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
