import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-transparent p-4 text-white backdrop-blur-sm">
      <nav className="flex place-content-around  items-center">
        <a href="#" className="text-xl font-bold text-yellow-400">Mon Portfolio</a>
        <div className="hidden sm:flex space-x-4 ">
          <a href="#about" className="hover:text-yellow-400 transition-all duration-300"> About</a>
          <a href="#skills" className="hover:text-yellow-400 transition-all duration-300">Skills</a>
          <a href="#projects" className="hover:text-yellow-400 hover:scale-105 transition-all duration-300">Projects</a>
          <a href="#contact" className="hover:text-yellow-400 transition-all duration-300">Contact</a>
        </div>
        <div className="block sm:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar