import React, { useLayoutEffect, useRef } from "react";
import { styles } from "./Cursor.style";
const Cursor = () => {
	const point = useRef<HTMLDivElement>(null);
	useLayoutEffect(() => {
		let pointed = point.current?.clientWidth || 0;
		window.addEventListener("mousemove", (e: MouseEvent) => {
			const { pageX, pageY } = e;
			const mouseX = pageX - pointed / 2;
			const mouseY = pageY - pointed / 2;
			if (point.current?.style) {
				point.current.style.top = `${mouseY}px`;
				point.current.style.left = `${mouseX}px`;
			}
		});
	}, []);

	const classes = styles();
	return <div ref={point} className={classes.OuterCursor}></div>;
};
export default Cursor;
