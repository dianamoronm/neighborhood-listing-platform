import React from "react";
import { Property } from "../types";

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <article className="border rounded-xl p-4 shadow-md bg-white hover:shadow-xl transition-all duration-300">
      <img
        src={property.imageUrl}
        alt={property.imageAlt}
        className="w-full h-56 object-cover rounded-lg mb-4"
      />

      <div className="flex gap-2 mb-3">
        <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
          ACTIVE
        </span>

        <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
          VERIFIED
        </span>
      </div>

      <header>
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          {property.name}
        </h2>

        <p className="text-sm text-gray-700 mb-2">
          {property.address}
        </p>
      </header>

      <p className="text-2xl font-bold text-indigo-600 mb-3">
        ${property.price.toLocaleString()}
      </p>

      <ul className="grid grid-cols-3 gap-2 text-sm text-gray-700 mb-4">
        <li>{property.beds} beds</li>
        <li>{property.baths} baths</li>
        <li>{property.sqft} sq ft</li>
      </ul>

      <p className="text-sm text-gray-700 mb-4">
        Beautiful neighborhood property with modern amenities,
        convenient access to local services, and comfortable living
        spaces.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-slate-200 text-slate-800 px-2 py-1 rounded text-xs font-medium">
          Verified
        </span>

        <span className="bg-slate-200 text-slate-800 px-2 py-1 rounded text-xs font-medium">
          Community Friendly
        </span>

        <span className="bg-slate-200 text-slate-800 px-2 py-1 rounded text-xs font-medium">
          Featured Listing
        </span>
      </div>

      <a
        href={`/properties/${property.id}`}
        aria-label={`View property details for ${property.name}`}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
      >
        View Property Details
      </a>
    </article>
  );
};