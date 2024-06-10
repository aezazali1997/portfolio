import React from 'react'
import { styles } from './Skills.style'
import classNames from 'classnames'
import ProgressBar from '../ProgressBar/ProgressBar'

const skills = [
  { title: 'Nextjs 13', percentage: 85 },
  { title: 'React.js', percentage: 90 },
  { title: 'Node.js / NestJs', percentage: 70 },
  { title: 'GraphQL', percentage: 60 },
  { title: 'SQL/MongoDB', percentage: 60 },
]

const Skills = () => {
  const classes = styles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.headingSection}>
        <h1 className={classes.heading}>My Skills</h1>
        <span className={classes.subHeading}>What i know</span>
      </div>
      <div className={classes.skillsContainer}>
        <div className={classes.skillsSubSection}>
          <h1 className={classes.subSectionHeading}>
            My Creative Skills & Experiences.
          </h1>
          <p className={classNames(classes.fontWhite, classes.description)}>
            I have worked with different clients around the world. I have
            developed e-commerce websites, blogs, and landing pages. Some of my
            clients have been returning customers.
          </p>
          <a href="https://github.com/aezazali1997" className={classes.button}>
            Read More
          </a>
        </div>
        <div className={classes.skillsWrapper}>
          {skills.map((skill, index) => {
            return (
              <ProgressBar
                key={index}
                title={skill.title}
                percentage={skill.percentage}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
