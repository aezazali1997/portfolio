import { createUseStyles } from 'react-jss'
export const styles = createUseStyles({
  wrapper: {
    width: '100%',
    color: '#fff',
    padding: '2rem 0',
    overflow: 'hidden',
    background: '#14121c',
  },
  heading:{
    textAlign:'center',
    marginBottom:'2rgitem'
  },
  projects:{
    display:'grid',
    width:'80%',
    marginLeft:'25%',
    gridTemplateColumns:'285px 730px',
    gap:'1rem',
    "& > div":{
      border:'1px solid red',
      padding: '1rem',
    }
  },
  tile:{
    border: "1px solid #000",
    padding: 20,
    margin: 5,
    textAlign: 'center',
    width:'auto',
    height:285,
  },

  tile1x:{
    flex: 1,
  },

  tile2x:{
    flex: 2,
  }
})
