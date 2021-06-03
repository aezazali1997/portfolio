import React from "react";
import { styles } from "./ContactMe.style";
const ContactMe = () => {
	const classes = styles();
	return (
		<div className={classes.container}>
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
					<button className={classes.btn}>Get in Touch</button>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
