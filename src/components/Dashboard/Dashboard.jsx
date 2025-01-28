import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CardContext } from "../Root/Root";
import ShowAddCardGadgets from "../ShowAddCardGadgets/ShowAddCardGadgets";
import WishListGadget from "../WishListGadget/WishListGadget";

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("Cart");

  const ids = useContext(CardContext)[5];
  const wishId = useContext(CardContext)[6];

  const { product_id } = useParams();
  const data = useLoaderData();

  // For Cart
  const [gadgets, setGadgets] = useState(
    data.filter((gadget) => ids.includes(gadget.product_id))
  );

  // For Wishlist
  const [wishGadgets, setWishGadgets] = useState(
    data.filter((gadget) => wishId.includes(gadget.product_id))
  );

  return (
    <div>
      {/* Toggle Buttons */}
      <div className="flex justify-center items-center gap-4 my-7">
        <button
          className={`text-2xl rounded-xl border px-4 font-bold ${
            activeButton === "Cart" ? "bg-orange-100 text-amber-600" : "text-black"
          }`}
          onClick={() => setActiveButton("Cart")}
        >
          Cart
        </button>
        <button
          className={`text-2xl rounded-xl border px-4 font-bold ${
            activeButton === "Wishlist" ? "bg-orange-100 text-amber-600" : "text-black"
          }`}
          onClick={() => setActiveButton("Wishlist")}
        >
          Wishlist
        </button>
      </div>

      {/* Cart Section */}
      {activeButton === "Cart" && (
        <div>
          <div className="flex justify-between items-center my-10">
            <div>
              <h1 className="text-xl text-black font-bold">Cart</h1>
            </div>
            <div>
              <div className="flex gap-6">
                <h1 className="text-black font-bold">Total Cost: </h1>
                <button className="text-black font-bold">Sort by Price</button>
                <button className="text-black font-bold">Purchase</button>
              </div>
            </div>
          </div>
          <div>
            {gadgets.map((gadget, idx) => (
              <ShowAddCardGadgets
                key={idx}
                gadget={gadget}
                setGadgets={setGadgets}
                gadgets={gadgets}
              />
            ))}
          </div>
        </div>
      )}

      {/* Wishlist Section */}
      {activeButton === "Wishlist" && (
        <div>
          <h1 className="text-xl text-black font-bold">Wishlist</h1>
          <div>
            {wishGadgets.map((wishGadget, idx) => (
              <WishListGadget
                key={idx}
                wishGadget={wishGadget}
                wishGadgets={wishGadgets}
                setWishGadgets={setWishGadgets}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
