export const NAV_ITEMS = [
  {
    label: "Our Mission",
    href: "our-mission" as const,
  },
  {
    label: "Investments",
    href: "investments" as const,
  },
  {
    label: "Lending",
    href: "lending" as const,
    sub: [
      {
        name: "Brokers",
        href: "brokers",
      },
      {
        name: "Customers",
        href: "customers",
      },
    ],
  },
  {
    label: "News",
    href: "news" as const,
    sub: [
      {
        name: "News",
        href: "news",
      },
      {
        name: "Case Studies",
        href: "case-studies",
      },
    ],
  },
  {
    label: "Finance Solutions",
    href: "finance-solutions" as const,
  },
  {
    label: "Placeholder 2",
    href: "#" as const,
  },
];
