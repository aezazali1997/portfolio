import React, { FC } from "react";
import { styles } from "./Return.style";
import { margins } from "../../Margin.style";
import { colors } from "../../Colors.style";
import classNames from "classnames";

type Experience = {
	experience: Values;
};
type Values = {
	company: string;
	skills: string[];
	time: string;
};
const Return: FC<Experience> = ({ experience }) => {
	const _classes = styles();
	const _colors = colors();
	const _margins = margins();

	return (
		<div className={_classes.container}>
			<span className={_colors.return}>return</span>
			<span className={_margins.marginLFTRT}>&#123;</span>
			<p>
				<span className={_colors.variable}>Company : </span>
				<span className={classNames(_margins.marginLFTRT, _colors.string)}>
					{experience.company}
				</span>
			</p>
			<p>
				<span className={_colors.variable}>Skills : </span>
				<span className={_margins.marginLFTRT}>
					[
					{experience.skills.map((skill, id) => {
						return (
							<span className={_colors.string} key={id}>
								{skill}
							</span>
						);
					})}
					]
				</span>
			</p>
			<p>
				<span className={_colors.variable}>Time : </span>
				<span className={classNames(_margins.marginLFTRT, _colors.string)}>
					{experience.time}
				</span>
			</p>
		</div>
	);
};

export default Return;
