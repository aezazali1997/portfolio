import React from "react";
import { styles } from "./ArrayVar.style";
import classNames from "classnames";
type Field = {
	name: string;
	values: string[];
};
const ArrayVar: React.FC = () => {
	const classes = styles();
	return (
		<div className={classes.name}>
			<span>const</span>
			<span className={classes.margin1}>Frontend</span>
			<span>= [</span>
			<p>
				<span>"React", </span>
				<span>"Angular", </span>
				<span>"Vue", </span>
				<span>"JQuery", </span>
			</p>
		</div>
	);
};

export default ArrayVar;
