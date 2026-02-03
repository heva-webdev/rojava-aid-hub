import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Rojava Aid Hub
        </h1>
        <p className="mt-4 max-w-2xl text-gray-300">
          A non-profit humanitarian information platform that directs donors to
          verified organizations supporting North &amp; East Syria.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/organizations"
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90 transition"
          >
            View organizations
          </Link>
          <Link
            href="/verify"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15 transition"
          >
            How we verify
          </Link>
          <Link
            href="/legal"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15 transition"
          >
            Transparency &amp; Legal
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-lg font-semibold">No donations collected</h2>
          <p className="mt-2 text-sm text-gray-300">
            We never receive money. Donations happen only on official websites.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-lg font-semibold">Verification first</h2>
          <p className="mt-2 text-sm text-gray-300">
            We list organizations only when all checklist items are met.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-lg font-semibold">Humanitarian, not political</h2>
          <p className="mt-2 text-sm text-gray-300">
            The platform is focused on safety, clarity, and transparency.
          </p>
        </div>
      </section>
    </div>
  );
}