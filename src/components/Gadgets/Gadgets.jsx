import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {

    const [gadgets ,setGadgets] = useState([])
    useEffect(()=>{
        fetch('gadgets.json')
        .then(res => res.json())
        .then(data =>setGadgets(data))
        // .then(data => console.log(data))
    },[])
    return (
        <div>
            <h1 className=' flex justify-center items-center text-5xl font-bold text-black w-full text-center mb-8'>Explore Cutting-Edge Gadgets</h1>
            {/* <p className='text-black text-3xl '>length: {gadgets.length}</p> */}
            <div className='md:flex gap-10 md:m-14 '>
                <div className='w-[300px] md:flex md:flex-col justify-center md:justify-start ms-10 md:ms-0'>
                    <div className='grid grid-cols-1 gap-4 border md:p-7 rounded-2xl shadow mb-7 md:mb-1 '>
                    <button className='text-xl text-white font-bold bg-[#8a35d1] p-2 rounded-xl'>All Product</button>
                    <button className='text-xl text-black font-bold py-3 w-full  bg-gray-200 rounded-xl'>Laptops</button>
                    <button className='text-xl text-black font-bold py-3 w-full bg-gray-200 rounded-xl'>Phones</button>
                    <button className='text-xl text-black font-bold py-3 w-full bg-gray-200 rounded-xl'>Accessories</button>
                    <button className='text-xl text-black font-bold py-3 w-full bg-gray-200 rounded-xl'>Smart Watches</button>
                    <button className='text-xl text-black font-bold py-3 w-full bg-gray-200 rounded-xl'>MacBook</button>
                    <button className='text-xl text-black font-bold py-3 w-full bg-gray-200 rounded-xl'>Iphone</button>
                    </div>

                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 border '>
                    {
                        gadgets.map(gadget => <Gadget key={gadget.product_id} gadget = {gadget}></Gadget>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;