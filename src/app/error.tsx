"use client";

import { content } from "@/data/content";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          {content.error.heading}
        </h2>
        <p className="text-muted-foreground mb-6">
          {content.error.description}
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-primary-foreground bg-primary hover:bg-primary-dark transition-colors"
        >
          {content.error.reloadButton}
        </button>
      </div>
    </div>
  );
}
