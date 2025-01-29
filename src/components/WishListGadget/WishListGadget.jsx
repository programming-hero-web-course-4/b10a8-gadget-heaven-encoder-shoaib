import React, { useContext } from "react";
import { toast } from "react-toastify";
import { LuDelete } from "react-icons/lu";
import { CardContext } from "../Root/Root";

const WishListGadget = ({ wishGadget, wishGadgets, setWishGadgets }) => {
  const setLoveCount = useContext(CardContext)[9];
  const handleGetProductId = useContext(CardContext)[4];

  const handleDeleteGadget = (id) => {
    const remainingGadgets = wishGadgets.filter((gadget) => gadget.product_id !== id);
    setWishGadgets(remainingGadgets);
    setLoveCount((prevCount) => prevCount - 1);

    // Show toast notification
    toast.success("Gadget deleted!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <div>
      <div className="mb-4 p-4 border rounded shadow bg-white mt-7">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <img
              className="w-full md:w-[300px] h-[250px] rounded-2xl shadow-xl"
              src={wishGadget.product_image}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-auto">
            <h2 className="text-2xl font-bold pb-3 text-black">{wishGadget.product_title}</h2>
            <p className="text-gray-600 font-bold">Price: ${wishGadget.price}</p>
            <p className="text-gray-500">{wishGadget.description}</p>
            <button
              onClick={() => handleGetProductId(wishGadget.product_id)}
              className="text-[#a032cb] border rounded-full w-1/2 md:w-1/3 mt-2 mx-auto md:mx-0"
            >
              Add To Cart
            </button>
          </div>
          <div className="flex justify-center mt-4 md:mt-0">
            <button
              onClick={() => handleDeleteGadget(wishGadget.product_id)}
              className="text-3xl text-red-400"
            >
              <LuDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListGadget;
