import { styles } from "./Services.style";
import img1 from "../../imgs/project-1.jpg";
import { useRef } from "react";
const Services = () => {
	const classes = styles();
	const div = useRef(null);

	return (
		<div className={classes.wrapper}>
			<div className={classes.textContainer}>
				<span className={classes.work}>My Work / &gt;</span>
				<h3 className={classes.projectCreated}>Web projects Created</h3>
				<span className={classes.web}>WEB</span>
			</div>
			<div className={classes.projects}>
				<div className={classes.singleProject}>
					<h1 className={classes.projectTxt}>Web project</h1>
					<img
						className={classes.webImage}
						src={img1}
						alt="project national web"
					/>
					<span className={classes.number}>
						<span>00</span>
						<br />
						<span className="fas fa-arrow-right"></span>
					</span>
				</div>
				<div ref={div} className={classes.singleProject}>
					<h1 className={classes.projectTxt}>Mobile project</h1>
					<img
						className={classes.webImage}
						src={img1}
						alt="project national web"
					/>
					<span className={classes.number}>
						<span>01</span>
						<br />
						<span className="fas fa-arrow-right"></span>
					</span>
				</div>
				<div className={classes.singleProject}>
					<h1 className={classes.projectTxt}>IOS project</h1>
					<img
						className={classes.webImage}
						src={img1}
						alt="project national web"
					/>
					<span className={classes.number}>
						<span>02</span>
						<br />
						<span className="fas fa-arrow-right"></span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Services;
