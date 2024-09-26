// app/components/Hero.tsx
"use client"; // Make it a client component

import NewsBlock from './NewsBlock';

const Hero = () => {
  return (
    <div 
      className="relative bg-cover bg-center text-center h-screen"
      style={{ backgroundImage: 'url(/images/Background.jpg)' }} // Background image path
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-white pt-20">
        <h1 className="text-5xl font-extrabold">
          Discover Your Perfect Career Path
        </h1>
        <p className="mt-4 text-lg">
          Take our fun and engaging MBTI assessment to find the career that fits you!
        </p>
        <button className="mt-8 px-8 py-3 bg-yellow-400 text-purple-900 font-semibold rounded-full hover:bg-yellow-300 transition duration-300">
          Start Your Free Assessment
        </button>
      </div>

      <div className="relative z-20 mt-20">
        <NewsBlock />
      </div>
    </div>
  );
};

export default Hero;
