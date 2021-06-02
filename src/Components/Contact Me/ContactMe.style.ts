import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  contact:{
    color:"#eee",
    margin:'2rem 0',
    position:'relative',
    "&::before":{
      position:'absolute',
      content:'""',
      top:0,
      left:-35,
      background:"#1b191e",
      borderRadius:"50%",
      width:9,
      height:9,
      border: "2px solid #5918df",
    }
  },

  container: {
    padding:'3rem 0',
    background:'#0e0d10',
    paddingLeft:'30rem'
  },
  grid:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    "& div":{
      margin:'1rem 0 .3rem 0',
      "& a":{
        textDecoration:'none',
        color: "#5918df",
        fontSize:18,
      }
    }
  },
  findMe:{
    color:'white'
  },
  containerBtn:{
    marginTop:'1rem',
  },
  btn:{
    cursor:'pointer',
    outline:'none',
    background:"#5918df",
    border:'none',
    fontSize:18,
    fontWeight:"500",
    color:"#eee",
    padding:'1rem 2rem',
    borderRadius:'20rem',
    "-webkit-box-shadow": "0px 11px 21px -4px rgb(89 22 223)",
   
  },
  "@media (max-width:768px)":{
    container:{
      paddingLeft:'4rem'
    }
  }
});
