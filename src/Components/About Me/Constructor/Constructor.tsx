import React, { FC } from "react";
import { styles } from "./Constructor.style";
type Props = {
	data: {
		name: string;
		variables: IConVariables;
	};
};
type IConVariables = {
	age: string;
	birthDay: string;
	hobby: string;
	personality: string;
}; // one comp shoudl have one type or interface
// should include react.FC in with classComp
const Constructor: FC<Props> = ({ data }) => {
	const classes = styles();
	let arrKeys = Object.keys(data.variables);
	let arrValues = Object.values(data.variables);
	return (
		<div className={classes.const}>
			<span>{data.name}</span>
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
