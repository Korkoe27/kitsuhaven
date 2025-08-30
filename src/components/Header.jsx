import React from 'react'

function Header() {
  return (
    <header className='md:p-6 z-50 bg-gray-900  w-full lg:p-10 fixed'>
      <div className="container mx-auto">
      <nav className="hidden  md:flex">
        <ul className="text-white md:flex gap-10">
          <li className="">
            <a href={`/home`} className="">
              Home
            </a>
          </li>
          <li className="">
            <a href={`/`} className="">
              TV Series
            </a>
          </li>
          <li className="">
            <a href={`/`} className="">
              OVAs
            </a>
          </li>
          <li className="">
            <a href={`/`} className="">
              ONAs
            </a>
          </li>
          <li className="">
            <a href={`/`} className="">
              Specials
            </a>
          </li>
        </ul>
      </nav>

      </div>
    </header>
  )
}

export default Header
