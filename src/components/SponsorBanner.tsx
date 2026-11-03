import React from "react";
import { Sponsor } from "../types";

interface SponsorBannerProps {
  sponsor: Sponsor;
}

export const SponsorBanner: React.FC<SponsorBannerProps> = ({ sponsor }) => {
  return (
    <aside className="mt-3 bg-white border rounded-lg p-3 shadow-sm">
      <p className="text-xs uppercase tracking-wide font-semibold text-orange-600 mb-1">
        Sponsored By
      </p>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-gray-900">
            {sponsor.name}
          </p>

          <p className="text-xs text-gray-500">
            Local Real Estate Partner
          </p>
        </div>

        <a
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
        >
          Visit →
        </a>
      </div>
    </aside>
  );
};