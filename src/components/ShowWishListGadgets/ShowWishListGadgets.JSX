import React from 'react';

const ShowWishListGadgets = ({wishGadgets,setWishGadgets,gadgets}) => {
    const handleDeleteGadget = (id) => {
        const remainingGadgets = gadgets.filter((gadget) => gadget.product_id !== id);
        setWishGadgets(remainingGadgets); 
    
        // Show toast notification
        toast.success("Gadget deleted!", {
          position: "top-center",
          autoClose: 3000,
        });
      };
    return (
        <div>
                  <div className="mb-4 p-4 border rounded shadow">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-5">
                        <div>
                          <img
                            className="w-[100px] rounded-2xl shadow-xl"
                            src={wishGadgets.product_image}
                            alt=""
                          />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold pb-3 text-black">
                            {wishGadgets.product_title}
                          </h2>
                          <p className="text-gray-600">Price: ${wishGadgets.price}</p>
                          <p className="text-gray-500">{wishGadgets.description}</p>
                        </div>
                      </div>
                      <div>
                        <button
                          onClick={() => handleDeleteGadget(wishGadgets.product_id)}
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

export default ShowWishListGadgets;

