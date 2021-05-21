import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  wrapper: {
    width: "100%",
    height: 60,
    background: "rgba(0,0,0,.8)",
    position: "fixed",
    transition: "all .3s ease-out",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    zIndex: 9999,
  },
  list: {
    "& > li": {
      display: "inline-block",
      textTransform: "uppercase",
      margin: "0 .5rem",
      fontWeight: 900,
      fontSize: "1.2rem",
      color: "#87868b",
      wordSpacing: "0",
      transition: "all .1s ease-in",
      "&:hover": {
        transform: "scale(1.09)",
        color: "#fdfdfe",
      },
      "&:after": {
        content: '" />"',
      },
    },
  },
  hide: {
    transform: "translatey(-100%)",
  },
  logo: {
    transition: "all .1s ease-in",
    "& span": {
      color: "#5918df",
      fontWeight: 400,
      fontSize: "1.5em",
      margin: "-.2em .2rem",
    },
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  webLogoTxt: {
    fontSize: ["2em", "!important"],
    color: ["#fdfdfe", "!important"],
    fontWeight: [700, "!important"],
    textTransform: "uppercase",
  },
  activeLink: {
    color: ["#fdfdfe", "!important"],
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  navMenu: {
    display: "none",
  },
  active: {
    transform: "translateX(0)",
  },
  "@media screen and (max-width:768px)": {
    list: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      right: 0,
      top: 60,
      left: 0,
      background: "rgba(0,0,0,.96)",
      zIndex: 200,
      transition: "all .3s ease-in",
      "& li": {
        margin: "1rem 0",
      },
    },
    navMenu: {
      display: "block",
      border: "1px solid #fdfdfe",
      padding: ".3rem",
      borderRadius: ".1rem",
      "& i": {
        color: "#fdfdfe",
      },
      "&:hover": {
        background: "#fdfdfe",
        border: "1px solid #000",
      },
      "&:hover i": {
        color: "#000",
      },
    },
    active: {
      transform: "translateX(100%)",
    },
  },
});
