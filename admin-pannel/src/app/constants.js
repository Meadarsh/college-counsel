export const SideMenuItems = [
  {
    name: "Blog",
    icon: "Rss",
    link: "/dashboard/blog",
    createLink: "/dashboard/blog/create"
  },
  {
    name: "University",
    icon: "University",
    link: "/dashboard/university",
    createLink: "/dashboard/university/create"
  },
  {
    name: "More",
    icon: "CircleEllipsis",
    child: [
      {
        name: "Hiring Partner",
        icon: "Building2",
        link: "/dashboard/more/hiring-partners",
      },
      {
        name: "Approvals",
        icon: "ShieldCheck",
        link: "/dashboard/more/approvals",
      },
    ],
  },
  {
    name: "Applications",
    icon: "GraduationCap",
    link: "/dashboard/application",
  },
];
