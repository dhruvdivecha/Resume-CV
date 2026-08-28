import { Fragment } from "react";
import { Code2 } from "lucide-react";
import Section from "./Section";
import { SKILLS } from "../data/resume";

export default function Skills() {
  return (
    <Section icon={Code2} title="Technical Skills">
      <div className="skills">
        {SKILLS.map((group) => (
          <Fragment key={group.label}>
            <div className="skills__label">{group.label}</div>
            <div className="skills__items">{group.items.join(" · ")}</div>
          </Fragment>
        ))}
      </div>
    </Section>
  );
}
