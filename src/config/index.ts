export const NAV_ITEMS = [
  {
    label: "Our Mission",
    href: "/our-mission" as const,
  },
  {
    label: "Investments",
    href: "/investments" as const,
  },
  {
    label: "Lending",
    href: "/lending" as const,
    sub: [
      {
        name: "Brokers",
        href: "/lending-brokers",
      },
      {
        name: "Customers",
        href: "/lending-customers",
      },
    ],
  },
  // {
  //   label: "News",
  //   href: "news" as const,
  //   sub: [
  //     {
  //       name: "News",
  //       href: "/news",
  //     },
  //     {
  //       name: "Case Studies",
  //       href: "/case-studies",
  //     },
  //   ],
  // },
  {
    label: "Investors",
    href: "/investors" as const,
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "News",
    href: "/news" as const,
  },
  {
    label: "Contact",
    href: "/contact" as const,
  },
];
