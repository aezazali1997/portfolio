import React, { useEffect } from "react";
import AboutMe from "./Components/About Me/AboutMe";
import Home from "./Components/Home/Home";
import Work from "./Components/Work/Work";
import Services from "./Components/Services/Services";
import ContactMe from "./Components/Contact Me/ContactMe";
import Cursor from "./Components/Cursor/Cursor";
import Navbar from "./Components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";

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
      <Switch>
        <Route path="/work" component={Work} />
        <Route path="/services" component={Services} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/contact-me" component={ContactMe} />
          <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
