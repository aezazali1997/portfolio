import React from "react";
import { styles } from "./Home.style";
import { BiMouse } from "react-icons/bi";
import classnames from "classnames";
import ReactTypingEffect from "react-typing-effect";
import useWebAnimations from "@wellyshen/use-web-animations";

const Home = () => {
	/* 	const animateStart = useWebAnimations({
		keyframes: {},
		animationOptions: {},
	}); */
	const classes = styles();
	return (
		<div id="start" className={classes.wrapper}>
			<div className={classes.container}>
				<div className={classes.timeline}>
					<div className={classes.bullet}></div>
					<div className={classes.mouse}>
						<a href="" className={classes.mousebtn}>
							<BiMouse size={25} />
						</a>
						<span className={classes.scroll}>Scroll</span>
					</div>
				</div>
				<span className={classes.start}> Start /&gt;</span>
				<h2 className={classes.intro}>
					Hi, my name is <span className={classes.name}>Aezaz Ali</span>
				</h2>
				<h2 className={classes.more}>
					i <em>design</em> and <span className={classes.develop}>develop</span>
					<span className={classes.typing}>
						<ReactTypingEffect
							text={["Web Apps", "Progressive Web App", "Complete websites"]}
							speed={200}
							eraseDelay={2000}
							eraseSpeed={100}
							typingDelay={1000}
						/>
					</span>
				</h2>
				<span className={classes.show}>Let me show You...</span>
			</div>
			<div className={classes.down}>
				<span
					className={classnames(
						"fas fa-long-arrow-alt-down",
						`${classes.customization}`
					)}
				></span>
			</div>
		</div>
	);
};

export default Home;
