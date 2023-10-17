import React, { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="z-20 fixed bg-white w-full top-0">
      <div className="flex justify-between items-center p-4">
        <div className="flex w-1/2 justify-center items-center">
          <img className='h-[70px]'
            src="/text_logo.png"
            alt="High Ground Leadership Group text logo" />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none mr-8">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        
        <div className="hidden md:flex md:flex nav-buttons text-black flex w-1/2 justify-center space-x-12">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/news">News</a>
        </div>
      </div>
      <div className={`w-full z-20 nav-buttons absolute bg-white text-black ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:hidden pb-8`}>
        <div className="py-4 mx-auto border-b-2 border-yellow-500"><a className="p-3 px-24" href="/">Home</a></div>
        <div className="py-4 mx-auto border-b-2 border-yellow-500"><a className="p-3 px-24" href="/about">About</a></div>
        <div className="py-4 mx-auto border-b-2 border-yellow-500"><a className="p-3 px-24" href="/news">News</a></div>
      </div>
    </nav>
  )

}
