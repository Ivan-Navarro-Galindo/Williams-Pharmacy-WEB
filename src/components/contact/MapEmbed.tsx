"use client";

import { useState } from "react";
import { site } from "@/content/site";

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${site.address.lat},${site.address.lng}`;

// Same "pb" embed format Google's own Share > Embed a map button generates.
// Unlike the informal `maps?q=...&output=embed` query, this route isn't
// gated behind the EU cookie-consent interstitial, which was blocking the
// iframe for visitors in the EU (including Malta).
const embedSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3227.98!2d${
  site.address.lng
}!3d${site.address.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${encodeURIComponent(
  site.address.placeCid,
)}!2s${encodeURIComponent(site.name)}!5e0!3m2!1sen!2smt`;

/**
 * Map is loaded only after the user opts in, since the Google Maps embed sets
 * third-party cookies (relevant for an EU-based business).
 */
export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="border-navy-200 mt-8 overflow-hidden rounded-2xl border">
      {loaded ? (
        <iframe
          title={`Map showing ${site.name} on ${site.address.street}, ${site.address.locality}`}
          src={embedSrc}
          className="aspect-[16/10] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="bg-navy-50 flex aspect-[16/10] flex-col items-center justify-center gap-4 p-6 text-center">
          <p className="text-navy-500 max-w-xs text-sm">
            Loading the map sets cookies from Google. Click below to show it.
          </p>
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="bg-navy-800 hover:bg-navy-700 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white transition-colors"
          >
            Load map
          </button>
        </div>
      )}
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-navy-600 hover:text-navy-900 border-navy-200 block border-t px-4 py-3 text-center text-sm"
      >
        Open in Google Maps
      </a>
    </div>
  );
}
