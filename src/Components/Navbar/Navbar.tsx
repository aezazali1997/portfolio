import { useEffect, useRef, useState } from "react";
import { styles } from "./Navbar.style";
import { BrowserRouter as Router, Link } from "react-router-dom";
import classnames from "classnames";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleState = () => {
    setClick(!click);
    console.log(click);
  };
  const navbarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let prevScrollPos = Math.floor(
      document.body.getBoundingClientRect().top * -1
    );
    window.addEventListener("scroll", () => {
      let scroller = Math.floor(document.body.getBoundingClientRect().top) * -1;
      if (prevScrollPos > scroller) {
        if (navbarRef.current) {
          navbarRef.current.classList.remove(`${classes.hide}`);
        }
      } else {
        if (navbarRef.current) {
          navbarRef.current.classList.add(`${classes.hide}`);
        }
      }
      prevScrollPos = scroller;
    });
  }, []);
  const classes = styles();
  return (
    <div ref={navbarRef} className={classes.wrapper}>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <Link to="/" className={classes.link}>
            <span>&lt;</span>
            <span className={classes.webLogoTxt}>Aezaz</span>
            <span>/&gt;</span>
          </Link>
        </div>
        <div>
          <ul
            className={
              click
                ? `${classes.list}`
                : `${classnames(classes.list, classes.active)}`
            }
          >
            <li>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className={classes.link}>
                Services{" "}
              </Link>
            </li>
            <li>
              <Link to="/work" className={classes.link}>
                Work
              </Link>
            </li>
            <li>
              <Link to="/about-me" className={classes.link}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="/contact-me" className={classes.link}>
                Contact Me
              </Link>
            </li>
          </ul>
          <div className={classes.navMenu} onClick={handleState}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
