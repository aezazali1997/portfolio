import {createUseStyles} from 'react-jss';
export const styles=createUseStyles({
  wrapper:{
     width: "100%",
    color: "#fff",
    background:'linear-gradient(to right,#1b1627,#191426)',
    padding:'2rem 0',
    overflow:'hidden',
    height:"100vh",
    zIndex:99,
    position:'relative',
  },
  textContainer:{
    marginLeft:'4rem',
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
     left:"-2.4rem",
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
    color:"#bbb",
    textTransform:'capitalize'
  },
  projects:{
    display:'grid',
    gridTemplateColumns:'repeat(1,auto)',
    gridGap:"2rem",
    margin:'3rem',
  },
  singleProject:{
    width:'100%',
  
    display:'flex',
    justifyContent:'space-around',
    transform:'scale3d(1,1,1)',
    "&:hover":{
      cursor:'pointer',
      transform:"scale3d(1.05,1.05,1.05)",
    }
  },
  webImage:{
  width:350,
  height:200,
  },
  projectTxt:{
    width:"60%",
    color:'black',
    left:0,
    top:50,
    zIndex:10,
    position:'absolute',
    paddingBottom:20,
    borderBottom:'3px solid #000',
  },
  number:{
    marginTop:'1rem',
    position:'absolute',
    bottom:0,
    left:0,
    color:"black",
  },

  "@media (min-width:768px)":{
   textContainer:{
    marginLeft:'30rem',
   },
   projectCreated:{
     fontSize:'2rem',
    marginTop:'1.5rem',
   } ,
   web:{
    fontSize:250,
    color:"#221d35",
    fontWeight:900,
   },
   projects:{
    gridTemplateColumns:'repeat(2,auto)',
   
  },
   number:{
     color:"white"
   },
   projectTxt:{
     color:"white",
    borderBottom:'3px solid #fff',


   },
   "@media (min-width:1200px)":{
        projects:{
    gridTemplateColumns:'repeat(3,auto)',
   
  },
   }
}
})