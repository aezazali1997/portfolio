// @ts-nocheck
import React, { FC, useContext } from 'react'
import AppContext from '@components/AboutMe/ContextApi/ContextApi'
import { styles } from './Class.style'
import { colors, margins } from '@components/AboutMe/AboutMe.style'
import MultLinecomment from '../Multicomment/MultLinecomment'
import Constructor from '../Constructor/Constructor'
import Methods from '../Methods/Methods'
import ClassNames from 'classnames'

const Class: FC = () => {
  const _classes = styles()
  const _colors = colors()
  const _margins = margins()
  const data = useContext(AppContext)
  return (
    <div className={_classes.class}>
      <span
        className={ClassNames(_colors.specialKeyword, _margins.marginRight)}
      >
        {Object.keys(data)[0]}
      </span>
      <span className={_classes.name}>{data.class.name}</span>
      <MultLinecomment />
      <Constructor />
      <Methods />
    </div>
  )
}

export default Class
