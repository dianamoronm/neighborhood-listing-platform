import { readFileSync } from "fs";
import { PropertySchema } from "./property.validator";

const raw = readFileSync(
  "src/feature/data-contracts/generated/synthetic-properties.json",
  "utf-8"
);

const records = JSON.parse(raw);
console.log("Parsed records:", records);

records.forEach((record: any, index: number) => {
  const result = PropertySchema.safeParse(record);

  if (!result.success) {
    console.error(`Record ${index + 1} FAILED validation:`);
    console.error(result.error.format());
  } else {
    console.log(`Record ${index + 1} passed.`);
  }
});