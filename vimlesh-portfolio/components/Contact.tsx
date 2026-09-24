export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 border-t border-line">
      <div className="max-w-4xl mx-auto">
        <span className="font-mono text-xs text-signal">SEC.05</span>
        <h2 className="font-display text-3xl text-white mt-2 mb-4">
          Open a channel
        </h2>
        <p className="text-mist max-w-lg mb-10">
          Reach out about project management roles, operations work, or
          anything you'd like to collaborate on.
        </p>

        <div className="hud-panel p-6 sm:p-8 grid sm:grid-cols-3 gap-6">
          <a
            href="mailto:your.email@example.com"
            className="group"
          >
            <div className="font-mono text-[11px] text-mistDim mb-1">
              EMAIL
            </div>
            <div className="text-white group-hover:text-signal transition-colors duration-200">
              your.email@example.com
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="font-mono text-[11px] text-mistDim mb-1">
              LINKEDIN
            </div>
            <div className="text-white group-hover:text-signal transition-colors duration-200">
              linkedin.com/in/your-profile
            </div>
          </a>
          <div>
            <div className="font-mono text-[11px] text-mistDim mb-1">
              LOCATION
            </div>
            <div className="text-white">Boston, MA</div>
          </div>
        </div>

        <div className="mt-4 inline-block font-mono text-[10px] text-amber border border-amber/40 px-2 py-1">
          ⚠ Replace email and LinkedIn URL above with your real details
        </div>
      </div>
    </section>
  );
}
