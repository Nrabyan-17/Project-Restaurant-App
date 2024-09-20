import React from 'react';
import { FaCaretDown, FaUser } from 'react-icons/fa';

const Navbar = ({ handlePopUp }) => {

    const NavLink = [

        {
            id: 1,
            name: "Home",
            link: "/#"
        },

        {
            id: 2,
            name: "About",
            link: "/#"
        },

        {
            id: 3,
            name: "Contact",
            link: "/#"
        },
    ]

    const DropdownLinks = [

        {
            id: 1,
            name: "Vegetables",
            link: "/#"
        },

        {
            id: 2,
            name: "Fruits",
            link: "/#"
        },

        {
            id: 3,
            name: "Grain",
            link: "/#"
        },
    ]


    return (
        <>
        <div className="bg-white shadow-md">

            <div className=" flex justify-between w-full py-4 sm:py-3">

                {/* Logo */}
                <div className="relative left-24 font-bold text-3xl px-3">Code</div>

                {/* Nav Section */}
                <div>
                    <ul className="flex gap-12">
                        {
                            NavLink.map(({id, name, link}) => (
                                <li className="inline-block hover:text-rose-500 text-xl font-semibold" key={id}>
                                    <a href={link}>{name}</a>
                                </li>
                            ))
                        }

                        { /* Simple Dropdown and links */ }
                        <li className='cursor-pointer group'>
                            <a href="/#" className="inline-block hover:text-rose-500 text-xl font-semibold">
                                <div className='flex items-center'>
                                    Dropdown
                                    <span>
                                        <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                                    </span>
                                </div>
                            </a>

                            { /* Dropdown Section */ }
                            <div className='absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2'>
                                <ul>
                                    {
                                        DropdownLinks.map(({id, name, link}) => (
                                        <li key={id}>
                                            <a href={link} className='inline-block hover:bg-red-400 hover:text-white rounded-md p-2 text-xl w-full'>{name}</a>
                                        </li>
                                      ))
                                    }
                                </ul>
                            </div>
                            
                        </li>

                        { /* My Account Section */ }
                        <li>
                           <button onClick={handlePopUp} className='flex bg-green-500 justify-center items-center bg-secondary text-xl p-2 gap-4 text-white h-[40px] hover:scale-105 duration-300 rounded-md'>
                                <FaUser />  
                                My Account  
                           </button> 
                        </li>            

                    </ul>
                </div>

                <div></div>

            </div>

        </div>
        </>
    )
}

export default Navbar;