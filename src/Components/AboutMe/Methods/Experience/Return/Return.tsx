import React, { FC } from 'react'
import { styles } from './Return.style'
import { margins, colors } from '@components/AboutMe/AboutMe.style'
import classNames from 'classnames'
import { IExperience } from '@interfaces'

type Props = {
  experiences: IExperience[]
}

const Return: FC<Props> = ({ experiences }) => {
  const _classes = styles()
  const _colors = colors()
  const _margins = margins()

  return (
    <div className={_classes.container}>
      <span className={_colors.return}>return</span>
      <br />
      <span className={_margins.brac1}>&#91;</span> <br />
      {experiences.map(
        (experience: IExperience, id: number) => {
          return (
            <div className={_classes.brac2} key={id}>
              <span>&#123;</span>
              <br />
              <p>
                {' '}
                <span className={_colors.variable}>Company : </span>{' '}
                <span
                  className={classNames(_margins.marginLFTRT, _colors.string)}
                >
                  {' '}
                  {experience.company}{' '}
                </span>{' '}
              </p>{' '}
              <p>
                {' '}
                <span className={_colors.variable}>Skills : </span>{' '}
                <span className={_margins.marginLFTRT}>
                  {' '}
                  [{' '}
                  {experience.skills.map((skill: string, id: number) => {
                    return (
                      <span className={_colors.string} key={id}>
                        {' '}
                        {skill}{' '}
                      </span>
                    )
                  })}{' '}
                  ]{' '}
                </span>{' '}
              </p>{' '}
              <p>
                {' '}
                <span className={_colors.variable}>Time : </span>{' '}
                <span
                  className={classNames(_margins.marginLFTRT, _colors.string)}
                >
                  {' '}
                  {experience.time}{' '}
                </span>{' '}
                <br />
                <span>&#125; {id ===(experiences.length-1) || ','}</span>
              </p>
            </div>
          )
        },
        // <span className={_margins.marginLFTRT}>&#123;</span>
      )}
    </div>
  )
}

export default Return
