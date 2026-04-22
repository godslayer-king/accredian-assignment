export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-semibold">accredian enterprise</p>
          <p className="mt-4 max-w-sm text-sm text-slate-400">
            Workforce upskilling programs crafted with top universities, aligned to
            business outcomes, and delivered with measurable impact.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#stats" className="hover:text-white">
                Stats
              </a>
            </li>
            <li>
              <a href="#clients" className="hover:text-white">
                Clients
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-white">
                How It Works
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>enterprise@accredian.com</li>
            <li>+91 98765 43210</li>
            <li>Gurugram, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Accredian Enterprise. All rights reserved.
      </div>
    </footer>
  );
}
