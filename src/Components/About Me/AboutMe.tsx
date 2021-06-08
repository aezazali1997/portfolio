import React, { FC } from "react";
import AppContext from "./ContextApi/ContextApi";
import { styles } from "./AboutMe.style";
import { margins } from "./Margin.style";
import { data } from "./data/data";
import { timeStyles } from "../timeline.style";
import classNames from "classnames";
import Class from "./Class/Class";
const AboutMe: FC = () => {
	const classes = styles();
	const spaces = margins();
	const _timelineClasses = timeStyles();
	return (
		<AppContext.Provider value={data}>
			<div className={classes.container}>
				<div
					className={classNames(
						_timelineClasses.timeline,
						_timelineClasses.alt
					)}
				></div>
				<div className={classes.wrapper}>
					<div className={classes.title}>About / &gt;</div>
					<div className={spaces.marTop}>
						<div className={classes.codeWrap}>
							<Class />
						</div>
					</div>
				</div>
			</div>
		</AppContext.Provider>
	);
};

export default AboutMe;
