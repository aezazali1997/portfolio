import { createUseStyles } from "react-jss";
export const styles=createUseStyles({
  const:{
    position:'relative',
    "&::before":{
      content:'"() {"',
      left:'100px',
      position:'absolute',
      top:0,
        },
    "&::after":{
      
    }
  }
})