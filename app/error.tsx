"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-6 sm:px-10">
      <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
        Error
      </p>
      <h1 className="mt-4 text-3xl font-medium tracking-tight">
        Something went wrong.
      </h1>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}
