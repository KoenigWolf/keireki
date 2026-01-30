import Link from "next/link";
import { content } from "@/data/content";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold gradient-text mb-4">{content.notFound.code}</p>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          {content.notFound.heading}
        </h2>
        <p className="text-muted-foreground mb-6">
          {content.notFound.description}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-primary-foreground bg-primary hover:bg-primary-dark transition-colors"
        >
          {content.notFound.backLink}
        </Link>
      </div>
    </div>
  );
}
