import React from 'react'
import { styles } from './Loading.style'
const Loading = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <h1>Loading
        <span></span>
        <span></span>
        <span></span>
      </h1>
    </div>
  )
}

export default Loading
