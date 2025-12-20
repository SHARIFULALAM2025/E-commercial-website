import IconButton from '@mui/material/IconButton';
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useNavigate } from 'react-router';
const ForYou = ({ item }) => {
      const navigate = useNavigate()
      const handelView = (id) => {
          navigate(`/details/${id}`)
          console.log("click",id);
          
      }
    return (
      <div>
        <div className="rounded relative ">
          <div className="bg-[#F5F5F5] p-5 rounded">
            <figure>
              <img src={item.myImage[0]} alt="" className="mx-auto h-32" />
            </figure>
          </div>
          <h1 className="">{item.name}</h1>
          <h1 className="">{item.price}</h1>
          <div className="absolute top-0 right-0 flex flex-col">
            <IconButton color="primary" aria-label="add to shopping cart">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton
              onClick={() => handelView(item._id)}
              color="primary"
              aria-label="add to shopping cart"
            >
              <VisibilityIcon />
            </IconButton>
          </div>
        </div>
      </div>
    )
};

export default ForYou;