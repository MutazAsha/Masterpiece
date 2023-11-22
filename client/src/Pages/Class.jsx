import React from 'react';

const Class = () => {
  return (
    <div>
      <>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
        <section className="relative py-16 bg-blueGray-50">
          <div className="w-full mb-12 px-4">
            <div
              className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-[#27374D] text-white"
            >
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                    <h3 className="font-semibold text-lg text-white">Card Tables</h3>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto ">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                        Project
                      </th>
                      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                      Members
                      </th>
                      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                        Trainer
                      </th>
                      <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <img
                          src="https://demos.creative-tim.com/notus-js/assets/img/bootstrap.jpg"
                          className="h-12 w-12 bg-white rounded-full border"
                          alt="..."
                        />
                        <span className="ml-3 font-bold text-white"> Argon Design System </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        $2,500 USD
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex">
                          
                          <img
                            src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png"
                            alt="..."
                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                          />
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                        <a
                          href="#pablo"
                          className="text-blueGray-500 block py-1 px-3"
                          onclick="openDropdown(event,'table-dark-1-dropdown')"
                        >
                          <i className="fas fa-ellipsis-v" />
                        </a>
                        <div
                          className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                          id="table-dark-1-dropdown"
                        >
                          <a
                            href="#pablo"
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                          >
                            Action
                          </a>
                          <a
                            href="#pablo"
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                          >
                            Another action
                          </a>
                          <a
                            href="#pablo"
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                          >
                            Something else here
                          </a>
                          <div className="h-0 my-2 border border-solid border-blueGray-100" />
                          <a
                            href="#pablo"
                            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                          >
                            Separated link
                          </a>
                        </div>
                      </td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
                <video width="640" height="360" controls/>
        <source
          src="https://www.example.com/your-workout-video.mp4"
          type="video/mp4"
        />
              </div>
            </div>
          </div>
          <footer className="relative pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center"></div>
              </div>
            </div>
          </footer>
        </section>
      </>
    </div>
  );
};

export default Class;
