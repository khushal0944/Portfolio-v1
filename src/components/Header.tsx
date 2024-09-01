"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { navItems } from './Items'

function Header() {
    const pathName = usePathname()
  return (
    <nav className='flex justify-between items-center py-12 '>
        <div id="left-section">
            <span className='cursorText px-2 font-extrabold text-xl poppins glow-cursor'>~{pathName}</span>
        </div>
        <div id="right-section" className='flex gap-x-2 items-center hide-nav'>
            {
                navItems && navItems.map((singleItem) => (
                    <Link href={singleItem.path} className='links-parent' key={singleItem.name}>
                        <div className='links white-link capitalize'>
                            {singleItem.name}
                        </div>
                    </Link>
                ))
            }
        </div>
        <div className='show-menu hidden text-2xl p-1'>
            <i className="ri-menu-3-fill"></i>
        </div>
    </nav>
  )
}

export default Header