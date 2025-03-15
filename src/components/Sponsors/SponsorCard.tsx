import { cn } from "@/lib/utils";

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
      className = "w-[360px] h-[160px] rounded-4xl";
      break;
    
    case "gold":
      className = "w-[270px] h-[120px] rounded-[28px]";
      break;
    
    case "silver":
      className = "w-[180px] h-[80px] rounded-[16px]";
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
      <div className="flex items center justify-center">
        <img className="w-32 h-auto" alt={`${name} logo`} src={img} />
      </div>
    </figure>
  );
};