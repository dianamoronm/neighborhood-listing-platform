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
            Neighborhood Property Hub
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
