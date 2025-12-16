import React from 'react'
import ReusableButton from '../../../ReusableComponent/ReusableButton'

const Arrival = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">New Arrival</h1>
      <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
        <div className="relative">
          <figure>
            <img
              src="https://i.ibb.co.com/VWjthfJb/Frame-684.png"
              alt=""
              className="w-full bg-cover"
            />
          </figure>
          <div className="absolute bottom-0 space-y-2 text-white left-0">
            <h1 className="">PlayStation 5</h1>
            <p className="">
              Black and White version of the PS5 coming out on sale.
            </p>
            <ReusableButton
              variant="contained"
              text="shop now"
            ></ReusableButton>
          </div>
        </div>
        <div className="space-y-3">
          <div className="relative">
            <figure>
              <img
                src="https://i.ibb.co.com/LXFKPxzq/Frame-685.png"
                alt=""
                className="w-full bg-cover"
              />
            </figure>
            <div className="absolute bottom-0 space-y-2 text-white left-0">
              <h1 className="">Women’s Collections</h1>
              <p className="">
                Featured woman collections that give you another vibe.
              </p>
              <ReusableButton
                variant="contained"
                text="shop now"
              ></ReusableButton>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
            <div className="relative">
              <figure>
                <img
                  src="https://i.ibb.co.com/jPBYxBZ6/Frame-686.png"
                  alt=""
                  className="w-full bg-cover"
                />
              </figure>
              <div className="absolute bottom-0 space-y-2 text-white left-0">
                <h1 className="">Speakers</h1>
                <p className="">Amazon wireless speakers</p>
                <ReusableButton
                  variant="contained"
                  text="shop now"
                ></ReusableButton>
              </div>
            </div>
            <div className="relative">
              <figure>
                <img
                  src="https://i.ibb.co.com/jPBYxBZ6/Frame-686.png"
                  alt=""
                  className="w-full bg-cover"
                />
              </figure>
              <div className="absolute bottom-0 space-y-2 text-white left-0">
                <h1 className="">Speakers</h1>
                <p className="">Amazon wireless speakers</p>
                <ReusableButton
                  variant="contained"
                  text="shop now"
                ></ReusableButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Arrival
