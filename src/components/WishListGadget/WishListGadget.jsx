import React, { useContext } from "react";
import { toast } from "react-toastify";
import { LuDelete } from "react-icons/lu";
import { CardContext } from "../Root/Root";

const WishListGadget = ({ wishGadget, wishGadgets, setWishGadgets }) => {
    const setLoveCount = useContext(CardContext)[9]

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

      const handleGetProductId  = useContext(CardContext)[4]

  return (
    <div>
      <div className="mb-4 p-4 border rounded shadow">
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <div>
              <img
                className="w-[100px] rounded-2xl shadow-xl"
                src={wishGadget.product_image}
                alt=""
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold pb-3 text-black">
                {wishGadget.product_title}
              </h2>
              <p className="text-gray-600 font-bold">Price: ${wishGadget.price}</p>
              <p className="text-gray-500">{wishGadget.description}</p>
              <button onClick={()=>handleGetProductId(wishGadget.product_id)} className="text-[#a032cb] text-md font-bold border rounded-full px-3 py-1 mt-2">Add To Card</button>
            </div>
          </div>
          <div>
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
