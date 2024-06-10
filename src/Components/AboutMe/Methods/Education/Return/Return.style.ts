import { createUseStyles } from 'react-jss'
export const styles = createUseStyles({
  capitalize: {
    textTransform: 'capitalize',
  },
  container: {
    height: 'max-height',
    position: 'relative',
    '&::after': {
      content: '"}"',
      position: 'relative',
      bottom: 0,
      right: -10,
    },
  },
})
