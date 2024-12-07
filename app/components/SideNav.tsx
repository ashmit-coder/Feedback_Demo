'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, FileText, ChevronRight, ChevronLeft } from 'lucide-react'

function SideNav() {
    const pathname = usePathname()
    const [isExpanded, setIsExpanded] = useState(false)

    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/'
        },
        {
            name: 'Feedback Form',
            icon: FileText,
            path: '/feedback'
        }
    ]

    return (
        <div className={`h-full bg-white dark:bg-gray-800 shadow-sm border-r transition-all duration-300 ${isExpanded ? 'w-64' : 'w-16'}`}>
            <div className='p-4'>
                <button 
                    onClick={() => setIsExpanded(!isExpanded)} 
                    className="flex items-center justify-center w-full"
                    type='button'
                >
                    <Image src={'/logo.svg'} alt='logo' width={40} height={50} />
                    {/* {isExpanded && (
                        <ChevronLeft className="ml-2" />
                    )} */}
                </button>
                {isExpanded && (
                    <div className='mt-10'>
                        {MenuList.map((menu, index) => (
                            <Link href={menu.path} key={index}>
                                <div className={`flex items-center gap-2 mb-2 p-3 rounded-lg cursor-pointer ${
                                    pathname === menu.path ? 'bg-blue-500 text-white' : 'hover:bg-blue-100 dark:hover:bg-gray-700'
                                }`}>
                                    <menu.icon size={20} aria-hidden='true' />
                                    <span>{menu.name}</span> 
                                </div>
                            </Link>              
                        ))}
                    </div>
                )}
            </div>
            {!isExpanded && (
                <button 
                    onClick={() => setIsExpanded(true)}
                    className="absolute top-20 -right-3 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md"
                    type='button'
                >
                    {/* <ChevronRight size={20} /> */}
                </button>
            )}
        </div>
    )
}

export default SideNav