import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/organizations", label: "Organizations" },
  { href: "/verify", label: "How We Verify" },
  { href: "/legal", label: "Transparency & Legal" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Rojava Aid Hub
        </Link>

        <nav className="hidden gap-4 text-sm text-gray-300 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}