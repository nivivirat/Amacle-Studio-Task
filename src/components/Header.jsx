import React, { useState } from "react";
import ExpandMore from '../assets/Icons/Header_Icons/Down.svg';
import ExpandLess from '../assets/Icons/Header_Icons/Up.svg';
import Card from './Card';
import img1 from '../assets/Icons/Header_Icons/img1.svg';
import img2 from '../assets/Icons/Header_Icons/img2.svg';
import img3 from '../assets/Icons/Header_Icons/img3.svg';
import img4 from '../assets/Icons/Header_Icons/img4.svg';
import img5 from '../assets/Icons/Header_Icons/img5.svg';
import img6 from '../assets/Icons/Header_Icons/img6.svg';
import img7 from '../assets/Icons/Header_Icons/img7.svg';
import contact from '../assets/Icons/Header_Icons/contact.svg';

const Header = () => {
    const [isTechnologyDropdownOpen, setTechnologyDropdownOpen] = useState(false);
    const [isApplicationDropdownOpen, setApplicationDropdownOpen] = useState(false);
    const [selectedTechnologyCard, setSelectedTechnologyCard] = useState("Blow-Fill-Seal");
    const [selectedApplicationCard, setSelectedApplicationCard] = useState("Pharmaceutical Industry");

    const toggleTechnologyDropdown = () => {
        setTechnologyDropdownOpen(!isTechnologyDropdownOpen);
        setApplicationDropdownOpen(false);
    };

    const toggleApplicationDropdown = () => {
        setApplicationDropdownOpen(!isApplicationDropdownOpen);
        setTechnologyDropdownOpen(false);
    };

    const handleTechnologyCardClick = (content) => {
        setSelectedTechnologyCard(content);
    };

    const handleApplicationCardClick = (content) => {
        setSelectedApplicationCard(content);
    };

    return (
        <header className="fixed top-0 left-0 right-0 w-screen bg-white py-4 z-10">
            <nav className="relative mx-[80px] flex flex-row items-center justify-between">
                <div className="font-bold text-[44px]">
                    Logo
                </div>
                <div className="font-light relative">
                    <ul className="flex gap-14 text-[22px]">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li className="relative cursor-pointer">
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
                                <div className="dropdown-menu absolute mt-2 bg-white border border-gray-300 p-4 rounded-lg shadow-md w-[689px] left-1/2 transform -translate-x-1/2">
                                    <div className="flex flex-row gap-[16px]">
                                        <Card
                                            content="Blow-Fill-Seal"
                                            img={img1}
                                            isSelected={selectedTechnologyCard === "Blow-Fill-Seal"}
                                            onClick={() => handleTechnologyCardClick("Blow-Fill-Seal")}
                                        />
                                        <Card
                                            content="Form-Fill-Seal"
                                            img={img2}
                                            isSelected={selectedTechnologyCard === "Form-Fill-Seal"}
                                            onClick={() => handleTechnologyCardClick("Form-Fill-Seal")}
                                        />
                                        <Card
                                            content="Injection-Stretch-Blow-Molding"
                                            img={img3}
                                            isSelected={selectedTechnologyCard === "Injection-Stretch-Blow-Molding"}
                                            onClick={() => handleTechnologyCardClick("Injection-Stretch-Blow-Molding")}
                                        />
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className="relative cursor-pointer">
                            <div
                                className={`flex items-center cursor-pointer ${isApplicationDropdownOpen ? "font-bold" : ""}`}
                                onClick={toggleApplicationDropdown}
                            >
                                Applications
                                {isApplicationDropdownOpen ? (
                                    <img src={ExpandLess} alt="Expand Less" className="ml-2 w-4 h-4" />
                                ) : (
                                    <img src={ExpandMore} alt="Expand More" className="ml-2 w-4 h-4" />
                                )}
                            </div>
                            {isApplicationDropdownOpen && (
                                <div className="dropdown-menu absolute mt-2 bg-white border border-gray-300 p-4 rounded-lg shadow-md w-[739px] left-1/2 transform -translate-x-1/2">
                                    <div className="flex flex-row gap-[16px]">
                                        <Card
                                            content="Pharmaceutical Industry"
                                            img={img4}
                                            isSelected={selectedApplicationCard === "Pharmaceutical Industry"}
                                            onClick={() => handleApplicationCardClick("Pharmaceutical Industry")}
                                        />
                                        <Card
                                            content="Cosmetic Industry"
                                            img={img5}
                                            isSelected={selectedApplicationCard === "Cosmetic Industry"}
                                            onClick={() => handleApplicationCardClick("Cosmetic Industry")}
                                        />
                                        <Card
                                            content="Food Industry"
                                            img={img6}
                                            isSelected={selectedApplicationCard === "Food Industry"}
                                            onClick={() => handleApplicationCardClick("Food Industry")}
                                        />
                                        <Card
                                            content="Chemical Industry"
                                            img={img7}
                                            isSelected={selectedApplicationCard === "Chemical Industry"}
                                            onClick={() => handleApplicationCardClick("Chemical Industry")}
                                        />
                                    </div>
                                </div>
                            )}
                        </li>
                        <li><a href="/articles">Articles</a></li>
                        <li><a href="/blogs">Blogs</a></li>
                    </ul>
                </div>
                <div className="text-[22px] font-light">
                    <ul className="flex flex-col justify-center items-center">
                        <img src={contact} alt="Contact" className="w-4 h-4 mr-2" />
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
