import { createUseStyles } from 'react-jss'
export const styles = createUseStyles({
  wrapper: {
    width: '100%',
    color: '#fff',
    background: 'linear-gradient(to right,#1b1627,#191426)',
    padding: '2rem 0',
    overflow: 'hidden',
    zIndex: 99,
    position: 'relative',
  },
  textContainer: {
    marginLeft: '4rem',
    position: 'relative',
  },
  web: {
    fontSize: 110,
    color: '#221d35',
    fontWeight: 900,
    position: 'absolute',
    right: -14,
    zIndex: 110,
  },
  work: {
    position: 'relative',
    fontWeight: 100,
    color: 'gray',

    '&::before': {
      content: '""',
      position: 'absolute',
      left: '-2.4rem',
      top: 0,
      zIndex: 10,
      width: 9,
      height: 9,
      borderRadius: ' 50%',
      border: '2px solid #5918df',
      backgroundColor: '#1b191e',
    },
  },
  getServiceContainer:{
    margin:"5rem 0",
    textAlign:"center",
    "& button":{
      cursor: 'none',
      outline: 'none',
      background: '#5918df',
      border: 'none',
      fontSize: 18,
      fontWeight: '500',
      color: '#eee',
      padding: '1rem 2rem',
      borderRadius: '20rem',
      '-webkit-box-shadow': '0px 11px 21px -4px rgb(89 22 223)',

    }
  },
  services:{
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    paddingInline:"2rem",
    marginTop:"9rem",
    gridRowGap:"4rem",
  },
  "@media (max-width:1021px)":{
    services:{
      gridTemplateColumns:'repeat(2,1fr)',
    }
  },
  "@media (max-width:666px)":{
    services:{
      gridTemplateColumns:'repeat(1,1fr)',
    }
  },
  projectCreated: {
    fontSize: '1.5rem',
    marginTop: '1rem',
    color: '#bbb',
    position:'relative',
    textTransform: 'capitalize',
    "&:after":{
      content:'"----------"',
      position:'absolute',
      top:30,
      left:50,
      fontSize:"1.5rem",
      color:"gray",
    }
  },
  webImage: {
    width: 350,
    height: 200,
  },
  projectTxt: {
    width: '60%',
    color: 'black',
    left: 0,
    top: 50,
    zIndex: 10,
    position: 'absolute',
    paddingBottom: 20,
    borderBottom: '3px solid #000',
  },
  number: {
    marginTop: '1rem',
    position: 'absolute',
    bottom: 0,
    left: 0,
    color: 'black',
  },

  '@media (min-width:968px)': {
    textContainer: {
      marginLeft: '30rem',
    },
    projectCreated: {
      fontSize: '2rem',
      marginTop: '1.5rem',
    },
    web: {
      fontSize: 250,
      color: '#221d35',
      fontWeight: 900,
    },
    number: {
      color: 'white',
    },
    projectTxt: {
      color: 'white',
      borderBottom: '3px solid #fff',
    },
  },
})
