# Accessibility Notes

## Keyboard Navigation Test
- Tab moves through filters ✔️
- Focus ring visible on all buttons ✔️
- Sponsor link reachable ✔️
- Property card link reachable ✔️
- No keyboard traps ✔️

## Lighthouse Accessibility Audit
Score: 92

Issues:
- Missing width/height on images
- Low contrast on sponsor label

Fixes planned:
- Add width/height attributes
- Adjust sponsor label color
## Lighthouse Accessibility Audit

Score: 96

Notes:
- Lighthouse warned that IndexedDB stored data may affect performance scores.
- Recommendation: Run Lighthouse in an Incognito window for a clean audit.

Issues found:
- No major accessibility issues reported.
- Page passed most WCAG checks successfully.

Environment:
- Lighthouse run from Edge browser.
- Multiple tabs open during audit (does not affect accessibility score).