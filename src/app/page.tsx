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
  const handleFiltersSubmit = (filters: {
    minBeds: string;
    maxPrice: string;
  }) => {
    console.log("Filters applied:", filters);
  };

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Neighborhood Property Hub
        </h1>

        <p className="text-lg text-gray-600 mt-2">
          Browse local listings and sponsor neighborhood services
        </p>
      </header>

      <SearchFilters onSubmit={handleFiltersSubmit} />

      <section
        aria-label="Property results"
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {properties.map((property) => (
          <div key={property.id}>
            <PropertyCard property={property} />

            {property.sponsor && (
              <SponsorBanner sponsor={property.sponsor} />
            )}
          </div>
        ))}
      </section>
    </main>
  );
}