import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='w-[80px] h-[160px] bg-gray-500/35 rounded-r-full absolute top-[37%] left-0 flex items-center hover:bg-gray-500 hover:in-hover:*:visible z-10'>
            <ul className='invisible pl-[50px] py-3 flex flex-col justify-center gap-[17px] text-lg font-medium'>
                <Link to={"/"}>
                    <li className='w-fit hover:text-[22px]'>Abstract</li>
                </Link>
                
                <li className='w-fit ml-[53px] hover:text-[22px]'>Skils</li>
                <li className='w-fit ml-[53px] hover:text-[22px]'>Project</li>
                <li className='w-fit ml-[53px] hover:text-[22px]'>Progress</li>

                <Link to={"/Contact"}>
                    <li className='w-fit hover:text-[22px]'>Contact Me</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;