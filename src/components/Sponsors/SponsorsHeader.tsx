import RenderedV3_2 from "@/assets/RENDERED_V3 2.svg";

export function SponsorsHeader() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-center md:gap-x-4">
      {/* For larger devices like laptop or computer */}
      <img src={RenderedV3_2} alt="GDG Logo" className="w-12 hidden sm:flex sm:w-16 h-auto" />
      <div className="flex font-mono title2 sm:header2 text-white text-center [text-shadow:2px_2px_4px_var(--color-shadow-red)] whitespace-nowrap">
        <h1>OUR ALLIES IN</h1>
        <h1 className="hidden sm:block">INNOVATION</h1>
      </div>
      <img src={RenderedV3_2} alt="GDG Logo" className="w-12 hidden sm:flex sm:w-16 h-auto scale-x-[-1]" />

      {/* For mobile/tablet devices */}
      <div className="flex sm:hidden items-center justify-center">
        <img src={RenderedV3_2} alt="GDG Logo" className="w-12 sm:w-16 h-auto" />
        <h1 className="font-mono title2 sm:header2 text-white text-center [text-shadow:2px_2px_4px_var(--color-shadow-red)] whitespace-nowrap">
          INNOVATION
        </h1>
        <img src={RenderedV3_2} alt="GDG Logo" className="w-12 sm:w-16 h-auto scale-x-[-1]" />
      </div>
    </header>
  );
}