import { Briefcase } from "lucide-react";
import Section from "./Section";
import Bullets from "./Bullets";
import { EXPERIENCE } from "../data/resume";

export default function Experience() {
  return (
    <Section icon={Briefcase} title="Experience">
      {EXPERIENCE.map((entry) => (
        <article className="entry" key={entry.company}>
          <div className="entry__top">
            <div>
              <h3 className="entry__title">{entry.company}</h3>
              <p className="entry__subtitle">{entry.role}</p>
            </div>
            <div className="entry__meta">
              <span>{entry.location}</span>
              <span>{entry.period}</span>
            </div>
          </div>
          <Bullets items={entry.bullets} />
        </article>
      ))}
    </Section>
  );
}
