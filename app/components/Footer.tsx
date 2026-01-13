import Link from "next/link";

import { Container } from "./Container";
import { profile } from "../../content/profile";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/life", label: "Life" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-black/5 py-10 dark:border-white/10">
      <Container>
        <div className="flex flex-col gap-6">
          <nav className="flex flex-wrap justify-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none dark:text-zinc-300 dark:hover:text-zinc-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {year} {profile.name}.
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-full px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none dark:text-zinc-300 dark:hover:text-zinc-50"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
