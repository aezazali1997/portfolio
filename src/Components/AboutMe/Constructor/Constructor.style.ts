import { createUseStyles } from 'react-jss'
export const styles = createUseStyles({
  const: {
    height: 'max-content',
    position: 'relative',
    '&::after': {
      content: '"}"',
      position: 'relative',
      bottom: 0,
      left: 0,
    },
  },
})
