import React from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { GrMailOption } from "react-icons/gr";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Social = ({flex}) => {
    return (
        <div className={`${flex} items-center pt-1 gap-4`}>
            <div className='p-3 rounded-3xl hover:bg-gray-500 hover:in-hover:*:text-gray-300'>
                <FaLinkedinIn className='text-black text-[25px]' />
            </div>
            <div className='p-3 rounded-3xl hover:bg-gray-500 hover:in-hover:*:text-gray-300'>
                <GrMailOption className='text-black text-[25px]' />
            </div>
            <div className='p-3 rounded-3xl hover:bg-gray-500 hover:in-hover:*:text-gray-300'>
                <FaTelegramPlane className='text-black text-[25px]' />
            </div>
            <div className='p-3 rounded-3xl hover:bg-gray-500 hover:in-hover:*:text-gray-300'>
                <FaWhatsapp className='text-black text-[25px]' />
            </div>
        </div>
    );
};

export default Social;