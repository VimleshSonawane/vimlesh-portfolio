"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  KanbanSquare,
  BarChart3,
  HardHat,
  FileText,
  X,
  ExternalLink,
  ImagePlus,
  ClipboardList,
  LucideIcon,
} from "lucide-react";
import { CategoryTag, Category } from "./CategoryTag";

type Project = {
  id: string;
  title: string;
  org: string;
  category: Category;
  meta?: string;
  summary: string;
  highlights?: string[];
  details: string;
  image?: string;
  link?: { label: string; url: string };
  flag?: string;
};

const PROJECTS: Project[] = [
  {
    id: "care-connect",
    title: "Care Connect — home healthcare platform",
    org: "Team 6, PJM6810 · Northeastern University",
    category: "pmo",
    meta: "3 sprints delivered",
    summary:
      "Planned and executed a home healthcare platform end-to-end across three real Scrum sprints in Jira.",
    details:
      "Full-semester Scrum simulation: defined the product vision for Care Connect (medication reminders, telehealth, appointment scheduling for remote and mobility-impaired patients), built a 3-sprint roadmap and release plan, then ran it as a live Jira backlog with detailed user stories, acceptance criteria, and story-point estimates — e.g. the Home Page story (3 points) specified a functional drop-down menu and an accessible welcome video down to load-time and subtitle requirements. Rotated Scrum Master, QA, and Scribe roles weekly, and tracked team confidence through retrospectives each sprint — rising from 6/10 in Sprint 1 to 8/10 by Sprint 3 as task breakdown and prioritization improved.",
    link: {
      label: "View Jira board",
      url: "https://xiangzhuang.atlassian.net/jira/software/projects/CC/boards/5/backlog",
    },
  },
  {
    id: "redeye",
    title: "RedEye Shuttle Service — business analysis",
    org: "Group 4, PJM 6610 · Northeastern University",
    category: "business",
    meta: "n=17 survey · 8 functional reqs",
    summary:
      "Closed a safety-critical transparency gap in Northeastern's on-demand shuttle service using BABOK-aligned elicitation and requirements engineering.",
    details:
      "RedEye promises safety-focused transport but books rides to an exact address while actually dropping riders at a separate point — with no walking distance shown before confirmation. Ran a mixed-method elicitation plan (interviews, a REDCap survey, journey mapping, social-listening, and document analysis against official policy) to quantify the gap: of respondents, 67% had expected door-to-door service, and 100% of active users had both been surprised by the walking distance and felt unsafe during that walk at least once. Translated the findings into 8 prioritized functional and 10 non-functional requirements in user-story format with acceptance criteria (e.g. FR-001: walking distance must display automatically, in real time, before any booking can proceed), scored with a weighted MoSCoW model, and traced every requirement back to its supporting survey evidence and business objective.",
    flag: "Add a link if you publish the write-up publicly (source doc is on a restricted SharePoint)",
  },
  {
    id: "contact-center",
    title: "Contact Center Case Study — communications plan",
    org: "Group 3, PJM 6210 · Northeastern University",
    category: "pmo",
    meta: "818 calls piloted",
    summary:
      "Stakeholder register, communications plan, and status reporting for a contact-center pilot rollout.",
    details:
      "Built a Power-Interest stakeholder register and brainstorm map, then a full communications plan (communication matrix, meeting and presentation guidelines, report templates) for a Contact Center Store Support Test & Implementation project. Tracked delivery through a status report during the pilot: 818 calls handled (58% resolved at Level 1, 42% at Level 2 — a touch above the 60/40 target split), against roughly 2,438 calls received weekly, with 50 unanswered and 254 misdirected calls flagging agent training and phone-number unification as the two priority fixes. Project held Green status at 30% complete, $12K spent of a $25K budget.",
  },
  {
    id: "ai-equipment-install",
    title: "AI-Powered Equipment Installation — Mahindra",
    org: "Team Vanguard, PJM 5900 · Northeastern University",
    category: "pmo",
    meta: "$6M · 12-month plan",
    image: "/projects/mahindra-timeline.png",
    summary:
      "Full project-lifecycle simulation — charter, work breakdown structure, and status reporting for a $6M AI equipment rollout.",
    details:
      "Case-study client Mahindra Engineering Solutions needed to install AI-powered equipment across its Chennai manufacturing lines to cut downtime and lift productivity. Wrote the project charter (sponsor, scope, inclusions/exclusions), then decomposed the work into a 4-level WBS down to individual work packages with time and resource estimates — e.g. AI Model Development (4 weeks, AI developers) and Hardware Design (3 weeks, hardware engineers). Ran it under a hybrid Agile/Waterfall methodology: Waterfall for planning and execution phases, Agile for iterative testing and staff training. Built out a stakeholder analysis (executive management, project team, operational staff, IT, AI vendors, customers) and a risk register covering operational disruption, cost overruns, employee resistance, and technical failure, each with a mitigation. Tracked the $6M, 12-month plan (June 2024–May 2025) through 6 milestones and a status report spanning planning, procurement, installation, AI-model training, and trial runs.",
  },
  {
    id: "wearable-safety",
    title: "Wearable Safety Device for Women — team & technical strategy",
    org: "PJM 6205 · Northeastern University",
    category: "pmo",
    meta: "$1.5M · 15 FTE · 1-year plan",
    summary:
      "Designed the team structure and technical case for an IoT/GPS wearable safety device, motivated by real gaps in existing safety tools.",
    details:
      "Two-part analysis for a proposed wearable safety device for women, integrating GPS, IoT, AI-driven threat detection, a panic button, and geofencing alerts — motivated by real incidents (including the 2012 Nirbhaya case) that exposed how reactive tools like pepper spray fail when protection is needed most. Planned a $1.5M, 15-FTE, one-year build across a five-phase lifecycle (initiation, design, development, QA, deployment), covering team structure, market research against existing safety products, and early risk identification (technical, adoption, privacy, regulatory). A companion technical analysis examined what makes the project genuinely technical — hardware/software/cloud integration, biometric authentication, data security and privacy, and the interdisciplinary and ethical challenges of building a safety-critical consumer device.",
  },
  {
    id: "acme-medical",
    title: "Acme Medical Imaging — process & leadership turnaround",
    org: "Team Delta Dynamos, PJM 6205 · Northeastern University",
    category: "pmo",
    meta: "Ivey business case",
    summary:
      "Consulting-style case analysis diagnosing product-development and leadership gaps at a medical-imaging manufacturer.",
    details:
      "Analyzed the Ivey Business School 'Acme Medical Imaging' case — a maker of advanced imaging systems competing against Philips, Siemens, and GE — and diagnosed three root problems: no structured development process, leadership micromanagement, and an unstable supply chain. Proposed a Phase-Gate product development model, supply-chain optimization, and leadership realignment, backed by a phased implementation plan. Named specific risks (resistance to process change, supplier-negotiation delays, leadership adaptability), each paired with a mitigation, and projected faster time-to-market, lower production costs, and stronger cross-team collaboration as outcomes.",
  },
  {
    id: "brightsource-quality",
    title: "BrightSource CSP — Project Quality Management Plan",
    org: "Group 3, PJM 6135 · Northeastern University",
    category: "pmo",
    meta: "House of Quality matrix",
    summary:
      "Full Quality Management Plan for a concentrated solar power project, anchored by a House of Quality (QFD) matrix.",
    details:
      "Case-study client BrightSource Energy (modeled on the real Ivanpah Solar Electric Generating System) needed a Project Quality Management Plan for a Concentrated Solar Power build. Built a House of Quality matrix translating 10 weighted customer requirements — environmental protection, clean energy production, wildlife preservation, and regulatory compliance all rated highest importance — into measurable technical specifications like acres disturbed, tortoise mortality, CO₂ reduction, capacity factor, and cost per megawatt, complete with a relationship matrix and technical importance scoring. Rounded out with a quality commitment statement, quality metrics, a quality improvement plan, and formal quality assurance and control sections.",
  },
  {
    id: "spc-simulation",
    title: "Production Quality Simulation — SPC & Cost of Quality",
    org: "Group 3, PJM 6135 · Northeastern University",
    category: "analytics",
    meta: "4 processes · $2,713 COQ",
    image: "/projects/spc-control-charts.jpg",
    summary:
      "Simulated a production line to test statistical process control — control charts, process capability, and total cost of quality.",
    details:
      "Ran a production-quality simulation to see how process adjustments affect defects and cost. Built X̄ and R control charts (UCL 34.48 / LCL 24.98 for the mean; UCL 15.44 for range) that flagged one out-of-control point, triggering 7 equipment recalibrations and 5 shift changes at a total Cost of Quality of $2,712.70 against 356 units shipped. Ran a process-capability analysis (Cpk) across four production processes against a 1.25 capability threshold, splitting them into capable and incapable groups to inform where to prioritize prevention and appraisal spending over reactive fixes.",
  },
  {
    id: "costco-expansion",
    title: "Costco Expansion — scheduling & cost plan",
    org: "Team D, PJM 6025 · Northeastern University",
    category: "construction",
    meta: "$11.98M · 1,088-day path",
    image: "/projects/costco-cost-breakdown.jpg",
    summary:
      "Full lifecycle schedule and cost baseline for a new Costco warehouse — from land acquisition to grand opening.",
    details:
      "Built the complete WBS, schedule, and cost plan for a case-study Costco warehouse build, covering the full lifecycle from site acquisition through grand opening across a 1,088-day, predominantly sequential critical path (July 2026 charter approval to September 2030 closeout). Set an $11.98M cost baseline — 53% to construction, plus a $2.2M contingency reserve — and built the resource plan across management, construction, systems, and support roles, deliberately overallocating a few coordination-heavy roles (PM, financial analyst, safety inspector) with documented justification rather than leaving it as an unexplained scheduling conflict. Built a risk register tying each major risk (permit delays, resource overlap, material cost escalation) to a specific budget line or schedule buffer, and ran a simulated Earned Value Analysis showing early cost inefficiency (CPI 0.92 — only $0.92 of value earned per dollar spent) and a minor schedule slip (SPI < 1.0), flagging exactly where the team would need to rebalance budget or accelerate activities to protect the baseline.",
  },
  {
    id: "engine-scope",
    title: "Next-Gen Fuel-Efficient Engine — scope management",
    org: "Group 2, PJM 6005 · Northeastern University",
    category: "pmo",
    meta: "$10M · 100% rule WBS",
    summary:
      "Full scope package for a next-gen engine program — statement, WBS with cost/time estimates, and a formal change-control process.",
    details:
      "Case-study client AutoParts Innovators needed to design a next-generation engine with a 20% fuel-efficiency gain, AI-driven diagnostics, and emissions compliance across the US, Europe, and Asia, on a $10M first-phase budget and a 6-month prototype timeline. Wrote the full scope statement — MoSCoW-prioritized requirements, explicit exclusions, and a 5-item risk register scored by likelihood and impact — then decomposed the work into a WBS adhering to the 100% rule, down to work packages with rough-order-of-magnitude cost and time estimates (e.g. 3D Engine Model Development: $120,000, 4 months). Surfaced three real tradeoffs for the sponsor to weigh explicitly — cost vs. performance, schedule vs. testing rigor, and scope vs. stakeholder expectations — rather than deciding them unilaterally, and closed with a formal scope change-control process requiring every change request to state its impact on scope, cost, schedule, and quality before approval.",
  },
  {
    id: "hydroponic-risk",
    title: "Sustainable Hydroponic Farming System — risk management",
    org: "Group 5, PJM 6015 · Northeastern University",
    category: "pmo",
    meta: "$10M · Risk Manager role",
    summary:
      "Full risk management plan for a $10M urban hydroponic farming system — served as the team's Risk Manager.",
    details:
      "Case-study client Priva B.V. (a Dutch agri-tech company) commissioned a scalable, modular hydroponic farming system for urban deployment: 90% water/nutrient efficiency versus traditional farming, ISO 14001 compliance, and an 85%+ pilot customer satisfaction score, on a $10M budget by December 2026. Served as the team's designated Risk Manager, owning the risk register and Expected Monetary Value (EMV) analysis. Built a full Risk Management Plan aligned to PMBOK and ISO 31000, with a probability-impact scoring model (risk score = likelihood × impact) and EMV costing on every register entry. Personally identified and owned two risks: a nutrient-delivery calibration failure (EMV $10,500 — mitigated with fail-safes and real-time dosing alerts) and a procurement cost-saving opportunity from early supplier negotiation (EMV $40,000 — captured by renegotiating contracts toward local sourcing). The plan also mapped risk governance roles, response strategies across mitigate/exploit/enhance/avoid/accept/transfer, and a biweekly-to-quarterly reporting cadence tying risk monitoring directly to project milestones.",
  },
  {
    id: "real-estate",
    title: "Residential construction, Pune",
    org: "Evolution Properties · Co-founded",
    category: "construction",
    meta: "2 completed builds",
    summary:
      "Co-founded and delivered 2 residential construction projects from initiation through handover.",
    details:
      "Co-founded and delivered 2 residential construction projects in Pune, managing contractor coordination, procurement, and milestone tracking while advocating for cost-effective, affordable housing. Integrated sustainable, eco-friendly materials that reduced costs while maintaining structural quality, and closed both builds with zero scope deviation.",
    flag: "Add project names/addresses or photos if you'd like more specificity",
  },
  {
    id: "aly6010",
    title: "Probability Theory & Statistics coursework",
    org: "ALY 6010 · Northeastern University",
    category: "analytics",
    meta: "n=705 · R²  up to 0.89",
    summary:
      "Hypothesis testing and regression in R — culminating in a final study linking social media addiction to student mental health and sleep.",
    image: "/projects/aly6010-r2-chart.png",
    highlights: [
      "Final project (n=705 students): social media addiction explains 89% of the variance in mental health scores and 58% in sleep hours",
      "NYC crash regression (100K records): vehicle count and crash hour were significant predictors — reported R² of 0.018 honestly rather than oversold",
      "Maryland labor data (152 months): actual employment ran below the assumed 65% benchmark, and high unemployment was far more common than assumed",
      "DC crime (29,288 incidents) and NYC restaurant inspections (5 boroughs): both used regression to separate real drivers from surface-level patterns",
    ],
    details:
      "Final project: surveyed 705 students (18–24) to test whether daily social media use predicts addiction, and whether addiction affects mental health and sleep. Daily usage hours strongly predicted addiction score (r = 0.83, R² = 0.69, p < 0.001) — each extra hour of use corresponded to roughly a 1-point rise in addiction score. Addiction was even more strongly linked to worse mental health (r = -0.95, R² = 0.89, p < 0.001) and to less sleep (r = -0.76, R² = 0.58, p < 0.001), with each point of addiction costing about half an hour of sleep per night. A follow-up round of t-tests on the same dataset added: students who felt social media hurt their grades scored far higher on addiction (7.46 vs. 4.60, p < 0.0001); students slept less than the recommended 7 hours on average (6.87 hrs, p = 0.001); but — reported honestly rather than cherry-picked — there was no statistically significant difference in addiction scores between male and female students (p = 0.19), despite a slightly higher average for men. Module 5: correlation and multiple regression on 100,000 NYPD-reported motor vehicle collisions from NYC Open Data, testing vehicle count, crash hour, borough, and ZIP code against injury counts. Vehicle count was the strongest, most significant predictor of injuries, with crash hour also significant — pointing to traffic density and driver fatigue as likely drivers — while borough and ZIP code had only minor effects, and the model's low R² (0.018) was interpreted honestly as typical for messy, real-world urban data rather than overstated. Module 6: dummy-variable and subset regression on NYC DOHMH restaurant inspection records across all five boroughs. A borough-level regression (using the Bronx as reference, average score 23.14) found Queens and Brooklyn scored significantly higher — more or worse violations — while Staten Island scored lower, though borough alone explained only a small share of the variation. Splitting the data into five borough-specific regressions against violation severity (critical vs. non-critical vs. not-applicable) showed critical violations reliably drove scores up in every borough, confirming violation severity as the stronger, more consistent driver behind location alone. Module 3: hypothesis testing on 152 months of Maryland labor data (2007–2019) — a one-sample t-test rejected the assumption that average employment sat at 65% (actual mean 64.09%, t = -10.218, p < 0.0001), and a proportion test showed high unemployment (above 6%) occurred in about 40% of months, well above the 25% baseline assumed (p < 0.0001) — evidence that the labor market ran weaker and rockier than the stated benchmarks suggested. Module 2: descriptive statistics and visualization on 29,288 Washington, D.C. crime incidents from 2024 (Metropolitan Police Department data), finding that crime timing varies clearly by offense type — thefts cluster during working hours while assaults and robberies peak in the evening — and that crimes concentrate geographically into visible hotspots when mapped by latitude/longitude. Milestone 1: exploratory analysis of 94,636 US flight records (21 fields) from the DOT's Bureau of Transportation Statistics, finding late-arriving aircraft as the single largest delay cause (300,000+ delay-minutes) and a clear seasonal pattern peaking in summer and holidays. Module 4: a Welch's two-sample t-test on the MASS `cats` dataset found male cats significantly heavier than female cats (2.90 kg vs. 2.36 kg, p = 0.0008), and a paired t-test found meditation significantly improved sleep quality (+0.98 points, p = 0.0199).",
    link: {
      label: "View code & reports on GitHub",
      url: "https://github.com/VimleshSonawane/vimlesh-portfolio/tree/main/research/aly6010",
    },
    flag: "More modules from this course can be added as you send them",
  },
  {
    id: "aly6000",
    title: "Introduction to Analytics coursework",
    org: "ALY 6000 · Northeastern University",
    category: "analytics",
    meta: "6 projects in R",
    summary:
      "Six R-based analyses spanning EDA, statistical inference, and probability — from World Happiness data to diabetes risk factors.",
    image: "/projects/aly6000-overview.png",
    highlights: [
      "World Happiness EDA: freedom score and happiness score move together — Switzerland, Iceland, and Denmark led on both",
      "Book publishing trends (1990–2020): market dominated by a few publishers (Random House, HarperCollins, Macmillan) despite ~2,000 active",
      "Diabetes risk factors: cleaned the Pima Indians dataset (invalid zero-values in glucose, BMI, insulin) before analysis",
      "Distributions: simulated a baseball series, call-center staffing, and light-bulb defect rates, confirming the Central Limit Theorem along the way",
    ],
    details:
      "A semester of applied R work across six projects: built foundational R skills on a data-science salary dataset; ran an exploratory analysis of the 2015 World Happiness dataset, finding a clear positive relationship between freedom and happiness scores (Switzerland, Iceland, and Denmark led on both); analyzed three decades of book-publishing data, showing the market is dominated by a handful of publishers (Random House, HarperCollins, Macmillan) despite nearly 2,000 publishers being active; explored biometric risk factors for diabetes in the Pima Indians dataset (glucose, BMI, insulin, pedigree function) after cleaning invalid zero-values; worked probability fundamentals (joint, conditional, and union probability) on a labeled dataset; and modeled binomial, Poisson, and normal distributions — simulating everything from a baseball team's win probability to call-center staffing to light-bulb defect rates, confirming the Central Limit Theorem along the way using the palmerpenguins dataset.",
    link: {
      label: "View code & reports on GitHub",
      url: "https://github.com/VimleshSonawane/vimlesh-portfolio/tree/main/research/aly6000",
    },
  },
  {
    id: "research-paper",
    title: "Utilization of Rice Husk Ash and Glass Fibre for Eco-Friendly Concrete",
    org: "IJFGCN, Vol. 13, No. 3s (2020) · with R. Yadav, K. Pawar, A. Shinde, S. Sanap",
    category: "research",
    meta: "Published July 2020",
    image: "/projects/research-paper-lab.jpg",
    summary:
      "Undergraduate research testing rice husk ash and glass fibre as eco-friendly, partial replacements for cement and sand in concrete.",
    details:
      "Co-authored research investigating whether rice husk ash (replacing cement) and glass fibre (replacing sand) could produce durable, lower-carbon concrete from materials that would otherwise go to landfill. Cast and cured concrete blocks at two mix proportions, then tested compressive strength and water absorption at 7 and 28 days. The leaner mix (5% rice husk ash, 1% glass fibre) outperformed the heavier one — 53.77 N/mm² compressive strength and 2.33% water absorption versus 48.44 N/mm² and 1.99% — identifying 5% RHA / 1% glass fibre as the optimum replacement ratio for sustainable, cost-effective concrete.",
    link: {
      label: "View paper",
      url: "http://sersc.org/journals/index.php/IJFGCN/article/view/28536",
    },
  },
];

const CATEGORY_ICON: Record<Category, LucideIcon> = {
  pmo: KanbanSquare,
  business: ClipboardList,
  analytics: BarChart3,
  construction: HardHat,
  research: FileText,
  award: FileText,
};

type Stage = { label: string; question: string; detail: string; image?: string };

const STAGES: Stage[] = [
  {
    label: "Define the problem",
    question: "Why does this need solving?",
    detail:
      "NUworks lists jobs, but students apply blind — vague descriptions, no feedback on fit, and repeated rejection cycles. Employers get mismatched applicants; advisors spend hours manually closing the gap. Framed the waste in Lean terms: overprocessing (applying to unqualified roles), waiting (rejection with no feedback), and defects (mismatched candidates reaching interviews).",
  },
  {
    label: "Identify the audience",
    question: "Who are we designing for?",
    detail:
      "Built four personas spanning the real range of users: an international grad student juggling 15–20 hrs/week of applications, an on-campus job seeker overwhelmed by cluttered listings, an MBA career-switcher translating unrelated experience into PM terms, and an undergrad balancing eligibility rules with limited time.",
  },
  {
    label: "Design the wireframes",
    question: "What does it actually look like?",
    detail:
      "Mapped the mobile flow end to end: Home → Job Search → Skill Gap Analyzer → Resume Coach → Profile — each screen showing match percentages, missing skills, and a live resume score, so students see exactly what to fix before applying.",
    image: "/projects/nuworks-wireframe.jpg",
  },
  {
    label: "Define success metrics",
    question: "How will we know it's working?",
    detail:
      "Set concrete KPIs across the full funnel: 70% adoption of active NUworks users in year one, 60% weekly engagement, a 25% lift in interview invitations, 20% more successful placements, and a Net Promoter Score of +45 or better.",
  },
  {
    label: "MVP concept",
    question: "What ships first?",
    detail:
      "Prioritized using Basic / Performance / Delighter tiers — Basic: job matching and search; Performance: Skill Gap Analyzer and Resume Coach; Delighter: an AI interview simulator and learning insights that connect coursework directly to employer expectations.",
  },
];

function CapstoneStepper() {
  const [active, setActive] = useState(0);

  return (
    <div className="card p-6 sm:p-8 border-l-4 !border-l-pmo">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-5">
        <div>
          <CategoryTag category="pmo" icon={KanbanSquare} label="Agile / PMO" />
          <h3 className="font-display text-xl text-ink font-semibold mt-3">
            NU Works+ — AI career readiness app
          </h3>
          <div className="text-inkMute text-sm">
            PJM 6825, Agile Lean Product Development · Team 5, Northeastern University
          </div>
        </div>
        <span className="text-[11px] font-mono text-pmo bg-pmoSoft px-2.5 py-1 rounded-full">
          INTERACTIVE
        </span>
      </div>

      <p className="text-inkSoft text-sm sm:text-base mb-6">
        A semester-long team project applying Agile and Lean product
        development to a real problem at Northeastern: students struggle to
        find the right co-ops and jobs through the university's career
        portal. Step through how the team took it from problem to MVP.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {STAGES.map((stage, i) => (
          <button
            key={stage.label}
            onClick={() => setActive(i)}
            className={`text-xs px-3 py-2 border rounded-lg transition-colors duration-200 text-left ${
              active === i
                ? "border-pmo text-pmo bg-pmoSoft"
                : "border-line text-inkMute hover:border-pmo/40 hover:text-inkSoft"
            }`}
          >
            {String(i + 1).padStart(2, "0")} — {stage.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-line pt-5"
        >
          <div className="font-mono text-pmo text-sm mb-2">{STAGES[active].question}</div>
          <p className="text-inkSoft text-sm sm:text-base">{STAGES[active].detail}</p>
          {STAGES[active].image && (
            <img
              src={STAGES[active].image}
              alt={STAGES[active].label}
              className="rounded-xl mt-4 w-full border border-line"
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const Icon = CATEGORY_ICON[project.category];
  return (
    <button
      onClick={onOpen}
      className="card card-hover p-5 text-left w-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-3">
        <CategoryTag category={project.category} icon={Icon} />
        {project.meta && (
          <span className="font-mono text-[11px] text-inkMute">{project.meta}</span>
        )}
      </div>
      <h4 className="font-display text-base text-ink font-semibold mb-1.5">
        {project.title}
      </h4>
      <div className="text-inkMute text-xs mb-2">{project.org}</div>
      <p className="text-inkSoft text-sm flex-1">{project.summary}</p>
      <span className="text-xs text-brand font-medium mt-3">View details →</span>
    </button>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const Icon = CATEGORY_ICON[project.category];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-paperRaised rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-cardHover max-h-[85vh] overflow-y-auto"
      >
        <div className="flex items-start justify-between mb-4">
          <CategoryTag category={project.category} icon={Icon} />
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-inkMute hover:text-ink transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <h3 className="font-display text-xl text-ink font-semibold mb-1">
          {project.title}
        </h3>
        <div className="text-inkMute text-sm mb-5">{project.org}</div>

        {/* Media — real image if provided, otherwise a placeholder to fill in */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="rounded-xl mb-5 w-full object-cover max-h-64"
          />
        ) : (
          <div className="border border-dashed border-line rounded-xl h-36 flex flex-col items-center justify-center text-inkMute mb-5 gap-1.5">
            <ImagePlus size={20} />
            <span className="text-xs">Add an image, screenshot, or slide export here</span>
          </div>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-5">
            <div className="text-[11px] font-mono text-inkMute uppercase tracking-wide mb-2">
              Key points
            </div>
            <ul className="space-y-1.5">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="text-inkSoft text-sm pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-brand"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        <details className="mb-5 group/details" open={!project.highlights}>
          <summary className="cursor-pointer text-xs font-mono text-brand list-none flex items-center gap-1.5 select-none">
            <span className="group-open/details:rotate-90 transition-transform inline-block">▸</span>
            {project.highlights ? "Read full detail" : "Full detail"}
          </summary>
          <p className="text-inkSoft text-sm sm:text-base mt-3">{project.details}</p>
        </details>

        {project.link && (
          <a
            href={project.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-brand font-medium text-sm mb-4"
          >
            {project.link.label} <ExternalLink size={14} />
          </a>
        )}

        {project.flag && (
          <div className="inline-block text-[11px] text-award bg-awardSoft px-2.5 py-1 rounded-full">
            ⚠ {project.flag}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function HorizontalGallery({
  projects,
  onOpen,
}: {
  projects: Project[];
  onOpen: (id: string) => void;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setDistance(
          Math.max(trackRef.current.scrollWidth - window.innerWidth + 48, 0)
        );
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <div ref={sectionRef} style={{ height: "220vh" }} className="relative">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="px-6 mb-4">
          <span className="text-xs text-inkMute">Scroll to explore →</span>
        </div>
        <motion.div ref={trackRef} style={{ x }} className="flex gap-5 px-6 w-max">
          {projects.map((project) => (
            <div key={project.id} className="w-[280px] sm:w-[320px] shrink-0">
              <ProjectCard project={project} onOpen={() => onOpen(project.id)} />
            </div>
          ))}
          <div className="w-2 shrink-0" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openProject = PROJECTS.find((p) => p.id === openId) ?? null;

  return (
    <section id="projects" className="relative py-24 border-t border-line">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-xs font-mono text-brand">04</span>
        <h2 className="font-display text-3xl text-ink mt-2 mb-2 font-semibold">
          Projects
        </h2>
        <p className="text-inkMute mb-10 max-w-xl">
          Coursework, case studies, research, and earlier construction work,
          tagged by discipline: PMO in periwinkle, business analysis in rose,
          analytics in teal, construction in amber, research in lavender.
        </p>

        <CapstoneStepper />
      </div>

      <div className="mt-4">
        <HorizontalGallery projects={PROJECTS} onOpen={setOpenId} />
      </div>

      <AnimatePresence>
        {openProject && (
          <ProjectModal project={openProject} onClose={() => setOpenId(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
