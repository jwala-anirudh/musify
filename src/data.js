import { v4 as uuidv4 } from "uuid";

import deathBed from "./audio/Death_Bed.mp3";
import dynamite from "./audio/Dynamite.mp3";
import mood from "./audio/Mood.mp3";
import stuckWithU from "./audio/Stuck_With_U.mp3";
import cradles from "./audio/Cradles.mp3";
import skechers from "./audio/Skechers.mp3";

function chillHop() {
  return [
    {
      name: "death bed (coffee for your head)",
      cover:
        "https://shdbdecdnems03.cdnsrv.jio.com/c.saavncdn.com/180/death-bed-English-2020-20200228133600-500x500.jpg",
      artist: "Powfu, beabadoobee",
      audio: deathBed,
      color: ["#ADA5CE", "#213045"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Dynamite",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/5/5f/BTS_-_Dynamite_%28official_cover%29.png",
      artist: "BTS",
      audio: dynamite,
      color: ["#FBE2E6", "#DD5B8C"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Mood",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/1/1d/24kGoldn_-_Mood.png",
      artist: "24kgoldn",
      audio: mood,
      color: ["#D888D3", "#070922"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Stuck with U",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/d/dc/Justin_Bieber_and_Ariana_Grande_-_Stuck_with_You.png",
      artist: "Ariana Grande, Justine Bieber",
      audio: stuckWithU,
      color: ["#F6F6EE", "#888984"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Cradles",
      cover:
        "https://shdbdecdnems09.cdnsrv.jio.com/c.saavncdn.com/585/Cradles-English-2019-20191028124508-500x500.jpg",
      artist: "Sub Urban",
      audio: cradles,
      color: ["#EDDD86", "#4A5760"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Skechers",
      cover:
        "https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",
      artist: "DripReport",
      audio: skechers,
      color: ["#DEC254", "#E18BB5"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
