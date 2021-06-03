import React, { useEffect, createContext } from "react";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Cursor from "./Components/Cursor/Cursor";
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Components/About Me/AboutMe";
import ContactMe from "./Components/Contact Me/ContactMe";

export const HoverContext = createContext(false);

function App() {
	return (
		<HoverContext.Provider value={false}>
			<div>
				<Cursor />
				<Navbar />
				<Home />
				<Services />
				<AboutMe />
				<ContactMe />
			</div>
		</HoverContext.Provider>
	);
}

export default App;
