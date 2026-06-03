export type Project = {
  name: string;
  blurb: string;
  tag: string;
  year: string;
  href?: string;
};

// The studio's work. Add a project = add an entry. Ownership of each product's
// entity stays separate — this list shows what Coordinators built, not what it owns.
export const projects: Project[] = [
  {
    name: "CourtConnect",
    blurb:
      "Court booking and community for sports facilities — discovery, scheduling, and payments in one place.",
    tag: "Product",
    year: "2026",
  },
];
