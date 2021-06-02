import React, { useContext } from "react";
import AppContext from "../ContextApi/ContextApi";
import { styles } from "./Skills.style";
import { colors } from "../Colors.style";
import { margins } from "../Margin.style";
import ArrayVar from "./ArrayVar/ArrayVar";
import classNames from "classnames";
const Skills = () => {
	const _classes = styles();
	const _colors = colors();
	const _margins = margins();

	const data = useContext(AppContext);
	const method = data.class.method1;
	return (
		<div className={_classes.container}>
			<span className={_colors.variable}>const</span>
			<span className={classNames(_margins.marginLFTRT, _colors.method)}>
				{method.name}
			</span>
			<span>
				= () <span className={_colors.specialKeyword}>=&gt; </span> &#123;
			</span>

			<div>
				{method.fields.map((field, id) => {
					return <ArrayVar key={id} arrValues={field} />;
				})}
			</div>
			<span>
				return
				{method.fields.map((field, id) => {
					return (
						<span key={id} className={_colors.variable}>
							{" "}
							{field.name} {id !== 3 ? "+" : ""}
						</span>
					);
				})}
			</span>
		</div>
	);
};

export default Skills;
