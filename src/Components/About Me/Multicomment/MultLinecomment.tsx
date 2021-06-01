import React, { FC, useContext } from "react";
import AppContex from "../ContextApi/ContextApi";
const MultLinecomment: FC = () => {
	const data = useContext(AppContex);
	return <div>{data.class.comment}</div>;
};

export default MultLinecomment;
