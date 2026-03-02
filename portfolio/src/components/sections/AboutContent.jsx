import { Mail, Phone, Github, Linkedin, Shield, ChevronRight } from "lucide-react";
import { PROFILE, LEADERSHIP } from "../../data/portfolio";

export default function AboutContent() {
  const links = [
    { icon: Mail, text: PROFILE.email, href: "mailto:" + PROFILE.email },
    { icon: Phone, text: PROFILE.phone, href: "tel:" + PROFILE.phone },
    { icon: Github, text: "github.com/dhruvdivecha", href: PROFILE.github },
    { icon: Linkedin, text: "LinkedIn Profile", href: PROFILE.linkedin },
  ];

  return (
    <div className="space-y-5 font-sans">
      {/* Avatar + name */}
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-lg shadow-purple-500/20">
          DD
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">{PROFILE.name}</h2>
          <p className="text-purple-300 text-sm mt-0.5">{PROFILE.title}</p>
          <p className="text-white/50 text-xs mt-1">{PROFILE.location}</p>
        </div>
      </div>

      <p className="text-white/70 text-sm leading-relaxed">
        Passionate Computer Science student at the University of Dar-es-Salaam
        with hands-on experience building full-stack web applications. From
        real-time restaurant management systems to classroom management
        platforms with role-based access control {"\u2014"} I love turning ideas
        into polished, functional software.
      </p>

      {/* Contact links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map(({ icon: Icon, text, href }) => (
          <a
            key={text}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 transition-all group"
          >
            <Icon className="w-4 h-4 text-purple-400 group-hover:text-purple-300 shrink-0" />
            <span className="text-white/70 text-xs group-hover:text-white/90 truncate">
              {text}
            </span>
          </a>
        ))}
      </div>

      {/* Leadership */}
      <div className="pt-3 border-t border-white/5">
        <h3 className="text-sm font-semibold text-white/80 mb-2 flex items-center gap-2">
          <Shield className="w-4 h-4 text-amber-400" />
          Leadership & Activities
        </h3>
        <ul className="space-y-1.5">
          {LEADERSHIP.map((item, i) => (
            <li
              key={i}
              className="text-white/60 text-xs flex items-start gap-2"
            >
              <ChevronRight className="w-3 h-3 text-purple-400 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
