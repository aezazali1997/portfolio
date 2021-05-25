import { url } from "node:inspector";
import { relative } from "node:path";
import { createUseStyles } from "react-jss";
import background from "../../imgs/background-home.webp";
export const styles = createUseStyles({
  wrapper: {
    width: "auto",
    color: "#fff",
    background: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'center',
  },
  timeline:{
  width:1,
  height:"300%",
  left:50,
  top:"34%",
  position:'absolute',
  zIndex:9,
  background:' #5918df',
},
bullet:{
  position:'absolute',
 "&::before":{
   position:'absolute',
   content:'""',
   left: -6,
    top: 0,
    zIndex: 10,
    width: 9,
    height: 9,
    borderRadius:" 50%",
    border: "2px solid #5918df",
    backgroundColor: "#1b191e",
 },
},
mouse:{
  position:'absolute',
  top:350,
  left:-12,
},
mousebtn:{
  textDecoration:'none',
color:'#ddd',
},

scroll:{
  position:'absolute',
  zIndex:9,
  fontSize:'1.2rem',
color:'#5918df',
textTransform:'uppercase',
transform:'translate(-42px, 60px) rotate(-90deg)',
},
  container: {
    display: "flex",
    flexDirection: "column",
    marginLeft:'4rem',
    padding:'23rem 0',

  },
typing:{
marginLeft:10,
fontSize:'1.7rem',
fontFamily:"'Roboto', sans-serif",
},
  start: {
    width:'max-content',
    position:'relative',
    fontWeight: 100,
    color:'gray',
    "&:after":{
      content:'""',
      position:'absolute',
      top:0,
      height:'100%',
      width:0,
      background:"#f9f9f9",
      zIndex:1,
      willChange:'transform',
      animation:"$animate1 1.4s ease-in-out",
      animationDelay:'0.1s'
    },
  },
  "@keyframes animate1":{
    "0%":{
      width:0,
      left:0,
      
    },
    "50%":{
      width:'100%',
    },
    "100%":{
      width:0,
      right:0,
    }
  },
  intro: {
    width:'auto', 
    marginTop: "2rem",
    fontSize: "2.5rem",
    fontWeight: 800,
    position:'relative',
    "&:after":{
      content:'""',
      position:'absolute',
      top:0,
      height:'100%',
      width:0,
      background:"#5918df",
      zIndex:1,
      willChange:'transform',
     animation:'$animate1 1.5s ease-in-out',
           animationDelay:'0.3s'
    }
  },
  develop: {
    letterSpacing: ".2rem",
  },
  show: {
    width:'max-content',
    marginTop: "1.2rem",
    fontSize: '2rem',
    color: "gray",
      position:'relative',
    "&:after":{
      content:'""',
      position:'absolute',
      top:0,
      height:'100%',
      width:0,
      background:"#5918df",
      zIndex:1,
      willChange:'transform',
     animation:'$animate1 1.6s ease-in-out',
    animationDelay:'0.5s'
    }
  },
  name: {
     color:'#5918df'
  },
  more: {
    width:'auto',
    marginTop: ".7rem",
    fontSize: "2rem",
    fontWeight: 800,
      position:'relative',
    "&:after":{
      content:'""',
      position:'absolute',
      top:0,
      height:'100%',
      width:0,
      background:"#5918df",
      zIndex:1,
      willChange:'transform',
     animation:'$animate1 1.4s ease-in-out',
     animationDelay:'.4s'
    }
  },
  down: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 70,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to bottom,black 5%,#191425)",
    "&:hover $customization": {
      color: "#5918df",
    },
  },
  customization: {
    color: "gray",
    fontSize: 22,
    transition: "all .3s ease-in-out",
  },
  "@media (min-width:768px)":{
    start:{
      fontSize:'1.3rem'
    },
    intro:{
      fontSize:"3.5rem",
    },
    show:{
      fontSize:'1.8rem',
    },
    timeline:{
        left:"24%",
        top:'38%',
    },
    container:{
      width:'auto',
      marginLeft:'30rem',
    }
  }
});
