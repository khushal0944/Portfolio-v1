import React from 'react'
import ProjectCard from './ProjectCard';
import { projectsData } from './Items';

function Projects({showNo}: {showNo?: number}) {
  return (
    <div>
        <h1 className='text-5xl poppins font-black'>Projects</h1>
        <p className='mt-4'>A list of projects I have been working on or built</p>
        <hr className='mt-5 max-[800px]:mb-5'/>
        <div className='grid m-10 mb-0 gap-10 max-[800px]:w-full max-[800px]:m-0 max-[800px]:gap-y-5 max-[800px]:grid-cols-1 max-[800px]:gap-0 grid-cols-2 '>
            {
                projectsData && projectsData.map((project, index) => {
                    if(showNo && showNo <= index) return
                    return <ProjectCard key={project.title} data={project}/>
                })
            }
        </div>
    </div>
  )
}

export default Projects