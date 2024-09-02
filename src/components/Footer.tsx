"use client"
import React, { useEffect, useState } from 'react'
import { connectionItems, daysOfWeek, navItems } from './Items'
import Link from 'next/link'

function Footer() {
    const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentDate(new Date());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);
  return (
    <>
    <div className='w-3/4 max-[800px]:w-full max-[800px]:mt-6 text-center mx-auto' >
        <div className='grid grid-cols-3 mx-auto'>
            <div id="navitems" className=''>
                <span className='my-1 cursorText'>Index</span>
                {navItems.map((singleItem) => (
                    <Link href={singleItem.path} key={singleItem.name}>
                    <div className='capitalize my-1 text-[#a3a3a3] duration-150 hover:text-white'>
                        {singleItem.name}
                    </div>
                </Link>
                ))}
            </div>
            <div>
                <h1 className='mb-1 cursorText'>See my work</h1>
                <Link href={"mailto:khushalsuthar0944@gmail.com"}><div className='text-[#a3a3a3] my-1 duration-150 hover:text-white'>Hire me</div></Link>
                <Link href="https://drive.google.com/file/d/1Fpf3LJ0TR2xspNO52RmDcqqZD1t5uAK2/view?usp=sharing" target='_blank'><div className='text-[#a3a3a3] my-1 duration-150 hover:text-white'>Resume</div></Link>
            </div>
            <div>
                <div className='cursorText mb-1'>Connect</div>
                {
                    connectionItems.map((singleItem) => (
                        <Link href={singleItem.link} key={singleItem.name}><div className='capitalize text-[#a3a3a3] my-1 duration-150 hover:text-white'>{singleItem.name}</div></Link>
                    ))
                }
            </div>
        </div>
    <h1 className='text-center mt-3 mb-2 poppins'>Khushal Kumar &copy; {currentDate.getFullYear()} • Have a good {daysOfWeek[currentDate.getDay()]}! • <Link href={"mailto:khushalsuthar0944@gmail.com"} className='links white-link poppins'>Contact</Link></h1>
    </div>
    </>
  )
}

export default Footer