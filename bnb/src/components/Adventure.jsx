import AdventureList from "./AdventureList";
import frames from "../images/Frame 151.png";
import frames1 from "../images/Frame 151-1.png";
import frames2 from "../images/Frame 151-2.png";
import frames3 from "../images/Frame 151-3.png";
import frames4 from "../images/Frame 151-4.png";
import frames5 from "../images/Frame 151-5.png";
import frames6 from "../images/Frame 151-6.png";
import frames7 from "../images/Frame 151-7.png";
import star from "../images/Star 2.svg";
import { useState } from "react";

const Adventure = () => {
  const [lists, setLists] = useState([
    {
      frames: frames,
      first: "Desert king",
      second: "1MBT per night",
      third: "2345km away",
      fourth: "available for 2 weeks stay",
      star: star,
      id: 1,
    },
    {
      frames: frames1,
      first: "Desert king",
      second: "1MBT per night",
      third: "2345km away",
      fourth: "available for 2 weeks stay",
      star: star,
      id: 2,
    },
    {
      frames: frames2,
      first: "Desert king",
      second: "1MBT per night",
      third: "2345km away",
      fourth: "available for 2 weeks stay",
      star: star,
      id: 3,
    },
    {
      frames: frames3,
      first: "Desert king",
      second: "1MBT per night",
      third: "2345km away",
      fourth: "available for 2 weeks stay",
      star: star,
      id: 4,
    },
    {
      frames: frames4,
      first: "Desert king",
      second: "1MBT per night",
      third: "2345km away",
      fourth: "available for 2 weeks stay",
      star: star,
      id: 5,
    },
    {
      frames: frames5,
      first: "Desert king",
      second: "1MBT per night",
      third: "2345km away",
      fourth: "available for 2 weeks stay",
      star: star,
      id: 6,
    },
    {
      frames: frames6,
      first: "Desert king",
      second: "1MBT per night",
      third: "2345km away",
      fourth: "available for 2 weeks stay",
      star: star,
      id: 7,
    },
    {
      frames: frames7,
      first: "Desert king",
      second: "1MBT per night",
      third: "2345km away",
      fourth: "available for 2 weeks stay",
      star: star,
      id: 7,
    },
  ]);

  return (
    <>
      <h2 style={{ textAlign: "center", padding: "2rem" }}>
        Inspiration for your next adventure
      </h2>

      <section className="adventure">
        <AdventureList lists={lists} />
      </section>
    </>
  );
};

export default Adventure;
