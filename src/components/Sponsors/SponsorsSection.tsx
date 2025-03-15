import { SponsorsMarquee } from "./SponsorsMarquee";
import { SponsorsHeader } from "./SponsorsHeader";

export default function SponsorsSection() {
  return (
    // Remove bg for final version
    <div className="flex flex-col items-center justify-center gap-4 min-h-svh">
      <SponsorsHeader />
      <SponsorsMarquee />
    </div>
  );
}