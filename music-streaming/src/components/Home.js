import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "./carousel/Carousel";

function Home() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongs();
  }, []);

  async function fetchSongs() {
    const data = await fetch("/top_songs");
    const songsArr = await data.json();
    setSongs(songsArr);
  }
  console.log(songs);
  return <Carousel data={songs} />;
}

export default Home;
