'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeSwitch from './Theme'
import Image from 'next/image'

const Navbar = () => {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Feedback Form', path: '/feedback' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="fixed top-2  left-4 right-4  bg-white bg-opacity-70 dark:bg-gray-700 shadow-md z-50 transition-opacity duration-300 ease-in-out rounded-full mx-8 my-2">
      <div className="max-w-8xl mx-auto px-10 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className='flex-shrink-0 mr-8'>
                <Image src = "/logo.jpg" alt = "logo" width={40} height={40}/>
            </div>   
            <div className='flex items-baseline space-x-4'>           
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`${
                  pathname === item.path
                    ? 'bg-blue-600 text-white'
                    : 'text-black dark:text-gray-300 hover:bg-blue-500 hover:text-white'
                } px-3 py-3 rounded-full text-lg font-medium`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar