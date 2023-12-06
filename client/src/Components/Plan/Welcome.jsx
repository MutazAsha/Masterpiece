import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Welcome = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://your-api-endpoint-here');
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <>
        <title>Tailwind Starter Template - Ghostwind CSS : Tailwind Toolbox</title>
        <meta name="author" content="name" />
        <meta name="description" content="description here" />
        <meta name="keywords" content="keywords,here" />
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{
          __html: "\n\t.smooth {transition: box-shadow 0.3s ease-in-out;}\n\t::selection{background-color: aliceblue}\n\t:root{::-webkit-scrollbar{height:10px;width:10px;}::-webkit-scrollbar-track{background:#efefef;border-radius:6px}\n\t::-webkit-scrollbar-thumb{background:#d5d5d5;border-radius:6px} ::-webkit-scrollbar-thumb:hover{background:#c4c4c4}}\n\t .scroll-top {position: fixed;z-index: 50;padding: 0;right: 30px;bottom: 100px;opacity: 0;visibility: hidden;transform: translateY(15px);height: 46px;width: 46px;cursor: pointer;display: flex;align-items: center;justify-content: center;border-radius: 50%;transition: all .4s ease;border: none;box-shadow: inset 0 0 0 2px #ccc;color: #ccc;background-color: #fff;}.scroll-top.is-active {opacity: 1;visibility: visible;transform: translateY(0);}.scroll-top .icon-tabler-arrow-up {position: absolute;stroke-width: 2px;stroke: #333;}.scroll-top svg path {fill: none;}.scroll-top svg.progress-circle path {stroke: #333;stroke-width: 4;transition: all .4s ease;}.scroll-top:hover {color: var(--ghost-accent-color);}.scroll-top:hover .progress-circle path, .scroll-top:hover .icon-tabler-arrow-up {stroke: var(--ghost-accent-color);}\n\t"
        }} />
        
        <nav className="bg-gray-900 p-4 mt-0 w-full">
          {/* Your navigation bar content goes here */}
        </nav>
        
        <div id="header" className="bg-white fixed w-full z-10 top-0 hidden animated" style={{ opacity: '.95' }}>
          {/* Your fixed header content goes here */}
        </div>
        
        <div className="text-center pt-16 md:pt-32">
          <p className="text-sm md:text-base text-green-500 font-bold">{product?.createdat} / {product?.category}</p>
          <h1 className="font-bold break-normal text-3xl md:text-5xl">Welcome to Ghostwind CSS</h1>
        </div>
        
        <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" style={{ backgroundImage: 'url("https://source.unsplash.com/collection/1118905/")', height: '75vh' }} />
        
        <div className="container max-w-5xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
            <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal" style={{ fontFamily: 'Georgia,serif' }}>
              {product && (
                <>
                  {Object.entries(product).map(([key, value]) => (
                    <div key={key} className="mb-4">
                      <span className="font-bold">{key}:</span> {value}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Welcome;
