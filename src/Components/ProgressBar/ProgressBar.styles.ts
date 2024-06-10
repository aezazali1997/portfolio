
import { createUseStyles } from 'react-jss'
export const styles = createUseStyles({

  wrapper : {
    width:'100%'
  },
  fontWhite:{
    color:'#ffffff'
  },
  skillProgressBar: {
    marginBottom: '15px',
    textAlign:'left'
  },
  skillInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px'
  },
  progressBarWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  progressBarBackground: {
    width: '100px',
    backgroundColor: '#ccc',
    height: '20px',
    borderRadius: '4px'
  },
  progressBar: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  progressBarNumber:{
    color:'#fefefe',
    fontSize:20,
    marginLeft:10
  },
})
