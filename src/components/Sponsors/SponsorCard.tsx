import { cn } from "@/lib/utils.ts";
import React from "react";

interface SponsorCardProps {
  name: string;
  img: string;
  // url: string;
  category: string;
}

// If cards are clickable, uncomment the following function
// function redirect(url: string) {
//   window.open(url, "_blank");
// }

export function SponsorCard ({ name, img, category }: SponsorCardProps) {
  let className = "";

  switch (category) {
    case "platinum":
      className = "w-[180px] h-[80px] rounded-[18.66px]";
      break;
    
    case "gold":
      className = "w-[158px] h-[70px] rounded-[16.33px]";
      break;
    
    case "silver":
      className = "w-[135px] h-[60px] rounded-[14px]";
      break;
    default:
      break;
  }

  return (
    <figure
      className={cn(
        "relative h-full cursor-pointer overflow-hidden rounded-4xl border p-4 mx-5",
        className,
        "border-border bg-[var(--color-shadow-blue)] hover:bg-accent",
        "border-[var(--color-halftone-blue)] border-2 hover:bg-[var(--color-blue)]"
      )}
      // onClick={() => redirect(url)}
    >
      <div className="flex items center justify-center w-full h-full">
        <img className="w-full h-auto object-contain" alt={`${name} logo`} src={img} />
      </div>
    </figure>
  );
};