import { ThemeToggle } from "@/components/ThemeToggle";
import { projects } from "@/lib/projects";

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
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <a href="/" className="font-mono text-sm tracking-tight">
            Coordinators
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a
              href="#work"
              className="text-muted transition-colors hover:text-foreground"
            >
              Work
            </a>
            <a
              href="#contact"
              className="text-muted transition-colors hover:text-foreground"
            >
              Contact
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="grid-bg relative border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-36">
            <SectionLabel>Software Studio — Est. 2026</SectionLabel>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              We build and operate digital products — and partner with
              technology teams on the hard parts.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              Coordinators is a multidisciplinary software studio. We design,
              engineer, and run our own products, and embed with teams who need
              the difficult parts done right.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a
                href="#contact"
                className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Get in touch
              </a>
              <a
                href="#work"
                className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
              >
                See the work
              </a>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
            <SectionLabel>What we do</SectionLabel>
            <div className="mt-10 grid border-l border-t border-border sm:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.no}
                  className="border-b border-r border-border p-8"
                >
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

        {/* Work */}
        <section id="work" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
            <SectionLabel>Selected work</SectionLabel>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {projects.map((p) => (
                <article
                  key={p.name}
                  className="flex flex-col rounded-lg border border-border bg-surface p-8 transition-colors hover:border-foreground/30"
                >
                  <h3 className="text-2xl font-medium tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">
                    {p.blurb}
                  </p>
                  <div className="mt-8 flex items-center justify-between font-mono text-xs text-muted">
                    <span className="uppercase tracking-[0.15em]">{p.tag}</span>
                    <span>{p.year}</span>
                  </div>
                </article>
              ))}
              <article className="flex min-h-44 flex-col items-start justify-end rounded-lg border border-dashed border-border p-8">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                  More in the works
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
            <SectionLabel>Get in touch</SectionLabel>
            <a
              href="mailto:hello@coordinators.studio"
              className="mt-6 block text-3xl font-medium tracking-tight transition-colors hover:text-accent sm:text-5xl"
            >
              hello@coordinators.studio
            </a>
            <p className="mt-6 text-muted">Coordinators, LLC — Delaware</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <span>© 2026 Coordinators, LLC</span>
          <span>36.1699° N, 115.1398° W</span>
        </div>
      </footer>
    </div>
  );
}
