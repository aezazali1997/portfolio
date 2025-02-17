import { createUseStyles } from 'react-jss'
export const styles = createUseStyles({
  projectsWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minHeight: '100vh',
    background: '#14121c',
    zIndex: 1,

  },
  wrapper: {
    width: '100%',
    color: '#fff',
    padding: '2rem 0',
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  projects: {
    fontSize: '5.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '1rem 0',
    color: '#fff',
    opacity: 0.04,
    position: 'absolute',
    top: 45,
    left: '35%',
    background: 'transparent',
  },
  description:{
    textAlign:'center',
    color:'#fff',
    marginTop:'2.1rem',
  }
})
