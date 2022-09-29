import { createUseStyles } from 'react-jss'
export const styles = createUseStyles({
  scrollhostContainer: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
  },
  scrollBar: {
    width: 10,
    height: '226.5rem',
    right: 0,
    top: 2,
    position: 'absolute',
    borderRadius: 10,
    bottom: 0,
    backgroundColor: '#87868b',
    zIndex: 100,
  },
})
