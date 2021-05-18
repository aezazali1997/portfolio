import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  "@keyframes effect": {
    from: { transform: "scale(1)" },
    to: { transform: "scale(.7)" },
  },
  "@keyframes effect2": {
    from: { transform: "scale(1)" },
    to: { transform: "scale(.6)" },
  },
  OuterCursor: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "1px solid black",
    position: "absolute",
    transitionDuration: "600ms",
    transitionTimingFunction: "ease",
    animation: "$effect .5s infinite alternate",
    "&:after": {
      content: '""',
      width: 40,
      height: 40,
      border: "13px solid gray",
      borderRadius: "50%",
      position: "absolute",
      top: -13,
      left: -13,
      opacity: 0.5,
      animation: "$effect2 .5s infinite alternate",
    },
  },
});
