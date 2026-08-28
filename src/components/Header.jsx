import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { PROFILE } from "../data/resume";

const ICON = { size: 13, strokeWidth: 2 };

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__name">{PROFILE.name}</h1>
      <p className="header__title">{PROFILE.title}</p>

      <div className="header__contact">
        <span className="header__contact-item">
          <MapPin {...ICON} aria-hidden="true" />
          {PROFILE.location}
        </span>

        <span className="header__contact-item">
          <Mail {...ICON} aria-hidden="true" />
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        </span>

        <span className="header__contact-item">
          <Phone {...ICON} aria-hidden="true" />
          <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>{PROFILE.phone}</a>
        </span>

        <span className="header__contact-item">
          <Linkedin {...ICON} aria-hidden="true" />
          <a href={PROFILE.linkedin.href} target="_blank" rel="noreferrer">
            {PROFILE.linkedin.label}
          </a>
        </span>

        <span className="header__contact-item">
          <Github {...ICON} aria-hidden="true" />
          <a href={PROFILE.github.href} target="_blank" rel="noreferrer">
            {PROFILE.github.label}
          </a>
        </span>
      </div>
    </header>
  );
}
