import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook'
import XIcon from '@mui/icons-material/X'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import ReusableButton from '../ReusableComponent/ReusableButton';
const Footer = () => {

    return (
      <div className="bg-[#000000] text-white p-5">
        <div className="grid md:grid-cols-5 grid-cols-1">
          <div className="">
            <h1 className="">Exclusive</h1>
            <p className="">Subscribe</p>
            <p className="">Get 10% off your first order</p>
            <div className="flex items-center">
              <FormControl
                sx={{
                  m: 1,
                  backgroundColor: "white",
                  borderRadius: 2,

                }}
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Email
                </InputLabel>
                <Input  type="email" />
              </FormControl>
              <ReusableButton sx={{}} variant="contained" text="send"></ReusableButton>
            </div>
          </div>
          <div className="">
            <h1 className="">Support</h1>
            <h1 className="">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h1>
            <p className="">exclusive@gmail.com</p>
            <h1 className="">+88015-88888-9999</h1>
          </div>
          <div className="">
            <h1 className="">Account</h1>
            <a href="" className="">
              My Account
            </a>
            <br></br>
            <a href="" className="">
              Login
            </a>
            <br></br>
            <a href="" className="">
              Register
            </a>
            <br></br>
            <a href="" className="">
              Cart
            </a>
            <br></br>
            <a href="" className="">
              Wishlist
            </a>
            <br></br>
            <a href="" className="">
              Shop
            </a>
          </div>
          <div className="">
            <h1 className="">Quick Link</h1>
            <a href="" className="">
              Privacy Policy
            </a>
            <br></br>
            <a href="" className="">
              Terms Of Use
            </a>
            <br></br>
            <a href="" className="">
              FAQ
            </a>
            <br></br>
            <a href="" className="">
              Contact
            </a>
          </div>
          <div className="space-y-2">
            <h1 className="">Download App</h1>
            <h1 className="">Save $3 with App New User Only</h1>
            <div className="flex gap-2">
              <figure>
                <img
                  src="https://i.ibb.co.com/Vc64cwLs/Qr-Code.png"
                  alt=""
                  className=""
                />
              </figure>
              <div className="">
                <img
                  src="https://i.ibb.co.com/1YqJsZcq/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
                  alt=""
                  className=""
                />
                <img
                  src="https://i.ibb.co.com/JJ584tF/App-Store.png"
                  alt=""
                  className=""
                />
              </div>
            </div>
            <div className="space-x-2">
              <FacebookIcon></FacebookIcon>
              <XIcon></XIcon>
              <InstagramIcon></InstagramIcon>
              <YouTubeIcon></YouTubeIcon>
            </div>
          </div>
        </div>
      </div>
    )
};

export default Footer;