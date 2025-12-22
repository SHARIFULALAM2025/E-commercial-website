import React from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Message from './Message';

const FeedBack = () => {
    const AxiosSecure = useAxiosSecure()
    const { data:feedBack=[],refetch} = useQuery({
        queryKey: ["Message"],
        queryFn: async () => {
            const result =await  AxiosSecure('/customer-feedback')
            return result.data

        }
    })


    return (
      <div>
        {feedBack.map((item, index) => (
          <Message key={index} item={item} refetch={refetch}></Message>
        ))}
      </div>
    )
};

export default FeedBack;