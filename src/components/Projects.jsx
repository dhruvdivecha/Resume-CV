import { FolderGit2, ExternalLink } from "lucide-react";
import Section from "./Section";
import Bullets from "./Bullets";
import TechChips from "./TechChips";
import { PROJECT_GROUPS } from "../data/resume";

function Project({ project }) {
  return (
    <article className="entry">
      <h3 className="entry__title">{project.name}</h3>
      {project.note && <p className="entry__note">{project.note}</p>}
      {project.summary && <p className="entry__summary">{project.summary}</p>}

      <Bullets items={project.bullets} />
      <TechChips items={project.tech} />

      {project.links?.length > 0 && (
        <div className="links">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
              <ExternalLink size={12} strokeWidth={2} aria-hidden="true" />
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <Section icon={FolderGit2} title="Projects">
      {PROJECT_GROUPS.map((group) => (
        <div key={group.id}>
          <h3 className="subheading">{group.title}</h3>
          {group.projects.map((project) => (
            <Project project={project} key={project.name} />
          ))}
        </div>
      ))}
    </Section>
  );
}
