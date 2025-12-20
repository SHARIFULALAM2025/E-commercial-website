import React from 'react';
import ReusableButton from '../../../ReusableComponent/ReusableButton';

const Enhance = () => {
    return (
      <div className="bg-[#000000] md:flex justify-between items-center relative">
        <div className="space-y-3">
          <h1 className="text-white text-4xl font-bold">
            Enhance Your Music Experience
          </h1>
          <ReusableButton variant="contained" text="Bay Now"></ReusableButton>
        </div>

        <div className="z-10">
          <figure>
            <img
              src="https://i.ibb.co.com/Tx1mY96Q/Frame-694.png"
              alt=""
              className=""
            />
          </figure>
        </div>
        <div className="absolute top-0 right-0 ">
          <figure>
            <img
              src="https://i.ibb.co.com/QFQPrnyR/Ellipse-23-1.png"
              alt=""
              className=""
            />
          </figure>
        </div>
      </div>
    )
};

export default Enhance;