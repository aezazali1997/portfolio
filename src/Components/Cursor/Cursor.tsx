import React, { useContext, useLayoutEffect, useRef } from "react";
import { styles } from "./Cursor.style";
import { HoverContext } from "../../App";

const Cursor = () => {
	const value = useContext(HoverContext);
	const point = useRef<HTMLDivElement>(null);
	useLayoutEffect(() => {
		let pointed = point.current?.clientWidth || 0;
		window.addEventListener("mousemove", (e: MouseEvent) => {
			const { clientX, clientY } = e;
			const ElementeMouseover = document.elementFromPoint(clientX, clientY);
			console.log();
			let tag = ElementeMouseover?.tagName;
			const { pageX, pageY } = e;
			const mouseX = pageX - pointed / 2;
			const mouseY = pageY - pointed / 2;
			if (point.current?.style) {
				if (tag === "A" || tag === "BUTTON" || tag === "svg" || tag === "UL") {
					point.current.style.display = "none";
				} else {
					point.current.style.display = "table";
					/* point.current.style.top = `${mouseY}px`; */
					/* point.current.style.left = `${mouseX}px`; */
				}
			}
		});
	}, []);

	const classes = styles();
	return <div ref={point} className={classes.OuterCursor}></div>;
};
export default Cursor;
