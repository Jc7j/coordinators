import { describe, expect, it } from "vitest";
import { projects } from "@/lib/projects";

describe("projects", () => {
  it("every project has the required fields", () => {
    for (const p of projects) {
      expect(p.name).toBeTruthy();
      expect(p.blurb).toBeTruthy();
      expect(p.tag).toBeTruthy();
      expect(p.year).toMatch(/^\d{4}$/);
    }
  });

  it("has unique project names", () => {
    const names = projects.map((p) => p.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
