import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="education" className="relative px-6 py-24 border-t border-line">
      <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10">
        <div>
          <span className="text-xs font-mono text-brand">01</span>
          <h2 className="font-display text-3xl text-ink mt-2 font-semibold">Education</h2>
        </div>

        <div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card card-hover px-5 py-4 flex gap-3">
              <GraduationCap className="text-brand shrink-0 mt-0.5" size={20} />
              <div>
                <div className="text-ink font-medium">MS, Project Management</div>
                <div className="text-inkMute text-sm">
                  Northeastern University · Boston, MA
                </div>
                <div className="text-inkMute text-sm">
                  Sept 2024 – Dec 2026 (expected) · GPA 3.3/4.0
                </div>
              </div>
            </div>
            <div className="card card-hover px-5 py-4 flex gap-3">
              <GraduationCap className="text-construction shrink-0 mt-0.5" size={20} />
              <div>
                <div className="text-ink font-medium">BE, Civil Engineering</div>
                <div className="text-inkMute text-sm">SITS, Narhe · Pune, MH, India</div>
                <div className="text-inkMute text-sm">
                  Aug 2016 – Apr 2020 · GPA 3.5/4.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
