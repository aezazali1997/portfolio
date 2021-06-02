import React from "react";
import { styles } from "./ArrayVar.style";
import ClassNames from "classnames";
import { margins } from "../../Margin.style";
import { colors } from "../../Colors.style";

type Field = {
	arrValues: IField;
};
type IField = {
	name: string;
	values: string[];
};

const ArrayVar: React.FC<Field> = ({ arrValues }: Field) => {
	const _classes = styles();
	const _margins = margins();
	const _colors = colors();

	return (
		<div className={_classes.name}>
			<span className={_colors.variable}>const</span>
			<span
				className={ClassNames(_margins.marginLFTRT, _colors.specialKeyword)}
			>
				{arrValues.name}
			</span>
			<span>= [</span>
			<p>
				{arrValues.values.map((value, id) => {
					return (
						<span
							className={ClassNames(_margins.marginRight, _colors.string)}
							key={id}
						>
							{value}
						</span>
					);
				})}
			</p>
		</div>
	);
};

export default ArrayVar;
