import { url } from "node:inspector";
import { relative } from "node:path";
import { createUseStyles } from "react-jss";
import background from "../../imgs/background-home.webp";
export const styles = createUseStyles({
  wrapper: {
    width: "100%",
    height: "100vh",
    color: "#fff",
    background: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  timeline:{
  width:1,
  height:"300%",
  left:-30,
  top:0,
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
    margin:'0 5rem',
    position:'relative',
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
    color: "gray",
    "&:after":{
      content:'""',
      position:'absolute',
      left:0,
      top:0,
      bottom:0,
      height:'100%',
      background:"#5918df",
      zIndex:1,

      willChange:'transform',
    },
  },
  intro: {
    marginTop: "2rem",
    fontSize: "2.5rem",
    width: "55vw",
    fontWeight: 800,
  },
  develop: {
    letterSpacing: ".2rem",
  },
  show: {
    marginTop: "1.2rem",
    fontSize: '2rem',
    color: "gray",
  },
  name: {
    color: "#5918DF",
  },
  more: {
    marginTop: ".7rem",
    fontSize: "2rem",
    fontWeight: 800,
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
  }
});
