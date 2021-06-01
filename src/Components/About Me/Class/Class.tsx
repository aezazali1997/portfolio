import React, { FC, useContext } from "react";
import { styles } from "./Class.style";
import MultLinecomment from "../Multicomment/MultLinecomment";
import Constructor from "../Constructor/Constructor";
import AppContex from "../ContextApi/ContextApi";
import Methods from "../Methods/Methods";
const Class: FC = () => {
	const classes = styles();
	const data = useContext(AppContex);
	return (
		<div className={classes.class}>
			<span className={classes.classKeyword}>{Object.keys(data)[0]}</span>
			<span className={classes.name}>{data.class.name}</span>
			<MultLinecomment />
			<Constructor />
			<Methods />
		</div>
	);
};

export default Class;
