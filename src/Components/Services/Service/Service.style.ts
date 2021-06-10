import { createUseStyles } from "react-jss";
export const styles=createUseStyles({
  service:{
    display:"flex",
    flexDirection:'column',
    background:"#212121",
    padding:"1.5rem",
    alignItems:'left',
    zIndex:120,
    margin:"0 1rem",
    width:"70%",
    borderRadius:10,
  },
  icon:{
    fontSize:"3.2rem",
    color:"#5918df",
    marginBlock:"1rem",
  },
  title:{
    textTransform:"capitalize",
    letterSpacing:".1rem",
    fontSize:"1.5rem",
    marginBlock:".6rem",
  },
  description:{
    color:"gray",
    fontSize:'1.2rem',
    marginBlock:".6rem",
    position:"relative",
    "&:after":{
      content:'"____"',
      position:"absolute",
      color:'#5918df',
      left:0,
      bottom:-15,
    }
  }
});