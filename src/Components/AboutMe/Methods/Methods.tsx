import React, { FC } from 'react'
import { Education, Experience, Skills } from '@components/AboutMe/Methods'

const Methods: FC = () => {
  return (
    <div>
      <Skills />
      <Experience />
      <Education />
    </div>
  )
}

export default Methods
