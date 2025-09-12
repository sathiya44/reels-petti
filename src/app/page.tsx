import Link from "next/link";
import Hello from '@/components/Hellow';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          🚀 Advanced Next.js App
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300">
          Clean slate. Ready for features: auth, API layer, db, caching, testing, CI, and more.
        </p>
        <div className="flex gap-3">
          <Link
            className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-900"
            href="/docs"
          >
            View Docs (soon)
          </Link>
          <Link
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white hover:opacity-90 dark:bg-white dark:text-slate-900"
            href="/dashboard"
          >
            Go to Dashboard (stub)
          </Link>
          <Hello/>
        </div>
      </section>
    </main>
  );
}
