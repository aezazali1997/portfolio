import React from 'react'
import { styles } from './Projects.style'
const Projects = () => {
  const classes = styles()
  return (
    <div className={classes.projectsWrapper}>
      <div className={classes.wrapper}>My Projects</div>
      <span className={classes.projects}>Projects</span>
      <p className={classes.description}>
        Explore my innovative projects, where creativity meets technology to
        build a better future
      </p>
    </div>
  )
}

export default Projects
