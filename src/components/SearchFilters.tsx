import React from "react";

interface SearchFiltersProps {
  onSubmit: (filters: {
    minBeds: string;
    maxPrice: string;
  }) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  onSubmit,
}) => {
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
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
      className="mb-8 bg-white border rounded-xl p-6 shadow-sm grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div>
        <label
          htmlFor="minBeds"
          className="block text-sm font-semibold text-gray-800 mb-2"
        >
          Minimum Bedrooms
        </label>

        <select
          id="minBeds"
          name="minBeds"
          className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
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
          className="block text-sm font-semibold text-gray-800 mb-2"
        >
          Maximum Price
        </label>

        <select
          id="maxPrice"
          name="maxPrice"
          className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
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
          className="w-full inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 shadow-sm"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
};