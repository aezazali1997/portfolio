import React, { FC, useContext } from "react";
import { styles } from "./Constructor.style";
import AppContex from "../ContextApi/ContextApi";

const Constructor: FC = () => {
	const data = useContext(AppContex);
	const Class = data.class;
	const classes = styles();
	let arrKeys = Object.keys(Class.const.variables);
	let arrValues = Object.values(Class.const.variables);
	return (
		<div className={classes.const}>
			<span className={classes.brackets}>{Class.name}</span>
			{arrKeys.map((value, inx) => {
				//should be in another comp
				return (
					<p key={inx}>
						{value}="{arrValues[inx]}"
					</p>
				);
			})}
		</div>
	);
};

export default Constructor;
