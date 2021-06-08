import { useEffect, useRef, useState, useContext } from "react";
import { styles } from "./Navbar.style";
import classnames from "classnames";
import { HoverContext } from "../../App";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
	let value = useContext(HoverContext);
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
				<div
					onMouseEnter={() => {
						value = true;
					}}
					onMouseLeave={() => {
						value = false;
					}}
					className={classes.logo}
				>
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
							<Link to="home" duration={500} activeClass="active" smooth={true}>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="services"
								activeClass="active"
								duration={500}
								smooth={true}
							>
								Services
							</Link>
						</li>
						<li>Work</li>
						<li>About Me</li>
						<li>
							<Link
								to="contact"
								activeClass="active"
								smooth={true}
								duration={500}
							>
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
