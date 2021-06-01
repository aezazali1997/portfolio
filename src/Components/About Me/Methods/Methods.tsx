import React, { FC } from "react";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import { styles } from "./Methods.style";

const Methods: FC = () => {
	const classes = styles();
	return (
		<div>
			<Skills />
			<Experience />
			<Education />
		</div>
	);
};

export default Methods;
