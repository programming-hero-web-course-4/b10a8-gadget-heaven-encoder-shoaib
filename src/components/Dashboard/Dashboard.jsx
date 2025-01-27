import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CardContext } from '../Root/Root';
import ShowAddCardGadgets from '../ShowAddCardGadgets/ShowAddCardGadgets';

const Dashboard = () => {
    const ids = useContext(CardContext)[5];
    console.log(ids);

    const { product_id } = useParams();
    const data = useLoaderData();
  
    const gadgets = data.filter((gadget) => ids.includes(gadget.product_id));
    console.log(gadgets); 
  
    return (
        <div>
            <div className='flex justify-between items-center my-10'>
                <div>
                    <h1 className='text-black font-bold'>Cart</h1>
                </div>
                <div>
                    <div className='flex gap-6'>
                        <h1 className='text-black font-bold'>Total const: </h1>
                        <button className='text-black font-bold'>Sort by Price</button>
                        <button className='text-black font-bold'>Purchase</button>
                    </div>
                </div>
            </div>
            <div>
            {
                gadgets.map(((gadget ,idx) => <ShowAddCardGadgets key={idx} gadget ={gadget}></ShowAddCardGadgets>))
            }
            </div>

        </div>
    );
};

export default Dashboard;
