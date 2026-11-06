import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return <div id="top"><Navigation /><main id="main"><Hero /><Work /><About /><Contact /></main><Footer /></div>;
}
