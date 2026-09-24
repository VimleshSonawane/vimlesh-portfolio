export default function About() {
  return (
    <section id="brief" className="relative px-6 py-28 border-t border-line">
      <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10">
        <div>
          <span className="font-mono text-xs text-signal">SEC.01</span>
          <h2 className="font-display text-3xl text-white mt-2">Brief</h2>
        </div>

        <div className="space-y-5 text-mist text-base sm:text-lg leading-relaxed">
          <p>
            I'm an execution-focused project management professional with
            experience across operations, intellectual property compliance,
            real estate development, event coordination, and business
            analytics. I'm currently completing a Master of Science in
            Project Management at Northeastern University in Boston.
          </p>
          <p>
            My background includes leading investigation teams, coordinating
            cross-functional initiatives, supporting nonprofit programs, and
            improving operational workflows. I like taking on the kind of
            work that has a lot of moving parts and turning it into
            something organized, trackable, and easy for a team to execute
            against.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="hud-panel px-5 py-4">
              <div className="font-mono text-[11px] text-mistDim mb-1">
                EDUCATION
              </div>
              <div className="text-white font-medium">
                MS, Project Management
              </div>
              <div className="text-mistDim text-sm">
                Northeastern University · Boston, MA
              </div>
              <div className="text-mistDim text-sm">
                Sept 2024 – Dec 2026 (expected)
              </div>
            </div>
            <div className="hud-panel px-5 py-4">
              <div className="font-mono text-[11px] text-mistDim mb-1">
                EDUCATION
              </div>
              <div className="text-white font-medium">
                BE, Civil Engineering
              </div>
              <div className="text-mistDim text-sm">
                Savitribai Phule Pune University
              </div>
              <div className="text-mistDim text-sm">Aug 2016 – Apr 2020</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
