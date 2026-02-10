import React from 'react'

function Navbar() {
  return (
    <nav className='navbar flex justify-evenly p-10 bg-amber-50'>
        <div className='log'>Movies</div>
        <div className='search-box'>Search</div>
        <ul className='flex gap-20'>
            <li>Home</li>
            <li>Latest</li>
            <li>Popular</li>
            <li>Categories</li>
            <li>Favourites</li>
        </ul>
    </nav>
  )
}

export default Navbar