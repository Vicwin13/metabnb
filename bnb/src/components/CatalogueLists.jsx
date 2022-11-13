import AdventureList from "./AdventureList";
import Catalogue from "./Catalogue";
import frame10 from "../images/Frame 151-10.png";
import frame11 from "../images/Frame 151-11.png";
import frame12 from "../images/Frame 151-12.png";
import frame13 from "../images/Frame 151-13.png";
import frame14 from "../images/Frame 151-14.png";
import frame15 from "../images/Frame 151-15.png";
import frame8 from "../images/Frame 151-8.png";
import frame9 from "../images/Frame 151-9.png";
import star from "../images/Star 2.svg";
import { useState } from "react";

const CatalogueList = () => {
  const [catalogues, setCatalogues] = useState([
    {
      frames: frame8,
      first: "Desert king",
      second: "1MBT per night",
      third: "2345km away",
      fourth: "available for 2 weeks stay",
      star: star,
      id: 8,
    },
    {
      frames: frame9,
      first: "Desert king",
      second: "8MBT per night",
      third: "2345km away",
      fourth: "available for 2 weeks stay",
      star: star,
      id: 9,
    },
    {
      frames: frame10,
      first: "Desert king",
      second: "1MBT per night",
      third: "2345km away",
      fourth: "available for 2 weeks stay",
      star: star,
      id: 10,
    },
    {
      frames: frame11,
      first: "Desert king",
      second: "1MBT per night",
      third: "2345km away",
      fourth: "available for 2 weeks stay",
      star: star,
      id: 11,
    },
    {
      frames: frame12,
      first: "Desert king",
      second: "1MBT per night",
      third: "2345km away",
      fourth: "available for 2 weeks stay",
      star: star,
      id: 12,
    },
    {
      frames: frame13,
      first: "Desert king",
      second: "1MBT per night",
      third: "2345km away",
      fourth: "available for 2 weeks stay",
      star: star,
      id: 13,
    },
    {
      frames: frame14,
      first: "Desert king",
      second: "1MBT per night",
      third: "2345km away",
      fourth: "available for 2 weeks stay",
      star: star,
      id: 14,
    },
    {
      frames: frame15,
      first: "Desert king",
      second: "1MBT per night",
      third: "2345km away",
      fourth: "available for 2 weeks stay",
      star: star,
      id: 15,
    },
  ]);

  return (
    <>
      <div className="adventure">
        <Catalogue catalogues={catalogues} />
      </div>
    </>
  );
};

export default CatalogueList;
