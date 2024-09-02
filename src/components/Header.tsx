"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { navItems } from './Items'

function Header() {
    const pathName = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    function closeMenu() {
        setIsMenuVisible(false)
        setTimeout(() => setIsMenuOpen(false), 200)
    }

    function handleMenuButton() {
        if (isMenuOpen) {
            closeMenu()
        } else {
            setIsMenuOpen(true)
            setIsMenuVisible(true)
        }
    }

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
        <button onClick={handleMenuButton} className='relative z-10 h-10 w-10 show-menu rounded-full bg-gray-800 hidden text-2xl p-1 focus:bg-purple-600 duration-100'>
        <i className={`ri-menu-3-fill absolute inset-0 flex items-center justify-center transition-all duration-100 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}></i>
        <i className={`ri-close-fill absolute inset-0 flex items-center justify-center transition-all duration-100 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}></i>
            {
                isMenuOpen && <div className = {`w-40 top-12 right-0 flex flex-col gap-y-2 p-3 shadow-lg justify-center items-center -z-10 absolute bg-zinc-800 duration-300 ${isMenuVisible ? 'animate-menu' : 'animate-menu-close'}`} >
                {
                navItems && navItems.map((singleItem) => (
                    <Link href={singleItem.path} className='w-full border-b-2 border-gray-600' key={singleItem.name}>
                        <div ref={menuRef} className='capitalize hover:text-white hover:bg-[#1c1c1c] rounded-lg text-gray-300 text-base'>
                            {singleItem.name}
                        </div>
                    </Link>
                ))
            }
            </div>}
        </button>
    </nav>
  )
}

export default Header