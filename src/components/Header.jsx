import React from 'react'

function Header() {
  return (
    <div className='fixed'>
      <nav className="md:flex">
        <ul className="text-white">
          <li className="">
            <a href={`/`} className="">
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
  )
}

export default Header
