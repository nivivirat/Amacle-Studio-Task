import React, { useState } from "react";
import ExpandMore from '../assets/Icons/Down.svg';
import ExpandLess from '../assets/Icons/Up.svg';
import Card from './Card';
import img1 from '../assets/Icons/img1.svg';
import img2 from '../assets/Icons/img2.svg';
import img3 from '../assets/Icons/img3.svg';

const Header = () => {
    const [isTechnologyDropdownOpen, setTechnologyDropdownOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState("Blow-Fill-Seal"); // Default selected card

    const toggleTechnologyDropdown = () => {
        setTechnologyDropdownOpen(!isTechnologyDropdownOpen);
    };

    const handleCardClick = (content) => {
        setSelectedCard(content);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white py-4 z-10">
            <nav className="container mx-auto flex flex-row items-center justify-between">
                <div className="font-bold text-[44px]">Logo</div>
                <div className="font-light">
                    <ul className="flex gap-14 text-lg">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li className="relative cursor-pointer">
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
                                    <div className="dropdown-menu absolute mt-2 bg-white border border-gray-300 p-4 rounded-lg shadow-md w-[739px] h-[205px]">
                                        <div className="flex flex-row gap-[16px]">
                                            <Card
                                                content="Blow-Fill-Seal"
                                                img={img1}
                                                isSelected={selectedCard === "Blow-Fill-Seal"}
                                                onClick={() => handleCardClick("Blow-Fill-Seal")}
                                            />
                                            <Card
                                                content="Form-Fill-Seal"
                                                img={img2}
                                                isSelected={selectedCard === "Form-Fill-Seal"}
                                                onClick={() => handleCardClick("Form-Fill-Seal")}
                                            />
                                            <Card
                                                content="Injection-Stretch-Blow-Molding"
                                                img={img3}
                                                isSelected={selectedCard === "Injection-Stretch-Blow-Molding"}
                                                onClick={() => handleCardClick("Injection-Stretch-Blow-Molding")}
                                            />
                                        </div>
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
