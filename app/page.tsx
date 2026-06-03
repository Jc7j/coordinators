import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <Link href="/" className="font-mono text-sm tracking-tight">
            Coordinators
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        {/* Hero — work-first identity */}
        <section className="grid-bg relative flex-1 border-b border-border">
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
      </main>

      <footer>
        <div className="mx-auto max-w-6xl px-6 py-10 font-mono text-xs text-muted sm:px-10">
          © 2026 Coordinators, LLC
        </div>
      </footer>
    </div>
  );
}
