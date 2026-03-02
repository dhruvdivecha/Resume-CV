import AboutContent from "./AboutContent";
import SkillsContent from "./SkillsContent";
import ExperienceContent from "./ExperienceContent";
import ProjectsContent from "./ProjectsContent";
import EducationContent from "./EducationContent";
import CertsContent from "./CertsContent";

export default function SectionContent({ id, onOpenPdf }) {
  switch (id) {
    case "about":
      return <AboutContent />;
    case "skills":
      return <SkillsContent />;
    case "experience":
      return <ExperienceContent />;
    case "projects":
      return <ProjectsContent />;
    case "education":
      return <EducationContent />;
    case "certs":
      return <CertsContent onOpenPdf={onOpenPdf} />;
    default:
      return null;
  }
}
