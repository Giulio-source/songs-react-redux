import React from "react";
import { useSelector } from "react-redux";

function SongDetails() {
  const selectedSong = useSelector((state) => state.selectedSong);
  return (
    <div className="songdetail-container">
      <h3>{selectedSong.name}</h3>
      <p>{selectedSong.length}</p>
    </div>
  );
}

export default SongDetails;
