import { motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonClick } from "../animations";
import { addNewItemToCart, getAllCartItems } from "../api";
import { HiCurrencyRupee} from "../assets/icons";
import { BiPlus } from "react-icons/bi";
import { alertNULL, alertSuccess } from "../context/actions/alertActions";
import { setCartItems } from "../context/actions/cartAction";
import { useNavigate } from "react-router-dom";

const SliderCard = ({ data, index }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const _id = data.product_name;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("-");
  }
  const rootId = idString(_id);
  const handleDetails = () => {
    navigate(`/product/${rootId}`,{
      state:{
        item:data,
      }
    })
  }

  const sendToCart = () => {
    dispatch(alertSuccess("Added to the cart"));
    addNewItemToCart(user?.user_id, data).then((res) => {
      getAllCartItems(user?.user_id).then((items) => {
        dispatch(setCartItems(items));
      });
      setInterval(() => {
        dispatch(alertNULL());
      }, 3000);
    });
  };

  return (
    <div className="bg-lightOverlay hover:drop-shadow-lg backdrop-blur-md rounded-xl flex items-center justify-between relative px-4 py-2 w-full md:w-340 md:min-w-350 gap-3">
        <img src={data.imageURL} className="w-40 h-40 object-contain cursor-pointer" alt="" />
        <div className="relative pt-12">
          <p onClick={handleDetails} className="text-xl text-headingColor font-semibold cursor-pointer">
            {data.product_name}
          </p>
          <p className="text-lg font-semibold text-red-500 flex items-center justify-center gap-1">
            <span className="text-red-500" />{"£"}
            {parseFloat(data.product_price)}
          </p>

        <motion.div
          {...buttonClick}
          onClick={sendToCart}
          className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 right-2 cursor-pointer"
        >
          <BiPlus className="text-2xl text-primary" />
        </motion.div>
      </div>
    </div>
  );
};

export default SliderCard;
