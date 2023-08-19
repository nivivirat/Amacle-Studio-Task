import React from 'react';
import Question from '../../assets/Icons/Question.svg';
import Case from '../../assets/Icons/Case.svg'

const WhyMicrofab = () => {
    return (
        <div className='overflow-hidden'>
            <div
                className="absolute w-[600px] h-[246px] bg-[#cdd7d8] rounded-[20px] overflow-hiddenw"
                style={{
                    top: '119px',
                    right: '19px',
                    bottom: '770px',
                }}>
                <div className="w-423 h-166 flex-shrink-0 rounded-[60px] bg-p-v-18 inline-flex p-[8px] justify-center items-center gap-2 bg-white mt-[16px] ml-[17px]">
                    <div className='w-[30px] h-[30px] rounded-full bg-[#8aa6aa] items-center justify-center flex'>
                        <img src={Question} alt="Question Icon" className="w-[24px] h-[24px]" />
                    </div>
                    <span className="text-[28px] font-semibold">Why MicroFab?</span>
                </div>

                {/* content */}
                <div className='flex flex-row justify-between'>
                    <p className='text-[28px] font-bold ml-[25px] mt-[35px]'>4+ Decades of Industry <br></br>Experience</p>
                    <img src={Case} className='w-[200px] h-[170px]'></img>
                </div>
            </div>
        </div>
    );
};

export default WhyMicrofab;
