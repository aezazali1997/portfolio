import React from "react";
import { styles } from "./AboutMe.style";
const AboutMe = () => {
  const classes = styles();
  return (
    <div>
      <h3 className={classes.heading}>This is About Me Section</h3>
    </div>
  );
};

export default AboutMe;
