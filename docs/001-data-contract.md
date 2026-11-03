ADR 001 — Data Contract for Property Listings
Context
The Neighborhood Listing Platform requires structured, validated property data before rendering UI components or storing records. Initial synthetic JSON generated in Google AI Studio did not match the Zod schema. The validator correctly rejected all records.

Canvas Step-by-Step Procedure requires:

strict JSON Schema / Zod schema

structured AI output

validation

tests

decision record

Problem
The first synthetic dataset failed validation because:

id was used instead of property_id

address was a string instead of an object

local_sponsors was missing

ZIP codes were duplicated or mismatched

sponsor structure did not match SponsorSchema

The validator produced errors for all five records.

Decision
We decided to fix the JSON data rather than weaken the schema.

Reasons:

The schema already reflects the product requirements (nested address, sponsor array, strict formats).

Strengthening the data layer preserves UI and database consistency.

The schema enforces business rules that should not be relaxed.

Alternatives Considered
Relax the schema

Allow string addresses

Allow missing sponsors

Accept id instead of property_id  
Rejected because it weakens validation and contradicts assignment requirements.

Fix the synthetic JSON

Rename fields

Add nested address object

Add sponsor array

Ensure ZIP consistency
Accepted because it aligns with the schema and keeps validation strict.

Consequences
All five corrected records now pass validation.

Tests confirm valid and invalid cases behave as expected.

UI components can safely consume validated data.

The schema remains the single source of truth.

Evidence
Validator output before fix: all records failed.

Validator output after fix: all records passed.

Test suite includes one valid and four invalid fixtures.

Synthetic JSON stored under data-contracts/generated/.