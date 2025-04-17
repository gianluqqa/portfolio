import Presentation from "./views/Presentation";
import Proyects from "./views/Proyects";
import Skills from "./views/Skills";
import Certificates from "./views/Certificates";
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
