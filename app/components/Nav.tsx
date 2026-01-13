import Link from "next/link";

import { Logo } from "./Logo";
import { Container } from "./Container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/life", label: "Life" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-40 overflow-hidden border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:border-white/10 dark:bg-black/60 supports-[backdrop-filter]:dark:bg-black/40">
      <Container>
        <div className="flex h-16 items-center justify-between gap-2">
          <Link
            href="/"
            className="shrink-0 rounded-md focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
          >
            <Logo />
          </Link>
          <nav className="flex items-center gap-0.5 sm:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-2 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none sm:px-3 sm:py-2 dark:text-zinc-300 dark:hover:text-zinc-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
