import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Cart, FilterSection, Home } from '../components';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

const Product = () => {
  const isCart = useSelector((state) => state.isCart);

  return (
    <main >
      <div className="w-screen min-h-screen flex justify-start flex-col bg-primary">
        <Header />
        <ProductCard/>
      </div>
      {isCart && <Cart/>}
      <div>
        <Footer/>
      </div>

    </main>
  );
};

export default Product