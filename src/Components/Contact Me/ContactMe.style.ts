import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  formOverLay:{
    "&:after":{
      zIndex:1050,
      height:'100vh',
      content:'""',
      position:'fixed',
      width:"100%",

      bottom:0,
      left:0,
      backgroundColor:'rgba(0,0,0,.9)',
    }
  },
  childOverLay:{
    display:"flex",
    position:'fixed',
    right:100,
    top:100,
      zIndex:1150,

  },
  icon:{
    color:'white',
    fontSize:30,
  },
  contact:{
    fontSize:18,
    color:"gray",
    margin:'2rem 0',
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
    paddingLeft:'30rem',
    position:'relative'
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
