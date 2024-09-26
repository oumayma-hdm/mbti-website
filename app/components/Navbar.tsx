// Navbar 
"use client"; 

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent py-4 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        <div className="flex space-x-8 text-white text-xl font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/assessments">Assessments</Link>
          <Link href="/career-paths">Career Paths</Link>
          <Link href="/blog">Blog</Link>
        </div>

        <div className="text-4xl font-bold text-white absolute left-1/2 transform -translate-x-1/2">
          MBTI
        </div>

       
        <div className="flex items-center space-x-4">
          <input 
            type="text" 
            placeholder="Search" 
            className="rounded-full py-2 px-4 text-black outline-none"
          />
          <div className="text-white text-xl font-semibold hover:text-gray-400 transition duration-300">
            <Link href="/profile">👤</Link>
          </div>
          <div className="text-white text-xl font-semibold hover:text-gray-400 transition duration-300">
            <Link href="/settings">⚙️</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
