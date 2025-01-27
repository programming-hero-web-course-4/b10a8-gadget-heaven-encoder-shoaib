import React from "react";

const ShowAddCardGadgets = ({ gadget }) => {
  return (
    <div>
      <div className="mb-4 p-4 border rounded shadow ">
        <div className="flex gap-5">
            <div>
                <img className="w-[100px]  rounded-2xl shadow-xl " src={gadget.product_image} alt="" />
            </div>
          <div>
            <h2 className="text-2xl font-bold pb-3 text-black">{gadget.product_title}</h2>
            <p className="text-gray-600">Price: ${gadget.price}</p>
            <p className="text-gray-500">{gadget.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAddCardGadgets;
