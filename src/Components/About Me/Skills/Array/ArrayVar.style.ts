import { createUseStyles } from "react-jss";
export const styles=createUseStyles({
  margin1:{
    margin:"0 .6rem",
  },
  name:{
    padding:'1rem 0',
    position:'relative',
    "&:before":{
      content:'"]"',
      position:'relative',
      bottom:-50,
      right:-5,
    },
  }
});