import React from 'react'

const CourseDetails = () => {
  return (
    <div>
      <>
  <h3 className="mb-6 ml-3 text-2xl font-bold text-neutral-700 dark:text-neutral-300">
    Latest News
  </h3>
  <ol className="border-l-2 border-info-100">
    {/*First item*/}
    <li>
      <div className="flex-start md:flex">
        <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
          <div className="mb-4 flex justify-between">
            <a
              href="#!"
              className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
            >
              New Web Design
            </a>
            <a
              href="#!"
              className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
            >
              04 / 02 / 2022
            </a>
          </div>
          <p className="mb-6 text-neutral-700 dark:text-neutral-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            scelerisque diam non nisi semper, et elementum lorem ornare.
            Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales
            vehicula.
          </p>
          <button
            type="button"
            className="inline-block rounded bg-info px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
            data-te-ripple-init=""
            data-te-ripple-color="light"
          >
            Preview
          </button>
          <button
            type="button"
            className="inline-block rounded border-2 border-info px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init=""
          >
            See demo
          </button>
        </div>
      </div>
    </li>
    {/*Second item*/}
    <li>
      <div className="flex-start md:flex">
        <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
          <div className="mb-4 flex justify-between">
            <a
              href="#!"
              className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
            >
              21 000 Job Seekers
            </a>
            <a
              href="#!"
              className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
            >
              12 / 01 / 2022
            </a>
          </div>
          <p className="mb-6 text-neutral-700 dark:text-neutral-200">
            Libero expedita explicabo eius fugiat quia aspernatur autem
            laudantium error architecto recusandae natus sapiente sit nam eaque,
            consectetur porro molestiae ipsam an deleniti.
          </p>
          <button
            type="button"
            className="inline-block rounded bg-info px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
            data-te-ripple-init=""
            data-te-ripple-color="light"
          >
            Preview
          </button>
          <button
            type="button"
            className="inline-block rounded border-2 border-info px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init=""
          >
            See demo
          </button>
        </div>
      </div>
    </li>
    {/*Third item*/}
    <li>
      <div className="flex-start md:flex">
        <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
          <div className="mb-4 flex justify-between">
            <a
              href="#!"
              className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
            >
              Awesome Employers
            </a>
            <a
              href="#!"
              className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
            >
              21 / 12 / 2021
            </a>
          </div>
          <p className="mb-6 text-neutral-700 dark:text-neutral-200">
            Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
            natus! Eum corporis illum nihil officiis tempore. Excepturi illo
            natus libero sit doloremque, laborum molestias rerum pariatur quam
            ipsam necessitatibus incidunt, explicabo.
          </p>
          <button
            type="button"
            className="inline-block rounded bg-info px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
            data-te-ripple-init=""
            data-te-ripple-color="light"
          >
            Preview
          </button>
          <button
            type="button"
            className="inline-block rounded border-2 border-info px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init=""
          >
            See demo
          </button>
        </div>
      </div>
    </li>
  </ol>
</>
<section className="bg-white dark:bg-gray-900 antialiased">
  <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
        Schedule
      </h2>
      <div className="mt-4">
        <a
          href="#"
          title=""
          className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Learn more about our agenda
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
    <div className="overflow-x-auto max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
      <table className="min-w-full border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr>
            <th className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400">
              Time
            </th>
            <th className="text-lg font-semibold text-gray-900 dark:text-white">
              Event
            </th>
          </tr>
        </thead>
        <tbody>
          {/* تكرار البيانات هنا */}
        </tbody>
      </table>
    </div>
  </div>
</section>
<div className="bg-white rounded shadow-md max-w-xl mx-auto mt-4 p-4">
  <div className="text-2xl font-bold">Nutrition Facts</div>
  <table className="table w-full border border-black border-collapse">
    <tbody>
      <tr className="border-b border-black">
        <td className="py-2 font-medium border-r border-black">Serving Size</td>
        <td className="py-2 border-l border-black">1 cup (240g)</td>
      </tr>
      <tr>
        <td className="py-2 font-medium">Amount Per Serving</td>
        <td className="py-2" />
      </tr>
      <tr>
        <td className="py-2 pl-6 font-medium">Calories</td>
        <td className="py-2">200</td>
      </tr>
      <tr>
        <td className="py-2 pl-6 font-medium">Total Fat</td>
        <td className="py-2">10g</td>
      </tr>
      <tr>
        <td className="py-2 pl-10">Saturated Fat</td>
        <td className="py-2">2g</td>
      </tr>
      <tr>
        <td className="py-2 pl-10">Trans Fat</td>
        <td className="py-2">0g</td>
      </tr>
      <tr>
        <td className="py-2 pl-6 font-medium">Cholesterol</td>
        <td className="py-2">20mg</td>
      </tr>
      <tr>
        <td className="py-2 pl-6 font-medium">Sodium</td>
        <td className="py-2">300mg</td>
      </tr>
      <tr>
        <td className="py-2 pl-6 font-medium">Total Carbohydrates</td>
        <td className="py-2">20g</td>
      </tr>
      <tr>
        <td className="py-2 pl-10">Dietary Fiber</td>
        <td className="py-2">2g</td>
      </tr>
      <tr>
        <td className="py-2 pl-10">Sugars</td>
        <td className="py-2">4g</td>
      </tr>
      <tr>
        <td className="py-2 pl-6 font-medium">Protein</td>
        <td className="py-2">10g</td>
      </tr>
      <tr>
        <td className="py-2 pl-6 font-medium">Vitamin A</td>
        <td className="py-2">8%</td>
      </tr>
      <tr>
        <td className="py-2 pl-6 font-medium">Vitamin C</td>
        <td className="py-2">2%</td>
      </tr>
      <tr>
        <td className="py-2 pl-6 font-medium">Calcium</td>
        <td className="py-2">6%</td>
      </tr>
      <tr>
        <td className="py-2 pl-6 font-medium">Iron</td>
        <td className="py-2">4%</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  )
}

export default CourseDetails
