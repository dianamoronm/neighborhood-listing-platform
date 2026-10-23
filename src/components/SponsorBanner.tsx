import React from "react";
import { Sponsor } from "../types";

interface SponsorBannerProps {
  sponsor: Sponsor;
}

export const SponsorBanner: React.FC<SponsorBannerProps> = ({ sponsor }) => {
  return (
    <aside className="mt-2 flex items-center gap-2 text-xs text-gray-700">
      <span className="uppercase tracking-wide font-semibold text-amber-700">
        Sponsored
      </span>
      <a
        href={sponsor.url}
        className="text-indigo-700 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      >
        Visit {sponsor.name}
      </a>
    </aside>
  );
};
