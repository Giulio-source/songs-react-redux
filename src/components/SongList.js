import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSong } from "../actions";

function SongList() {
  const songs = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  const renderedSongs = songs.map((song, index) => {
    return (
      <div
        key={index}
        className="songlist-item"
        onClick={() => dispatch(selectSong(song))}
      >
        <h3>{song.name}</h3>
        <p>Duration: {song.length}</p>
      </div>
    );
  });
  return <div className="songlist-container">{renderedSongs}</div>;
}

export default SongList;
