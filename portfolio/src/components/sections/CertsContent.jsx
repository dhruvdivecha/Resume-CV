import { Award, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "../../data/portfolio";

export default function CertsContent({ onOpenPdf }) {
  return (
    <div className="space-y-4 font-sans">
      <div className="font-mono text-xs text-green-400/70 mb-2">
        <span className="text-white/40">$</span> ls ~/certifications/
      </div>

      {CERTIFICATIONS.map((cert, i) => (
        <button
          key={i}
          onClick={() => onOpenPdf(cert)}
          className="w-full flex items-start gap-3 px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all text-left group"
        >
          <Award className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="text-white/80 text-xs font-medium group-hover:text-amber-300 transition-colors">
              {cert.name}
            </p>
            <p className="text-white/40 text-[10px] font-mono mt-0.5">
              {cert.period}
            </p>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-amber-400 mt-0.5 shrink-0 transition-colors" />
        </button>
      ))}

      <p className="text-white/30 text-[10px] font-mono pt-2 border-t border-white/5">
        Click a certificate to view it, or type{" "}
        <span className="text-green-400/60">open &lt;slug&gt;</span> in the
        terminal.
      </p>
    </div>
  );
}
