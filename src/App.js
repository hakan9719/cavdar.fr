import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import LandPage from "./components/LandPage";
import Projects from "./components/Projects";
// import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="main">
      {/* <Header/> */}
      <LandPage/>
      {/* <Services/> */}
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
