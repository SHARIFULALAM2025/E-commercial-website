import React from 'react'

const Delivery = () => {
  const info = [
    {
      title: 'FREE AND FAST DELIVERY',
      image: 'https://i.ibb.co.com/HfRJdZGj/Services-4.png',
      des: 'Free delivery for all orders over $140',
    },
    {
      title: '24/7 CUSTOMER SERVICE',
      image: 'https://i.ibb.co.com/gbtxwtFC/Services-5.png',
      des: 'Friendly 24/7 customer support',
    },
    {
      title: 'MONEY BACK GUARANTEE',
      image: 'https://i.ibb.co.com/dwkt2KdS/Services-6.png',
      des: 'We return money within 30 days',
    },
  ]

  return (
    <section className="py-16 md:py-28 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {info.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4 group"
          >
            {/* Icon Container with subtle animation */}
            <div className="mb-2 transition-transform duration-300 group-hover:scale-110">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h3 className="font-bold text-lg md:text-xl tracking-tight dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                {item.des}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Delivery
