# Security Audit Verification

## Row Level Security (RLS) Audit

This document verifies positive and negative authorization outcomes for the Sponsor-Backed Property Listing & Inquiry Subsystem.

---

## Authorization Matrix

| Role | Properties | Sponsors | Property Sponsors | Inquiries |
|--------|--------|--------|--------|--------|
| Anonymous User | Read approved only | Read active sponsors only | Read approved associations | Insert only |
| Property Owner | CRUD own listings | No direct management | Read related sponsor links | Read inquiries tied to owned properties |
| Inquirer | Submit inquiry | No access | No access | Cannot read inquiries |
| Administrator | Full access | Full access | Full access | Full access |

---

## Verification Results

### Test 1: Anonymous Visitor

#### Scenario

Read approved property listings.

#### Expected

PASS

#### Result

PASS

Anonymous users can view approved properties.

---

### Test 2: Anonymous Visitor

#### Scenario

Read draft property listings.

#### Expected

FAIL / DENIED

#### Result

FAIL / DENIED

Anonymous users cannot access draft listings.

---

### Test 3: Property Owner A

#### Scenario

Update Property Owner A draft listing.

#### Expected

PASS

#### Result

PASS

Owners may update their own draft listings.

---

### Test 4: Property Owner A

#### Scenario

Update Property Owner B listing.

#### Expected

FAIL / DENIED

#### Result

FAIL / DENIED

Cross-owner modification is blocked.

---

### Test 5: Public Inquirer

#### Scenario

Submit new inquiry.

#### Expected

PASS

#### Result

PASS

Inquiry successfully created.

---

### Test 6: Public Inquirer

#### Scenario

Read existing inquiries.

#### Expected

FAIL / DENIED

#### Result

FAIL / DENIED

Users cannot access inquiry submissions.

---

### Test 7: Administrator

#### Scenario

Read all records.

#### Expected

PASS

#### Result

PASS

Administrator access works across all resources.

---

### Test 8: Administrator

#### Scenario

Update records across all tables.

#### Expected

PASS

#### Result

PASS

Administrator privileges verified.

---

## Security Summary

Verified controls include:

- Row Level Security (RLS)
- Owner-scoped access
- Anonymous read restrictions
- Inquiry isolation
- Administrator override access
- Positive and negative authorization testing

All tested scenarios produced expected access-control outcomes.