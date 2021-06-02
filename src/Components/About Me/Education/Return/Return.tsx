import React, { FC } from "react";
import { styles } from "./Return.style";
import { margins } from "../../Margin.style";
import { colors } from "../../Colors.style";
import classNames from "classnames";

type Education = {
	education: Values;
};
type Values = {
	university: string;
	degree: string;
	city: string;
	started: string;
	graduated: string;
};

const Return: FC<Education> = ({ education }) => {
	const _colors = colors();
	const _classes = styles();
	const _margins = margins();

	const keys = Object.keys(education);

	return (
		<div className={_classes.container}>
			<span className={_colors.return}>return</span>
			<span className={_margins.marginLFTRT}>&#123;</span>
			{keys.map((key, id) => {
				return (
					<p key={id}>
						<span className={classNames(_colors.variable, _classes.capitalize)}>
							{key} :
						</span>
						<span className={classNames(_margins.marginLFTRT, _colors.string)}>
							{Object.values(education)[id]}
						</span>
					</p>
				);
			})}
		</div>
	);
};

export default Return;
