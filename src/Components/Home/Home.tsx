import React from "react";
import { styles } from "./Home.style";
import classnames from "classnames";
const Home = () => {
  const classes = styles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <span className={classes.start}> Start /&gt;</span>
        <h2 className={classes.intro}>
          Hi, my name is <span className={classes.name}>Aezaz Ali</span>
        </h2>
        <h2 className={classes.more}>
          i <em>design</em> and <span className={classes.develop}>develop</span>
        </h2>
        <span className={classes.show}>Let me show You...</span>
        <div className={classes.down}>
          <span
            className={classnames(
              "fas fa-long-arrow-alt-down",
              `${classes.customization}`
            )}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Home;
