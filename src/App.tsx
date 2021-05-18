import React, { useEffect } from "react";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Cursor from "./Components/Cursor/Cursor";
import Navbar from "./Components/Navbar/Navbar";

function App() {
	let xCord: number;
	let yCord: number;
	window.addEventListener("mousemove", (e: MouseEvent) => {
		xCord = e.pageX;
		yCord = e.pageY;
	});
	useEffect(() => {}, []);
	return (
		<>
			<Cursor />
			<Navbar />
			<Home />
			<Services />
		</>
	);
}

export default App;
