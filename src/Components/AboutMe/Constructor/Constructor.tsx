/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck
import React, { FC, useContext } from 'react'
import { styles } from './Constructor.style'
import AppContext from '@components/AboutMe/ContextApi/ContextApi'
import { colors } from '@components/AboutMe/AboutMe.style'
const Constructor: FC = () => {
  const _classes = styles()
  const _colors = colors()

  const data = useContext(AppContext)
  const Class = data.class
  const arrKeys = Object.keys(Class.const.variables)
  const arrValues = Object.values(Class.const.variables)

  return (
    <div className={_classes.const}>
      <span className={_colors.cons}>{Class.const.name}</span>
      <span> () &#123;</span>
      {arrKeys.map((value, inx) => {
        //should be in another comp
        return (
          <p key={inx}>
            <span className={_colors.specialKeyword}>this.</span>
            <span className={_colors.variable}>{value}</span>=
            <span className={_colors.string}>"{arrValues[inx]}"</span>
          </p>
        )
      })}
    </div>
  )
}

export default Constructor
