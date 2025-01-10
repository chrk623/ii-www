import { type MainMenuItem } from "@/types";

export const NAV_ITEMS: MainMenuItem[] = [
  {
    title: "Our Mission",
    href: "/our-mission",
    description: "Learn about our goals and aspirations to shape the future.",
  },
  {
    title: "Investments",
    href: "/investments",
    description: "Explore our range of investment.",
  },
  {
    title: "Lending",
    href: "/lending/customers",
    subMenuItems: [
      {
        title: "Brokers",
        href: "/lending/brokers",
        description: "Facilitate lending solutions with expert brokers.",
      },
      {
        title: "Customers",
        href: "/lending/customers",
        description: "Access flexible and personalized lending options.",
        children: [
          {
            title: "Loan Application",
            href: "/lending/customers/loan-application",
          },
          {
            title: "Renovations Drawdown",
            href: "/lending/customers/renovations-drawdown",
          },
          {
            title: "Loan Repayment",
            href: "/lending/customers/loan-repayment",
          },
        ],
      },
      {
        title: "Solicitors",
        href: "/lending/solicitors",
        description: "Streamline lending processes with legal assistance.",
      },
    ],
  },
  {
    title: "Investors",
    href: "/investors",
    description: "Explore new ventures and partnerships.",
  },
  {
    title: "Team",
    href: "/team",
    description: "Meet the visionaries driving our success.",
  },
  {
    title: "News",
    href: "/news",
    description: "Stay updated with our latest news.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with our support team for assistance.",
  },
];
