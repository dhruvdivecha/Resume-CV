import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import PrintButton from "./components/PrintButton";

export default function App() {
  return (
    <>
      <main className="sheet">
        <Header />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
      </main>
      <PrintButton />
    </>
  );
}
