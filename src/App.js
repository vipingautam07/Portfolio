import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <div className="App">
        <Analytics />
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
