import React from "react";
import "./App.css";
import SongList from "./SongList";
import SongDetail from "./SongDetails";

function App() {
  return (
    <div className="container">
      <SongList />
      <SongDetail />
    </div>
  );
}

export default App;
