import { BadgeCheck, Award as AwardIcon, Users } from "lucide-react";

const CERTS = [
  {
    name: "PMP Certification",
    issuer: "PMI — in progress",
    date: "Expected 2026",
  },
  {
    name: "Project Management: Preventing Scope Creep",
    issuer: "LinkedIn Learning · PMI Registered Education Provider",
    date: "Jan 2025",
  },
  {
    name: "Requirements Elicitation for Business Analysis: Stakeholder Conversations",
    issuer: "LinkedIn Learning · IIBA® / PMI®",
    date: "Jan 2025",
  },
  {
    name: "Generative AI Overview for Project Managers",
    issuer: "Project Management Institute (PMI)",
    date: "Mar 2025",
  },
  {
    name: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Tata × Forage — Job Simulation",
    date: "Mar 2025",
  },
  {
    name: "Lean Six Sigma White Belt",
    issuer: "Council for Six Sigma Certification (CSSC)",
    date: "Aug 2026",
  },
];

const LEADERSHIP = [
  "Member, Northeastern University Project Management Club — PM workshops, industry events, peer networking",
  "Supported youth development and BIPOC entrepreneurship programs across Boston during a co-op at MadeINcubator",
];

const AWARDS = [
  {
    name: "GAC Scholarship — $3,000 USD",
    issuer: "Global Accreditation Center for Project Management Education Programs (PMI)",
    date: "Jul 2026",
  },
  {
    name: "Most Valued Player Award",
    issuer: "Amazon's Trustworthy Shopping Experience (TSE)",
    date: "Apr 2024",
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="relative px-6 py-24 border-t border-line bg-paperRaised/40">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-mono text-brand">05</span>
        <h2 className="font-display text-3xl text-ink mt-2 mb-10 font-semibold">
          Credentials
        </h2>

        <h3 className="text-xs font-mono text-inkMute uppercase tracking-wide mb-4">
          Certifications
        </h3>
        <div className="grid sm:grid-cols-2 gap-3 mb-12">
          {CERTS.map((cert) => (
            <div key={cert.name} className="card card-hover px-4 py-3.5 flex gap-3">
              <BadgeCheck className="text-brand shrink-0 mt-0.5" size={18} />
              <div>
                <div className="text-ink text-sm font-medium">{cert.name}</div>
                <div className="text-inkMute text-xs">{cert.issuer}</div>
                <div className="text-inkMute text-[11px] mt-0.5 font-mono">{cert.date}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xs font-mono text-inkMute uppercase tracking-wide mb-4">
          Leadership &amp; involvement
        </h3>
        <div className="space-y-2.5 mb-12">
          {LEADERSHIP.map((item) => (
            <div key={item} className="card px-4 py-3 flex gap-3">
              <Users className="text-pmo shrink-0 mt-0.5" size={16} />
              <span className="text-inkSoft text-sm">{item}</span>
            </div>
          ))}
        </div>

        <h3 className="text-xs font-mono text-inkMute uppercase tracking-wide mb-4">
          Awards &amp; recognition
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {AWARDS.map((award) => (
            <div key={award.name} className="card card-hover px-4 py-3.5 flex gap-3">
              <AwardIcon className="text-award shrink-0 mt-0.5" size={18} />
              <div>
                <div className="text-ink text-sm font-medium">{award.name}</div>
                <div className="text-inkMute text-xs">{award.issuer}</div>
                <div className="text-inkMute text-[11px] mt-0.5 font-mono">{award.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
