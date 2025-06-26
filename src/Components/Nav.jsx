import React from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import { FiActivity, FiPhone } from 'react-icons/fi';
import { LiaObjectGroupSolid } from 'react-icons/lia';
import { MdWorkspacesFilled } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='w-[80px] h-[160px] bg-gray-500/35 rounded-r-full absolute top-[37%] left-0 flex items-center hover:bg-gray-400 hover:in-hover:*:visible'>
            <ul className='invisible pl-[35px] py-3 flex flex-col justify-center gap-[17px] text-lg font-medium'>
                <Link to={"/"}>
                    <li className='w-[150px] hover:text-[22px] flex items-center gap-2'><BiInfoCircle className='text-[20px]'/> Abstract</li>
                </Link>
                
                <li className='w-[150px] ml-[47px] hover:text-[22px] flex items-center gap-2'><LiaObjectGroupSolid className='text-[20px]'/> Skils</li>
                <li className='w-[150px] ml-[60px] hover:text-[22px] flex items-center gap-2'><MdWorkspacesFilled className='text-[20px]'/> Project</li>
                <li className='w-[150px] ml-[47px] hover:text-[22px] flex items-center gap-2'><FiActivity className='text-[20px]'/> Progress</li>

                <Link to={"/Contact"}>
                    <li className='w-[150px] hover:text-[22px] flex items-center gap-2'><FiPhone className='text-[20px]'/> Contact Me</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;