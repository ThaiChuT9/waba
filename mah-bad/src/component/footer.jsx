import React from 'react'
import instagramLogo from '../assets/instagram.svg';
import facebookLogo from '../assets/facebook.svg';
import twitterLogo from '../assets/twitter.svg';
import youtubeLogo from '../assets/youtube.svg';


const footer = () => {
  return (
    <footer className="mt-5 bg-gray-800 text-white">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row py-5">
        <div className="md:w-1/3 flex flex-col items-end justify-center text-right md:pr-3">
          <h2 className="text-2xl md:text-3xl font-bold uppercase">
            Join Our<br />Mailing List
          </h2>
        </div>
        <div className="md:w-2/3 flex items-center pr-3">
          <form className="w-full">
            <div className="flex">
              <input
                type="email"
                className="form-input w-full text-gray-900 uppercase border-none"
                placeholder="Your email address"
                aria-label="Email Address"
              />
              <button
                className="btn bg-blue-600 text-white uppercase ml-2 py-2 px-4 rounded"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row py-5">
        <div className="md:w-1/2 flex flex-col items-center">
          <p className="text-lg font-bold uppercase mb-4">Connect</p>
          <div className="flex space-x-4">
            <a href="#" className="flex items-center space-x-2">
              <img src={instagramLogo} alt="Instagram" className="w-6 h-6"/>
              <span>Instagram</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <img src={facebookLogo} alt="Facebook" className="w-6 h-6"/>
              <span>Facebook</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <img src={twitterLogo} alt="Twitter" className="w-6 h-6"/>
              <span>Twitter</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <img src={youtubeLogo} alt="YouTube" className="w-6 h-6"/>
              <span>YouTube</span>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center mt-8 md:mt-0">
          <p className="text-lg font-bold uppercase mb-4">More About Us</p>
          <div className="flex space-x-4">
            <a href="#" className="flex items-center space-x-2">
              <i className="bi bi-question-circle-fill text-2xl"></i>
              <span>FAQ's</span>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <i className="bi bi-info-circle-fill text-2xl"></i>
              <span>About Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default footer