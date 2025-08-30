"use client";

import { Row, Flex, Line, ToggleButton, MegaMenu } from "@once-ui-system/core";

export default function Header() {
  return (
    <Row
      as="header"
      position="sticky"
      zIndex={9}
      top="0"
      fillWidth
      padding="8"
      horizontal="center"
      border="neutral-alpha-weak"
      background="page"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <Flex fillWidth vertical="center">
        <ToggleButton prefixIcon="home" href="/" aria-label="Home" />
      </Flex>

      <Row
        background="page"
        border="neutral-alpha-weak"
        radius="m-4"
        shadow="l"
        padding="4"
        horizontal="center"
        zIndex={1}
        style={{ backdropFilter: "blur(4px)" }}
      >
        <Row gap="4" vertical="center" textVariant="body-default-s">
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
                      { label: "Our mission", href: "/#values", icon: "sparkle", description: "Clarity, speed, stewardship." },
                      { label: "Our story", href: "/#story", icon: "book", description: "From Santos to global ports." },
                    ],
                  },
                  {
                    title: "People",
                    links: [
                      { label: "Team", href: "/#team", icon: "people", description: "Who ships the work." },
                      { label: "Clients", href: "/#logos", icon: "star", description: "Trusted across LATAM & beyond." },
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
                      { label: "Underwater ops", href: "/services#underwater", icon: "cube", description: "Inspection & cleaning at anchor/port." },
                      { label: "Turnarounds", href: "/services#turnarounds", icon: "bolt", description: "Faster, auditable port calls." },
                    ],
                  },
                  {
                    title: "Compliance",
                    links: [
                      { label: "PFOS disposal", href: "/services#pfos", icon: "shieldCheck", description: "IMO/MEPC compliant shore reception." },
                      { label: "Tank cleaning & gas free", href: "/services#tank-cleaning", icon: "drop", description: "Certificates on delivery." },
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
                      { label: "Quickstart", href: "/#quickstart", icon: "book", description: "How we work & engage." },
                      { label: "Docs", href: "/docs", icon: "document", description: "Specs, checklists, templates." },
                    ],
                  },
                  {
                    title: "Support",
                    links: [
                      { label: "Help center", href: "/help", icon: "infoCircle", description: "FAQs and guidance." },
                      { label: "Community", href: "/community", icon: "chat", description: "Connect & share learnings." },
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
                      { label: "Careers", href: "/careers", icon: "rocket", description: "Join the crew." },
                      { label: "Blog", href: "/blog", icon: "document", description: "Updates and field notes." },
                    ],
                  },
                  {
                    title: "Contact",
                    links: [
                      { label: "Get a quote", href: "/contact#quote", icon: "inbox", description: "Tell us your port & ETA." },
                      { label: "Talk to ops", href: "/contact", icon: "email", description: "24/7 operations desk." },
                    ],
                  },
                ],
              },
            ]}
          />
        </Row>
      </Row>

      <Flex fillWidth horizontal="end" vertical="center" gap="8">
        <ToggleButton href="/contact#quote" label="Get a quote" />
        <Line background="neutral-alpha-medium" vert maxHeight="24" />
        <ToggleButton href="/contact" label="Contact" />
      </Flex>
    </Row>
  );
}
