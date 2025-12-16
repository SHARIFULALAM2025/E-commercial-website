import React from 'react';

const Delivery = () => {
    const info = [
      {
        title: 'FREE AND FAST DELIVERY',
        image: 'https://i.ibb.co.com/HfRJdZGj/Services-4.png',
        des: 'Free delivery for all orders over $140',
      },
      {
        title: '24/7 CUSTOMER SERVICE ',
        image: 'https://i.ibb.co.com/gbtxwtFC/Services-5.png',
        des: 'Friendly 24/7 customer support',
      },
      {
        title: 'MONEY BACK GUARANTEE',
        image: ' https://i.ibb.co.com/dwkt2KdS/Services-6.png',
        des: 'We reurn money within 30 days',
      },
    ]
    return (
      <div>
        <div className="grid grid-cols-3 md:mt-28">
          {info.map((item, index) => (
            <div key={index} className="text-center">
              <figure>
                <img src={item.image} alt="" className="mx-auto" />
              </figure>
              <h1 className="dark:text-white">{item.title} </h1>
              <h1 className="dark:text-white">{item.des}</h1>
            </div>
          ))}
        </div>
      </div>
    )
};

export default Delivery;