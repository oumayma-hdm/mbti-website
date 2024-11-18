"use client";

import Script from 'next/script';
import NewsBlock from './NewsBlock';
import { useState } from 'react';
import MBTITest from './MBTITest';

const Hero = () => {
  const [showTest, setShowTest] = useState(false);

  return (
    <div 
      className="relative bg-cover bg-center text-center h-screen"
      style={{ backgroundImage: 'url(/images/Background.jpg)' }}
    >
      <Script
        id="openwidget-script"
        strategy="afterInteractive"
      >
        {`
          window.__ow = window.__ow || {};
          window.__ow.organizationId = "ce77918e-040e-4bf9-92e8-0aedd67565b4";
          window.__ow.template_id = "d59ebadf-4afa-4cd1-bb30-15ced3bc4782";
          window.__ow.integration_name = "manual_settings";
          window.__ow.product_name = "chatbot";   
          ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
        `}
      </Script>

      <noscript>
        You need to{' '}
        <a 
          href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" 
          rel="noopener nofollow"
        >
          enable JavaScript
        </a>{' '}
        in order to use the AI chatbot tool powered by{' '}
        <a 
          href="https://www.chatbot.com/" 
          rel="noopener nofollow" 
          target="_blank"
        >
          ChatBot
        </a>
      </noscript>

      {!showTest ? (
        <>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-white pt-20">
            <h1 className="text-5xl font-extrabold">
              Discover Your Perfect Career Path
            </h1>
            <p className="mt-4 text-lg">
              Take our fun and engaging MBTI assessment to find the career that fits you!
            </p>
            <button 
              onClick={() => setShowTest(true)}
              className="mt-8 px-8 py-3 bg-yellow-400 text-purple-900 font-semibold rounded-full hover:bg-yellow-300 transition duration-300"
            >
              Start Your Free Assessment
            </button>
          </div>

          <div className="relative z-20 mt-20">
            <NewsBlock />
          </div>
        </>
      ) : (
        <div className="relative z-10 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-20">
          <MBTITest />
        </div>
      )}
    </div>
  );
};

export default Hero;