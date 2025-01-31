import React, { useContext, useEffect, useState } from "react";
import { CardContext } from "../Root/Root";
import { Link } from "react-router-dom";

const Offer = () => {
  const [gadgets, setGadgets] = useState([]);
      const handleDashboardClick = useContext(CardContext)[10]
  

  useEffect(() => {
    fetch("gadgets.json")
      .then((res) => res.json())
      .then((data) => {
        // Randomly pick gadgets for the discount
        const discountedGadgets = data.map((gadget) => {
          // Randomly  discount 30% 
          if (Math.random() < 0.3) { 
            gadget.discountedPrice = (gadget.price - gadget.price * 0.2).toFixed(2);
          }
          return gadget;
        });
        setGadgets(discountedGadgets);
      });
  }, []);

  return (
    <div>
      <h1 className="flex justify-center items-center text-5xl font-bold text-emerald-600 w-full text-center mb-8 mt-5">
        Exclusive 30% Off on Selected Gadgets
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:m-14">
        {gadgets.map((gadget) => (
          <div key={gadget.product_id} className="border rounded-2xl shadow-lg p-4 bg-gray-100">
            <div className="w-full h-[400px] overflow-hidden rounded-lg">
              <img className="object-cover w-full h-full" src={gadget.product_image} alt={gadget.product_title} />
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800">{gadget.product_title}</h2>
              <p className="text-lg text-gray-600 mt-2 mb-3">
                Original Price: <s>${gadget.price}</s>
              </p>
              {gadget.discountedPrice ? (
                <p className="text-lg text-red-600 mb-3">
                  Discounted Price: ${gadget.discountedPrice}
                </p>
              ) : (
                <p className="text-lg text-gray-600 mb-3">
                  Price: ${gadget.price}
                </p>
              )}
              <Link to={`/product/${gadget.product_id}`} onClick={()=>handleDashboardClick('Dashboard')} className='text-[#a032cb] text-md font-bold border rounded-full p-2 mt-2'>View Details</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
