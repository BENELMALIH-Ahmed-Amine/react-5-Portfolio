import React from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { GrMailOption } from "react-icons/gr";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='w-full pb-2 pt-3.5 px-[20%] bg-gray-500 absolute bottom-0 flex justify-center'>
            <div className='w-[80%] border-t-2 text-black flex justify-around gap-10'>
                <p className='text-white text-xl font-medium pt-1'><span className='text-black text-2xl mr-1'>&copy;</span> All right preserved - BenElmalih Ahmed Amine</p>
                <div className='flex items-center pt-1 gap-5'>
                    <FaLinkedinIn className='text-black text-[23px] hover:text-gray-300' />
                    <GrMailOption className='text-black text-[23px] hover:text-gray-300' />
                    <FaTelegramPlane className='text-black text-[23px] hover:text-gray-300' />
                    <FaWhatsapp className='text-black text-[23px] hover:text-gray-300' />
                </div>
            </div>
        </footer>
    );
};

export default Footer;