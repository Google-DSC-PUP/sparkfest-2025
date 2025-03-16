import { SponsorsMarquee } from "./SponsorsMarquee.tsx";
import { SponsorsHeader } from "./SponsorsHeader.tsx";
import React from "react";

export default function SponsorsSection() {
  return (
    // Remove bg for final version
    <div className="flex flex-col items-center justify-center gap-4 min-h-svh">
      <SponsorsHeader />
      <SponsorsMarquee />
    </div>
  );
}