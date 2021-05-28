import React, { FC } from "react";
import classNames from "classnames";
import { styles } from "./Class.style";
import { data } from "../data/data";
import MultLinecomment from "../Multicomment/MultLinecomment";
import Constructor from "../Constructor/Constructor";
const Class: FC = () => {
	const classes = styles();
	return (
		<div>
			{/* class comment should be in about me comp */}
			{/* before and after brackets */}
			<span>{Object.keys(data)[0]}</span>
			<span>{data["class"].name}</span>
			<MultLinecomment comment={data.class.comment} />{" "}
			{/* should use it as part of global state varialbe */}
			<Constructor data={data.class.const} />
		</div>
	);
};

export default Class;
