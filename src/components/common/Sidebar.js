import React, { Fragment, useState } from "react";

function Sidebar() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <div className='h-screen flex overflow-hidden bg-white'>
        <div className='hidden lg:flex lg:flex-shrink-0'>
          <div className='flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100'>
            <div className='h-0 flex-1 flex flex-col overflow-y-auto'>
              <div className='px-3 mt-6 relative inline-block text-left'>
                <div>
                  <button
                    type='button'
                    className='group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500'
                    id='options-menu'
                    aria-haspopup='true'
                    aria-expanded='true'>
                    <span className='flex w-full justify-between items-center'>
                      <span className='flex min-w-0 items-center justify-between space-x-3'>
                        <img
                          className='w-10 h-10 bg-gray-300 rounded-full flex-shrink-0'
                          src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'
                          alt=''
                        />
                        <span className='flex-1 min-w-0'>
                          <span className='text-gray-900 text-sm font-medium truncate'>
                            Uzair Adil
                          </span>
                        </span>
                      </span>
                    </span>
                  </button>
                </div>
              </div>

              <nav className='px-3 mt-6'>
                <div className='space-y-1'>
                  <a
                    href='www.hello.com'
                    className='group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-900 bg-gray-200'>
                    <svg
                      className='mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                      />
                    </svg>
                    Dashboard
                  </a>

                  <li
                    onClick={() => setToggle(!toggle)}
                    className='group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                    <svg
                      className='mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 10h16M4 14h16M4 18h16'
                      />
                    </svg>
                    Payroll
                    <span className=''>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        height='24'
                        viewBox='0 0 24 24'
                        width='24'>
                        <path d='M0 0h24v24H0V0z' fill='none' />
                        <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
                      </svg>
                    </span>
                  </li>

                  {toggle ? (
                    <Fragment>
                      {" "}
                      <a
                        href='www.hello.com'
                        className='group flex items-center px-2 py-2 text-sm font-normal rounded-md text-gray-900 ml-10'>
                        Run Payroll
                      </a>
                      <a
                        href='www.hello.com'
                        className='group flex items-center px-2 py-2 text-sm font-light rounded-md text-gray-900 ml-10'>
                        Payroll Status
                      </a>
                      <a
                        href='www.hello.com'
                        className='group flex items-center px-2 py-2 text-sm font-light rounded-md text-gray-900 ml-10'>
                        Proff of Transfer Funds
                      </a>
                      <a
                        href='www.hello.com'
                        className='group flex items-center px-2 py-2 text-sm font-light rounded-md text-gray-900 ml-10'>
                        Approve Requests
                      </a>
                      <a
                        href='www.hello.com'
                        className='group flex items-center px-2 py-2 text-sm font-light rounded-md text-gray-900 ml-10'>
                        Payroll Timing
                      </a>
                      <a
                        href='www.hello.com'
                        className='group flex items-center px-2 py-2 text-sm font-light rounded-md text-gray-900 ml-10'>
                        Our Bank Details
                      </a>
                      <a
                        href='www.hello.com'
                        className='group flex items-center px-2 py-2 text-sm font-light rounded-md text-gray-900 ml-10'>
                        Useful Files
                      </a>
                    </Fragment>
                  ) : null}
                  <li
                    onClick={() => console.log("jkljqdls")}
                    className='group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                    <svg
                      className='mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 10h16M4 14h16M4 18h16'
                      />
                    </svg>
                    Employees
                    <span className=''>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        height='24'
                        viewBox='0 0 24 24'
                        width='24'>
                        <path d='M0 0h24v24H0V0z' fill='none' />
                        <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
                      </svg>
                    </span>
                  </li>

                  <li
                    onClick={() => console.log("jkljqdls")}
                    className='group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                    <svg
                      className='mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 10h16M4 14h16M4 18h16'
                      />
                    </svg>
                    Team Permissions
                    <span className=''>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        height='24'
                        viewBox='0 0 24 24'
                        width='24'>
                        <path d='M0 0h24v24H0V0z' fill='none' />
                        <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
                      </svg>
                    </span>
                  </li>
                  <li
                    onClick={() => console.log("jkljqdls")}
                    className='group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                    <svg
                      className='mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 10h16M4 14h16M4 18h16'
                      />
                    </svg>
                    Company
                    <span className=''>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        height='24'
                        viewBox='0 0 24 24'
                        width='24'>
                        <path d='M0 0h24v24H0V0z' fill='none' />
                        <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
                      </svg>
                    </span>
                  </li>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-0 flex-1 overflow-hidden'>
          <div className='relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden'>
            <button className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden'>
              <span className='sr-only'>Open sidebar</span>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </button>
            <div className='flex-1 flex justify-between px-4 sm:px-6 lg:px-8'>
              <div className='flex-1 flex'>
                <form
                  className='w-full flex md:ml-0'
                  action='www.hello.com'
                  method='GET'>
                  <label htmlFor='search_field' className='sr-only'>
                    Search
                  </label>
                  <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                    <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                      <svg
                        className='h-5 w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'>
                        <path
                          fillRule='evenodd'
                          d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <input
                      id='search_field'
                      className='block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm'
                      placeholder='Search'
                      type='search'
                    />
                  </div>
                </form>
              </div>
              <div className='flex items-center'>
                <div className='ml-3 relative'>
                  <div>
                    <button
                      className='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
                      id='user-menu'
                      aria-haspopup='true'>
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </button>
                  </div>

                  <div
                    className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='user-menu'>
                    <div className='py-1' role='none'>
                      <a
                        href='www.hello.com'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        role='menuitem'>
                        View profile
                      </a>
                      <a
                        href='www.hello.com'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        role='menuitem'>
                        Settings
                      </a>
                      <a
                        href='www.hello.com'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        role='menuitem'>
                        Notifications
                      </a>
                    </div>
                    <div className='py-1' role='none'>
                      <a
                        href='www.hello.com'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        role='menuitem'>
                        Get desktop app
                      </a>
                      <a
                        href='www.hello.com'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        role='menuitem'>
                        Support
                      </a>
                    </div>
                    <div className='py-1' role='none'>
                      <a
                        href='www.hello.com'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        role='menuitem'>
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
