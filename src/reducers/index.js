import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { name: "Song1", length: "3:27" },
    { name: "Song2", length: "3:23" },
    { name: "Song3", length: "3:21" },
  ];
};

const selectedSongReducer = (
  selectedSong = { name: "", length: "" },
  action
) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
