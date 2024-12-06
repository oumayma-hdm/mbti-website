// app/components/NewsBlock.tsx
"use client"; 

import { useState } from 'react';
import Link from 'next/link';

const NewsBlock = () => {
  // Todo: make it select latest created pages 
  const [newsItems] = useState([
    { id: 1, title: 'Home', content: 'Start Your Assessment', color: 'bg-blue-500', icon: '🏠' },
    { id: 2, title: 'About Assessments', content: 'Explore different assessment options', color: 'bg-yellow-500', icon: '🧠' },
    { id: 3, title: 'Career Paths', content: 'Discover various career paths', color: 'bg-pink-500', icon: '🚀' },
    { id: 4, title: 'Blog Paths', content: 'Read the latest insights on careers', color: 'bg-green-500', icon: '📝' },
  ]);

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className={`${news.color} p-6 rounded-lg shadow-lg text-center text-white transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-5xl mb-4">{news.icon}</div>

              <h3 className="text-2xl font-bold mb-2">{news.title}</h3>

              <p className="mb-4">{news.content}</p>

              <Link href={`/page/${news.id}`} className="mt-4 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition duration-300">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsBlock;
