type Verification = {
  official_website: boolean;
  clear_donation_page: boolean;
  payment_in_org_name: boolean;
  recent_updates: boolean;
};

export type Organization = {
  id: string;
  name: string;
  region: string;
  website: string;
  donation_url: string;
  verification: Verification;
  notes?: string;
};

function Badge({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-1 text-xs border ${
        ok
          ? "border-emerald-400/30 text-emerald-200"
          : "border-red-400/30 text-red-200"
      }`}
    >
      {ok ? "✓" : "✕"} {label}
    </span>
  );
}

export default function OrgCard({ org }: { org: Organization }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">{org.name}</h2>
          <p className="mt-1 text-sm text-gray-300">{org.region}</p>
        </div>

        <div className="flex gap-2">
          <a
            href={org.website}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition"
          >
            Website
          </a>
          <a
            href={org.donation_url}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white px-3 py-2 text-sm text-black hover:opacity-90 transition"
          >
            Donate
          </a>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge ok={org.verification.official_website} label="Official website" />
        <Badge ok={org.verification.clear_donation_page} label="Clear donation page" />
        <Badge ok={org.verification.payment_in_org_name} label="Payment in org name" />
        <Badge ok={org.verification.recent_updates} label="Recent updates" />
      </div>

      {org.notes ? (
        <p className="mt-4 text-sm text-gray-300">{org.notes}</p>
      ) : null}
    </article>
  );
}