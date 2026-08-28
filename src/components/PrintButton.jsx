import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      type="button"
      className="print-button"
      onClick={() => window.print()}
    >
      <Printer size={15} strokeWidth={2} aria-hidden="true" />
      Save as PDF
    </button>
  );
}
