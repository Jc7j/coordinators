import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const services = [
  {
    no: "01",
    title: "Build",
    body: "Design and engineer products end to end — from schema to ship.",
  },
  {
    no: "02",
    title: "Operate",
    body: "We run what we build. Live products, not handoffs.",
  },
  {
    no: "03",
    title: "Partner",
    body: "Embed with technology teams on the parts that are hard to get right.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <Link href="/" className="font-mono text-sm tracking-tight">
            Coordinators
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <a
              href="#work"
              className="text-muted transition-colors hover:text-foreground"
            >
              Work
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero — work-first identity */}
        <section className="grid-bg relative border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-36">
            <SectionLabel>Software — Est. 2026</SectionLabel>
            <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl">
              We build and operate digital products.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              We design, engineer, and run our own software — and partner with
              technology teams on the hard parts.
            </p>
          </div>
        </section>

        {/* Work — prime position; coming, not empty. */}
        <section id="work" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-28">
            <SectionLabel>Work</SectionLabel>
            <p className="mt-8 max-w-3xl text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
              In the making.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We exist to build. We&rsquo;re heads-down on the first products —
              they&rsquo;ll live here.
            </p>
          </div>
        </section>

        {/* How we work — secondary; the inquiry hook */}
        <section id="approach" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
            <SectionLabel>How we work</SectionLabel>
            <div className="mt-10 grid border-t border-l border-border sm:grid-cols-3">
              {services.map((s) => (
                <div key={s.no} className="border-r border-b border-border p-8">
                  <span className="font-mono text-xs text-muted">{s.no}</span>
                  <h3 className="mt-4 text-xl font-medium tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="mx-auto max-w-6xl px-6 py-10 font-mono text-xs text-muted sm:px-10">
          © 2026 Coordinators, LLC
        </div>
      </footer>
    </div>
  );
}
