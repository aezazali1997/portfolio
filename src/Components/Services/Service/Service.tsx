import classNames from 'classnames'
// @ts-nocheck
import React, { FC } from 'react'
import { styles } from './Service.style'

type Props = {
  icon: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Service: FC<Props> = ({ icon, title, description }) => {
  const classes = styles()

  return (
    <div className={classes.service}>
      <i className={classNames(`fa${icon}`, classes.icon)}></i>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </div>
  )
}

export default Service
