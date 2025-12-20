import React from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Card from './Card';

const AllProduct = () => {
    const AxiosSecure = useAxiosSecure()
    const { data: product = [] } = useQuery({
        queryKey: ['allProduct'],
        queryFn:async () => {
            const res = await AxiosSecure(
              `${import.meta.env.VITE_serverBaseUrl}/product-all`
            )
            return res.data
        }
    })
    console.log(product)

    return (
      <div className="space-y-3">
        <div className="">
          <h1 className="text-2xl font-bold">Explore Our Products</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {product.map((item, index) => (
            <Card item={item} key={index}></Card>
          ))}
        </div>
      </div>
    )
};

export default AllProduct;