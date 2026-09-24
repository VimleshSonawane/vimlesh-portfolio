const CATEGORIES = [
  {
    label: "Project management",
    items: [
      "Project planning",
      "Project coordination",
      "Stakeholder management",
      "Risk management",
      "Agile methodologies",
      "PMO operations",
      "Resource coordination",
      "Event management",
    ],
  },
  {
    label: "Software & analytics",
    items: [
      "Microsoft Project",
      "Smartsheet",
      "Jira",
      "Asana",
      "Google Workspace",
      "Tableau",
      "Power BI",
      "R",
      "Python",
      "SQL",
      "SharePoint",
      "ServiceNow",
    ],
  },
  {
    label: "Working style",
    items: [
      "Team leadership",
      "Cross-functional coordination",
      "Problem-solving",
      "Conflict management",
      "Attention to detail",
      "Adaptability",
    ],
  },
];

const CERTS = [
  "Google Project Management Certificate",
  "Jira Certification",
  "Tableau Certification",
  "Power BI Certification",
  "Lean Six Sigma Certification",
];

export default function Skills() {
  return (
    <section id="systems" className="relative px-6 py-28 border-t border-line hud-grid">
      <div className="max-w-4xl mx-auto">
        <span className="font-mono text-xs text-signal">SEC.04</span>
        <h2 className="font-display text-3xl text-white mt-2 mb-12">
          Systems
        </h2>

        <div className="space-y-10">
          {CATEGORIES.map((cat) => (
            <div key={cat.label}>
              <h3 className="font-mono text-xs text-mistDim mb-4">
                {cat.label.toUpperCase()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs text-mist border border-line px-3 py-1.5 hover:border-signalDim hover:text-signal transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="font-mono text-xs text-mistDim mb-4">
            CREDENTIALS
          </h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {CERTS.map((cert) => (
              <span
                key={cert}
                className="font-mono text-xs text-mist border border-line px-3 py-1.5"
              >
                {cert}
              </span>
            ))}
          </div>
          <div className="inline-block font-mono text-[10px] text-amber border border-amber/40 px-2 py-1">
            ⚠ Confirm exact certification names, issuers, and completion dates
          </div>
        </div>
      </div>
    </section>
  );
}
