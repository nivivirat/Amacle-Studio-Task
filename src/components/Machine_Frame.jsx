import React from 'react';
import Machine from '../assets/Machine_Frame_Images/Machine.svg';
import '../App.css'; 

const Machine_Frame = () => {
    return (
        <div
            className="w-[68%] h-[919px] absolute top-[119px] left-[18px] rounded-[20px] bg-gradient-to-r from-[#e1e1e1] to-[#8ca7ab] border-black p-4"
        >
            <div className="relative w-[100%] h-[100%]">
                <img
                    src={Machine}
                    alt="Machine"
                    className="absolute w-[100%] h-[100%]"
                />
                <div className="absolute top-[94px] left-[23px] w-[260px] h-[260px] rounded-full bg-gradient-to-tr from-[#dcdede] to-[#cbd2d3]"></div>
                
                <p className="w-[554px] h-[316px] absolute left-[52px] top-[52px] text-white font-bold text-[64px] leading-[79px] tracking-tight text-left">
                    <span className="highlight-text">
                        Providing Industry Solutions <br /> from the Start
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Machine_Frame;
