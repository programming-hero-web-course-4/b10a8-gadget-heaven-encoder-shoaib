import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const GadgetDetail = () => {
    const {product_id} = useParams()
    const data = useLoaderData();
    console.log(product_id)
    console.log(data)

    const gadget = data.find(gadget => gadget.product_id == product_id);
    console.log(gadget)

    const {product_title, product_image, price} = gadget;
    return (
        <div>
            <div className='flex justify-center gap-10 pb-20'>
                <div className=' w-[500px] h-[500px] border shadow-xl rounded-2xl bg-gray-200 P-9'>
                    <img className='object-cover w-full h-full rounded-xl' src={product_image} alt={product_title} />
                </div>
                <div>
                    <h1 className='text-2xl text-black font-bold'>{product_title}</h1>
                    <p className='text-lg text-black font-bold'>Price :${price}</p>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetail;