import React, { FC, useContext } from "react";
import { styles } from "./Constructor.style";
import AppContex from "../ContextApi/ContextApi";
import classNames from "classnames";
import { colors } from "../Colors.style";
import { margins } from "../Margin.style";
const Constructor: FC = () => {
	const _classes = styles();
	const _colors = colors();
	const _margins = margins();

	const data = useContext(AppContex);
	const Class = data.class;
	let arrKeys = Object.keys(Class.const.variables);
	let arrValues = Object.values(Class.const.variables);

	return (
		<div className={_classes.const}>
			<span className={_colors.cons}>{Class.const.name}</span>
			<span> () &#123;</span>
			{arrKeys.map((value, inx) => {
				//should be in another comp
				return (
					<p key={inx}>
						<span className={_colors.specialKeyword}>this.</span>
						<span className={_colors.variable}>{value}</span>=
						<span className={_colors.string}>"{arrValues[inx]}"</span>
					</p>
				);
			})}
		</div>
	);
};

export default Constructor;
