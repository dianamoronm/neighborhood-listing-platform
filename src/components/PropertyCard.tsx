import React from "react";
import { Property } from "../types";

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <article className="border rounded-lg p-4 shadow-sm bg-white">
      <img
        src={property.imageUrl}
        alt={property.imageAlt}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold mb-1">{property.name}</h2>
      <p className="text-sm text-gray-700 mb-1">{property.address}</p>
      <p className="text-sm font-medium text-indigo-700 mb-2">
        ${property.price.toLocaleString()}
      </p>
      <ul className="text-sm text-gray-600 mb-3">
        <li>{property.beds} beds</li>
        <li>{property.baths} baths</li>
        <li>{property.sqft} sq ft</li>
      </ul>
      <a
  href={`/properties/${property.id}`}
  aria-label={`View property details for ${property.name}`}
  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
>
  View property details
  <span className="sr-only"> for {property.name}</span>
</a>

    </article>
  );
};