// @ts-nocheck
import React, { useContext } from 'react'
import AppContext from '@components/AboutMe/ContextApi/ContextApi'
import { styles } from './Experience.style'
import { colors, margins } from '@components/AboutMe/AboutMe.style'
import Return from './Return/Return'
import classNames from 'classnames'
const Experience = () => {
  const _colors = colors()
  const _classes = styles()
  const _margins = margins()

  const data = useContext(AppContext)
  const method = data.class.method2
  return (
    <div className={_classes.container}>
      <span className={_colors.variable}>const</span>
      <span className={classNames(_colors.method, _margins.marginLFTRT)}>
        {method.name}
      </span>
      <span>
        = ()
        <span className={_colors.specialKeyword}> =&gt; </span>
        &#123;
      </span>
      <Return experience={method.exp} />
    </div>
  )
}

export default Experience
