import React from "react";
import { styles } from "./Line.style";
type IProps = {
	lineNum: Number;
	data: string;
};
const Line = ({ lineNum, data }: IProps) => {
	let word: string = "";
	//let totalSpaces = newData.length - newData.replace(/\s/g, "").length;
	for (let i = 0; i < data.length; i++) {
		if (!(data[i] === " ")) {
			word += data[i];
		}
	}
	const classes = styles();
	return (
		<div>
			<div data-line-nmbr={lineNum}>
				<span>{data}</span>
			</div>
		</div>
	);
};

export default Line;
