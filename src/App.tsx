import React, { useEffect, createContext } from "react";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Cursor from "./Components/Cursor/Cursor";
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Components/About Me/AboutMe";
import ContactMe from "./Components/Contact Me/ContactMe";
type MouseOverContext = {
	value: boolean;
};
const initialValue: MouseOverContext = {
	value: false,
};
export const HoverContext = createContext<MouseOverContext>(initialValue);

function App() {
	return (
		<HoverContext.Provider value={{ value: false }}>
			<Cursor />
			<Navbar />
			<Home />
			<Services />
			<AboutMe />
			<ContactMe />
		</HoverContext.Provider>
	);
}

export default App;
