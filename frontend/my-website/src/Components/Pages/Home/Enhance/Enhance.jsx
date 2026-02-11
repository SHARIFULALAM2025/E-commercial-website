import React from 'react'
import ReusableButton from '../../../ReusableComponent/ReusableButton'

const Enhance = () => {
  // Professional banners usually include a countdown for "Music Experience" promos
  const TimeUnit = ({ value, label }) => (
    <div className="bg-white text-black rounded-full w-14 h-14 md:w-16 md:h-16 flex flex-col items-center justify-center">
      <span className="font-bold text-sm md:text-lg leading-none">{value}</span>
      <span className="text-[10px] md:text-xs">{label}</span>
    </div>
  )

  return (
    <section className="max-w-7xl mx-auto px-4 my-16">
      <div className="bg-black rounded-sm overflow-hidden relative flex flex-col md:flex-row items-center justify-between p-8 md:p-16 min-h-[450px]">
        {/* Text Content Area */}
        <div className="z-20 space-y-6 md:w-1/2">
          <p className="text-green-400 font-semibold tracking-wide">
            Categories
          </p>

          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Enhance Your <br /> Music Experience
          </h1>

          {/* Countdown Timer */}
          <div className="flex gap-4 pt-4">
            <TimeUnit value="23" label="Hours" />
            <TimeUnit value="05" label="Days" />
            <TimeUnit value="59" label="Minutes" />
            <TimeUnit value="35" label="Seconds" />
          </div>

          <div className="pt-6">
            <ReusableButton
              variant="contained"
              text="Buy Now!"
              sx={{
                backgroundColor: '#00FF66', // Professional Green
                color: 'white',
                padding: '12px 48px',
                '&:hover': { backgroundColor: '#00D957' },
              }}
            />
          </div>
        </div>

        {/* Image Area */}
        <div className="relative z-10 mt-12 md:mt-0">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gray-400/30 blur-[80px] rounded-full scale-110"></div>

          <figure className="relative">
            <img
              src="https://i.ibb.co.com/Tx1mY96Q/Frame-694.png"
              alt="Premium Speaker"
              className="w-full max-w-[500px] object-contain drop-shadow-2xl"
            />
          </figure>
        </div>

        {/* Ellipse Decoration (Top Right) */}
        <div className="absolute top-0 right-0 opacity-50 md:opacity-100">
          <img
            src="https://i.ibb.co.com/QFQPrnyR/Ellipse-23-1.png"
            alt=""
            className="w-64 md:w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Enhance
