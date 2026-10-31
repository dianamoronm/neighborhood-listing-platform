import { describe, expect, it } from "vitest";
import { selectSponsor } from "./selectSponsor";

const context = {
  zip: "90272",
  placement: "listing",
  date: "2026-06-01"
};

const sponsor = {
  id: "s1",
  name: "Sunrise Realty",
  url: "https://example.com",
  approved: true,
  active: true,
  placement: "listing",
  startDate: "2026-01-01",
  endDate: "2026-12-31",
  zipCodes: ["90272"],
  priority: 1
};

describe("selectSponsor", () => {
  it("returns exact ZIP match", () => {
    expect(selectSponsor(context, [sponsor])?.id).toBe("s1");
  });

  it("rejects inactive sponsor", () => {
    expect(
      selectSponsor(context, [
        { ...sponsor, active: false }
      ])
    ).toBeNull();
  });

  it("rejects expired sponsor", () => {
    expect(
      selectSponsor(context, [
        { ...sponsor, endDate: "2025-01-01" }
      ])
    ).toBeNull();
  });

  it("returns null when no match exists", () => {
    expect(
      selectSponsor(
        {
          zip: "99999",
          placement: "listing",
          date: "2026-06-01"
        },
        [sponsor]
      )
    ).toBeNull();
  });

  it("uses priority as tie breaker", () => {
    const secondSponsor = {
      ...sponsor,
      id: "s2",
      priority: 2
    };

    expect(
      selectSponsor(context, [secondSponsor, sponsor])?.id
    ).toBe("s1");
  });
});