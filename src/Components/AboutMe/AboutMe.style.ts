import { createUseStyles } from 'react-jss'
export const styles = createUseStyles({
  container: {
    background: '#14121c',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '1.5rem',
    position: 'relative',
  },
  wrapper: {
    marginLeft: '30rem',
    width: '100%',
  },
  title: {
    color: 'gray',
    fontSize: 34,
    fontWeight: 700,
    marginBottom: '1rem',
    textAlign: 'center',
    '@media (max-width:768px)': {
      fontSize: 18,
    },
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '-2.4rem',
      top: 5,
      zIndex: 10,
      width: 9,
      height: 9,
      borderRadius: ' 50%',
      border: '2px solid #5918df',
      backgroundColor: '#1b191e',
    },
  },
  codeWrap: {
    '& div': {
      width: '100%',
      color: 'rgba(255,255,255,.8)',
      fontSize: 18,
      lineHeight: '1.8rem',
      position: 'relative',
    },
  },
  '@media (max-width:768px)': {
    wrapper: {
      marginLeft: '4rem',
    },
  },
})
export const colors = createUseStyles({
  specialKeyword: {
    color: '#3e85c9',
  },
  className: {
    color: '#25cca7 ',
  },
  comment: {
    color: '#41A33C !important',
  },
  cons: {
    color: '#b6c480',
  },
  variable: {
    color: '#72c6ed',
  },
  string: {
    color: '#e6976a',
  },
  method: {
    color: '#85915c',
  },
  array: {
    color: '#61b2ff',
  },
  return: {
    color: '#ed7ba6',
  },
})
export const margins = createUseStyles({
  noMargin: {
    margin: '0 !important',
  },
  marTop: {
    marginTop: '1rem',
  },
  brac1: {
    marginLeft: '1rem !important',
  },
  brac2: {
    marginLeft: '2rem !important',
  },
  marginRight: {
    marginRight: '.6rem',
  },
  marginLeft: {
    marginLeft: '.7rem',
  },
  marginLFTRT: {
    margin: '0 .6rem',
  },
})
