import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CardContext } from "../Root/Root";
import ShowAddCardGadgets from "../ShowAddCardGadgets/ShowAddCardGadgets";
import WishListGadget from "../WishListGadget/WishListGadget";
import { LiaSortSolid } from "react-icons/lia";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("Cart");

  const ids = useContext(CardContext)[5];
  const wishId = useContext(CardContext)[6];
  const setCardCount = useContext(CardContext)[2];
  const setLoveCount = useContext(CardContext)[9];

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

  // Sort by Price function
  const handleSortByPriceDescendingOrder = () => {
    const sortedGadgets = [...gadgets].sort((a, b) => b.price - a.price);
    setGadgets(sortedGadgets);
    // Show toast notification
    toast.success("Gadget Sorted Descending Order!", {
      position: "top-center",
      autoClose: 3000,
    });
  };
  const handleSortByPriceAscendingOrder = () => {
    const sortedGadgets = [...gadgets].sort((a, b) => a.price - b.price);
    setGadgets(sortedGadgets);
    // Show toast notification
    toast.success("Gadget Sorted Ascending Order!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const handlePurchaseButton = () => {
    setCardCount(0);
    setLoveCount(0);
    setGadgets([]);
    setWishGadgets([]);
    // Show toast notification
    toast.success("Purchase Successful!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  //   console.log(gadgets.price)

  return (
    <div>
      {/* Toggle Buttons */}
      <div className="flex justify-center items-center gap-4 my-7">
        <button
          className={`text-2xl rounded-xl border px-4 font-bold ${
            activeButton === "Cart"
              ? "bg-orange-100 text-amber-600"
              : "text-black"
          }`}
          onClick={() => setActiveButton("Cart")}
        >
          Cart
        </button>
        <button
          className={`text-2xl rounded-xl border px-4 font-bold ${
            activeButton === "Wishlist"
              ? "bg-orange-100 text-amber-600"
              : "text-black"
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
              <h1 className="text-3xl text-purple-500 font-bold">Cart</h1>
            </div>
            <div>
              <div className="flex justify-center items-center gap-6">
                <h1 className="text-black font-bold text-lg">
                  Total Cost:{" "}
                  <span className="text-emerald-500 font-semibold ">
                    $
                    {gadgets
                      .reduce((total, gadget) => total + gadget.price, 0)
                      .toFixed(2)}
                  </span>
                </h1>

                <details className="dropdown">
                  <summary className="btn m-1 text-black text-lg font-bold border-pink-500 rounded-2xl bg-white">
                    Sort By Price <LiaSortSolid />{" "}
                  </summary>
                  <ul className="menu dropdown-content bg-gray-100 rounded-2xl  z-[1] w-52 p-2 shadow text-[#0f3cce]">
                    <li>
                      <a onClick={handleSortByPriceAscendingOrder}>
                        Ascending Order
                      </a>
                    </li>
                    <li>
                      <a onClick={handleSortByPriceDescendingOrder}>
                        Descending Order
                      </a>
                    </li>
                  </ul>
                </details>

                <button
                  onClick={handlePurchaseButton}
                  className="font-bold text-lg rounded-2xl  py-1  px-4 bg-[#49da32]  text-white"
                >
                  Purchase
                </button>
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
