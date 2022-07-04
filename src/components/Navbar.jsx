import React from 'react'
import { BeakerIcon } from '@heroicons/react/solid'

const Navbar = ({ brand }) => {
  return (
    <nav className='bg-gradient-to-r from-gray-900 via-blue-500 to-pink-500 text-white text-center p-5'>
      <div className='flex justify-center'>
        <BeakerIcon className="h-10 w-10 text-white mr-5"/>
        <a href='/' className='text-3xl font-semibold'>{brand}</a>
        <BeakerIcon className="h-10 w-10 text-white ml-5"/>
      </div>
    </nav>
  )
}

export default Navbar