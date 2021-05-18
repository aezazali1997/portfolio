import { url } from "node:inspector";
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
  },
  container: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "8rem",
    margin: "0 5rem",
  },
  start: {
    fontWeight: 100,
    color: "gray",
  },
  intro: {
    marginTop: "2rem",
    fontSize: "6vw",
    width: "55vw",
    fontWeight: 800,
  },
  develop: {
    letterSpacing: ".2rem",
  },
  show: {
    marginTop: "1.2rem",
    fontSize: 24,
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
});
