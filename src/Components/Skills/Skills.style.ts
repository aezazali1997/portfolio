import { createUseStyles } from 'react-jss'
export const styles = createUseStyles({
  wrapper :{
    background: '#0F0D17',
    padding:'4rem',
    height:'auto',
  },
  headingSection:{
    textAlign:'center',
    paddingBlock:'2rem',
    color:'#fefefe'
  },
  description:{
    width:400,
    marginInline:'auto',
    fontSize:20,
  },
  skillsSubSection:{
    display:'flex',
    flexDirection:'column',
    width:'60%'
  },
  subSectionHeading:{
    textAlign:'center',
    color:'#ffffff',
    marginBottom:'2rem'
  },
  skillsContainer:{
    display:'flex',
    justifyContent:'center',
    textAlign:'center',
    padding:'2rem',
    marginTop:'2rem',
  },
  heading:{
    textAlign:'center',
    fontSize:36,
    marginBottom:'1rem',
  },
  subHeading:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'normal',
    position:'relative',
    "&:before":{
      content:'""',
      top:0,
      bottom:10,
      left:-33,
      position:'absolute',
      borderBottom:'4px solid #714de1',
      width:30,

    },
    "&:after":{
      content:'""',
      top:0,
      bottom:10,
      right:-33,
      position:'absolute',
      borderBottom:'4px solid #714de1',
      width:30,
    },
  },
  button:{
    borderRadius:'.4rem',
    background:'#714de1',
    fontSize:'1rem',
    marginInline:"auto",
    paddingBlock:'.9rem',
    paddingInline:'1.5rem',
    width:140,
    fontWeight:'bold',
    border:'1px solid #714de1',
    color:"#ffffff",
    marginTop:"3rem",
    textDecoration:'none',
    transition:'all .3s ease-in-out',
    "&:hover":{
      background:'none',
      border:'1px solid #714de1',
      color:'#ffffff',
    }
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
  htmlProgressBar: {
    width: '60%',
    backgroundColor: '#714de1'
  },
  skillsWrapper : {
    display:'flex',
    flexDirection:'column',
    width:'30%'
  },
  "@media (max-width:768px)":{
    skillsContainer:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      textAlign:'center',
      padding:'2rem',
      marginTop:'2rem',
    },
    skillsSubSection:{
      width:'100%'
    },
    skillsWrapper :{
      width:'100%',
      marginTop:'2rem'
    },
    description:{
      width:'auto'
    }
  }
})
