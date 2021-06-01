import {createUseStyles} from 'react-jss';
export const styles=createUseStyles({
  contianer:{
    height:'100%',
    width:'max-content',
    position:'relative',
      "&::after":{
      content:'"}"',
      position:'absolute',
      bottom:0,
      right:"95%",   
  }
},
keyword:{
  margin:"0 .6rem"
}
});