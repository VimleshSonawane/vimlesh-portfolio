import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 border-t border-line">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-mono text-brand">07</span>
        <h2 className="font-display text-3xl text-ink mt-2 mb-4 font-semibold">
          Let's connect
        </h2>
        <p className="text-inkSoft max-w-lg mb-10">
          Reach out about project management roles, operations work, or
          anything you'd like to collaborate on.
        </p>

        <div className="card p-6 sm:p-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="mailto:vimleshsonawane113@gmail.com" className="group flex gap-3">
            <Mail className="text-brand shrink-0 mt-0.5" size={18} />
            <div>
              <div className="text-[11px] text-inkMute mb-1">EMAIL</div>
              <div className="text-ink text-sm group-hover:text-brand transition-colors duration-200 break-all">
                vimleshsonawane113@gmail.com
              </div>
            </div>
          </a>
          <a href="tel:+18577468623" className="group flex gap-3">
            <Phone className="text-brand shrink-0 mt-0.5" size={18} />
            <div>
              <div className="text-[11px] text-inkMute mb-1">PHONE</div>
              <div className="text-ink text-sm group-hover:text-brand transition-colors duration-200">
                857-746-8623
              </div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/vimlesh25"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-3"
          >
            <Linkedin className="text-brand shrink-0 mt-0.5" size={18} />
            <div>
              <div className="text-[11px] text-inkMute mb-1">LINKEDIN</div>
              <div className="text-ink text-sm group-hover:text-brand transition-colors duration-200">
                linkedin.com/in/vimlesh25
              </div>
            </div>
          </a>
          <div className="flex gap-3">
            <MapPin className="text-brand shrink-0 mt-0.5" size={18} />
            <div>
              <div className="text-[11px] text-inkMute mb-1">LOCATION</div>
              <div className="text-ink text-sm">Boston, MA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
