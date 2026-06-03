import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-6 sm:px-10">
      <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
        404
      </p>
      <h1 className="mt-4 text-3xl font-medium tracking-tight">
        Page not found.
      </h1>
      <Link
        href="/"
        className="mt-8 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
      >
        Back home
      </Link>
    </div>
  );
}
