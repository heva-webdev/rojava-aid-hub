import OrgCard, { type Organization } from "@/components/OrgCard";
import organizations from "@/content/organizations.json";

export default function OrganizationsPage() {
  const orgs = organizations as Organization[];

  return (
    <div>
      <h1 className="text-3xl font-bold">Organizations</h1>
      <p className="mt-3 text-gray-300">
        We list organizations only when they meet our verification checklist.
        Donations happen directly on official websites.
      </p>

      <div className="mt-6 grid gap-4">
        {orgs.map((org) => (
          <OrgCard key={org.id} org={org} />
        ))}
      </div>
    </div>
  );
}