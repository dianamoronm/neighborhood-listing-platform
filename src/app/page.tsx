import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:p-4 focus:bg-emerald-700 focus:text-white">
        Skip to main content
      </a>

      <main id="main-content" className="flex-1 max-w-5xl mx-auto px-4 py-16">
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-3">
            Hello Diana - Hot Reload Test
          </h1>
          <p className="text-lg text-slate-600">
            A community-first housing portal connecting residents with verified local homes, trusted sponsors, and voice assistance.
          </p>
        </header>

        <section aria-label="Core Services" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Property Listings */}
          <article aria-labelledby="listings-title" className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <h2 id="listings-title" className="text-xl font-semibold mb-2">Property Listings</h2>
              <p className="text-slate-600 text-sm mb-4">Browse local rentals, family homes, and community land trusts with verified eligibility.</p>
            </div>
            <Link href="/listings" className="text-emerald-700 font-medium text-sm hover:underline focus-visible:ring-2 focus-visible:ring-emerald-600 rounded">
              Explore listings &rarr;
            </Link>
          </article>

          {/* Card 2: Neighborhood Sponsors */}
          <article aria-labelledby="sponsors-title" className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <h2 id="sponsors-title" className="text-xl font-semibold mb-2">Neighborhood Sponsors</h2>
              <p className="text-slate-600 text-sm mb-4">Connect with vetted neighborhood businesses, civic lenders, and home repair cooperatives.</p>
            </div>
            <Link href="/sponsors" className="text-sky-700 font-medium text-sm hover:underline focus-visible:ring-2 focus-visible:ring-sky-600 rounded">
              View local sponsors &rarr;
            </Link>
          </article>

          {/* Card 3: Voice Help */}
          <article aria-labelledby="voice-title" className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <h2 id="voice-title" className="text-xl font-semibold mb-2">Voice Help</h2>
              <p className="text-slate-600 text-sm mb-4">Navigate listings and submit repair inquiries hands-free using multilingual speech input.</p>
            </div>
            <Link href="/voice" className="text-amber-800 font-medium text-sm hover:underline focus-visible:ring-2 focus-visible:ring-amber-600 rounded">
              Activate voice guide &rarr;
            </Link>
          </article>
        </section>
      </main>
    </div>
  );
}
"use client";
import React from "react";
import { Property, Sponsor } from "../types";
import { PropertyCard } from "../components/PropertyCard";
import { SponsorBanner } from "../components/SponsorBanner";
import { SearchFilters } from "../components/SearchFilters";

const sponsor: Sponsor = {
  id: "s1",
  name: "Sunrise Realty",
  url: "https://example.com/sunrise",
};

const properties: Property[] = [
  {
    id: "p1",
    name: "Cozy Bungalow",
    address: "1221 Minorca Dr, Pacific Palisades, CA",
    price: 1650000,
    beds: 2,
    baths: 1,
    sqft: 900,
    imageUrl: "/images/bungalow.jpg",
    imageAlt: "Single-story bungalow with a small front yard",
    sponsor,
  },
  {
    id: "p2",
    name: "Modern Loft",
    address: "1492 Paseo De Oro, Pacific Palisades, CA",
    price: 2100000,
    beds: 1,
    baths: 1,
    sqft: 750,
    imageUrl: "/images/loft.jpg",
    imageAlt: "Open-plan loft apartment with large windows",
  },
  {
    id: "p3",
    name: "Family Home",
    address: "1550 Amalfi Dr, Pacific Palisades, CA",
    price: 2950000,
    beds: 3,
    baths: 2,
    sqft: 1500,
    imageUrl: "/images/family-home.jpg",
    imageAlt: "Two-story family home with a driveway and garden",
  },
];

export default function Page() {
  const handleFiltersSubmit = (filters: { minBeds: string; maxPrice: string }) => {
    console.log("Filters applied:", filters);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Property Listings</h1>
      </header>

      <SearchFilters onSubmit={handleFiltersSubmit} />

      <section
        aria-label="Property results"
        className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {properties.map((property) => (
          <div key={property.id}>
            <PropertyCard property={property} />
            {property.sponsor && <SponsorBanner sponsor={property.sponsor} />}
          </div>
        ))}
      </section>
    </main>
  );
}
