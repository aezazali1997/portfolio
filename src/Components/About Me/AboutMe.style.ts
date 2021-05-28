import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  container:{
    background:"#14121c",
    display:'flex',
    alignItems:'center',
    paddingTop:"1.5rem",
  },
  wrapper:{
    marginLeft:'30.7rem',
    width:"100%",
  },
  title:{
    color:'gray',
    fontSize:18,
    position:'relative',
    "&:before":{
      content:'""',
      position:'absolute',
      left:-40,
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
      "&:hover:before":{
        content:'""',
        position:'absolute',
        zIndex:-1, // update this to display the hover effect
        top:0,
        width:'135%',
        left:'-35%',
        height:'100%', 
        background:'#807a6c',
      },
      "& span" :{
        margin:'0 .3rem',
        zIndex:2,
        position:'relative',
      },
      "&:after":{
        content:"attr(data-line-nmbr)",
        position:'absolute',
        left:-70,
        top:0,
        fontSize:18,
        color:'rgba(255,255,255,.6)',
        fontFamily:'serif',
      }
    }
    },
  /* colors */
  specialKeyword:{
    color:"#3e85c9"
  },
  className:{
    color:'#25cca7'
  },
  comment:{
    color:'#2c6e29',
  },
  cons:{
    color:"#b6c480",
  },
  variable:{
    color:'#72c6ed'
  },
  string:{
    color:'#e6976a'
  },
  method :{
    color:'#85915c'
  },
  array : {
    color:'#61b2ff'
  },
  return : {
    color:'#ed7ba6'
  },
  /* colors End here */
  /* helping classes */
  noMargin:{
    margin:'0 !important'
  },
    marTop:{
    marginTop:'1rem'
  },
  brac1:{
    marginLeft:'1rem !important',
  },
    brac2:{
    marginLeft:'2rem !important',
  },
  /* helping classes End here*/
  "@media (max-width:768px)":{
      wrapper:{
    marginLeft:'4.6rem',
  },
  }
});
