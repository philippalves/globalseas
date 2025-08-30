"use client";

import Link from "next/link";
// usa o MegaMenu do pacote oficial do Once UI:
import { MegaMenu } from "@once-ui-system/core";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="font-semibold tracking-tight">
          Globalseas
        </Link>

        {/* MegaMenu nativo do Once UI */}
        <nav className="hidden md:flex items-center gap-2">
          <MegaMenu
            menuGroups={[
              {
                id: "about",
                label: "About",
                suffixIcon: "chevronDown",
                sections: [
                  {
                    title: "Company",
                    links: [
                      {
                        label: "Our mission",
                        href: "/#values",
                        icon: "sparkle",
                        description: "Clarity, speed, stewardship.",
                      },
                      {
                        label: "Our story",
                        href: "/#story",
                        icon: "book",
                        description: "From Santos to global ports.",
                      },
                    ],
                  },
                  {
                    title: "People",
                    links: [
                      {
                        label: "Team",
                        href: "/#team",
                        icon: "people",
                        description: "Who ships the work.",
                      },
                      {
                        label: "Clients",
                        href: "/#logos",
                        icon: "star",
                        description: "Trusted across LATAM & beyond.",
                      },
                    ],
                  },
                ],
              },
              {
                id: "services",
                label: "Services",
                suffixIcon: "chevronDown",
                sections: [
                  {
                    title: "Operations",
                    links: [
                      {
                        label: "Underwater ops",
                        href: "/services#underwater",
                        icon: "cube",
                        description: "Inspection & cleaning at anchor/port.",
                      },
                      {
                        label: "Turnarounds",
                        href: "/services#turnarounds",
                        icon: "bolt",
                        description: "Faster, auditable port calls.",
                      },
                    ],
                  },
                  {
                    title: "Compliance",
                    links: [
                      {
                        label: "PFOS disposal",
                        href: "/services#pfos",
                        icon: "shieldCheck",
                        description: "IMO/MEPC compliant shore reception.",
                      },
                      {
                        label: "Tank cleaning & gas free",
                        href: "/services#tank-cleaning",
                        icon: "drop",
                        description: "Certificates on delivery.",
                      },
                    ],
                  },
                ],
              },
              {
                id: "resources",
                label: "Resources",
                suffixIcon: "chevronDown",
                sections: [
                  {
                    title: "Learn",
                    links: [
                      {
                        label: "Quickstart",
                        href: "/#quickstart",
                        icon: "book",
                        description: "How we work & engage.",
                      },
                      {
                        label: "Docs",
                        href: "/docs",
                        icon: "document",
                        description: "Specs, checklists, templates.",
                      },
                    ],
                  },
                  {
                    title: "Support",
                    links: [
                      {
                        label: "Help center",
                        href: "/help",
                        icon: "infoCircle",
                        description: "FAQs and guidance.",
                      },
                      {
                        label: "Community",
                        href: "/community",
                        icon: "chat",
                        description: "Connect & share learnings.",
                      },
                    ],
                  },
                ],
              },
              {
                id: "company",
                label: "Company",
                suffixIcon: "chevronDown",
                sections: [
                  {
                    title: "Inside",
                    links: [
                      {
                        label: "Careers",
                        href: "/careers",
                        icon: "rocket",
                        description: "Join the crew.",
                      },
                      {
                        label: "Blog",
                        href: "/blog",
                        icon: "document",
                        description: "Updates and field notes.",
                      },
                    ],
                  },
                  {
                    title: "Contact",
                    links: [
                      {
                        label: "Get a quote",
                        href: "/contact#quote",
                        icon: "inbox",
                        description: "Tell us your port & ETA.",
                      },
                      {
                        label: "Talk to ops",
                        href: "/contact",
                        icon: "email",
                        description: "24/7 operations desk.",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </nav>

        {/* Ações à direita */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact#quote"
            className="inline-flex items-center rounded-xl border border-border bg-foreground text-background px-3 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Get a quote
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl border border-border px-3 py-2 text-sm font-medium hover:bg-muted transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile (placeholder) */}
        <div className="md:hidden">
          <Link
            href="/menu"
            className="rounded-xl border border-border px-3 py-2 text-sm"
          >
            Menu
          </Link>
        </div>
      </div>
    </header>
  );
}
