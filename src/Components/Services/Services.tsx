import { useState } from "react";
import { styles } from "./Services.style";
import img1 from "../../imgs/project-1.jpg";
import img2 from "../../imgs/project-2.jpg";
import img3 from "../../imgs/project-3.jpg";
import { MouseEvent } from "react";
import classNames from "classnames";
import { timeStyles } from "../timeline.style";

const Services = () => {
	const classes = styles();
	const _timelineClasses = timeStyles();

	const enter = (e: MouseEvent<HTMLDivElement>) => {
		let pageYEnd = 1305;
		let pageYStart = 1096;
		let center = (pageYStart + pageYEnd) / 2;
		let pexelIncrease = center / 15;
		let degree = pexelIncrease / 3;
		let diff = e.pageY - pageYStart;
		let times = diff / degree;
		let actual = 0.5 * times;
		let test = actual * 3.83 * 2.01;
		let calculatedAngle = -15 + test;
		let ele = document.elementFromPoint(e.clientX, e.clientY);
		let referenceDiv = null;
		if (ele) {
			if (
				ele.tagName == "IMG" ||
				ele.tagName == "H1" ||
				ele.tagName == "SPAN"
			) {
				referenceDiv = ele.parentElement;
			} else {
				referenceDiv = ele;
			}
			console.log(referenceDiv?.firstChild?.parentElement);
			if (referenceDiv?.firstChild?.parentElement) {
				referenceDiv.firstChild.parentElement.style.transform =
					"rotateY(15deg)";
				referenceDiv.firstChild.parentElement.style.transform = `rotateX(${calculatedAngle})`;
			}
		}
	};
	const leave = (e: MouseEvent<HTMLDivElement>) => {
		console.log("leave");
		let referenceDiv = null;
		let ele = document.elementFromPoint(e.clientX, e.clientY);
		if (ele) {
			if (
				ele.tagName == "IMG" ||
				ele.tagName == "H1" ||
				ele.tagName == "SPAN"
			) {
				referenceDiv = ele.parentElement;
			} else {
				referenceDiv = ele;
			}
			console.log(referenceDiv?.firstChild?.parentElement);
			if (referenceDiv?.firstChild?.parentElement) {
				referenceDiv.firstChild.parentElement.style.transform = "rotateY(0deg)";
				referenceDiv.firstChild.parentElement.style.transform = `rotateX(0deg)`;
			}
		}
	};
	return (
		<div id="services" className={classes.wrapper}>
			<div
				className={classNames(_timelineClasses.alt, _timelineClasses.timeline)}
			></div>
			<div className={classes.textContainer}>
				<span className={classes.work}>My Work / &gt;</span>
				<h3 className={classes.projectCreated}>Web projects Created</h3>
				<span className={classes.web}>WEB</span>
			</div>
			<div id="projects" className={classes.projects}>
				<div
					onMouseEnter={enter}
					onMouseLeave={leave}
					className={classes.singleProject}
				>
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
						src={img2}
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
						src={img3}
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
