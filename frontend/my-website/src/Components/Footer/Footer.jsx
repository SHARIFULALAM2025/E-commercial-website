import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import XIcon from '@mui/icons-material/X'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import SendIcon from '@mui/icons-material/Send'

import { TextField, InputAdornment, IconButton } from '@mui/material'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Section 1: Subscribe */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-wider">Exclusive</h2>
          <h3 className="text-lg font-medium">Subscribe</h3>
          <p className="text-gray-400 text-sm">Get 10% off your first order</p>
          <div className="flex items-center border border-white rounded-md overflow-hidden max-w-[250px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent p-2 text-sm w-full outline-none"
            />
            <button className="p-2 hover:bg-white hover:text-black transition-colors">
              <SendIcon fontSize="small" />
            </button>
          </div>
        </div>

        {/* Section 2: Support */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold uppercase tracking-widest">
            Support
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </p>
          <p className="text-gray-400 text-sm">exclusive@gmail.com</p>
          <p className="text-gray-400 text-sm">+88015-88888-9999</p>
        </div>

        {/* Section 3: Account */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold uppercase tracking-widest">
            Account
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Login / Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Shop
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4: Quick Link */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold uppercase tracking-widest">
            Quick Link
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Section 5: Download App */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold uppercase tracking-widest">
            Download App
          </h3>
          <p className="text-gray-500 text-xs font-medium">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-3">
            <div className="bg-white p-1 rounded">
              <img
                src="https://i.ibb.co.com/Vc64cwLs/Qr-Code.png"
                alt="QR Code"
                className="w-16 h-16"
              />
            </div>
            <div className="flex flex-col justify-between">
              <img
                src="https://i.ibb.co.com/1YqJsZcq/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
                alt="Google Play"
                className="w-24 object-contain"
              />
              <img
                src="https://i.ibb.co.com/JJ584tF/App-Store.png"
                alt="App Store"
                className="w-24 object-contain"
              />
            </div>
          </div>
          <div className="flex gap-5 pt-2">
            <FacebookIcon className="cursor-pointer hover:text-blue-500 transition-colors" />
            <XIcon className="cursor-pointer hover:text-gray-400 transition-colors" />
            <InstagramIcon className="cursor-pointer hover:text-pink-500 transition-colors" />
            <YouTubeIcon className="cursor-pointer hover:text-red-600 transition-colors" />
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="mt-16 pt-6 border-t border-white/10 text-center">
        <p className="text-gray-600 text-sm">
          © Copyright Rimel {currentYear}. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
