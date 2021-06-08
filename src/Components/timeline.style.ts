import { createUseStyles } from "react-jss";
export const timeStyles = createUseStyles({
  timeline:{
    width:1,
    height:"300%",
    left:"28rem",
    position:'absolute',
    background:' #5918df',
    zIndex:100,
},
alt:{
  top:'0',
  height:"100% !important",
  left:'28rem'
},
"@media (max-width:768px)":{
  alt:{
    left:"3rem",
  },
  timeline:{
  left:"2rem",
  }
}
})