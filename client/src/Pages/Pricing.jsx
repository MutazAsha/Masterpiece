import React from 'react'
import { Link } from 'react-router-dom';
const Pricing = () => {
  return (
    <div>
       <>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);\n"
    }}
  />
  <div className="min-w-screen min-h-screen bg-white px-5 py-5">
  
    <div className="w-full mx-auto bg-grey-100  px-5 py-10 text-gray-600 mb-10">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-gray-800 text-6xl mb-6 font-bold item-center justify-center text-center">Pricing</h1>
        <h3 className="text-xl font-medium mb-10 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit repellat
          dignissimos laboriosam odit accusamus porro
        </h3>
      </div>
      <div className="max-w-4xl mx-auto md:flex">
        <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
          <div className="w-full flex-grow">
            <h2 className="text-center font-bold uppercase mb-4 text-gray-800">PERSONAL</h2>
            <h3 className="text-center font-bold text-4xl mb-5 text-gray-800">$5/mo</h3>
            <ul className="text-sm px-5 mb-8">
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg text-gray-800" /> Lorem ipsum
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg text-gray-800" /> Dolor sit amet
              </li>
            </ul>
          </div>
          <div className="w-full">
          <Link to="/payment">
                    <button className="font-bold bg-gray-800 text-white rounded-3xl mt-4 hover:bg-gray-600  px-10 py-2 transition-colors w-full">
                      Buy Now
                    </button>
                  </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3 md:max-w-none  bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-40 md:flex md:flex-col">
          <div className="w-full flex-grow">
            <h2 className="text-center font-bold uppercase mb-4 text-gray-800">TEAM</h2>
            <h3 className="text-center font-bold text-4xl md:text-5xl mb-5 text-gray-800">
              $15/mo
            </h3>
            <ul className="text-sm px-5 mb-8">
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg text-gray-800" /> Lorem ipsum
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg text-gray-800" /> Dolor sit amet
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg text-gray-800" /> Consectetur
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg text-gray-800" /> Adipisicing
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg text-gray-800" /> Elit repellat
              </li>
            </ul>
          </div>
          <div className="w-full">
          <Link to="/payment">
                    <button className="font-bold bg-gray-800 text-white rounded-3xl mt-4 hover:bg-gray-600  px-10 py-2 transition-colors w-full">
                      Buy Now
                    </button>
                  </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
          <div className="w-full flex-grow">
            <h2 className="text-center font-bold uppercase mb-4 text-gray-800">PRO</h2>
            <h3 className="text-center font-bold text-4xl mb-5 text-gray-800">$35/mo</h3>
            <ul className="text-sm px-5 mb-8">
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg text-gray-800" /> Lorem ipsum
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg text-gray-800" /> Dolor sit amet
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg text-gray-800" /> Consectetur
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg text-gray-800" /> Adipisicing
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg text-gray-800" /> Much more...
              </li>
            </ul>
          </div>
          <div className="w-full">
          <Link to="/payment">
                    <button className="font-bold bg-gray-800 text-white rounded-3xl mt-4 hover:bg-gray-600  px-10 py-2 transition-colors w-full">
                      Buy Now
                    </button>
                  </Link>
          </div>
        </div>
      </div>
    </div>
   
   
  </div>
  {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
  <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
      <a
        title="Buy me a beer"
        href="https://www.buymeacoffee.com/scottwindon"
        target="_blank"
        className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
      >
        <img
          className="object-cover object-center w-full h-full rounded-full"
          src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
        />
      </a>
    </div>
  </div>
</>

    </div>
  )
}

export default Pricing
