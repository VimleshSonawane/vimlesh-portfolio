import { LucideIcon } from "lucide-react";

export type Category = "pmo" | "business" | "analytics" | "construction" | "research" | "award";

export const CATEGORY_META: Record<
  Category,
  { label: string; color: string; soft: string; text: string }
> = {
  pmo: { label: "Agile / PMO", color: "bg-pmo", soft: "bg-pmoSoft", text: "text-pmo" },
  business: {
    label: "Business Analysis",
    color: "bg-business",
    soft: "bg-businessSoft",
    text: "text-business",
  },
  analytics: {
    label: "Analytics",
    color: "bg-analytics",
    soft: "bg-analyticsSoft",
    text: "text-analytics",
  },
  construction: {
    label: "Construction",
    color: "bg-construction",
    soft: "bg-constructionSoft",
    text: "text-construction",
  },
  research: {
    label: "Research",
    color: "bg-research",
    soft: "bg-researchSoft",
    text: "text-research",
  },
  award: { label: "Award", color: "bg-award", soft: "bg-awardSoft", text: "text-award" },
};

export function CategoryTag({
  category,
  icon: Icon,
  label,
}: {
  category: Category;
  icon: LucideIcon;
  label?: string;
}) {
  const meta = CATEGORY_META[category];
  return (
    <span
      className={`inline-flex items-center gap-1.5 ${meta.soft} ${meta.text} text-xs font-medium px-2.5 py-1 rounded-full`}
    >
      <Icon size={13} strokeWidth={2.25} />
      {label ?? meta.label}
    </span>
  );
}
