import React, { FC } from 'react'
import { styles } from './Return.style'
import { margins, colors } from '@components/AboutMe/AboutMe.style'
import classNames from 'classnames'
import { IExperience } from '@interfaces'

type Props = {
  experience: IExperience
}

const Return: FC<Props> = ({ experience }) => {
  const _classes = styles()
  const _colors = colors()
  const _margins = margins()

  return (
    <div className={_classes.container}>
      <span className={_colors.return}>return</span>
      <span className={_margins.marginLFTRT}>&#123;</span>
      <p>
        <span className={_colors.variable}>Company : </span>
        <span className={classNames(_margins.marginLFTRT, _colors.string)}>
          {experience.company}
        </span>
      </p>
      <p>
        <span className={_colors.variable}>Skills : </span>
        <span className={_margins.marginLFTRT}>
          [
          {experience.skills.map((skill: string, id: number) => {
            return (
              <span className={_colors.string} key={id}>
                {skill}
              </span>
            )
          })}
          ]
        </span>
      </p>
      <p>
        <span className={_colors.variable}>Time : </span>
        <span className={classNames(_margins.marginLFTRT, _colors.string)}>
          {experience.time}
        </span>
      </p>
    </div>
  )
}

export default Return
