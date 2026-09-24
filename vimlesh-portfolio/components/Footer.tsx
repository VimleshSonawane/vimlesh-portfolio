export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-line">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between gap-2 font-mono text-[11px] text-mistDim">
        <span>© {new Date().getFullYear()} Vimlesh Sonawane</span>
        <span>Boston, MA · Built with Next.js</span>
      </div>
    </footer>
  );
}
