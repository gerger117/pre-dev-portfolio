export interface Project {
  id: number;
  title: string;
  year: string;
  type: "Web App" | "Mobile App";
  usedAt: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CRM System (Customer & Admin)",
    year: "2026",
    type: "Web App",
    usedAt: "Davao City Water District (DCWD)",
    description:
      "A Customer Relationship Management system with separate customer and admin interfaces. Customers submit and track service requests while employees manage records, update statuses, and handle documents and transactions.",
    tech: ["React", "TypeScript", "Vanilla Extract CSS", "Zustand"],
    link: "https://github.com/gerger117",
  },
  {
    id: 2,
    title: "NDKC Attendance Monitoring System",
    year: "2025",
    type: "Web App",
    usedAt: "Notre Dame of Kidapawan College",
    description:
      "A QR code-based attendance monitoring system enabling automated time logging, efficient attendance tracking, and centralized record management for events and student participation.",
    tech: ["React", "TypeScript", "Firebase"],
    link: "https://ndkcattendance.com/",
  },
  {
    id: 3,
    title: "Lost and Found System",
    year: "2025",
    type: "Web App",
    usedAt: "Notre Dame of Kidapawan College",
    description:
      "A web-based lost and found system that helps track lost items, manage reports, and improve item recovery within the campus.",
    tech: ["React", "TypeScript", "Firebase"],
    link: "https://github.com/gerger117",
  },
  {
    id: 4,
    title: "Hospital Management System",
    year: "2025",
    type: "Web App",
    usedAt: "School / Training Project",
    description:
      "A web-based hospital management system that manages patient records, streamlines hospital processes, and improves overall data organization.",
    tech: ["React", "TypeScript", "Node.js", "Supabase"],
    link: "https://suite-chef-73604418.figma.site/",
  },
  {
    id: 5,
    title: "Judging App",
    year: "2025",
    type: "Mobile App",
    usedAt: "School Events & Mutya ng Lanao",
    description:
      "A judging application that allows judges to input scores, manage criteria, and generate results efficiently for school events.",
    tech: ["Flutter", "Firebase"],
    link: "https://judging-system.vercel.app/",
  },
  {
    id: 6,
    title: "Queuing System",
    year: "2024",
    type: "Web App",
    usedAt: "Notre Dame of Kidapawan College",
    description:
      "A cashier queuing system to efficiently manage customer flow and organize transactions, reducing waiting time and ensuring proper queue order.",
    tech: ["React", "TypeScript"],
    link: "https://queue-buddy-system-91.vercel.app/",
  },
];
