import React from 'react';

const Sold = ({ height }) => {
    return (
        <div className="w-[50px]">
            <div
                className="w-full bg-white rounded-[60px]"
                style={{ height }}
            ></div>
        </div>
    );
};

export default Sold;
