import React, { useContext } from "react";
import { LuDelete } from "react-icons/lu";
import { toast } from "react-toastify";
import { CardContext } from "../Root/Root";

const ShowAddCardGadgets = ({ gadget, gadgets, setGadgets }) => {

  const setCardCount = useContext(CardContext)[2];

  // Delete gadget function
  const handleDeleteGadget = (id) => {
    const remainingGadgets = gadgets.filter((g) => g.product_id !== id);
    setGadgets(remainingGadgets);
    setCardCount((prevCount) => prevCount - 1);

    // Show toast notification
    toast.success("Gadget deleted!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <div>
      <div className="mb-4 p-4 border rounded-xl shadow bg-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <img
              className="w-full md:w-[300px] h-[250px] rounded-2xl shadow-xl"
              src={gadget.product_image}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-auto">
            <h2 className="text-2xl font-bold pb-3 text-black">{gadget.product_title}</h2>
            <p className="text-gray-600 font-bold">Price: ${gadget.price}</p>
            <p className="text-gray-500">{gadget.description}</p>
          </div>
          <div className="flex justify-center mt-4 md:mt-0">
            <button
              onClick={() => handleDeleteGadget(gadget.product_id)}
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

export default ShowAddCardGadgets;
