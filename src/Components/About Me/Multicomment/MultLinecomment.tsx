import React, { FC } from "react";
type Props = {
	comment: string;
};
const MultLinecomment: FC<Props> = ({ comment }) => {
	return <div>{comment}</div>;
};

export default MultLinecomment;
