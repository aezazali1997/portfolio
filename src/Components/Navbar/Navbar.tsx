import { useEffect, useRef, useState, useContext } from "react";
import { styles } from "./Navbar.style";
import classnames from "classnames";
import { HoverContext } from "../../App";
const Navbar = () => {
	const value = useContext(HoverContext);
	const [click, setClick] = useState(false);
	const handleState = () => {
		setClick(!click);
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
				{/* on moyse enter set the state to true which will re render the ui of mouse cursor making it disabled */}
				<div className={classes.logo}>
					<a href="" className={classes.link}>
						<span>&lt;</span>
						<span className={classes.webLogoTxt}>Aezaz</span>
						<span>/&gt;</span>
					</a>
				</div>
				<div className={classes.navbarList}>
					<ul
						className={
							click
								? `${classes.list}`
								: `${classnames(classes.list, classes.active)}`
						}
					>
						<li>
							<a href="#start" target="_self" className={classes.link}>
								Home
							</a>
						</li>
						<li>
							<a href="#services" target="_self" className={classes.link}>
								Services
							</a>
						</li>
						<li>
							<a href="#work" target="_self" className={classes.link}>
								Work
							</a>
						</li>
						<li>
							<a href="#about-me" target="_self" className={classes.link}>
								About Me
							</a>
						</li>
						<li>
							<a href="#contact-me" className={classes.link}>
								Contact Me
							</a>
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
