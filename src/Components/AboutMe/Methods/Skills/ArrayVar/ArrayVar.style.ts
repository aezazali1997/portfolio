import { createUseStyles } from 'react-jss'
export const styles = createUseStyles({
  name: {
    padding: '1rem 0',
    position: 'relative',
    '&:before': {
      content: '"]"',
      position: 'relative',
      bottom: -50,
      right: -5,
    },
  },
})
