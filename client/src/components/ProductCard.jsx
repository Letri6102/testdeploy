import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { alertNULL, alertSuccess } from "../context/actions/alertActions";
import { addNewItemToCart, getAllCartItems } from "../api";
import { setCartItems } from "../context/actions/cartAction";


const ProductCard = (data) => {
const [details, setDetails] = useState({});
const user = useSelector((state) => state.user);
const location = useLocation();
const dispatch = useDispatch();
  useEffect(()=>{
    setDetails(location.state.item);
  },[])
  const sendToCart = () => {
    dispatch(alertSuccess("Added to the cart"));
    addNewItemToCart(user?.user_id, details).then((res) => {
      getAllCartItems(user?.user_id).then((items) => {
        dispatch(setCartItems(items));
      });
      setInterval(() => {
        dispatch(alertNULL());
      }, 3000);
    });
  };
  return (
    <div>
        <div className='flex'>
          <img className='mt-[200px] ml-[150px] h-[350px]' src={details.imageURL} alt=''/>
          <div className='mt-[200px] ml-[150px] border-2 border-solid border-black w-[510px] h-[200px] rounded-md shadow-xl '>
            <h2 className='font-semibold text-4xl pl-[40px] pt-[45px] ' >{details.product_name}</h2>
            <button onClick={sendToCart} className='rounded-xl bg-slate-400 w-[420px] h-10 mx-auto mt-8 ml-[45px] '>Add</button>
          </div>
        </div>
      </div >
  )
}

export default ProductCard