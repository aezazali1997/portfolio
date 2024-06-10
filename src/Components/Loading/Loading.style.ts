import { createUseStyles } from "react-jss";
export const styles=createUseStyles({
  container:{
    display:'flex',
    flexDirection:"column",
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    inset:1,
    background:"#000",
    cursor:'normal',
    "& h1":{
      color:"white",
      border:"1px solid #5918df",
      padding:'2rem 4rem',
      fontSize:'3rem',
      "& span":{
        width:10,
        height:10,
        margin:"0 5px",
        borderRadius:30,
        background:"#fff",
        display:"inline-block",
        animation:"$dot 2s infinite ease-in-out",
        "&:nth-child(1)":{
          animationDelay:0,
        },
        "&:nth-child(2)":{
          animationDelay:150,
        },
        "&:nth-child(3)":{
          animationDelay:300,
        },
      }
    }
  },
  "@keyframes dot":{
    "50%":{
      opacity:"0",
      transform: "scale(0.7)",
    },
    "100%":{
      opacity:1,
      transform: "scale(1)",

    }
  }
})