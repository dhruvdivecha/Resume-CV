import { Award } from "lucide-react";
import Section from "./Section";
import { CERTIFICATIONS } from "../data/resume";

export default function Certifications() {
  return (
    <Section icon={Award} title="Certifications">
      <ul className="certs">
        {CERTIFICATIONS.map((cert) => (
          <li key={cert.name}>
            <a
              href={`${import.meta.env.BASE_URL}${cert.file}`}
              target="_blank"
              rel="noreferrer"
              title={cert.name}
            >
              {cert.name}
            </a>
            <span className="certs__date">{cert.period}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
