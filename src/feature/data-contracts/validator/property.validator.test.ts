import { describe, it, expect } from "vitest";
import { PropertySchema } from "./property.validator";

describe("PropertySchema Validation", () => {
  const validRecord = {
    property_id: "prop-001",
    address: {
      street: "123 Maple Street",
      city: "Los Angeles",
      state: "CA",
      zip_code: "90001"
    },
    price: 725000,
    bedrooms: 3,
    bathrooms: 2,
    square_feet: 1450,
    amenities: ["garage", "central_air"],
    zip_code: "90001",
    local_sponsors: [
      {
        sponsor_id: "s-001",
        name: "Sunrise Realty Group",
        type: "lender"
      }
    ]
  };

  it("passes with a valid record", () => {
    const result = PropertySchema.safeParse(validRecord);
    expect(result.success).toBe(true);
  });

  it("fails when property_id is missing", () => {
    const badRecord = { ...validRecord };
    delete badRecord.property_id;

    const result = PropertySchema.safeParse(badRecord);
    expect(result.success).toBe(false);
  });

  it("fails when price is negative", () => {
    const badRecord = { ...validRecord, price: -10 };
    const result = PropertySchema.safeParse(badRecord);
    expect(result.success).toBe(false);
  });

  it("fails when zip_code is invalid", () => {
    const badRecord = { ...validRecord, zip_code: "ABCDE" };
    const result = PropertySchema.safeParse(badRecord);
    expect(result.success).toBe(false);
  });

  it("fails when unknown field is present", () => {
    const badRecord = { ...validRecord, unknown_field: "oops" };
    const result = PropertySchema.safeParse(badRecord);
    expect(result.success).toBe(false);
  });
});