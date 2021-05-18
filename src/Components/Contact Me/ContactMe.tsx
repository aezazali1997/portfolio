import React from "react";
import { styles } from "./ContactMe.style";
const ContactMe = () => {
  const classes = styles();
  return (
    <div>
      <h3 className={classes.heading}>This is Contact Me Section</h3>
    </div>
  );
};

export default ContactMe;
