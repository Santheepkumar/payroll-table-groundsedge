import React from "react";
import PayrollTable from "./PayrollTable";
import tableData from "./tableData.json";

function PayrollScreen() {
  const [filterTab, setFilterTab] = React.useState(false);
  return (
    <div class='flex flex-col h-screen'>
      <main
        className=' flex-1 relative z-0 overflow-y-auto focus:outline-none mx-20 mt-6'
        tabIndex='0'>
        <div className='border-b border-gray-200 px-4 py-6 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'>
          <div className='flex-1 min-w-0'>
            <h1 className='text-lg font-medium leading-6 text-gray-900 sm:truncate'>
              Gilbane Building Company
            </h1>
          </div>
          <div className='mt-4 flex sm:mt-0 sm:ml-4'>Logo</div>
        </div>
        <div className='mt-10 text-3xl font-semibold'>
          <h1 className='ml-8'>Payroll Table</h1>
        </div>
        <div className='ml-8 mt-4 flex justify-start'>
          {/* filter */}
          <span className='mt-2'>
            <button
              type='button'
              className='inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={() => setFilterTab(!filterTab)}>
              <span className='mr-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  enableBackground='new 0 0 24 24'
                  height='24'
                  fill='gray'
                  viewBox='0 0 24 24'
                  width='24'>
                  <g>
                    <path d='M0,0h24 M24,24H0' fill='none' />
                    <path d='M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z' />
                    <path d='M0,0h24v24H0V0z' fill='none' />
                  </g>
                </svg>
              </span>
              Filter
            </button>
          </span>
          {/* Search */}
          <span className='ml-8'>
            <input
              type='search'
              className='bg-purple-white shadow rounded border-0 p-3 focus:outline-none'
              placeholder='Search by Name or Employee ID'
            />
          </span>
        </div>
        {/* Filter Tab */}
        {filterTab ? (
          <>
            <div className='mt-6 ml-8 p-4 border border-gray-300 shadow-xl rounded-lg'>
              <div className=' flex justify-between px-6'>
                <div>
                  <select
                    type='text'
                    className='form-select pr-20 py-2 bg-white focus:outline-none rounded-full border border-gray-400 text-gray-800 font-normal font-sans pl-2'>
                    <option value=''>Payroll Channel</option>
                  </select>
                </div>
                <div>
                  <select
                    type='text'
                    className='form-select pr-20 py-2 bg-white focus:outline-none rounded-full border border-gray-400 text-gray-800 font-normal font-sans pl-2'>
                    <option value=''>Account Type</option>
                  </select>
                </div>
                <div>
                  <select
                    type='text'
                    className='form-select pr-20 py-2 bg-white focus:outline-none rounded-full border border-gray-400 text-gray-800 font-normal font-sans pl-2'>
                    <option value=''>Establishment ID</option>
                  </select>
                </div>
                <div>
                  <select
                    type='text'
                    className='form-select pr-20 py-2 bg-white focus:outline-none rounded-full border border-gray-400 text-gray-800 font-normal font-sans pl-2'>
                    <option value=''>Bank Name</option>
                  </select>
                </div>
              </div>
              <div className='flex justify-end mt-4 mr-2 text-gray-700 px-6'>
                Select All Filters
              </div>
            </div>
          </>
        ) : null}
        <PayrollTable tableData={tableData} />
        {/* <div className='p-20 border border-gray-500 absolute'>hello</div> */}
      </main>
      <footer className='py-5 border border-gray-300 mx-20 rounded-lg'>
        <div className='flex justify-between px-8'>
          <div>
            <div className='text-gray-600'>Payroll Amount</div>
            <div className='text-gray-800'>AED 5,000 for 2 employees</div>
          </div>
          <div>
            <button
              type='button'
              className='inline-flex items-center px-16 py-2 border border-gray-400 shadow-sm text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              Upload Excel Or Direct SIF
            </button>
            <button
              type='button'
              className='ml-2 inline-flex items-center px-8 py-2 border border-gray-400 shadow-sm text-base font-medium rounded-full text-gray-700 bg-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              Next
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PayrollScreen;
