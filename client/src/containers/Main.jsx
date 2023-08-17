import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api";
import {  Cart, FilterSection, Header, Home, HomeSLider } from "../components";
import { setAllProducts } from "../context/actions/productActions";
import Footer from "../components/Footer";

const Main = () => {
  const products = useSelector((state) => state.products);
  const isCart = useSelector((state) => state.isCart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []);

  return (
    <main >
      <div className="w-screen min-h-screen flex items-center justify-start flex-col bg-primary">
      <Header />
      <div className="w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
        <Home />
        <FilterSection />
      </div>

      {isCart && <Cart/>}
      </div>

      <div>
        <Footer/>
      </div>

    </main>
  );
};

export default Main;
