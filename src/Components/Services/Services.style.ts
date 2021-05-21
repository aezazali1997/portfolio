import {createUseStyles} from 'react-jss';
import { transform } from 'typescript';
export const styles=createUseStyles({
  wrapper:{
     width: "100%",
    height: "100vh",
    color: "#fff",
    background:'linear-gradient(to right,#1b1627,#191426)',
    padding:'2rem 0',
    overflow:'hidden'
  },
  textContainer:{
    marginLeft:84,
    position:'relative',
  },
  web:{
    fontSize:110,
    color:"#221d35",
    fontWeight:900,
    position:'absolute',
    right:-14,
  },
  work:{
    position:'relative',
    fontWeight: 100,
    color: "gray",

    "&::before":{
      content:'""',
       position:'absolute',
   left:-40,
    top: 0,
    zIndex: 10,
    width: 9,
    height: 9,
    borderRadius:" 50%",
    border: "2px solid #5918df",
    backgroundColor: "#1b191e",
    }
  },
  projectCreated:{
    fontSize:'1.5rem',
    marginTop:'1rem',
    color:"#bbb"
    ,
    textTransform:'capitalize'
  },
  projects:{
    display:"flex",
    flexDirection:'column',
    margin:'2rem 5rem',
  },
  singleProject:{
    height:'25vh',
    margin:'2rem 0',
    position:'relative',
    transform:'scale3d(1,1,1) perspective(700px)',

    "&:hover":{
      cursor:'pointer',
      transform:"scale3d(1.05,1.05,1.05) rotateX(-15deg) rotateY(15deg)",
    }
  },
  webImage:{
width:230,
height:150,
display:'block',
position:'absolute',
bottom:10,
right:10,
  },
  projectTxt:{
    width:"60%",
    color:'white',
    left:0,
    top:20,
    zIndex:10,
    position:'absolute',
    paddingBottom:20,
    borderBottom:'3px solid #fff',
  },
  number:{
    marginTop:'1rem',
    position:'absolute',
    top:100,
  },
  "@media (min-width:768px)":{
   textContainer:{
    marginLeft:490,
   },
   projectCreated:{
     fontSize:'2rem',
    marginTop:'1.5rem',
   } ,
   web:{
    fontSize:250,
    color:"#221d35",
    fontWeight:900,
  }
}
})