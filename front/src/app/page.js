import Presentation from "./components/presentation/Presentation";
import Proyects from "./components/proyects/Proyects";
import Skills from "./components/skills/Skills";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contact/FormContact";

export default function Home() {
  return (
    <div>
      <Presentation/>
      <Certificates/>
      <Skills/>
      <Proyects/>
      <Contact/>
    </div>
  );
}
