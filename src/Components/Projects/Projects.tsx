// @ts-nocheck
import React from 'react'
import ProjectCard from './ProjectCard'
import { styles } from './Projects.style'

const Projects = () => {
  const classes = styles()

  return (
    <div className="bg-[#14121c] min-h-[100vh] flex justify-center">
      <div
        className=" flex justify-center"
        style={{ flexDirection: 'column', overflow: 'hidden' }}
      >
        <h3 className="w-full text-center text-white"> Projects</h3>

        <div
          className="flex items-center justify-center"
          style={{ flexWrap: 'wrap', columnGap: '50px' }}
        >
          <ProjectCard />

          <ProjectCard />

          <ProjectCard />

          <ProjectCard />

          <ProjectCard />
        </div>
      </div>
    </div>
  )
}

export default Projects
