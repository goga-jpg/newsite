import { FOOTER_GROUPS } from '../lib/data'

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-ink border-t border-white/10 px-6 md:px-10 pt-20 md:pt-28 pb-8">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-12 lg:gap-20 pb-16 md:pb-20">
          <div>
            <div className="eyebrow mb-6">
              <span className="text-crimson mr-2">■</span> Contact
            </div>
            <h2 className="display text-5xl md:text-6xl leading-[0.92]">
              Let's build
              <br />
              something
              <br />
              <span className="text-crimson">worth watching.</span>
            </h2>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:hello@5dm.africa"
                data-cursor="Email"
                className="block group"
              >
                <div className="mono text-[10px] uppercase tracking-[0.3em] text-paper/50 mb-1">New business</div>
                <div className="display text-2xl md:text-3xl group-hover:text-crimson transition-colors">
                  hello@5dm.africa
                </div>
              </a>
              <a
                href="mailto:press@5dm.africa"
                data-cursor="Email"
                className="block group"
              >
                <div className="mono text-[10px] uppercase tracking-[0.3em] text-paper/50 mb-1">Press &amp; media</div>
                <div className="display text-2xl md:text-3xl group-hover:text-crimson transition-colors">
                  press@5dm.africa
                </div>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {FOOTER_GROUPS.map((g) => (
              <div key={g.head}>
                <div className="mono text-[10px] uppercase tracking-[0.3em] text-paper/45 mb-5">
                  {g.head}
                </div>
                <ul className="space-y-3">
                  {g.items.map((i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-paper/80 hover:text-crimson transition-colors text-sm"
                      >
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* giant wordmark */}
        <div className="relative overflow-hidden border-t border-white/10 py-10 md:py-14">
          <div className="display text-[22vw] md:text-[18vw] leading-[0.85] text-center">
            <span className="inline-block">5D</span>
            <span className="inline-block text-crimson">M</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 mono text-[10px] uppercase tracking-[0.3em] text-paper/45">
          <div className="flex items-center gap-6">
            <span>© 2026 5DM Group</span>
            <span className="hidden md:inline">All rights reserved</span>
          </div>
          <div className="flex items-center gap-6">
            <span>A pan-African studio</span>
            <span className="flex items-center gap-2 text-crimson">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
              On air
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
