import { useState } from "react";
import { styles } from "./ContactMe.style";
import classNames from "classnames";

import {
	Card,
	CardContent,
	CardActions,
	Typography,
	TextField,
	Button,
} from "@material-ui/core";
import {
	makeStyles,
	withStyles,
	Theme,
	createMuiTheme,
} from "@material-ui/core";
import { grey, green } from "@material-ui/core/colors";

const ContactMe = () => {
	const [close, setClose] = useState<boolean>(true);

	const matUseStyles = makeStyles((theme: Theme) => ({
		card: {
			width: "100%",
			background: "black",
			padding: "1rem 3rem",
			border: "1px solid gray",
		},
		header: {
			color: "#fff",
			paddingBottom: 10,
			borderBottom: "1px solid #fff",
			marginBottom: "1rem",
			textAlign: "center",
		},
		textField: {
			margin: "10px 0",
			width: "100%",
		},
		btn: {
			width: "30%",
			textAlign: "center",
			left: "50%",
			transform: "translateX(-50%)",
		},
	}));
	const _classes = styles();
	const _matClases = matUseStyles();

	const showContactForm = () => {
		setClose(true);
	};
	const closeOverLay = () => {
		setClose(false);
	};
	const styles = (theme: Theme) => ({
		multilineColor: {
			color: "red",
		},
	});
	const CustomButton = withStyles((theme: Theme) => ({
		root: {
			color: grey[100],
			backgroundColor: "transparent",
			borderColor: grey[50],
			"&:hover": {
				borderColor: grey[50],
				color: grey[100],
			},
		},
	}))(Button);

	return (
		<div className={_classes.container}>
			<div
				className={classNames(
					_classes.formOverLay,
					close ? null : `${_classes.removeformOverLay}`
				)}
			>
				<div className={_classes.childOverLay}>
					<button className={_classes.closeBtn} onClick={closeOverLay}>
						<span className={classNames(_classes.icon, "fas fa-times")}></span>
					</button>
				</div>
				<div className={_classes.form}>
					<Card className={_matClases.card}>
						<CardContent>
							<Typography
								className={_matClases.header}
								variant="h5"
								component="h1"
							>
								Get in Touch with Me!
							</Typography>
							<TextField
								variant="outlined"
								InputLabelProps={{
									style: { color: "#fff" },
								}}
								className={classNames(_matClases.textField)}
								label="Name"
							></TextField>
							<TextField
								variant="outlined"
								InputLabelProps={{
									style: { color: "#fff", borderColor: "#fff" },
								}}
								label="Eamil"
								className={classNames(_matClases.textField)}
							></TextField>
						</CardContent>
						<CardActions>
							<CustomButton
								className={_matClases.btn}
								color="primary"
								variant="outlined"
								size="large"
							>
								Send
							</CustomButton>
						</CardActions>
					</Card>
				</div>
			</div>
			<div className={_classes.contact}>
				<span>Contact / &gt;</span>
			</div>
			<div>
				<h3 className={_classes.findMe}>Find Me On:</h3>
				<div className={_classes.grid}>
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
				<div className={_classes.containerBtn}>
					<button onClick={showContactForm} className={_classes.btn}>
						Get in Touch
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
