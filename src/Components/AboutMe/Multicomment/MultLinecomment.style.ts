import { createUseStyles } from 'react-jss'
export const styles = createUseStyles({
  container: {
    position: 'relative',
    '&:before': {
      position: 'relative',
      content: '"//"',
      top: 0,
      left: 0,
    },
  },
})
