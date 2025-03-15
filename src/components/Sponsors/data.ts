import PlatinumSponsor1 from "@/assets/Platinum/GDG-OC-Evergreen-Centered-White 2.svg";
import PlatinumSponsor2 from "@/assets/Platinum/GDG-OC-Evergreen-Centered-White 2 (1).svg";
import GoldSponsor1 from "@/assets/Gold/GDG-OC-Evergreen-Centered-White 2.svg";
import GoldSponsor2 from "@/assets/Gold/GDG-OC-Evergreen-Centered-White 2 (2).svg";
import SilverSponsor1 from "@/assets/Silver/GDG-OC-Evergreen-Centered-White 2.svg";
import SilverSponsor2 from "@/assets/Silver/GDG-OC-Evergreen-Centered-White 2 (1).svg";

// Dummy data for sponsors

interface Sponsor {
  name: string;
  img: string;
}

export const platinumSponsors: Sponsor[] = [
  {
    name: "Platinum Sponsor 1",
    img: PlatinumSponsor1,
  },
  {
    name: "Platinum Sponsor 2",
    img: PlatinumSponsor2,
  },
  {
    name: "Platinum Sponsor 3",
    img: PlatinumSponsor1,
  },
  {
    name: "Platinum Sponsor 4",
    img: PlatinumSponsor2,
  }
];

export const goldSponsors: Sponsor[] = [
  {
    name: "Gold Sponsor 1",
    img: GoldSponsor1
  },
  {
    name: "Gold Sponsor 2",
    img: GoldSponsor2,
  },
  {
    name: "Gold Sponsor 3",
    img: GoldSponsor1,
  },
  {
    name: "Gold Sponsor 4",
    img: GoldSponsor2,
  }
];

export const silverSponsors: Sponsor[] = [
  {
    name: "Silver Sponsor 1",
    img: SilverSponsor1,
  },
  {
    name: "Silver Sponsor 2",
    img: SilverSponsor2,
  },
  {
    name: "Silver Sponsor 3",
    img: SilverSponsor1,
  },
  {
    name: "Silver Sponsor 4",
    img: SilverSponsor2,
  }
];