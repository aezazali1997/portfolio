import React from "react";
import { styles } from "./ContactMe.style";
import classNames from "classnames";
const ContactMe = () => {
	const classes = styles();
	const showContactForm = () => {};
	return (
		<div className={classes.container}>
			<div className={classes.formOverLay}>
				<div className={classes.childOverLay}>
					{/* for cross icon */}
					<span className={classNames(classes.icon, "fas fa-times")}></span>
					<div>
						<h1 style={{ color: "white" }}>ge</h1>
					</div>
					<h2 style={{ color: "white" }}>sadsa</h2>
					<h4 style={{ color: "white" }}>adsadsad</h4>
					{/*  make a div and make it fixed */}
					{/* make parent div fixed and all the children inherit the position of parent div */}
				</div>
			</div>
			<div className={classes.contact}>
				<span>Contact / &gt;</span>
			</div>
			<div>
				<h3 className={classes.findMe}>Find Me On:</h3>
				<div className={classes.grid}>
					<div>
						<a href="https://www.github.com" target="_blank">
							<span className="fab fa-github"></span> <span>Github</span>
						</a>
					</div>
					<div>
						<a href="https://www.linkedin.com" target="_blank">
							<span className="fab fa-linkedin"></span> <span>LinkedIn</span>
						</a>
					</div>
					<div>
						<a href="https://www.twitter.com" target="_blank">
							<span className="fab fa-twitter"></span> <span>Twitter</span>
						</a>
					</div>
					<div>
						<a href="https://mail.google.com/mail" target="_blank">
							<span className="fas fa-envelope-open-text"></span>{" "}
							<span>Gmail</span>
						</a>
					</div>
				</div>
				<div className={classes.containerBtn}>
					<button onClick={showContactForm} className={classes.btn}>
						Get in Touch
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
