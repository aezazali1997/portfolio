import React, { FC } from "react";
import AppContext from "./ContextApi/ContextApi";
import { styles } from "./AboutMe.style";
import { margins } from "./Margin.style";
import Class from "./Class/Class";
import { data } from "./data/data";
const AboutMe: FC = () => {
	const classes = styles();
	const spaces = margins();
	return (
		<AppContext.Provider value={data}>
			<div className={classes.container}>
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
