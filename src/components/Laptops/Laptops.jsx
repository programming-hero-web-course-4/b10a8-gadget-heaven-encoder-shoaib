import React from 'react';
import { Link } from 'react-router-dom';

const Laptops = ({gadget}) => {
    // console.log(gadget)
    const {product_id,product_title, product_image, price} = gadget;
    return (
        <div className='border rounded-2xl shadow-lg p-4 bg-gray-100'>
            <div className='w-full h-[400px] overflow-hidden rounded-lg'>
                <img className='object-cover w-full h-full' src={product_image} alt={product_title} />
            </div>
            <div className='mt-4'>
                <h2 className='text-xl font-semibold text-gray-800'>{product_title}</h2>
                <p className='text-lg text-gray-600 mt-2 mb-3'>Price: ${price}</p>
                <Link to={`/product/${product_id}`} className='text-[#a032cb] text-md font-bold border rounded-full p-2 mt-2'>View Details</Link>
            </div>
        </div>
    );
};

export default Laptops;