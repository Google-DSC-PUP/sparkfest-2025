import PlatinumSponsor1 from "../../assets/Platinum/FlowerStore.ph.jpg";
import PlatinumSponsor2 from "../../assets/Platinum/Potico.ph.jpg";
import BronzeSponsor1 from "../../assets/Bronze/HomeRoom Co-Working and Study Longue.jpg";
import BronzeSponsor2 from "../../assets/Bronze/Mind Zone España.jpg";
import SilverSponsor1 from "../../assets/Silver/AcadArena Educ Full White.png";
import SilverSponsor2 from "../../assets/Silver/POCKY.png";

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

export const bronzeSponsors: Sponsor[] = [
  {
    name: "Bronze Sponsor 1",
    img: BronzeSponsor1
  },
  {
    name: "Bronze Sponsor 2",
    img: BronzeSponsor2,
  },
  {
    name: "Bronze Sponsor 3",
    img: BronzeSponsor1,
  },
  {
    name: "Bronze Sponsor 4",
    img: BronzeSponsor2,
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