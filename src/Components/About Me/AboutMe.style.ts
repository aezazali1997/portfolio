import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  container:{
    background:"#14121c",
    display:'flex',
    alignItems:'center',
    paddingTop:"1.5rem",
    position:'relative',
  },
  wrapper:{
    marginLeft:'30rem',
    width:"100%",
  },
  title:{
    color:'gray',
    fontSize:18,
    position:'relative',
    "&:before":{
      content:'""',
      position:'absolute',
     left:"-2.4rem",
      top:5,
      zIndex: 10,
      width: 9,
      height: 9,
      borderRadius:" 50%",
      border: "2px solid #5918df",
      backgroundColor: "#1b191e",

    },
  },
  codeWrap:{
    "& div":{
      width:'100%',
      color:'rgba(255,255,255,.8)',
      fontSize:18,
      lineHeight:'1.8rem',
      position:'relative',
     
    }
    },
  "@media (max-width:768px)":{
      wrapper:{
    marginLeft:'4rem',
  },
  }
});
