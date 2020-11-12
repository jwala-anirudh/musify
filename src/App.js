import React, { useState } from "react";

// Styling
import "./styles/app.scss";

// Components
import Player from "./components/Player";
import Song from "./components/Song";

// Data
import data from "./util";

const App = () => {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
    </div>
  );
};

export default App;
