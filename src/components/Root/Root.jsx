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
      toast('Id already exist')
      return;
    }
    else{
      setProductId((prevProductIds) => [...prevProductIds, id]);
      handleAddToCardCount();
    }
  };

  console.log(productId)
  // const handleGadgetAddToCard = (id)

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white py-5"></div>

      {/* Passing both `addToCard` and `handleAddToCard` in an object */}
      <CardContext.Provider value={[ cardCount, handleAddToCardCount ,loveCount ,handleAddToLoveCount ,handleGetProductId,productId ]}>
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
