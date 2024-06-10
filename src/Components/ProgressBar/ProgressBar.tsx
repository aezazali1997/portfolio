import React from 'react'
import { styles } from './ProgressBar.styles'

type Props = {
  title: string;
  percentage: number;
}

const ProgressBar: React.FC<Props> = ({ title, percentage }) => {
  const classes = styles()

  const progressBarStyles = {
    width: `${percentage}%`,
    backgroundColor: '#714de1',
    height: '5px',
    borderRadius: '4px',
  }
  const progressBarStylesGrayed = {
    width: `${100 - percentage}%`,
    backgroundColor: '#FEFEFE',
    height: '5px',
    borderRadius: '4px',
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.skillProgressBar}>
        <h2 className={classes.fontWhite}>{title}</h2>
        <div className={classes.progressBar}>
          <div style={progressBarStyles}></div>
          <div style={progressBarStylesGrayed}></div>
          <span className={classes.progressBarNumber}>{percentage}%</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
