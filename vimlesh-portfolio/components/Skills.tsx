const CATEGORIES = [
  {
    label: "PM skills",
    items: [
      "Scope management",
      "Schedule & timeline planning",
      "Budget preparation & cost tracking",
      "Risk identification & mitigation",
      "Stakeholder management",
      "Resource allocation",
      "Change management",
      "Post-project evaluation",
    ],
  },
  {
    label: "Tools & technology",
    items: [
      "MS Project",
      "Asana",
      "Smartsheet",
      "Jira",
      "AutoCAD",
      "MS Office Suite",
      "Primavera",
    ],
  },
  {
    label: "Data & analytics",
    items: [
      "Power BI",
      "Tableau",
      "Excel (PivotTables & advanced charts)",
      "KPI development & tracking",
      "Root cause analysis",
      "Forecasting & trend analysis",
    ],
  },
  {
    label: "Leadership & soft skills",
    items: [
      "Team leadership",
      "Decision making",
      "Conflict resolution",
      "Accountability",
      "Communication",
      "Negotiation",
      "Problem solving",
      "Strategic thinking",
      "Collaboration",
      "Adaptability",
      "Critical thinking",
      "Emotional intelligence",
      "Relationship building",
      "Presentation & public speaking",
    ],
  },
];

export default function Skills() {
  return (
    <section id="systems" className="relative px-6 py-24 border-t border-line">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-mono text-brand">06</span>
        <h2 className="font-display text-3xl text-ink mt-2 mb-10 font-semibold">
          Skills
        </h2>

        <div className="space-y-9">
          {CATEGORIES.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-xs font-mono text-inkMute uppercase tracking-wide mb-3">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-inkSoft bg-paperRaised border border-line px-3 py-1.5 rounded-full hover:border-brand/40 hover:text-brand transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
