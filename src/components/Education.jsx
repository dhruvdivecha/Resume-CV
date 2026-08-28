import { GraduationCap } from "lucide-react";
import Section from "./Section";
import { EDUCATION } from "../data/resume";

export default function Education() {
  return (
    <Section icon={GraduationCap} title="Education">
      {EDUCATION.map((entry) => (
        <article className="entry" key={entry.school}>
          <div className="entry__top">
            <div>
              <h3 className="entry__title">{entry.school}</h3>
              <p className="entry__subtitle">{entry.degree}</p>
              {entry.degreeSecondary && (
                <p className="entry__subtitle">{entry.degreeSecondary}</p>
              )}
            </div>
            <div className="entry__meta">
              <span>{entry.location}</span>
              {entry.periods.map((period) => (
                <span key={period}>{period}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </Section>
  );
}
