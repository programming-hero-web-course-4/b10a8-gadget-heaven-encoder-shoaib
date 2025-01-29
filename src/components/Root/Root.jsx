import React, { createContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import { Outlet } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../Footer/Footer";

export const CardContext = createContext();

const Root = () => {
  const [cardCount, setCardCount] = useState(0);
  const [loveCount, setLoveCount] = useState(0);
  const [productId, setProductId] = useState([]);
  const [wishProductId, setWishProductId] = useState([]);

  const handleAddToCardCount = () => {
    setCardCount((prevCount) => prevCount + 1);
  };
  const handleAddToLoveCount = () => {
    setLoveCount((prevCount) => prevCount + 1);
  };

  // get id from card 
  const handleGetProductId = (idx) => {

    const id = parseInt(idx)
    if(productId.includes(id)){
          // Show toast notification
          toast.warning("Gadget already exist!", {
            position: "top-center",
            autoClose: 3000,
          });
      return;
    }
    else{
      setProductId((prevProductIds) => [...prevProductIds, id]);
      handleAddToCardCount();
          // Show toast notification
          toast.success("Gadget Added in cart!", {
            position: "top-center",
            autoClose: 3000,
          });
    }
  };
  
  // get id from wishlist
  const handleGetProductIdForWishList = (idx) => {

    const id = parseInt(idx)
    if(wishProductId.includes(id)){
          // Show toast notification
          toast.warning("Gadget already exist!", {
            position: "top-center",
            autoClose: 3000,
          });
      return;
    }
    else{
      setWishProductId((prevProductIds) => [...prevProductIds, id]);
      handleAddToLoveCount();

          // Show toast notification
          toast.success("Gadget Added in WishList!", {
            position: "top-center",
            autoClose: 3000,
          });
    }
  };

  // console.log(productId);
  // const [price, setPrice] = useState(0);

  // const handelPrice = (newPrice) => {
  //   setPrice(price + newPrice);
  // };
  
  // console.log(price)



  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white py-5"></div>

      <CardContext.Provider value={[ cardCount, handleAddToCardCount ,setCardCount ,handleAddToLoveCount ,handleGetProductId,productId  ,wishProductId,handleGetProductIdForWishList,loveCount,setLoveCount ]}>
        <div className="max-w-11/12 mx-auto">
          <Navbar />
          <Banner />
          <Outlet />
        </div>
      </CardContext.Provider>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
