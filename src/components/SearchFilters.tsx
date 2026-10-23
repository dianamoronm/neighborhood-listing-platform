import React from "react";

interface SearchFiltersProps {
  onSubmit: (filters: { minBeds: string; maxPrice: string }) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onSubmit({
      minBeds: String(formData.get("minBeds") || ""),
      maxPrice: String(formData.get("maxPrice") || ""),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div>
        <label
          htmlFor="minBeds"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Minimum bedrooms
        </label>
        <select
          id="minBeds"
          name="minBeds"
          className="block w-full rounded-md border-gray-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="maxPrice"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Maximum price
        </label>
        <select
          id="maxPrice"
          name="maxPrice"
          className="block w-full rounded-md border-gray-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <option value="">Any</option>
          <option value="500000">$500,000</option>
          <option value="750000">$750,000</option>
          <option value="1000000">$1,000,000</option>
        </select>
      </div>

      <div className="flex items-end">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          Apply filters
        </button>
      </div>
    </form>
  );
};
