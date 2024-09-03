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
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        audioRef.current = new Audio('./menu-sound.mp3')
        audioRef.current.load()

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
        playSound()
        if (isMenuOpen) {
            closeMenu()
        } else {
            setIsMenuOpen(true)
            setIsMenuVisible(true)
        }
    }

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0
            audioRef.current.volume = 0.7
            audioRef.current.play()
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
        <i className={`ri-menu-3-fill menu-icon ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}></i>
        <i className={`ri-close-fill menu-icon ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}></i>
            {
                isMenuOpen && <div className = {`w-44 top-12 right-0 py-1 flex flex-col shadow-lg overflow-hidden justify-center -z-10 absolute bg-[#27272A] duration-300 ${isMenuVisible ? 'animate-menu' : 'animate-menu-close'}`} >
                {
                navItems && navItems.map((singleItem) => (
                    <Link href={singleItem.path} className='flex items-center gap-x-2 px-3 py-2 hover:bg-[#404045]' key={singleItem.name}>
                        <i className={`${singleItem.icon} text-gray-300 text-xl`}></i>
                        <div ref={menuRef} className='capitalize text-gray-300 text-base'>
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