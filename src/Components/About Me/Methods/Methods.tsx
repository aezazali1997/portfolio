import React, { FC } from "react";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";

const Methods: FC = () => {
	return (
		<div>
			<Skills />
			<Experience />
			<Education />
		</div>
	);
};

export default Methods;
