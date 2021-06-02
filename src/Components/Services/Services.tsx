import { styles } from "./Services.style";
import img1 from "../../imgs/project-1.jpg";
import { MouseEvent } from "react";
const Services = () => {
	const classes = styles();
	let lower_x = 15;
	const hello = (e: MouseEvent<HTMLDivElement>) => {
		let upper_x = -15;
		let element = e.currentTarget as HTMLElement;
		let divWidth = element.clientWidth;
		let divHegiht = element.clientHeight;
		let divHalfWidth = divWidth / 2;
		let divHalfHeight = divHegiht / 2;
		let divStartX = 73;
		let divStartY = 752;
		let divBottom = divStartY + divHegiht;
		let divEnd = divStartX + divWidth;
		let toIncrease = (e.pageY - divStartY) / 5;
		let valueToBeAssignedX = upper_x + toIncrease;
		if (valueToBeAssignedX < -15) {
			valueToBeAssignedX = -15;
		} else if (valueToBeAssignedX > 0) {
			valueToBeAssignedX = 0;
		}
		// console.log(valueToBeAssignedX);
		/* if (divBottom - e.pageY < divHalfHeight) {
			console.log("lower then center");
		} else {
			console.log("upper then center");
		}
		if (divEnd - e.pageX < divHalfWidth) {
			console.log("right part");
		} else {
			console.log("left part");
		} */
	};

	return (
		<div id="services" className={classes.wrapper}>
			<div className={classes.textContainer}>
				<span className={classes.work}>My Work / &gt;</span>
				<h3 className={classes.projectCreated}>Web projects Created</h3>
				<span className={classes.web}>WEB</span>
			</div>
			<div id="projects" className={classes.projects}>
				<div onMouseMove={hello} className={classes.singleProject}>
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
				<div className={classes.singleProject}>
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
/*
			TO INCREATE 1 WHEN start moves 5.06 more
			half=828
			start=752

			point1=752 => -15
			point2=753 =>  14.8
			point3=754 =>  14.6
			point4=755 -> 14.4
			point5=756 -> 14.2
			point7=757 -> 14.00
			.
			.
			.
			.
			pointN=828 => 0


			*/
