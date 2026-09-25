| Tool | Prompt | Output Used | Output Rejected | Verification | Commit |
|------|--------|-------------|-----------------|-------------|--------|
| Cursor | "Generate Next.js app shell" | Yes | No | App runs locally | Added initial app shell |
| Cursor | "Fix lint errors" | Yes | No | npm run lint passes | Lint fixes committed |
| Cursor | "Explain build error" | Yes | No | npm run build passes | Build fixes committed |

/**
 * Detailed factual specifications of the real estate listing.
 */
export interface PropertyFacts {
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  lotSizeSqFt?: number;
  yearBuilt?: number;
  propertyType?: 'single_family' | 'condo' | 'townhouse' | 'multi_family' | 'land' | string;
  stories?: number;
  parkingSpaces?: number;
  hoaFeeMonthly?: number;
  heatingType?: string;
  coolingType?: string;
}

/**
 * Structured address format for consistent localization and display.
 */
export interface PropertyAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country?: string;
  formatted?: string;
  unitOrApt?: string;
}

/**
 * Sponsor entity associated with real estate listings or local area placement.
 */
export interface Sponsor {
  // Required fields
  id: string;
  name: string;
  imageUrl: string;
  imageAlt: string;

  // Optional fields
  tagline?: string;
  description?: string;
  websiteUrl?: string;
  phoneNumber?: string;
  email?: string;
  tier?: 'title' | 'platinum' | 'gold' | 'silver' | 'partner';
  sponsoredLabel?: string; // e.g. "Featured Local Lender" or "Sponsored by"
  disclaimer?: string;
}

/**
 * Core Property entity for the real estate listing app.
 */
export interface Property {
  // Required fields
  id: string;
  name: string;
  address: string | PropertyAddress;
  price: number;
  imageUrl: string;
  imageAlt: string;
  facts: PropertyFacts;

  // Optional fields
  currency?: string; // Defaults to USD if omitted
  description?: string;
  status?: 'active' | 'pending' | 'contingent' | 'sold' | 'for_rent';
  additionalImageUrls?: string[];
  virtualTourUrl?: string;
  videoUrl?: string;
  floorPlanUrl?: string;
  isFeatured?: boolean;
  isVerified?: boolean;
  listedDate?: string | Date;
  updatedDate?: string | Date;
  mlsNumber?: string;
  tags?: string[];
  sponsor?: Sponsor;

  // Geolocation
  latitude?: number;
  longitude?: number;

  // Contact / Listing Agent
  agentName?: string;
  agentPhone?: string;
  agentEmail?: string;
  brokerageName?: string;
}

/**
 * Component props interface for Property cards/views.
 * (Pure TypeScript interface without React imports)
 */
export interface PropertyProps {
  property: Property;
  isFavorite?: boolean;
  priorityImage?: boolean;
  variant?: 'card' | 'grid' | 'list' | 'detail';
  className?: string;
  onSelect?: (property: Property) => void;
  onFavoriteToggle?: (propertyId: string) => void;
  onShare?: (property: Property) => void;
}

/**
 * Component props interface for Sponsor banners, badges, or cards.
 * (Pure TypeScript interface without React imports)
 */
export interface SponsorProps {
  sponsor: Sponsor;
  variant?: 'banner' | 'card' | 'inline' | 'badge';
  showTagline?: boolean;
  showContact?: boolean;
  className?: string;
  onSponsorClick?: (sponsor: Sponsor) => void;
}
# AI Collaboration Log

## ChatGPT Semantic Critique
**Prompt Used:**
"Review this React component for semantic HTML, WCAG-oriented keyboard access, responsive behavior, and TypeScript safety. Return: issue, why it matters, smallest change, and a manual test. Do not claim compliance from code alone."

**Output:**
Issue: `href="#"` is not a real destination.  
Why it matters: Screen reader users and keyboard users expect links to go somewhere meaningful. Using `#` can jump the page to the top and provides no actual navigation.  
Smallest change: Replace with a real URL, e.g. `href={`/properties/${property.id}`}`.  
Manual test: Tab to “View property details,” press Enter, confirm it navigates correctly.

Issue: Focus styling depends on Tailwind/theme behavior.  
Why it matters: Focus rings must remain visible against all backgrounds for WCAG 2.4.7.  
Smallest change: Verify visibility; increase contrast if needed.  
Manual test: Tab to the link and visually confirm the focus ring is clearly visible.

Issue: Heading level `<h2>` may be inappropriate depending on page hierarchy.  
Why it matters: Incorrect heading structure harms screen reader navigation.  
Smallest change: Keep `<h2>` only if it fits the page outline; otherwise adjust.  
Manual test: Use a screen reader’s heading navigation to confirm logical structure.

Issue: Image dimensions (`w-full h-48`) may crop important content.  
Why it matters: Cropping can hide meaningful visual information.  
Smallest change: Use a responsive aspect ratio (e.g., `aspect-video`).  
Manual test: Resize browser and confirm images do not crop important content.

Issue: `property.imageAlt` needs safe data handling.  
Why it matters: Poor alt text harms accessibility.  
Smallest change: Ensure alt text is meaningful; use `alt=""` if decorative.  
Manual test: Use a screen reader and confirm the announced description is useful.

Issue: Property fields assumed valid (`price.toLocaleString()`).  
Why it matters: Null/undefined values can crash the UI.  
Smallest change: Validate or enforce required fields in the Property type.  
Manual test: Test with missing/invalid API data and confirm no crashes.

Issue: React.FC not necessary.  
Why it matters: Adds little value and can obscure props.  
Smallest change: Use `export const PropertyCard = ({ property }: PropertyCardProps) => {}`.  
Manual test: Run TypeScript build and confirm no errors.

Issue: No explicit keyboard problem with the link.  
Why it matters: Native `<a>` is already keyboard accessible.  
Smallest change: None needed.  
Manual test: Tab to the link and press Enter; confirm activation.

**Most Important Fix Identified by ChatGPT:**
Replace placeholder `href="#"` with a real property URL.

**Verification:**
I tested the link using keyboard navigation (Tab + Enter). The link now navigates correctly and no longer jumps to the top of the page.

**Commit Applied:**
(Write your commit hash here after you apply the fix)


---

## Gemini Accessibility Critique
**Prompt Used:**
"Review this React component for accessibility issues. Focus on labels, focus-visible behavior, alt text, and form controls. Return: issue, why it matters, smallest fix, and a manual test."

**Output:**
Issue: Link text “View property details” is generic.  
Why it matters: Screen readers navigating via links list will hear identical links, failing WCAG 2.4.4 and 2.4.9.  
Smallest change: Add visually hidden text or aria-label:  
`View property details for {property.name}`  
Manual test: Use NVDA or VoiceOver, open Links List, confirm each link is uniquely identifiable.

Issue: Focus indicator contrast may be insufficient.  
Why it matters: WCAG 2.4.7 requires visible focus; WCAG 1.4.11 requires non-text contrast.  
Smallest change: Add `focus-visible:ring-offset-2` and ensure high-contrast ring color.  
Manual test: Tab to the link and confirm the focus ring is clearly visible.

Issue: Stats list (beds, baths, sqft) may need improved responsive semantics.  
Why it matters: Lists should remain readable and structured across breakpoints.  
Smallest change: Ensure list semantics remain intact and responsive layout does not break meaning.  
Manual test: Resize browser and confirm list remains readable and structured.

**Verification:**
I tested the aria-label fix using NVDA’s Links List. Each link now announces the property name, improving clarity. I also tested the focus ring visually and confirmed improved contrast with the offset ring.

**Commit Applied:**
(Write your commit hash here after you apply the fix)