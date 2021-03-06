import { createUseStyles } from 'react-jss'
export const styles = createUseStyles({
  class: {
    height: 'max-content',
    position: 'relative',
    '&::after': {
      content: '"}"',
      position: 'relative',
      bottom: 0,
      left: 0,
    },
  },
  name: {
    height: 'max-content',
    position: 'relative',
    '&::before': {
      content: '"{"',
      right: -10,
      position: 'absolute',
      top: -5,
    },
  },
})
