import React, { useEffect } from "react";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Cursor from "./Components/Cursor/Cursor";
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Components/About Me/AboutMe";
import ContactMe from "./Components/Contact Me/ContactMe";

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
			<AboutMe />
			<ContactMe />
		</>
	);
}

export default App;
