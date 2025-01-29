import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { CardContext } from "../Root/Root";

const GadgetDetail = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    // console.log(product_id);
    // console.log(data);
  
    const gadget = data.find((gadget) => gadget.product_id == product_id);
    // console.log(gadget);
  
    const {
      product_title,
      product_image,
      price,
      availability,
      description,
      specification,
      rating,
    } = gadget;
    const handleGetProductId  = useContext(CardContext)[4]
    // const handleLoveCount  = useContext(CardContext)[3]
    const handleGetProductIdForWishList  = useContext(CardContext)[7]

  


  return (
      <div className="flex justify-center gap-10 pb-20">
        <div className=" w-[500px] h-[500px] border shadow-xl rounded-2xl bg-gray-200 P-9">
          <img
            className="object-cover w-full h-full rounded-xl"
            src={product_image}
            alt={product_title}
          />
        </div>
        <div>
          <h1 className="text-2xl text-black font-bold">{product_title}</h1>
          <p className="text-lg text-black font-bold mt-3">Price :${price}</p>
          {availability ? (
            <div>
              <button className="text-md font-bold text-[#309c08] border rounded-2xl py-1 px-3 mt-3">
                In Stock
              </button>
            </div>
          ) : (
            <div>
              <button className="text-md font-bold text-[#d92e2e] border rounded-2xl py-1 px-3 mt-3">
                Not In Stock
              </button>
            </div>
          )}

          <p className="text-black py-3">{description}</p>

          <h1 className="text-lg font-bold text-black pb-3">Specification :</h1>

          <ol className="text-black list-decimal pl-5">
            {specification.map((quantity, index) => (
              <li key={index}>{quantity}</li>
            ))}
          </ol>
          <div className="flex gap-3 pt-3">
            <h1 className="text-black text-md  font-bold">Rating :</h1>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <div className="flex gap-4 py-3">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-black  bg-gray-100 rounded-xl px-3">{rating}</p>
          </div>

          <div  className="flex gap-4 py-2">
            <button onClick={()=>handleGetProductId(product_id)} className="btn btn-active btn-primary rounded-2xl px-3"> 
                Add To Card
                <span className="text-white text-xl"><CiShoppingCart /></span>
            </button>
            <button onClick={()=>handleGetProductIdForWishList(product_id)} className="bg-white border rounded-full p-2"><span className="text-xl font-bold text-amber-600 "><GiSelfLove /></span></button>
          </div>
        </div>
      </div>

  );
};

export default GadgetDetail;
