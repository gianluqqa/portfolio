import Contact from "@/components/contact/FormContact";
import Certificados from "@/views/Certificates";
import Experiences from "@/views/Experiences";
import Presentation from "@/views/Presentation";
import Projects from "@/views/Proyects";
import Skills from "@/views/Skills";


export default function Home() {
  return (
    <div>
      <Presentation />
      <Certificados />
      <Experiences />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  );
}
