// @ts-nocheck
import React, { FC, useContext } from 'react'
import AppContext from '../ContextApi/ContextApi'
import { styles } from './MultLinecomment.style'
import { margins, colors } from '@components/AboutMe/AboutMe.style'
import classNames from 'classnames'
const MultLinecomment: FC = () => {
  const _classes = styles()
  const _margins = margins()
  const _colors = colors()
  const data = useContext(AppContext)
  return (
    <div className={classNames(_classes.container, _colors.comment)}>
      <span className={classNames(_margins.marginLeft, _colors.comment)}>
        {data.class.comment}
      </span>
    </div>
  )
}

export default MultLinecomment
