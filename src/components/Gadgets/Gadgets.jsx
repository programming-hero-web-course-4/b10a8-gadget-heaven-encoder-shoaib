import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';
import Laptops from '../Laptops/Laptops';
import { toast } from 'react-toastify';
import NoDataFound from '../NoDataFound/NoDataFound';

const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [showLaptops, setShowLaptops] = useState(false); 

    useEffect(() => {
        fetch('gadgets.json')
            .then(res => res.json())
            .then(data => setGadgets(data));
    }, []);

    const handleLaptops = (categoryName) => {
        const filteredLaptops = gadgets.filter(gadget => gadget.category === categoryName);
        setLaptops(filteredLaptops); 
        setShowLaptops(true); 
        // if(laptops.length == 0){
        //     toast('There is no Product Available')
        // }
    };

    const handleBySpecificModel = (word, model) => {
        const filteredSpecificModel = gadgets.filter(
            gadget => gadget.product_title.includes(word) && gadget.category === model
        );
        console.log(filteredSpecificModel);
        setLaptops(filteredSpecificModel);
        setShowLaptops(true);
    };
    

    const handleShowAll = () => {
        setShowLaptops(false); 
    }; 

    return (
        <div>
            <h1 className="flex justify-center items-center text-5xl font-bold text-black w-full text-center mb-8">
                Explore Cutting-Edge Gadgets
            </h1>
            <div className="md:flex gap-10 md:m-14">
                <div className="w-[300px] md:flex md:flex-col justify-center md:justify-start ms-10 md:ms-0">
                    <div className="grid grid-cols-1 gap-4 border md:p-7 rounded-2xl shadow mb-7 md:mb-1">
                        <button
                            
                            onClick={handleShowAll}
                            className="text-xl text-white font-bold bg-[#8a35d1] p-2 rounded-xl"
                        >
                            All Products
                        </button>
                        <button
                            onClick={() => handleLaptops("Laptops")}
                            className="text-xl text-black font-bold py-3 w-full bg-gray-200 rounded-xl"
                        >
                            Laptops
                        </button>
                        <button
                        onClick={() => handleLaptops("Smartphones")}
                        className="text-xl text-black font-bold py-3 w-full bg-gray-200 rounded-xl">
                            Phones
                        </button>
                        <button 
                        onClick={() => handleLaptops("Accessories")}
                        className="text-xl text-black font-bold py-3 w-full bg-gray-200 rounded-xl">
                            Accessories
                        </button>
                        <button
                        onClick={() => handleLaptops("Smartwatches")}
                        className="text-xl text-black font-bold py-3 w-full bg-gray-200 rounded-xl">
                            Smart Watches
                        </button>
                        <button
                        onClick={() => handleBySpecificModel("MacBook","Laptops")}
                        className="text-xl text-black font-bold py-3 w-full bg-gray-200 rounded-xl">
                            MacBook
                        </button>
                        <button 
                        onClick={() => handleBySpecificModel("iPhone","Smartphones")}
                        className="text-xl text-black font-bold py-3 w-full bg-gray-200 rounded-xl">
                            iPhone
                        </button>
                    </div>
                </div>

                {/* Product page */}
                {!showLaptops && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 border">
                        {gadgets.map(gadget => (
                            <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
                        ))}
                    </div>
                )}

                {/* model base page */}
                {showLaptops && (
                    <div>
                        {
                            laptops.length == 0 &&(
                                <NoDataFound></NoDataFound>
                            )
                        }
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 border">
                        {laptops.map(laptop => (
                            <Laptops key={laptop.product_id} gadget={laptop}></Laptops>
                        ))}
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Gadgets;
