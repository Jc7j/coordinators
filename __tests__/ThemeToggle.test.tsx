import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { ThemeToggle } from "@/components/ThemeToggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("dark");
    localStorage.clear();
  });

  it("renders an accessible toggle button", () => {
    render(<ThemeToggle />);
    expect(
      screen.getByRole("button", { name: /toggle color theme/i }),
    ).toBeInTheDocument();
  });

  it("toggles the dark class and persists the choice", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /toggle color theme/i });

    await user.click(button);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");

    await user.click(button);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
