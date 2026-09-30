"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, CalendarDays, X, ChevronLeft, ChevronRight, FileText, ClipboardList } from "lucide-react";
import { CategoryTag, Category } from "./CategoryTag";

type Phase = "Planning" | "Coordination" | "Delivered";
const PHASES: Phase[] = ["Planning", "Coordination", "Delivered"];

type FieldProject = {
  id: string;
  title: string;
  context: string;
  /** How far through the lifecycle this project got while I was on the team */
  reached: Phase;
  statusNote: string;
  points: string[];
  /** Discipline tag, shown only when it differs from standard program delivery */
  tag?: Category;
  /** Span both columns in the grid */
  wide?: boolean;
  documents?: {
    title: string;
    kind: string;
    summary: string;
    facts: string[];
  }[];
  tiers?: { name: string; price: string }[];
  event?: {
    date: string;
    time: string;
    venue: string;
    partners: string[];
    lineupLabel?: string;
    lineup: { name: string; role: string }[];
  };
  gallery?: { src: string; alt: string; caption: string }[];
};

const RR = "/projects/rooted-rising";

const FIELD_PROJECTS: FieldProject[] = [
  {
    id: "rooted-rising",
    title: "Rooted & Rising",
    context: "Artist talk and open house for Black History Month, Museum of African American History",
    reached: "Delivered",
    statusNote: "Event delivered",
    event: {
      date: "February 27, 2026",
      time: "12–2 pm",
      venue: "46 Joy Street, Boston",
      partners: [
        "Museum of African American History",
        "Living Art Boston",
        "MadeINcubator",
        "GBH News",
      ],
      lineup: [
        { name: "Paris Alston", role: "Moderator, host of GBH News Rooted" },
        { name: "Ayana Mack", role: "Public artist and creative storyteller" },
        { name: "Jameel Radcliffe", role: "Contemporary visual artist" },
        { name: "Ruben McFarlane", role: "Castle of our Skins" },
        { name: "Amanda Shea", role: "Spoken word artist, poetry performance" },
        { name: "Jean McGuire", role: "Honoree, METCO co-founder" },
      ],
    },
    gallery: [
      { src: `${RR}/rooted-rising-main.jpg`, alt: "Rooted & Rising event flyer with the full lineup", caption: "Main event flyer" },
      { src: `${RR}/moderator-paris-alston.jpg`, alt: "Flyer for moderator Paris Alston", caption: "Moderator: Paris Alston" },
      { src: `${RR}/speaker-ayana-mack.jpg`, alt: "Flyer for speaker Ayana Mack", caption: "Speaker: Ayana Mack" },
      { src: `${RR}/speaker-jameel-radcliffe.jpg`, alt: "Flyer for speaker Jameel Radcliffe", caption: "Speaker: Jameel Radcliffe" },
      { src: `${RR}/speaker-ruben-mcfarlane.jpg`, alt: "Flyer for speaker Ruben McFarlane", caption: "Speaker: Ruben McFarlane" },
      { src: `${RR}/performer-amanda-shea.jpg`, alt: "Flyer for poetry performer Amanda Shea", caption: "Poetry performer: Amanda Shea" },
      { src: `${RR}/honoree-jean-mcguire.jpg`, alt: "Tribute flyer honoring Jean McGuire", caption: "Honoree: Jean McGuire" },
    ],
    documents: [
      {
        title: "Event Logistics & Venue Overview",
        kind: "Planning document for the museum team and partners",
        summary:
          "Venue layout, operations, accessibility, and program flow, written to keep the host organization, museum, and partners aligned before the event.",
        facts: [
          "Two floors mapped: the basement for food partners and networking (50 seats, optional workshop), the first floor for the main program (up to 200 seats, projector, balcony)",
          "Vendor load-in window of 15–20 minutes, with museum setup one day before",
          "Museum tour options: self-guided, or a 15–20 minute guided introduction with Q&A",
          "Accessibility for attendees: elevator to the first floor and accessible restrooms; balcony seating is not wheelchair accessible",
        ],
      },
    ],
    points: [
      "Supported planning and coordination of the Rooted & Rising event at the Museum of African American History",
      "Assisted with event planning, logistics, and coordination activities",
      "Organized timelines, documents, and event-related action items",
      "Supported sponsor-related information and communications",
      "Coordinated follow-ups with stakeholders and helped track outstanding tasks",
      "Assisted with preparations leading up to the event",
    ],
  },
  {
    id: "chase-workshop",
    title: "Entrepreneurship Empowerment Workshop Series",
    context: "Navigating Your Cash Flow, presented with Chase for Business Coaching for Impact",
    reached: "Delivered",
    statusNote: "Workshop delivered",
    event: {
      date: "Saturday, January 31, 2026",
      time: "11:00 am–12:30 pm",
      venue: "Chase Community Center, 1617 Blue Hill Ave., Mattapan",
      partners: ["MadeINcubator", "Chase for Business Coaching for Impact"],
      lineupLabel: "Presenter",
      lineup: [
        {
          name: "James Karamourtopoulos",
          role: "Senior Business Consultant, Chase for Business Coaching for Impact",
        },
      ],
    },
    gallery: [
      {
        src: "/projects/chase-workshop/navigating-your-cash-flow.jpg",
        alt: "Flyer for the Navigating Your Cash Flow workshop",
        caption: "Workshop flyer",
      },
    ],
    points: [
      "Supported coordination of an entrepreneurship-focused workshop in collaboration with JPMorgan Chase",
      "Assisted with planning and organizing workshop activities and logistics",
      "Helped coordinate information between MadeINcubator leadership, partners, and stakeholders",
      "Supported organization of workshop materials and project documentation",
      "Assisted with Chase for Business and Coaching for Impact content and coordination",
      "Helped track action items and follow-ups associated with the initiative",
    ],
  },
  {
    id: "living-art-boston",
    title: "Living Art Boston Series 2026",
    context: "Creative economy event series, including the 4th Annual Living Art Boston Summit",
    wide: true,
    tiers: [
      { name: "Community Sponsor", price: "$500" },
      { name: "Creative Partner", price: "$1,500" },
      { name: "Experience Sponsor", price: "$3,500" },
      { name: "Impact Sponsor", price: "$5,000" },
      { name: "Presenting Sponsor", price: "$10,000" },
    ],
    documents: [
      {
        title: "4th Annual Summit sponsorship deck",
        kind: "Sponsor-facing deck",
        summary:
          "Five sponsorship tiers for a summit at the intersection of creativity, entrepreneurship, and community impact.",
        facts: [
          "350+ attendees expected: creatives, designers, entrepreneurs, and students, ages 16–40",
          "Benefits scale from logo placement and a social post up to keynote, activation, and custom content",
          "The Presenting tier ties directly to the Fashion Forward Youth Program",
        ],
      },
    ],
    reached: "Planning",
    statusNote: "Planning stage — my co-op ended before these initiatives were executed",
    points: [
      "Supported planning and coordination of the Living Art Boston Series 2026",
      "Reviewed project requirements, timelines, and upcoming activities",
      "Coordinated information and follow-ups across leadership and stakeholders",
      "Organized project documentation and Google Workspace folders",
      "Supported event logistics, scheduling, and coordination activities",
      "Tracked action items and helped ensure tasks progressed according to the project timeline",
    ],
  },
  {
    id: "fashion-forward",
    title: "Fashion Forward Youth Program",
    context: "Youth program, Boston",
    reached: "Delivered",
    statusNote: "Program delivered",
    points: [
      "Supported planning and coordination of the Fashion Forward Youth Program",
      "Assisted with program timelines, activities, and logistical requirements",
      "Coordinated information between stakeholders involved in the program",
      "Organized project documents and program materials",
      "Helped track upcoming deliverables, responsibilities, and follow-up items",
      "Supported the team in keeping program activities organized and on schedule",
    ],
  },
  {
    id: "program-concepts",
    title: "Future Programming & Initiative Concepts",
    context: "Strategy document I authored, March 2026",
    tag: "business",
    reached: "Planning",
    statusNote: "Concept stage — prepared for internal discussion and evaluation",
    points: [
      "Came up with six new program concepts and presented them at a team brainstorming session",
      "Wrote the concepts document for internal evaluation, framing each idea by possible timeline, structure, and strategic value",
      "Concepts: a FIFA-inspired cultural event, a scholarship or creative grant program, an International Women's Day event, a youth fashion design competition, an award ceremony with guest presenters, and a brand collaboration for the winning designer",
      "Tied each concept to potential partners and funding, from sports and apparel brands to foundations and educational institutions",
    ],
  },
];

function PhaseTrack({ reached }: { reached: Phase }) {
  const reachedIndex = PHASES.indexOf(reached);
  return (
    <ol className="flex items-center gap-0 mb-5" aria-label={`Lifecycle reached: ${reached}`}>
      {PHASES.map((phase, i) => {
        const done = i <= reachedIndex;
        const isLast = i === PHASES.length - 1;
        return (
          <li key={phase} className={`flex items-center ${isLast ? "" : "flex-1"}`}>
            <div className="flex flex-col items-start">
              <span
                className={`w-3 h-3 rounded-full border-2 ${
                  done ? "bg-brand border-brand" : "bg-transparent border-inkMute/60"
                }`}
              />
              <span className={`text-[11px] mt-1.5 ${done ? "text-ink" : "text-inkMute"}`}>
                {phase}
              </span>
            </div>
            {!isLast && (
              <div className="flex-1 h-[2px] mx-2 -mt-4 bg-line relative overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: i < reachedIndex ? 1 : 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  style={{ transformOrigin: "left" }}
                  className="absolute inset-0 bg-brand"
                />
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function Lightbox({
  items,
  index,
  onClose,
  onMove,
}: {
  items: NonNullable<FieldProject["gallery"]>;
  index: number;
  onClose: () => void;
  onMove: (next: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onMove((index + 1) % items.length);
      if (e.key === "ArrowLeft") onMove((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onMove]);

  const item = items[index];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
    >
      <div
        className="relative bg-paperRaised rounded-2xl p-4 sm:p-5 max-w-lg w-full shadow-cardHover"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-ink">{item.caption}</span>
          <button onClick={onClose} aria-label="Close" className="text-inkMute hover:text-ink">
            <X size={20} />
          </button>
        </div>
        <img
          src={item.src}
          alt={item.alt}
          className="rounded-lg w-full max-h-[70vh] object-contain bg-paper"
        />
        {items.length > 1 && (
        <div className="flex items-center justify-between mt-3 text-inkMute text-xs">
          <button
            onClick={() => onMove((index - 1 + items.length) % items.length)}
            className="inline-flex items-center gap-1 hover:text-ink"
          >
            <ChevronLeft size={16} /> Previous
          </button>
          <span>
            {index + 1} of {items.length}
          </span>
          <button
            onClick={() => onMove((index + 1) % items.length)}
            className="inline-flex items-center gap-1 hover:text-ink"
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
        )}
      </div>
    </motion.div>
  );
}

function Bullets({ points }: { points: string[] }) {
  return (
    <ul className="space-y-1.5">
      {points.map((point) => (
        <li
          key={point}
          className="text-inkSoft text-sm pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-inkMute"
        >
          {point}
        </li>
      ))}
    </ul>
  );
}

function WorkingDocs({
  docs,
  className = "mt-6",
}: {
  docs: NonNullable<FieldProject["documents"]>;
  className?: string;
}) {
  return (
    <div className={`${className} space-y-4`}>
      {docs.map((doc) => (
        <div key={doc.title} className="rounded-xl border border-line bg-paper/60 p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <FileText size={18} className="text-brand shrink-0 mt-0.5" />
            <div className="min-w-0">
              <h4 className="text-ink font-medium leading-snug">{doc.title}</h4>
              <div className="text-inkMute text-xs mb-2">{doc.kind}</div>
              <p className="text-inkSoft text-sm mb-3">{doc.summary}</p>
              <Bullets points={doc.facts} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function TierLadder({ tiers }: { tiers: NonNullable<FieldProject["tiers"]> }) {
  return (
    <ol className="mt-4 space-y-1.5" aria-label="Sponsorship tiers">
      {tiers.map((tier, i) => (
        <li key={tier.name} className="flex items-center gap-3 text-sm">
          <span
            className="h-1.5 rounded-full bg-brand/70"
            style={{ width: `${24 + i * 18}%` }}
            aria-hidden="true"
          />
          <span className="text-inkSoft whitespace-nowrap">{tier.name}</span>
          <span className="ml-auto text-ink tabular-nums">{tier.price}</span>
        </li>
      ))}
    </ol>
  );
}

function FeaturedEvent({ project }: { project: FieldProject }) {
  const [open, setOpen] = useState<number | null>(null);
  const gallery = project.gallery ?? [];
  const event = project.event!;
  const [cover, ...rest] = gallery;

  return (
    <article className="card p-5 sm:p-7 md:col-span-2">
      <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 md:gap-8">
        {cover && (
          <button
            onClick={() => setOpen(0)}
            className="block rounded-xl overflow-hidden border border-line self-start"
            aria-label={`Open ${cover.caption}`}
          >
            <img src={cover.src} alt={cover.alt} className="w-full h-auto" />
          </button>
        )}

        <div>
          <h3 className="font-display text-xl sm:text-2xl text-ink font-semibold leading-snug">
            {project.title}
          </h3>
          <div className="text-inkMute text-sm mb-4">{project.context}</div>

          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-inkSoft mb-5">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={14} className="text-brand" /> {event.date}, {event.time}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-brand" /> {event.venue}
            </span>
          </div>

          <PhaseTrack reached={project.reached} />
          <p className="text-xs mb-5 text-analytics">{project.statusNote}</p>

          <Bullets points={project.points} />

          <div className="mt-6 pt-5 border-t border-line grid sm:grid-cols-2 gap-5">
            <div>
              <h4 className="text-sm text-ink font-medium mb-2">
                {event.lineupLabel ?? "Program"}
              </h4>
              <ul className="space-y-1.5">
                {event.lineup.map((p) => (
                  <li key={p.name} className="text-sm leading-snug">
                    <span className="text-ink">{p.name}</span>
                    <span className="block text-inkMute text-xs">{p.role}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm text-ink font-medium mb-2">Presented by</h4>
              <ul className="space-y-1 text-sm text-inkSoft">
                {event.partners.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {rest.length > 0 && (
        <div className="mt-7">
          <h4 className="text-sm text-ink font-medium mb-3">Promotional flyers</h4>
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
            {rest.map((item, i) => (
              <button
                key={item.src}
                onClick={() => setOpen(i + 1)}
                className="shrink-0 w-28 sm:w-32 snap-start text-left group"
                aria-label={`Open ${item.caption}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="rounded-lg border border-line w-full aspect-[4/5] object-cover object-top group-hover:border-brand/60 transition-colors"
                />
                <span className="block text-[11px] text-inkMute mt-1.5 leading-tight">
                  {item.caption}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {project.documents && <WorkingDocs docs={project.documents} />}

      <AnimatePresence>
        {open !== null && (
          <Lightbox
            items={gallery}
            index={open}
            onClose={() => setOpen(null)}
            onMove={setOpen}
          />
        )}
      </AnimatePresence>
    </article>
  );
}

export default function FieldWork() {
  return (
    <section id="coop" className="relative px-6 py-24 border-t border-line">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-mono text-brand">03</span>
        <h2 className="font-display text-3xl text-ink mt-2 mb-2 font-semibold">
          Co-op at MadeINcubator
        </h2>
        <p className="text-inkMute mb-3 max-w-xl">
          Real projects for MadeINcubator, not coursework. Each track shows
          how far the project got while I was on the team.
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-inkSoft mb-10">
          <span className="text-ink font-medium">Project Coordinator / Executive Assistant</span>
          <span className="inline-flex items-center gap-1 text-inkMute">
            <MapPin size={13} /> MadeINcubator, Inc., Boston
          </span>
          <span className="text-inkMute">2026</span>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {FIELD_PROJECTS.map((project) => {
            if (project.event) return <FeaturedEvent key={project.id} project={project} />;
            const executed = project.reached === "Delivered";
            return (
              <article
                key={project.id}
                className={`card p-5 sm:p-6 flex flex-col ${
                  executed ? "" : "border-dashed !border-inkMute/40"
                } ${project.wide ? "md:col-span-2" : ""}`}
              >
                {project.tag && (
                  <div className="mb-3">
                    <CategoryTag category={project.tag} icon={ClipboardList} />
                  </div>
                )}
                <h3 className="font-display text-lg text-ink font-semibold leading-snug">
                  {project.title}
                </h3>
                <div className="text-inkMute text-sm mb-4">{project.context}</div>
                <PhaseTrack reached={project.reached} />
                <p className={`text-xs mb-4 ${executed ? "text-analytics" : "text-award"}`}>
                  {project.statusNote}
                </p>
                {project.wide && project.documents ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    <Bullets points={project.points} />
                    <div>
                      <WorkingDocs docs={project.documents} className="" />
                      {project.tiers && <TierLadder tiers={project.tiers} />}
                    </div>
                  </div>
                ) : (
                  <>
                    <Bullets points={project.points} />
                    {project.documents && <WorkingDocs docs={project.documents} />}
                    {project.tiers && <TierLadder tiers={project.tiers} />}
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
