import React, { useContext } from "react";
import AppContext from "../ContextApi/ContextApi";
import { styles } from "./Skills.style";
import ArrayVar from "./Array/ArrayVar";

const Skills = () => {
	const data = useContext(AppContext);
	const method = data.class.method1;
	const classes = styles();
	return (
		<div className={classes.container}>
			<span>const</span>
			<span className={classes.margin1}>{method.name}</span>
			<span> = ()=&gt; &#123;</span>
			{method.fields.map((field, id) => {
				return <ArrayVar />;
			})}
		</div>
	);
};

export default Skills;
