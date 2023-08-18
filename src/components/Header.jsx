import React, { useState } from "react";
import ExpandMore from '../assets/Icons/Down.svg';
import ExpandLess from '../assets/Icons/Up.svg';
import Card from './Card';
import img1 from '../assets/Icons/img1.svg'
import img2 from '../assets/Icons/img2.svg'
import img3 from '../assets/Icons/img3.svg'

const Header = () => {
    const [isTechnologyDropdownOpen, setTechnologyDropdownOpen] = useState(false);

    const toggleTechnologyDropdown = () => {
        setTechnologyDropdownOpen(!isTechnologyDropdownOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white py-4 z-10">
            <nav className="container mx-auto flex flex-row items-center justify-between">
                <div className="font-bold text-[44px]">Logo</div>
                <div className="font-light">
                    <ul className="flex gap-14 text-lg">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li
                            className="relative cursor-pointer"
                        >
                            <div className="font-light relative">
                                <div
                                    className={`flex items-center cursor-pointer ${isTechnologyDropdownOpen ? "font-bold" : ""}`}
                                    onClick={toggleTechnologyDropdown}
                                >
                                    Technology
                                    {isTechnologyDropdownOpen ? (
                                        <img src={ExpandLess} alt="Expand Less" className="ml-2 w-4 h-4" />
                                    ) : (
                                        <img src={ExpandMore} alt="Expand More" className="ml-2 w-4 h-4" />
                                    )}
                                </div>
                                {isTechnologyDropdownOpen && (
                                    <div className="dropdown-menu absolute mt-2 bg-white border border-gray-300 py-2 rounded-lg shadow-lg p-4 flex space-x-4">
                                        <Card content="Blow-Fill-Seal" img={img1} />
                                        <Card content="Form-Fill-Seal" img={img2} />
                                        <Card content="Injection-Stretch-Blow-Molding" img={img3} />
                                    </div>
                                )}
                            </div>
                        </li>
                        <li><a href="/applications">Applications</a></li>
                        <li><a href="/articles">Articles</a></li>
                        <li><a href="/blogs">Blogs</a></li>
                    </ul>
                </div>
                <div className="text-lg font-light">
                    <ul>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
