import Projects from '@/components/Projects'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
	title: "Projects | Khushal's Portfolio",
	description: "Projects of Khushal Kumar",
};

function page() {
  return (
    <>
        <Projects/>
        <div className="line">~~~</div>
    </>
  )
}

export default page