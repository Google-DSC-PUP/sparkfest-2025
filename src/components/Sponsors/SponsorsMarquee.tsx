import { Marquee } from "@/components/magicui/marquee.tsx";
import { platinumSponsors, goldSponsors, silverSponsors } from "./data.ts"
import { SponsorLabel } from "./SponsorLabel.tsx";
import { SponsorCard } from "./SponsorCard.tsx";
import React from "react";

export function SponsorsMarquee() {
  return (
    <div className="relative flex gap-4 w-[350px] h-[477px] sm:w-[90vw] sm:h-full flex-col items-center justify-center overflow-hidden border-grey-100 border-2 rounded-4xl sm:rounded-4xl py-4 bg-gradient-to-l from-[#122B4F] via-[#1A3A68] to-[#122B4F]">
      
      <SponsorLabel label="Platinum Sponsors" />
      <Marquee pauseOnHover className="[--duration:20s]" >
        {platinumSponsors.map((review) => (
          <SponsorCard key={review.name} {...review} category="platinum" />
        ))}
      </Marquee>

      <SponsorLabel label="Gold Sponsors" />
      <Marquee reverse pauseOnHover className="[--duration:20s]" >
        {goldSponsors.map((review) => (
          <SponsorCard key={review.name} {...review} category="gold" />
        ))}
      </Marquee>

      <SponsorLabel label="Silver Sponsors" />
      <Marquee pauseOnHover className="[--duration:20s]" >
        {silverSponsors.map((review) => (
          <SponsorCard key={review.name} {...review} category="silver" />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#122B4F]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#122B4F]"></div>

    </div>
  );
}
