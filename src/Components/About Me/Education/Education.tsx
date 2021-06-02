import React, { useContext } from "react";
import AppContext from "../ContextApi/ContextApi";
import { styles } from "./Education.style";
import { margins } from "../Margin.style";
import { colors } from "../Colors.style";
import Return from "./Return/Return";
import classNames from "classnames";

function Education() {
	const _colors = colors();
	const _classes = styles();
	const _margins = margins();

	const data = useContext(AppContext);
	const method = data.class.method3;

	return (
		<div className={_classes.container}>
			<span className={_colors.variable}>const</span>
			<span className={classNames(_margins.marginLeft, _colors.method)}>
				{method.name}
			</span>
			<span>
				= ()
				<span className={_colors.specialKeyword}>=&gt;</span> &#123;
			</span>
			<Return education={method.edu} />
		</div>
	);
}

export default Education;
