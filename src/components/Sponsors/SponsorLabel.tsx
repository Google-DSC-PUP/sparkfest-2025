export function SponsorLabel({ label }: { label: string }) {
  return (
    <header className="relative flex flex-col items-center justify-center w-full">
      <h3 className="small1 sm:body1 text-center text-grey-100">{label}</h3>
      <div className="absolute left-0 w-1/4 sm:w-1/3 border-t-2 border-grey-100"></div>
      <div className="absolute right-0 w-1/4 sm:w-1/3 border-t-2 border-grey-100"></div>
    </header>
  );
}