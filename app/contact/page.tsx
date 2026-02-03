"use client";

export default function ContactPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-3 text-gray-300">
        Suggest an organization, report an issue, or share a correction. This form
        does not submit anywhere yet (no backend).
      </p>

      <form className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5">
        <div>
          <label className="text-sm text-gray-300">Name (optional)</label>
          <input
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white outline-none focus:border-white/30"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="text-sm text-gray-300">Email (optional)</label>
          <input
            type="email"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white outline-none focus:border-white/30"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="text-sm text-gray-300">Message</label>
          <textarea
            className="mt-2 min-h-[140px] w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white outline-none focus:border-white/30"
            placeholder="Write your message..."
          />
        </div>

        <button
          type="button"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90 transition"
          onClick={() => alert("Thanks! We received your message (demo only).")}
        >
          Send message
        </button>
      </form>
    </div>
  );
}