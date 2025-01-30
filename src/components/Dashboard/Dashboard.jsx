import React, { useContext, useState } from "react";
import { useLoaderData, useLocation, useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { CardContext } from "../Root/Root";
import ShowAddCardGadgets from "../ShowAddCardGadgets/ShowAddCardGadgets";
import WishListGadget from "../WishListGadget/WishListGadget";
import { LiaSortSolid } from "react-icons/lia";
import { toast } from "react-toastify";
import successImg from '../../assets/image/Group.png'

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("Cart");
  const [modalTotal, setModalTotal] = useState(0);

  const ids = useContext(CardContext)[5];
  const wishId = useContext(CardContext)[6];
  const setCardCount = useContext(CardContext)[2];
  const setLoveCount = useContext(CardContext)[9];

  const { product_id } = useParams();
  const data = useLoaderData();

  const navigate = useNavigate();  

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
  };

  // for modal

  // Handle Purchase Button
  const handlePurchaseButtonModal = (id) => {
    const total = gadgets.reduce((total, gadget) => total + gadget.price, 0).toFixed(2);
    setModalTotal(total);
    document.getElementById(id).showModal();
    handlePurchaseButton();
  };

  // Handle modal close button
  const handleCloseModal = () => {
    document.getElementById("my_modal_1").close(); 
    navigate("/"); 
  };

  const location = useLocation();
  console.log(location);

  return (
    <div className="relative -top-27 border rounded-2xl max-w-7xl mx-auto px-4 sm:px-14 py-4 pb-7 bg-purple-100">
      <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
        <button
          className={`text-2xl rounded-xl border px-4 font-bold py-2 w-full sm:w-auto ${
            activeButton === "Cart"
              ? "bg-orange-100 text-amber-600"
              : "text-black"
          }`}
          onClick={() => setActiveButton("Cart")}
        >
          Cart
        </button>
        <button
          className={`text-2xl rounded-xl border px-4 font-bold py-2 w-full sm:w-auto ${
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
        <div className="mt-10 sm:mt-28">
          <div className="flex flex-col sm:flex-row justify-between items-center my-6">
            <h1 className="text-3xl text-purple-500 font-bold">Cart</h1>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-4 sm:mt-0">
              <h1 className="text-black font-bold text-lg">
                Total Cost:{" "}
                <span className="text-emerald-500 font-semibold">
                  $
                  {gadgets
                    .reduce((total, gadget) => total + gadget.price, 0)
                    .toFixed(2)}
                </span>
              </h1>

              <details className="dropdown">
                <summary className="btn m-1 text-black text-lg font-bold border-pink-500 rounded-2xl bg-white">
                  Sort By Price <LiaSortSolid />
                </summary>
                <ul className="menu dropdown-content bg-gray-100 rounded-2xl z-[1] w-52 p-2 shadow text-[#0f3cce]">
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

              {/* modal button  */}
              <div>
                <div className=" rounded-2xl px-4  py-4 pb-7 bg-purple-100">
                  <div>
                      <button
                        className="font-bold text-lg rounded-2xl py-2 px-6 bg-[#49da32] text-white w-full sm:w-auto mt-0 md:mt-2"
                        onClick={() => handlePurchaseButtonModal("my_modal_1")}
                      >
                        Purchase
                      </button>

                    {/* Modal */}
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box bg-white shadow flex flex-col justify-center items-center">
                        <div className="pb-4">
                          <img src={successImg} alt="Success" />
                        </div>
                        <h3 className="text-2xl font-bold text-black border-b pb-3 px-6">
                          Payment Successfully
                        </h3>
                        <p className="text-black pt-2 text-center">Thanks for purchasing</p>
                        <div className="flex justify-center items-center gap-3">
                          <h1 className="text-black font-bold text-lg">Total:</h1>
                          <p className="py-4 text-black">${modalTotal}</p>
                        </div>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="rounded-md py-3 px-32 bg-blue-400" onClick={handleCloseModal}>
                              Close
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
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
          <h1 className="text-xl text-black font-bold text-center md:text-start mt-3">
            Wishlist
          </h1>
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
