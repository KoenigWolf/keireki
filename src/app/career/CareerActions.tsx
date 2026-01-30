"use client";

import { Printer, Download } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

export default function CareerActions({
  printLabel,
  downloadLabel,
  downloadUrl,
}: {
  printLabel: string;
  downloadLabel: string;
  downloadUrl: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => window.print()}
        className="gap-1.5"
      >
        <Printer className="w-4 h-4" />
        <span className="hidden sm:inline">{printLabel}</span>
      </Button>
      <a
        href={downloadUrl}
        download
        className={buttonVariants({ variant: "ghost", size: "sm", className: "gap-1.5" })}
      >
        <Download className="w-4 h-4" />
        <span className="hidden sm:inline">{downloadLabel}</span>
      </a>
    </div>
  );
}
